import { Link } from "react-router-dom";
import {
  Calculator,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Percent,
  Building2,
  Users,
  Baby,
  Heart,
  Shield,
  CreditCard,
  Wallet,
} from "lucide-react";

export default function SalaryCalculatorDetail() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12">
          <Link
            to="/sobre-nosotros"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-6"
          >
            Volver a Sobre Nosotros
          </Link>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Calculator className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                Calculadora de Sueldo Neto
              </h1>
              <p className="text-slate-400 text-lg">
                Conoce exactamente cuánto dinero recibirá tu bolsillo cada mes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué hace */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">¿Qué hace esta calculadora?</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            La <strong className="text-white">Calculadora de Sueldo Neto</strong> transforma tu salario bruto anual o mensual en la cantidad real que verás en tu cuenta bancaria. El proceso es simple en apariencia pero complejo en su implementación: aplicamos todas las retenciones, cotizaciones a la seguridad social, y deducciones fiscales vigentes en cada país para ofrecerte un resultado preciso.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: DollarSign, title: "Salario bruto a neto", desc: "Convierte cualquier cifra bruta en el importe neto real" },
              { icon: Percent, title: "Retenciones aplicadas", desc: "Calcula IRPF, ISR y otros impuestos según la escala vigente" },
              { icon: Building2, title: "Cotizaciones sociales", desc: "Incluye aportes a seguridad social y pensiones" },
              { icon: Wallet, title: "Pagas extraordinarias", desc: "Opción de distribuir o prorratear pagas extra" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-xl">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factores que considera */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Factores que considera el cálculo</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-teal-400" />
              Cotizaciones a la Seguridad Social
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Cada país tiene su propio sistema de Seguridad Social con diferentes tipos de cotización. Nuestra calculadora aplica automáticamente los porcentajes correspondientes:
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Contingencias comunes (enfermedad, maternidad)",
                "Contingencias profesionales (accidentes de trabajo)",
                "Desempleo (seguro de cesantía)",
                "Fondo de pensiones / jubilación",
                "FONASA / salud pública / ISAPRE",
                "Otros conceptos según normativa local",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Percent className="w-5 h-5 text-emerald-400" />
              Retenciones fiscales
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              El impuesto sobre la renta se aplica de forma progresiva mediante tramos. Calculamos las retenciones mensuales estimadas basándonos en:
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Escala progresiva de tramos IRPF/ISR",
                "Mínimo personal y familiar exento",
                "Situación familiar (casado, soltero, hijos)",
                "Discapacidad y grados de dependencia",
                "Retenciones adicionales por contrato",
                "Regularización anual estimada",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-teal-400" />
              Situación personal
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              El cálculo del sueldo neto varía según tu situación personal. Nuestra calculadora tiene en cuenta:
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Estado civil (soltero, casado, unión civil)",
                "Hijos menores de 25 años a cargo",
                "Ascendientes dependientes (padres, abuelos)",
                "Grado de discapacidad reconocido",
                "Contrato de trabajo (indefinido, temporal)",
                "Categoría profesional y antigüedad",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-emerald-400" />
              Complementos salariales
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Además del salario base, consideramos otros conceptos retributivos habituales:
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Pagas extraordinarias (prorrateadas o no)",
                "Antigüedad y trienios",
                "Plus de convenio o categoría",
                "Plus de nocturnidad y turnicidad",
                "Horas extras y complementarias",
                "Comisiones y variables",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* País a país */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Especificaciones por país</h2>

        <div className="space-y-4">
          {countryDetails.map((country) => (
            <details
              key={country.code}
              className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center gap-3 p-4 cursor-pointer hover:bg-slate-800/30 transition-colors">
                <span className="text-2xl">{country.flag}</span>
                <span className="text-white font-medium flex-1">{country.name}</span>
                <span className="text-slate-500 text-sm">{country.socialSecurity}</span>
              </summary>
              <div className="px-4 pb-4 pt-2 border-t border-slate-800">
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-500 mb-1">Cotización obrera (aprox.)</p>
                    <p className="text-white">{country.workerRate}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">Cotización patronal (aprox.)</p>
                    <p className="text-white">{country.employerRate}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">Impuesto sobre la renta</p>
                    <p className="text-white">{country.incomeTax}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">Tope máximo</p>
                    <p className="text-white">{country.cap}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs mt-3">{country.notes}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Calcula tu sueldo neto ahora</h2>
          <p className="text-slate-400 mb-6">
            Selecciona tu país y descubre exactamente cuánto recibirás en tu cuenta
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
          >
            <Calculator className="w-5 h-5" />
            Calcular sueldo neto
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

const countryDetails = [
  {
    code: "ES",
    flag: "🇪🇸",
    name: "España",
    socialSecurity: "Contingencias comunes",
    workerRate: "6.35% (4.7% contingencias comunes + 1.55% desempleo + 0.1% FP)",
    employerRate: "29.90% aproximadamente según tipo de contrato",
    incomeTax: "IRPF: 19% - 47% (tramos autonómicos)",
    cap: "Tope máximo de base de cotización: 4.720,10€/mes (2026)",
    notes: "El IRPF se aplica de forma progresiva. Las comunidades autónomas pueden modificar tramos. El menor salario, menor tipo aplicable.",
  },
  {
    code: "MX",
    flag: "🇲🇽",
    name: "México",
    socialSecurity: "IMSS",
    workerRate: "2.552% aprox. (enfermedad, invalidez, retiro)",
    employerRate: "29.77% aprox. (IMSS, INFONAVIT, SAR)",
    incomeTax: "ISR: 1.92% - 35% (8 tramos)",
    cap: "UMA mensual base: 108.57 MXN para cálculo de topes",
    notes: "El subsidio al empleo reduce el ISR para salarios bajos. Se actualiza semestralmente por inflación.",
  },
  {
    code: "AR",
    flag: "🇦🇷",
    name: "Argentina",
    socialSecurity: "ANSES - SIPA",
    workerRate: "11% (jubilación 11% + INSSJyP 3%)",
    employerRate: "27.7% (jubilación 16% + INSSJyP, FNE, etc.)",
    incomeTax: "Imp. Ganancias 4ªcat: 9% - 35% (escala progresiva)",
    cap: "Mínimo no imponible: $1.063.500 ARS mensuales (2026)",
    notes: "La inflación elevada genera actualizaciones frecuentes de los umbrales. El impuesto a las ganancias aplica sobre salarios superiores al MNI.",
  },
  {
    code: "CO",
    flag: "🇨🇴",
    name: "Colombia",
    socialSecurity: "Pensiones + Salud + ARL",
    workerRate: "8% (salud 4% + pensión 4%)",
    employerRate: "24.31% aprox. (salud 12.5%, pensión 12%, ARL, ICBF, SENA, CCF)",
    incomeTax: "Retención en la fuente: 0% - 33% según UVT",
    cap: "Base máxima cotización: 25 SMMLV",
    notes: "El auxilio de transporte aplica a quienes ganen hasta 2 SMMLV. Valor UVT 2026: $49.799 COP.",
  },
  {
    code: "CL",
    flag: "🇨🇱",
    name: "Chile",
    socialSecurity: "AFP + Salud + Seguro Cesantía",
    workerRate: "18.6% aprox. (AFP 10% + salud 7.5% + seguro 0.6%)",
    employerRate: "1.51% - 2.71% según contrato (SIS, seguro cesantía)",
    incomeTax: "IUSC: 0% - 40% (8 tramos en UFs mensuales)",
    cap: "Tope imponible AFP: 86,94 UF mensuales",
    notes: "Cotización salud subirá al 8% en 2027. El IUSC se descuenta por tramos según ingresos en UF.",
  },
  {
    code: "PE",
    flag: "🇵🇪",
    name: "Perú",
    socialSecurity: "ONP / AFP",
    workerRate: "13% ONP o 11.16% AFP (aprox. según fondo)",
    employerRate: "9% EsSalud + Seguro de Vida + SCTR según riesgo",
    incomeTax: "5ta categoría: 8%, 14%, 17%, 20% por tramos",
    cap: "Tope UIT anuales: 7 UIT para base imponible máxima",
    notes: "UIT 2026: S/ 5.350. Las retenciones de 5ta se aplican sobre gratificación y CTS.",
  },
  {
    code: "VE",
    flag: "🇻🇪",
    name: "Venezuela",
    socialSecurity: "IVSS",
    workerRate: "4% (seguro social + paro forzoso)",
    employerRate: "12.25% (IVSS 9%, INCES, SPN, FAOV)",
    incomeTax: "ISLR: 6% - 34% por UT (Unidad Tributaria)",
    cap: "UT 2026: Bs. 9,00 (sujeto a actualización frecuente)",
    notes: "La inflación hiperinflacionaria hace que los valores en bolívares cambien constantemente. Muchos contratos se pactan en USD.",
  },
  {
    code: "EC",
    flag: "🇪🇨",
    name: "Ecuador",
    socialSecurity: "IESS",
    workerRate: "9.45% (jubilación 6.64%, salud 3.85%,otros)",
    employerRate: "12.15% (jubilación 3.94%, salud 5.71%, SEGURO)",
    incomeTax: "Impuesto Renta: 0% - 35% (7 tramos en USD)",
    cap: "Fracción básica exenta: $11.902 USD (2026)",
    notes: "Ecuador está dolarizado, lo que evita fluctuaciones cambiarias pero limita ajustes fiscales.",
  },
  {
    code: "UY",
    flag: "🇺🇾",
    name: "Uruguay",
    socialSecurity: "BPS + FONASA",
    workerRate: "15.81% BPS + 3-6% FONASA según tramo",
    employerRate: "12.625% BPS + 5% FONASA + otros",
    incomeTax: "IRPF: 0% - 30% por tramos en BPC",
    cap: "Tope máximo BPS: 15 BPC, exención IRPF hasta 18 BPC",
    notes: "BPC 2026: $6.865 UYU. El IRPF considera deducción de 8% por aportes BPS/FONASA.",
  },
  {
    code: "PY",
    flag: "🇵🇾",
    name: "Paraguay",
    socialSecurity: "IPS",
    workerRate: "9% IPS (jubilación, salud)",
    employerRate: "16.5% IPS + 0.5% MTESS",
    incomeTax: "IRP: 8% - 10% sobre ingresos netos >10 salarios mínimos",
    cap: "Exención: primeros 10 salarios mínimos anuales",
    notes: "Salario mínimo 2026: Gs. 2.554.842. Nuevo Monotributo unifica IRP, IVA e IPS.",
  },
  {
    code: "BO",
    flag: "🇧🇴",
    name: "Bolivia",
    socialSecurity: "CNSS - AFP",
    workerRate: "12.71% AFP (riesgo común +Vejez + comisión AFP)",
    employerRate: "3% AFP riesgo profesional + 10% CNSS + 2% INSO",
    incomeTax: "RC-IVA: 13% sobre base (ingreso - 2 SMN)",
    cap: "SMN 2026: Bs 2.362, deducción doble para RC-IVA",
    notes: "Bono de productividad Bs 500/año exento. Se pagan 2 aguinaldos (Navidad y reinversión).",
  },
  {
    code: "DO",
    flag: "🇩🇴",
    name: "República Dominicana",
    socialSecurity: "SFS + AFP",
    workerRate: "8.07% (SFS 3.04% + AFP 5.03%)",
    employerRate: "24.25% aprox. (SFS 7.09% + AFP 7.03% + otros)",
    incomeTax: "ISR: 0% - 25% (3 tramos en DOP)",
    cap: "Exención anual: RD$416.220",
    notes: "Salario mínimo 2026: RD$29.668 (grandes empresas). La regalia pascual equivale a un sueldo navideño.",
  },
  {
    code: "CR",
    flag: "🇨🇷",
    name: "Costa Rica",
    socialSecurity: "CCSS",
    workerRate: "10.17% (enfermedad 5.5% + IVM 3.67% + otros)",
    employerRate: "26.33% (enfermedad 9.25% + IVM 5.08% + IMAS + BP + FODESAF)",
    incomeTax: "Imp. Renta: 0% - 25% según tramos",
    cap: "Tramo exento: primera escala hasta ¢3.861.000 anuales",
    notes: "Las cargas sociales están entre las más altas de Centroamérica. El aguinaldo es obligatorio y está exento del impuesto.",
  },
  {
    code: "PA",
    flag: "🇵🇦",
    name: "Panamá",
    socialSecurity: "CSS",
    workerRate: "9.07% (seguro social + educación)",
    employerRate: "14.67% aprox. (seguro social + riesgo + edu)",
    incomeTax: "ISR: 0% - 25% (3 tramos en USD)",
    cap: "Tramo exento: hasta $11.000 USD anuales",
    notes: "Decimotercer sueldo en diciembre excluido del IR. La CSS maneja salud, riesgos y pensiones.",
  },
  {
    code: "GT",
    flag: "🇬🇹",
    name: "Guatemala",
    socialSecurity: "IGSS",
    workerRate: "4.83% IGSS (salud 3% + invalidez 1%)",
    employerRate: "13.67% IGSS + IRTRA + Intecap",
    incomeTax: "ISR: Exento hasta Q30.000 + 5% - 15% por tramos",
    cap: "Exención anual: Q30.000 GTQ",
    notes: "Bono 14 (aguinaldo julio) y aguinaldo diciembre obligatorios. ISR reformado en 2026 con nuevos tramos.",
  },
  {
    code: "HN",
    flag: "🇭🇳",
    name: "Honduras",
    socialSecurity: "IHSS + RNP",
    workerRate: "2.5% IHSS + 1.5% RNP",
    employerRate: "10% IHSS + 6.5% RNP",
    incomeTax: "ISR: 0% - 25% (4 tramos)",
    cap: "Tramo exento: L176.198 HNL anuales",
    notes: "La Ley de Retorno de Talentos ofrece exención fiscal de 2 años para profesionales repatriados.",
  },
  {
    code: "SV",
    flag: "🇸🇻",
    name: "El Salvador",
    socialSecurity: "ISSS + AFP",
    workerRate: "7.25% ISSS + 6.25% AFP = 13.5%",
    employerRate: "15.75% ISSS + 6.75% AFP + otros",
    incomeTax: "ISR: 30% sobre ingresos > $4.064 USD anuales",
    cap: "Base exenta: $4.064 USD anuales",
    notes: "IVA reducido al 10% para canasta básica desde ago 2026. No existe escala progresiva: 30% fijo para todos los contribuyentes.",
  },
  {
    code: "NI",
    flag: "🇳🇮",
    name: "Nicaragua",
    socialSecurity: "INSS",
    workerRate: "6.75% INSS",
    employerRate: "22% INSS",
    incomeTax: "IR: 0% - 30% sobre excedente de C$50.000 anuales",
    cap: "Exención: C$4.166 córdobas mensuales",
    notes: "El INSS subió al 6.75% en junio 2026. El monto exento es uno de los más bajos de Centroamérica.",
  },
  {
    code: "CU",
    flag: "🇨🇺",
    name: "Cuba",
    socialSecurity: "Seguridad Social Estatal",
    workerRate: "5% - 15% según ingresos (sector estatal)",
    employerRate: "100% estatal (empresas públicas)",
    incomeTax: "TCP: 0% - 40% según tramo en CUP",
    cap: "Exento hasta CUP 10.000 anuales para TCP",
    notes: "El sector público no tiene retenciones por nómina. El TCP (trabajo por cuenta propia) tributa por ingresos declarados.",
  },
  {
    code: "GQ",
    flag: "🇬🇶",
    name: "Guinea Ecuatorial",
    socialSecurity: "INSESO",
    workerRate: "4.5% INSESO",
    employerRate: "21.5% INSESO",
    incomeTax: "IRT: 0% - 35% por tramos en XAF",
    cap: "Exento hasta XAF 150.000 mensuales",
    notes: "Moneda: Franco CFA (XAF), tipo fijo 1 EUR = 655 XAF. Cotizaciones bajas pero impuesto progresivo alto.",
  },
];
