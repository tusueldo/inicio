import { countries } from "./countries";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  country: string;
  category: string;
  date: string;
  readTime: number;
  imageUrl: string;
  content: string;
}

// Helper to get formatted date relative to today
const getDateAgo = (daysAgo: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split('T')[0];
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
    GQ: "Impuesto sobre la Renta",
  };
  return taxNames[code] || "Impuesto sobre la Renta";
};

const getTaxAuthority = (code: string) => {
  const auth: Record<string, string> = {
    ES: "AEAT (Agencia Tributaria)",
    MX: "SAT (Servicio de Administración Tributaria)",
    AR: "ARCA (Agencia de Recaudación y Control Aduanero)",
    CO: "DIAN (Dirección de Impuestos y Aduanas Nacionales)",
    CL: "SII (Servicio de Impuestos Internos)",
    PE: "SUNAT (Superintendencia Nacional de Aduanas y de Administración Tributaria)",
    VE: "SENIAT",
    EC: "SRI (Servicio de Rentas Internas)",
    BO: "SIN (Servicio de Impuestos Nacionales)",
    PY: "DNIT (Dirección Nacional de Ingresos Tributarios)",
    UY: "DGI (Dirección General Impositiva)",
    GT: "SAT (Superintendencia de Administración Tributaria)",
    HN: "SAR (Servicio de Administración de Rentas)",
    SV: "Ministerio de Hacienda",
    NI: "DGI (Dirección General de Ingresos)",
    CR: "Ministerio de Hacienda",
    PA: "DGI (Dirección General de Ingresos)",
    DO: "DGII (Dirección General de Impuestos Internos)",
    CU: "ONAT (Oficina Nacional de Administración Tributaria)",
    GQ: "Dirección General de Impuestos",
  };
  return auth[code] || "la Administración Tributaria";
};

