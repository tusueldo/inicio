import { useState, useRef, useEffect } from "react";
import { countries, CountryTaxData } from "../data/countries";
import SalaryForm from "../components/SalaryForm";
import ResultsDisplay from "../components/ResultsDisplay";
import IRPFForm from "../components/IRPFForm";
import IRPFResults from "../components/IRPFResults";
import TaxReturnForm from "../components/TaxReturnForm";
import TaxReturnResults from "../components/TaxReturnResults";
import {
  Search,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  Globe,
  ChevronDown,
  Landmark,
  FileText,
} from "lucide-react";
import { SalaryResult, CalculationInput } from "../data/countries";

type Step = 1 | 2 | 3;
type Tool = "salary" | "irpf" | "taxreturn" | null;

interface IRPFResultData {
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

interface TaxReturnResultData {
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

export default function CalculatorPage() {
  const [step, setStep] = useState<Step>(1);
  const [selectedCountry, setSelectedCountry] = useState<CountryTaxData | null>(null);
  const [selectedTool, setSelectedTool] = useState<Tool>(null);
  const [salaryResult, setSalaryResult] = useState<{ result: SalaryResult; input: CalculationInput } | null>(null);
  const [irpfResult, setIrpfResult] = useState<IRPFResultData | null>(null);
  const [taxReturnResult, setTaxReturnResult] = useState<TaxReturnResultData | null>(null);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  const filtered = countries.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    function handleReset() {
      setStep(1);
      setSelectedCountry(null);
      setSelectedTool(null);
      setSalaryResult(null);
      setIrpfResult(null);
      setTaxReturnResult(null);
      setSearchQuery("");
    }
    window.addEventListener("resetCalculator", handleReset);
    return () => window.removeEventListener("resetCalculator", handleReset);
  }, []);

  const handleCountrySelect = (country: CountryTaxData) => {
    setSelectedCountry(country);
    setSearchQuery(country.name);
    setSearchOpen(false);
  };

  const goNext = () => {
    if (step === 1 && selectedCountry) setStep(2);
    else if (step === 2 && selectedTool) setStep(3);
  };

  const goBack = () => {
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
  };

  const startOver = () => {
    setStep(1);
    setSelectedCountry(null);
    setSelectedTool(null);
    setSalaryResult(null);
    setIrpfResult(null);
    setTaxReturnResult(null);
    setSearchQuery("");
  };

