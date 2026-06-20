import { Link } from "react-router-dom";
import {
  Globe,
  Calculator,
  FileText,
  Newspaper,
  Shield,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Landmark,
  HelpCircle,
} from "lucide-react";
import { countries } from "../data/countries";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Sobre TuSueldo
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Tu aliado experto en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              finanzas personales
            </span>{" "}
            para el mundo hispanohablante
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            TuSueldo es la plataforma de referencia para calcular tu salario neto, IRPF, ISR e
            impuestos sobre la renta en los 20 países de habla hispana. Herramientas precisas,
            datos actualizados y contenido económico de calidad.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              <Calculator className="w-5 h-5" />
              Calcular mi sueldo
            </Link>
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-colors border border-slate-700"
            >
              <Newspaper className="w-5 h-5" />
              Ver noticias
            </Link>
          </div>
        </div>
      </section>

      {/* Qué es TuSueldo */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              ¿Qué es TuSueldo?
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                <strong className="text-white">TuSueldo</strong> es una plataforma digital
                especializada en cálculo de nómina e información fiscal para trabajadores de los
                20 países hispanohablantes. Nacimos con una misión clara:{" "}
                <strong className="text-emerald-400">democratizar el acceso a la información fiscal</strong>{" "}
                y poner al alcance de cualquier persona herramientas profesionales de cálculo.
              </p>
              <p>
                Entendemos que la legislación tributaria puede ser compleja y que cada país tiene
                sus propias reglas: IRPF en España, ISR en México, Impuesto a las Ganancias en
                Argentina, Impuesto a la Renta en Perú, Colombia, Chile... Por eso hemos
                desarrollado calculadoras específicas para cada jurisdicción, con datos
                actualizados según las últimas reformas fiscales vigentes en 2026.
              </p>
              <p>
                Nuestra plataforma no se limita a cálculos básicos. Ofrecemos tres herramientas
                integradas: calculadora de <strong className="text-white">sueldo neto</strong>,
                calculadora de <strong className="text-white">IRPF/ISR</strong> por tramos
                progresivos, y calculadora de <strong className="text-white">declaración de la renta</strong>{" "}
                con deducciones completas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">20</div>
              <div className="text-slate-400 text-sm">Países cubiertos</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-teal-500/30 transition-colors">
              <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-teal-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">3</div>
              <div className="text-slate-400 text-sm">Calculadoras avanzadas</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">2026</div>
              <div className="text-slate-400 text-sm">Datos actualizados</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-teal-500/30 transition-colors">
              <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-teal-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">500M+</div>
              <div className="text-slate-400 text-sm">Hispanohablantes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Nuestras herramientas financieras
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Tres calculadoras especializadas para resolver todas tus dudas sobre nómina e impuestos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Salary Calculator */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Calculator className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Calculadora de Sueldo Neto
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Conoce tu salario líquido real. Calculamos las retenciones de seguridad social,
                impuestos sobre la renta y todas las deducciones aplicables según tu país de
                residencia fiscal.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Cálculo de salario bruto a neto",
                  "Retenciones de seguridad social",
                  "Pagas extraordinarias",
                  "Antigüedad y complementos",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* IRPF Calculator */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Landmark className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Calculadora de IRPF / ISR
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Calcula el impuesto sobre la renta aplicando las escalas progresivas oficiales de
                cada país. Visualiza exactamente cuánto pagas en cada tramo fiscal.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Escalas progresivas por tramos",
                  "Retenciones mensuales estimadas",
                  "Comparativa por comunidades",
                  "Ajustes por situación personal",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tax Return Calculator */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Declaración de la Renta
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Simula tu declaración anual completa: ingresos de todas las fuentes,
                deducciones aplicables y resultado final (a devolver o a pagar).
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Ingresos por trabajo y autónomo",
                  "Deducciones por vivienda y familia",
                  "Aportaciones a planes de pensiones",
                  "Resultado de la declaración",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nuestros objetivos
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Trabajamos cada día para que entender tus finanzas sea fácil, rápido y gratuito
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              title: "Precisión fiscal",
              description:
                "Datos actualizados según la legislación vigente en cada país. Consultamos fuentes oficiales como AEAT, SAT, DIAN, SUNAT y SII.",
            },
            {
              icon: Globe,
              title: "Cobertura total",
              description:
                "Los 20 países de habla hispana: España, México, Argentina, Colombia, Perú, Chile y todos los de Centroamérica y el Caribe.",
            },
            {
              icon: Shield,
              title: "Transparencia",
              description:
                "Sin registro obligatorio, sin almacenar datos personales. Tus cálculos se realizan en tu navegador, 100% privado.",
            },
            {
              icon: Users,
              title: "Accesibilidad",
              description:
                "Herramientas gratuitas y en español. Para cualquier trabajador, autónomo o empresa que necesite calcular nóminas.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/20 transition-colors"
            >
              <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Países cubiertos */}
      <section className="bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Cobertura geográfica
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Calculadoras fiscalizadas para cada uno de los 20 países hispanohablantes del mundo
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
            {countries.map((country) => (
              <Link
                key={country.code}
                to="/"
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-emerald-500/30 hover:bg-slate-900 transition-all duration-300 text-center group"
              >
                <div className="text-2xl mb-2">{country.flagSvg}</div>
                <div className="text-white text-sm font-medium group-hover:text-emerald-400 transition-colors">
                  {country.name}
                </div>
                <div className="text-slate-500 text-xs mt-1">{country.taxName}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Información SEO extendida */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">
            TuSueldo: la guía fiscal definitiva para hispanohablantes
          </h2>

          <div className="text-slate-400 space-y-4 leading-relaxed">
            <p>
              En el mundo laboral actual, entender cuánto dinero real llega a tu bolsillo cada mes
              es fundamental. Sin embargo, calcular el salario neto a partir del bruto puede ser
              una tarea compleja debido a la gran variedad de impuestos, retenciones y
              deducciones que existen en cada país. Es aquí donde{" "}
              <strong className="text-white">TuSueldo</strong> se convierte en tu mejor aliado.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              ¿Por qué es importante calcular tu salario neto?
            </h3>

            <p>
              Cuando negocias tu salario en una entrevista de trabajo o evalúas una oferta de
              empleo, el número que ves es normalmente el <strong className="text-white">salario bruto anual</strong>.
              Pero lo que realmente importa es cuánto de ese dinero verás reflejado en tu cuenta
              bancaria cada mes. La diferencia entre salario bruto y salario neto puede oscilar
              entre el 20% y el 35% dependiendo del país, y comprender esta brecha te permite:
            </p>

            <ul className="list-none space-y-3 ml-0 pl-0">
              {[
                "Negociar mejores condiciones laborales con información real",
                "Planificar tus finanzas personales y ahorros",
                "Entender si una oferta de trabajo es competitiva",
                "Preparar tu declaración de la renta con antelación",
                "Comparar salarios entre diferentes países o regiones",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              El IRPF, ISR e impuestos sobre la renta explicados
            </h3>

            <p>
              El impuesto sobre la renta de las personas físicas recibe nombres diferentes según
              el país: <strong className="text-white">IRPF</strong> en España,{" "}
              <strong className="text-white">ISR</strong> en México,{" "}
              <strong className="text-white">Impuesto a las Ganancias</strong> en Argentina, o
              simplemente <strong className="text-white">Impuesto a la Renta</strong> en la mayoría
              de países latinoamericanos. Aunque los nombres cambian, el principio es el mismo:
              un impuesto progresivo que grava más a quienes más ingresos perciben.
            </p>

            <p>
              Nuestra calculadora de IRPF/ISR aplica las tablas oficiales de cada país con sus
              tramos y porcentajes correspondientes. Por ejemplo, en España el IRPF se estructura
              en tramos que van desde el 19% hasta el 47% según la comunidad autónoma, mientras
              que en México el ISR 2026 aplica tasas desde el 1.92% hasta el 35%. Con TuSueldo
              puedes visualizar exactamente cuánto pagarás en cada tramo fiscal.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              La declaración de la renta simplificada
            </h3>

            <p>
              Cada año, millones de contribuyentes enfrentan el desafío de presentar su
              declaración de la renta. Nuestro simulador de declaración anual te permite
              introducir todos tus ingresos (trabajo, autónomo, alquileres, inversiones) y todas
              las deducciones aplicables (vivienda, familia numerosa, discapacidad, educación),
              para anticipar si el resultado será <strong className="text-emerald-400">a devolver</strong>{" "}
              o <strong className="text-red-400">a pagar</strong>.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Noticias económicas actualizadas
            </h3>

            <p>
              Más allá de las calculadoras, TuSueldo ofrece una sección de{" "}
              <strong className="text-white">noticias económicas</strong> enfocada en los
              cambios fiscales, reformas tributarias y actualizaciones salariales de todos los
              países hispanohablantes. Mantente informado sobre cambios en el IRPF español,
              actualizaciones de las tablas del ISR mexicano, modificaciones en el impuesto a las
              Ganancias argentino, y mucho más.
            </p>
          </div>
        </article>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-slate-400">
              Resolvemos las dudas más comunes sobre cálculo de nómina e impuestos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <h3 className="text-white font-semibold">{faq.question}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed ml-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            Aviso legal y limitación de responsabilidad
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            TuSueldo proporciona herramientas de cálculo y contenido informativo con fines
            orientativos. Los resultados son estimaciones basadas en la legislación vigente
            publicada por las administraciones tributarias de cada país. No constituyen
            asesoramiento fiscal, contable ni legal. Para decisiones financieras importantes,
            recomendamos consultar con un profesional colegiado o asesor fiscal oficial.
            TuSueldo no se responsabiliza de decisiones tomadas a partir de los cálculos
            proporcionados. Los datos fiscales se actualizan periódicamente; verifique siempre
            la información oficial en los portales de AEAT, SAT, DIAN, SUNAT, SII o la
            administración tributaria correspondiente a su país de residencia fiscal.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 rounded-3xl p-8 sm:p-12 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comienza a calcular tu salario ahora
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              Herramientas gratuitas, datos actualizados y resultados instantáneos.
              Sin registro, sin complicaciones.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              Calcular mi sueldo neto
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const faqs = [
  {
    question: "¿Qué es el salario neto y en qué se diferencia del bruto?",
    answer:
      "El salario bruto es la cantidad total pactada en tu contrato antes de deducciones. El salario neto es lo que realmente recibes en tu cuenta bancaria tras descontar seguridad social, IRPF/ISR y otras retenciones. La diferencia suele oscilar entre el 20% y 35% del bruto según el país.",
  },
  {
    question: "¿Cómo se calcula el IRPF o ISR en mi país?",
    answer:
      "El impuesto sobre la renta se calcula mediante una escala progresiva por tramos. Cada tramo tiene un tipo impositivo diferente: los primeros euros tributan menos y los últimos más. TuSueldo aplica automáticamente las tablas oficiales de cada país para darte el cálculo exacto.",
  },
  {
    question: "¿Es gratuita el uso de las calculadoras de TuSueldo?",
    answer:
      "Sí, todas las herramientas de TuSueldo son 100% gratuitas y no requieren registro. Puedes calcular tu salario neto, IRPF/ISR y declaración de la renta tantas veces como necesites sin coste alguno.",
  },
  {
    question: "¿Los cálculos son exactos y fiables?",
    answer:
      "Nuestras calculadoras utilizan los datos fiscales oficiales más recientes de cada administración tributaria (AEAT, SAT, DIAN, SUNAT, SII, etc.). Sin embargo, son estimaciones orientativas. Para declaraciones oficiales, consulta siempre con un asesor fiscal.",
  },
  {
    question: "¿Qué países cubre TuSueldo?",
    answer:
      "TuSueldo ofrece calculadoras fiscalizadas para los 20 países hispanohablantes: España, México, Argentina, Colombia, Perú, Chile, Venezuela, Ecuador, Guatemala, Cuba, Bolivia, República Dominicana, Honduras, Paraguay, El Salvador, Nicaragua, Costa Rica, Panamá, Uruguay y Guinea Ecuatorial.",
  },
  {
    question: "¿Cómo afectan las deducciones a mi declaración de la renta?",
    answer:
      "Las deducciones reducen tu base imponible y, por tanto, el impuesto final a pagar. Incluyen gastos de vivienda, familia, educación, planes de pensiones, donaciones y más. Nuestro simulador de declaración te permite incluir todas las deducciones aplicables para calcular tu resultado.",
  },
];
