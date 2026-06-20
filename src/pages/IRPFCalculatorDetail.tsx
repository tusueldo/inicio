import { Link } from "react-router-dom";
import {
  Landmark,
  ArrowRight,
  CheckCircle,
  Percent,
  TrendingUp,
  Users,
  Baby,
  Heart,
  Calculator,
} from "lucide-react";

export default function IRPFCalculatorDetail() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12">
          <Link
            to="/sobre-nosotros"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-6"
          >
            Volver a Sobre Nosotros
          </Link>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Landmark className="w-8 h-8 text-teal-400" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                Calculadora de IRPF / ISR
              </h1>
              <p className="text-slate-400 text-lg">
                Calcula el impuesto sobre la renta aplicando las escalas progresivas oficiales
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
            La <strong className="text-white">Calculadora de IRPF/ISR</strong> te permite conocer exactamente cuánto impuesto sobre la renta debes pagar según tus ingresos anuales. A diferencia de una simple multiplicación por un porcentaje, esta herramienta aplica la <strong className="text-teal-400">escala progresiva por tramos</strong> oficial de cada país, donde cada porción de tus ingresos tributa a una tasa diferente.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, title: "Escalas progresivas", desc: "Aplica el tipo correcto a cada tramo de ingresos" },
              { icon: Percent, title: "Tipos marginales", desc: "Visualiza tu tipo marginal y efectivo" },
              { icon: Users, title: "Mínimos personales", desc: "Aplica reducciones por situación familiar" },
              { icon: Calculator, title: "Desglose por tramos", desc: "Ve cuánto pagas en cada nivel de la escala" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-xl">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-teal-400" />
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

      {/* Explicación del sistema progresivo */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">¿Cómo funciona el sistema progresivo?</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            El impuesto sobre la renta en casi todos los países hispanohablantes funciona mediante una <strong className="text-white">escala progresiva por tramos</strong>. Esto significa que no se aplica un único porcentaje a todos tus ingresos, sino que cada franja de ingresos tributa a un tipo diferente.
          </p>

          <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Ejemplo práctico (España - IRPF 2026)</h3>
            <p className="text-slate-400 text-sm mb-4">
              Si tu base imponible es de 40.000€ anuales, el cálculo NO es 40.000 x 37%. El impuesto se calcula así:
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-slate-300">De 0€ a 12.450€</span>
                <span className="text-slate-500">19%</span>
                <span className="text-white font-medium">= 2.365,50€</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-slate-300">De 12.450€ a 20.200€</span>
                <span className="text-slate-500">24%</span>
                <span className="text-white font-medium">= 1.860,00€</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-slate-300">De 20.200€ a 35.200€</span>
                <span className="text-slate-500">30%</span>
                <span className="text-white font-medium">= 4.500,00€</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-300">De 35.200€ a 40.000€</span>
                <span className="text-slate-500">37%</span>
                <span className="text-white font-medium">= 1.776,00€</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-slate-600">
                <span className="text-teal-400 font-semibold">Total impuesto</span>
                <span></span>
                <span className="text-teal-400 font-bold">10.501,50€</span>
              </div>
              <div className="text-right text-slate-500 text-xs mt-2">
                Tipo efectivo: 26.25% | Tipo marginal: 37%
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-800/30 rounded-xl p-4">
              <h4 className="text-white font-medium mb-2">Tipo marginal</h4>
              <p className="text-slate-400 text-sm">
                Es el porcentaje que se aplicaría a cada euro adicional que ganes. Si el último euro de tu salario cae en el tramo del 37%, ese es tu tipo marginal.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-4">
              <h4 className="text-white font-medium mb-2">Tipo efectivo</h4>
              <p className="text-slate-400 text-sm">
                Es el porcentaje real que pagas sobre el total de tus ingresos. Siempre será menor que el marginal, porque los primeros tramos tributan menos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Factores considerados */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Qué consideramos en el cálculo</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Percent className="w-5 h-5 text-teal-400" />
              Deducciones del impuesto
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Mínimo personal exento según normativa",
                "Reducciones por hijo a cargo (hasta 25 años)",
                "Reducciones por ascendientes dependientes",
                "Reducciones por discapacidad reconocida",
                "Reducciones por movilidad geográfica",
                "Deducción por pensiones compensatorias",
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
              <Users className="w-5 h-5 text-teal-400" />
              Situación familiar
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Estado civil (soltero, casado, viudo)",
                "Declaración individual o conjunta",
                "Número de hijos menores de 25 años",
                "Hijos con discapacidad a cargo",
                "Ascendientes mayores de 65 años",
                "Familia numerosa (general o especial)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tramos por país */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Tablas de tramos por país</h2>

        <div className="space-y-4">
          {taxBracketsByCountry.map((country) => (
            <details
              key={country.code}
              className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center gap-3 p-4 cursor-pointer hover:bg-slate-800/30 transition-colors">
                <span className="text-2xl">{country.flag}</span>
                <span className="text-white font-medium flex-1">{country.name}</span>
                <span className="text-slate-500 text-sm">{country.taxName}</span>
              </summary>
              <div className="px-4 pb-4 pt-2 border-t border-slate-800">
                <p className="text-slate-500 text-sm mb-3">{country.description}</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-slate-400 border-b border-slate-700">
                        <th className="text-left py-2 pr-4">Desde</th>
                        <th className="text-left py-2 pr-4">Hasta</th>
                        <th className="text-right py-2">Tasa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {country.brackets.map((bracket, idx) => (
                        <tr key={idx} className="border-b border-slate-800/50">
                          <td className="py-2 pr-4 text-slate-300">{bracket.min}</td>
                          <td className="py-2 pr-4 text-slate-300">{bracket.max}</td>
                          <td className="py-2 text-right text-teal-400 font-medium">{bracket.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {country.notes && (
                  <p className="text-slate-500 text-xs mt-3">{country.notes}</p>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Calcula tu IRPF/ISR ahora</h2>
          <p className="text-slate-400 mb-6">
            Selecciona tu país y descubre exactamente cuánto impuesto pagas
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-teal-500/25"
          >
            <Landmark className="w-5 h-5" />
            Calcular IRPF/ISR
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

const taxBracketsByCountry = [
  {
    code: "ES",
    flag: "🇪🇸",
    name: "España",
    taxName: "IRPF",
    description: "Escala estatal base (las CCAA añaden tramos adicionales). Los tramos autonómicos varían según comunidad.",
    brackets: [
      { min: "0€", max: "12.450€", rate: "19%" },
      { min: "12.450€", max: "20.200€", rate: "24%" },
      { min: "20.200€", max: "35.200€", rate: "30%" },
      { min: "35.200€", max: "60.000€", rate: "37%" },
      { min: "60.000€", max: "300.000€", rate: "45%" },
      { min: "300.000€", max: "En adelante", rate: "47%" },
    ],
    notes: "Mínimo personal: 5.550€. Aplicar reducciones familiares. Verificar tramos autonómicos específicos.",
  },
  {
    code: "MX",
    flag: "🇲🇽",
    name: "México",
    taxName: "ISR",
    description: "Tabla del ISR para ingresos por salarios (art. 96 LISR). Actualización semestral por inflación.",
    brackets: [
      { min: "$0.01", max: "$8,952.49", rate: "1.92%" },
      { min: "$8,952.50", max: "$75,984.55", rate: "6.40%" },
      { min: "$75,984.56", max: "$133,536.07", rate: "10.88%" },
      { min: "$133,536.08", max: "$155,229.80", rate: "16.00%" },
      { min: "$155,229.81", max: "$185,852.57", rate: "17.92%" },
      { min: "$185,852.58", max: "$374,837.88", rate: "21.36%" },
      { min: "$374,837.89", max: "$590,795.99", rate: "23.52%" },
      { min: "$590,796.00", max: "En adelante", rate: "35.00%" },
    ],
    notes: "Subsidio al empleo reduce ISR para salarios bajos. Cuota fija y sobre excedente en cada tramo.",
  },
  {
    code: "AR",
    flag: "🇦🇷",
    name: "Argentina",
    taxName: "Imp. Ganancias 4ª",
    description: "Escala del Impuesto a las Ganancias para 4ª categoría (trabajo dependiente). Valores enero 2026.",
    brackets: [
      { min: "$0", max: "$1.063.500", rate: "Exento" },
      { min: "$1.063.501", max: "$2.127.000", rate: "9%" },
      { min: "$2.127.001", max: "$3.190.500", rate: "12%" },
      { min: "$3.190.501", max: "$4.254.000", rate: "15%" },
      { min: "$4.254.001", max: "$5.317.500", rate: "19%" },
      { min: "$5.317.501", max: "En adelante", rate: "35%" },
    ],
    notes: "MNI (Mínimo No Imponible) actualizado a enero 2026. Valores sujetos a indexación por inflación.",
  },
  {
    code: "CO",
    flag: "🇨🇴",
    name: "Colombia",
    taxName: "Retención fuente",
    description: "Retención en la fuente sobre salarios calculada en UVT. Valor UVT 2026: $49.799 COP.",
    brackets: [
      { min: "0 UVT", max: "95 UVT", rate: "0%" },
      { min: "95 UVT", max: "150 UVT", rate: "19%" },
      { min: "150 UVT", max: "360 UVT", rate: "28%" },
      { min: "360 UVT", max: "640 UVT", rate: "33%" },
      { min: "640 UVT", max: "945 UVT", rate: "35%" },
      { min: "945 UVT", max: "En adelante", rate: "37%" },
    ],
    notes: "Deducciones: salud obligatoria (4%), pensión (4%), préstamos vivienda. 95 UVT ≈ $4.730.905 COP.",
  },
  {
    code: "CL",
    flag: "🇨🇱",
    name: "Chile",
    taxName: "Impuesto 2ª Cat.",
    description: "Impuesto Único de Segunda Categoría sobre sueldos. Valores en UF mensuales.",
    brackets: [
      { min: "0 UF", max: "13,5 UF", rate: "Exento" },
      { min: "13,5 UF", max: "30 UF", rate: "4%" },
      { min: "30 UF", max: "50 UF", rate: "8%" },
      { min: "50 UF", max: "70 UF", rate: "13,5%" },
      { min: "70 UF", max: "90 UF", rate: "23%" },
      { min: "90 UF", max: "120 UF", rate: "30,4%" },
      { min: "120 UF", max: "310 UF", rate: "35%" },
      { min: "310 UF", max: "En adelante", rate: "40%" },
    ],
    notes: "UF valor diario variable (~$36.500 CLP). Cotizaciones AFP y salud son deducibles de la base.",
  },
  {
    code: "PE",
    flag: "🇵🇪",
    name: "Perú",
    taxName: "5ª Categoría",
    description: "Impuesto a la Renta de 5ª categoría sobre rentas del trabajo. Deducción de 7 UIT anuales.",
    brackets: [
      { min: "0 UIT", max: "7 UIT", rate: "Exento" },
      { min: "7 UIT", max: "27 UIT", rate: "8%" },
      { min: "27 UIT", max: "57 UIT", rate: "14%" },
      { min: "57 UIT", max: "97 UIT", rate: "17%" },
      { min: "97 UIT", max: "En adelante", rate: "20%" },
    ],
    notes: "UIT 2026: S/ 5.350. Deducción automática de 7 UIT. Gratificación y CTS no tributan hasta 15%.",
  },
  {
    code: "VE",
    flag: "🇻🇪",
    name: "Venezuela",
    taxName: "ISLR",
    description: "Impuesto Sobre la Renta expresado en Unidades Tributarias (UT). UT 2026: Bs. 9,00.",
    brackets: [
      { min: "0 UT", max: "1.000 UT", rate: "6%" },
      { min: "1.001 UT", max: "1.500 UT", rate: "9%" },
      { min: "1.501 UT", max: "2.000 UT", rate: "12%" },
      { min: "2.001 UT", max: "2.500 UT", rate: "16%" },
      { min: "2.501 UT", max: "3.000 UT", rate: "20%" },
      { min: "3.001 UT", max: "4.000 UT", rate: "24%" },
      { min: "4.001 UT", max: "6.000 UT", rate: "29%" },
      { min: "6.001 UT", max: "En adelante", rate: "34%" },
    ],
    notes: "Desgravamen único de 774 UT. Sustraendo en cada tramo reduce impuesto. Valores en bolívares muy volátiles.",
  },
  {
    code: "EC",
    flag: "🇪🇨",
    name: "Ecuador",
    taxName: "Imp. Renta",
    description: "Impuesto a la Renta de personas naturales. Fracción básica exenta 2026: $11.902 USD.",
    brackets: [
      { min: "$0", max: "$11.902", rate: "0%" },
      { min: "$11.902", max: "$15.159", rate: "5%" },
      { min: "$15.159", max: "$19.682", rate: "10%" },
      { min: "$19.682", max: "$26.031", rate: "12%" },
      { min: "$26.031", max: "$34.255", rate: "15%" },
      { min: "$34.255", max: "$45.407", rate: "20%" },
      { min: "$45.407", max: "$60.450", rate: "25%" },
      { min: "$60.450", max: "En adelante", rate: "35%" },
    ],
    notes: "Gastos personales deducibles hasta 1.3x fracción básica. Dolarización evita distorsiones cambiarias.",
  },
  {
    code: "UY",
    flag: "🇺🇾",
    name: "Uruguay",
    taxName: "IRPF",
    description: "Impuesto a la Renta de Personas Físicas por tramos en BPC. BPC 2026: $6.865 UYU.",
    brackets: [
      { min: "0 BPC", max: "18 BPC", rate: "0%" },
      { min: "18 BPC", max: "36 BPC", rate: "10%" },
      { min: "36 BPC", max: "60 BPC", rate: "20%" },
      { min: "60 BPC", max: "120 BPC", rate: "22%" },
      { min: "120 BPC", max: "180 BPC", rate: "25%" },
      { min: "180 BPC", max: "En adelante", rate: "30%" },
    ],
    notes: "Deducción del 8% por aportes BPS/FONASA aplicable al impuesto calculado. IRPF amplió umbral exento en 2026.",
  },
  {
    code: "GT",
    flag: "🇬🇹",
    name: "Guatemala",
    taxName: "ISR",
    description: "Impuesto Sobre la Renta de personas individuales. Tramos actualizados por reforma 2026.",
    brackets: [
      { min: "Q0", max: "Q30.000", rate: "Exento" },
      { min: "Q30.001", max: "Q75.000", rate: "5%" },
      { min: "Q75.001", max: "Q150.000", rate: "7%" },
      { min: "Q150.001", max: "Q300.000", rate: "11%" },
      { min: "Q300.001", max: "Q500.000", rate: "13%" },
      { min: "Q500.001", max: "Q800.000", rate: "14%" },
      { min: "Q800.001", max: "En adelante", rate: "15%" },
    ],
    notes: "Nuevos tramos añadidos en 2026. Anteriormente máximo 7% sobre Q150.000+. Más progresivo que antes.",
  },
  {
    code: "DO",
    flag: "🇩🇴",
    name: "Rep. Dominicana",
    taxName: "ISR",
    description: "Impuesto Sobre la Renta para personas físicas. Tasa fija del 25% sobre excedente.",
    brackets: [
      { min: "RD$0", max: "RD$416.220", rate: "0%" },
      { min: "RD$416.221", max: "RD$624.329", rate: "15%" },
      { min: "RD$624.330", max: "RD$867.123", rate: "20%" },
      { min: "RD$867.124", max: "En adelante", rate: "25%" },
    ],
    notes: "Exención anual: RD$416.220. Decimotercer sueldo (navidad) está excluido del cálculo.",
  },
  {
    code: "BO",
    flag: "🇧🇴",
    name: "Bolivia",
    taxName: "RC-IVA",
    description: "Régimen Complementario al IVA. Tasa única del 13% sobre base (ingreso - 2 SMN).",
    brackets: [
      { min: "Bs 0", max: "Bs 4.724", rate: "Exento (2 SMN)" },
      { min: "Bs 4.725", max: "En adelante", rate: "13%" },
    ],
    notes: "SMN 2026: Bs 2.362. Es un impuesto plano, no progresivo. Doble aguinaldo obligatorio.",
  },
  {
    code: "PY",
    flag: "🇵🇾",
    name: "Paraguay",
    taxName: "IRP",
    description: "Impuesto a la Renta Personal. Aplica sobre ingresos netos que superen 10 salarios mínimos anuales.",
    brackets: [
      { min: "Gs 0", max: "Gs 154.200.000", rate: "Exento (10 SM)" },
      { min: "Gs 154.200.001", max: "En adelante", rate: "8% - 10%" },
    ],
    notes: "Tasa del 8% para ingresos moderados, 10% para ingresos elevados. Monotributo disponible para independientes.",
  },
];
