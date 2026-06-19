import { CountryTaxData, formatCurrency } from "../data/countries";
import {
  Landmark,
  TrendingDown,
  Percent,
  ArrowRight,
  CheckCircle2,
  Printer,
  Info,
  BarChart3,
} from "lucide-react";

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
  result: IRPFResult;
}

export default function IRPFResults({ country, result }: Props) {
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
    };
    return names[country.code] || "Impuesto sobre la Renta";
  };

  const getTaxAuthority = () => {
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
    return auth[country.code] || "Adm. Tributaria";
  };

  const fmt = (n: number) => formatCurrency(n, country);

  const handlePrint = () => {
    const bracketRows = result.taxByBrackets
      .map(
        (b) =>
          `<div class="row"><span class="label">Tramo ${(b.bracket.rate * 100).toFixed(0)}% (${fmt(b.bracket.min)} - ${b.bracket.max ? fmt(b.bracket.max) : "..."})</span><span class="value">${fmt(b.tax)}</span></div>`
      )
      .join("");

    const deductionRows = result.deductions
      .map(
        (d) =>
          `<div class="row"><span class="label">${d.name}</span><span class="value" style="color:#64748b">- ${fmt(d.amount)}</span></div>`
      )
      .join("");

    const html = `
      <html>
        <head>
          <title>Cálculo ${getTaxName()} - ${country.name}</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; color: #1e293b; }
            h1 { color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px; }
            .meta { color: #64748b; font-size: 14px; margin-bottom: 20px; }
            .highlight { background: #f0fdfa; padding: 24px; border-radius: 10px; text-align: center; margin: 24px 0; border: 2px solid #0d9488; }
            .highlight .amount { font-size: 36px; font-weight: bold; color: #0d9488; }
            .section { margin: 20px 0; padding: 16px; background: #f8fafc; border-radius: 8px; }
            .section h3 { margin-top: 0; color: #334155; font-size: 14px; text-transform: uppercase; }
            .row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
            .label { color: #475569; }
            .value { font-weight: bold; }
            .warning { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; margin: 20px 0; font-size: 12px; }
            .footer { text-align: center; color: #94a3b8; font-size: 12px; margin-top: 30px; }
          </style>
        </head>
        <body>
          <h1>Cálculo de ${getTaxName()}</h1>
          <div class="meta">
            <p><strong>País:</strong> ${country.flagSvg} ${country.name}</p>
            <p><strong>Impuesto:</strong> ${getTaxName()} (${getTaxAuthority()})</p>
            <p><strong>Fecha:</strong> ${new Date().toLocaleDateString("es-ES")}</p>
          </div>
          <div class="highlight">
            <p style="color:#64748b;font-size:14px;margin-bottom:4px">${getTaxName()} a pagar</p>
            <p class="amount">${fmt(result.totalTax)}</p>
            <p style="color:#64748b;font-size:14px;margin-top:8px">Tipo efectivo: ${result.effectiveRate.toFixed(2)}% | Tipo marginal: ${result.marginalRate.toFixed(2)}%</p>
          </div>
          <div class="section">
            <h3>Cálculo de la base imponible</h3>
            <div class="row"><span class="label">Ingresos brutos</span><span class="value">${fmt(result.grossIncome)}</span></div>
            ${deductionRows}
            <div class="row" style="border-top:2px solid #0d9488;font-weight:bold">
              <span class="label">Base imponible</span>
              <span class="value">${fmt(result.taxableBase)}</span>
            </div>
          </div>
          ${bracketRows ? `<div class="section"><h3>Impuesto por tramos</h3>${bracketRows}<div class="row" style="border-top:2px solid #0d9488;font-weight:bold"><span class="label">Total ${getTaxName()}</span><span class="value" style="color:#dc2626">${fmt(result.totalTax)}</span></div></div>` : ""}
          <div class="warning">
            <strong>Aviso:</strong> Cálculo orientativo basado en la normativa fiscal ${new Date().getFullYear()}. Verifica con ${getTaxAuthority()} para confirmar los valores oficiales vigentes.
          </div>
          <div class="footer">Calculadora de ${getTaxName()} | ${new Date().toLocaleDateString("es-ES")}</div>
        </body>
      </html>
    `;
    const w = window.open("", "_blank");
    if (w) { w.document.write(html); w.document.close(); w.print(); }
  };

  const bracketColors = [
    "bg-teal-500",
    "bg-emerald-500",
    "bg-amber-500",
    "bg-orange-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Main Result */}
      <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/30 rounded-2xl p-6 text-center">
        <p className="text-teal-300/80 text-sm font-medium uppercase tracking-wider mb-1">
          {getTaxName()} a pagar
        </p>
        <p className="text-4xl sm:text-5xl font-bold text-teal-400 mb-3">
          {fmt(result.totalTax)}
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full text-sm">
            <Percent className="w-4 h-4 text-amber-400" />
            <span className="text-slate-400">Efectivo:</span>
            <span className="text-amber-400 font-semibold">{result.effectiveRate.toFixed(2)}%</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full text-sm">
            <BarChart3 className="w-4 h-4 text-purple-400" />
            <span className="text-slate-400">Marginal:</span>
            <span className="text-purple-400 font-semibold">{result.marginalRate.toFixed(2)}%</span>
          </div>
        </div>
      </div>

      {/* Tax info */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
        <div className="flex items-center gap-3">
          <Landmark className="w-5 h-5 text-teal-400" />
          <div>
            <p className="text-white font-medium">{getTaxName()}</p>
            <p className="text-slate-500 text-xs">Organismo: {getTaxAuthority()}</p>
          </div>
        </div>
      </div>

      {/* Calculation summary */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5 space-y-3">
        <h3 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-teal-400" />
          Cálculo de la base imponible
        </h3>

        <div className="flex items-center justify-between py-2">
          <span className="text-slate-300">Ingresos brutos anuales</span>
          <span className="text-white font-semibold">{fmt(result.grossIncome)}</span>
        </div>

        {result.deductions.length > 0 && (
          <div className="border-t border-slate-700 pt-3 space-y-2">
            <p className="text-slate-400 text-xs uppercase tracking-wider">Deducciones aplicadas</p>
            {result.deductions.map((d, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-400">{d.name}</span>
                </div>
                <span className="text-emerald-400">- {fmt(d.amount)}</span>
              </div>
            ))}
          </div>
        )}

        <div className="border-t-2 border-teal-500/50 pt-3">
          <div className="flex items-center justify-between">
            <span className="text-teal-300 font-semibold">Base imponible</span>
            <span className="text-teal-400 font-bold text-xl">{fmt(result.taxableBase)}</span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Cantidad sobre la que se aplica el impuesto por tramos
          </p>
        </div>
      </div>

      {/* Tax brackets */}
      {result.taxByBrackets.length > 0 && (
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5 space-y-3">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
            Impuesto por tramos
          </h3>

          <div className="space-y-2">
            {result.taxByBrackets.map((b, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${bracketColors[i % bracketColors.length]}`}
                    />
                    <span className="text-slate-300">
                      Tramo {(b.bracket.rate * 100).toFixed(2)}%
                    </span>
                  </div>
                  <span className="text-white font-medium">{fmt(b.tax)}</span>
                </div>
                <div className="pl-6 text-xs text-slate-500 mt-0.5">
                  Base: {fmt(b.bracket.min)} - {b.bracket.max ? fmt(b.bracket.max) : "..."} → {fmt(b.base)}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-700 flex items-center justify-between">
            <span className="text-slate-400 text-sm">Total {getTaxName()}</span>
            <span className="text-red-400 font-bold text-lg">{fmt(result.totalTax)}</span>
          </div>
        </div>
      )}

      {/* Visual bar */}
      {result.taxByBrackets.length > 0 && (
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Distribución del impuesto por tramos
          </h3>
          <div className="h-8 rounded-full overflow-hidden flex">
            {result.taxByBrackets.map((b, i) => {
              const pct = (b.base / result.taxableBase) * 100;
              return (
                <div
                  key={i}
                  className={`${bracketColors[i % bracketColors.length]} transition-all duration-700 flex items-center justify-center`}
                  style={{ width: `${Math.max(0, pct).toFixed(1)}%` }}
                  title={`${(b.bracket.rate * 100).toFixed(2)}%: ${fmt(b.tax)}`}
                />
              );
            })}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-slate-400">
            {result.taxByBrackets.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${bracketColors[i % bracketColors.length]}`} />
                {(b.bracket.rate * 100).toFixed(2)}%
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="text-amber-300 font-medium">Cálculo orientativo</p>
            <p className="text-slate-400 text-xs">
              Este resultado es una estimación basada en la normativa fiscal {new Date().getFullYear()}.
              Verifica siempre con {getTaxAuthority()} para confirmar los valores oficiales.
              No sustituye asesoría fiscal profesional.
            </p>
          </div>
        </div>
      </div>

      {/* Print */}
      <button
        onClick={handlePrint}
        className="w-full flex items-center justify-center gap-2 py-3 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white rounded-xl hover:border-slate-600 transition-all"
      >
        <Printer className="w-4 h-4" />
        Imprimir cálculo
      </button>
    </div>
  );
}