// Generate 10 articles for each country
const generatePosts = (): Post[] => {
  const generated: Post[] = [];

  const templates = [
    {
      title: "Reforma del {taxName} en {country}: nuevos tramos impositivos para este ejercicio",
      excerpt: "El gobierno de {country} ha aprobado la reestructuración de los tramos del {taxName} para adaptarlos a la inflación reciente.",
      category: "Fiscalidad",
      readTime: 4,
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
      content: `La reforma fiscal aprobada recientemente en **{country}** introduce cambios significativos en el cálculo del **{taxName}**. El objetivo principal es ajustar los límites de las bandas tributarias a la inflación acumulada, protegiendo el poder adquisitivo de las rentas medias y bajas.

## ¿Qué cambia en las tablas del {taxName}?

A partir de este mes, {taxAuthority} aplicará los nuevos tramos progresivos. La tasa marginal más baja se amplía para beneficiar a los contribuyentes que perciben un salario cercano al salario mínimo de **{minimumWage} {currency}**.

### Puntos clave de la medida:
- **Reducción de la carga fiscal** para ingresos inferiores al umbral mínimo.
- **Ajuste automático de tramos** según el índice de precios al consumidor.
- **Mayor control fiscal** sobre las rentas más altas mediante nuevos tipos marginales.

Los departamentos de recursos humanos ya están actualizando las retenciones en las nóminas mensuales para evitar desajustes al momento de presentar la declaración anual. Se aconseja a todos los trabajadores revisar su recibo de sueldo para confirmar el cálculo.`
    },
    {
      title: "Ajuste al Salario Mínimo en {country}: se establece en {minimumWage} {currency}",
      excerpt: "El Ministerio de Trabajo de {country} oficializó el nuevo sueldo mínimo legal que regirá para el sector privado y público.",
      category: "Salarios",
      readTime: 3,
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80",
      content: `El gobierno de **{country}** ha alcanzado un acuerdo con sindicatos y empresarios para establecer el salario mínimo en **{minimumWage} {currency}** mensuales. Esta medida busca combatir la pérdida de poder adquisitivo y asegurar condiciones dignas para todos los empleados.

## Detalles del incremento

El ajuste porcentual representa una mejora directa que también afectará las bases mínimas de cotización a la seguridad social y al cálculo de futuras pensiones.

| Concepto | Valor Actual |
|---|---|
| Salario Mínimo | {minimumWage} {currencySymbol} |
| Moneda Oficial | {currency} |
| Frecuencia de pago | Mensual |

## Impacto en los costos de contratación

Las micro y pequeñas empresas de {country} contarán con un subsidio temporal o facilidades fiscales para mitigar el impacto sobre los costos laborales. Los expertos señalan que el incremento dinamizará el consumo interno en el corto plazo.`
    },
    {
      title: "Cómo deducir gastos de teletrabajo en tu declaración de {taxName} en {country}",
      excerpt: "Conoce los requisitos legales de {taxAuthority} para deducir facturas de luz, internet y equipo informático en {country}.",
      category: "Legislación",
      readTime: 5,
      imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
      content: `El trabajo en remoto se consolida en **{country}** y, con él, las oportunidades para ahorrar en impuestos. La normativa vigente permite a los empleados que trabajan desde casa deducir un porcentaje de sus gastos de servicios en la declaración de **{taxName}**.

## ¿Qué gastos son deducibles?

La autoridad fiscal (**{taxAuthority}**) permite incluir los siguientes conceptos en la base de deducción:

- **Conexión a internet y telefonía**: hasta un 30% del gasto mensual facturado.
- **Consumo eléctrico**: proporcional a los metros cuadrados dedicados a la actividad laboral en la vivienda.
- **Equipamiento de oficina**: sillas ergonómicas, pantallas y ordenadores adquiridos para el teletrabajo.

## Requisitos obligatorios
Para que la deducción sea válida, el contribuyente debe contar con un **contrato o acuerdo formal de teletrabajo** firmado por su empleador y conservar todas las facturas a su nombre.`
    },
    {
      title: "La digitalización de {taxAuthority} acelera las devoluciones de impuestos",
      excerpt: "{taxAuthority} de {country} estrena una nueva plataforma web y aplicación móvil que procesará las declaraciones en tiempo récord.",
      category: "Economía",
      readTime: 4,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      content: `Buenas noticias para los contribuyentes en **{country}**. La entidad fiscal **{taxAuthority}** ha completado la migración de sus sistemas hacia una plataforma inteligente basada en inteligencia artificial, diseñada para agilizar el procesamiento de las declaraciones de **{taxName}**.

## Devoluciones en menos de 7 días

El principal beneficio de esta actualización tecnológica es la reducción del tiempo de espera para las devoluciones de saldo a favor. Lo que antes tardaba meses, ahora se depositará en las cuentas bancarias en un plazo máximo de una semana en la mayoría de los casos.

> **Importante:** Recuerda tener actualizada tu clave digital y tu cuenta bancaria registrada en el portal de {taxAuthority} para evitar retrasos en tu depósito.

La plataforma también incluye un simulador de sueldo neto y retenciones para ayudar a los autónomos a estimar sus pagos trimestrales de manera más precisa.`
    },
    {
      title: "Exenciones del {taxName} para incentivar el empleo joven en {country}",
      excerpt: "Los jóvenes profesionales de {country} menores de 30 años tendrán una reducción del 50% en la tasa efectiva del {taxName} durante sus primeros empleos.",
      category: "Fiscalidad",
      readTime: 3,
      imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      content: `Con el objetivo de combatir el desempleo juvenil y retener el talento en **{country}**, el Congreso ha aprobado una ley de estímulo fiscal para jóvenes de hasta 30 años.

## Beneficios fiscales aprobados

La nueva normativa contempla una exención parcial del pago del **{taxName}** sobre los primeros ingresos laborales.

- **Exención del 100%**: Para salarios inferiores a 1.5 veces el salario mínimo de {minimumWage} {currencySymbol}.
- **Tarifa reducida**: Descuento del 50% en el impuesto a pagar sobre la porción de ingresos que exceda el límite exento.
- **Simplificación**: Declaración anual simplificada en un solo clic a través de la app de {taxAuthority}.

Esta medida incentiva tanto la inserción formal en el mercado laboral como el emprendimiento de nuevos proyectos tecnológicos en {country}.`
    },
    {
      title: "El impacto de la inflación en las tasas de cotización a la seguridad social en {country}",
      excerpt: "Las cotizaciones para salud y pensiones se ajustan en {country} para equilibrar las cuentas ante el alza de precios generales.",
      category: "Economía",
      readTime: 4,
      imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80",
      content: `La inflación acumulada en **{country}** ha presionado al alza los costos del sistema público de salud y pensiones. Como respuesta, el gobierno ha anunciado un ajuste en el porcentaje de aportaciones obrero-patronales destinadas a la seguridad social.

## Nuevas bases impositivas y de cotización

Tanto para trabajadores en planilla (empleados) como para profesionales independientes (autónomos), las bases máximas de cotización se elevan. Esto significa que los sueldos más altos aportarán una cuota mayor al sistema.

### Impacto en el bolsillo:
1. **Sueldos bajos**: El aporte se mantiene congelado para proteger el sueldo mínimo de {minimumWage} {currency}.
2. **Sueldos medios**: Se prevé un incremento marginal del 0.2% en el descuento obligatorio por salud.
3. **Autónomos**: El aporte mensual base se recalcula de acuerdo a los ingresos reales del ejercicio anterior.

El objetivo del ajuste es garantizar la sostenibilidad del sistema previsional en {country} frente a las fluctuaciones del mercado global.`
    },
    {
      title: "Guía práctica: deducciones familiares disponibles en la ley del {taxName} de {country}",
      excerpt: "Tener hijos a cargo o ascendientes mayores reduce tu base imponible. Descubre cómo aplicar las deducciones de {taxAuthority}.",
      category: "Fiscalidad",
      readTime: 5,
      imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
      content: `Optimizar la declaración de impuestos es clave para la economía de los hogares en **{country}**. La ley de **{taxName}** incluye importantes reducciones a la base gravable basadas en las circunstancias familiares del contribuyente.

## Principales deducciones por carga familiar

El portal de **{taxAuthority}** detalla las siguientes deducciones válidas:

- **Por hijos menores de 25 años**: Descuento fijo anual por cada hijo que conviva con el contribuyente y no tenga ingresos propios significativos.
- **Por ascendientes a cargo**: Reducción aplicable si se convive con padres o abuelos mayores de 65 años.
- **Bono monoparental**: Deducción especial para padres o madres solteras con custodia exclusiva.

Asegúrate de registrar debidamente el estado civil y los datos de tus dependientes en los sistemas de tu empleador para que el cálculo mensual de tus retenciones de sueldo neto sea el correcto.`
    },
    {
      title: "Nuevas regulaciones fiscales para trabajadores independientes y autónomos en {country}",
      excerpt: "{taxAuthority} simplifica las obligaciones mensuales e implementa facturación digital para todos los freelancers en {country}.",
      category: "Legislación",
      readTime: 4,
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      content: `El panorama para los freelancers y profesionales independientes en **{country}** experimenta un cambio importante. La nueva normativa impulsada por la **{taxAuthority}** simplifica la forma de declarar y pagar el **{taxName}**.

## El nuevo régimen tributario unificado

A partir de este mes, los autónomos con facturación anual inferior a cierto límite podrán optar por una tarifa fija que reemplaza al IVA y al {taxName} regular, reduciendo costos administrativos.

- **Facturación Electrónica obligatoria**: Todas las transacciones deben registrarse digitalmente para validez fiscal.
- **Presentación trimestral**: Se unifican los formularios de declaración en un único trámite online.
- **Deducción simplificada**: Los gastos de oficina y movilidad podrán deducirse de forma estándar sin necesidad de justificar cada ticket.

Esta reforma promueve la formalización de miles de microemprendimientos que operan de forma independiente en {country}.`
    },
    {
      title: "¿Qué es la Renta Exenta y cómo calcula {taxAuthority} tus retenciones en {country}?",
      excerpt: "Conoce qué porcentaje de tus ingresos brutos en {country} está libre del {taxName} y de deducciones de seguridad social.",
      category: "Salarios",
      readTime: 3,
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      content: `Al recibir tu nómina, es común ver deducciones y retenciones destinadas a la salud, pensión y el **{taxName}**. Sin embargo, la legislación de **{country}** protege ciertos conceptos del salario considerándolos como renta exenta.

## Conceptos que no pagan el {taxName}

La **{taxAuthority}** establece que los siguientes rubros no forman parte de la base gravable:

1. **Aportes obligatorios a pensión**: El dinero destinado a tu jubilación está libre de impuestos de renta.
2. **Prestaciones por enfermedad o maternidad**: Los subsidios de salud percibidos durante bajas médicas no tributan.
3. **Cesta de alimentación**: Los vales de comida y gastos de transporte provistos por el patrón quedan exentos hasta los topes de ley.

Entender la diferencia entre salario bruto, base gravable y sueldo neto te ayudará a planificar mejor tus finanzas y a verificar que tu recibo esté libre de errores.`
    },
    {
      title: "Previsiones económicas en {country}: proyecciones de empleo y sueldos para el año",
      excerpt: "Analistas estiman un crecimiento moderado del PIB de {country} y un aumento real de salarios por encima de la inflación.",
      category: "Economía",
      readTime: 4,
      imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80",
      content: `Los principales centros de investigación económica han publicado sus estimaciones para **{country}**. Las proyecciones sugieren un escenario de estabilidad, impulsado por reformas tributarias oportunas y la digitalización de los servicios de **{taxAuthority}**.

## Crecimiento del empleo formal

Se anticipa la creación de miles de nuevos puestos de trabajo formales en sectores como tecnología y servicios financieros. La contención de la inflación permitirá que los sueldos en {country} recuperen poder adquisitivo real por primera vez en varios trimestres.

### Indicadores clave proyectados:
- **Crecimiento estimado del PIB**: +2.4% para este ciclo económico.
- **Tasa de desempleo**: Reducción de 0.5 puntos porcentuales.
- **Incremento salarial medio**: Ajustes de sueldos orientativos en un 5% promedio.

Las autoridades aseguran que estas proyecciones confirman que la política fiscal actual de {country} está logrando incentivar la inversión y sostener el empleo formal.`
    }
  ];

  // Helper function to format currency
  const formatVal = (amount: number, zeroDecimals: boolean, symbol: string) => {
    const decimals = zeroDecimals ? 0 : 2;
    return `${symbol} ${amount.toLocaleString("es-ES", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}`;
  };

  countries.forEach((country) => {
    templates.forEach((tpl, index) => {
      const taxName = getTaxName(country.code);
      const taxAuthority = getTaxAuthority(country.code);
      const formattedWage = formatVal(country.minimumWage, country.zeroDecimals, country.currencySymbol);

      const title = tpl.title
        .replace(/{country}/g, country.name)
        .replace(/{taxName}/g, taxName)
        .replace(/{minimumWage}/g, formattedWage)
        .replace(/{currency}/g, country.currency);

      const excerpt = tpl.excerpt
        .replace(/{country}/g, country.name)
        .replace(/{taxName}/g, taxName)
        .replace(/{taxAuthority}/g, taxAuthority)
        .replace(/{minimumWage}/g, formattedWage);

      const content = tpl.content
        .replace(/{country}/g, country.name)
        .replace(/{taxName}/g, taxName)
        .replace(/{taxAuthority}/g, taxAuthority)
        .replace(/{minimumWage}/g, formattedWage)
        .replace(/{currency}/g, country.currency)
        .replace(/{currencySymbol}/g, country.currencySymbol);

      // Distribute dates relative to today: index 0 (today), index 1 (1 day ago), etc.
      const date = getDateAgo(index);

      generated.push({
        id: `${country.code}-${index + 1}`,
        title,
        excerpt,
        country: country.code,
        category: tpl.category,
        date,
        readTime: tpl.readTime,
        imageUrl: tpl.imageUrl,
        content
      });
    });
  });

  return generated;
};

export const posts: Post[] = generatePosts();
