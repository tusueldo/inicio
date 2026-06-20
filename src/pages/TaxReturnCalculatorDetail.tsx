import { Link } from "react-router-dom";
import {
  FileText,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Home,
  Users,
  Baby,
  Heart,
  GraduationCap,
  Stethoscope,
  PiggyBank,
  Gift,
  Building2,
  TrendingDown,
} from "lucide-react";

export default function TaxReturnCalculatorDetail() {
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
              <FileText className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                Calculadora de Renta
              </h1>
              <p className="text-slate-400 text-lg">
                Simula tu declaración anual completa y descubre si te devuelven o tienes que pagar
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
            La <strong className="text-white">Calculadora de Renta</strong> es la herramienta más completa de TuSueldo. Te permite simular tu declaración de impuestos anual considerando <strong className="text-emerald-400">todas las fuentes de ingresos</strong>, <strong className="text-teal-400">todas las deducciones aplicables</strong> y las <strong className="text-emerald-400">retenciones ya practicadas</strong> para calcular el resultado final: si la hacienda pública te debe devolver dinero o si tú debes pagar.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: DollarSign, title: "Ingresos totales", desc: "Trabajo, autónomo, alquileres, inversiones" },
              { icon: TrendingDown, title: "Deducciones", desc: "Vivienda, familia, pensiones, donaciones" },
              { icon: PiggyBank, title: "Retenciones", desc: "Lo que ya te han descontado en nómina" },
              { icon: FileText, title: "Resultado final", desc: "A devolver (verde) o a pagar (rojo)" },
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

      {/* Ingresos que considera */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Ingresos que considera</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Rendimientos del trabajo</h3>
            <p className="text-slate-400 text-sm mb-4">
              Todos los ingresos derivados de tu actividad laboral, tanto por cuenta ajena como propia.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Salario y sueldo bruto anual",
                "Pagas extraordinarias",
                "Antigüedad y trienios",
                "Gratificaciones y bonus",
                "Horas extraordinarias",
                "Comisiones variables",
                "Dietas y gastos reembolsados",
                "Indemnizaciones tributables",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-teal-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Actividad económica</h3>
            <p className="text-slate-400 text-sm mb-4">
              Ingresos derivados de actividades empresariales o profesionales como autónomo.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Ingresos brutos anuales",
                "Facturación como autónomo",
                "Gastos deducibles del negocio",
                "Rendimiento neto calculado",
                "Pagos fraccionados realizados",
                "Ingresos previsionales",
                "Actividad secundaria",
                "Ingresos por colaboraciones",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
              <Home className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Rendimientos de inmuebles</h3>
            <p className="text-slate-400 text-sm mb-4">
              Ingresos por alquiler de viviendas, locales, plazas de garaje u otros inmuebles.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Alquiler de vivienda",
                "Alquiler de local comercial",
                "Alquiler de plaza de garaje",
                "Alquiler de trastero",
                "Ingresos de habitaciones",
                "Plataformas turísticas",
                "Gastos deducibles",
                "Intereses de hipoteca asociada",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-teal-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Rendimientos del capital</h3>
            <p className="text-slate-400 text-sm mb-4">
              Rentas obtenidas de inversiones financieras y otros instrumentos de ahorro.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Intereses de cuentas bancarias",
                "Dividendos de acciones",
                "Rendimientos de fondos",
                "Intereses de bonos",
                "Certificados de depósito",
                "Rendimientos asegurados",
                "Rentas vitalicias",
                "Cédulas hipotecarias",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
              <TrendingDown className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Ganancias patrimoniales</h3>
            <p className="text-slate-400 text-sm mb-4">
              Beneficios obtenidos por la transmisión de bienes o derechos.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Venta de acciones/fondos",
                "Plusvalía de inmuebles",
                "Venta de criptomonedas",
                "Venta de vehículos",
                "Transmisión de derechos",
                "Rescate de planes",
                "Ganancias derivadas de sorteos",
                "Premios y recompensas",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-4">
              <PiggyBank className="w-6 h-6 text-teal-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Retenciones soportadas</h3>
            <p className="text-slate-400 text-sm mb-4">
              Cantidades que ya te han sido descontadas a lo largo del año fiscal.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Retenciones de nómina",
                "Retenciones de pagos a cuenta",
                "Retenciones de alquileres",
                "Retenciones de bancos",
                "Retenciones de dividendos",
                "Pagos fraccionados autónomos",
                "Ingresos a cuenta del trabajo",
                "Retenciones de premios",
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

      {/* Deducciones */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Deducciones aplicables</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Home className="w-5 h-5 text-emerald-400" />
              Vivienda habitual
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Deducción por inversión en vivienda habitual (según normativa vigente en cada país).
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Intereses hipotecarios deducibles",
                "Amortización de préstamo",
                "Gastos de constitución hipoteca",
                "Cuotas prestación aseguradora",
                "Límite máximo deducible",
                "Acumulación de años anteriores",
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
              Cargas familiares
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Reducciones y deducciones por hijos, cónyuge y ascendientes a cargo.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Hijos menores de 25 años",
                "Hijos con discapacidad",
                "Cónyuge no separado a cargo",
                "Ascendientes mayores dependientes",
                "Familia numerosa",
                "Adopción y acogimiento",
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
              <PiggyBank className="w-5 h-5 text-emerald-400" />
              Previsión social
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Aportaciones a sistemas de previsión social con beneficios fiscales.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Plan de pensiones individual",
                "Plan de pensiones de empleo",
                "PPA (Plan Previsión Asegurado)",
                "Seguros de dependencia",
                "Mutualidades de previsión social",
                "Límite anual de aportaciones",
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
              <Stethoscope className="w-5 h-5 text-teal-400" />
              Gastos de salud
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Gastos médicos y sanitarios deducibles según normativa.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Primas de seguro médico",
                "Gastos hospitalarios",
                "Tratamientos médicos",
                "Medicamentos con receta",
                "Gafas y lentes de contacto",
                "Ortopedia y prótesis",
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
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              Educación
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Gastos educativos con beneficio fiscal en determinados países.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Colegios e instituciones",
                "Universidad y formación superior",
                "Material didáctico obligatorio",
                "Transporte escolar",
                "Comedor escolar",
                "Idiomas y formación reglada",
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
              <Gift className="w-5 h-5 text-teal-400" />
              Donaciones
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Aportaciones a entidades sin ánimo de lucro con deducción fiscal.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Donativos a ONGs declaradas",
                "Donativos a fundaciones",
                "Cuota de socios protector",
                "Donativos en especie",
                "Microdonaciones",
                "Límite porcentaje de la base",
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

      {/* Especificaciones por país */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Especificaciones por país</h2>

        <div className="space-y-4">
          {countrySpecs.map((country) => (
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
                <div className="grid sm:grid-cols-3 gap-4 text-sm mb-4">
                  <div>
                    <p className="text-slate-500 mb-1">Plazo de presentación</p>
                    <p className="text-white">{country.deadline}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">Quién debe declarar</p>
                    <p className="text-white">{country.obligation}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">Resultado típico</p>
                    <p className="text-white">{country.typical}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs">{country.notes}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Calcula tu declaración de la renta</h2>
          <p className="text-slate-400 mb-6">
            Introduce todos tus ingresos y deducciones para saber el resultado exacto
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
          >
            <FileText className="w-5 h-5" />
            Calcular declaración
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

const countrySpecs = [
  {
    code: "ES",
    flag: "🇪🇸",
    name: "España",
    taxName: "Declaración de la Renta (IRPF)",
    deadline: "Abril - 30 de junio (ejercicio anterior)",
    obligation: "Ingresos > 22.000€ (14.000€ si 2+ pagadores con >1.500€)",
    typical: "A devolver si retención > impuesto real",
    notes: "AEAT envía borrador automático. Posibilidad de modificación, renuncia al marco territorial, atribución de rentas (sociedades civiles). Campaña autonómica con deducciones adicionales.",
  },
  {
    code: "MX",
    flag: "🇲🇽",
    name: "México",
    taxName: "Declaración Anual (ISR)",
    deadline: "Marzo - 30 de abril (ejercicio anterior)",
    obligation: "Todos los asalariados con ingresos > 400,000 MXN anuales",
    typical: "A pagar o saldo a favor según retenciones",
    notes: "El SAT pre-llena la declaración. Saldo a favor puede solicitarse en devolución automática (5 días) o en 13 parcialidades. Personas físicas sin actividad empresarial presentan formato simplificado.",
  },
  {
    code: "AR",
    flag: "🇦🇷",
    name: "Argentina",
    taxName: "Declaración Jurada Ganancias",
    deadline: "Marzo - Abril (ejercicio calendario anterior)",
    obligation: "Quienes superen MNI anual o Ganancia mínima presunta",
    typical: "Variable según retenciones de SUSS y Ganancias",
    notes: "ARCA (ex-AFIP) exige clave fiscal. Bienes personales asociado. Sujetos a actualización por inflación. Cálculo mensual vs anual puede generar diferencias.",
  },
  {
    code: "CO",
    flag: "🇨🇴",
    name: "Colombia",
    taxName: "Declaración de Renta",
    deadline: "Agosto - septiembre (topes por NIT)",
    obligation: "Patrimonio > 190.000 UVT, ingresos > 47.500 UVT, o consumos > 26.000 UVT",
    typical: "A devolver o saldo a pagar según retenciones",
    notes: "DIAN pre-graba datos. Cédula de ingresos laborales automáticamente pre-llenada. Cédula de pensiones, rentas de capital y no laborales se llenan manualmente.",
  },
  {
    code: "CL",
    flag: "🇨🇱",
    name: "Chile",
    taxName: "Declaración de Impuestos",
    deadline: "Abril - 30 de junio (operación renta)",
    obligation: "Ingresos > 13,5 UF mensuales o Patrimonio > 200 UTA",
    typical: "A pagar o saldo a favor según retenciones",
    notes: "SII pre-elabora la propuesta. Basta confirmar o modificar. Fondos mutuos, acciones, venta de inmuebles deben declararse. Top-up permite reemplazar RUT de administradora.",
  },
  {
    code: "PE",
    flag: "🇵🇪",
    name: "Perú",
    taxName: "Declaración Jurada Anual",
    deadline: "Marzo - 31 de marzo (5ta categoría)",
    obligation: "Ingresos brutos > 7 UIT anuales por rentas de trabajo",
    typical: "A devolver si retenciones > impuesto",
    notes: "SUNAT habilita formulario virtual 739. Plazo extendido según último dígito de RUC. Rentas de 4ta pueden generar saldo a favor por deducción de 3 UIT.",
  },
  {
    code: "VE",
    flag: "🇻🇪",
    name: "Venezuela",
    taxName: "Declaración ISLR",
    deadline: "Marzo - 31 de marzo (personas naturales)",
    obligation: "Ingresos netos > 1.000 UT anuales",
    typical: "Pocas declaraciones con resultado (retenciones escasas)",
    notes: "SENIAT gestiona el portal. Desgravamen único de 774 UT automático para asalariados. Cálculo en bolívares o dólares según tipo de cambio BCV oficial.",
  },
  {
    code: "EC",
    flag: "🇪🇨",
    name: "Ecuador",
    taxName: "Declaración Imp. Renta",
    deadline: "Febrero - marzo según noveno dígito de cédula",
    obligation: "Ingresos > fracción básica exenta ($11.902 USD) o patrim. > $200.000",
    typical: "A pagar o saldo a favor",
    notes: "SRI emite anuncios de impuesto a la renta. Gastos personales deducibles: vivienda, educación, salud, alimentación (máx 1.3x fracción básica)",
  },
  {
    code: "UY",
    flag: "🇺🇾",
    name: "Uruguay",
    taxName: "Declaración Jurada IRPF",
    deadline: "Mayo - 30 de junio (o junio-julio para 2da categoría)",
    obligation: "Ingresos > 18 BPC anuales o patrimonio > cierto umbral",
    typical: "A devolver con frecuencias (deducciones por aportes)",
    notes: "DGI pre-carga información. Deducción del 8% de aportes BPS/FONASA reduce impuesto. Zonas de frontera y interior tienen beneficios.",
  },
  {
    code: "PY",
    flag: "🇵🇾",
    name: "Paraguay",
    taxName: "Declaración Jurada IRP",
    deadline: "Marzo - 30 de abril (si IRP anual > 10 salarios mínimos)",
    obligation: "Ingresos netos > 10 salarios mínimos anuales",
    typical: "Poco habitual (muchos exentos del IRP)",
    notes: "SET habilita formularios. Nuevo monotributo (2026) unifica IRP+IVA+IPS para independientes con ingresos < Gs. 150M.",
  },
  {
    code: "GT",
    flag: "🇬🇹",
    name: "Guatemala",
    taxName: "Declaración ISR",
    deadline: "Enero - 31 de marzo (ejercicio anterior)",
    obligation: "Ingresos > Q30.000 anuales o patrimonio > Q2M",
    typical: "A pagar según retenciones aplicadas",
    notes: "SAT ofrece declaración en línea. Régimen optativo (tramos) para personas individuales asalariadas. Régimen general para actividades lucrativas.",
  },
  {
    code: "DO",
    flag: "🇩🇴",
    name: "Rep. Dominicana",
    taxName: "Declaración Jurada ISR",
    deadline: "Marzo - 31 de marzo (ejercicio anterior)",
    obligation: "Ingresos > RD$416.220 anuales",
    typical: "A pagar o saldo a favor según retenciones",
    notes: "DGII ofrece portal web. Personas físicas asalariadas presentan declaración anual. Decimotercer sueldo excluido.",
  },
  {
    code: "BO",
    flag: "🇧🇴",
    name: "Bolivia",
    taxName: "Declaración RC-IVA",
    deadline: "Julio - agosto (ejercicio gestión anterior)",
    obligation: "Quienes perciben ingresos por trabajo dependiente superiores a 2 SMN",
    typical: "RC-IVA resulta en 0 o pago adicional",
    notes: "Impuestos Nacionales gestiona la declaración. Formulario 110 para RC-IVA. Resultado en la boleta de pago. Puede solicitar devolución si saldo a favor.",
  },
];
