import { useState, useEffect } from "react";
import CollapsibleSection from "./CollapsibleSection";
import {
  CountryTaxData,
  WorkerType,
  CivilStatus,
  DisabilityLevel,
  PayPeriod,
  CalculationInput,
  calculateSalary,
  SalaryResult,
} from "../data/countries";
import {
  Globe,
  DollarSign,
  Calendar,
  Briefcase,
  Award,
  MapPin,
  Heart,
  Baby,
  Users,
  Accessibility,
  Calculator,
  RotateCcw,
} from "lucide-react";

interface Props {
  country: CountryTaxData;
  onCalculate: (result: SalaryResult, input: CalculationInput) => void;
}

export default function SalaryForm({ country, onCalculate }: Props) {
  // Section 1: General data
  const [grossInput, setGrossInput] = useState<string>("");
  const [periodicity, setPeriodicity] = useState<"mensual" | "anual">("mensual");
  const [workerType, setWorkerType] = useState<WorkerType>("empleado");
  const [category, setCategory] = useState<string>(country.categories[0]?.code || "");
  const [payPeriod, setPayPeriod] = useState<PayPeriod>(12);
  const [region, setRegion] = useState<string>(country.regions[0]?.code || "");

  // Section 2: Family data
  const [familyEnabled, setFamilyEnabled] = useState(false);
  const [civilStatus, setCivilStatus] = useState<CivilStatus>("soltero");
  const [numChildren, setNumChildren] = useState(0);
  const [numChildrenUnder3, setNumChildrenUnder3] = useState(0);
  const [exclusiveCustody, setExclusiveCustody] = useState(false);
  const [sharedDeduction, setSharedDeduction] = useState(false);
  const [numAscendantsUnder65, setNumAscendantsUnder65] = useState(0);
  const [numAscendants65to75, setNumAscendants65to75] = useState(0);
  const [numAscendantsOver75, setNumAscendantsOver75] = useState(0);

  // Section 3: Taxpayer data
  const [taxpayerEnabled, setTaxpayerEnabled] = useState(false);
  const [taxpayerDisability, setTaxpayerDisability] = useState<DisabilityLevel>("ninguna");
  const [taxpayerThirdPartyHelp, setTaxpayerThirdPartyHelp] = useState(false);

  // Section 4: Descendants disability
  const [descendantsEnabled, setDescendantsEnabled] = useState(false);
  const [numDescendantsDisability33_65, setNumDescendantsDisability33_65] = useState(0);
  const [numDescendantsDisability33_65Mobility, setNumDescendantsDisability33_65Mobility] = useState(0);
  const [numDescendantsDisability65plus, setNumDescendantsDisability65plus] = useState(0);

  // Section 5: Ascendants disability
  const [ascendantsEnabled, setAscendantsEnabled] = useState(false);
  const [numAscendantsDisability33_65, setNumAscendantsDisability33_65] = useState(0);
  const [numAscendantsDisability33_65Mobility, setNumAscendantsDisability33_65Mobility] = useState(0);
  const [numAscendantsDisability65plus, setNumAscendantsDisability65plus] = useState(0);

  // Reset category and region when country changes
  useEffect(() => {
    setCategory(country.categories[0]?.code || "");
    setRegion(country.regions[0]?.code || "");
  }, [country]);

  const totalAscendants = numAscendantsUnder65 + numAscendants65to75 + numAscendantsOver75;

  const showDescendantsSection = numChildren > 0 && familyEnabled;
  const showAscendantsSection = totalAscendants > 0 && familyEnabled;

  const handleCalculate = () => {
    const value = parseFloat(grossInput);
    if (isNaN(value) || value <= 0) return;

    const grossAnnual = periodicity === "mensual" ? value * payPeriod : value;

    const input: CalculationInput = {
      grossAnnual,
      country,
      workerType,
      periodicity,
      payPeriod,
      region,
      category,
      familyEnabled,
      civilStatus,
      numChildren,
      numChildrenUnder3,
      exclusiveCustody,
      sharedDeduction,
      numAscendantsUnder65,
      numAscendants65to75,
      numAscendantsOver75,
      taxpayerEnabled,
      taxpayerDisability,
      taxpayerThirdPartyHelp,
      descendantsEnabled,
      numDescendantsDisability33_65,
      numDescendantsDisability33_65Mobility,
      numDescendantsDisability65plus,
      ascendantsEnabled,
      numAscendantsDisability33_65,
      numAscendantsDisability33_65Mobility,
      numAscendantsDisability65plus,
    };

    const result = calculateSalary(input);
    onCalculate(result, input);
  };

  const handleClear = () => {
    setGrossInput("");
    setFamilyEnabled(false);
    setTaxpayerEnabled(false);
    setDescendantsEnabled(false);
    setAscendantsEnabled(false);
    setNumChildren(0);
    setNumChildrenUnder3(0);
    setNumAscendantsUnder65(0);
    setNumAscendants65to75(0);
    setNumAscendantsOver75(0);
    onCalculate(
      calculateSalary({
        grossAnnual: 0,
        country,
        workerType,
        periodicity,
        payPeriod,
        region,
        category,
        familyEnabled: false,
        civilStatus,
        numChildren: 0,
        numChildrenUnder3: 0,
        exclusiveCustody: false,
        sharedDeduction: false,
        numAscendantsUnder65: 0,
        numAscendants65to75: 0,
        numAscendantsOver75: 0,
        taxpayerEnabled: false,
        taxpayerDisability: "ninguna",
        taxpayerThirdPartyHelp: false,
        descendantsEnabled: false,
        numDescendantsDisability33_65: 0,
        numDescendantsDisability33_65Mobility: 0,
        numDescendantsDisability65plus: 0,
        ascendantsEnabled: false,
        numAscendantsDisability33_65: 0,
        numAscendantsDisability33_65Mobility: 0,
        numAscendantsDisability65plus: 0,
      }),
      {} as CalculationInput
    );
  };

  // Get region label based on country
  const getRegionLabel = () => {
    switch (country.code) {
      case "ES": return "Comunidad autónoma";
      case "MX": return "Estado";
      case "AR": return "Provincia";
      case "CO": return "Departamento";
      case "CL": return "Región";
      case "PE": return "Departamento";
      case "VE": return "Estado";
      case "EC": return "Provincia";
      case "BO": return "Departamento";
      case "PY": return "Departamento";
      case "UY": return "Departamento";
      case "GT": return "Departamento";
      case "HN": return "Departamento";
      case "SV": return "Departamento";
      case "NI": return "Departamento";
      case "CR": return "Provincia";
      case "PA": return "Provincia";
      case "DO": return "Provincia";
      case "CU": return "Provincia";
      default: return "Región / Provincia";
    }
  };

  return (
    <div className="space-y-4">
      {/* Country badge */}
      <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
        <span className="text-3xl">{country.flagSvg}</span>
        <div>
          <p className="text-white font-semibold text-lg">{country.name}</p>
          <p className="text-slate-400 text-sm">
            {country.currency} ({country.currencySymbol})
          </p>
        </div>
      </div>

      {/* Section 1: General data - always visible */}
      <CollapsibleSection
        title="Datos generales y situación laboral"
        icon={<Globe className="w-5 h-5" />}
        defaultOpen={true}
        toggleable={false}
      >
        {/* Salary */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            Sueldo bruto
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={grossInput}
              onChange={(e) => setGrossInput(e.target.value)}
              placeholder="Ej: 3.000"
              min="0"
              step="any"
              className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-lg"
            />
            <div className="flex gap-1">
              {(["mensual", "anual"] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriodicity(p)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                    periodicity === p
                      ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                      : "bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-300"
                  }`}
                >
                  {p === "mensual" ? "Mensual" : "Anual"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Worker type */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            Tipo de trabajador
          </label>
          <div className="grid grid-cols-3 gap-2">
            {([
              { value: "empleado" as WorkerType, label: "Por cuenta ajena" },
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

        {/* Category */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <Award className="w-4 h-4 text-emerald-400" />
            Categoría profesional
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
          >
            {country.categories.map((cat) => (
              <option key={cat.code} value={cat.code}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Pay periods */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <Calendar className="w-4 h-4 text-emerald-400" />
            Número de pagas al año
          </label>
          <div className="grid grid-cols-3 gap-2">
            {([12, 13, 14] as PayPeriod[]).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPayPeriod(p)}
                className={`py-2.5 rounded-xl text-sm font-medium transition-all border ${
                  payPeriod === p
                    ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                    : "bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-300"
                }`}
              >
                {p} pagas
              </button>
            ))}
          </div>
        </div>

        {/* Region */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            {getRegionLabel()}
          </label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
          >
            {country.regions.map((r) => (
              <option key={r.code} value={r.code}>
                {r.name}
              </option>
            ))}
          </select>
        </div>
      </CollapsibleSection>

      {/* Section 2: Family data */}
      <CollapsibleSection
        title="Datos familiares"
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
              { value: "pareja_hecho" as CivilStatus, label: "Pareja de hecho" },
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

        {/* Children count */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <Baby className="w-4 h-4 text-emerald-400" />
            Número de hijos o descendientes menores de 25 años a cargo
          </label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setNumChildren(Math.max(0, numChildren - 1))}
              className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl text-slate-300 hover:text-white transition-colors text-lg font-bold"
            >
              -
            </button>
            <span className="text-xl font-bold text-white w-8 text-center">{numChildren}</span>
            <button
              type="button"
              onClick={() => setNumChildren(numChildren + 1)}
              className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl text-slate-300 hover:text-white transition-colors text-lg font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Children under 3 */}
        {numChildren > 0 && (
          <div className="animate-fade-in">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              De ellos, cuántos son menores de 3 años
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setNumChildrenUnder3(Math.max(0, numChildrenUnder3 - 1))}
                className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl text-slate-300 hover:text-white transition-colors text-lg font-bold"
              >
                -
              </button>
              <span className="text-xl font-bold text-white w-8 text-center">{numChildrenUnder3}</span>
              <button
                type="button"
                onClick={() => setNumChildrenUnder3(Math.min(numChildren, numChildrenUnder3 + 1))}
                className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl text-slate-300 hover:text-white transition-colors text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>
        )}

        {/* Custody */}
        {numChildren > 0 && country.code === "ES" && (
          <div className="animate-fade-in">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={exclusiveCustody}
                onChange={(e) => setExclusiveCustody(e.target.checked)}
                className="w-5 h-5 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-emerald-500/50 cursor-pointer"
              />
              <span className="text-slate-300 text-sm">
                Custodia exclusiva a efectos fiscales
              </span>
            </label>
          </div>
        )}

        {/* Shared deduction */}
        {numChildren > 0 && country.code === "ES" && (
          <div className="animate-fade-in">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={sharedDeduction}
                onChange={(e) => setSharedDeduction(e.target.checked)}
                className="w-5 h-5 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-emerald-500/50 cursor-pointer"
              />
              <span className="text-slate-300 text-sm">
                El contribuyente aplica mínimos por descendientes compartidos
              </span>
            </label>
          </div>
        )}

        {/* Ascendants */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <Users className="w-4 h-4 text-emerald-400" />
            Número de ascendientes (padres/abuelos) a cargo
          </label>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-slate-500 mb-1">Menores de 65 años</label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setNumAscendantsUnder65(Math.max(0, numAscendantsUnder65 - 1))}
                  className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
                >
                  -
                </button>
                <span className="text-lg font-bold text-white w-6 text-center">{numAscendantsUnder65}</span>
                <button
                  type="button"
                  onClick={() => setNumAscendantsUnder65(numAscendantsUnder65 + 1)}
                  className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">Entre 65 y 75 años</label>
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
              <label className="block text-xs text-slate-500 mb-1">Mayores de 75 años</label>
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
      </CollapsibleSection>

      {/* Section 3: Taxpayer data */}
      <CollapsibleSection
        title="Datos del contribuyente (discapacidad)"
        icon={<Accessibility className="w-5 h-5" />}
        defaultOpen={false}
        toggleable={true}
        enabled={taxpayerEnabled}
        onToggle={setTaxpayerEnabled}
      >
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Grado de discapacidad del contribuyente
          </label>
          <div className="space-y-2">
            {([
              { value: "ninguna" as DisabilityLevel, label: "Sin discapacidad reconocida" },
              { value: "33_65_sin" as DisabilityLevel, label: "Entre 33% y 65% sin movilidad reducida" },
              { value: "33_65_con" as DisabilityLevel, label: "Entre 33% y 65% con movilidad reducida" },
              { value: "65_mas" as DisabilityLevel, label: "Igual o superior al 65%" },
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
                  name="taxpayerDisability"
                  checked={taxpayerDisability === opt.value}
                  onChange={() => setTaxpayerDisability(opt.value)}
                  className="w-4 h-4 text-emerald-500 focus:ring-emerald-500/50"
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
              <span className="text-slate-300 text-sm">
                Recibe ayuda de terceras personas
              </span>
            </label>
          </div>
        )}
      </CollapsibleSection>

      {/* Section 4: Descendants disability */}
      <CollapsibleSection
        title="Discapacidad de descendientes a cargo"
        icon={<Baby className="w-5 h-5" />}
        defaultOpen={false}
        toggleable={true}
        enabled={descendantsEnabled}
        onToggle={setDescendantsEnabled}
        visible={showDescendantsSection}
        badge={numChildren > 0 ? `${numChildren} hijo${numChildren > 1 ? "s" : ""}` : undefined}
      >
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-slate-500 mb-1">Discapacidad 33-65% sin movilidad</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setNumDescendantsDisability33_65(Math.max(0, numDescendantsDisability33_65 - 1))}
                className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
              >
                -
              </button>
              <span className="text-lg font-bold text-white w-6 text-center">{numDescendantsDisability33_65}</span>
              <button
                type="button"
                onClick={() => setNumDescendantsDisability33_65(numDescendantsDisability33_65 + 1)}
                className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">Discapacidad 33-65% con movilidad</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setNumDescendantsDisability33_65Mobility(Math.max(0, numDescendantsDisability33_65Mobility - 1))}
                className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
              >
                -
              </button>
              <span className="text-lg font-bold text-white w-6 text-center">{numDescendantsDisability33_65Mobility}</span>
              <button
                type="button"
                onClick={() => setNumDescendantsDisability33_65Mobility(numDescendantsDisability33_65Mobility + 1)}
                className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">Discapacidad 65% o más</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setNumDescendantsDisability65plus(Math.max(0, numDescendantsDisability65plus - 1))}
                className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
              >
                -
              </button>
              <span className="text-lg font-bold text-white w-6 text-center">{numDescendantsDisability65plus}</span>
              <button
                type="button"
                onClick={() => setNumDescendantsDisability65plus(numDescendantsDisability65plus + 1)}
                className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Section 5: Ascendants disability */}
      <CollapsibleSection
        title="Discapacidad de ascendientes a cargo"
        icon={<Users className="w-5 h-5" />}
        defaultOpen={false}
        toggleable={true}
        enabled={ascendantsEnabled}
        onToggle={setAscendantsEnabled}
        visible={showAscendantsSection}
        badge={totalAscendants > 0 ? `${totalAscendants} ascendiente${totalAscendants > 1 ? "s" : ""}` : undefined}
      >
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-slate-500 mb-1">Discapacidad 33-65% sin movilidad</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setNumAscendantsDisability33_65(Math.max(0, numAscendantsDisability33_65 - 1))}
                className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
              >
                -
              </button>
              <span className="text-lg font-bold text-white w-6 text-center">{numAscendantsDisability33_65}</span>
              <button
                type="button"
                onClick={() => setNumAscendantsDisability33_65(numAscendantsDisability33_65 + 1)}
                className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">Discapacidad 33-65% con movilidad</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setNumAscendantsDisability33_65Mobility(Math.max(0, numAscendantsDisability33_65Mobility - 1))}
                className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
              >
                -
              </button>
              <span className="text-lg font-bold text-white w-6 text-center">{numAscendantsDisability33_65Mobility}</span>
              <button
                type="button"
                onClick={() => setNumAscendantsDisability33_65Mobility(numAscendantsDisability33_65Mobility + 1)}
                className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">Discapacidad 65% o más</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setNumAscendantsDisability65plus(Math.max(0, numAscendantsDisability65plus - 1))}
                className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
              >
                -
              </button>
              <span className="text-lg font-bold text-white w-6 text-center">{numAscendantsDisability65plus}</span>
              <button
                type="button"
                onClick={() => setNumAscendantsDisability65plus(numAscendantsDisability65plus + 1)}
                className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Calculate buttons */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={handleCalculate}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 active:scale-[0.98]"
        >
          <Calculator className="w-5 h-5" />
          Calcular sueldo neto
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
