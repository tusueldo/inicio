import { useState } from "react";
import CollapsibleSection from "./CollapsibleSection";
import {
  CountryTaxData,
  WorkerType,
  CivilStatus,
  DisabilityLevel,
  formatCurrency,
} from "../data/countries";
import {
  DollarSign,
  Briefcase,
  Building,
  TrendingUp,
  Heart,
  Baby,
  Users,
  Accessibility,
  Calculator,
  RotateCcw,
  Landmark,
  Percent,
  CreditCard,
  PiggyBank,
  Home,
  GraduationCap,
  Banknote,
  Receipt,
  AlertTriangle,
  FileText,
} from "lucide-react";

interface TaxReturnInput {
  // Income
  employmentIncome: number;
  selfEmploymentIncome: number;
  rentalIncome: number;
  investmentIncome: number;
  capitalGains: number;
  otherIncome: number;
  // Withholdings already made
  employmentWithholding: number;
  selfEmploymentPayments: number;
  otherWithholdings: number;
  // Deductions
  socialSecurityPaid: number;
  pensionContributions: number;
  mortgageInterest: number;
  medicalExpenses: number;
  educationExpenses: number;
  charitableDonations: number;
  professionalFees: number;
  // Personal
  country: CountryTaxData;
  workerType: WorkerType;
  civilStatus: CivilStatus;
  age: number;
  numChildren: number;
  numAscendantsSenior: number;
  taxpayerDisability: DisabilityLevel;
  jointFiling: boolean;
}

interface TaxReturnResult {
  totalIncome: number;
  totalDeductions: number;
  taxableBase: number;
  taxByBrackets: { bracket: { min: number; max: number | null; rate: number }; tax: number; base: number }[];
  totalTaxLiability: number;
  totalWithholdings: number;
  taxDueOrRefund: number;
  effectiveRate: number;
  marginalRate: number;
  isRefund: boolean;
  breakdown: {
    income: { source: string; amount: number }[];
    deductions: { name: string; amount: number }[];
    credits: { name: string; amount: number }[];
  };
}

interface Props {
  country: CountryTaxData;
  onCalculate: (result: TaxReturnResult) => void;
}