  const getTaxName = (code: string) => {
    const taxNames: Record<string, string> = {
      ES: "IRPF",
      MX: "ISR",
      AR: "Impuesto a las Ganancias",
      CO: "Impuesto de Renta",
      CL: "Impuesto Global Complementario",
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
    return taxNames[code] || "Impuesto sobre la Renta";
  };

  const getTaxAuthority = (code: string) => {
    const auth: Record<string, string> = {
      ES: "AEAT",
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
    return auth[code] || "Administración Tributaria";
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Step indicators */}
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {[
              { n: 1, label: "País" },
              { n: 2, label: "Herramienta" },
              { n: 3, label: "Datos" },
            ].map((s, i) => (
              <div key={s.n} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    step > s.n
                      ? "bg-emerald-500 text-white"
                      : step === s.n
                      ? "bg-emerald-500/20 text-emerald-400 ring-2 ring-emerald-500/50"
                      : "bg-slate-800 text-slate-500"
                  }`}
                >
                  {step > s.n ? "✓" : s.n}
                </div>
                <span
                  className={`text-sm font-medium hidden sm:inline transition-colors ${
                    step >= s.n ? "text-slate-200" : "text-slate-500"
                  }`}
                >
                  {s.label}
                </span>
                {i < 2 && (
                  <div
                    className={`w-8 sm:w-16 h-px mx-2 transition-colors ${
                      step > s.n ? "bg-emerald-500" : "bg-slate-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8">
        <div className="w-full max-w-xl">
          {/* Step 1: Country search */}
          {step === 1 && (
            <div className="text-center animate-fade-in">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
                  <Globe className="w-4 h-4" />
                  20 países hispanohablantes
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
                  ¿En qué país<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    trabajas?
                  </span>
                </h1>
                <p className="text-slate-400">
                  Selecciona tu país para calcular tu sueldo neto, IRPF o declaración
                </p>
              </div>

              {/* Search bar */}
              <div ref={searchRef} className="relative max-w-md mx-auto">
                <div
                  className={`flex items-center gap-3 bg-slate-800/80 border rounded-xl px-4 py-3.5 transition-all ${
                    searchOpen
                      ? "border-emerald-500 ring-2 ring-emerald-500/30"
                      : "border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Busca tu país..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSearchOpen(true);
                      if (selectedCountry) setSelectedCountry(null);
                    }}
                    onFocus={() => setSearchOpen(true)}
                    className="flex-1 bg-transparent text-white placeholder-slate-500 focus:outline-none text-lg"
                  />
                  {selectedCountry && (
                    <span className="text-xl flex-shrink-0">{selectedCountry.flagSvg}</span>
                  )}
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform flex-shrink-0 ${
                      searchOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown */}
                {searchOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50 max-h-72 overflow-y-auto animate-fade-in">
                    {filtered.length === 0 ? (
                      <div className="px-4 py-6 text-center text-slate-500 text-sm">
                        No se encontraron países
                      </div>
                    ) : (
                      filtered.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => handleCountrySelect(country)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-slate-700/50 ${
                            selectedCountry?.code === country.code
                              ? "bg-emerald-500/10"
                              : ""
                          }`}
                        >
                          <span className="text-2xl">{country.flagSvg}</span>
                          <div className="flex-1">
                            <p className="text-white font-medium">{country.name}</p>
                            <p className="text-slate-500 text-xs">
                              {country.currency} ({country.currencySymbol}) • {getTaxName(country.code)}
                            </p>
                          </div>
                          {selectedCountry?.code === country.code && (
                            <span className="text-emerald-400 text-xs font-medium">
                              Seleccionado
                            </span>
                          )}
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* Next button */}
              <div className="mt-8 max-w-md mx-auto">
                <button
                  onClick={goNext}
                  disabled={!selectedCountry}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 ${
                    selectedCountry
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-[0.98]"
                      : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                  }`}
                >
                  Siguiente
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Tool selector */}
          {step === 2 && (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <p className="text-slate-400 text-sm mb-1">
                  {selectedCountry?.flagSvg} {selectedCountry?.name}
                </p>
                <h2 className="text-3xl font-bold text-white">
                  ¿Qué quieres calcular?
                </h2>
              </div>

              <div className="space-y-3 max-w-md mx-auto">
                {[
                  {
                    id: "taxreturn" as Tool,
                    label: "Renta",
                    desc: "Calcula si te devuelven o tienes que pagar, con todos tus ingresos y deducciones",
                    icon: <FileText className="w-6 h-6" />,
                  },
                  {
                    id: "irpf" as Tool,
                    label: `Calculadora de ${selectedCountry ? getTaxName(selectedCountry.code) : "IRPF"}`,
                    desc: "Calcula el impuesto exacto a pagar según tramos y deducciones",
                    icon: <Landmark className="w-6 h-6" />,
                  },
                  {
                    id: "salary" as Tool,
                    label: "Calculadora de Sueldo Neto",
                    desc: "Calcula tu sueldo después de impuestos y cotizaciones",
                    icon: <DollarSign className="w-6 h-6" />,
                  },
                ].map((tool) => {
                  const isSelected = selectedTool === tool.id;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => setSelectedTool(tool.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left ${
                        isSelected
                          ? "bg-teal-500/10 border-teal-500 shadow-lg shadow-teal-500/10"
                          : "bg-slate-800/50 border-slate-700 hover:border-slate-600 hover:bg-slate-800"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected ? "bg-teal-500/20 text-teal-400" : "bg-slate-700 text-slate-400"
                      }`}>
                        {tool.icon}
                      </div>
                      <div>
                        <p className={`font-semibold transition-colors ${isSelected ? "text-teal-300" : "text-white"}`}>
                          {tool.label}
                        </p>
                        <p className="text-slate-500 text-sm mt-0.5">{tool.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-3 mt-8 max-w-md mx-auto">
                <button
                  onClick={goBack}
                  className="px-5 py-3.5 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white rounded-xl hover:border-slate-600 transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goNext}
                  disabled={!selectedTool}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 ${
                    selectedTool
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-[0.98]"
                      : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                  }`}
                >
                  Siguiente
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Form + results */}
          {step === 3 && selectedCountry && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver
                </button>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="text-lg">{selectedCountry.flagSvg}</span>
                  {selectedCountry.name} • {
                    selectedTool === "taxreturn" ? "Renta" :
                    selectedTool === "irpf" ? getTaxName(selectedCountry.code) : "Sueldo Neto"
                  }
                </div>
                <button
                  onClick={startOver}
                  className="text-slate-500 hover:text-slate-300 transition-colors text-sm"
                >
                  Empezar de nuevo
                </button>
              </div>

              {/* Tax Return Form */}
              {selectedTool === "taxreturn" && (
                <>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5">
                    <TaxReturnForm
                      country={selectedCountry}
                      onCalculate={setTaxReturnResult}
                    />
                  </div>

                  {taxReturnResult && taxReturnResult.totalIncome > 0 && (
                    <div className="mt-6">
                      <TaxReturnResults
                        country={selectedCountry}
                        result={taxReturnResult}
                      />
                    </div>
                  )}
                </>
              )}

              {/* IRPF Form */}
              {selectedTool === "irpf" && (
                <>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5">
                    <IRPFForm
                      country={selectedCountry}
                      onCalculate={setIrpfResult}
                    />
                  </div>

                  {irpfResult && irpfResult.grossIncome > 0 && (
                    <div className="mt-6">
                      <IRPFResults
                        country={selectedCountry}
                        result={irpfResult}
                      />
                    </div>
                  )}
                </>
              )}

              {/* Salary Form */}
              {selectedTool === "salary" && (
                <>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5">
                    <SalaryForm
                      country={selectedCountry}
                      onCalculate={(result, input) => setSalaryResult({ result, input })}
                    />
                  </div>

                  {salaryResult && salaryResult.result.grossAnnual > 0 && (
                    <div className="mt-6">
                      <ResultsDisplay
                        country={selectedCountry}
                        result={salaryResult.result}
                        input={salaryResult.input}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
