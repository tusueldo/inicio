export type Periodicity = "mensual" | "anual";
export type WorkerType = "empleado" | "autonomo" | "funcionario";
export type CivilStatus = "soltero" | "casado" | "pareja_hecho" | "separado" | "viudo";
export type DisabilityLevel = "ninguna" | "33_65_sin" | "33_65_con" | "65_mas";
export type PayPeriod = 12 | 13 | 14;

export interface Region {
  code: string;
  name: string;
  taxBonus?: number;
}

export interface Category {
  code: string;
  name: string;
  cotizacionSS?: number;
}

export interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
}

export interface FamilyDeductions {
  childUnder25: number;
  childUnder3: number;
  child3to25: number;
  thirdChildBonus: number;
  fourthPlusChildBonus: number;
  singleParentBonus: number;
  spouse: number;
  ascendantUnder65: number;
  ascendant65to75: number;
  ascendantOver75: number;
  ascendantLivingWithTaxpayer: number;
  ascendantDisability33_65: number;
  ascendantDisability65plus: number;
}

export interface DisabilityDeductions {
  level33_65_noMobility: number;
  level33_65_mobility: number;
  level65plus: number;
  thirdPartyHelp: number;
}

export interface SocialContribution {
  name: string;
  rateEmpleado: number;
  rateAutonomo: number;
  rateFuncionario?: number;
}

export interface CountryTaxData {
  code: string;
  name: string;
  flagSvg: string;
  currency: string;
  currencySymbol: string;
  zeroDecimals: boolean;
  taxBrackets: TaxBracket[];
  socialContributions: SocialContribution[];
  autonomousBrackets?: TaxBracket[];
  regions: Region[];
  categories: Category[];
  familyDeductions: FamilyDeductions;
  disabilityDeductions: DisabilityDeductions;
  personalMinimum: number;
  minimumWage: number;
  UTEquivalent?: number;
  UITEquivalent?: number;
  hasRegionalTax: boolean;
  hasPensionChoice: boolean;
  pensionPublicRate: number;
  pensionPrivateRate: number;
  autonemoDeductionRate: number;
  sindicatoRate?: number;
  payPeriodsAffectMonthly: boolean;
}

export interface DeductionDetail {
  name: string;
  amount: number;
  pctOfGross: number;
}

export interface SalaryResult {
  grossAnnual: number;
  grossMonthly: number;
  netAnnual: number;
  netMonthly: number;
  deductions: DeductionDetail[];
  totalDeductions: number;
  effectiveRate: number;
  taxBreakdown: { bracket: TaxBracket; tax: number }[];
  appliedDeductions: { name: string; amount: number }[];
}