export default function TaxReturnForm({ country, onCalculate }: Props) {
  // Income fields
  const [employmentIncome, setEmploymentIncome] = useState<string>("");
  const [selfEmploymentIncome, setSelfEmploymentIncome] = useState<string>("");
  const [rentalIncome, setRentalIncome] = useState<string>("");
  const [investmentIncome, setInvestmentIncome] = useState<string>("");
  const [capitalGains, setCapitalGains] = useState<string>("");
  const [otherIncome, setOtherIncome] = useState<string>("");

  // Withholdings already made
  const [employmentWithholding, setEmploymentWithholding] = useState<string>("");
  const [selfEmploymentPayments, setSelfEmploymentPayments] = useState<string>("");
  const [otherWithholdings, setOtherWithholdings] = useState<string>("");

  // Deductible expenses
  const [socialSecurityPaid, setSocialSecurityPaid] = useState<string>("");
  const [pensionContributions, setPensionContributions] = useState<string>("");
  const [mortgageInterest, setMortgageInterest] = useState<string>("");
  const [medicalExpenses, setMedicalExpenses] = useState<string>("");
  const [educationExpenses, setEducationExpenses] = useState<string>("");
  const [charitableDonations, setCharitableDonations] = useState<string>("");
  const [professionalFees, setProfessionalFees] = useState<string>("");

  // Personal situation
  const [workerType, setWorkerType] = useState<WorkerType>("empleado");
  const [civilStatus, setCivilStatus] = useState<CivilStatus>("soltero");
  const [age, setAge] = useState<string>("35");
  const [numChildren, setNumChildren] = useState(0);
  const [numAscendantsSenior, setNumAscendantsSenior] = useState(0);
  const [taxpayerDisability, setTaxpayerDisability] = useState<DisabilityLevel>("ninguna");
  const [jointFiling, setJointFiling] = useState(false);

  // Toggle sections
  const [showSelfEmployment, setShowSelfEmployment] = useState(false);
  const [showRentalIncome, setShowRentalIncome] = useState(false);
  const [showInvestmentIncome, setShowInvestmentIncome] = useState(false);
  const [showCapitalGains, setShowCapitalGains] = useState(false);
  const [showDeductions, setShowDeductions] = useState(false);
  const [showFamily, setShowFamily] = useState(false);

  const parseNum = (val: string) => parseFloat(val) || 0;

  const calculateTaxReturn = (): TaxReturnResult | null => {
    // Parse all values
    const empIncome = parseNum(employmentIncome);
    const selfEmpIncome = parseNum(selfEmploymentIncome);
    const rentIncome = parseNum(rentalIncome);
    const invIncome = parseNum(investmentIncome);
    const capGains = parseNum(capitalGains);
    const otherInc = parseNum(otherIncome);

    const empWithhold = parseNum(employmentWithholding);
    const selfEmpPayments = parseNum(selfEmploymentPayments);
    const otherWithhold = parseNum(otherWithholdings);

    const socialSec = parseNum(socialSecurityPaid);
    const pension = parseNum(pensionContributions);
    const mortgage = parseNum(mortgageInterest);
    const medical = parseNum(medicalExpenses);
    const education = parseNum(educationExpenses);
    const donations = parseNum(charitableDonations);
    const fees = parseNum(professionalFees);

    const userAge = parseNum(age);

    // Calculate total income
    const totalIncome = empIncome + selfEmpIncome + rentIncome + invIncome + capGains + otherInc;

    if (totalIncome <= 0) return null;

    const incomeBreakdown: { source: string; amount: number }[] = [];
    if (empIncome > 0) incomeBreakdown.push({ source: "Rendimientos del trabajo", amount: empIncome });
    if (selfEmpIncome > 0) incomeBreakdown.push({ source: "Actividades económicas", amount: selfEmpIncome });
    if (rentIncome > 0) incomeBreakdown.push({ source: "Rendimientos del capital inmobiliario", amount: rentIncome });
    if (invIncome > 0) incomeBreakdown.push({ source: "Rendimientos del capital mobiliario", amount: invIncome });
    if (capGains > 0) incomeBreakdown.push({ source: "Ganancias patrimoniales", amount: capGains });
    if (otherInc > 0) incomeBreakdown.push({ source: "Otros ingresos", amount: otherInc });

    // Calculate deductions
    const deductions: { name: string; amount: number }[] = [];
    let totalDeductions = 0;

    // Security social contributions - always deductible
    if (socialSec > 0) {
      deductions.push({ name: "Cotizaciones Seguridad Social", amount: socialSec });
      totalDeductions += socialSec;
    }

    // Personal minimum
    let personalMinimum = country.personalMinimum || 0;
    const fd = country.familyDeductions;

    // Age-based reductions (Spain)
    if (country.code === "ES") {
      if (userAge >= 65 && userAge < 75) {
        personalMinimum += 650;
      } else if (userAge >= 75) {
        personalMinimum += 900;
      }
    }
    if (personalMinimum > 0 && !jointFiling) {
      deductions.push({ name: "Mínimo personal", amount: personalMinimum });
      totalDeductions += personalMinimum;
    }

    // Family minimums
    if (showFamily && !jointFiling) {
      // Spouse deduction
      if ((civilStatus === "casado" || civilStatus === "pareja_hecho") && fd.spouse > 0) {
        deductions.push({ name: "Mínimo por cónyuge", amount: fd.spouse });
        totalDeductions += fd.spouse;
      }

      // Children
      if (numChildren > 0) {
        let childDed = 0;
        for (let i = 0; i < numChildren; i++) {
          if (i === 0) childDed += fd.childUnder25 || 2400;
          else if (i === 1) childDed += fd.childUnder25 || 2400;
          else if (i === 2) childDed += (fd.childUnder25 || 2400) + (fd.thirdChildBonus || 400);
          else childDed += (fd.childUnder25 || 2400) + (fd.fourthPlusChildBonus || 500);
        }
        deductions.push({ name: `Mínimo por ${numChildren} hijo(s)`, amount: childDed });
        totalDeductions += childDed;
      }

      // Ascendants
      if (numAscendantsSenior > 0 && fd.ascendantOver75 > 0) {
        const ascDed = numAscendantsSenior * fd.ascendantOver75;
        deductions.push({ name: "Mínimo por ascendientes", amount: ascDed });
        totalDeductions += ascDed;
      }

      // Disability
      if (taxpayerDisability !== "ninguna") {
        const dd = country.disabilityDeductions;
        let disDed = 0;
        if (taxpayerDisability === "33_65_sin") disDed = dd.level33_65_noMobility || 3000;
        else if (taxpayerDisability === "33_65_con") disDed = dd.level33_65_mobility || 9000;
        else if (taxpayerDisability === "65_mas") disDed = dd.level65plus || 12000;
        deductions.push({ name: "Mínimo por discapacidad", amount: disDed });
        totalDeductions += disDed;
      }
    }

    // Other deductions (if enabled)
    if (showDeductions) {
      if (pension > 0) {
        const pensionDed = Math.min(pension, 1500 * (jointFiling ? 2 : 1));
        deductions.push({ name: "Aportaciones planes de pensiones", amount: pensionDed });
        totalDeductions += pensionDed;
      }
      if (mortgage > 0 && country.code === "ES") {
        deductions.push({ name: "Intereses hipoteca vivienda habitual", amount: mortgage });
        totalDeductions += mortgage;
      }
      if (medical > 0) {
        deductions.push({ name: "Gastos médicos deducibles", amount: medical });
        totalDeductions += medical;
      }
      if (education > 0) {
        deductions.push({ name: "Gastos educación", amount: education });
        totalDeductions += education;
      }
      if (donations > 0) {
        deductions.push({ name: "Donativos", amount: donations });
        totalDeductions += donations;
      }
      if (fees > 0) {
        deductions.push({ name: "Cuotas sindicales/colegiales", amount: fees });
        totalDeductions += fees;
      }
    }

    // Calculate taxable base
    const taxableBase = Math.max(0, totalIncome - totalDeductions);

    // Calculate tax by brackets
    const taxByBrackets: TaxReturnResult["taxByBrackets"] = [];
    let remaining = taxableBase;
    let totalTaxLiability = 0;
    let lastRate = 0;

    for (const bracket of country.taxBrackets) {
      if (remaining <= 0) break;
      const bracketWidth = bracket.max ? bracket.max - bracket.min : Infinity;
      const baseInBracket = Math.min(remaining, bracketWidth);
      const tax = baseInBracket * bracket.rate;

      if (baseInBracket > 0) {
        taxByBrackets.push({ bracket, tax, base: baseInBracket });
        totalTaxLiability += tax;
        lastRate = bracket.rate;
      }
      remaining -= baseInBracket;
    }

    // Total withholdings/payments already made
    const totalWithholdings = empWithhold + selfEmpPayments + otherWithhold;

    const credits: { name: string; amount: number }[] = [];
    if (empWithhold > 0) credits.push({ name: "Retenciones trabajo", amount: empWithhold });
    if (selfEmpPayments > 0) credits.push({ name: "Pagos a cuenta autónomos", amount: selfEmpPayments });
    if (otherWithhold > 0) credits.push({ name: "Otras retenciones", amount: otherWithhold });

    // Final calculation: tax due or refund
    const taxDueOrRefund = Math.abs(totalTaxLiability - totalWithholdings);
    const isRefund = totalWithholdings > totalTaxLiability;

    const effectiveRate = totalIncome > 0 ? (totalTaxLiability / totalIncome) * 100 : 0;
    const marginalRate = lastRate * 100;

    return {
      totalIncome,
      totalDeductions,
      taxableBase,
      taxByBrackets,
      totalTaxLiability,
      totalWithholdings,
      taxDueOrRefund,
      effectiveRate,
      marginalRate,
      isRefund,
      breakdown: {
        income: incomeBreakdown,
        deductions,
        credits,
      },
    };
  };

  const handleCalculate = () => {
    const result = calculateTaxReturn();
    if (result) {
      onCalculate(result);
    }
  };

  const handleClear = () => {
    setEmploymentIncome("");
    setSelfEmploymentIncome("");
    setRentalIncome("");
    setInvestmentIncome("");
    setCapitalGains("");
    setOtherIncome("");
    setEmploymentWithholding("");
    setSelfEmploymentPayments("");
    setOtherWithholdings("");
    setSocialSecurityPaid("");
    setPensionContributions("");
    setMortgageInterest("");
    setMedicalExpenses("");
    setEducationExpenses("");
    setCharitableDonations("");
    setProfessionalFees("");
    setNumChildren(0);
    setNumAscendantsSenior(0);
  };

  const getTaxName = () => {
    const names: Record<string, string> = {
      ES: "IRPF - Declaración de la Renta",
      MX: "ISR - Declaración Anual",
      AR: "Impuesto a las Ganancias",
      CO: "Impuesto de Renta",
      CL: "Impuesto Global Complementario",
      PE: "Impuesto a la Renta",
      VE: "ISLR",
      EC: "Impuesto a la Renta",
      BO: "RC-IVA",
      PY: "IRP",
      UY: "IRPF",
    };
    return names[country.code] || "Impuesto sobre la Renta";
  };

  const getTaxAuthority = () => {
    const auth: Record<string, string> = {
      ES: "Agencia Tributaria (AEAT)",
      MX: "SAT",
      AR: "ARCA",
      CO: "DIAN",
      CL: "SII",
      PE: "SUNAT",
      VE: "SENIAT",
      EC: "SRI",
      BO: "Imp. Nacionales",
      PY: "SET",
      UY: "DGI",
    };
    return auth[country.code] || "Administración Tributaria";
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
        <span className="text-3xl">{country.flagSvg}</span>
        <div className="flex-1">
          <p className="text-white font-semibold text-lg">{country.name}</p>
          <p className="text-teal-400 text-sm font-medium">{getTaxName()}</p>
          <p className="text-slate-500 text-xs">{getTaxAuthority()}</p>
        </div>
      </div>

      {/* SECTION 1: Employment Income - Always visible */}
      <CollapsibleSection
        title="Ingresos del trabajo (empleo)"
        icon={<Briefcase className="w-5 h-5" />}
        defaultOpen={true}
        toggleable={false}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              Ingresos brutos anuales
            </label>
            <input
              type="number"
              value={employmentIncome}
              onChange={(e) => setEmploymentIncome(e.target.value)}
              placeholder="Ej: 35000"
              min="0"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <TrendingUp className="w-4 h-4 text-red-400" />
              Retenciones practicadas
            </label>
            <input
              type="number"
              value={employmentWithholding}
              onChange={(e) => setEmploymentWithholding(e.target.value)}
              placeholder="Ej: 5200"
              min="0"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>
        </div>
        <p className="text-slate-500 text-xs mt-2">
          Salario bruto anual + todas las retenciones que ya te han descontado
        </p>
      </CollapsibleSection>

      {/* SECTION 2: Self-employment Income */}
      <CollapsibleSection
        title="Ingresos por cuenta propia (autónomos/freelance)"
        icon={<Banknote className="w-5 h-5" />}
        defaultOpen={false}
        toggleable={true}
        enabled={showSelfEmployment}
        onToggle={setShowSelfEmployment}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Ingresos brutos anuales
            </label>
            <input
              type="number"
              value={selfEmploymentIncome}
              onChange={(e) => setSelfEmploymentIncome(e.target.value)}
              placeholder="Ej: 25000"
              min="0"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Pagos a cuenta realizados
            </label>
            <input
              type="number"
              value={selfEmploymentPayments}
              onChange={(e) => setSelfEmploymentPayments(e.target.value)}
              placeholder="Ej: 3800"
              min="0"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>
        </div>
      </CollapsibleSection>

      {/* SECTION 3: Rental Income */}
      <CollapsibleSection
        title="Ingresos por alquileres"
        icon={<Building className="w-5 h-5" />}
        defaultOpen={false}
        toggleable={true}
        enabled={showRentalIncome}
        onToggle={setShowRentalIncome}
      >
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Rendimientos netos del capital inmobiliario
          </label>
          <input
            type="number"
            value={rentalIncome}
            onChange={(e) => setRentalIncome(e.target.value)}
            placeholder="Ingresos - gastos deducibles"
            min="0"
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          />
        </div>
      </CollapsibleSection>

      {/* SECTION 4: Investment Income */}
      <CollapsibleSection
        title="Rendimientos del capital (intereses, dividendos)"
        icon={<PiggyBank className="w-5 h-5" />}
        defaultOpen={false}
        toggleable={true}
        enabled={showInvestmentIncome}
        onToggle={setShowInvestmentIncome}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Intereses y dividendos
            </label>
            <input
              type="number"
              value={investmentIncome}
              onChange={(e) => setInvestmentIncome(e.target.value)}
              placeholder="Ej: 1200"
              min="0"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Retenciones sobre capital
            </label>
            <input
              type="number"
              value={otherWithholdings}
              onChange={(e) => setOtherWithholdings(e.target.value)}
              placeholder="Ej: 240"
              min="0"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>
        </div>
      </CollapsibleSection>

      {/* SECTION 5: Capital Gains */}
      <CollapsibleSection
        title="Ganancias patrimoniales (ventas)"
        icon={<TrendingUp className="w-5 h-5" />}
        defaultOpen={false}
        toggleable={true}
        enabled={showCapitalGains}
        onToggle={setShowCapitalGains}
      >
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Ganancias netas (ventas de acciones, inmuebles, etc.)
          </label>
          <input
            type="number"
            value={capitalGains}
            onChange={(e) => setCapitalGains(e.target.value)}
            placeholder="Precio venta - precio compra"
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          />
        </div>
      </CollapsibleSection>

      {/* SECTION 6: Deductible Expenses */}
      <CollapsibleSection
        title="Gastos y deducciones desgravables"
        icon={<Receipt className="w-5 h-5" />}
        defaultOpen={false}
        toggleable={true}
        enabled={showDeductions}
        onToggle={setShowDeductions}
      >
        <div className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <CreditCard className="w-4 h-4 text-red-400" />
              Cotizaciones a Seguridad Social
            </label>
            <input
              type="number"
              value={socialSecurityPaid}
              onChange={(e) => setSocialSecurityPaid(e.target.value)}
              placeholder="Total aportado durante el año"
              min="0"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <PiggyBank className="w-4 h-4 text-amber-400" />
              Aportaciones a planes de pensiones
            </label>
            <input
              type="number"
              value={pensionContributions}
              onChange={(e) => setPensionContributions(e.target.value)}
              placeholder="Máx. 1.500€ individual / 8.500€ conjunto"
              min="0"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>

          {country.code === "ES" && (
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                <Home className="w-4 h-4 text-blue-400" />
                Intereses de hipoteca (vivienda habitual)
              </label>
              <input
                type="number"
                value={mortgageInterest}
                onChange={(e) => setMortgageInterest(e.target.value)}
                placeholder="Solo si compraste antes de 2013"
                min="0"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                Gastos de educación
              </label>
              <input
                type="number"
                value={educationExpenses}
                onChange={(e) => setEducationExpenses(e.target.value)}
                placeholder="Colegiaturas, cursos"
                min="0"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Gastos médicos
              </label>
              <input
                type="number"
                value={medicalExpenses}
                onChange={(e) => setMedicalExpenses(e.target.value)}
                placeholder="Sin reembolso"
                min="0"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Donativos a entidades
            </label>
            <input
              type="number"
              value={charitableDonations}
              onChange={(e) => setCharitableDonations(e.target.value)}
              placeholder="ONGs reconocidas"
              min="0"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Cuotas sindicales/colegiales
            </label>
            <input
              type="number"
              value={professionalFees}
              onChange={(e) => setProfessionalFees(e.target.value)}
              placeholder="Sindicatos, colegios profesionales"
              min="0"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>
        </div>
      </CollapsibleSection>

      {/* SECTION 7: Personal Situation */}
      <CollapsibleSection
        title="Situación personal y familiar"
        icon={<Heart className="w-5 h-5" />}
        defaultOpen={false}
        toggleable={true}
        enabled={showFamily}
        onToggle={setShowFamily}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Estado civil
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
                      : "bg-slate-900 border-slate-700 text-slate-400"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Edad
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Edad"
              min="18"
              max="120"
              className="w-24 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500"
            />
            <p className="text-slate-500 text-xs mt-1">
              Mayores de 65/75 años pueden tener reducciones adicionales
            </p>
          </div>

          {(country.code === "ES") && (
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={jointFiling}
                onChange={(e) => setJointFiling(e.target.checked)}
                className="w-5 h-5 rounded border-slate-600 bg-slate-900 text-emerald-500"
              />
              <span className="text-slate-300 text-sm">
                Tributación conjunta (declaración conjunta con cónyuge)
              </span>
            </label>
          )}

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <Baby className="w-4 h-4 text-emerald-400" />
              Hijos menores de 25 años
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setNumChildren(Math.max(0, numChildren - 1))}
                className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl text-slate-300 text-lg font-bold"
              >
                -
              </button>
              <span className="text-xl font-bold text-white w-8 text-center">{numChildren}</span>
              <button
                type="button"
                onClick={() => setNumChildren(numChildren + 1)}
                className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl text-slate-300 text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <Users className="w-4 h-4 text-emerald-400" />
              Ascendientes mayores de 75 años a cargo
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setNumAscendantsSenior(Math.max(0, numAscendantsSenior - 1))}
                className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl text-slate-300 text-lg font-bold"
              >
                -
              </button>
              <span className="text-xl font-bold text-white w-8 text-center">{numAscendantsSenior}</span>
              <button
                type="button"
                onClick={() => setNumAscendantsSenior(numAscendantsSenior + 1)}
                className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl text-slate-300 text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>

          {numAscendantsSenior > 0 && (
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                <Users className="w-4 h-4 text-emerald-400" />
                Ascendientes mayores de 75 años a cargo
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setNumAscendantsSenior(Math.max(0, numAscendantsSenior - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl text-slate-300 text-lg font-bold"
                >
                  -
                </button>
                <span className="text-xl font-bold text-white w-8 text-center">{numAscendantsSenior}</span>
                <button
                  type="button"
                  onClick={() => setNumAscendantsSenior(numAscendantsSenior + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl text-slate-300 text-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </CollapsibleSection>

      {/* Warning */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="text-amber-300 font-medium">Cálculo orientativo</p>
            <p className="text-slate-400 text-xs">
              Esta calculadora es una estimación basada en la normativa fiscal {new Date().getFullYear()}.
              Verifica con {getTaxAuthority()} antes de presentar tu declaración oficial.
            </p>
          </div>
        </div>
      </div>

      {/* Calculate */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={handleCalculate}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-200 active:scale-[0.98]"
        >
          <FileText className="w-5 h-5" />
          Calcular declaración
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
