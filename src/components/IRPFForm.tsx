import { useState, useEffect } from "react";
import CollapsibleSection from "./CollapsibleSection";
import {
  CountryTaxData,
  WorkerType,
  CivilStatus,
  DisabilityLevel,
  PayPeriod,
  formatCurrency,
} from "../data/countries";
import {
  Globe,
  DollarSign,
  Briefcase,
  Heart,
  Baby,
  Users,
  Accessibility,
  Calculator,
  RotateCcw,
  Landmark,
  Percent,
  TrendingDown,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

interface IRPFInput {
  taxableIncome: number;
  country: CountryTaxData;
  workerType: WorkerType;
  civilStatus: CivilStatus;
  numChildren: number;
  numChildrenUnder3: number;
  exclusiveCustody: boolean;
  numAscendants65to75: number;
  numAscendantsOver75: number;
  taxpayerDisability: DisabilityLevel;
  taxpayerThirdPartyHelp: boolean;
}

interface IRPFResult {
  grossIncome: number;
  totalDeductions: number;
  taxableBase: number;
  taxByBrackets: { bracket: { min: number; max: number | null; rate: number }; tax: number; base: number }[];
  totalTax: number;
  effectiveRate: number;
  marginalRate: number;
  minimumPersonal: number;
  minimumFamily: number;
  deductions: { name: string; amount: number }[];
}

interface Props {
  country: CountryTaxData;
  onCalculate: (result: IRPFResult) => void;
}

export default function IRPFForm({ country, onCalculate }: Props) {
  // Input fields
  const [grossInput, setGrossInput] = useState<string>("");
  const [socialContributionsInput, setSocialContributionsInput] = useState<string>("");
  const [workerType, setWorkerType] = useState<WorkerType>("empleado");

  // Family data
  const [familyEnabled, setFamilyEnabled] = useState(false);
  const [civilStatus, setCivilStatus] = useState<CivilStatus>("soltero");
  const [numChildren, setNumChildren] = useState(0);
  const [numChildrenUnder3, setNumChildrenUnder3] = useState(0);
  const [exclusiveCustody, setExclusiveCustody] = useState(false);
  const [numAscendants65to75, setNumAscendants65to75] = useState(0);
  const [numAscendantsOver75, setNumAscendantsOver75] = useState(0);

  // Disability
  const [disabilityEnabled, setDisabilityEnabled] = useState(false);
  const [taxpayerDisability, setTaxpayerDisability] = useState<DisabilityLevel>("ninguna");
  const [taxpayerThirdPartyHelp, setTaxpayerThirdPartyHelp] = useState(false);

  // Calculate IRPF
  const calculateIRPF = () => {
    const grossIncome = parseFloat(grossInput) || 0;
    const socialContributions = parseFloat(socialContributionsInput) || 0;

    if (grossIncome <= 0) return null;

    let taxableBase = grossIncome - socialContributions;
    const deductions: { name: string; amount: number }[] = [];
    let minimumPersonal = 0;
    let minimumFamily = 0;

    // Apply minimum personal and family deductions based on country
    if (country.code === "ES") {
      // Spain IRPF
      minimumPersonal = country.personalMinimum || 5550;
      taxableBase = Math.max(0, taxableBase - minimumPersonal);
      deductions.push({ name: "Mínimo personal", amount: minimumPersonal });

      if (familyEnabled) {
        const fd = country.familyDeductions;

        // Spouse deduction
        if ((civilStatus === "casado" || civilStatus === "pareja_hecho") && fd.spouse > 0) {
          taxableBase = Math.max(0, taxableBase - fd.spouse);
          deductions.push({ name: "Mínimo por cónyuge", amount: fd.spouse });
          minimumFamily += fd.spouse;
        }

        // Children deductions
        if (numChildren > 0) {
          let childDed = 0;
          const under3 = Math.min(numChildrenUnder3, numChildren);
          const over3 = numChildren - under3;

          // First child
          if (under3 > 0) childDed += under3 * (fd.childUnder3 || 2700);
          if (over3 > 0) {
            for (let i = 0; i < over3; i++) {
              const childNum = (under3 > 0 ? 1 : 0) + i + 1;
              if (childNum === 1) childDed += fd.childUnder25 || 2400;
              else if (childNum === 2) childDed += fd.childUnder25 || 2400;
              else if (childNum === 3) childDed += (fd.childUnder25 || 2400) + (fd.thirdChildBonus || 400);
              else childDed += (fd.childUnder25 || 2400) + (fd.fourthPlusChildBonus || 500);
            }
          }

          // Single parent bonus
          if (civilStatus === "soltero" && fd.singleParentBonus > 0) {
            childDed += fd.singleParentBonus;
          }

          // Exclusive custody (50% more)
          if (exclusiveCustody) {
            childDed *= 1.5;
          }

          taxableBase = Math.max(0, taxableBase - childDed);
          deductions.push({ name: `Mínimo por ${numChildren} hijo(s)`, amount: childDed });
          minimumFamily += childDed;
        }

        // Ascendants
        if (numAscendants65to75 > 0 || numAscendantsOver75 > 0) {
          let ascDed = 0;
          if (numAscendants65to75 > 0 && fd.ascendant65to75 > 0) {
            ascDed += numAscendants65to75 * fd.ascendant65to75;
          }
          if (numAscendantsOver75 > 0 && fd.ascendantOver75 > 0) {
            ascDed += numAscendantsOver75 * fd.ascendantOver75;
          }
          taxableBase = Math.max(0, taxableBase - ascDed);
          deductions.push({ name: "Mínimo por ascendientes", amount: ascDed });
          minimumFamily += ascDed;
        }
      }

      // Disability deductions
      if (disabilityEnabled && taxpayerDisability !== "ninguna") {
        const dd = country.disabilityDeductions;
        let disDed = 0;
        if (taxpayerDisability === "33_65_sin") disDed = dd.level33_65_noMobility || 3000;
        else if (taxpayerDisability === "33_65_con") disDed = dd.level33_65_mobility || 9000;
        else if (taxpayerDisability === "65_mas") disDed = dd.level65plus || 12000;
        if (taxpayerThirdPartyHelp) disDed += dd.thirdPartyHelp || 3000;
        taxableBase = Math.max(0, taxableBase - disDed);
        deductions.push({ name: "Mínimo por discapacidad", amount: disDed });
      }

    } else if (country.code === "MX") {
      // Mexico ISR - simplified
      minimumPersonal = 0;

    } else if (country.code === "AR") {
      // Argentina Impuesto a las Ganancias
      minimumPersonal = country.personalMinimum || 1063500;
      taxableBase = Math.max(0, taxableBase - minimumPersonal);
      deductions.push({ name: "Mínimo no imponible", amount: minimumPersonal });

      if (familyEnabled) {
        const spouseDed = country.familyDeductions.spouse || 531750;
        if (civilStatus === "casado" || civilStatus === "pareja_hecho") {
          taxableBase = Math.max(0, taxableBase - spouseDed);
          deductions.push({ name: "Deducción cónyuge", amount: spouseDed });
          minimumFamily += spouseDed;
        }
        if (numChildren > 0) {
          const childDed = numChildren * (country.familyDeductions.childUnder25 || 531750);
          taxableBase = Math.max(0, taxableBase - childDed);
          deductions.push({ name: `Deducción ${numChildren} hijo(s)`, amount: childDed });
          minimumFamily += childDed;
        }
      }

    } else if (country.code === "CL") {
      // Chile - Impuesto Único Segunda Categoría
      // Use UTM value approximately 70,000 CLP
      const utm = 70000;
      const exemptLimit = 13.5 * utm;
      if (taxableBase <= exemptLimit) {
        deductions.push({ name: "Exento hasta 13,5 UTM", amount: taxableBase });
        taxableBase = 0;
      }

    } else if (country.code === "UY") {
      // Uruguay IRPF with BPC
      const bpc = 6177;
      minimumPersonal = 12 * bpc;
      taxableBase = Math.max(0, taxableBase - minimumPersonal);
      deductions.push({ name: "Mínimo no imponible (12 BPC)", amount: minimumPersonal });

      if (familyEnabled && numChildren > 0) {
        const childDed = numChildren * 20 * bpc;
        taxableBase = Math.max(0, taxableBase - childDed);
        deductions.push({ name: `Deducción ${numChildren} hijo(s) (20 BPC c/u)`, amount: childDed });
        minimumFamily += childDed;
      }

    } else {
      // Generic: apply personal minimum
      minimumPersonal = country.personalMinimum || 0;
      if (minimumPersonal > 0) {
        taxableBase = Math.max(0, taxableBase - minimumPersonal);
        deductions.push({ name: "Mínimo personal/exento", amount: minimumPersonal });
      }
    }

    // Calculate tax by brackets
    const taxByBrackets: IRPFResult["taxByBrackets"] = [];
    let remaining = taxableBase;
    let totalTax = 0;
    let lastRate = 0;

    for (const bracket of country.taxBrackets) {
      if (remaining <= 0) break;

      const bracketWidth = bracket.max ? bracket.max - bracket.min : 999999999;
      const baseInBracket = Math.min(remaining, bracketWidth);
      const tax = baseInBracket * bracket.rate;

      if (baseInBracket > 0) {
        taxByBrackets.push({
          bracket,
          tax,
          base: baseInBracket,
        });
        totalTax += tax;
        lastRate = bracket.rate;
      }
      remaining -= baseInBracket;
    }

    // Autonomous tax for Spain
    if (country.code === "ES" && country.autonomousBrackets) {
      let autoTax = 0;
      let autoRemaining = taxableBase;

      for (const bracket of country.autonomousBrackets) {
        if (autoRemaining <= 0) break;
        const bracketWidth = bracket.max ? bracket.max - bracket.min : 999999999;
        const baseInBracket = Math.min(autoRemaining, bracketWidth);
        autoTax += baseInBracket * bracket.rate;
        autoRemaining -= baseInBracket;
      }

      if (autoTax > 0) {
        totalTax += autoTax;
        deductions.push({ name: "IRPF autonómico", amount: autoTax });
      }
    }

    const totalDeductions = deductions.reduce((sum, d) => sum + d.amount, 0) + socialContributions;
    const effectiveRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;
    const marginalRate = lastRate * 100;

    return {
      grossIncome,
      totalDeductions,
      taxableBase,
      taxByBrackets,
      totalTax,
      effectiveRate,
      marginalRate,
      minimumPersonal,
      minimumFamily,
      deductions,
    };
  };

  const handleCalculate = () => {
    const result = calculateIRPF();
    if (result) {
      onCalculate(result);
    }
  };

  const handleClear = () => {
    setGrossInput("");
    setSocialContributionsInput("");
    setFamilyEnabled(false);
    setDisabilityEnabled(false);
    setNumChildren(0);
    setNumChildrenUnder3(0);
    setNumAscendants65to75(0);
    setNumAscendantsOver75(0);
  };

  const getTaxName = () => {
    const names: Record<string, string> = {
      ES: "IRPF",
      MX: "ISR",
      AR: "Impuesto a las Ganancias",
      CO: "Impuesto de Renta",
      CL: "Impuesto Único de 2ª Categoría",
      PE: "Impuesto a la Renta",
      VE: "ISLR",
      EC: "Impuesto a la Renta",
      BO: "RC-IVA",
      PY: "IRP",
      UY: "IRPF",
      GT: "ISR",
      HN: "ISR",
      SV: "ISR",
      NI: "IR",
      CR: "Impuesto sobre la Renta",
      PA: "ISR",
      DO: "ISR",
      CU: "Impuesto sobre Ingresos",
    };
    return names[country.code] || "Impuesto sobre la Renta";
  };

  const getTaxAuthority = () => {
    const auth: Record<string, string> = {
      ES: "AEAT (Agencia Tributaria)",
      MX: "SAT",
      AR: "ARCA (ex AFIP)",
      CO: "DIAN",
      CL: "SII",
      PE: "SUNAT",
      VE: "SENIAT",
      EC: "SRI",
      BO: "Impuestos Nacionales",
      PY: "SET",
      UY: "DGI",
    };
    return auth[country.code] || "Administración Tributaria";
  };

  return (
    <div className="space-y-4">
      {/* Country and tax info */}
      <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
        <span className="text-3xl">{country.flagSvg}</span>
        <div className="flex-1">
          <p className="text-white font-semibold text-lg">{country.name}</p>
          <p className="text-emerald-400 text-sm font-medium">{getTaxName()}</p>
          <p className="text-slate-500 text-xs">{getTaxAuthority()}</p>
        </div>
      </div>

      {/* Section 1: Income data - always visible */}
      <CollapsibleSection
        title="Datos del ingreso sujeto a impuesto"
        icon={<DollarSign className="w-5 h-5" />}
        defaultOpen={true}
        toggleable={false}
      >
        {/* Gross Income */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            Ingresos brutos anuales
          </label>
          <input
            type="number"
            value={grossInput}
            onChange={(e) => setGrossInput(e.target.value)}
            placeholder="Ej: 40.000"
            min="0"
            step="any"
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-lg"
          />
          <p className="text-slate-500 text-xs mt-1">
            Total de ingresos gravados antes de cualquier deducción
          </p>
        </div>

        {/* Social contributions (deductible) */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <TrendingDown className="w-4 h-4 text-red-400" />
            Cotizaciones a Seguridad Social (anuales)
          </label>
          <input
            type="number"
            value={socialContributionsInput}
            onChange={(e) => setSocialContributionsInput(e.target.value)}
            placeholder="Ej: 2.500"
            min="0"
            step="any"
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-lg"
          />
          <p className="text-slate-500 text-xs mt-1">
            Aportes a jubilación, salud, desempleo, etc. (son deducibles del IRPF en la mayoría de países)
          </p>
        </div>

        {/* Worker type */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            Tipo de contribuyente
          </label>
          <div className="grid grid-cols-3 gap-2">
            {([
              { value: "empleado" as WorkerType, label: "Asalariado" },
              { value: "autonomo" as WorkerType, label: "Autónomo" },
              { value: "funcionario" as WorkerType, label: "Funcionario" },
            ]).map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setWorkerType(opt.value)}
                className={`py-2.5 rounded-xl text-sm font-medium transition-all border ${
                  workerType === opt.value
                    ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                    : "bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-300"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </CollapsibleSection>

      {/* Section 2: Family data */}
      <CollapsibleSection
        title="Datos familiares (mínimos y deducciones)"
        icon={<Heart className="w-5 h-5" />}
        defaultOpen={false}
        toggleable={true}
        enabled={familyEnabled}
        onToggle={setFamilyEnabled}
      >
        {/* Civil status */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Situación civil
          </label>
          <div className="grid grid-cols-5 gap-2">
            {([
              { value: "soltero" as CivilStatus, label: "Soltero/a" },
              { value: "casado" as CivilStatus, label: "Casado/a" },
              { value: "pareja_hecho" as CivilStatus, label: "Pareja" },
              { value: "separado" as CivilStatus, label: "Separado/a" },
              { value: "viudo" as CivilStatus, label: "Viudo/a" },
            ]).map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setCivilStatus(opt.value)}
                className={`py-2 px-2 rounded-xl text-xs font-medium transition-all border ${
                  civilStatus === opt.value
                    ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                    : "bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-300"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Children */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <Baby className="w-4 h-4 text-emerald-400" />
            Número de hijos menores de 25 años
          </label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setNumChildren(Math.max(0, numChildren - 1))}
              className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl text-slate-300 hover:text-white text-lg font-bold"
            >
              -
            </button>
            <span className="text-xl font-bold text-white w-8 text-center">{numChildren}</span>
            <button
              type="button"
              onClick={() => setNumChildren(numChildren + 1)}
              className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl text-slate-300 hover:text-white text-lg font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Children under 3 (for Spain) */}
        {numChildren > 0 && country.code === "ES" && (
          <div className="animate-fade-in">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Hijos menores de 3 años
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setNumChildrenUnder3(Math.max(0, numChildrenUnder3 - 1))}
                className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl text-slate-300 hover:text-white text-lg font-bold"
              >
                -
              </button>
              <span className="text-xl font-bold text-white w-8 text-center">{numChildrenUnder3}</span>
              <button
                type="button"
                onClick={() => setNumChildrenUnder3(Math.min(numChildren, numChildrenUnder3 + 1))}
                className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl text-slate-300 hover:text-white text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>
        )}

        {/* Exclusive custody (Spain) */}
        {numChildren > 0 && country.code === "ES" && (
          <div className="animate-fade-in">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={exclusiveCustody}
                onChange={(e) => setExclusiveCustody(e.target.checked)}
                className="w-5 h-5 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-emerald-500/50 cursor-pointer"
              />
              <span className="text-slate-300 text-sm">Custodia exclusiva</span>
            </label>
          </div>
        )}

        {/* Ascendants (Spain) */}
        {country.code === "ES" && (
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <Users className="w-4 h-4 text-emerald-400" />
              Ascendientes a cargo
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">65-75 años</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setNumAscendants65to75(Math.max(0, numAscendants65to75 - 1))}
                    className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold text-white w-6 text-center">{numAscendants65to75}</span>
                  <button
                    type="button"
                    onClick={() => setNumAscendants65to75(numAscendants65to75 + 1)}
                    className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Más de 75 años</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setNumAscendantsOver75(Math.max(0, numAscendantsOver75 - 1))}
                    className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold text-white w-6 text-center">{numAscendantsOver75}</span>
                  <button
                    type="button"
                    onClick={() => setNumAscendantsOver75(numAscendantsOver75 + 1)}
                    className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </CollapsibleSection>

      {/* Section 3: Disability */}
      <CollapsibleSection
        title="Discapacidad del contribuyente"
        icon={<Accessibility className="w-5 h-5" />}
        defaultOpen={false}
        toggleable={true}
        enabled={disabilityEnabled}
        onToggle={setDisabilityEnabled}
      >
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Grado de discapacidad
          </label>
          <div className="space-y-2">
            {([
              { value: "ninguna" as DisabilityLevel, label: "Sin discapacidad" },
              { value: "33_65_sin" as DisabilityLevel, label: "33-65% sin movilidad reducida" },
              { value: "33_65_con" as DisabilityLevel, label: "33-65% con movilidad reducida" },
              { value: "65_mas" as DisabilityLevel, label: "65% o superior" },
            ]).map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border ${
                  taxpayerDisability === opt.value
                    ? "bg-emerald-500/10 border-emerald-500/50"
                    : "bg-slate-900 border-slate-700 hover:border-slate-600"
                }`}
              >
                <input
                  type="radio"
                  name="disability"
                  checked={taxpayerDisability === opt.value}
                  onChange={() => setTaxpayerDisability(opt.value)}
                  className="w-4 h-4 text-emerald-500"
                />
                <span className={taxpayerDisability === opt.value ? "text-white" : "text-slate-300"}>
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {taxpayerDisability !== "ninguna" && (
          <div className="animate-fade-in">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={taxpayerThirdPartyHelp}
                onChange={(e) => setTaxpayerThirdPartyHelp(e.target.checked)}
                className="w-5 h-5 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-emerald-500/50 cursor-pointer"
              />
              <span className="text-slate-300 text-sm">Necesita ayuda de terceras personas</span>
            </label>
          </div>
        )}
      </CollapsibleSection>

      {/* Warning about year */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="text-amber-300 font-medium">Año fiscal 2024-2025</p>
            <p className="text-slate-400 text-xs">
              Los tramos y mínimos pueden variar según la normativa vigente. Verifica siempre con {getTaxAuthority()}.
            </p>
          </div>
        </div>
      </div>

      {/* Calculate buttons */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={handleCalculate}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-200 active:scale-[0.98]"
        >
          <Landmark className="w-5 h-5" />
          Calcular {getTaxName()}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-3.5 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white rounded-xl hover:border-slate-600 transition-all"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