export const countries: CountryTaxData[] = [
  {
    code: "ES",
    name: "España",
    flagSvg: "🇪🇸",
    currency: "EUR",
    currencySymbol: "€",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 12450, rate: 0.19 },
      { min: 12450, max: 20200, rate: 0.24 },
      { min: 20200, max: 35200, rate: 0.30 },
      { min: 35200, max: 60000, rate: 0.37 },
      { min: 60000, max: 300000, rate: 0.45 },
      { min: 300000, max: null, rate: 0.47 },
    ],
    autonomousBrackets: [
      { min: 0, max: 12450, rate: 0.095 },
      { min: 12450, max: 20200, rate: 0.12 },
      { min: 20200, max: 35200, rate: 0.15 },
      { min: 35200, max: 60000, rate: 0.18 },
      { min: 60000, max: null, rate: 0.215 },
    ],
    socialContributions: [
      { name: "Contingencias comunes", rateEmpleado: 0.047, rateAutonomo: 0.0, rateFuncionario: 0.0195 },
      { name: "Desempleo", rateEmpleado: 0.0155, rateAutonomo: 0.0, rateFuncionario: 0.0 },
      { name: "Formación profesional", rateEmpleado: 0.001, rateAutonomo: 0.001, rateFuncionario: 0.001 },
      { name: "FOGASA", rateEmpleado: 0.002, rateAutonomo: 0.0, rateFuncionario: 0.0 },
      { name: "Cuota autónomos RETA", rateEmpleado: 0.0, rateAutonomo: 0.305 },
      { name: "MUFACE", rateEmpleado: 0.0, rateAutonomo: 0.0, rateFuncionario: 0.017 },
    ],
    regions: [
      { code: "AN", name: "Andalucía" },
      { code: "AR", name: "Aragón" },
      { code: "AS", name: "Asturias" },
      { code: "IB", name: "Baleares" },
      { code: "CN", name: "Canarias", taxBonus: -0.02 },
      { code: "CB", name: "Cantabria" },
      { code: "CM", name: "Castilla-La Mancha" },
      { code: "CL", name: "Castilla y León" },
      { code: "CT", name: "Cataluña" },
      { code: "CE", name: "Ceuta", taxBonus: -0.25 },
      { code: "EX", name: "Extremadura" },
      { code: "GA", name: "Galicia" },
      { code: "MD", name: "Madrid" },
      { code: "ML", name: "Melilla", taxBonus: -0.25 },
      { code: "MC", name: "Murcia" },
      { code: "NC", name: "Navarra" },
      { code: "PV", name: "País Vasco" },
      { code: "RI", name: "La Rioja" },
      { code: "VC", name: "Comunidad Valenciana" },
    ],
    categories: [
      { code: "ING", name: "Ingenieros/Licenciados", cotizacionSS: 1.5 },
      { code: "INGT", name: "Ingenieros técnicos/Peritos", cotizacionSS: 1.5 },
      { code: "AYUD", name: "Ayudantes titulados", cotizacionSS: 1.5 },
      { code: "OFIC", name: "Oficiales administrativos", cotizacionSS: 1.5 },
      { code: "SUBA", name: "Subalternos", cotizacionSS: 1.5 },
      { code: "AUX", name: "Auxiliares administrativos", cotizacionSS: 1.5 },
      { code: "OFIO", name: "Oficiales de primera", cotizacionSS: 1.6 },
      { code: "OFIS", name: "Oficiales de segunda", cotizacionSS: 1.6 },
      { code: "PEON", name: "Peones", cotizacionSS: 1.6 },
      { code: "MEN", name: "Menores de 18 años", cotizacionSS: 1.6 },
    ],
    familyDeductions: {
      childUnder25: 2400,
      childUnder3: 2700,
      child3to25: 2400,
      thirdChildBonus: 400,
      fourthPlusChildBonus: 500,
      singleParentBonus: 2800,
      spouse: 3400,
      ascendantUnder65: 0,
      ascendant65to75: 1200,
      ascendantOver75: 2200,
      ascendantLivingWithTaxpayer: 1800,
      ascendantDisability33_65: 3000,
      ascendantDisability65plus: 5500,
    },
    disabilityDeductions: {
      level33_65_noMobility: 3000,
      level33_65_mobility: 9000,
      level65plus: 12000,
      thirdPartyHelp: 3000,
    },
    personalMinimum: 5550,
    minimumWage: 1260,
    hasRegionalTax: true,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0.07,
    payPeriodsAffectMonthly: true,
  },
  {
    code: "MX",
    name: "México",
    flagSvg: "🇲🇽",
    currency: "MXN",
    currencySymbol: "$",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 7727.17, rate: 0.0192 },
      { min: 7727.17, max: 65651.07, rate: 0.064 },
      { min: 65651.07, max: 115375.9, rate: 0.1088 },
      { min: 115375.9, max: 134119.03, rate: 0.16 },
      { min: 134119.03, max: 160577.65, rate: 0.1636 },
      { min: 160577.65, max: 323862.07, rate: 0.2136 },
      { min: 323862.07, max: 539851.15, rate: 0.2352 },
      { min: 539851.15, max: 1079688.95, rate: 0.30 },
      { min: 1079688.95, max: 3239030.07, rate: 0.32 },
      { min: 3239030.07, max: null, rate: 0.35 },
    ],
    socialContributions: [
      { name: "IMSS Enfermedad/Maternidad", rateEmpleado: 0.004, rateAutonomo: 0.0 },
      { name: "IMSS Invalidez y Vida", rateEmpleado: 0.00625, rateAutonomo: 0.0 },
      { name: "IMSS Retiro/Cesantía", rateEmpleado: 0.02, rateAutonomo: 0.0 },
      { name: "ISSSTE", rateEmpleado: 0.0, rateAutonomo: 0.0, rateFuncionario: 0.0625 },
    ],
    regions: [
      { code: "AGS", name: "Aguascalientes" },
      { code: "BC", name: "Baja California" },
      { code: "BCS", name: "Baja California Sur" },
      { code: "CAMP", name: "Campeche" },
      { code: "CHIS", name: "Chiapas" },
      { code: "CHIH", name: "Chihuahua" },
      { code: "COAH", name: "Coahuila" },
      { code: "COL", name: "Colima" },
      { code: "CDMX", name: "Ciudad de México" },
      { code: "DGO", name: "Durango" },
      { code: "GTO", name: "Guanajuato" },
      { code: "GRO", name: "Guerrero" },
      { code: "HGO", name: "Hidalgo" },
      { code: "JAL", name: "Jalisco" },
      { code: "MEX", name: "Estado de México" },
      { code: "MICH", name: "Michoacán" },
      { code: "MOR", name: "Morelos" },
      { code: "NAY", name: "Nayarit" },
      { code: "NL", name: "Nuevo León" },
      { code: "OAX", name: "Oaxaca" },
      { code: "PUE", name: "Puebla" },
      { code: "QRO", name: "Querétaro" },
      { code: "QROO", name: "Quintana Roo" },
      { code: "SLP", name: "San Luis Potosí" },
      { code: "SIN", name: "Sinaloa" },
      { code: "SON", name: "Sonora" },
      { code: "TAB", name: "Tabasco" },
      { code: "TAM", name: "Tamaulipas" },
      { code: "TLAX", name: "Tlaxcala" },
      { code: "VER", name: "Veracruz" },
      { code: "YUC", name: "Yucatán" },
      { code: "ZAC", name: "Zacatecas" },
    ],
    categories: [
      { code: "PATRON", name: "Patrón" },
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROF", name: "Profesional/Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OBRERO", name: "Obrero" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 0,
    minimumWage: 7468,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "AR",
    name: "Argentina",
    flagSvg: "🇦🇷",
    currency: "ARS",
    currencySymbol: "$",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 1063500, rate: 0.05 },
      { min: 1063500, max: 1590000, rate: 0.09 },
      { min: 1590000, max: 2654500, rate: 0.12 },
      { min: 2654500, max: 3716500, rate: 0.15 },
      { min: 3716500, max: 4778500, rate: 0.19 },
      { min: 4778500, max: 6377300, rate: 0.23 },
      { min: 6377300, max: 9563500, rate: 0.27 },
      { min: 9563500, max: null, rate: 0.35 },
    ],
    socialContributions: [
      { name: "Jubilación", rateEmpleado: 0.11, rateAutonomo: 0.11, rateFuncionario: 0.11 },
      { name: "Obra social", rateEmpleado: 0.03, rateAutonomo: 0.03, rateFuncionario: 0.03 },
      { name: "PAMI", rateEmpleado: 0.03, rateAutonomo: 0.03, rateFuncionario: 0.03 },
      { name: "INSSJP", rateEmpleado: 0.03, rateAutonomo: 0.0, rateFuncionario: 0.0 },
    ],
    regions: [
      { code: "CABA", name: "Ciudad Autónoma de Buenos Aires" },
      { code: "BA", name: "Buenos Aires" },
      { code: "CA", name: "Catamarca" },
      { code: "CH", name: "Chaco" },
      { code: "CT", name: "Chubut" },
      { code: "CB", name: "Córdoba" },
      { code: "CR", name: "Corrientes" },
      { code: "ER", name: "Entre Ríos" },
      { code: "FO", name: "Formosa" },
      { code: "JY", name: "Jujuy" },
      { code: "LP", name: "La Pampa" },
      { code: "LR", name: "La Rioja" },
      { code: "MZ", name: "Mendoza" },
      { code: "MI", name: "Misiones" },
      { code: "NQ", name: "Neuquén" },
      { code: "RN", name: "Río Negro" },
      { code: "SA", name: "Salta" },
      { code: "SJ", name: "San Juan" },
      { code: "SL", name: "San Luis" },
      { code: "SC", name: "Santa Cruz" },
      { code: "SF", name: "Santa Fe" },
      { code: "SE", name: "Santiago del Estero" },
      { code: "TF", name: "Tierra del Fuego" },
      { code: "TU", name: "Tucumán" },
    ],
    categories: [
      { code: "DIRECTOR", name: "Director/Gerente" },
      { code: "JEFATURA", name: "Jefe/Supervisor" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 531750,
      childUnder3: 531750,
      child3to25: 531750,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 531750,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 2658750,
      level33_65_mobility: 2658750,
      level65plus: 5317500,
      thirdPartyHelp: 0,
    },
    personalMinimum: 1063500,
    minimumWage: 266432,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    sindicatoRate: 0.03,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "CO",
    name: "Colombia",
    flagSvg: "🇨🇴",
    currency: "COP",
    currencySymbol: "$",
    zeroDecimals: true,
    taxBrackets: [
      { min: 0, max: 2900000, rate: 0.0 },
      { min: 2900000, max: 4360000, rate: 0.19 },
      { min: 4360000, max: 7250000, rate: 0.28 },
      { min: 7250000, max: 12325000, rate: 0.33 },
      { min: 12325000, max: null, rate: 0.39 },
    ],
    socialContributions: [
      { name: "Salud EPS", rateEmpleado: 0.04, rateAutonomo: 0.125 },
      { name: "Pensión AFP", rateEmpleado: 0.04, rateAutonomo: 0.16 },
      { name: "Fondo de solidaridad pensional", rateEmpleado: 0.01, rateAutonomo: 0.0 },
      { name: "ARL", rateEmpleado: 0.0, rateAutonomo: 0.00522 },
    ],
    regions: [
      { code: "AMA", name: "Amazonas" },
      { code: "ANT", name: "Antioquia" },
      { code: "ARA", name: "Arauca" },
      { code: "ATL", name: "Atlántico" },
      { code: "BOL", name: "Bolívar" },
      { code: "BOY", name: "Boyacá" },
      { code: "CAL", name: "Caldas" },
      { code: "CAQ", name: "Caquetá" },
      { code: "CAS", name: "Casanare" },
      { code: "CAU", name: "Cauca" },
      { code: "CES", name: "Cesar" },
      { code: "CHO", name: "Chocó" },
      { code: "COR", name: "Córdoba" },
      { code: "CUN", name: "Cundinamarca" },
      { code: "GUA", name: "Guainía" },
      { code: "GUV", name: "Guaviare" },
      { code: "HUI", name: "Huila" },
      { code: "LAG", name: "La Guajira" },
      { code: "MAG", name: "Magdalena" },
      { code: "MET", name: "Meta" },
      { code: "NAR", name: "Nariño" },
      { code: "NSA", name: "Norte de Santander" },
      { code: "PUT", name: "Putumayo" },
      { code: "QUI", name: "Quindío" },
      { code: "RIS", name: "Risaralda" },
      { code: "SAN", name: "Santander" },
      { code: "SAP", name: "San Andrés y Providencia" },
      { code: "SUC", name: "Sucre" },
      { code: "TOL", name: "Tolima" },
      { code: "VAC", name: "Valle del Cauca" },
      { code: "VAU", name: "Vaupés" },
      { code: "VID", name: "Vichada" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "AUXILIAR", name: "Auxiliar" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 380000,
      childUnder3: 380000,
      child3to25: 380000,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 380000,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 0,
    minimumWage: 1423500,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0.25,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "CL",
    name: "Chile",
    flagSvg: "🇨🇱",
    currency: "CLP",
    currencySymbol: "$",
    zeroDecimals: true,
    taxBrackets: [
      { min: 0, max: 10200000, rate: 0.0 },
      { min: 10200000, max: 22800000, rate: 0.04 },
      { min: 22800000, max: 38400000, rate: 0.08 },
      { min: 38400000, max: 55200000, rate: 0.135 },
      { min: 55200000, max: 138000000, rate: 0.23 },
      { min: 138000000, max: 230000000, rate: 0.304 },
      { min: 230000000, max: 408000000, rate: 0.35 },
      { min: 408000000, max: null, rate: 0.40 },
    ],
    socialContributions: [
      { name: "AFP (pensión)", rateEmpleado: 0.1127, rateAutonomo: 0.1127 },
      { name: "Salud (FONASA)", rateEmpleado: 0.07, rateAutonomo: 0.07 },
      { name: "Seguro de invalidez y sobrevivencia", rateEmpleado: 0.0171, rateAutonomo: 0.0171 },
      { name: "Seguro de la ley de accidentes", rateEmpleado: 0.009, rateAutonomo: 0.0 },
      { name: "APV (voluntario)", rateEmpleado: 0.0, rateAutonomo: 0.0 },
    ],
    regions: [
      { code: "AI", name: "Arica y Parinacota" },
      { code: "TA", name: "Tarapacá" },
      { code: "AN", name: "Antofagasta" },
      { code: "AT", name: "Atacama" },
      { code: "CO", name: "Coquimbo" },
      { code: "VS", name: "Valparaíso" },
      { code: "RM", name: "Metropolitana" },
      { code: "LI", name: "Libertador Bernardo O'Higgins" },
      { code: "ML", name: "Maule" },
      { code: "NB", name: "Ñuble" },
      { code: "BI", name: "Biobío" },
      { code: "AR", name: "Araucanía" },
      { code: "LR", name: "Los Ríos" },
      { code: "LL", name: "Los Lagos" },
      { code: "AP", name: "Aysén" },
      { code: "MG", name: "Magallanes" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo/Gerente" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 0,
    minimumWage: 500000,
    hasRegionalTax: false,
    hasPensionChoice: true,
    pensionPublicRate: 0.07,
    pensionPrivateRate: 0.1127,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "PE",
    name: "Perú",
    flagSvg: "🇵🇪",
    currency: "PEN",
    currencySymbol: "S/",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 27900, rate: 0.08 },
      { min: 27900, max: 41850, rate: 0.14 },
      { min: 41850, max: 69750, rate: 0.17 },
      { min: 69750, max: 97650, rate: 0.20 },
      { min: 97650, max: null, rate: 0.30 },
    ],
    socialContributions: [
      { name: "ONP (pensión pública)", rateEmpleado: 0.13, rateAutonomo: 0.13 },
      { name: "AFP (pensión privada)", rateEmpleado: 0.10, rateAutonomo: 0.10 },
      { name: "EsSalud", rateEmpleado: 0.0, rateAutonomo: 0.09 },
    ],
    regions: [
      { code: "AMA", name: "Amazonas" },
      { code: "ANC", name: "Áncash" },
      { code: "APU", name: "Apurímac" },
      { code: "ARE", name: "Arequipa" },
      { code: "AYA", name: "Ayacucho" },
      { code: "CAJ", name: "Cajamarca" },
      { code: "CAL", name: "Callao" },
      { code: "CUS", name: "Cusco" },
      { code: "HVC", name: "Huancavelica" },
      { code: "HUC", name: "Huánuco" },
      { code: "ICA", name: "Ica" },
      { code: "JUN", name: "Junín" },
      { code: "LAL", name: "La Libertad" },
      { code: "LAM", name: "Lambayeque" },
      { code: "LIM", name: "Lima" },
      { code: "LOR", name: "Loreto" },
      { code: "MDD", name: "Madre de Dios" },
      { code: "MOQ", name: "Moquegua" },
      { code: "PAS", name: "Pasco" },
      { code: "PIU", name: "Piura" },
      { code: "PUN", name: "Puno" },
      { code: "SAM", name: "San Martín" },
      { code: "TAC", name: "Tacna" },
      { code: "TUM", name: "Tumbes" },
      { code: "UCA", name: "Ucayali" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo/Gerente" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 0,
    minimumWage: 1025,
    UITEquivalent: 5300,
    hasRegionalTax: false,
    hasPensionChoice: true,
    pensionPublicRate: 0.13,
    pensionPrivateRate: 0.10,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "VE",
    name: "Venezuela",
    flagSvg: "🇻🇪",
    currency: "USD",
    currencySymbol: "$",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 1320, rate: 0.0 },
      { min: 1320, max: 2160, rate: 0.06 },
      { min: 2160, max: 3600, rate: 0.09 },
      { min: 3600, max: 5760, rate: 0.12 },
      { min: 5760, max: 8640, rate: 0.16 },
      { min: 8640, max: 12960, rate: 0.20 },
      { min: 12960, max: 18720, rate: 0.24 },
      { min: 18720, max: 28800, rate: 0.29 },
      { min: 28800, max: null, rate: 0.34 },
    ],
    socialContributions: [
      { name: "Seguro Social Obligatorio (SSO)", rateEmpleado: 0.04, rateAutonomo: 0.04 },
      { name: "Fondo de Ahorro Obligatorio", rateEmpleado: 0.01, rateAutonomo: 0.01 },
      { name: "Ley de Política Habitacional", rateEmpleado: 0.01, rateAutonomo: 0.01 },
    ],
    regions: [
      { code: "AM", name: "Amazonas" },
      { code: "AN", name: "Anzoátegui" },
      { code: "AP", name: "Apure" },
      { code: "AR", name: "Aragua" },
      { code: "BA", name: "Barinas" },
      { code: "BO", name: "Bolívar" },
      { code: "CA", name: "Carabobo" },
      { code: "CO", name: "Cojedes" },
      { code: "DA", name: "Delta Amacuro" },
      { code: "DC", name: "Distrito Capital" },
      { code: "FA", name: "Falcón" },
      { code: "GU", name: "Guárico" },
      { code: "LA", name: "Lara" },
      { code: "ME", name: "Mérida" },
      { code: "MI", name: "Miranda" },
      { code: "MO", name: "Monagas" },
      { code: "NE", name: "Nueva Esparta" },
      { code: "PO", name: "Portuguesa" },
      { code: "SU", name: "Sucre" },
      { code: "TA", name: "Táchira" },
      { code: "TR", name: "Trujillo" },
      { code: "VA", name: "Vargas" },
      { code: "YA", name: "Yaracuy" },
      { code: "ZU", name: "Zulia" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 1320,
    UTEquivalent: 132,
    minimumWage: 130,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "EC",
    name: "Ecuador",
    flagSvg: "🇪🇨",
    currency: "USD",
    currencySymbol: "$",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 13440, rate: 0.0 },
      { min: 13440, max: 21440, rate: 0.05 },
      { min: 21440, max: 29440, rate: 0.10 },
      { min: 29440, max: 37440, rate: 0.12 },
      { min: 37440, max: 74944, rate: 0.15 },
      { min: 74944, max: 112416, rate: 0.20 },
      { min: 112416, max: 149888, rate: 0.25 },
      { min: 149888, max: 199840, rate: 0.30 },
      { min: 199840, max: null, rate: 0.37 },
    ],
    socialContributions: [
      { name: "IESS Jubilación", rateEmpleado: 0.0664, rateAutonomo: 0.0664 },
      { name: "IESS Salud", rateEmpleado: 0.0281, rateAutonomo: 0.0281 },
      { name: "IESS Riesgos del trabajo", rateEmpleado: 0.0, rateAutonomo: 0.0035 },
    ],
    regions: [
      { code: "A", name: "Azuay" },
      { code: "B", name: "Bolívar" },
      { code: "C", name: "Carchi" },
      { code: "F", name: "Cañar" },
      { code: "H", name: "Chimborazo" },
      { code: "X", name: "Cotopaxi" },
      { code: "O", name: "El Oro" },
      { code: "E", name: "Esmeraldas" },
      { code: "W", name: "Galápagos" },
      { code: "G", name: "Guayas" },
      { code: "I", name: "Imbabura" },
      { code: "L", name: "Loja" },
      { code: "M", name: "Manabí" },
      { code: "S", name: "Morona Santiago" },
      { code: "N", name: "Napo" },
      { code: "D", name: "Orellana" },
      { code: "Y", name: "Pastaza" },
      { code: "P", name: "Pichincha" },
      { code: "SE", name: "Santa Elena" },
      { code: "SD", name: "Santo Domingo de los Tsáchilas" },
      { code: "U", name: "Sucumbíos" },
      { code: "T", name: "Tungurahua" },
      { code: "Z", name: "Zamora Chinchipe" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 448,
      childUnder3: 448,
      child3to25: 448,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 448,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 13440,
    minimumWage: 460,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "BO",
    name: "Bolivia",
    flagSvg: "🇧🇴",
    currency: "BOB",
    currencySymbol: "Bs",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 55200, rate: 0.0 },
      { min: 55200, max: 124200, rate: 0.13 },
      { min: 124200, max: null, rate: 0.25 },
    ],
    socialContributions: [
      { name: "AFP Jubilación", rateEmpleado: 0.1271, rateAutonomo: 0.10 },
      { name: "AFP Riesgo común", rateEmpleado: 0.0171, rateAutonomo: 0.0171 },
      { name: "AFP Riesgo profesional", rateEmpleado: 0.0, rateAutonomo: 0.0052 },
      { name: "Caja de salud", rateEmpleado: 0.0, rateAutonomo: 0.10 },
    ],
    regions: [
      { code: "BEN", name: "Beni" },
      { code: "CHU", name: "Chuquisaca" },
      { code: "COC", name: "Cochabamba" },
      { code: "LPZ", name: "La Paz" },
      { code: "ORU", name: "Oruro" },
      { code: "PAN", name: "Pando" },
      { code: "POT", name: "Potosí" },
      { code: "SCZ", name: "Santa Cruz" },
      { code: "TJA", name: "Tarija" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 55200,
    minimumWage: 2556,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "PY",
    name: "Paraguay",
    flagSvg: "🇵🇾",
    currency: "PYG",
    currencySymbol: "₲",
    zeroDecimals: true,
    taxBrackets: [
      { min: 0, max: 12000000, rate: 0.0 },
      { min: 12000000, max: null, rate: 0.08 },
    ],
    socialContributions: [
      { name: "IPS Jubilación", rateEmpleado: 0.055, rateAutonomo: 0.10 },
      { name: "IPS Salud", rateEmpleado: 0.035, rateAutonomo: 0.0 },
    ],
    regions: [
      { code: "ASU", name: "Asunción" },
      { code: "CZE", name: "Concepción" },
      { code: "SAN", name: "San Pedro" },
      { code: "COR", name: "Cordillera" },
      { code: "GUA", name: "Guairá" },
      { code: "CAU", name: "Caaguazú" },
      { code: "CAA", name: "Caazapá" },
      { code: "ITP", name: "Itapúa" },
      { code: "MIS", name: "Misiones" },
      { code: "PAR", name: "Paraguarí" },
      { code: "ALT", name: "Alto Paraná" },
      { code: "CEN", name: "Central" },
      { code: "NEM", name: "Ñeembucú" },
      { code: "AMB", name: "Amambay" },
      { code: "CAN", name: "Canindeyú" },
      { code: "PRE", name: "Presidente Hayes" },
      { code: "BOQ", name: "Boquerón" },
      { code: "ALTCH", name: "Alto Paraguay" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 12000000,
    minimumWage: 2685000,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "UY",
    name: "Uruguay",
    flagSvg: "🇺🇾",
    currency: "UYU",
    currencySymbol: "$",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 110400, rate: 0.0 },
      { min: 110400, max: 208800, rate: 0.10 },
      { min: 208800, max: 417600, rate: 0.22 },
      { min: 417600, max: 732000, rate: 0.29 },
      { min: 732000, max: 1044000, rate: 0.33 },
      { min: 1044000, max: null, rate: 0.36 },
    ],
    socialContributions: [
      { name: "Jubilación (BPS)", rateEmpleado: 0.15, rateAutonomo: 0.15 },
      { name: "FONASA", rateEmpleado: 0.03, rateAutonomo: 0.05 },
      { name: "FRL", rateEmpleado: 0.00125, rateAutonomo: 0.0 },
    ],
    regions: [
      { code: "A", name: "Artigas" },
      { code: "C", name: "Canelones" },
      { code: "E", name: "Cerro Largo" },
      { code: "D", name: "Colonia" },
      { code: "S", name: "Durazno" },
      { code: "F", name: "Flores" },
      { code: "H", name: "Florida" },
      { code: "L", name: "Lavalleja" },
      { code: "M", name: "Maldonado" },
      { code: "O", name: "Montevideo" },
      { code: "P", name: "Paysandú" },
      { code: "R", name: "Río Negro" },
      { code: "V", name: "Rivera" },
      { code: "B", name: "Rocha" },
      { code: "N", name: "Salto" },
      { code: "J", name: "San José" },
      { code: "K", name: "Soriano" },
      { code: "I", name: "Tacuarembó" },
      { code: "T", name: "Treinta y Tres" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 110400,
    minimumWage: 22180,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "GT",
    name: "Guatemala",
    flagSvg: "🇬🇹",
    currency: "GTQ",
    currencySymbol: "Q",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 48000, rate: 0.05 },
      { min: 48000, max: null, rate: 0.07 },
    ],
    socialContributions: [
      { name: "IGSS", rateEmpleado: 0.0483, rateAutonomo: 0.0 },
      { name: "IRTRA", rateEmpleado: 0.01, rateAutonomo: 0.0 },
    ],
    regions: [
      { code: "AV", name: "Alta Verapaz" },
      { code: "BV", name: "Baja Verapaz" },
      { code: "CM", name: "Chimaltenango" },
      { code: "CQ", name: "Chiquimula" },
      { code: "PR", name: "El Progreso" },
      { code: "ES", name: "Escuintla" },
      { code: "GU", name: "Guatemala" },
      { code: "HU", name: "Huehuetenango" },
      { code: "IZ", name: "Izabal" },
      { code: "JA", name: "Jalapa" },
      { code: "JU", name: "Jutiapa" },
      { code: "PE", name: "Petén" },
      { code: "QZ", name: "Quetzaltenango" },
      { code: "QC", name: "Quiché" },
      { code: "RE", name: "Retalhuleu" },
      { code: "SA", name: "Sacatepéquez" },
      { code: "SM", name: "San Marcos" },
      { code: "SR", name: "Santa Rosa" },
      { code: "SO", name: "Sololá" },
      { code: "SU", name: "Suchitepéquez" },
      { code: "TO", name: "Totonicapán" },
      { code: "ZA", name: "Zacapa" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 0,
    minimumWage: 3136,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "HN",
    name: "Honduras",
    flagSvg: "🇭🇳",
    currency: "HNL",
    currencySymbol: "L",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 150000, rate: 0.0 },
      { min: 150000, max: 250000, rate: 0.15 },
      { min: 250000, max: 500000, rate: 0.20 },
      { min: 500000, max: null, rate: 0.25 },
    ],
    socialContributions: [
      { name: "IHSS", rateEmpleado: 0.025, rateAutonomo: 0.0 },
      { name: "RAP", rateEmpleado: 0.015, rateAutonomo: 0.0 },
    ],
    regions: [
      { code: "AT", name: "Atlántida" },
      { code: "CH", name: "Choluteca" },
      { code: "CL", name: "Colón" },
      { code: "CM", name: "Comayagua" },
      { code: "CP", name: "Copán" },
      { code: "CR", name: "Cortés" },
      { code: "EP", name: "El Paraíso" },
      { code: "FM", name: "Francisco Morazán" },
      { code: "GD", name: "Gracias a Dios" },
      { code: "IN", name: "Intibucá" },
      { code: "IB", name: "Islas de la Bahía" },
      { code: "LP", name: "La Paz" },
      { code: "LE", name: "Lempira" },
      { code: "OC", name: "Ocotepeque" },
      { code: "OL", name: "Olancho" },
      { code: "SB", name: "Santa Bárbara" },
      { code: "VL", name: "Valle" },
      { code: "YO", name: "Yoro" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 150000,
    minimumWage: 10434,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "SV",
    name: "El Salvador",
    flagSvg: "🇸🇻",
    currency: "USD",
    currencySymbol: "$",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 6508, rate: 0.0 },
      { min: 6508, max: 19524, rate: 0.10 },
      { min: 19524, max: 45962, rate: 0.20 },
      { min: 45962, max: null, rate: 0.30 },
    ],
    socialContributions: [
      { name: "ISSS", rateEmpleado: 0.03, rateAutonomo: 0.0 },
      { name: "AFP", rateEmpleado: 0.0675, rateAutonomo: 0.0 },
      { name: "IFS", rateEmpleado: 0.00725, rateAutonomo: 0.0 },
    ],
    regions: [
      { code: "AH", name: "Ahuachapán" },
      { code: "CA", name: "Cabañas" },
      { code: "CH", name: "Chalatenango" },
      { code: "CU", name: "Cuscatlán" },
      { code: "LI", name: "La Libertad" },
      { code: "MO", name: "Morazán" },
      { code: "PA", name: "La Paz" },
      { code: "UN", name: "La Unión" },
      { code: "SS", name: "San Salvador" },
      { code: "SM", name: "San Miguel" },
      { code: "SV", name: "San Vicente" },
      { code: "SA", name: "Santa Ana" },
      { code: "SO", name: "Sonsonate" },
      { code: "US", name: "Usulután" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 0,
    minimumWage: 365,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "NI",
    name: "Nicaragua",
    flagSvg: "🇳🇮",
    currency: "NIO",
    currencySymbol: "C$",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 100000, rate: 0.0 },
      { min: 100000, max: 200000, rate: 0.15 },
      { min: 200000, max: 350000, rate: 0.20 },
      { min: 350000, max: 500000, rate: 0.25 },
      { min: 500000, max: null, rate: 0.30 },
    ],
    socialContributions: [
      { name: "INSS", rateEmpleado: 0.0625, rateAutonomo: 0.0625 },
    ],
    regions: [
      { code: "BO", name: "Boaco" },
      { code: "CA", name: "Carazo" },
      { code: "CH", name: "Chinandega" },
      { code: "CO", name: "Chontales" },
      { code: "ES", name: "Estelí" },
      { code: "GR", name: "Granada" },
      { code: "JI", name: "Jinotega" },
      { code: "LE", name: "León" },
      { code: "MD", name: "Madriz" },
      { code: "MN", name: "Managua" },
      { code: "MS", name: "Masaya" },
      { code: "MT", name: "Matagalpa" },
      { code: "NS", name: "Nueva Segovia" },
      { code: "RS", name: "Río San Juan" },
      { code: "RIS", name: "Rivas" },
      { code: "SJ", name: "San Juan" },
      { code: "SJL", name: "San Juan del Río Coco" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 100000,
    minimumWage: 7560,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "CR",
    name: "Costa Rica",
    flagSvg: "🇨🇷",
    currency: "CRC",
    currencySymbol: "₡",
    zeroDecimals: true,
    taxBrackets: [
      { min: 0, max: 10554000, rate: 0.0 },
      { min: 10554000, max: 15882000, rate: 0.10 },
      { min: 15882000, max: 26420000, rate: 0.15 },
      { min: 26420000, max: 52923000, rate: 0.20 },
      { min: 52923000, max: null, rate: 0.25 },
    ],
    socialContributions: [
      { name: "CCSS Pensión", rateEmpleado: 0.055, rateAutonomo: 0.1067 },
      { name: "CCSS Salud", rateEmpleado: 0.055, rateAutonomo: 0.0 },
      { name: "IVM", rateEmpleado: 0.01, rateAutonomo: 0.0 },
      { name: "Banco Popular", rateEmpleado: 0.01, rateAutonomo: 0.0 },
    ],
    regions: [
      { code: "A", name: "Alajuela" },
      { code: "C", name: "Cartago" },
      { code: "G", name: "Guanacaste" },
      { code: "H", name: "Heredia" },
      { code: "L", name: "Limón" },
      { code: "P", name: "Puntarenas" },
      { code: "SJ", name: "San José" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 0,
    minimumWage: 404000,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "PA",
    name: "Panamá",
    flagSvg: "🇵🇦",
    currency: "USD",
    currencySymbol: "$",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 11000, rate: 0.0 },
      { min: 11000, max: 50000, rate: 0.15 },
      { min: 50000, max: null, rate: 0.25 },
    ],
    socialContributions: [
      { name: "CSS Seguro Social", rateEmpleado: 0.0975, rateAutonomo: 0.0975 },
      { name: "CSS Riesgos profesionales", rateEmpleado: 0.0, rateAutonomo: 0.018 },
      { name: "Seguro Educativo", rateEmpleado: 0.0125, rateAutonomo: 0.0125 },
    ],
    regions: [
      { code: "B", name: "Bocas del Toro" },
      { code: "C", name: "Chiriquí" },
      { code: "D", name: "Coclé" },
      { code: "E", name: "Colón" },
      { code: "H", name: "Darién" },
      { code: "G", name: "Emberá" },
      { code: "I", name: "Guna Yala" },
      { code: "K", name: "Herrera" },
      { code: "A", name: "Los Santos" },
      { code: "F", name: "Ng\u00E4be-Buglé" },
      { code: "M", name: "Panamá" },
      { code: "L", name: "Panamá Oeste" },
      { code: "J", name: "Veraguas" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 11000,
    minimumWage: 536,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "DO",
    name: "República Dominicana",
    flagSvg: "🇩🇴",
    currency: "DOP",
    currencySymbol: "RD$",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 416220, rate: 0.0 },
      { min: 416220, max: 624329, rate: 0.15 },
      { min: 624329, max: 867123, rate: 0.20 },
      { min: 867123, max: null, rate: 0.25 },
    ],
    socialContributions: [
      { name: "TSS Pensiones", rateEmpleado: 0.0287, rateAutonomo: 0.0287 },
      { name: "TSS Salud", rateEmpleado: 0.0304, rateAutonomo: 0.0304 },
      { name: "TSS Riesgos laborales", rateEmpleado: 0.0012, rateAutonomo: 0.0 },
      { name: "AFP", rateEmpleado: 0.0287, rateAutonomo: 0.0287 },
    ],
    regions: [
      { code: "AZ", name: "Azua" },
      { code: "BH", name: "Baoruco" },
      { code: "BR", name: "Barahona" },
      { code: "DA", name: "Dajabón" },
      { code: "DN", name: "Distrito Nacional" },
      { code: "DU", name: "Duarte" },
      { code: "EL", name: "Elías Piña" },
      { code: "ET", name: "El Seibo" },
      { code: "ES", name: "Espaillat" },
      { code: "HM", name: "Hato Mayor" },
      { code: "IN", name: "Independencia" },
      { code: "LA", name: "La Altagracia" },
      { code: "LR", name: "La Romana" },
      { code: "LI", name: "La Vega" },
      { code: "MT", name: "María Trinidad Sánchez" },
      { code: "MC", name: "Monseñor Nouel" },
      { code: "MN", name: "Monte cristi" },
      { code: "MP", name: "Monte Plata" },
      { code: "PG", name: "Pedernales" },
      { code: "PR", name: "Peravia" },
      { code: "PU", name: "Puerto Plata" },
      { code: "HM", name: "Hermanas Mirabal" },
      { code: "SA", name: "Samaná" },
      { code: "SH", name: "Sanchez Ramírez" },
      { code: "SC", name: "San Cristóbal" },
      { code: "SJ", name: "San José de Ocoa" },
      { code: "SM", name: "San Juan" },
      { code: "SPM", name: "San Pedro de Macorís" },
      { code: "SD", name: "Santo Domingo" },
      { code: "SL", name: "Santiago" },
      { code: "SR", name: "Santiago Rodríguez" },
      { code: "SI", name: "Santiago de los Caballeros" },
      { code: "VA", name: "Valverde" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 416220,
    minimumWage: 27744,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "CU",
    name: "Cuba",
    flagSvg: "🇨🇺",
    currency: "CUP",
    currencySymbol: "$",
    zeroDecimals: false,
    taxBrackets: [
      { min: 0, max: 84000, rate: 0.0 },
      { min: 84000, max: 180000, rate: 0.05 },
      { min: 180000, max: 300000, rate: 0.10 },
      { min: 300000, max: 480000, rate: 0.15 },
      { min: 480000, max: null, rate: 0.20 },
    ],
    socialContributions: [],
    regions: [
      { code: "IJ", name: "Isla de la Juventud" },
      { code: "PR", name: "Pinar del Río" },
      { code: "AR", name: "Artemisa" },
      { code: "MY", name: "Mayabeque" },
      { code: "LH", name: "La Habana" },
      { code: "MT", name: "Matanzas" },
      { code: "VC", name: "Villa Clara" },
      { code: "CI", name: "Cienfuegos" },
      { code: "SS", name: "Sancti Spíritus" },
      { code: "CA", name: "Ciego de Ávila" },
      { code: "CA", name: "Camag\u00FCey" },
      { code: "LT", name: "Las Tunas" },
      { code: "HL", name: "Holguín" },
      { code: "GR", name: "Granma" },
      { code: "ST", name: "Santiago de Cuba" },
      { code: "GT", name: "Guantánamo" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 0,
    minimumWage: 2100,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
  {
    code: "GQ",
    name: "Guinea Ecuatorial",
    flagSvg: "🇬🇶",
    currency: "XAF",
    currencySymbol: "FCFA",
    zeroDecimals: true,
    taxBrackets: [
      { min: 0, max: 600000, rate: 0.0 },
      { min: 600000, max: 1500000, rate: 0.10 },
      { min: 1500000, max: 3000000, rate: 0.20 },
      { min: 3000000, max: null, rate: 0.35 },
    ],
    socialContributions: [
      { name: "Caja de Previsión", rateEmpleado: 0.04, rateAutonomo: 0.04 },
    ],
    regions: [
      { code: "AN", name: "Annobón" },
      { code: "BN", name: "Bioko Norte" },
      { code: "BS", name: "Bioko Sur" },
      { code: "CS", name: "Centro Sur" },
      { code: "KN", name: "Kié-Ntem" },
      { code: "LI", name: "Litoral" },
      { code: "WN", name: "Wele-Nzas" },
    ],
    categories: [
      { code: "DIRECTIVO", name: "Directivo" },
      { code: "PROFESIONAL", name: "Profesional" },
      { code: "TECNICO", name: "Técnico" },
      { code: "ADMIN", name: "Administrativo" },
      { code: "OPERARIO", name: "Operario" },
    ],
    familyDeductions: {
      childUnder25: 0,
      childUnder3: 0,
      child3to25: 0,
      thirdChildBonus: 0,
      fourthPlusChildBonus: 0,
      singleParentBonus: 0,
      spouse: 0,
      ascendantUnder65: 0,
      ascendant65to75: 0,
      ascendantOver75: 0,
      ascendantLivingWithTaxpayer: 0,
      ascendantDisability33_65: 0,
      ascendantDisability65plus: 0,
    },
    disabilityDeductions: {
      level33_65_noMobility: 0,
      level33_65_mobility: 0,
      level65plus: 0,
      thirdPartyHelp: 0,
    },
    personalMinimum: 600000,
    minimumWage: 108000,
    hasRegionalTax: false,
    hasPensionChoice: false,
    pensionPublicRate: 0,
    pensionPrivateRate: 0,
    autonemoDeductionRate: 0,
    payPeriodsAffectMonthly: false,
  },
];

export interface CalculationInput {
  grossAnnual: number;
  country: CountryTaxData;
  workerType: WorkerType;
  periodicity: Periodicity;
  payPeriod: PayPeriod;
  region: string;
  category: string;
  familyEnabled: boolean;
  civilStatus: CivilStatus;
  numChildren: number;
  numChildrenUnder3: number;
  exclusiveCustody: boolean;
  sharedDeduction: boolean;
  numAscendantsUnder65: number;
  numAscendants65to75: number;
  numAscendantsOver75: number;
  taxpayerEnabled: boolean;
  taxpayerDisability: DisabilityLevel;
  taxpayerThirdPartyHelp: boolean;
  descendantsEnabled: boolean;
  numDescendantsDisability33_65: number;
  numDescendantsDisability33_65Mobility: number;
  numDescendantsDisability65plus: number;
  ascendantsEnabled: boolean;
  numAscendantsDisability33_65: number;
  numAscendantsDisability33_65Mobility: number;
  numAscendantsDisability65plus: number;
}

export function calculateSalary(input: CalculationInput): SalaryResult {
  const { grossAnnual, country, workerType, payPeriod } = input;
  const grossMonthly = grossAnnual / payPeriod;

  let taxableIncome = grossAnnual;
  const appliedDeductions: { name: string; amount: number }[] = [];
  const deductions: DeductionDetail[] = [];

  // Personal minimum
  if (country.personalMinimum > 0) {
    taxableIncome = Math.max(0, taxableIncome - country.personalMinimum);
    appliedDeductions.push({ name: "Mínimo personal", amount: country.personalMinimum });
  }

  // Autónomo deductions (Spain specific)
  if (workerType === "autonomo" && country.autonemoDeductionRate > 0) {
    const autoDed = taxableIncome * country.autonemoDeductionRate;
    taxableIncome = Math.max(0, taxableIncome - autoDed);
    appliedDeductions.push({ name: "Deducción autónomos", amount: autoDed });
  }

  // Family deductions (if enabled)
  if (input.familyEnabled) {
    const fd = country.familyDeductions;

    // Spouse deduction (Spain)
    if (fd.spouse > 0 && (input.civilStatus === "casado" || input.civilStatus === "pareja_hecho")) {
      taxableIncome = Math.max(0, taxableIncome - fd.spouse);
      appliedDeductions.push({ name: "Mínimo por cónyuge", amount: fd.spouse });
    }

    // Children deductions
    if (input.numChildren > 0 && fd.childUnder25 > 0) {
      let totalChildDed = 0;

      // Children under 3
      const under3 = Math.min(input.numChildrenUnder3, input.numChildren);
      const over3 = input.numChildren - under3;

      if (fd.childUnder3 > 0 && under3 > 0) {
        totalChildDed += under3 * fd.childUnder3;
      }
      if (fd.child3to25 > 0 && over3 > 0) {
        totalChildDed += over3 * fd.child3to25;
      }

      // Bonuses for 3rd child and beyond
      if (input.numChildren >= 3 && fd.thirdChildBonus > 0) {
        totalChildDed += fd.thirdChildBonus;
      }
      if (input.numChildren >= 4 && fd.fourthPlusChildBonus > 0) {
        totalChildDed += fd.fourthPlusChildBonus * (input.numChildren - 4 + 1);
      }

      // Single parent bonus
      if (input.civilStatus === "soltero" && input.numChildren > 0 && fd.singleParentBonus > 0) {
        totalChildDed += fd.singleParentBonus;
      }

      // Exclusive custody doubles the deduction (Spain)
      if (input.exclusiveCustody && country.code === "ES") {
        totalChildDed *= 1.5;
      }

      // Shared deduction halves it
      if (input.sharedDeduction && country.code === "ES") {
        totalChildDed *= 0.5;
      }

      if (totalChildDed > 0) {
        taxableIncome = Math.max(0, taxableIncome - totalChildDed);
        appliedDeductions.push({ name: `Mínimo por ${input.numChildren} hijo${input.numChildren > 1 ? "s" : ""}`, amount: totalChildDed });
      }
    }

    // Ascendants deductions
    const totalAscendants = input.numAscendantsUnder65 + input.numAscendants65to75 + input.numAscendantsOver75;
    if (totalAscendants > 0) {
      let totalAscDed = 0;

      if (fd.ascendant65to75 > 0 && input.numAscendants65to75 > 0) {
        totalAscDed += input.numAscendants65to75 * fd.ascendant65to75;
      }
      if (fd.ascendantOver75 > 0 && input.numAscendantsOver75 > 0) {
        totalAscDed += input.numAscendantsOver75 * fd.ascendantOver75;
      }
      if (fd.ascendantLivingWithTaxpayer > 0 && input.numAscendantsUnder65 > 0) {
        totalAscDed += input.numAscendantsUnder65 * fd.ascendantLivingWithTaxpayer;
      }

      if (totalAscDed > 0) {
        taxableIncome = Math.max(0, taxableIncome - totalAscDed);
        appliedDeductions.push({ name: `Mínimo por ${totalAscendants} ascendiente${totalAscendants > 1 ? "s" : ""}`, amount: totalAscDed });
      }
    }
  }

  // Disability deductions (taxpayer)
  if (input.taxpayerEnabled) {
    const dd = country.disabilityDeductions;
    let disabilityDeduction = 0;

    if (input.taxpayerDisability === "33_65_sin" && dd.level33_65_noMobility > 0) {
      disabilityDeduction = dd.level33_65_noMobility;
    } else if (input.taxpayerDisability === "33_65_con" && dd.level33_65_mobility > 0) {
      disabilityDeduction = dd.level33_65_mobility;
    } else if (input.taxpayerDisability === "65_mas" && dd.level65plus > 0) {
      disabilityDeduction = dd.level65plus;
    }

    if (input.taxpayerThirdPartyHelp && dd.thirdPartyHelp > 0) {
      disabilityDeduction += dd.thirdPartyHelp;
    }

    if (disabilityDeduction > 0) {
      taxableIncome = Math.max(0, taxableIncome - disabilityDeduction);
      appliedDeductions.push({ name: "Mínimo por discapacidad", amount: disabilityDeduction });
    }
  }

  // Family deductions from data (Argentina, etc.)
  if (country.familyDeductions.childUnder25 > 0 && input.familyEnabled) {
    if (input.civilStatus === "casado" || input.civilStatus === "pareja_hecho") {
      const spouseDed = country.familyDeductions.spouse;
      if (spouseDed > 0) {
        taxableIncome = Math.max(0, taxableIncome - spouseDed);
        appliedDeductions.push({ name: "Cónyuge a cargo", amount: spouseDed });
      }
    }

    if (input.numChildren > 0) {
      const childDed = input.numChildren * country.familyDeductions.childUnder25;
      taxableIncome = Math.max(0, taxableIncome - childDed);
      appliedDeductions.push({ name: `Hijos a cargo (${input.numChildren})`, amount: childDed });
    }
  }

  // Colombia: 25% renta exenta
  if (country.code === "CO" && workerType === "autonomo") {
    const exenta = Math.min(taxableIncome * 0.25, taxableIncome);
    taxableIncome = Math.max(0, taxableIncome - exenta);
    appliedDeductions.push({ name: "Renta exenta autónomos (25%)", amount: exenta });
  }

  // Income tax calculation
  let incomeTax = 0;
  const taxBreakdown: { bracket: TaxBracket; tax: number }[] = [];
  let remaining = taxableIncome;

  for (const bracket of country.taxBrackets) {
    if (remaining <= 0) break;
    const bracketWidth = bracket.max ? bracket.max - bracket.min : remaining;
    const taxableInBracket = Math.min(remaining, bracketWidth);
    const tax = taxableInBracket * bracket.rate;
    incomeTax += tax;
    taxBreakdown.push({ bracket, tax });
    remaining -= taxableInBracket;
  }

  // Autonomous tax (Spain)
  if (country.autonomousBrackets && country.hasRegionalTax) {
    let autonomousTax = 0;
    let autoRemaining = taxableIncome;

    for (const bracket of country.autonomousBrackets) {
      if (autoRemaining <= 0) break;
      const bracketWidth = bracket.max ? bracket.max - bracket.min : autoRemaining;
      const taxableInBracket = Math.min(autoRemaining, bracketWidth);
      autonomousTax += taxableInBracket * bracket.rate;
      autoRemaining -= taxableInBracket;
    }

    // Regional tax bonus
    const region = country.regions.find(r => r.code === input.region);
    if (region?.taxBonus) {
      autonomousTax = autonomousTax * (1 + region.taxBonus);
    }

    incomeTax += autonomousTax;
  }

  // Tax name by country
  const taxNames: Record<string, string> = {
    ES: "IRPF",
    MX: "ISR",
    AR: "Impuesto a las Ganancias",
    CO: "Retención en la fuente",
    CL: "Impuesto Único",
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
    CR: "IR",
    PA: "ISR",
    DO: "ISR",
    CU: "Impuesto sobre ingresos",
    GQ: "Impuesto sobre la renta",
  };

  if (incomeTax > 0) {
    deductions.push({
      name: taxNames[country.code] || "Impuesto sobre la renta",
      amount: incomeTax,
      pctOfGross: grossAnnual > 0 ? (incomeTax / grossAnnual) * 100 : 0,
    });
  }

  // Social contributions
  for (const sc of country.socialContributions) {
    let rate = workerType === "empleado" ? sc.rateEmpleado :
               workerType === "autonomo" ? sc.rateAutonomo :
               sc.rateFuncionario ?? sc.rateEmpleado;

    // Spain: additional SS based on category
    if (country.code === "ES" && workerType === "empleado") {
      const category = country.categories.find(c => c.code === input.category);
      if (category?.cotizacionSS) {
        // Already included in the base rate
      }
    }

    if (rate > 0) {
      const amount = grossAnnual * rate;
      deductions.push({
        name: sc.name,
        amount,
        pctOfGross: grossAnnual > 0 ? (amount / grossAnnual) * 100 : 0,
      });
    }
  }

  // Sindicato (Argentina)
  if (country.sindicatoRate && workerType === "empleado") {
    const amount = grossAnnual * country.sindicatoRate;
    deductions.push({
      name: "Cuota sindical",
      amount,
      pctOfGross: grossAnnual > 0 ? (amount / grossAnnual) * 100 : 0,
    });
  }

  const totalDeductions = deductions.reduce((sum, d) => sum + d.amount, 0);
  const netAnnual = grossAnnual - totalDeductions;
  const netMonthly = country.payPeriodsAffectMonthly ? grossAnnual / Math.max(12, payPeriod) : grossAnnual / 12;
  const effectiveRate = grossAnnual > 0 ? (totalDeductions / grossAnnual) * 100 : 0;

  return {
    grossAnnual,
    grossMonthly: grossAnnual / 12,
    netAnnual,
    netMonthly: netAnnual / (country.payPeriodsAffectMonthly ? payPeriod : 12),
    deductions,
    totalDeductions,
    effectiveRate,
    taxBreakdown,
    appliedDeductions,
  };
}

export function formatCurrency(amount: number, country: CountryTaxData): string {
  const decimals = country.zeroDecimals ? 0 : 2;
  return `${country.currencySymbol} ${amount.toLocaleString("es-ES", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}
