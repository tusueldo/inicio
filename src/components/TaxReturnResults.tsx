import { CountryTaxData, formatCurrency } from "../data/countries";
import {
  Landmark,
  TrendingUp,
  TrendingDown,
  Percent,
  ArrowRight,
  CheckCircle2,
  Printer,
  Info,
  BarChart3,
  ArrowDownCircle,
  ArrowUpCircle,
  AlertTriangle,
} from "lucide-react";

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
  result: TaxReturnResult;
}

export default function TaxReturnResults({ country, result }: Props) {
  const getTaxName = () => {
    const names: Record<string, string> = {
      ES: "IRPF",
      MX: "ISR",
      AR: "Impuesto a las Ganancias",
      CO: "Impuesto de Renta",
      CL: "Impuesto Global Complementario",
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
      UY: "DGI",
    };
    return auth[country.code] || "Adm. Tributaria";
  };

  const fmt = (n: number) => formatCurrency(n, country);

  const handlePrint = () => {
    const incomeRows = result.breakdown.income
      .map((i) => `<div class="row"><span class="label">${i.source}</span><span class="value">${fmt(i.amount)}</span></div>`)
      .join("");

    const deductionRows = result.breakdown.deductions
      .map((d) => `<div class="row"><span class="label">${d.name}</span><span class="value" style="color:#10b981">- ${fmt(d.amount)}</span></div>`)
      .join("");

    const bracketRows = result.taxByBrackets
      .map((b) => `<div class="row"><span class="label">Tramo ${(b.bracket.rate * 100).toFixed(0)}%</span><span class="value">${fmt(b.tax)}</span></div>`)
      .join("");

    const creditRows = result.breakdown.credits
      .map((c) => `<div class="row"><span class="label">${c.name}</span><span class="value" style="color:#64748b">- ${fmt(c.amount)}</span></div>`)
      .join("");

    const html = `
      <html>
        <head>
          <title>Declaración ${getTaxName()} - ${country.name}</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 700px; margin: 40px auto; padding: 20px; color: #1e293b; }
            h1 { color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px; }
            .meta { color: #64748b; font-size: 14px; margin-bottom: 20px; }
            .result-box { padding: 32px; border-radius: 12px; text-align: center; margin: 24px 0; }
            .result-box.refund { background: #ecfdf5; border: 3px solid #10b981; }
            .result-box.due { background: #fef2f2; border: 3px solid #ef4444; }
            .result-box .amount { font-size: 42px; font-weight: bold; }
            .result-box.refund .amount { color: #059669; }
            .result-box.due .amount { color: #dc2626; }
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
          <h1>Resultado de la Declaración ${getTaxName()}</h1>
          <div class="meta">
            <p><strong>País:</strong> ${country.flagSvg} ${country.name}</p>
            <p><strong>Administración:</strong> ${getTaxAuthority()}</p>
            <p><strong>Fecha cálculo:</strong> ${new Date().toLocaleDateString("es-ES")}</p>
          </div>

          <div class="result-box ${result.isRefund ? 'refund' : 'due'}">
            <p style="color:#64748b;font-size:16px;margin-bottom:8px">
              ${result.isRefund ? 'A DEVOLVER' : 'A PAGAR'}
            </p>
            <p class="amount">${fmt(result.taxDueOrRefund)}</p>
            <p style="color:#64748b;font-size:14px;margin-top:12px">
              Tipo efectivo: ${result.effectiveRate.toFixed(2)}% | Tipo marginal: ${result.marginalRate.toFixed(2)}%
            </p>
          </div>

          <div class="section">
            <h3>1. Ingresos declarados</h3>
            ${incomeRows}
            <div class="row" style="border-top:2px solid #334155;font-weight:bold">
              <span class="label">Total ingresos</span>
              <span class="value">${fmt(result.totalIncome)}</span>
            </div>
          </div>

          <div class="section">
            <h3>2. Deducciones aplicadas</h3>
            ${deductionRows}
            <div class="row" style="border-top:2px solid #10b981;font-weight:bold">
              <span class="label">Total deducciones</span>
              <span class="value" style="color:#10b981">- ${fmt(result.totalDeductions)}</span>
            </div>
          </div>

          <div class="section">
            <h3>3. Base imponible</h3>
            <div class="row" style="font-size:18px;font-weight:bold">
              <span class="label">Base para calcular ${getTaxName()}</span>
              <span class="value">${fmt(result.taxableBase)}</span>
            </div>
          </div>

          <div class="section">
            <h3>4. ${getTaxName()} por tramos</h3>
            ${bracketRows}
            <div class="row" style="border-top:2px solid #dc2626;font-weight:bold">
              <span class="label">Total ${getTaxName()}</span>
              <span class="value" style="color:#dc2626">${fmt(result.totalTaxLiability)}</span>
            </div>
          </div>

          <div class="section">
            <h3>5. Retenciones y pagos a cuenta</h3>
            ${creditRows}
            <div class="row" style="border-top:2px solid #64748b;font-weight:bold">
              <span class="label">Total retenido</span>
              <span class="value">${fmt(result.totalWithholdings)}</span>
            </div>
          </div>

          <div class="section">
            <h3>6. Resultado final</h3>
            <div class="row">
              <span class="label">Impuesto calculado</span>
              <span class="value" style="color:#dc2626">${fmt(result.totalTaxLiability)}</span>
            </div>
            <div class="row">
              <span class="label">Menos: Retenciones</span>
              <span class="value" style="color:#64748b">- ${fmt(result.totalWithholdings)}</span>
            </div>
            <div class="row" style="border-top:3px solid ${result.isRefund ? '#10b981' : '#dc2626'};font-size:20px;font-weight:bold;padding-top:16px;margin-top:8px">
              <span class="label">${result.isRefund ? 'Resultado: a devolver' : 'Resultado: a pagar'}</span>
              <span class="value" style="color:${result.isRefund ? '#10b981' : '#dc2626'}">${fmt(result.taxDueOrRefund)}</span>
            </div>
          </div>

          <div class="warning">
            <strong>Aviso importante:</strong> Este cálculo es orientativo y no sustituye la declaración oficial.
            Verifica los datos con el simulador oficial de ${getTaxAuthority()} antes de presentar tu declaración.
            Año fiscal de referencia: ${new Date().getFullYear()}.
          </div>

          <div class="footer">
            Calculadora de Declaración de la Renta | ${new Date().toLocaleDateString("es-ES")}
          </div>
        </body>
      </html>
    `;

    const w = window.open("", "_blank");
    if (w) { w.document.write(html); w.document.close(); w.print(); }
  };

  const bracketColors = ["bg-teal-500", "bg-emerald-500", "bg-amber-500", "bg-orange-500", "bg-red-500", "bg-purple-500"];

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Main Result Box */}
      <div
        className={`rounded-2xl p-8 text-center border-2 ${
          result.isRefund
            ? "bg-emerald-500/10 border-emerald-500"
            : "bg-red-500/10 border-red-500"
        }`}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          {result.isRefund ? (
            <ArrowDownCircle className="w-6 h-6 text-emerald-400" />
          ) : (
            <ArrowUpCircle className="w-6 h-6 text-red-400" />
          )}
          <span
            className={`text-sm font-semibold uppercase tracking-wider ${
              result.isRefund ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {result.isRefund ? "A DEVOLVER" : "A PAGAR"}
          </span>
        </div>

        <p
          className={`text-5xl sm:text-6xl font-bold mb-3 ${
            result.isRefund ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {fmt(result.taxDueOrRefund)}
        </p>

        <p className="text-slate-400 text-sm">
          {result.isRefund
            ? "Hacienda te devuelve esta cantidad"
            : "Debes ingresar esta cantidad"}
        </p>

        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full text-sm">
            <Percent className="w-4 h-4 text-amber-400" />
            <span className="text-slate-400">Tipo efectivo:</span>
            <span className="text-amber-400 font-semibold">{result.effectiveRate.toFixed(2)}%</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full text-sm">
            <BarChart3 className="w-4 h-4 text-purple-400" />
            <span className="text-slate-400">Marginal:</span>
            <span className="text-purple-400 font-semibold">{result.marginalRate.toFixed(2)}%</span>
          </div>
        </div>
      </div>

      {/* Calculation breakdown */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5 space-y-4">
        <h3 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
          <Landmark className="w-4 h-4 text-teal-400" />
          Desglose del cálculo
        </h3>

        {/* 1. Total Income */}
        <div className="space-y-2">
          <div className="flex items-center justify-between py-2 border-b border-slate-700">
            <span className="text-slate-300 font-medium">1. Total ingresos</span>
            <span className="text-white font-bold text-lg">{fmt(result.totalIncome)}</span>
          </div>
          {result.breakdown.income.map((inc, i) => (
            <div key={i} className="flex items-center justify-between text-sm pl-4">
              <span className="text-slate-500">{inc.source}</span>
              <span className="text-slate-400">{fmt(inc.amount)}</span>
            </div>
          ))}
        </div>

        {/* 2. Deductions */}
        <div className="space-y-2">
          <div className="flex items-center justify-between py-2 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-300 font-medium">2. Menos: Deducciones</span>
            </div>
            <span className="text-emerald-400 font-bold">- {fmt(result.totalDeductions)}</span>
          </div>
          {result.breakdown.deductions.map((ded, i) => (
            <div key={i} className="flex items-center justify-between text-sm pl-4">
              <span className="text-slate-500">{ded.name}</span>
              <span className="text-emerald-400/70">- {fmt(ded.amount)}</span>
            </div>
          ))}
        </div>

        {/* 3. Taxable Base */}
        <div className="flex items-center justify-between py-3 rounded-xl bg-teal-500/10 px-4">
          <span className="text-teal-300 font-semibold">3. Base imponible</span>
          <span className="text-teal-400 font-bold text-xl">{fmt(result.taxableBase)}</span>
        </div>

        {/* 4. Tax by brackets */}
        {result.taxByBrackets.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b border-slate-700">
              <span className="text-slate-300 font-medium">4. {getTaxName()} calculado</span>
              <span className="text-red-400 font-bold">{fmt(result.totalTaxLiability)}</span>
            </div>
            {result.taxByBrackets.map((b, i) => (
              <div key={i} className="flex items-center justify-between text-sm pl-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${bracketColors[i % bracketColors.length]}`}
                  />
                  <span className="text-slate-500">
                    Tramo {(b.bracket.rate * 100).toFixed(2)}%
                  </span>
                </div>
                <span className="text-slate-400">{fmt(b.tax)}</span>
              </div>
            ))}
          </div>
        )}

        {/* 5. Withholdings */}
        <div className="space-y-2">
          <div className="flex items-center justify-between py-2 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span className="text-slate-300 font-medium">5. Menos: Retenciones</span>
            </div>
            <span className="text-blue-400 font-bold">- {fmt(result.totalWithholdings)}</span>
          </div>
          {result.breakdown.credits.map((cred, i) => (
            <div key={i} className="flex items-center justify-between text-sm pl-4">
              <span className="text-slate-500">{cred.name}</span>
              <span className="text-blue-400/70">- {fmt(cred.amount)}</span>
            </div>
          ))}
        </div>

        {/* Final Result */}
        <div
          className={`flex items-center justify-between py-4 rounded-xl px-4 ${
            result.isRefund ? "bg-emerald-500/20" : "bg-red-500/20"
          }`}
        >
          <span
            className={`font-bold ${
              result.isRefund ? "text-emerald-300" : "text-red-300"
            }`}
          >
            Resultado: {result.isRefund ? "a devolver" : "a pagar"}
          </span>
          <span
            className={`font-bold text-2xl ${
              result.isRefund ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {fmt(result.taxDueOrRefund)}
          </span>
        </div>
      </div>

      {/* Result explanation */}
      <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="text-teal-300 font-medium mb-1">¿Qué significa esto?</p>
            <p className="text-slate-400">
              {result.isRefund
                ? `Has pagado más de lo que te correspondía. ${getTaxName()} calcula que debes pagar ${fmt(result.totalTaxLiability)}, pero ya has abonado ${fmt(result.totalWithholdings)} en retenciones. La diferencia de ${fmt(result.taxDueOrRefund)} será devuelta por ${getTaxAuthority()}.`
                : `Te corresponde pagar ${fmt(result.totalTaxLiability)} según ${getTaxName()}, pero solo has retenido ${fmt(result.totalWithholdings)}. Debes ingresar la diferencia de ${fmt(result.taxDueOrRefund)} al presentar tu declaración.`}
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="text-amber-300 font-medium">Cálculo orientativo</p>
            <p className="text-slate-400 text-xs">
              Este resultado es una estimación. Verifica con el simulador oficial de {getTaxAuthority()} antes de presentar tu declaración.
              No sustituye asesoría fiscal profesional. Año fiscal de referencia: {new Date().getFullYear()}.
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
        Imprimir resumen
      </button>
    </div>
  );
}
