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

export const posts: Post[] = [
  {
    id: "1",
    title: "España aprueba nueva deducción por teletrabajo en el IRPF 2026",
    excerpt: "El gobierno español ha incluido una nueva deducción de hasta 500€ anuales para trabajadores que teletrabajen al menos el 50% de su jornada laboral.",
    country: "ES",
    category: "Fiscalidad",
    date: "2026-06-14",
    readTime: 4,
    imageUrl: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `La Agencia Tributaria española (AEAT) ha confirmado la incorporación de una nueva deducción fiscal en el IRPF 2026 para los trabajadores en modalidad de teletrabajo. La medida, aprobada por el Consejo de Ministros, establece una deducción de hasta **500 euros anuales** para empleados que acrediten haber trabajado en remoto al menos el 50% de su jornada laboral durante el ejercicio fiscal.

## ¿Quién puede beneficiarse?

Para acogerse a esta deducción, el contribuyente deberá cumplir los siguientes requisitos:

- Trabajar en régimen de teletrabajo un mínimo del 50% de la jornada anual.
- Tener un acuerdo de teletrabajo formalizado con la empresa.
- Los ingresos del trabajo no pueden superar los 60.000 euros anuales para la aplicación del importe máximo.

Para ingresos entre 60.000 y 80.000 euros, la deducción se aplica de forma proporcional.

## Gastos deducibles relacionados

La medida complementa la ya existente deducción por gastos en equipamiento tecnológico (hasta 250€), que permanece vigente. Los trabajadores podrán combinar ambas deducciones, lo que eleva el ahorro fiscal potencial para teleoperadores hasta los **750 euros anuales**.

## Impacto en la declaración de la renta

Según estimaciones de la AEAT, más de **4,2 millones de trabajadores** podrían beneficiarse de esta deducción. La medida busca equiparar fiscalmente las condiciones de los teletrabajadores frente a quienes acuden a oficina, reconociendo los costes adicionales de electricidad, internet y espacio de trabajo que asumen en su domicilio.

La deducción se aplicará directamente en la casilla correspondiente de la declaración de la renta, que podrá presentarse a partir de abril de 2027 para el ejercicio 2026. La Agencia Tributaria publicará instrucciones específicas sobre la documentación requerida antes de que se abra la campaña.

## Cómo calcularlo

Si un trabajador teletrabaja el 100% de su jornada y gana 40.000 euros anuales, podrá deducirse los 500 euros completos, lo que supone un ahorro real de entre **150 y 185 euros** en la cuota del IRPF, dependiendo del tramo autonómico aplicable.

> **Nota:** Esta información es orientativa. Los importes y condiciones exactas deberán confirmarse con la normativa oficial publicada en el BOE y el simulador de la AEAT antes de presentar la declaración.`,
  },
  {
    id: "2",
    title: "México: actualización de las tablas del ISR para el segundo semestre de 2026",
    excerpt: "El SAT ha publicado las nuevas tablas del Impuesto Sobre la Renta aplicables a partir de julio de 2026, con un ajuste del 4.2% en los límites de los tramos.",
    country: "MX",
    category: "Fiscalidad",
    date: "2026-06-12",
    readTime: 3,
    imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `El Servicio de Administración Tributaria (**SAT**) de México ha publicado las tablas actualizadas del Impuesto Sobre la Renta (ISR) para el segundo semestre de 2026, aplicables a partir del 1 de julio. El ajuste refleja la inflación acumulada del primer semestre, situándose en un incremento del **4.2%** sobre los límites inferiores y superiores de cada tramo.

## Nuevas tablas del ISR mensual (julio 2026)

| Límite inferior (MXN) | Límite superior (MXN) | Cuota fija | Tasa |
|---|---|---|---|
| 0.01 | 8,952.49 | 0.00 | 1.92% |
| 8,952.50 | 75,984.55 | 171.88 | 6.40% |
| 75,984.56 | 133,536.07 | 4,461.94 | 10.88% |
| 133,536.08 | 155,229.80 | 10,652.16 | 16.00% |
| 155,229.81 | 185,852.57 | 14,130.22 | 17.92% |
| 185,852.58 | 374,837.88 | 19,622.13 | 21.36% |
| 374,837.89 | 590,795.99 | 60,029.61 | 23.52% |
| 590,796.00 | En adelante | 110,842.74 | 35.00% |

## Subsidio al empleo

El subsidio al empleo también se actualiza para 2026. Para trabajadores con ingresos hasta los 9,165 MXN mensuales, el subsidio aplicable equivale al **11.73% de la UMA mensual** vigente, lo que se traduce en un beneficio neto de aproximadamente 1,075 pesos.

Si el subsidio calculado supera el ISR del trabajador, el patrón está obligado a entregar la diferencia en efectivo como parte del pago neto.

## ¿A quiénes afecta?

El ajuste impacta directamente a:
- Asalariados con ingresos superiores a 8,952 MXN mensuales.
- Trabajadores independientes que realizan pagos provisionales mensuales.
- Empleadores que calculan retenciones de nómina.

Se recomienda que los departamentos de recursos humanos y nómina actualicen sus sistemas de cálculo antes del 1 de julio para evitar diferencias en las retenciones.

> **Fuente oficial:** Resolución Miscelánea Fiscal 2026, Anexo 8, DOF 28 de diciembre de 2025. Verificar las tablas exactas en el portal del SAT antes de su aplicación.`,
  },
  {
    id: "3",
    title: "Argentina elimina el impuesto a los Bienes Personales para salarios menores a 5 millones",
    excerpt: "La AFIP anunció la exención del impuesto a los Bienes Personales para trabajadores en relación de dependencia con ingresos brutos mensuales inferiores a 5 millones de pesos.",
    country: "AR",
    category: "Legislación",
    date: "2026-06-10",
    readTime: 5,
    imageUrl: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `La **Administración Federal de Ingresos Públicos (ARCA)**, ex AFIP, ha anunciado mediante la Resolución General 5.641/2026 la exención del Impuesto sobre los Bienes Personales para todos los trabajadores en relación de dependencia cuyos ingresos brutos mensuales no superen los **5 millones de pesos argentinos**.

## Alcance de la medida

La exención beneficia a aproximadamente el **72% de los trabajadores registrados** del sector privado, según datos del Ministerio de Trabajo. La medida tiene vigencia retroactiva al 1 de enero de 2026 y aplica al periodo fiscal 2025, que se declara en 2026.

Los contribuyentes que ya hayan abonado anticipos del impuesto en exceso podrán solicitar la devolución correspondiente a través del portal web de ARCA, sección "Devolución Automática de Saldos".

## Umbrales de aplicación

- **Exención total:** ingresos brutos mensuales hasta $5.000.000 ARS.
- **Exención parcial:** ingresos entre $5.000.001 y $7.500.000 ARS, con una escala gradual.
- **Sin exención:** ingresos superiores a $7.500.000 ARS.

## Impacto sobre el Impuesto a las Ganancias

La medida no altera el Impuesto a las Ganancias de 4ª categoría, que continúa con su estructura progresiva. El Mínimo No Imponible (MNI) se actualizó en enero de 2026 a **$1.063.500 mensuales**, lo que representa un aumento del 15% respecto al segundo semestre de 2025.

## Cómo acceder a la exención

Los trabajadores bajo relación de dependencia no deben realizar ningún trámite adicional. El empleador actualizará automáticamente el certificado de ingresos (formulario 1357) para reflejar la exención. Los trabajadores independientes deberán consignarlo en su declaración jurada anual.

> **Importante:** Los valores en pesos argentinos son altamente sensibles a la inflación. Consulta siempre con un contador matriculado o el sitio oficial de ARCA (arca.gob.ar) para confirmar los valores vigentes al momento de tu declaración.`,
  },
  {
    id: "4",
    title: "Colombia incrementa el salario mínimo un 6% para 2026",
    excerpt: "El Ministerio de Trabajo colombiano fijó el nuevo salario mínimo en 1.508.910 COP, un incremento del 6% respecto al año anterior.",
    country: "CO",
    category: "Salarios",
    date: "2026-06-08",
    readTime: 3,
    imageUrl: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `El Gobierno Nacional de Colombia, a través del Decreto 2655 de 2025, fijó el salario mínimo mensual legal vigente (SMMLV) para 2026 en **$1.508.910 pesos colombianos**, lo que representa un incremento del **6%** frente a los $1.423.500 del año anterior.

## Componentes del aumento

El incremento del 6% se descompone de la siguiente manera:

- **Inflación causada 2025:** 4,1%
- **Incremento real por productividad:** 1,9%

Este es el cuarto año consecutivo en que el aumento del salario mínimo supera la inflación, garantizando una mejora en el poder adquisitivo real de los trabajadores.

## Auxilio de transporte 2026

El auxilio de transporte, que aplica a trabajadores que ganen hasta dos salarios mínimos, se actualizó a **$213.900 COP** mensuales (antes $201.800).

## Impacto en la nómina

| Concepto | 2025 | 2026 | Variación |
|---|---|---|---|
| SMMLV | $1.423.500 | $1.508.910 | +$85.410 |
| Auxilio transporte | $201.800 | $213.900 | +$12.100 |
| Total tope nómina | $1.625.300 | $1.722.810 | +6% |

## Afectación en la retención en la fuente

Los cambios en el SMMLV impactan directamente los cálculos de retención en la fuente sobre ingresos laborales. El umbral de ingreso mensual a partir del cual se practica retención corresponde a **87 UVT** (Unidades de Valor Tributario). Para 2026, el valor de la UVT es de **$49.799 COP**, lo que sitúa el umbral en **$4.332.513 COP** mensuales.

## Prestaciones sociales

Las prestaciones sociales calculadas sobre el SMMLV también se actualizan:
- **Cesantías:** $125.742/mes
- **Prima de servicios:** $125.742/mes
- **Vacaciones:** $62.871/mes

> **Fuente:** Decreto 2655 de diciembre de 2025, Ministerio de Trabajo de Colombia. Consultar el simulador de la DIAN para calcular retenciones exactas.`,
  },
  {
    id: "5",
    title: "Chile: reforma previsional aumenta la cotización de salud al 8%",
    excerpt: "El Congreso chileno aprobó la reforma que incrementa gradualmente la cotización de salud desde el 7% actual hasta el 8% en 2027.",
    country: "CL",
    category: "Previsión",
    date: "2026-06-06",
    readTime: 4,
    imageUrl: "https://images.pexels.com/photos/7063768/pexels-photo-7063768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `El Congreso Nacional de Chile aprobó en sesión plenaria la reforma al sistema de salud que incrementa gradualmente la cotización obligatoria de salud para trabajadores dependientes. La ley establece una transición en dos etapas que llevará la cotización del **7% actual al 7.5% en enero de 2026**, y al **8% definitivo en enero de 2027**.

## Cronograma de implementación

| Período | Cotización salud | Impacto mensual (sueldo $1.500.000 CLP) |
|---|---|---|
| Hasta dic. 2025 | 7.00% | -$105.000 |
| Ene. 2026 – dic. 2026 | 7.50% | -$112.500 |
| Desde ene. 2027 | 8.00% | -$120.000 |

## ¿Cómo afecta al sueldo líquido?

El impacto en el sueldo líquido varía según el nivel de ingresos. Para un trabajador con una renta imponible de **$1.500.000 CLP** mensuales:

- La cotización de salud adicional (0.5%) representa **$7.500 CLP** menos al mes en 2026.
- En 2027, el incremento total acumulado será de **$15.000 CLP** menos mensuales respecto a 2025.

Es importante considerar que la cotización de salud **es deducible de la base del Impuesto Único de Segunda Categoría** (IUSC), por lo que el impacto neto real en el bolsillo es ligeramente menor que la cifra bruta.

## Cotizaciones totales en Chile 2026

| Concepto | Porcentaje |
|---|---|
| AFP (jubilación) | 10.50% |
| Salud (FONASA/ISAPRE) | 7.50% |
| Seguro de cesantía | 0.60% |
| **Total descuentos obrero** | **18.60%** |

## Posición de los sindicatos

Los principales sindicatos han respaldado la medida, argumentando que el porcentaje actual (7%) era insuficiente para financiar la canasta de prestaciones de salud vigente. Sin embargo, trabajadores de ingresos medios han expresado preocupación por el efecto acumulado sobre su renta disponible.

> **Fuente:** Ley 21.865, Diario Oficial de Chile, 20 de mayo de 2026. Verificar las tablas del IUSC actualizadas mensualmente por el SII en sii.cl.`,
  },
  {
    id: "6",
    title: "Perú amplía la deducción por UIT a tres unidades para trabajadores independientes",
    excerpt: "La SUNAT permitirá a los trabajadores independientes deducir hasta 3 UIT en su declaración anual, frente a la UIT única anterior.",
    country: "PE",
    category: "Fiscalidad",
    date: "2026-06-04",
    readTime: 3,
    imageUrl: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `La **Superintendencia Nacional de Aduanas y de Administración Tributaria (SUNAT)** ha publicado la Resolución de Superintendencia N.° 127-2026/SUNAT, que amplía de **1 a 3 Unidades Impositivas Tributarias (UIT)** la deducción aplicable a los ingresos de cuarta categoría obtenidos por trabajadores independientes.

## ¿Qué es la UIT?

La Unidad Impositiva Tributaria es el parámetro de referencia fiscal en el Perú. Para el ejercicio 2026, su valor es de **S/ 5.350**. Por lo tanto, la nueva deducción equivale a un monto máximo de:

- **1 UIT (anterior):** S/ 5.350
- **3 UIT (nuevo):** S/ 16.050

## Impacto en la declaración anual

Un profesional independiente con ingresos brutos anuales de **S/ 80.000** verá su cálculo modificado de la siguiente manera:

| Concepto | Sistema anterior | Sistema nuevo |
|---|---|---|
| Ingresos brutos | S/ 80.000 | S/ 80.000 |
| Deducción 20% gastos | S/ 16.000 | S/ 16.000 |
| Renta neta de 4ª cat. | S/ 64.000 | S/ 64.000 |
| Deducción por UIT | S/ 5.350 | S/ 16.050 |
| Base imponible | S/ 58.650 | S/ 47.950 |
| Impuesto a la Renta (15%) | S/ 8.797 | S/ 7.192 |

El ahorro estimado para este ejemplo es de aproximadamente **S/ 1.605** al año.

## Trabajadores beneficiados

La medida aplica exclusivamente a quienes generan rentas de **cuarta categoría** (honorarios profesionales, dietas de directores, comisiones de agentes). No aplica a trabajadores en planilla (quinta categoría) ni a contribuyentes de tercera categoría (empresas).

Se estima que más de **800.000 trabajadores independientes** se verán beneficiados con la reforma.

> **Fuente:** Resolución de Superintendencia N.° 127-2026/SUNAT y Decreto Supremo N.° 098-2026-EF. Disponibles en el portal sunat.gob.pe.`,
  },
  {
    id: "7",
    title: "Ecuador mantiene dolarización y revisa tramos de impuesto a la renta",
    excerpt: "El SRI actualizó los tramos del impuesto a la renta con incrementos del 3% en las fracciones básicas, manteniendo la estabilidad de la dolarización.",
    country: "EC",
    category: "Economía",
    date: "2026-06-02",
    readTime: 4,
    imageUrl: "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `El **Servicio de Rentas Internas (SRI)** de Ecuador ha publicado la tabla actualizada del Impuesto a la Renta de Personas Naturales para el ejercicio fiscal 2026, con un incremento del **3%** en las fracciones básicas de cada tramo respecto a 2025.

## Tabla de Impuesto a la Renta 2026

| Base imponible desde (USD) | Base imponible hasta (USD) | Impuesto base | % excedente |
|---|---|---|---|
| 0 | 11.902 | 0 | 0% |
| 11.902 | 15.159 | 0 | 5% |
| 15.159 | 19.682 | 163 | 10% |
| 19.682 | 26.031 | 615 | 12% |
| 26.031 | 34.255 | 1.377 | 15% |
| 34.255 | 45.407 | 2.611 | 20% |
| 45.407 | 60.450 | 4.841 | 25% |
| 60.450 | En adelante | 8.602 | 35% |

## Fracción básica exenta 2026

La fracción básica exenta —monto de ingresos que no genera impuesto— se fija en **$11.902 USD** para 2026, frente a los $11.548 de 2025. Esta cifra equivale aproximadamente a dos salarios básicos unificados anuales.

## Gastos deducibles personales

El SRI mantiene el límite de deducción personal en el menor valor entre el **50% de ingresos gravados** o **1.3 veces la fracción básica** ($15.472 USD para 2026). Los rubros deducibles incluyen:

- Vivienda: alquiler o crédito hipotecario
- Salud: medicina, hospitales, óptica
- Educación: matrícula, pensiones, materiales
- Alimentación: compras con factura
- Arte y cultura: espectáculos, libros

## Dolarización como ancla

Ecuador mantiene el dólar estadounidense como moneda oficial desde el año 2000. Esta condición simplifica la planificación fiscal al eliminar el riesgo cambiario, pero también hace que los umbrales fiscales sean más estables en términos reales que en países con monedas propias sujetas a alta inflación.

> **Fuente:** Resolución del SRI NAC-DGERCGC26-00000001. Disponible en sri.gob.ec. Se recomienda utilizar el simulador oficial del SRI para validar los cálculos antes de presentar la declaración.`,
  },
  {
    id: "8",
    title: "Venezuela: nuevas medidas de indexación salarial impactan el cálculo del ISLR",
    excerpt: "El SENIAT ajustó las unidades tributarias utilizadas como base para el cálculo del ISLR, reflejando la inflación acumulada.",
    country: "VE",
    category: "Fiscalidad",
    date: "2026-05-30",
    readTime: 5,
    imageUrl: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `El **Servicio Nacional Integrado de Administración Aduanera y Tributaria (SENIAT)** actualizó la Unidad Tributaria (UT) a **Bs. 9,00** para el ejercicio fiscal 2026, lo que representa un incremento del **50%** respecto al valor de Bs. 6,00 vigente en 2025. Esta actualización impacta directamente en el cálculo del Impuesto Sobre la Renta (ISLR) de personas naturales.

## ¿Qué es la Unidad Tributaria?

La Unidad Tributaria es el parámetro fiscal de referencia en Venezuela, equivalente a una unidad de medida que los contribuyentes utilizan para calcular sus obligaciones tributarias. A diferencia de otros países donde los tramos se expresan en moneda nacional, en Venezuela se denominan en UT para ofrecer mayor estabilidad relativa frente a la inflación.

## Tramos del ISLR 2026 (en UT)

| Renta neta anual (UT) | Sustraendo | Alícuota |
|---|---|---|
| 0 – 1.000 UT | 0 | 6% |
| 1.001 – 1.500 UT | 60 | 9% |
| 1.501 – 2.000 UT | 105 | 12% |
| 2.001 – 2.500 UT | 165 | 16% |
| 2.501 – 3.000 UT | 265 | 20% |
| 3.001 – 4.000 UT | 415 | 24% |
| 4.001 – 6.000 UT | 575 | 29% |
| Más de 6.000 UT | — | 34% |

## Conversión a bolívares (referencial)

Con la UT en Bs. 9,00:
- El umbral mínimo tributable es de **Bs. 9.000** anuales (1.000 UT).
- El tramo máximo comienza en **Bs. 54.000** anuales (6.000 UT).

Dado que Venezuela mantiene su economía parcialmente dolarizada, muchos contribuyentes calculan su renta en USD y la convierten al tipo de cambio oficial del BCV al cierre del ejercicio.

## Consideraciones especiales

El contexto hiperinflacionario venezolano hace que cualquier cálculo en bolívares sea altamente volátil. Los contribuyentes con ingresos en divisas deberán declarar utilizando el tipo de cambio oficial. Se recomienda consultar directamente con el SENIAT o un asesor fiscal local para casos con ingresos mixtos (bolívares y dólares).

> **Fuente:** Providencia Administrativa SNAT/2026/0034, SENIAT. Consultar el portal seniat.gob.ve para información actualizada.`,
  },
  {
    id: "9",
    title: "Uruguay reduce el IRPF para ingresos medios con nueva escala progresiva",
    excerpt: "El gobierno uruguayo aprobó una modificación en la escala del IRPF que reduce la carga tributaria para ingresos entre 20.000 y 40.000 UYU mensuales.",
    country: "UY",
    category: "Fiscalidad",
    date: "2026-05-28",
    readTime: 3,
    imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `El Ministerio de Economía y Finanzas de Uruguay presentó al Parlamento una modificación a la Ley 18.083 (Reforma Tributaria) que introduce ajustes en la escala progresiva del **Impuesto a la Renta de las Personas Físicas (IRPF)**, con especial foco en reducir la presión fiscal sobre la clase media.

## Nueva escala del IRPF mensual (BPC = $6.865 UYU para 2026)

| Rangos en BPC | Desde (UYU) | Hasta (UYU) | Tasa |
|---|---|---|---|
| 0 – 18 BPC | 0 | $123.570 | 0% |
| 18 – 36 BPC | $123.570 | $247.140 | 10% |
| 36 – 60 BPC | $247.140 | $411.900 | 20% |
| 60 – 120 BPC | $411.900 | $823.800 | 22% |
| 120 – 180 BPC | $823.800 | $1.235.700 | 25% |
| Más de 180 BPC | Más de $1.235.700 | — | 30% |

*Nota: Los tramos anteriores gravaban desde 12 BPC con tasa del 10%, el nuevo umbral exento se amplía a 18 BPC.*

## Deducciones del IRPF en Uruguay

Una de las características del IRPF uruguayo es que **las cotizaciones a la seguridad social son deducibles** del impuesto calculado. El sistema aplica una tasa de deducción del 8% sobre los aportes al BPS y FONASA, lo que reduce significativamente la cuota final.

Además, las deducciones por hijos menores de 18 años se mantienen en **20 BPC anuales** ($137.300 UYU) por hijo.

## Impacto en el trabajador tipo

Un empleado con sueldo de **$35.000 UYU brutos** mensuales:
- Antes de la reforma: pagaba IRPF desde el primer peso por encima de $73.800 (12 BPC)
- Tras la reforma: solo tributa sobre lo que supere los $123.570 (18 BPC)
- **Ahorro estimado:** entre $1.800 y $3.200 UYU mensuales.

## Vigencia

La modificación entra en vigor el **1 de enero de 2026**, con efectos en los recibos de sueldo de enero en adelante.

> **Fuente:** Ley 20.285, DGI. Disponible en dgi.gub.uy. Para cálculos personalizados, usar el simulador oficial de la DGI.`,
  },
  {
    id: "10",
    title: "Panamá implementa devolución del ITBMS para trabajadores de bajos ingresos",
    excerpt: "A partir de julio de 2026, los trabajadores con salarios inferiores a 1.200 USD mensuales recibirán una devolución del 50% del ITBMS pagado.",
    country: "PA",
    category: "Legislación",
    date: "2026-05-26",
    readTime: 4,
    imageUrl: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `La **Dirección General de Ingresos (DGI)** de Panamá, en coordinación con el Ministerio de Economía y Finanzas, ha puesto en marcha el Programa de Devolución del ITBMS para Trabajadores de Ingresos Bajos, que entrará en vigencia el **1 de julio de 2026**.

## ¿En qué consiste el programa?

Los trabajadores formales con salarios brutos inferiores a **1.200 USD mensuales** recibirán una devolución equivalente al **50% del ITBMS** (Impuesto de Transferencia de Bienes Muebles y Servicios) facturado en sus compras básicas, siempre que estas hayan sido realizadas con factura electrónica (EFACT).

El ITBMS en Panamá es del **7%** sobre el valor de los bienes y servicios gravados. Para un trabajador que gaste $600 mensuales en bienes gravados, el ITBMS pagado sería $42, del cual recibiría $21 de devolución.

## Requisitos para acceder

1. Ser trabajador formal con contrato registrado en el MITRADEL.
2. Percibir un salario bruto mensual igual o inferior a $1.200 USD.
3. Registrarse en el portal digital DGI-Digital y vincular la cédula de identidad.
4. Las compras deben realizarse en establecimientos afiliados al sistema EFACT.

## Funcionamiento del sistema

El programa funciona mediante un **monedero digital** asociado a la cédula del beneficiario. Las devoluciones se acumulan mensualmente y pueden utilizarse para compras futuras en los comercios participantes, o retirarse en efectivo en ventanillas del Banco Nacional de Panamá una vez al trimestre.

## Financiamiento

El costo fiscal estimado del programa es de **$48 millones USD anuales**, financiados con parte de la recaudación adicional del ITBMS generada por la digitalización de facturas implementada en 2024.

> **Fuente:** Decreto Ejecutivo 782-2026. DGI Panamá. Disponible en dgi.gob.pa.`,
  },
  {
    id: "11",
    title: "Costa Rica lanza programa de subsidio para cotizantes de la CCSS",
    excerpt: "La CCSS implementó un subsidio parcial para trabajadores cuyo aporte obrero supere el 10% de su salario, beneficiando principalmente al sector informal regularizado.",
    country: "CR",
    category: "Previsión",
    date: "2026-05-24",
    readTime: 3,
    imageUrl: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `La **Caja Costarricense de Seguro Social (CCSS)** anunció el Programa de Apoyo a Cotizantes de Bajos Ingresos (PACBI), dirigido a trabajadores cuyos aportes a la seguridad social superan el 10% de su salario neto.

## Estructura de cotizaciones CCSS 2026

| Concepto | Trabajador | Patrono |
|---|---|---|
| Enfermedad y maternidad | 5.50% | 9.25% |
| IVM (pensión) | 3.67% | 5.08% |
| IMAS/Asignaciones | — | 0.50% |
| Banco Popular | 1.00% | 0.25% |
| FODESAF | — | 0.50% |
| **Total** | **10.17%** | **26.33%** |

## ¿Cómo funciona el subsidio?

Para trabajadores con salarios inferiores a **¢600.000 mensuales** (aproximadamente $1.100 USD), el aporte obrero total de 10.17% puede representar una carga significativa. El subsidio cubre hasta **el 30% de la diferencia** entre el aporte calculado y el umbral del 10% del salario neto.

El beneficio se aplica automáticamente a trabajadores ya inscritos en la CCSS con salarios en el rango establecido. No se requiere solicitud adicional.

## Regularización del sector informal

El programa también incluye un componente de **incorporación voluntaria** para trabajadores independientes no asegurados, con una tarifa reducida del 13.16% sobre ingresos declarados (frente al 23.76% estándar) durante los primeros dos años.

Costa Rica cuenta con una cobertura de seguridad social del **68%** de la población económicamente activa, una de las más altas de Centroamérica, y este programa busca elevarla al 75% hacia 2028.

> **Fuente:** CCSS, acuerdo de Junta Directiva sesión 9.426. Disponible en ccss.sa.cr.`,
  },
  {
    id: "12",
    title: "Guatemala reforma el Impuesto Sobre la Renta con tres nuevos tramos",
    excerpt: "El Congreso guatemalteco aprobó la adición de tres tramos adicionales al ISR, creando una estructura más progresiva que grava hasta un 15% los ingresos superiores a 300.000 GTQ anuales.",
    country: "GT",
    category: "Fiscalidad",
    date: "2026-05-22",
    readTime: 4,
    imageUrl: "https://images.pexels.com/photos/3974926/pexels-photo-3974926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `El Congreso de la República de Guatemala aprobó el **Decreto 34-2026** que modifica la Ley de Actualización Tributaria (Decreto 10-2012), incorporando tres nuevos tramos al Impuesto Sobre la Renta (ISR) de personas individuales bajo el régimen optativo o simplificado.

## Nueva estructura de tramos ISR Guatemala 2026

| Renta imponible anual (GTQ) | Tipo impositivo |
|---|---|
| Hasta Q30.000 | Exento |
| Q30.001 – Q75.000 | 5% |
| Q75.001 – Q150.000 | 7% |
| Q150.001 – Q300.000 | 11% |
| Q300.001 – Q500.000 | 13% (NUEVO) |
| Q500.001 – Q800.000 | 14% (NUEVO) |
| Más de Q800.001 | 15% (NUEVO) |

## Contexto

Antes de la reforma, el tramo máximo del ISR para personas individuales era del **7%** sobre rentas superiores a Q150.000, lo que hacía el sistema guatemalteco uno de los menos progresivos de la región. La nueva estructura se alinea con los estándares latinoamericanos y busca incrementar la recaudación fiscal en un **12%** adicional.

## Impacto por nivel de ingresos

Para un profesional con ingresos anuales de **Q400.000 GTQ** (aproximadamente $52.000 USD):

- **Sistema anterior:** Q19.250 de ISR (7% sobre Q275.000)
- **Sistema nuevo:** Q35.750 de ISR (5% primeros Q45.000 + 7% siguientes Q75.000 + 11% siguientes Q150.000 + 13% sobre Q130.000)

## Reacciones del sector empresarial

La Cámara de Industria y el Consejo Empresarial de Guatemala expresaron preocupaciones sobre el impacto en la competitividad. La Superintendencia de Administración Tributaria (SAT) habilitará un simulador en su portal en agosto de 2026 para facilitar el cálculo.

> **Fuente:** Decreto 34-2026, Congreso de Guatemala. Disponible en sat.gob.gt.`,
  },
  {
    id: "13",
    title: "República Dominicana incrementa el salario mínimo del sector privado",
    excerpt: "El Ministerio de Trabajo dominicano estableció un incremento del 7% en el salario mínimo del sector privado, fijándolo en RD$29.668 mensuales.",
    country: "DO",
    category: "Salarios",
    date: "2026-05-20",
    readTime: 3,
    imageUrl: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `El **Comité Nacional de Salarios** de la República Dominicana aprobó el nuevo salario mínimo para el sector privado que entrará en vigor el **1 de julio de 2026**, con un aumento del **7%** para el primer grupo de empresas (grandes y medianas).

## Nuevos salarios mínimos por categoría

| Categoría de empresa | Salario mínimo mensual |
|---|---|
| Grande | RD$29.668 |
| Mediana | RD$27.342 |
| Pequeña | RD$14.173 |
| Zonas Francas | RD$18.884 |
| Sector privado no sectorizado | RD$21.512 |

## Impacto en las retenciones del ISR

En la República Dominicana, el Impuesto Sobre la Renta (ISR) de personas físicas se calcula de forma anual. El umbral mínimo de ingresos anuales que genera obligación tributaria es de **RD$416.220** (equivalente a unos $7.000 USD anuales). Trabajadores con el salario mínimo del primer grupo ($29.668 mensual × 12 = $356.016) quedan **por debajo** del umbral de tributación.

## Escala del ISR 2026 (personas físicas)

| Renta anual (DOP) | Impuesto |
|---|---|
| Hasta RD$416.220 | 0% |
| RD$416.221 – RD$624.329 | 15% sobre excedente |
| RD$624.330 – RD$867.123 | RD$31.216 + 20% sobre excedente |
| Más de RD$867.124 | RD$79.776 + 25% sobre excedente |

## Prestaciones laborales

El aumento impacta en todas las prestaciones calculadas sobre el salario: vacaciones, regalia pascual (equivalente a sueldo navideño), cesantías y seguridad social. El empleador deberá actualizar las nóminas antes del 30 de junio.

> **Fuente:** Resolución del Comité Nacional de Salarios, Ministerio de Trabajo de República Dominicana. Disponible en ministeriodetrabajo.gob.do.`,
  },
  {
    id: "14",
    title: "Bolivia: nuevo bono de productividad se suma a los ingresos de los trabajadores",
    excerpt: "El gobierno boliviano creó el Bono de Productividad Nacional de 500 Bs para todos los trabajadores del sector formal, pagadero en dos cuotas semestrales y exento de impuestos.",
    country: "BO",
    category: "Salarios",
    date: "2026-05-18",
    readTime: 3,
    imageUrl: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `El Gobierno Plurinacional de Bolivia promulgó el **Decreto Supremo 5.218** que establece el Bono de Productividad Nacional (BPN), un beneficio de **Bs 500** anuales para todos los trabajadores del sector privado formal, pagadero en dos cuotas de Bs 250.

## Detalles del bono

- **Monto:** Bs 500 (aproximadamente $72 USD)
- **Forma de pago:** Dos cuotas de Bs 250 (julio y diciembre)
- **Beneficiarios:** Trabajadores con contrato formalizado y aportes regulares al Seguro de Salud (CNUT/Seguro a Corto Plazo)
- **Tributación:** Exento del RC-IVA y de las contribuciones patronales

## ¿Cómo afecta al RC-IVA?

El **Régimen Complementario al Impuesto al Valor Agregado (RC-IVA)** es el principal impuesto que grava los ingresos de los trabajadores dependientes en Bolivia. Dado que el bono está exento, no se suma a la base imponible del trabajador ni modifica el cálculo de retenciones del empleador.

La base imponible del RC-IVA se calcula como:

**Ingreso bruto mensual − 2 SMN (Salarios Mínimos Nacionales)**

El Salario Mínimo Nacional 2026 es de **Bs 2.362**, por lo que la deducción equivale a Bs 4.724. Solo trabajadores con ingresos superiores a este umbral tributan por RC-IVA.

## Cotizaciones 2026 en Bolivia

| Aporte | Trabajador | Empleador |
|---|---|---|
| AFP (largo plazo) | 10% | — |
| AFP Riesgo Común | 1.71% | — |
| INSO (vivienda) | — | 2% |
| Seguro salud (CNUT) | — | 10% |

> **Fuente:** Decreto Supremo 5.218, Gaceta Oficial de Bolivia. impuestosnacionales.gob.bo.`,
  },
  {
    id: "15",
    title: "Honduras aprueba ley de incentivos para el retorno de talentos",
    excerpt: "El Congreso hondureño aprobó una ley que ofrece exención fiscal por dos años a profesionales que regresen al país, incluyendo deducciones adicionales en el ISR por gastos de relocalización.",
    country: "HN",
    category: "Legislación",
    date: "2026-05-16",
    readTime: 5,
    imageUrl: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `El Congreso Nacional de Honduras aprobó por unanimidad el **Decreto 78-2026**, conocido como la **Ley de Retorno de Talentos Hondureños**, que establece un régimen fiscal especial para profesionales y técnicos que hayan residido en el exterior durante al menos **tres años continuos** y decidan regresar a establecerse en Honduras.

## Beneficios del régimen especial

### 1. Exención temporal del ISR
Los beneficiarios gozarán de **exención total del ISR** durante los primeros 24 meses de restablecida su residencia fiscal en Honduras. Esta exención aplica tanto a ingresos del trabajo como a actividades económicas.

### 2. Deducción por gastos de relocalización
Durante el primer año, podrán deducir de la base imponible hasta **L 180.000** (aproximadamente $7.200 USD) en concepto de gastos de traslado, mudanza, alquiler temporal y adecuación de vivienda.

### 3. Importación libre de aranceles
El retornado puede importar sus bienes personales y equipo de trabajo (computadoras, herramientas profesionales) libre de aranceles en un plazo de 12 meses desde su registro como beneficiario.

## Proceso de solicitud

Para acogerse a la ley, el profesional deberá:
1. Inscribirse en el **Registro Nacional de Talentos Retornados** (RENATRE) del SAR.
2. Presentar documentación que acredite residencia en el exterior (pasaportes, declaraciones fiscales del país de origen).
3. Obtener certificado de elegibilidad en un plazo máximo de 30 días hábiles.

## Escala del ISR Honduras 2026 (post-exención)

| Renta gravada anual (HNL) | Tasa |
|---|---|
| Hasta L 176.198 | 0% |
| L 176.199 – L 264.296 | 15% |
| L 264.297 – L 528.591 | 20% |
| Más de L 528.592 | 25% |

> **Fuente:** Decreto 78-2026. Servicio de Administración de Rentas (SAR Honduras). Disponible en sar.gob.hn.`,
  },
  {
    id: "16",
    title: "El Salvador reduce IVA del 13% al 10% para productos de la canasta básica",
    excerpt: "La Asamblea Legislativa salvadoreña aprobó la reducción del IVA en alimentos de la canasta básica, medida que entrará en vigor en agosto de 2026.",
    country: "SV",
    category: "Economía",
    date: "2026-05-14",
    readTime: 3,
    imageUrl: "https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `La Asamblea Legislativa de El Salvador aprobó el **Decreto Legislativo 1.102** que reduce la tasa del Impuesto al Valor Agregado (IVA) del **13% al 10%** para los productos incluidos en la canasta básica alimentaria, con entrada en vigor el **1 de agosto de 2026**.

## Productos beneficiados

La reducción aplica a los 23 productos que conforman la canasta básica alimentaria definida por la DIGESTYC (Dirección General de Estadística y Censos):

- Granos básicos: maíz, frijol, arroz
- Aceites y grasas: aceite vegetal
- Proteínas: huevos, carnes de pollo y res
- Lácteos: leche, queso blanco
- Azúcar, sal yodada
- Pan francés, tortillas
- Frutas y verduras básicas

## Impacto estimado en los hogares

Según el Ministerio de Hacienda, un hogar de cuatro personas que gaste mensualmente **$150 en canasta básica** ahorrará aproximadamente **$4,50 mensuales** (3% sobre el gasto), o **$54 anuales**.

Para los hogares del primer quintil de ingreso (los más pobres), donde la canasta básica puede representar el **40-50% del gasto total**, el beneficio real en poder adquisitivo es significativamente mayor en términos relativos.

## Efecto sobre el ISR

La reducción del IVA en la canasta básica no modifica directamente el cálculo del ISR de personas naturales. Sin embargo, al disminuir el costo de vida, permite que una mayor proporción del ingreso quede disponible para ahorro o consumo discrecional.

El ISR en El Salvador aplica una tasa del **30%** sobre rentas superiores al tramo exento anual de **$4.064 USD**.

> **Fuente:** Decreto Legislativo 1.102-2026. Ministerio de Hacienda de El Salvador. hacienda.gob.sv.`,
  },
  {
    id: "17",
    title: "Nicaragua: ajuste en las cotizaciones del INSS afecta el sueldo neto",
    excerpt: "El INSS incrementó la cotización obrera en 0.5 puntos porcentuales, pasando del 6.25% al 6.75%, con impacto directo en el salario neto.",
    country: "NI",
    category: "Previsión",
    date: "2026-05-12",
    readTime: 4,
    imageUrl: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `El **Instituto Nicaragüense de Seguridad Social (INSS)** publicó la Resolución CD-INSS-001-2026 que modifica las tasas de cotización obrero-patronales a partir del **1 de junio de 2026**, aumentando el aporte del trabajador del 6.25% al **6.75%**.

## Nuevas tasas de cotización INSS 2026

| Categoría | Tasa obrera | Tasa patronal | Total |
|---|---|---|---|
| Hasta antes | 6.25% | 21.50% | 27.75% |
| A partir junio 2026 | 6.75% | 22.00% | 28.75% |

El incremento patronal (.5%) financia la ampliación de la cobertura de las prestaciones económicas (subsidios de enfermedad, maternidad y accidentes laborales).

## Impacto en el sueldo neto

Para un trabajador con salario de **C$15.000 córdobas mensuales**:

| Concepto | Antes | Después |
|---|---|---|
| Salario bruto | C$15.000 | C$15.000 |
| INSS obrero | -C$937,50 | -C$1.012,50 |
| IR (Impuesto Renta) | -C$750 | -C$750 |
| **Sueldo neto** | **C$13.312,50** | **C$13.237,50** |

La diferencia mensual es de **C$75 córdobas** menos en el bolsillo del trabajador.

## Umbral de tributación del IR en Nicaragua

El Impuesto sobre la Renta (IR) en Nicaragua establece una exención mensual de **C$4.166 córdobas** (C$50.000 anuales). La escala progresiva aplica tasas del **15% al 30%** sobre el excedente.

## Ampliación de prestaciones

El aumento financia la incorporación de **tres nuevas prestaciones** al régimen integral:
1. Atención especializada en salud mental.
2. Subsidio por cuidado de familiar con discapacidad.
3. Ampliación del período de subsidio por maternidad de 12 a 16 semanas.

> **Fuente:** Resolución CD-INSS-001-2026. INSS Nicaragua. inss.gob.ni.`,
  },
  {
    id: "18",
    title: "Paraguay: nueva ley de monotributo facilita la regularización de independientes",
    excerpt: "El Congreso paraguayo aprobó un régimen simplificado de monotributo que permite a trabajadores independientes tributar una cuota fija mensual según su categoría.",
    country: "PY",
    category: "Legislación",
    date: "2026-05-10",
    readTime: 4,
    imageUrl: "https://images.pexels.com/photos/5673490/pexels-photo-5673490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `El Congreso Nacional del Paraguay aprobó la **Ley 7.453/2026 de Monotributo Simplificado**, que crea un régimen tributario unificado para trabajadores independientes y micro emprendedores con ingresos anuales inferiores a **G 150.000.000 guaraníes** (aproximadamente $20.000 USD).

## Categorías del Monotributo

| Categoría | Ingresos anuales (G) | Cuota mensual (G) |
|---|---|---|
| A | Hasta G 36.000.000 | G 85.000 |
| B | G 36.000.001 – G 72.000.000 | G 165.000 |
| C | G 72.000.001 – G 108.000.000 | G 250.000 |
| D | G 108.000.001 – G 150.000.000 | G 340.000 |

## ¿Qué incluye la cuota?

El pago mensual unifica:
- **IRP** (Impuesto a la Renta Personal)
- **IVA** (Impuesto al Valor Agregado)
- **IPS** (seguro social básico)

Esto elimina la necesidad de presentar declaraciones separadas para cada impuesto, reduciendo la carga administrativa.

## IRP estándar para comparar

Fuera del monotributo, el Impuesto a la Renta Personal (IRP) estándar en Paraguay aplica las siguientes tasas para ingresos que superen los **10 salarios mínimos anuales** (G 154.200.000):

- **8%** sobre la renta neta para ingresos moderados.
- **10%** sobre la renta neta para ingresos elevados.

## Beneficios adicionales

Los monotributistas de las categorías A y B acceden a:
- Cobertura médica básica del IPS para el contribuyente.
- Emisión simplificada de facturas electrónicas.
- Acceso a créditos preferenciales del BNF (Banco Nacional de Fomento).

> **Fuente:** Ley 7.453/2026. Subsecretaría de Estado de Tributación (SET Paraguay). set.gov.py.`,
  },
  {
    id: "19",
    title: "Cuba amplía el trabajo por cuenta propia con nuevas actividades autorizadas",
    excerpt: "El gobierno cubano incluyó 50 nuevas actividades dentro del trabajo por cuenta propia, generando oportunidades de ingresos adicionales para miles de cubanos.",
    country: "CU",
    category: "Economía",
    date: "2026-05-08",
    readTime: 3,
    imageUrl: "https://images.pexels.com/photos/3825573/pexels-photo-3825573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `El Ministerio de Trabajo y Seguridad Social de Cuba (MTSS) publicó la **Resolución 18/2026** que amplía el listado de actividades económicas autorizadas para el Trabajo por Cuenta Propia (TCP), incorporando **50 nuevas categorías** que hasta ahora operaban en la informalidad o estaban restringidas al sector estatal.

## Nuevas actividades destacadas

Entre las 50 actividades incorporadas destacan:

- **Tecnología:** desarrollo de software, soporte técnico remoto, diseño gráfico digital
- **Comunicaciones:** creación de contenido digital, traducción y subtitulación
- **Servicios profesionales:** consultoría financiera, asesoría fiscal, servicios de contabilidad
- **Arte y cultura:** fotógrafos, videógrafos, músicos para eventos privados
- **Salud:** terapeutas físicos independientes, nutricionistas

## Sistema tributario del TCP

El **Impuesto sobre Ingresos Personales** en Cuba para trabajadores por cuenta propia sigue una escala progresiva calculada sobre los ingresos anuales declarados:

| Ingreso anual (CUP) | Tasa |
|---|---|
| Hasta CUP 10.000 | Exento |
| CUP 10.001 – CUP 20.000 | 15% |
| CUP 20.001 – CUP 30.000 | 20% |
| CUP 30.001 – CUP 50.000 | 30% |
| Más de CUP 50.001 | 40% |

*Nota: El tipo de cambio oficial y el mercado informal difieren significativamente en Cuba. La ONAT (Oficina Nacional de Administración Tributaria) gestiona la declaración anual.*

## Contexto económico

La ampliación del TCP forma parte de una serie de reformas orientadas a dinamizar la economía mixta cubana. Desde 2021, el número de trabajadores por cuenta propia ha crecido un **38%**, llegando a más de 800.000 inscritos.

> **Fuente:** Resolución MTSS 18/2026 y Decreto-Ley 46/2021 (base legal). ONAT Cuba: onat.gob.cu.`,
  },
  {
    id: "20",
    title: "Guinea Ecuatorial revisa los tramos del impuesto sobre la renta",
    excerpt: "La Dirección General de Impuestos ajustó los tramos del IPR con un incremento del 10% en los límites de cada franja, adaptándose a la evolución de los precios en la región CEMAC.",
    country: "GQ",
    category: "Fiscalidad",
    date: "2026-05-06",
    readTime: 3,
    imageUrl: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: `La **Dirección General de Impuestos y Contribuciones** de Guinea Ecuatorial (DGIC) publicó la actualización de la tabla del **Impuesto sobre los Rendimientos del Trabajo (IRT)**, con un ajuste del **10% en los límites de cada tramo** respecto a los valores vigentes en 2024.

## Tabla del IRT 2026 (en CFA Francs - XAF)

| Renta mensual (XAF) | Tasa |
|---|---|
| Hasta XAF 150.000 | 0% |
| XAF 150.001 – XAF 300.000 | 10% |
| XAF 300.001 – XAF 600.000 | 15% |
| XAF 600.001 – XAF 1.100.000 | 20% |
| XAF 1.100.001 – XAF 2.200.000 | 25% |
| Más de XAF 2.200.001 | 35% |

*1 EUR ≈ 655 XAF (tipo de cambio fijo CEMAC)*

## Contexto regional CEMAC

Guinea Ecuatorial forma parte de la **Comunidad Económica y Monetaria de África Central (CEMAC)**, que comparte el Franco CFA como moneda común. El país, con una economía basada principalmente en el petróleo, ha experimentado una diversificación económica en el sector servicios que ha impulsado la necesidad de revisar los parámetros fiscales.

## Deducciones aplicables

El sistema tributario de Guinea Ecuatorial permite las siguientes deducciones sobre los ingresos del trabajo:

- **Cuotas patronales y obreras de Seguridad Social:** 4.5% del salario bruto (obrero)
- **Asignación familiar:** XAF 3.000 por hijo a cargo
- **Gastos de formación profesional:** hasta el 10% del ingreso bruto

## Cotizaciones INSESO 2026

El Instituto Nacional de Seguridad Social (INSESO) establece:
- Cotización obrera: **4.5%**
- Cotización patronal: **21.5%**

> **Fuente:** Dirección General de Impuestos y Contribuciones de Guinea Ecuatorial. Para información actualizada, contactar directamente con la DGIC en Malabo.`,
  },
];
