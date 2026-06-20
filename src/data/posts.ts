import { countries } from "./countries";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  country: string;
  category: string;
  date: string;
  publishTime: number;
  readTime: number;
  imageUrl: string;
  content: string;
}

// 10 offsets in minutes for the 10 articles of each country
const offsets = [0, 15, 90, 240, 720, 1440, 2880, 4320, 7200, 10080];

const rawNews: Record<string, {
  t: string;   // title
  e: string;   // excerpt
  c: string;   // content
  cat: string; // category
  img: string; // unsplash ID
}[]> = {
  ES: [
    {
      t: "España aprueba nueva deducción de IRPF para alquiler de viviendas a jóvenes",
      e: "La Agencia Tributaria permitirá deducir hasta un 60% del rendimiento neto para bajar el precio de los alquileres.",
      c: "El Consejo de Ministros ha aprobado la reforma del IRPF para incentivar el alquiler de viviendas a menores de 30 años. Los propietarios que cumplan las condiciones de precio asequible en zonas tensionadas podrán deducirse hasta el 60% de los rendimientos netos del arrendamiento en su declaración anual ante la AEAT.",
      cat: "Fiscalidad",
      img: "1560518883-ce09059eeffa"
    },
    {
      t: "El Banco de España prevé un crecimiento del PIB del 2.1% impulsado por el turismo",
      e: "Las estimaciones del regulador financiero elevan las expectativas económicas para el cierre del año.",
      c: "El Banco de España ha publicado su informe trimestral donde proyecta un crecimiento del PIB de hasta el 2.1%. El sector servicios y el turismo internacional siguen liderando la recuperación económica, superando los récords históricos de facturación del año anterior.",
      cat: "Economía",
      img: "1454165804606-c3d57bc86b40"
    },
    {
      t: "La reforma laboral reduce la tasa de temporalidad en España al mínimo histórico",
      e: "El Ministerio de Trabajo destaca el aumento de los contratos indefinidos en el sector servicios.",
      c: "Los últimos datos del Ministerio de Trabajo indican que la tasa de temporalidad en el sector privado se ha reducido notablemente, situándose en niveles históricamente bajos tras la aplicación de la nueva reforma laboral. Los contratos fijos discontinuos y los indefinidos copan las nuevas afiliaciones.",
      cat: "Legislación",
      img: "1515378791036-0648a3ef77b2"
    },
    {
      t: "Hacienda recauda una cifra récord con el nuevo impuesto a la banca y energéticas",
      e: "El gravamen extraordinario aporta más de 2.900 millones de euros a las arcas públicas en España.",
      c: "La Agencia Tributaria (AEAT) ha cerrado la recaudación del gravamen temporal sobre entidades de crédito y grandes empresas energéticas. Los ingresos extraordinarios superan las estimaciones iniciales, lo que permitirá financiar medidas de apoyo social frente a la inflación.",
      cat: "Fiscalidad",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "El Salario Mínimo Interprofesional en España se consolida en 1.260 euros mensuales",
      e: "El SMI sube de forma definitiva beneficiando a más de 2.5 millones de trabajadores españoles.",
      c: "Tras las negociaciones entre el gobierno y los principales sindicatos, el Salario Mínimo Interprofesional (SMI) se ha fijado en 1.260 euros en 14 pagas. El incremento busca paliar la pérdida de poder adquisitivo de las rentas más bajas ante el alza de la cesta de la compra.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "España implementa el impuesto temporal a las Grandes Fortunas de forma permanente",
      e: "El gravamen que afecta a patrimonios superiores a 3 millones de euros se prorroga indefinidamente.",
      c: "El Congreso ha aprobado la continuidad del Impuesto de Solidaridad de las Grandes Fortunas. Esta medida armoniza la tributación de la riqueza en todas las comunidades autónomas, evitando la competencia fiscal a la baja en regiones que bonificaban el Impuesto de Patrimonio.",
      cat: "Fiscalidad",
      img: "1579621970563-ebec7560ff3e"
    },
    {
      t: "La digitalización de la AEAT reduce a la mitad el tiempo de devolución del IRPF",
      e: "Los algoritmos de pre-validación permiten tramitar los saldos a favor en menos de diez días.",
      c: "La Agencia Tributaria ha puesto en marcha un nuevo motor de procesamiento digital que automatiza la revisión de declaraciones de IRPF estándar. Más del 70% de las devoluciones sencillas se procesarán y depositarán en la cuenta del contribuyente en un tiempo récord.",
      cat: "Economía",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "El impacto del Mecanismo de Equidad Intergeneracional (MEI) en las nóminas españolas",
      e: "El aumento de la cotización por jubilación reduce levemente el sueldo neto mensual.",
      c: "El incremento gradual de la cotización del MEI entra en su nueva fase, aumentando el coste de la seguridad social tanto para empresas como para empleados. Este recargo está destinado a rellenar la hucha de las pensiones ante la jubilación de la generación del baby boom.",
      cat: "Salarios",
      img: "1506394133-3f69542a1701"
    },
    {
      t: "El visado para Nómadas Digitales en España atrae inversiones de alta tecnología",
      e: "La Ley de Startups ofrece un régimen fiscal del 15% de impuesto para profesionales extranjeros.",
      c: "La flexibilidad del nuevo visado de residencia y el atractivo régimen fiscal del Impuesto sobre la Renta de No Residentes (IRNR) al 15% han multiplicado las solicitudes de nómadas digitales. Ciudades como Málaga y Valencia lideran la atracción de talento internacional.",
      cat: "Legislación",
      img: "1524758631624-e2822e304c36"
    },
    {
      t: "Las exportaciones españolas rozan máximos gracias al sector agroalimentario",
      e: "El aceite de oliva y los productos cárnicos lideran la balanza comercial en el exterior.",
      c: "El Ministerio de Economía ha reportado un saldo comercial exterior sumamente favorable. La alta demanda internacional de productos agroalimentarios españoles ha compensado el déficit energético, estabilizando la balanza comercial y generando empleo en zonas rurales.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    }
  ],
  MX: [
    {
      t: "El nearshoring impulsa inversiones récord en el norte de México",
      e: "La relocalización de plantas industriales de chips y automotrices eleva la demanda de naves.",
      c: "La cercanía con el mercado estadounidense y los tratados comerciales han provocado un auge industrial sin precedentes en estados como Nuevo León, Coahuila y Chihuahua. Empresas globales mudan su producción a México, generando empleo calificado y presionando al alza el salario medio.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "El 'Superpeso' mexicano presiona a la baja el valor real de las remesas",
      e: "La apreciación histórica de la moneda reduce el poder de compra de los dólares recibidos.",
      c: "A pesar de que el flujo de remesas hacia México mantiene niveles históricos, la cotización fuerte del peso frente al dólar estadounidense ha provocado que las familias reciban menos pesos por transacción, afectando el consumo básico en zonas rurales dependientes de estos ingresos.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "Banxico mantiene tasa de interés de referencia para contener presiones inflacionarias",
      e: "El Banco de México prioriza la estabilidad de precios sobre el crecimiento en el corto plazo.",
      c: "La junta de gobierno del Banco de México (Banxico) ha decidido mantener la tasa de interés interbancaria en niveles altos. Aunque la inflación subyacente muestra signos de moderación, los precios de alimentos procesados y servicios continúan presionando los bolsillos mexicanos.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "El SAT endurece la fiscalización a grandes contribuyentes para elevar la recaudación",
      e: "El fisco mexicano audita a multinacionales y reduce la evasión fiscal sin crear nuevos impuestos.",
      c: "El Servicio de Administración Tributaria (SAT) ha puesto en marcha su plan maestro de fiscalización. Mediante el uso de modelos analíticos de datos, el SAT ha logrado recuperar miles de millones de pesos de impuestos atrasados de grandes corporativos financieros y comerciales.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "Ajuste al Salario Mínimo en México: sube a 7,468 pesos mensuales",
      e: "El incremento de sueldo se aplica de forma general, con un porcentaje mayor en la Zona Fronteriza Norte.",
      c: "La Comisión Nacional de los Salarios Mínimos (Conasami) oficializó el aumento del salario mínimo general a 7,468 pesos mensuales. En la Zona Libre de la Frontera Norte, el salario base es más elevado para compensar el costo de vida y retener la mano de obra en las maquiladoras.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "Las ventajas del Régimen Simplificado de Confianza (RESICO) para pequeños negocios",
      e: "El SAT mantiene tasas de ISR de entre 1% y 2.5% para incentivar la formalización.",
      c: "El régimen RESICO sigue sumando contribuyentes en México. Las bajas tasas impositivas de ISR sobre los ingresos brutos han motivado a miles de comerciantes independientes y profesionistas a formalizarse, teniendo acceso a créditos bancarios y facturación electrónica.",
      cat: "Fiscalidad",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "T-MEC: México y EE.UU. avanzan en paneles de disputa sobre reglas de origen de autos",
      e: "El acuerdo comercial brinda certeza a las exportaciones de la industria automotriz mexicana.",
      c: "Los paneles de solución de controversias del T-MEC han emitido fallos que favorecen la interpretación de México sobre las reglas de origen en componentes de autos. Esto asegura que los vehículos ensamblados en el país sigan entrando libres de aranceles a EE.UU.",
      cat: "Legislación",
      img: "1454165804606-c3d57bc86b40"
    },
    {
      t: "El Tren Maya y el Corredor Transístmico impulsan la economía del sur de México",
      e: "Las megaobras de infraestructura comienzan a generar inversión privada en turismo y logística.",
      c: "El gobierno federal destaca que los proyectos de infraestructura en el sureste mexicano están atrayendo inversiones en parques industriales y cadenas hoteleras. La conectividad ferroviaria busca reducir la brecha económica histórica entre el norte y el sur del país.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "Hacienda reduce el estímulo fiscal a gasolinas tras estabilización del petróleo",
      e: "El cobro del IEPS federal regresa a su nivel normal al disminuir el costo de importación.",
      c: "La Secretaría de Hacienda y Crédito Público (SHCP) ha recortado los subsidios al impuesto IEPS aplicable a las gasolinas Magna y Premium. La medida obedece a la caída de los precios internacionales del crudo, buscando estabilizar los ingresos presupuestarios de la Federación.",
      cat: "Fiscalidad",
      img: "1579621970563-ebec7560ff3e"
    },
    {
      t: "Pemex acuerda reestructuración de deuda con apoyo del presupuesto federal",
      e: "La petrolera estatal recibe inyecciones de capital para cumplir con vencimientos financieros.",
      c: "Para evitar un impacto en la calificación crediticia soberana de México, el gobierno ha transferido fondos para cubrir los vencimientos de deuda de Pemex. La estrategia incluye la reducción de su tasa de Derecho de Utilidad Compartida (DUC) al nivel más bajo registrado.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    }
  ],
  AR: [
    {
      t: "Argentina registra desaceleración de la inflación mensual tras severos ajustes",
      e: "El índice de precios al consumidor muestra una tendencia a la baja en el último reporte oficial del INDEC.",
      c: "El Instituto Nacional de Estadística y Censos (INDEC) reportó una marcada desaceleración en el índice de precios al consumidor mensual. Las políticas de contracción monetaria y equilibrio fiscal del Ministerio de Economía empiezan a estabilizar la devaluación del peso.",
      cat: "Economía",
      img: "1579621970563-ebec7560ff3e"
    },
    {
      t: "El BCRA flexibiliza el cepo cambiario para importaciones de insumos industriales",
      e: "El Banco Central libera divisas oficiales para evitar el desabastecimiento en fábricas clave.",
      c: "La autoridad monetaria de la República Argentina ha anunciado una flexibilización gradual de los plazos de acceso al Mercado Libre de Cambios (MLC). Las empresas manufactureras podrán adquirir dólares oficiales de manera más ágil para pagar insumos importados necesarios.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "Argentina acuerda nuevas metas fiscales con el FMI para estabilizar reservas",
      e: "El Fondo aprueba la revisión y destaca el superávit financiero logrado por el gobierno argentino.",
      c: "El Fondo Monetario Internacional (FMI) dio luz verde a la última revisión del programa de facilidades extendidas con Argentina. El organismo multilateral destacó el logro de un superávit fiscal financiero sostenido y la acumulación de reservas netas en el Banco Central.",
      cat: "Economía",
      img: "1454165804606-c3d57bc86b40"
    },
    {
      t: "Vaca Muerta alcanza récord de producción de gas y petróleo no convencional",
      e: "Las exportaciones de hidrocarburos a Chile y Brasil equilibran la balanza energética argentina.",
      c: "La cuenca de Vaca Muerta, en la provincia de Neuquén, registró récords históricos de fractura y producción de shale gas y petróleo. La infraestructura de nuevos gasoductos permite sustituir importaciones de GNL y consolidar exportaciones de energía a países vecinos.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "Actualizan escalas del Monotributo y el Mínimo No Imponible del Impuesto a las Ganancias",
      e: "ARCA eleva los topes de facturación de las categorías de monotributistas ante la inflación.",
      c: "La Agencia de Recaudación y Control Aduanero (ARCA) actualizó las escalas del régimen simplificado (Monotributo). Asimismo, el mínimo no imponible para el Impuesto a las Ganancias (4ª categoría) sube a 1,063,500 pesos mensuales, aliviando la carga fiscal sobre salarios de convenios.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "El sector agrícola prevé una cosecha récord y un gran ingreso de divisas por retenciones",
      e: "Las lluvias favorecen el rendimiento de la soja y el maíz en la zona núcleo pampeana.",
      c: "La Bolsa de Cereales estima una producción agrícola sobresaliente para esta campaña. La liquidación de divisas de la exportación de granos y subproductos aportará divisas líquidas claves al Banco Central a través de las retenciones a la exportación vigentes.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "Impulsan incentivos fiscales para Pymes que generen nuevos puestos de trabajo registrados",
      e: "La ley reduce las cargas patronales de seguridad social para contrataciones de jóvenes.",
      c: "El Congreso ha reglamentado la ley de fomento al empleo Pyme. El programa otorga un descuento de hasta el 70% en las contribuciones patronales por un año para empresas que incrementen su plantilla de trabajadores en relación de dependencia debidamente registrados.",
      cat: "Legislación",
      img: "1515378791036-0648a3ef77b2"
    },
    {
      t: "El Salario Mínimo en Argentina sube a 266,432 pesos ante paritarias mensuales",
      e: "El Consejo del Salario ajusta el haber mínimo vital y móvil para amortiguar el alza de la canasta básica.",
      c: "Representantes gremiales, empresarios y el gobierno definieron un incremento del Salario Mínimo, Vital y Móvil, situándolo en 266,432 pesos. La medida sirve como referencia para planes sociales y el cálculo de la base imponible mínima de aportes jubilatorios.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "La adopción de Criptomonedas y stablecoins en Argentina lidera rankings en la región",
      e: "La falta de divisas impulsa el uso del 'dólar cripto' como resguardo y medio de pago electrónico.",
      c: "Informes privados posicionan a la Argentina como uno de los líderes de adopción cripto a nivel global. Las stablecoins atadas al dólar son utilizadas como reserva de valor frente a la inflación y para realizar pagos comerciales esquivando trabas del mercado cambiario tradicional.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "Aumento de tarifas de servicios públicos reduce la porción de ingreso destinada a consumo",
      e: "La quita de subsidios estatales en luz, gas y transporte presiona los presupuestos familiares.",
      c: "La quita progresiva de subsidios nacionales en los cuadros tarifarios de energía y transporte ha elevado los costos fijos de los hogares en el Área Metropolitana de Buenos Aires (AMBA). El impacto reduce el sueldo disponible para compras de bienes de consumo masivo.",
      cat: "Economía",
      img: "1506394133-3f69542a1701"
    }
  ],
  CO: [
    {
      t: "Colombia aprueba histórica reforma pensional en el Congreso de la República",
      e: "El nuevo sistema unifica los fondos privados y el público en un esquema de pilares obligatorios.",
      c: "El Congreso de la República de Colombia ha aprobado la reforma al sistema general de pensiones. Todos los cotizantes que perciban hasta 2.3 salarios mínimos deberán aportar de forma obligatoria a Colpensiones, mientras que el excedente podrá ir a los fondos privados (AFP).",
      cat: "Legislación",
      img: "1515378791036-0648a3ef77b2"
    },
    {
      t: "El Salario Mínimo en Colombia aumenta a 1,508,910 pesos para mitigar inflación",
      e: "El incremento del 6% y el auxilio de transporte unificado mejoran la nómina de los asalariados.",
      c: "El Gobierno Nacional expidió el decreto que fija el Salario Mínimo Mensual Legal Vigente (SMMLV) en $1.508.910. Junto con el auxilio de transporte de $213.900, la remuneración mínima legal busca defender el poder adquisitivo frente a la inflación en el costo de los alimentos.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "La DIAN actualiza el valor de la UVT en Colombia a 49,799 pesos para este ejercicio",
      e: "El reajuste de la Unidad de Valor Tributario modifica los topes de retención en la fuente e impuestos.",
      c: "La Dirección de Impuestos y Aduanas Nacionales (DIAN) ha reajustado el valor de la UVT. Esta actualización incide de forma directa en los topes impositivos del impuesto sobre la renta y define la base a partir de la cual se aplica la retención en la fuente sobre salarios.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "El Banco de la República baja la tasa de interés interbancaria ante la caída de la inflación",
      e: "El emisor central de Colombia busca reactivar sectores estancados como construcción y comercio.",
      c: "La Junta Directiva del Banco de la República ha decidido rebajar la tasa de interés de referencia. La medida obedece al descenso sostenido del índice de precios al consumidor y busca aliviar las tasas de créditos hipotecarios y de consumo para reanimar la economía colombiana.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "Exportaciones de café colombiano mantienen cotización alta en mercados internacionales",
      e: "Los precios de la libra de café suave premium y el aumento de producción benefician al sector cafetero.",
      c: "La Federación Nacional de Cafeteros reporta un balance altamente positivo en las exportaciones de grano hacia EE.UU. y Europa. A pesar de los desafíos climáticos, los precios internacionales favorables y la calidad del café premium aseguran un flujo continuo de divisas.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "Impuestos saludables a alimentos ultraprocesados y bebidas azucaradas entran en pleno vigor",
      e: "Las nuevas tarifas del impuesto al consumo buscan desincentivar productos nocivos para la salud.",
      c: "La reforma tributaria de la DIAN aplica la fase final de los gravámenes saludables. Los refrescos y alimentos con exceso de sodio o azúcares sufren incrementos graduales en sus precios de venta final, lo que ha generado rechazo en gremios de tenderos y minoristas.",
      cat: "Fiscalidad",
      img: "1579621970563-ebec7560ff3e"
    },
    {
      t: "Ecopetrol reporta inversiones en proyectos de energía limpia y transición energética",
      e: "La petrolera estatal colombiana diversifica su portafolio hacia parques solares y producción de hidrógeno.",
      c: "Ecopetrol ha presentado su plan de inversiones de mediano plazo centrado en la descarbonización. Aunque el petróleo y el gas siguen siendo su fuente principal de ingresos, la compañía amplía la capacidad de autogeneración solar en sus principales refinerías del país.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "El turismo internacional en Colombia crece un 12% impulsado por destinos de naturaleza",
      e: "El país se consolida como un destino atractivo en el continente debido a la devaluación del peso.",
      c: "El Ministerio de Comercio, Industria y Turismo informó un incremento en el flujo de visitantes extranjeros. Zonas como el Eje Cafetero, Cartagena y los parques naturales reportan ocupaciones hoteleras récord, convirtiendo al turismo en un generador clave de divisas internacionales.",
      cat: "Economía",
      img: "1502086223501-7ea6ecd79368"
    },
    {
      t: "La tasa de desempleo en Colombia desciende a un dígito en el último reporte del DANE",
      e: "El sector de comercio minorista y la hotelería generan la mayor cantidad de nuevos puestos laborales.",
      c: "El Departamento Administrativo Nacional de Estadística (DANE) reveló que la desocupación en el país bajó a niveles estables de un solo dígito. La reactivación de obras de infraestructura civil y el consumo privado impulsaron la creación de puestos formales registrados.",
      cat: "Economía",
      img: "1515378791036-0648a3ef77b2"
    },
    {
      t: "DIAN implementa facturación electrónica obligatoria para transacciones en el comercio minorista",
      e: "El sistema POS electrónico reemplaza las tirillas tradicionales para combatir el fraude del IVA.",
      c: "La DIAN ha iniciado la exigencia de emitir factura electrónica de venta para compras mínimas en supermercados y almacenes. Con esta medida tecnológica, el fisco busca digitalizar el cobro del IVA y disminuir la evasión de impuestos en el comercio al por menor.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    }
  ],
  CL: [
    {
      t: "Chile implementa el Royalty Minero para capturar mayores rentas del cobre y litio",
      e: "La ley distribuye la recaudación minera directamente a las regiones y comunas más vulnerables.",
      c: "El Servicio de Impuestos Internos (SII) de Chile ha iniciado la aplicación del Royalty Minero a la gran minería del cobre. La tasa combina un componente ad valorem y una escala sobre el margen operativo, buscando captar fondos para seguridad y desarrollo en las regiones mineras.",
      cat: "Legislación",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "El sueldo mínimo en Chile sube de forma definitiva a 500,000 pesos mensuales",
      e: "El reajuste de la remuneración básica beneficia a miles de trabajadores bajo relación de dependencia.",
      c: "La Central Unitaria de Trabajadores (CUT) y el gobierno chileno confirmaron el logro de la meta salarial de 500,000 pesos. El incremento incluye un subsidio estatal de apoyo a las micro, pequeñas y medianas empresas (Mipymes) para costear el aumento de las cotizaciones obligatorias.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "Banco Central de Chile recorta tasas de interés ante el control de la inflación",
      e: "La tasa de política monetaria (TPM) disminuye buscando incentivar el decaído mercado hipotecario.",
      c: "La directiva del Banco Central de Chile acordó una rebaja en la TPM. El descenso de la inflación subyacente y la estabilidad del tipo de cambio permiten al ente emisor relajar la política monetaria para facilitar el acceso al crédito de consumo e inversión empresarial.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "Chile define estrategia nacional para la explotación y procesamiento de Litio",
      e: "El Estado chileno busca alianzas público-privadas a través de Codelco para liderar el mercado global.",
      c: "El gobierno de Chile presentó el modelo de explotación de litio en los salares de Atacama. Codelco tendrá la participación mayoritaria en los contratos de extracción, garantizando transferencia tecnológica e ingresos permanentes para el fisco en proyectos de baterías limpias.",
      cat: "Economía",
      img: "1454165804606-c3d57bc86b40"
    },
    {
      t: "SII actualiza tramos del Impuesto Único de Segunda Categoría en Chile",
      e: "Las tablas mensuales que gravan los sueldos se ajustan de acuerdo a la variación de la UTM.",
      c: "El Servicio de Impuestos Internos (SII) actualizó los tramos de renta mensual que rigen las retenciones del Impuesto Único de Segunda Categoría. Los valores se ajustan según la Unidad Tributaria Mensual (UTM), evitando un aumento artificial de la carga fiscal por inflación.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "El Congreso chileno avanza en la discusión para aumentar la cotización previsional en 6%",
      e: "La reforma busca destinar el aporte patronal extra a un fondo solidario y a cuentas individuales.",
      c: "La comisión de trabajo de la Cámara de Diputados debate el destino del 6% de cotización adicional de cargo del empleador. El proyecto de reforma de pensiones busca elevar de forma inmediata las jubilaciones actuales mediante un pilar de reparto social solidario.",
      cat: "Legislación",
      img: "1515378791036-0648a3ef77b2"
    },
    {
      t: "Exportaciones de cerezas y fruta chilena rompen récords históricos de ventas en China",
      e: "El mercado asiático eleva la demanda durante el año nuevo impulsando al sector agroexportador.",
      c: "La Asociación de Exportadores de Fruta (Asoex) informó de un balance sobresaliente para la campaña de exportación agrícola. La venta de cerezas premium hacia China representó una inyección masiva de divisas y generó empleo temporal en la zona central del país.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "Inversión en energías renovables (solar y eólica) lidera la matriz energética en el norte de Chile",
      e: "El desierto de Atacama se consolida como el mayor generador de energía fotovoltaica de la región.",
      c: "La matriz de generación eléctrica en Chile alcanzó una cuota de energías limpias sin precedentes. Nuevos proyectos de almacenamiento térmico y parques solares en el norte buscan exportar electricidad limpia e impulsar la futura producción de hidrógeno verde.",
      cat: "Economía",
      img: "1506394133-3f69542a1701"
    },
    {
      t: "El impacto de la Ley de 40 Horas laborales en la productividad de las empresas chilenas",
      e: "La reducción gradual de la jornada laboral obliga a las compañías a reestructurar sus turnos.",
      c: "La reducción de la jornada ordinaria de trabajo a 40 horas semanales avanza en su segunda fase de implementación. Las empresas de servicios y comercio minorista han tenido que incorporar tecnologías de automatización para mantener la productividad sin elevar costes fijos.",
      cat: "Legislación",
      img: "1524758631624-e2822e304c36"
    },
    {
      t: "Chile ratifica acuerdo comercial con la Unión Europea para modernizar exportaciones",
      e: "El tratado reduce aranceles para exportaciones agroindustriales y facilita inversiones tecnológicas.",
      c: "El Senado chileno ratificó el Acuerdo Marco Avanzado con la Unión Europea. La modernización del tratado vigente facilitará la exportación de litio, hidrógeno y productos agrícolas, eliminando trabas para la llegada de capitales europeos al sector de infraestructura.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    }
  ],
  PE: [
    {
      t: "Inauguración del Megapuerto de Chancay transformará el comercio entre Perú y Asia",
      e: "La megaobra logística reducirá a la mitad los tiempos de transporte marítimo hacia China.",
      c: "La puesta en marcha del Megapuerto de Chancay posiciona al Perú como el principal hub logístico y comercial de Sudamérica hacia el continente asiático. La obra, con inversión mayoritaria de capitales chinos, generará miles de empleos directos y dinamizará la agroexportación peruana.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "La producción de cobre en el Perú alcanza niveles históricos gracias a Quellaveco",
      e: "El país consolida su puesto como segundo productor mundial de cobre beneficiando la recaudación fiscal.",
      c: "El Ministerio de Energía y Minas (Minem) reportó que la producción cuprífera nacional superó récords debido a la plena operación del yacimiento de Quellaveco. El ingreso de divisas y el canon minero alivian el déficit fiscal y financian obras públicas en el sur.",
      cat: "Economía",
      img: "1454165804606-c3d57bc86b40"
    },
    {
      t: "El BCRP reduce tasa de interés de referencia ante una inflación controlada de 2.2%",
      e: "El Banco Central de Reserva de Julio Velarde recorta el costo del crédito para reactivar la inversión privada.",
      c: "El directorio del Banco Central de Reserva del Perú (BCRP) acordó una reducción de la tasa de referencia. Con la inflación anualizada dentro del rango meta oficial, el regulador busca reducir las tasas corporativas e hipotecarias para dinamizar los créditos de vivienda y comercio.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "Agroexportaciones peruanas de arándanos y palta lideran ventas en EE.UU. y Europa",
      e: "El sector no tradicional rompe récords y compensa caídas en la exportación pesquera por factores climáticos.",
      c: "La Asociación de Exportadores (Adex) informó que los envíos de arándanos, uva y palta orgánica alcanzaron cifras récord. La demanda sostenida en mercados premium consolida al sector agrícola no tradicional como la segunda fuente generadora de divisas líquidas del país.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "SUNAT inicia el cobro del IGV a servicios digitales de streaming en el Perú",
      e: "La llamada 'Tasa Netflix' aplica el 18% de IGV a plataformas de video, música y hospedaje extranjero.",
      c: "La Superintendencia Nacional de Aduanas y de Administración Tributaria (SUNAT) reglamentó el cobro del IGV a servicios provistos por empresas no domiciliadas (como Netflix, Spotify y Airbnb). Las compañías deberán retener el impuesto directamente al facturar con tarjetas peruanas.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "El gobierno peruano debate incremento de la Remuneración Mínima Vital (RMV)",
      e: "El Consejo Nacional de Trabajo busca acordar la subida del sueldo mínimo por encima de los 1,025 soles actuales.",
      c: "El Ministerio de Trabajo (MTPE) convocó a mesas de concertación entre gremios de trabajadores y empresarios. El objetivo es ajustar la RMV para mitigar el impacto de la inflación acumulada en el costo de la canasta básica de alimentos de los sectores de menores ingresos.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "SUNAT amplía deducción anual de impuesto a la renta de cuarta y quinta categoría",
      e: "Los trabajadores independientes y en planilla podrán deducir más gastos de restaurantes y hoteles.",
      c: "Para fomentar el turismo interno y la formalización de comercios, la SUNAT elevó el límite de deducción adicional de hasta 3 UIT por gastos personales justificados con boletas electrónicas de hoteles, restaurantes y servicios profesionales con recibo por honorarios.",
      cat: "Fiscalidad",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "Turismo en Cusco y Machu Picchu se recupera y roza niveles previos a la pandemia",
      e: "El incremento de aforo diario y la reactivación de vuelos internacionales impulsan la hotelería.",
      c: "El Ministerio de Comercio Exterior y Turismo (Mincetur) reportó una ocupación hotelera del 85% en el Cusco. La flexibilización de accesos y la conectividad ferroviaria han acelerado la llegada de visitantes extranjeros, beneficiando a guías, artesanos y comercios locales.",
      cat: "Economía",
      img: "1502086223501-7ea6ecd79368"
    },
    {
      t: "La informalidad laboral en el Perú se mantiene alta y desafía las reformas de formalización",
      e: "Siete de cada diez trabajadores peruanos laboran en el sector informal sin cobertura de salud.",
      c: "Informes del Instituto Peruano de Economía (IPE) advierten que la informalidad laboral sigue afectando al 70% de la población activa. Los expertos plantean flexibilizar los regímenes tributarios de las Mypes y reducir sobrecostos laborales para incentivar la formalización.",
      cat: "Legislación",
      img: "1515378791036-0648a3ef77b2"
    },
    {
      t: "Perú emite bonos soberanos con éxito en el mercado internacional para financiar obras viales",
      e: "La demanda de los bonos en soles refleja la confianza de inversionistas en la fortaleza macroeconómica.",
      c: "El Ministerio de Economía y Finanzas (MEF) colocó bonos soberanos por una suma millonaria en el mercado global. La solidez de las reservas internacionales y la estabilidad monetaria permitieron obtener tasas favorables para costear carreteras y proyectos de saneamiento de agua.",
      cat: "Economía",
      img: "1579621970563-ebec7560ff3e"
    }
  ],
  VE: [
    {
      t: "EE.UU. otorga licencias a petroleras para operar y exportar crudo desde Venezuela",
      e: "Chevron y otras multinacionales incrementan la producción en la Faja Petrolífera del Orinoco.",
      c: "La flexibilización de sanciones por parte de la Oficina de Control de Activos Extranjeros (OFAC) ha permitido a corporaciones energéticas extranjeras reactivar proyectos de extracción conjunta con PDVSA, aumentando el flujo de divisas y elevando las exportaciones de crudo venezolano.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "El Banco Central de Venezuela interviene el mercado cambiario para frenar el dólar",
      e: "El BCV inyecta millones de dólares en la banca para estabilizar la cotización del bolívar oficial.",
      c: "El Banco Central de Venezuela (BCV) mantiene su política de inyección de divisas en las mesas de cambio bancarias. La estrategia busca contener la devaluación de la moneda nacional y mitigar la inflación en los precios de productos importados de consumo básico.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "El cobro del Impuesto a las Grandes Transacciones Financieras (IGTF) en divisas genera debate",
      e: "Comercios y gremios empresariales solicitan reducir el impuesto del 3% para abaratar la cesta básica.",
      c: "La aplicación del IGTF sobre pagos en dólares en efectivo o criptomonedas sigue bajo discusión en el sector comercial de Venezuela. Consecomercio señala que la tasa eleva los precios finales y desincentiva la reactivación del consumo formal en los establecimientos comerciales.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "El salario mínimo y los bonos de alimentación en Venezuela sufren nuevos ajustes",
      e: "El gobierno indexa parcialmente los bonos de la administración pública a la tasa oficial del BCV.",
      c: "Para compensar la devaluación, el Ejecutivo Nacional mantiene la política de indexación mensual de bonos de compensación salarial (Cestaticket y bono de Guerra Económica). Sin embargo, el sueldo mínimo base se mantiene sin cambios, afectando el cálculo de las prestaciones sociales.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "El sector privado comercial y de servicios lidera el modesto crecimiento de la economía",
      e: "El sector farmacéutico, alimentario y tecnológico registran aperturas en las principales ciudades.",
      c: "Informes de consultoras privadas destacan que la economía venezolana muestra signos de recuperación focalizada en el sector comercial. La dolarización de facto y la flexibilización de controles de precios han motivado la inversión privada en supermercados, farmacias y delivery.",
      cat: "Economía",
      img: "1515378791036-0648a3ef77b2"
    },
    {
      t: "Venezuela registra la inflación anualizada más baja en una década tras estabilización cambiaria",
      e: "El control del gasto público y la intervención cambiaria frenan la dinámica de hiperinflación.",
      c: "Los reportes del BCV confirman una notable desaceleración de la inflación acumulada. Aunque sigue siendo de las más altas del continente, el abandono de la emisión inorgánica de bolívares y el anclaje cambiario han sacado a Venezuela de la zona de hiperinflación prolongada.",
      cat: "Economía",
      img: "1579621970563-ebec7560ff3e"
    },
    {
      t: "La Ley de Zonas Económicas Especiales busca atraer capitales extranjeros en Venezuela",
      e: "Áreas como La Guaira, Paraguaná y Margarita ofrecen exenciones arancelarias e incentivos del ISLR.",
      c: "La Superintendencia de Zonas Económicas Especiales promueve proyectos de inversión industrial y turística. Las empresas que se instalen en estas áreas gozarán de exenciones de impuestos de importación y rebajas en el Impuesto Sobre la Renta (ISLR) por hasta diez años.",
      cat: "Legislación",
      img: "1454165804606-c3d57bc86b40"
    },
    {
      t: "El flujo de Remesas en divisas en Venezuela representa un soporte clave para el consumo",
      e: "Las transferencias de la diáspora sostienen la economía del 30% de los hogares venezolanos.",
      c: "Estudios económicos estiman que el ingreso de remesas familiares se mantiene estable en el país. El dinero, ingresado mayormente en efectivo o a través de plataformas digitales, financia el gasto en alimentación, salud y educación de sectores vulnerables no asalariados.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "Fallas de energía eléctrica y servicios públicos limitan la productividad de la manufactura",
      e: "La industria metalúrgica y química opera a menos del 30% de su capacidad instalada por apagones.",
      c: "Conindustria reporta que los cortes programados y las deficiencias en el suministro de combustible e infraestructura eléctrica obstaculizan el despegue fabril de las empresas del centro y occidente del país, elevando costos de autogeneración eléctrica privada.",
      cat: "Economía",
      img: "1506394133-3f69542a1701"
    },
    {
      t: "SENIAT actualiza valor de la Unidad Tributaria en Venezuela para el cobro del ISLR",
      e: "El aumento del valor de la UT a Bs. 9,00 modifica el cálculo de tasas fiscales y exenciones.",
      c: "El Servicio Nacional Integrado de Administración Aduanera y Tributaria (SENIAT) oficializó el aumento del valor de la Unidad Tributaria. La actualización incide en las bases de declaración anual del ISLR de personas naturales y en las multas administrativas nacionales.",
      cat: "Fiscalidad",
      img: "1554224155-8d04cb21cd6c"
    }
  ],
  EC: [
    {
      t: "Ecuador eleva tasa de IVA al 15% para financiar la lucha contra la inseguridad",
      e: "La reforma tributaria entra en vigor incrementando el costo final de bienes de consumo gravados.",
      c: "El Servicio de Rentas Internas (SRI) de Ecuador inició la recaudación del IVA al 15%. La medida, aprobada por la Asamblea para costear operativos de seguridad del Estado, no afecta a productos de la canasta familiar básica ni a los medicamentos de consumo general.",
      cat: "Fiscalidad",
      img: "1579621970563-ebec7560ff3e"
    },
    {
      t: "El cierre del bloque petrolero Yasuní ITT costará millones de dólares al fisco ecuatoriano",
      e: "La suspensión de operaciones en la reserva ambiental obliga a buscar alternativas para cubrir el déficit.",
      c: "La consulta popular que ordenó el cese de la explotación de crudo en el bloque Yasuní ITT entra en su fase de desmantelamiento. Petroecuador estima pérdidas significativas en ingresos fiscales y exportación, lo que obligará a ajustar el gasto público de inversión social.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "Ecuador e IMF acuerdan programa de asistencia financiera por 4,000 millones de dólares",
      e: "El acuerdo busca estabilizar las reservas internacionales de la economía dolarizada ecuatoriana.",
      c: "El Fondo Monetario Internacional (FMI) y el gobierno ecuatoriano firmaron un programa de Facilidades Extendidas de 4 años. Los desembolsos estarán condicionados al cumplimiento de metas de austeridad fiscal y al combate de la evasión de impuestos por el SRI.",
      cat: "Economía",
      img: "1454165804606-c3d57bc86b40"
    },
    {
      t: "El Tratado de Libre Comercio entre Ecuador y China dinamiza las exportaciones agrícolas",
      e: "El camarón, banano y flores entran con arancel preferencial al gigantesco mercado de consumo asiático.",
      c: "La ratificación del TLC con China abre oportunidades comerciales sin precedentes para el sector agroindustrial ecuatoriano. Los exportadores de camarón y frutas exóticas prevén un incremento del 20% en ventas, compensando debilidades en los precios de otros destinos.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "El Salario Básico Unificado en Ecuador se establece en 460 dólares mensuales",
      e: "El Ministerio del Trabajo fija la nueva remuneración mínima obligatoria para el sector privado.",
      c: "La cartera de Trabajo oficializó el aumento del Salario Básico Unificado (SBU) a 460 dólares. El ajuste impacta también en el cálculo de las cotizaciones obligatorias de los afiliados al Instituto Ecuatoriano de Seguridad Social (IESS) y en las multas de tránsito nacionales.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "SRI actualiza la tabla de Impuesto a la Renta de Personas Naturales para Ecuador",
      e: "La fracción básica exenta sube a 11,902 dólares anuales para proteger los sueldos bajos.",
      c: "El SRI publicó la tabla del Impuesto a la Renta de Personas Naturales aplicable. La fracción exenta de tributación se eleva a 11,902 dólares, lo que significa que los contribuyentes que ganen menos de esa cantidad acumulada al año no pagarán el impuesto sobre la renta.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "Las exportaciones de camarón ecuatoriano enfrentan desafíos por caída de precios globales",
      e: "La sobreoferta en el mercado internacional reduce los márgenes de ganancia de los productores locales.",
      c: "La Cámara Nacional de Acuacultura (CNA) advierte de pérdidas operativas en el sector debido al descenso del precio por libra en EE.UU. y Europa. El sector solicita incentivos de exención de aranceles en el combustible diésel para mantener la competitividad de las plantas procesadoras.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "El Riesgo País de Ecuador experimenta alta volatilidad por la incertidumbre fiscal",
      e: "El indicador de J.P. Morgan sube dificultando la emisión de bonos y el financiamiento externo.",
      c: "La inestabilidad fiscal y las dudas sobre las reformas de ahorro en los subsidios a combustibles han provocado oscilaciones bruscas en el indicador del Riesgo País. La situación encarece las tasas de interés que Ecuador debe pagar si decide emitir deuda en mercados internacionales.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "La dolarización en Ecuador cumple más de dos décadas de estabilidad monetaria",
      e: "A pesar de las crisis fiscales, la adopción del dólar como moneda oficial goza del 90% de aprobación.",
      c: "Expertos económicos destacan que la dolarización sigue actuando como un ancla inflacionaria fundamental para Ecuador. El sistema erradica el riesgo de devaluación monetaria descontrolada, brindando estabilidad de planificación comercial frente a sus vecinos de la región.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "SRI implementa la amnistía fiscal para condonar multas a pequeños comerciantes en Ecuador",
      e: "El programa de condonación de intereses beneficia a más de 300,000 contribuyentes del RIMPE.",
      c: "El SRI puso en marcha el plan de remisión de intereses y multas de obligaciones vencidas. Los microempresarios y contribuyentes adscritos al régimen simplificado (RIMPE) que paguen el capital de sus impuestos pendientes quedarán absueltos de recargos e intereses acumulados.",
      cat: "Fiscalidad",
      img: "1554224155-8d04cb21cd6c"
    }
  ],
  BO: [
    {
      t: "Bolivia enfrenta escasez de dólares y tensiones en el mercado cambiario paralelo",
      e: "El Banco Central mantiene el tipo de cambio oficial, pero surgen cotizaciones elevadas en la calle.",
      c: "La caída de las reservas internacionales de divisas en el Banco Central de Bolivia (BCB) ha provocado restricciones en la entrega de dólares a bancos comerciales. La escasez alimenta un mercado informal de divisas que encarece los costos de importación de repuestos y manufacturas.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "Bolivia firma contratos clave con consorcios internacionales para industrializar Litio",
      e: "Empresas chinas y rusas invertirán millones de dólares en plantas de extracción directa en salares.",
      c: "El Ministerio de Hidrocarburos y Energías firmó acuerdos para la construcción de plantas piloto de Extracción Directa de Litio (EDL) en los salares de Uyuni y Coipasa. La meta estatal es producir baterías de litio a gran escala para exportación a partir del próximo año.",
      cat: "Economía",
      img: "1454165804606-c3d57bc86b40"
    },
    {
      t: "La declinación en la producción de gas natural de YPFB impacta las exportaciones bolivianas",
      e: "La caída de volúmenes enviados a Brasil y Argentina obliga a acelerar la búsqueda de nuevos pozos.",
      c: "Yacimientos Petrolíferos Fiscales Bolivianos (YPFB) reconoce que la madurez de los pozos de gas ha mermado la producción disponible. Esto limita la venta al exterior y reduce el ingreso fiscal por concepto del Impuesto Directo a los Hidrocarburos (IDH) en gobernaciones y universidades.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "Bolivia aplica la 'Ley del Oro' para fortalecer las Reservas Internacionales Netas (RIN)",
      e: "El Banco Central compra oro de cooperativas mineras locales y vende porciones en los mercados globales.",
      c: "La Ley de Compra de Oro de Producción Nacional permite al BCB adquirir el mineral refinado de cooperativas auríferas de forma directa y a precio internacional en moneda boliviana. Con esto, el ente emisor busca reponer y monetizar las reservas en lingotes para responder por obligaciones externas.",
      cat: "Economía",
      img: "1579621970563-ebec7560ff3e"
    },
    {
      t: "El elevado coste fiscal de los subsidios a combustibles presiona el presupuesto de Bolivia",
      e: "El gobierno mantiene subvencionados el diésel y la gasolina importada para evitar inflación interna.",
      c: "El presupuesto general del Estado destina un alto porcentaje a sostener los precios fijos del combustible. El subsidio frena el alza de precios del transporte y alimentos, pero incrementa el déficit de balanza comercial del país debido a que gran parte del carburante consumido se importa.",
      cat: "Economía",
      img: "1506394133-3f69542a1701"
    },
    {
      t: "El Salario Mínimo Nacional en Bolivia sube a 2,556 bolivianos de forma concertada",
      e: "El aumento salarial del sector público y privado es acordado por el gobierno y la COB.",
      c: "La Central Obrera Boliviana (COB) y el presidente del Estado concertaron la subida del salario mínimo general a 2,556 bolivianos. El incremento del haber básico sirve como parámetro de cálculo de aportes a las Administradoras de Fondos de Pensiones (AFP) y del bono de frontera.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "Impuestos Nacionales actualiza tramos del régimen RC-IVA en Bolivia",
      e: "El Servicio de Impuestos Nacionales mantiene la exención equivalente a dos salarios mínimos.",
      c: "El Servicio de Impuestos Nacionales (SIN) aclaró las bases de cálculo del Régimen Complementario al IVA (RC-IVA) para dependientes. Los empleados que ganen menos de cuatro salarios mínimos nacionales están de facto exentos debido a las deducciones fiscales estándar autorizadas.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "El sector cooperativo minero de Bolivia registra récord de exportaciones de zinc y estaño",
      e: "Los precios sostenidos de los metales industriales en Londres estabilizan los ingresos mineros.",
      c: "A pesar de las fluctuaciones cambiarias, los envíos de concentrados de minerales de plomo, plata, zinc y estaño a fundiciones extranjeras reportan saldos favorables. El sector solicita facilidades arancelarias en maquinaria de perforación para elevar la ley del mineral.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "Bolivia avanza en la digitalización del cobro tributario con el Sistema SIAT en línea",
      e: "El portal de facturación en línea unifica a comerciantes y simplifica la recaudación del IVA.",
      c: "El Servicio de Impuestos Nacionales consolidó el uso obligatorio de la Facturación Electrónica en Línea a través de la plataforma SIAT. La medida busca erradicar las facturas de papel fraguadas y agilizar la verificación mensual de crédito fiscal de los contribuyentes registrados.",
      cat: "Fiscalidad",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "Las exportaciones agroindustriales de soya de Santa Cruz mitigan el déficit comercial",
      e: "Los envíos de aceite, torta y harina de soya a países andinos lideran las ventas no tradicionales.",
      c: "La Cámara de Exportadores de Santa Cruz (Cadex) reportó balances favorables en las agroexportaciones de soya a Colombia, Ecuador y Perú. El sector agropecuario cruceño pide levantar cupos de exportación internos para dinamizar el ingreso genuino de dólares al sistema financiero nacional.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    }
  ],
  PY: [
    {
      t: "Paraguay e Itaipú acuerdan histórica tarifa de venta de energía eléctrica a Brasil",
      e: "El precio consensuado inyectará fondos extraordinarios para infraestructura pública paraguaya.",
      c: "Los gobiernos de Paraguay y Brasil cerraron la negociación de la tarifa de energía de la represa hidroeléctrica binacional Itaipú. Los recursos extra obtenidos por la ANDE se destinarán a reforzar la red de transmisión eléctrica, mejorar la educación pública y costear centros de salud.",
      cat: "Economía",
      img: "1506394133-3f69542a1701"
    },
    {
      t: "Paraguay persigue el Grado de Inversión crediticio tras reformas macroeconómicas",
      e: "Las agencias Fitch y Moody's elevan la perspectiva soberana destacando la baja deuda pública.",
      c: "El Ministerio de Economía destaca que la solidez macroeconómica y el control de la inflación por el Banco Central del Paraguay (BCP) posicionan al país a un paso del grado de inversión. Esto permitirá captar capitales internacionales a menores tasas de interés para el desarrollo fabril.",
      cat: "Economía",
      img: "1454165804606-c3d57bc86b40"
    },
    {
      t: "La producción de Soya paraguaya se recupera y empuja el rebote del PIB nacional",
      e: "Los excelentes rendimientos de la zafra de granos generan una inyección masiva de divisas.",
      c: "La zafra sojera paraguaya arrojó volúmenes récord tras superar sequías severas del ciclo anterior. El ingreso de divisas de los exportadores de granos y aceites impulsa el PIB y estabiliza la cotización del guaraní frente a la moneda norteamericana en las casas de cambio.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "El régimen de Maquila paraguayo registra expansión récord en manufactura liviana",
      e: "Fábricas de autopartes, plásticos y textiles exportan principalmente al mercado común de Brasil.",
      c: "El Consejo Nacional de Industrias Maquiladoras de Exportación (CNIME) reportó que las exportaciones bajo el régimen especial batieron récords. Paraguay atrae inversiones industriales por sus bajos costos de energía de Itaipú, impuestos simplificados al 1% y estabilidad laboral.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "DNIT de Paraguay unifica aduanas e impuestos internos para combatir la evasión",
      e: "La fusión institucional del fisco eleva la recaudación nacional sin modificar las tasas de IVA.",
      c: "La Dirección Nacional de Ingresos Tributarios (DNIT) ha comenzado el cruce electrónico de datos aduaneros y tributarios internos. La integración informática permite detectar subfacturaciones de importaciones de origen asiático y fiscalizar el pago real de los impuestos corporativos.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "El Salario Mínimo en Paraguay sube a 2,685,000 guaraníes tras ajuste por inflación",
      e: "El Consejo Nacional de Salarios Mínimos (Conasam) actualizó la remuneración base legal vigente.",
      c: "El Ejecutivo promulgó el decreto de incremento del salario mínimo para trabajadores del sector privado. El ajuste se realizó conforme a la variación del Índice de Precios al Consumidor (IPC) acumulado de los últimos doce meses determinado por el Banco Central del Paraguay.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "El auge del mercado inmobiliario en Asunción atrae capitales de inversionistas regionales",
      e: "La baja tasa de inflación y la estabilidad del guaraní incentivan la compra de departamentos en pozo.",
      c: "Constructores locales y de la región destacan el boom inmobiliario en barrios residenciales de Asunción. La seguridad jurídica, el IRP del 8% y las ventajas fiscales atraen a inversores de Argentina y Brasil que buscan rentas en moneda estable y libre movimiento de capital.",
      cat: "Economía",
      img: "1560518883-ce09059eeffa"
    },
    {
      t: "La carne vacuna paraguaya obtiene habilitación oficial para el mercado de Estados Unidos",
      e: "Las primeras exportaciones de cortes cárnicos de alta calidad inician los envíos a puertos norteamericanos.",
      c: "El Senacsa y la Cancillería celebraron la apertura oficial del mercado norteamericano para la carne paraguaya tras años de auditorías de inocuidad. La habilitación eleva el estatus sanitario del hato ganadero y permite ingresar a nuevos destinos internacionales premium.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "Paraguay aprueba el visado especial para Nómadas Digitales con ventajas tributarias",
      e: "La medida exime de IRP a profesionales de tecnología extranjeros que residan temporalmente.",
      c: "Con el fin de atraer desarrolladores informáticos, analistas financieros y emprendedores, la Dirección de Migraciones y la DNIT reglamentaron la residencia para nómadas digitales. Los beneficiarios podrán facturar al exterior sin pagar el impuesto de renta personal local.",
      cat: "Legislación",
      img: "1524758631624-e2822e304c36"
    },
    {
      t: "Construcción del Corredor Bioceánico vial potenciará la logística comercial de Paraguay",
      e: "La carretera que cruzará el Chaco paraguayo unirá comercialmente los océanos Atlántico y Pacífico.",
      c: "El Ministerio de Obras Públicas (MOPC) destaca que los tramos concluidos de la ruta bioceánica están atrayendo inversiones en logística en el Chaco. Paraguay busca posicionarse como el canal terrestre que acorte la distancia comercial de las exportaciones de granos de Brasil hacia puertos de Chile.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    }
  ],
  UY: [
    {
      t: "Uruguay impulsa acuerdos comerciales bilaterales fuera del bloque del Mercosur",
      e: "El gobierno uruguayo insiste en negociar un TLC con China a pesar del disenso de socios regionales.",
      c: "La cancillería de la República Oriental del Uruguay mantiene su postura de flexibilizar el Mercosur para poder firmar acuerdos arancelarios de manera bilateral. El objetivo principal es reducir las barreras de entrada para las exportaciones uruguayas de carne vacuna y lácteos a Pekín.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "El sector de tecnología y desarrollo de software de Uruguay lidera exportaciones no tradicionales",
      e: "El país se posiciona como el principal polo exportador de servicios tecnológicos per cápita de la región.",
      c: "La Cámara Uruguaya de Tecnologías de la Información (CUTI) reportó ventas récord al mercado de EE.UU. La exención de IRAE para la exportación de software original y las zonas francas tecnológicas de Montevideo siguen atrayendo empresas mundiales de primer orden.",
      cat: "Economía",
      img: "1498050108023-c5249f4df085"
    },
    {
      t: "Uruguay implementa histórica baja de impuestos IRPF e IASS para sueldos medios y pasividades",
      e: "La reforma del gobierno eleva el mínimo no imponible y aumenta los porcentajes de deducción autorizados.",
      c: "La Dirección General Impositiva (DGI) de Uruguay puso en marcha el beneficio fiscal que reduce la carga del Impuesto a la Renta de las Personas Físicas (IRPF) y del Impuesto de Asistencia a la Seguridad Social (IASS). La medida deja más dinero disponible en el bolsillo de los trabajadores.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "Inversión millonaria de planta de celulosa UPM 2 dinamiza la logística vial y ferroviaria",
      e: "El pleno funcionamiento del complejo fabril eleva las exportaciones de pasta de celulosa nacionales.",
      c: "La puesta en marcha de la segunda planta de celulosa de UPM en Paso de los Toros y el Ferrocarril Central han consolidado a la celulosa como el principal producto exportado de Uruguay, generando un fuerte encadenamiento logístico y transporte de carga hacia el puerto de Montevideo.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "El Banco Central del Uruguay baja la tasa de interés debido a inflación histórica de 3.8%",
      e: "El BCU reduce la tasa monetaria para aliviar el retraso cambiario que afecta a los exportadores.",
      c: "El Comité de Política Monetaria del Banco Central del Uruguay (BCU) resolvió continuar recortando la tasa de interés. La baja responde al ingreso de la inflación acumulada en el rango meta de estabilidad por primera vez en años, buscando suavizar el encarecimiento del costo país.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "Uruguay se consolida como pionero de inversión en Hidrógeno Verde en Sudamérica",
      e: "El gobierno promueve subsidios e incentivos de la Ley de Inversiones para megaproyectos energéticos.",
      c: "El Ministerio de Industria, Energía y Minería destaca la postulación de consorcios alemanes para construir plantas de hidrógeno verde en Paysandú. Uruguay aprovecha su matriz de generación eléctrica limpia (eólica y solar) para postularse como exportador de biocombustibles sintéticos.",
      cat: "Economía",
      img: "1506394133-3f69542a1701"
    },
    {
      t: "Temporada de turismo en Punta del Este registra altos ingresos de visitantes extrarregionales",
      e: "El aumento de vuelos de Brasil y EE.UU. compensa la menor afluencia de turistas de Argentina.",
      c: "El Ministerio de Turismo reportó que la afluencia de turistas brasileños y norteamericanos mitigó la pérdida de turistas argentinos provocada por la devaluación. Los operadores del balneario valoran las exenciones de IVA a la hotelería y alquileres como una herramienta clave.",
      cat: "Economía",
      img: "1502086223501-7ea6ecd79368"
    },
    {
      t: "El tipo de cambio del 'Dólar' débil en Uruguay preocupa al sector exportador e industrial",
      e: "La persistente caída de la cotización del dólar local encarece los costos operativos expresados en pesos.",
      c: "La Unión de Exportadores del Uruguay (UEU) reiteró sus críticas ante el atraso cambiario provocado por el ingreso continuo de divisas. Señalan que la depreciación del dólar encarece los salarios y costos de producción en comparación con otros países exportadores del Mercosur.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "El Salario Mínimo Nacional en Uruguay se incrementa a 22,180 pesos uruguayos mensuales",
      e: "El Consejo de Salarios aprueba el reajuste del sueldo mínimo general propuesto por el gobierno.",
      c: "El Poder Ejecutivo decretó la subida del salario mínimo general. El incremento se sitúa en consonancia con las pautas sugeridas en los consejos de salarios para preservar el poder de compra de la canasta básica e incidir en las bases de aportaciones obligatorias de la Caja de Jubilados.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "BCU reglamenta operaciones de Fintechs y plataformas de préstamos de dinero entre particulares",
      e: "El Banco Central busca fomentar el desarrollo financiero bajo estrictas normas de control de lavado.",
      c: "La Superintendencia de Servicios Financieros del BCU emitió la regulación para empresas Fintech que operan créditos directos y crowdfunding de inversión. Las nuevas normas brindan seguridad jurídica a los usuarios y facilitan el fondeo de pequeñas start-ups locales.",
      cat: "Legislación",
      img: "1454165804606-c3d57bc86b40"
    }
  ],
  GT: [
    {
      t: "Guatemala registra un récord histórico en el ingreso de Remesas Familiares de migrantes",
      e: "El envío de remesas roza el 20% del PIB, sosteniendo el consumo básico y la construcción residencial.",
      c: "El Banco de Guatemala (Banguat) reportó cifras sin precedentes en la recepción de divisas de guatemaltecos residentes en Estados Unidos. El ingreso masivo de dólares compensa el déficit comercial de importaciones y financia la construcción de viviendas en el área rural del país.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "BANGUAT mantiene tasa de interés líder para mitigar los choques de precios importados",
      e: "El Banco de Guatemala prioriza la estabilidad de la moneda quetzal frente a presiones globales.",
      c: "La Junta Monetaria del Banco de Guatemala acordó mantener en niveles estables la tasa de interés líder de política monetaria. La autoridad busca contener el encarecimiento de insumos importados como fertilizantes y combustibles que impactan en los precios internos de alimentos.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "El SAT de Guatemala incrementa la recaudación tributaria con la factura electrónica FEL",
      e: "La obligatoriedad de la factura digital reduce la evasión del IVA en comercios del sector formal.",
      c: "La Superintendencia de Administración Tributaria (SAT) ha completado la incorporación de pequeños contribuyentes al sistema de Factura Electrónica en Línea (FEL). La digitalización facilita el control fiscal de comercios informales y eleva la recaudación de IVA e ISR corporativo.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "Guatemala atrae inversiones de Nearshoring para maquila textil en zonas francas",
      e: "La cercanía de puertos guatemaltecos a los EE.UU. incentiva la llegada de capitales asiáticos.",
      c: "El Ministerio de Economía destaca la apertura de parques industriales dedicados a la confección de prendas bajo el amparo de la Ley de Zonas Francas. Las ventajas de costos de flete marítimo y los incentivos fiscales posicionan a Guatemala como un competidor competitivo en la región.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "Ajuste al Salario Mínimo por Región entra en vigor en toda la República de Guatemala",
      e: "El gobierno aplica salarios diferenciados para el Departamento de Guatemala y el interior del país.",
      c: "El salario mínimo se aplica ahora según la división del mercado laboral en la Región 1 (Distrito Central) y la Región 2 (provincias). La fórmula de ajuste considera el costo diferenciado de la canasta básica familiar alimentaria para incentivar el empleo en el área rural.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "Exportaciones de café y cardamomo guatemalteco gozan de excelente demanda internacional",
      e: "Los cafés finos producidos en regiones altas y las ventas de cardamomo al Golfo Pérsico marcan récords.",
      c: "La Asociación Nacional del Café (Anacafé) reporta precios estables para las variedades de exportación de café de especialidad. Asimismo, los envíos de cardamomo a los países árabes mantienen a Guatemala como el principal proveedor mundial del grano aromático.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "El turismo en Antigua Guatemala y Tikal impulsa la reactivación de vuelos y hoteles",
      e: "El ingreso de turistas extranjeros reactiva los empleos en el sector de servicios y transportes.",
      c: "El Instituto Guatemalteco de Turismo (Inguat) informó una ocupación hotelera del 80% durante la temporada de festividades. La promoción de las ruinas mayas y de ciudades coloniales atrae visitantes de EE.UU. y Europa, beneficiando a guías y artesanos locales.",
      cat: "Economía",
      img: "1502086223501-7ea6ecd79368"
    },
    {
      t: "Guatemala mantiene baja relación de deuda pública respecto al PIB del continente",
      e: "La disciplina macroeconómica del Ministerio de Finanzas resguarda la estabilidad del tipo de cambio.",
      c: "Las agencias calificadoras de riesgo destacan la prudencia fiscal del gobierno guatemalteco, que mantiene un nivel de endeudamiento sumamente bajo en comparación con otros países en desarrollo. Esto da margen de estabilidad al quetzal frente al dólar estadounidense.",
      cat: "Economía",
      img: "1454165804606-c3d57bc86b40"
    },
    {
      t: "El impacto del contrabando en la frontera mexicana afecta las ventas de industrias de alimentos",
      e: "La devaluación del peso mexicano favorece la entrada informal de abarrotes a comercios guatemaltecos.",
      c: "La Cámara de Industria de Guatemala (CIG) denunció pérdidas millonarias en empresas nacionales de bebidas y alimentos debido a la internación ilegal de mercancías en la frontera occidental. Solicitan al SAT reforzar los operativos de control de aduanas viales.",
      cat: "Economía",
      img: "1506394133-3f69542a1701"
    },
    {
      t: "SAT simplifica la incorporación tributaria para pequeños agricultores independientes",
      e: "El régimen simplificado agropecuario aplica una retención fija del 5% para formalizar la producción.",
      c: "La SAT ha iniciado la aplicación de un sistema tributario de baja carga fiscal y formalización ágil para productores agrícolas de pequeña escala. La medida busca incentivar la venta formal a grandes distribuidores y cadenas de supermercados nacionales.",
      cat: "Fiscalidad",
      img: "1554224155-8d04cb21cd6c"
    }
  ],
  HN: [
    {
      t: "Honduras deroga de forma definitiva las Zonas de Empleo y Desarrollo (ZEDE)",
      e: "El Congreso de la República ratifica el fin del régimen especial que otorgaba autonomía fiscal.",
      c: "La asamblea nacional ratificó la abolición de las Zonas de Empleo y Desarrollo (ZEDE) en Honduras. La medida revoca los beneficios arancelarios y tributarios autónomos, integrando de nuevo estos territorios a la soberanía fiscal y administrativa nacional administrada por el SAR.",
      cat: "Legislación",
      img: "1515378791036-0648a3ef77b2"
    },
    {
      t: "Las Remesas familiares en Honduras se consolidan como pilar indispensable del PIB",
      e: "Los dólares enviados por hondureños desde el exterior financian el gasto de consumo de la mitad del país.",
      c: "El Banco Central de Honduras (BCH) reportó un flujo sostenido de remesas enviadas de forma mensual. Las divisas representan el principal generador de moneda extranjera para el país y cubren la compra de alimentos, alquileres y tratamientos de salud en la mayoría de los hogares.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "BCH reactiva el mecanismo de subasta de divisas para controlar la asignación de dólares",
      e: "La medida busca priorizar el acceso al mercado de importación de combustibles y medicinas básicas.",
      c: "El Banco Central de Honduras (BCH) ha retornado al sistema de subasta de divisas oficiales. La estrategia responde a la demanda creciente de dólares para importación y busca evitar distorsiones en la cotización de la lempira oficial en el mercado financiero nacional.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "Honduras debate propuesta de Ley de Justicia Tributaria para revisar las exenciones",
      e: "El proyecto de ley del Ejecutivo busca regular los incentivos fiscales y auditar a grandes consorcios.",
      c: "El debate parlamentario sobre la Ley de Justicia Tributaria sigue generando debate. La iniciativa del SAR propone eliminar regímenes de exoneración fiscal vigentes por considerarlos obsoletos y auditar de forma estricta las declaraciones de rentas de los grandes grupos empresariales.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "Honduras incrementa el salario mínimo general tras concertación tripartita de nóminas",
      e: "El acuerdo entre gremios patronales y obreros establece aumentos escalonados según el sector industrial.",
      c: "La mesa tripartita acordó los nuevos parámetros de salario mínimo. La escala varía en función del tamaño de planilla de las empresas, aplicando incrementos mayores en manufacturas y menor porcentaje en agricultura de subsistencia del interior.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "El sector maquilador hondureño enfrenta retos por menor demanda textil desde EE.UU.",
      e: "La desaceleración de órdenes de compra en el mercado norteamericano obliga a cierres temporales.",
      c: "La Asociación Hondureña de Maquiladores (AHM) reporta recortes de empleo en plantas textiles de la zona norte debido a la acumulación de inventarios en tiendas estadounidenses. El sector pide facilidades en el pago del impuesto al activo neto para evitar suspensiones.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "La producción y exportación de Café hondureño cae por sequías extremas y escasez de cosechadores",
      e: "El Ihcafé reporta mermas en los despachos a Europa a pesar de las cotizaciones estables en la bolsa.",
      c: "El Instituto Hondureño del Café (Ihcafé) advierte pérdidas en la zafra de granos arábigos por problemas climáticos en plantaciones del occidente. La falta de mano de obra para la recolección ha obligado a recurrir a recolectores temporales centroamericanos.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "El gobierno de Honduras inyecta capital millonario a la estatal de energía ENEE",
      e: "La transferencia presupuestaria busca pagar a generadores privados y reducir pérdidas técnicas.",
      c: "El Ministerio de Finanzas (Sefin) autorizó fondos extraordinarios para sanear las cuentas de la Empresa Nacional de Energía Eléctrica (ENEE). Los recursos se destinarán a pagar deudas con centrales eléctricas privadas y a modernizar las líneas de transmisión nacional.",
      cat: "Economía",
      img: "1506394133-3f69542a1701"
    },
    {
      t: "Honduras aprueba fideicomisos de inversión pública para reconstrucción de carreteras",
      e: "El programa vial prioriza los caminos de salida de productos de exportación agropecuaria.",
      c: "El gobierno hondureño autorizó el plan nacional de infraestructura vial. La inversión se focalizará en reparar las rutas terrestres que conectan los centros de producción agrícola con Puerto Cortés, facilitando el transporte de contenedores de exportación.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "El SAR de Honduras moderniza el portal de tributos y simplifica el pago del ISR",
      e: "El nuevo sistema 'Declarando en línea' reduce a pocos minutos la declaración de renta personal.",
      c: "El Servicio de Administración de Rentas (SAR) implementó la digitalización de trámites fiscales. Los contribuyentes individuales podrán realizar el pago de sus obligaciones anuales y calcular retenciones mensuales a través de la plataforma web sin recurrir a contadores externos.",
      cat: "Fiscalidad",
      img: "1554224155-8d04cb21cd6c"
    }
  ],
  SV: [
    {
      t: "El Salvador incrementa el flujo de inversión turística extranjera gracias a Surf City",
      e: "La mejora en la seguridad pública atrae cadenas hoteleras internacionales a la costa del país.",
      c: "El Ministerio de Turismo reportó un crecimiento sin precedentes en la llegada de visitantes extranjeros. La marca gubernamental 'Surf City' ha captado el interés de inversionistas para la construcción de hoteles boutique, complejos de ocio e infraestructura en playas de La Libertad.",
      cat: "Economía",
      img: "1502086223501-7ea6ecd79368"
    },
    {
      t: "El Salvador aprueba reducción del IVA al 10% en alimentos de la canasta básica",
      e: "La Asamblea Legislativa reduce temporalmente la tasa impositiva general para mitigar la inflación.",
      c: "El Congreso de El Salvador sancionó el decreto que reduce del 13% al 10% el cobro del IVA a granos básicos, aceites, lácteos y carnes. La rebaja fiscal busca abaratar el costo de la canasta alimentaria para el presupuesto mensual de las familias salvadoreñas.",
      cat: "Fiscalidad",
      img: "1579621970563-ebec7560ff3e"
    },
    {
      t: "El uso del Bitcoin en El Salvador se concentra en transacciones del sector turismo",
      e: "El monedero gubernamental Chivo registra flujos estables en zonas hoteleras y transacciones de remesas.",
      c: "A pesar de la volatilidad del mercado de criptoactivos, el Bitcoin sigue utilizándose de forma legal en comercios habilitados del país. Su mayor adopción se registra en las zonas costeras turísticas y como canal digital complementario para el envío de remesas sin comisiones.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "El Salvador reestructura su deuda pública interna en canje voluntario con bancos locales",
      e: "El Ministerio de Hacienda extiende los plazos de vencimiento bajando el riesgo de impago soberano.",
      c: "El gobierno de El Salvador cerró con éxito un acuerdo voluntario de canje de deuda de corto plazo con el sistema financiero privado. La operación permite aliviar las necesidades de caja del fisco y mejora la calificación crediticia de cara a préstamos de organismos multilaterales.",
      cat: "Economía",
      img: "1454165804606-c3d57bc86b40"
    },
    {
      t: "El Salvador atrae inversiones de Nearshoring de empresas de manufactura electrónica",
      e: "La ampliación de naves logísticas en zonas francas de San Salvador e Ilopango impulsa el empleo.",
      c: "El Ministerio de Economía (Minec) anunció la llegada de firmas internacionales de componentes electrónicos que trasladarán su producción al país. Las empresas aprovechan la estabilidad jurídica y los incentivos arancelarios del régimen de zonas francas vigente.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "Hacienda de El Salvador aplica amnistía fiscal para recaudar impuestos adeudados",
      e: "Los contribuyentes morosos del ISR y del IVA podrán pagar su capital sin intereses ni recargos.",
      c: "La Dirección General de Impuestos Internos lanzó un plan temporal de regularización de deudas fiscales. La amnistía exime de multas judiciales a comercios y personas naturales que cancelen el principal de sus impuestos de renta e IVA atrasados en facilidades de pago.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "El Salario Mínimo en El Salvador se mantiene en 365 dólares mensuales en el sector servicios",
      e: "El Consejo Nacional del Salario Mínimo evalúa incrementos ante las presiones del costo de vida.",
      c: "El salario mínimo vigente de 365 dólares mensuales para comercios y servicios sigue bajo análisis. Gremios de trabajadores solicitan una revisión para elevar la remuneración base y compensar el incremento de tarifas eléctricas y combustibles experimentados en el año.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "Las Remesas familiares enviadas por canales digitales aumentan su participación en El Salvador",
      e: "El envío de dinero mediante transferencias móviles y carteras electrónicas reduce costos a los hogares.",
      c: "El Banco Central de Reserva (BCR) reportó que los envíos de divisas desde EE.UU. a través de aplicaciones digitales y criptoactivos ganan terreno. El canal reduce los costos de comisiones del intermediario tradicional y permite a los beneficiarios disponer del dinero al instante.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "El Salvador aprueba financiamiento del BCIE para la fase 2 del Tren del Pacífico",
      e: "La megaobra ferroviaria logística unirá las zonas portuarias del país potenciando el comercio.",
      c: "La Asamblea Legislativa aprobó el préstamo de inversión para el proyecto del Tren del Pacífico. El plan de infraestructura de transporte busca interconectar el Puerto de Acajutla con San Salvador, reduciendo los tiempos de fletes terrestres de mercancías de importación.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "Comercios en El Salvador integran sistemas de pago sin contacto NFC para agilizar transacciones",
      e: "La digitalización del comercio minorista eleva la inclusión financiera de la población.",
      c: "Las principales redes de pasarelas de pago del país reportan una adopción veloz de cobro mediante tecnología de proximidad en teléfonos y tarjetas de débito. La digitalización simplifica la fiscalización del cobro de IVA por el Ministerio de Hacienda y agiliza las compras cotidianas.",
      cat: "Economía",
      img: "1460925895917-afdab827c52f"
    }
  ],
  NI: [
    {
      t: "Nicaragua incrementa las exportaciones de oro en bruto a mercados internacionales",
      e: "El mineral refinado se consolida como el principal generador de divisas por encima del café.",
      c: "El Ministerio de Energía y Minas informó que los envíos de oro de concesiones de minería en el Caribe norte alcanzaron máximos históricos. Las ventas del metal precioso benefician la recaudación fiscal de aduanas y sostienen el flujo de divisas oficiales del Banco Central.",
      cat: "Economía",
      img: "1579621970563-ebec7560ff3e"
    },
    {
      t: "Nicaragua y China inician la aplicación de su Tratado de Libre Comercio (TLC)",
      e: "Las exportaciones de carne, azúcar y mariscos nicaragüenses entran con cero arancel a Pekín.",
      c: "El TLC bilateral entre Nicaragua y la República Popular China ha entrado en vigor. Las empresas agroindustriales locales podrán exportar azúcar, cuero, textiles y camarones de forma directa sin barreras arancelarias, diversificando la cartera comercial del país en Asia.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "El flujo de Remesas en Nicaragua crece por el aumento del flujo migratorio",
      e: "Los dólares recibidos por familias nicaragüenses impulsan el comercio y la economía del hogar.",
      c: "El Banco Central de Nicaragua (BCN) reportó que las remesas familiares mantuvieron incrementos porcentuales mensuales notables. El dinero ingresado desde los Estados Unidos financia directamente el consumo familiar minorista y amortigua los efectos de la inflación en alimentos.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "El INSS de Nicaragua ajusta la cotización obligatoria obrera al 6.75% mensual",
      e: "La resolución del seguro social aumenta el descuento del sueldo para sostener los fondos sanitarios.",
      c: "El Instituto Nicaragüense de Seguridad Social (INSS) aumentó el porcentaje de aporte obrero y patronal obligatorio. El recargo en la seguridad social se destinará a cubrir las deficiencias de los fondos de salud y a financiar la extensión del período de licencias por maternidad.",
      cat: "Salarios",
      img: "1506394133-3f69542a1701"
    },
    {
      t: "La producción de Café de especialidad en Nicaragua lidera la generación de empleo agrario",
      e: "Las variedades de café fino de Matagalpa y Jinotega conquistan los mercados de EE.UU. y Japón.",
      c: "Las cooperativas cafetaleras del norte de Nicaragua reportan rendimientos positivos en la zafra de granos lavados. Las cotizaciones favorables en el mercado externo de cafés especiales mitigan la subida de los fertilizantes y sostienen la creación de empleos en la cosecha.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "DGI de Nicaragua endurece la fiscalización sobre el Impuesto sobre la Renta corporativo",
      e: "La Dirección General de Impuestos audita de forma estricta las deducciones de los comercios.",
      c: "La DGI del país inició inspecciones en comercios y distribuidoras para verificar el cobro correcto de los anticipos de IR e IVA. La medida busca evitar la subdeclaración de ingresos de empresas medianas y garantizar la recaudación presupuestaria programada por el gobierno.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "El Salario Mínimo en Nicaragua sube tras consensuar reajuste anual por inflación",
      e: "La comisión nacional del salario mínimo aplica incrementos variables según el sector laboral.",
      c: "El Ministerio del Trabajo (Mitrab) oficializó la tabla de salarios mínimos acordada en consenso. Los mayores ajustes porcentuales se aplicaron en la industria de la construcción y en el sector financiero, mientras que el sector agropecuario tuvo un porcentaje de aumento menor.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "El desarrollo de la red de carreteras nacionales facilita el transporte de agroexportaciones",
      e: "Las inversiones públicas del MTI conectan las zonas de producción de granos con Puerto Corinto.",
      c: "El Ministerio de Transporte e Infraestructura (MTI) concluyó pavimentaciones en corredores agropecuarios clave. La mejora de las carreteras disminuye los tiempos y costos de fletes de los camiones de carga de ganado, café y azúcar hacia el principal puerto de salida en el Pacífico.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "El turismo en San Juan del Sur y las playas de Rivas reactiva la hotelería nicaragüense",
      e: "La llegada de surfistas y cruceros internacionales beneficia a minoristas y restaurantes locales.",
      c: "La delegación de Intur de Rivas reportó niveles de ocupación del 70% en hoteles de playa. Las inversiones en hostelería de naturaleza atraen visitantes de la región y reactivan los empleos informales temporales de guías turísticos y transportistas locales.",
      cat: "Economía",
      img: "1502086223501-7ea6ecd79368"
    },
    {
      t: "Las microfinanzas en Nicaragua amplían créditos productivos para pequeños agricultores",
      e: "Las financieras de desarrollo ofrecen facilidades de financiamiento para el ciclo de siembra.",
      c: "Asomif informó un incremento en la colocación de microcréditos rurales. Las cooperativas de ahorro facilitan capital de trabajo a pequeños productores agrícolas para la compra de semillas e insumos, promoviendo la seguridad alimentaria en el interior del país.",
      cat: "Economía",
      img: "1454165804606-c3d57bc86b40"
    }
  ],
  CR: [
    {
      t: "Costa Rica atrae millonarias inversiones de Intel para fabricar microchips de IA",
      e: "La expansión del centro tecnológico de diseño de semiconductores de Intel eleva el empleo calificado.",
      c: "La multinacional tecnológica Intel anunció una inversión millonaria para ampliar su planta de pruebas y ensamblaje de microchips en Costa Rica. El proyecto posiciona al país como un eslabón clave en la cadena mundial de componentes informáticos de inteligencia artificial.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "La apreciación del Colón costarricense preocupa a los sectores exportador y turístico",
      e: "El tipo de cambio fuerte del colón frente al dólar encarece las tarifas de hoteles y reduce ingresos.",
      c: "La cámara de exportadores (Cadexco) alertó sobre el impacto negativo del colón fuerte. Señalan que la caída de la cotización del dólar en el país reduce la rentabilidad de las ventas agrícolas de piña y banano y encarece las tarifas turísticas comparadas con otros destinos del Caribe.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "Costa Rica avanza en reformas fiscales sugeridas por la OCDE para controlar la deuda",
      e: "La regla fiscal aprobada estabiliza las finanzas públicas reduciendo los costes del servicio de deuda.",
      c: "El Ministerio de Hacienda destacó los resultados de la aplicación de la regla fiscal. Las reformas exigidas para el ingreso a la OCDE han permitido al país consolidar un superávit fiscal primario sostenido, reduciendo el riesgo país y mejorando la calificación crediticia soberana.",
      cat: "Fiscalidad",
      img: "1454165804606-c3d57bc86b40"
    },
    {
      t: "Exportaciones de dispositivos médicos en Costa Rica lideran la balanza comercial",
      e: "Los envíos de insumos de cirugía y equipos médicos desde zonas francas superan los récords anuales.",
      c: "La promotora de comercio exterior (Procomer) reportó que los dispositivos médicos se consolidan como el principal producto de exportación de Costa Rica. La alta especialización de las zonas francas tecnológicas de Cartago y Alajuela sigue atrayendo multinacionales de la salud.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "El Banco Central de Costa Rica (BCCR) reduce tasa monetaria ante baja inflación de 0.5%",
      e: "El emisor costarricense busca aliviar los créditos de consumo corporativos de los sectores privados.",
      c: "La junta directiva del Banco Central de Costa Rica resolvió continuar recortando la Tasa de Política Monetaria (TPM). Con la inflación anualizada por debajo del límite mínimo de la meta oficial, el regulador financiero busca abaratar los créditos comerciales e incentivar la inversión.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "Costa Rica debate reforma de 'Renta Global' para simplificar el cobro del impuesto de renta",
      e: "El proyecto de ley de Hacienda busca unificar todos los ingresos personales bajo una misma tasa impositiva.",
      c: "El debate sobre la unificación de los impuestos a la renta (Renta Global) sigue en la corriente legislativa. La propuesta del Ministerio de Hacienda unificaría salarios, alquileres y rentas financieras bajo una escala impositiva progresiva, eliminando la dispersión del sistema actual.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "La tasa de desempleo en Costa Rica desciende a niveles históricos de un solo dígito",
      e: "El Instituto Nacional de Estadística (INEC) reporta que la desocupación nacional bajó al 7.8%.",
      c: "El INEC de Costa Rica reveló un balance positivo del empleo registrado formal. Los sectores de servicios tecnológicos corporativos y la hotelería impulsaron la reducción del desempleo, aunque sigue habiendo disparidades de incorporación laboral en las provincias costeras.",
      cat: "Economía",
      img: "1515378791036-0648a3ef77b2"
    },
    {
      t: "El auge del turismo ecológico y los parques nacionales consolida a Costa Rica en el mundo",
      e: "La marca 'Esencial Costa Rica' atrae visitantes internacionales que pagan compensación por huella de carbono.",
      c: "El ICT reportó niveles óptimos de ingreso de viajeros por los aeropuertos de San José y Liberia. Los proyectos de ecoturismo y hospedajes con certificación verde siguen captando el interés de turistas premium de altos ingresos procedentes de Estados Unidos y Europa.",
      cat: "Economía",
      img: "1502086223501-7ea6ecd79368"
    },
    {
      t: "El impacto de la cotización obrera a la CCSS de Costa Rica en las planillas mensuales",
      e: "El descuento de seguridad social obligatorio de 10.17% reduce levemente el sueldo líquido neto.",
      c: "Los aportes al seguro de enfermedad, invalidez y vejez de la Caja Costarricense de Seguro Social (CCSS) y el Banco Popular reducen el sueldo de los trabajadores. El sistema de cotización busca garantizar la universalidad de la cobertura del sistema público de salud del país.",
      cat: "Salarios",
      img: "1506394133-3f69542a1701"
    },
    {
      t: "Costa Rica promueve incentivos de la Ley de Atracción de Inversionistas y Rentistas extranjeros",
      e: "La ley reduce a 150,000 dólares el monto de inversión mínima para optar a la residencia y exenciones fiscales.",
      c: "El Ministerio de Relaciones Exteriores y la Dirección de Migraciones reglamentaron las ventajas para retirados e inversores. Quienes se acojan a la ley gozarán de exenciones de aranceles de importación de menaje de casa y vehículos, dinamizando el mercado inmobiliario costero.",
      cat: "Legislación",
      img: "1524758631624-e2822e304c36"
    }
  ],
  PA: [
    {
      t: "El Canal de Panamá restringe tránsitos diarios de barcos debido a sequía prolongada",
      e: "La escasez de agua por el fenómeno de El Niño genera demoras en el comercio marítimo global.",
      c: "La Autoridad del Canal de Panamá (ACP) ha tenido que recortar el número de tránsitos diarios autorizados en las esclusas Neopanamax por el bajo nivel de agua en el lago Gatún. La medida impacta los ingresos de peajes de la vía interoceánica y obliga a barcos a esperar o desviar rutas.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "Cierre de mina de cobre en Panamá impacta de forma negativa las proyecciones del PIB",
      e: "El cese de operaciones del yacimiento reduce las exportaciones de metal de la economía panameña.",
      c: "El cierre definitivo de la explotación de la mina Cobre Panamá tras fallos de la Corte Suprema ha mermado las exportaciones y reducido el crecimiento del PIB estimado. El Ministerio de Economía busca medidas para cubrir la brecha de ingresos fiscales de regalías mineras del presupuesto.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "Panamá sale oficialmente de la lista gris del Grupo de Acción Financiera Internacional (GAFI)",
      e: "El organismo de control financiero internacional reconoce las reformas de Panamá contra el lavado de dinero.",
      c: "El GAFI retiró a Panamá de su lista de países bajo monitoreo intensivo tras completar reformas regulatorias en el sector bancario y societario. La decisión mejora la reputación del centro bancario internacional de Panamá y facilita la llegada de inversión extranjera directa.",
      cat: "Legislación",
      img: "1454165804606-c3d57bc86b40"
    },
    {
      t: "La Zona Libre de Colón en Panamá registra un repunte comercial en el área logística",
      e: "Las ventas y reexportaciones de tecnología y moda hacia Sudamérica impulsan la actividad de la zona franca.",
      c: "La administración de la Zona Libre de Colón (ZLC) reportó un incremento en el movimiento comercial electrónico de contenedores. La infraestructura de reexportación y puertos del Caribe consolidan al área como el principal centro logístico de distribución comercial del continente.",
      cat: "Economía",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "La construcción de la Línea 3 del Metro de Panamá impulsa el empleo y la infraestructura",
      e: "El proyecto de transporte masivo conectará Ciudad de Panamá con Panamá Oeste a través del canal.",
      c: "Las obras de la Línea 3 del Metro y la perforación del túnel por debajo del canal marítimo avanzan conforme a los plazos previstos. El megaproyecto genera empleo para miles de obreros locales y dinamiza el sector constructor de insumos de cemento y acero.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "DGI de Panamá fiscaliza la facturación digital obligatoria en el comercio minorista",
      e: "El fisco panameño implementa el uso de facturas electrónicas para reducir la evasión del ITBMS.",
      c: "La Dirección General de Ingresos (DGI) ha iniciado auditorías en comercios minoristas y consultorios profesionales para verificar la emisión de la Factura Electrónica. La medida busca digitalizar la declaración mensual y elevar el recaudo del impuesto del ITBMS (7% general).",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "El Salario Mínimo en Panamá se establece en 536 dólares en promedio para el sector privado",
      e: "El Ministerio de Trabajo fija los nuevos sueldos básicos por actividad económica y región del país.",
      c: "El Mitradel oficializó el ajuste de la tabla del salario mínimo para todo el territorio nacional. Los mayores incrementos correspondieron al sector logístico, aeroportuario y bancario, mientras que el salario agrícola se ajustó de acuerdo a los precios locales de la canasta.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "La estabilidad monetaria de Panamá se apoya en el dólar como moneda de curso legal",
      e: "A diferencia de la región, la economía panameña mantiene una de las tasas de inflación más bajas.",
      c: "Analistas destacan que la dolarización de facto y la integración del centro bancario blindan a Panamá de los efectos de devaluación cambiaria. La estabilidad de precios en el dólar estadounidense facilita la planificación financiera a largo plazo de las multinacionales de servicios.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "Panamá busca captar inversiones tecnológicas con la nueva Ley de Sedes de Empresas (SEM)",
      e: "La ley brinda exoneración de impuesto sobre la renta y facilidades migratorias a personal ejecutivo.",
      c: "El régimen especial SEM sigue sumando multinacionales que instalan sus oficinas corporativas regionales en Ciudad de Panamá. Las exenciones impositivas y las facilidades para la radicación de ejecutivos extranjeros dinamizan el sector inmobiliario comercial corporativo.",
      cat: "Legislación",
      img: "1560518883-ce09059eeffa"
    },
    {
      t: "Incertidumbre fiscal por calificación crediticia de Panamá eleva las tasas de interés de bonos",
      e: "El aumento del déficit del presupuesto soberano eleva los costos financieros de la deuda nacional.",
      c: "Las agencias calificadoras Fitch y Moody's advierten sobre los riesgos de solvencia fiscal de Panamá tras el cese de ingresos mineros. La situación encarece los rendimientos que el gobierno debe ofrecer al emitir bonos soberanos para cubrir el presupuesto general.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    }
  ],
  DO: [
    {
      t: "República Dominicana supera récord histórico y recibe más de 10 millones de turistas",
      e: "El Ministerio de Turismo celebra la cifra récord que genera ingresos por encima de los 10 mil millones de dólares.",
      c: "El Ministerio de Turismo (Mitur) de la República Dominicana anunció que el país superó la meta histórica de 10 millones de visitantes en un año. Los destinos de Punta Cana, Samaná y Puerto Plata registraron tasas de ocupación hotelera máximas, consolidando al turismo como el motor principal de divisas.",
      cat: "Economía",
      img: "1502086223501-7ea6ecd79368"
    },
    {
      t: "República Dominicana se consolida como líder del Nearshoring en dispositivos médicos",
      e: "Las zonas francas industriales de Santo Domingo y Santiago multiplican sus exportaciones a EE.UU.",
      c: "La Asociación de Zonas Francas (Adozona) reportó que la exportación de dispositivos médicos, farmacéuticos y componentes de precisión electrónica alcanzaron máximos. La estabilidad política del país y las exenciones fiscales han captado inversiones de relocalización de empresas norteamericanas.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "El Banco Central dominicano mantiene estable su tasa monetaria ante inflación controlada",
      e: "El BCRD sitúa la tasa de interés interbancaria en el rango del programa de estabilidad macroeconómica.",
      c: "La junta monetaria del Banco Central de la República Dominicana (BCRD) decidió conservar su tasa de interés líder. La inflación anualizada se mantiene dentro del rango meta de estabilidad del emisor, asegurando la estabilidad del peso dominicano frente al dólar en la banca comercial.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "El flujo de Remesas familiares de dominicanos en EE.UU. mantiene estable el consumo",
      e: "Las transferencias monetarias de la diáspora sostienen la economía de millones de familias.",
      c: "El BCRD reportó un balance positivo en las remesas recibidas de la diáspora en el exterior, principalmente de Nueva York e inspectores europeos. Estos ingresos líquidos financian las compras del comercio minorista y sostienen el sector constructor residencial del país.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "Inician megaproyecto de desarrollo de ecoturismo e infraestructura en Pedernales",
      e: "La inversión estatal y privada en Cabo Rojo busca crear un nuevo polo de desarrollo turístico en el sur.",
      c: "La Dirección General de Alianzas Público Privadas dio inicio a la edificación de las primeras redes hoteleras en el proyecto turístico de Cabo Rojo, Pedernales. El plan de infraestructura incluye un puerto de cruceros y un aeropuerto regional para incentivar la economía en el suroeste.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "DGII de la República Dominicana implementa la Facturación Electrónica obligatoria",
      e: "La Dirección de Impuestos Internos digitaliza el cobro de ITBIS a grandes contribuyentes.",
      c: "La DGII avanza en la ejecución de la Ley 512-23 de Factura Electrónica. Las grandes empresas comerciales e industriales del país ya deben emitir comprobantes fiscales digitales de forma directa para reducir la evasión de impuestos del ITBIS (18% general) y agilizar las auditorías.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "El Salario Mínimo del sector privado en República Dominicana sube a 29,668 pesos",
      e: "El Comité Nacional de Salarios aplica el incremento del sueldo básico legal para grandes empresas.",
      c: "El Ministerio de Trabajo dominicano promulgó los nuevos cuadros salariales acordados en consenso. El aumento general busca paliar la inflación alimentaria de la canasta básica de consumo y sirve como base de retención de aportaciones a la seguridad social (TSS).",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "DGII actualiza escala de exención del Impuesto Sobre la Renta (ISR) para asalariados",
      e: "La base exenta del ISR para personas físicas se establece en 416,220 pesos anuales.",
      c: "La DGII ajustó las escalas anuales progresivas aplicables a las retenciones del impuesto sobre la renta de personas individuales. Los empleados cuyos ingresos brutos anuales se sitúen por debajo del umbral de exención no sufrirán deducciones de ISR por parte del empleador.",
      cat: "Fiscalidad",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "Las exportaciones de Oro de la mina de Pueblo Viejo lideran la balanza comercial minera",
      e: "La explotación del yacimiento aurífero de Barrick Gold genera regalías claves para el Estado.",
      c: "La venta de barras de oro refinado extraídas de la cuenca de Pueblo Viejo, Cotuí, se mantiene como el principal producto de exportación nacional. El ingreso fiscal por impuestos y regalías mineras aporta liquidez al presupuesto del gobierno para planes de obras públicas municipales.",
      cat: "Economía",
      img: "1579621970563-ebec7560ff3e"
    },
    {
      t: "Exportaciones agrícolas de Cacao orgánico y Tabaco dominicano alcanzan ventas récord",
      e: "Los cigarros premium hechos a mano y el cacao fino conquistan los mercados de lujo de Europa y EE.UU.",
      c: "El Centro de Exportación e Inversión (ProDominicana) reportó balances sobresalientes en la venta de cigarros terminados a mano y cacao en grano premium. El sector agropecuario del tabaco se consolida como un generador de empleo formal agrario clave en el valle del Cibao.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    }
  ],
  CU: [
    {
      t: "Cuba regula la tributación de las Micro, Pequeñas y Medianas Empresas (Mipymes) privadas",
      e: "La ONAT establece escalas progresivas del impuesto sobre ingresos y reduce exenciones iniciales.",
      c: "La Oficina Nacional de Administración Tributaria (ONAT) de la República de Cuba publicó las nuevas normativas fiscales para el sector privado no estatal (Mipymes). Las empresas deberán declarar sus ingresos mensuales e incorporar sistemas de contabilidad formal para el cobro del impuesto sobre ingresos personales.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "Cuba enfrenta devaluación monetaria y alta brecha en el tipo de cambio informal",
      e: "El peso cubano (CUP) registra depreciaciones bruscas frente al dólar en el mercado callejero.",
      c: "La unificación monetaria y las restricciones de acceso a dólares oficiales en la banca estatal (Cadeca) han disparado la cotización del dólar estadounidense y del euro en el mercado informal. La brecha cambiaria encarece los productos importados comercializados en el sector privado.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "El turismo en Cuba registra una lenta recuperación frente a otros destinos del Caribe",
      e: "La falta de conectividad aérea regular y de insumos logísticos limita la ocupación en Varadero.",
      c: "El Ministerio del Turismo (Mintur) reconoció desafíos para alcanzar los objetivos de afluencia de turistas extranjeros anuales. El sector hotelero estatal y las Mipymes de servicios piden facilidades de importación de insumos para elevar el estándar de los servicios de restauración.",
      cat: "Economía",
      img: "1502086223501-7ea6ecd79368"
    },
    {
      t: "La escasez de combustible e infraestructura eléctrica genera costos severos a la producción en Cuba",
      e: "Los apagones programados en zonas industriales paralizan las operaciones fabriles del país.",
      c: "El déficit de capacidad de generación de las centrales termoeléctricas estatales y los retrasos en los suministros de crudo importado provocan interrupciones recurrentes del servicio eléctrico. Las fábricas de tabaco, cemento y alimentos reportan mermas operativas por falta de energía.",
      cat: "Economía",
      img: "1506394133-3f69542a1701"
    },
    {
      t: "Cuba amplía la lista de actividades autorizadas para el Trabajo por Cuenta Propia (TCP)",
      e: "El Ministerio de Trabajo incorpora 50 nuevas categorías del sector digital y de servicios profesionales.",
      c: "El MTSS de Cuba flexibilizó el marco legal del cuentapropismo al autorizar actividades de programación de software, diseño gráfico y consultoría. La medida busca dinamizar el autoempleo de jóvenes graduados universitarios y canalizar servicios de tecnología al exterior.",
      cat: "Legislación",
      img: "1498050108023-c5249f4df085"
    },
    {
      t: "ONAT actualiza tabla progresiva del Impuesto sobre Ingresos Personales para el TCP",
      e: "Las tasas impositivas gravan con hasta un 40% las rentas de cuentapropistas con altos ingresos.",
      c: "La ONAT inició la fiscalización del pago del Impuesto sobre Ingresos Personales anual. La escala progresiva exime a quienes ganen menos de 84,000 CUP acumulados, aplicando tasas marginales que suben gradualmente hasta el 40% sobre los ingresos netos declarados en exceso.",
      cat: "Fiscalidad",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "Cuba promueve oportunidades de inversión extranjera en la Zona Especial del Mariel",
      e: "El parque logístico ofrece exención total de impuestos por diez años y facilidades de repatriación.",
      c: "La administración de la Zona Especial de Desarrollo Mariel (ZEDM) presentó su cartera de proyectos en logística farmacéutica, alimentaria y energía solar. Los inversionistas extranjeros gozarán de un régimen especial libre del pago de impuesto a las utilidades corporativas.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "Nuevas regulaciones a las remesas a Cuba buscan facilitar el envío de transferencias formales",
      e: "El uso de canales autorizados por el Banco Central busca eludir trabas del sistema bancario global.",
      c: "El Banco Central de Cuba reglamentó nuevos canales digitales para recibir transferencias de dinero de familiares en el exterior. Los fondos, canalizados mediante monederos de pago en moneda libremente convertible (MLC), buscan reactivar el desabastecido sector comercial estatal.",
      cat: "Economía",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "El Salario Mínimo en Cuba se mantiene en 2,100 pesos cubanos mensuales en el sector estatal",
      e: "El alto costo de los alimentos en el mercado informal devaluado presiona el poder adquisitivo del sueldo.",
      c: "La remuneración mínima legal estatal de 2,100 CUP mensuales sigue sin modificaciones a pesar del brote inflacionario del país. Los sindicatos señalan que los trabajadores dependen en gran parte de complementos en especie y de segundas actividades en el sector privado para subsistir.",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "Las reformas de la ley agraria en Cuba buscan incentivar la producción de viandas y hortalizas",
      e: "El gobierno autoriza la venta libre de excedentes agrícolas a campesinos tras cumplir cuota estatal.",
      c: "El Ministerio de la Agricultura flexibilizó las directivas de comercialización del acopio. Los pequeños agricultores y usufructuarios de tierras estatales podrán comercializar de forma directa en las ciudades los productos excedentes a precios de oferta, buscando paliar el desabastecimiento.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    }
  ],
  GQ: [
    {
      t: "Guinea Ecuatorial promueve estrategia de diversificación para mitigar la caída del Petróleo",
      e: "El gobierno de Malabo busca inversiones en pesca, agricultura y logística portuaria.",
      c: "El Ministerio de Planificación y Economía de Guinea Ecuatorial admitió la necesidad de reactivar sectores no tradicionales debido al declive geológico de los yacimientos petroleros maduros de la cuenca del golfo de Guinea. El plan incluye subvenciones a cooperativas pesqueras en Bata.",
      cat: "Economía",
      img: "1581091870625-219b1c031c2c"
    },
    {
      t: "Las exportaciones de Gas Natural Licuado (GNL) de Guinea Ecuatorial sostienen la balanza comercial",
      e: "El complejo industrial de Punta Europa procesa y exporta gas a mercados de la Unión Europea.",
      c: "La terminal de GNL de Punta Europa en la isla de Bioko reporta balances comerciales favorables por las ventas de gas licuado hacia el continente europeo. El flujo de ingresos del gas mitiga la caída de la producción de crudo de los campos petrolíferos de Alba y Ceiba.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "Guinea Ecuatorial e instituciones del CEMAC coordinan medidas monetarias regionales",
      e: "El Banco de los Estados de África Central prioriza la estabilidad cambiaria del franco CFA frente al euro.",
      c: "La delegación ecuatoguineana del BEAC ratificó las metas de encaje bancario de la unión monetaria centroafricana. La política del regulador regional busca resguardar las reservas comunes y defender la paridad fija del franco CFA respecto al euro para contener la inflación.",
      cat: "Economía",
      img: "1554224155-8d04cb21cd6c"
    },
    {
      t: "Dirección General de Impuestos de Guinea Ecuatorial actualiza los tramos del IPR",
      e: "La reforma del Impuesto sobre la Renta de las Personas Físicas eleva el mínimo exento anual.",
      c: "La Dirección General de Impuestos actualizó la escala del IPR. El tramo exento anual del impuesto sobre la renta se eleva a 600,000 francos CFA para proteger a los trabajadores del sector privado de menores ingresos del alza general de precios en los mercados locales.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "El Salario Mínimo en Guinea Ecuatorial se establece en 108,000 francos CFA mensuales",
      e: "El Ministerio de Trabajo oficializa la nueva tabla salarial mínima general aplicable a la nómina.",
      c: "La cartera de Trabajo y Seguridad Social oficializó el incremento del sueldo básico legal a 108,000 FCFA mensuales. Las empresas del sector comercial y de construcción deberán actualizar las planillas de cotizaciones obligatorias de los trabajadores al seguro social (INSESO).",
      cat: "Salarios",
      img: "1526304640581-d334cdbbf45e"
    },
    {
      t: "El puerto de Bata en Guinea Ecuatorial avanza en su fase final de ampliación logística",
      e: "Las nuevas terminales de contenedores mejoran la capacidad portuaria del territorio continental.",
      c: "Las obras de modernización en el puerto fluvial y marítimo de Bata buscan facilitar el atraque de grandes cargueros internacionales. La infraestructura busca convertir al puerto en una plataforma logística de transbordo comercial clave para los países vecinos de África Central.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "Guinea Ecuatorial implementa la facturación fiscal digital a grandes empresas comerciales",
      e: "El Ministerio de Hacienda busca modernizar el cobro del Impuesto sobre el Consumo de bienes.",
      c: "La Dirección General de Impuestos inició la obligatoriedad de comprobantes fiscales digitales para distribuidoras de alimentos y constructoras en Malabo. La medida tecnológica busca unificar la fiscalización del cobro de tasas del impuesto al consumo en todo el país.",
      cat: "Fiscalidad",
      img: "1460925895917-afdab827c52f"
    },
    {
      t: "El plan de revitalización de la producción de Cacao ecuatoguineano entrega incentivos a agricultores",
      e: "El Ministerio de Agricultura provee asistencia técnica a pequeños productores de la isla de Bioko.",
      c: "El programa estatal de apoyo agrario busca recuperar los niveles históricos de exportación del cacao de Guinea Ecuatorial. Se distribuyen insumos y plantas resistentes a plagas a agricultores tradicionales de la provincia de Bioko Sur para comercialización de alta calidad en Europa.",
      cat: "Economía",
      img: "1590283603385-17ffb3a7f29f"
    },
    {
      t: "La industria maderera de Guinea Ecuatorial enfrenta nuevas regulaciones ambientales de exportación",
      e: "El Ministerio de Bosques limita la venta de madera en rollo sin procesar para frenar la deforestación.",
      c: "La nueva directiva ambiental exige que la madera tropical extraída en el territorio continental sea aserrada y procesada localmente antes de embarcarse para exportación a Asia. La norma busca incentivar empleos en aserraderos locales y proteger la biomasa de bosques tropicales.",
      cat: "Legislación",
      img: "1506394133-3f69542a1701"
    },
    {
      t: "El sector bancario de Guinea Ecuatorial consolida liquidez bajo directivas del COBAC",
      e: "La comisión de supervisión bancaria regional fiscaliza la solidez de las entidades financieras locales.",
      c: "La COBAC concluyó las auditorías anuales del sistema de depósitos de los bancos comerciales del país. Las entidades financieras locales reportan niveles adecuados de capitalización y encaje, garantizando la solvencia de los depósitos comerciales de la banca privada de Malabo.",
      cat: "Economía",
      img: "1454165804606-c3d57bc86b40"
    }
  ]
};

// Generate final structured posts list
const generatePosts = (): Post[] => {
  const generated: Post[] = [];

  countries.forEach((country) => {
    const list = rawNews[country.code] || [];
    list.forEach((item, index) => {
      // Offset staggers: index 0 (0 mins ago), index 1 (15 mins ago), etc.
      const offsetMinutes = offsets[index] || 1440 * index;
      
      const dateObj = new Date();
      dateObj.setMinutes(dateObj.getMinutes() - offsetMinutes);
      
      const dateStr = dateObj.toISOString().split("T")[0];
      const publishTime = dateObj.getTime();

      generated.push({
        id: `${country.code}-${index + 1}`,
        title: item.t,
        excerpt: item.e,
        country: country.code,
        category: item.cat,
        date: dateStr,
        publishTime,
        readTime: Math.max(3, Math.min(6, Math.floor(item.c.length / 80))),
        imageUrl: `https://images.unsplash.com/photo-${item.img}?auto=format&fit=crop&w=600&q=80`,
        content: item.c
      });
    });
  });

  return generated;
};

export const posts: Post[] = generatePosts();
