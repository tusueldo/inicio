import {
  CountryTaxData,
  SalaryResult,
  formatCurrency,
  CalculationInput,
} from "../data/countries";
import { Printer, TrendingDown, TrendingUp, ArrowRight, Receipt, Percent, CheckCircle2, Landmark, Info } from "lucide-react";

interface Props {
  country: CountryTaxData;
  result: SalaryResult;
  input?: CalculationInput;
  showIRPFBreakdown?: boolean;
}

export default function ResultsDisplay({ country, result, input, showIRPFBreakdown = false }: Props) {
  // Get tax name for country
  const getTaxName = () => {
    const taxNames: Record<string, string> = {
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
      GQ: "Impuesto sobre la Renta",
    };
    return taxNames[country.code] || "Impuesto sobre la Renta";
  };

  // Get tax authority for country
  const getTaxAuthority = () => {
    const authorities: Record<string, string> = {
      ES: "AEAT",
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
      GT: "SAT",
      HN: "SAR",
      SV: "Ministerio de Hacienda",
      NI: "DGI",
      CR: "Ministerio de Hacienda",
      PA: "DGI",
      DO: "DGII",
      CU: "ONAT",
      GQ: "Hacienda",
    };
    return authorities[country.code] || "Administración Tributaria";
  };

  const handlePrint = () => {
    const deductionRows = result.deductions
      .map(
        (d) =>
          `<div class="row"><span class="label">${d.name} <span style="color:#64748b;font-size:11px">(${d.pctOfGross.toFixed(1)}%)</span></span><span class="value" style="color:#dc2626">- ${fmt(d.amount)}</span></div>`
      )
      .join("");

    const appliedDeductionRows = (result.appliedDeductions || [])
      .map(
        (d) =>
          `<div class="row"><span class="label">${d.name}</span><span class="value" style="color:#64748b">- ${fmt(d.amount)}</span></div>`
      )
      .join("");

    const bracketRows = result.taxBreakdown
      .filter((b) => b.tax > 0)
      .map(
        (b) =>
          `<div class="row"><span class="label">${(b.bracket.rate * 100).toFixed(2)}% (${fmt(b.bracket.min)} - ${b.bracket.max ? fmt(b.bracket.max) : "..."})</span><span class="value">${fmt(b.tax)}</span></div>`
      )
      .join("");

    const html = `
      <html>
        <head>
          <title>TuSueldo - Resultado</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; color: #1e293b; }
            h1 { color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px; }
            .meta { color: #64748b; font-size: 14px; margin-bottom: 20px; line-height: 1.6; }
            .highlight { background: #ecfdf5; padding: 24px; border-radius: 10px; text-align: center; margin: 24px 0; }
            .highlight .amount { font-size: 32px; font-weight: bold; color: #059669; }
            .section { margin: 20px 0; padding: 16px; background: #f8fafc; border-radius: 8px; }
            .section h3 { margin-top: 0; color: #334155; font-size: 14px; text-transform: uppercase; }
            .row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
            .label { color: #475569; }
            .value { font-weight: bold; }
            .footer { text-align: center; color: #94a3b8; font-size: 12px; margin-top: 30px; }
            .warning { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; margin: 20px 0; font-size: 12px; }
          </style>
        </head>
        <body>
          <h1>TuSueldo - Cálculo de ${getTaxName()}</h1>
          <div class="meta">
            <p><strong>País:</strong> ${country.flagSvg} ${country.name}</p>
            <p><strong>Impuesto:</strong> ${getTaxName()} (${getTaxAuthority()})</p>
            ${input ? `<p><strong>Tipo de trabajador:</strong> ${input.workerType === "empleado" ? "Por cuenta ajena" : input.workerType === "autonomo" ? "Autónomo" : "Funcionario"}</p>` : ""}
            ${input?.familyEnabled ? `<p><strong>Situación familiar:</strong> ${input.civilStatus === "soltero" ? "Soltero/a" : input.civilStatus === "casado" ? "Casado/a" : input.civilStatus === "pareja_hecho" ? "Pareja de hecho" : input.civilStatus === "separado" ? "Separado/a" : "Viudo/a"}${input.numChildren > 0 ? `, ${input.numChildren} hijo${input.numChildren > 1 ? "s" : ""}` : ""}</p>` : ""}
            <p><strong>Fecha:</strong> ${new Date().toLocaleDateString("es-ES")}</p>
          </div>
          <div class="highlight">
            <p style="color:#6b7280;font-size:14px;margin-bottom:4px">Sueldo neto mensual</p>
            <p class="amount">${fmt(result.netMonthly)}</p>
            <p style="color:#6b7280;font-size:14px;margin-top:4px">Sueldo neto anual: ${fmt(result.netAnnual)}</p>
          </div>
          <div class="section">
            <h3>Desglose anual</h3>
            <div class="row"><span class="label">Sueldo bruto anual</span><span class="value">${fmt(result.grossAnnual)}</span></div>
            <div class="row"><span class="label">Sueldo bruto mensual</span><span class="value">${fmt(result.grossMonthly)}</span></div>
            ${deductionRows}
            <div class="row" style="border-top:2px solid #059669;font-size:17px;margin-top:8px;padding-top:12px">
              <span class="label" style="font-weight:bold">Sueldo neto anual</span>
              <span class="value" style="color:#059669">${fmt(result.netAnnual)}</span>
            </div>
            <div class="row" style="font-size:17px">
              <span class="label" style="font-weight:bold">Sueldo neto mensual</span>
              <span class="value" style="color:#059669">${fmt(result.netMonthly)}</span>
            </div>
            <div class="row">
              <span class="label">Tipo efectivo real</span>
              <span class="value">${result.effectiveRate.toFixed(2)}%</span>
            </div>
          </div>
          ${appliedDeductionRows ? `<div class="section"><h3>Deducciones aplicadas</h3>${appliedDeductionRows}</div>` : ""}
          ${bracketRows ? `<div class="section"><h3>Tramos impositivos aplicados</h3>${bracketRows}</div>` : ""}
          <div class="warning">
            <strong>Aviso:</strong> Este cálculo es orientativo. Consulta siempre con un asesor fiscal o la administración tributaria de tu país (${getTaxAuthority()}) para confirmar los datos oficiales vigentes.
          </div>
          <div class="footer">TuSueldo - ${new Date().toLocaleDateString("es-ES")} | Datos fiscales año 2024-2025</div>
        </body>
      </html>
    `;
    const w = window.open("", "_blank");
    if (w) { w.document.write(html); w.document.close(); w.print(); }
  };

  function fmt(n: number) {
    return formatCurrency(n, country);
  }

  const segmentColors = [
    "bg-red-500/70",
    "bg-amber-500/70",
    "bg-orange-500/70",
    "bg-rose-500/70",
    "bg-pink-500/70",
    "bg-purple-500/70",
  ];

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Main Result */}
      <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center">
        <p className="text-emerald-300/80 text-sm font-medium uppercase tracking-wider mb-1">
          Tu sueldo neto mensual
        </p>
        <p className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-2">
          {fmt(result.netMonthly)}
        </p>
        <p className="text-slate-400 text-sm mb-3">
          Neto anual: {fmt(result.netAnnual)}
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full text-sm">
          <Percent className="w-4 h-4 text-amber-400" />
          <span className="text-slate-400">Tipo efectivo real:</span>
          <span className="text-amber-400 font-semibold">{result.effectiveRate.toFixed(2)}%</span>
        </div>
      </div>

      {/* IRPF Info Box */}
      {showIRPFBreakdown && (
        <div className="bg-teal-500/5 border border-teal-500/20 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Landmark className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-teal-400 font-semibold text-sm mb-1">
                {getTaxName()} - {country.name}
              </h3>
              <p className="text-slate-400 text-xs">
                Organismo: {getTaxAuthority()} • Año fiscal: 2024-2025
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Applied Deductions Summary */}
      {result.appliedDeductions && result.appliedDeductions.length > 0 && (
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4">
          <h3 className="text-emerald-400 font-medium text-sm mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Deducciones aplicadas antes del impuesto
          </h3>
          <div className="space-y-1">
            {result.appliedDeductions.map((d, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="text-slate-400">{d.name}</span>
                <span className="text-slate-300">- {fmt(d.amount)}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-emerald-500/20 flex items-center justify-between text-sm">
            <span className="text-emerald-300 font-medium">Base imponible reducida</span>
            <span className="text-emerald-400 font-semibold">
              {fmt(result.grossAnnual - (result.appliedDeductions?.reduce((s, d) => s + d.amount, 0) || 0))}
            </span>
          </div>
        </div>
      )}

      {/* Detailed Breakdown */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5 space-y-3">
        <h3 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
          <Receipt className="w-4 h-4 text-emerald-400" />
          Desglose detallado
        </h3>

        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300 font-medium">Sueldo bruto anual</span>
          </div>
          <span className="text-white font-semibold">{fmt(result.grossAnnual)}</span>
        </div>
        <div className="flex items-center justify-between py-2 border-t border-slate-700">
          <span className="text-slate-400 text-sm pl-6">Sueldo bruto mensual</span>
          <span className="text-slate-300">{fmt(result.grossMonthly)}</span>
        </div>

        <div className="border-t border-slate-700 pt-3 space-y-2">
          {result.deductions.map((d, i) => (
            <div key={i} className="flex items-center justify-between py-1.5">
              <div className="flex items-center gap-2 text-sm">
                <TrendingDown className="w-4 h-4 text-red-400" />
                <div>
                  <span className="text-slate-400">{d.name}</span>
                  <span className="text-slate-600 text-xs ml-2">({d.pctOfGross.toFixed(1)}%)</span>
                </div>
              </div>
              <span className="text-red-400 font-medium text-sm">- {fmt(d.amount)}</span>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-emerald-500/50 pt-3 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 font-semibold">Sueldo neto anual</span>
            </div>
            <span className="text-emerald-400 font-bold text-lg">{fmt(result.netAnnual)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-emerald-300/60 text-sm pl-6">Sueldo neto mensual</span>
            <span className="text-emerald-400 font-semibold">{fmt(result.netMonthly)}</span>
          </div>
        </div>
      </div>

      {/* Tax Brackets - Detailed for IRPF mode */}
      {result.taxBreakdown.filter((b) => b.tax > 0).length > 0 && (
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5 space-y-3">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
            Tramos del {getTaxName()} aplicados
          </h3>
          <div className="space-y-2">
            {result.taxBreakdown
              .filter((b) => b.tax > 0)
              .map((b, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getBracketColor(i) }}
                      />
                      <span className="text-slate-300">
                        Tramo {(b.bracket.rate * 100).toFixed(2)}%
                      </span>
                    </div>
                    <span className="text-slate-200 font-medium">{fmt(b.tax)}</span>
                  </div>
                  <div className="pl-6 text-xs text-slate-500 mt-0.5">
                    Base: {fmt(b.bracket.min)} - {b.bracket.max ? fmt(b.bracket.max) : "sin límite"}
                  </div>
                </div>
              ))}
          </div>
          <div className="pt-3 border-t border-slate-700 flex items-center justify-between">
            <span className="text-slate-400 text-sm">Total {getTaxName()}</span>
            <span className="text-red-400 font-semibold">
              {fmt(result.taxBreakdown.reduce((sum, b) => sum + b.tax, 0))}
            </span>
          </div>
        </div>
      )}

      {/* Distribution bar */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5">
        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
          Distribución del sueldo bruto
        </h3>
        <div className="h-8 rounded-full overflow-hidden flex">
          <div
            className="bg-emerald-500 transition-all duration-700"
            style={{ width: `${Math.max(0, ((result.netAnnual / result.grossAnnual) * 100)).toFixed(1)}%` }}
          />
          {result.deductions.map((d, i) => (
            <div
              key={i}
              className={`${segmentColors[i % segmentColors.length]} transition-all duration-700`}
              style={{ width: `${Math.max(0, d.pctOfGross).toFixed(1)}%` }}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            Neto ({((result.netAnnual / result.grossAnnual) * 100).toFixed(1)}%)
          </span>
          {result.deductions.map((d, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${segmentColors[i % segmentColors.length]}`} />
              {d.name.split(" ")[0]} ({d.pctOfGross.toFixed(1)}%)
            </span>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="text-amber-300 font-medium mb-1">Aviso importante</p>
            <p className="text-slate-400 text-xs">
              Este cálculo es orientativo y no sustituye asesoría fiscal profesional.
              Las tablas fiscales pueden variar. Verifica siempre con {getTaxAuthority()} ({getTaxAuthority()})
              antes de tomar decisiones. Año fiscal de referencia: 2024-2025.
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
        Imprimir resultado
      </button>
    </div>
  );
}

function getBracketColor(index: number): string {
  const colors = ["#34d399", "#fbbf24", "#f97316", "#ef4444", "#a855f7", "#ec4899"];
  return colors[index % colors.length];
}
