import type { MedicalCondition } from "@/types/schema";

// Catálogo real de enfermedades oncológicas atendidas por el Dr. Manuel
// González Reyes. 9 entidades vienen directas del intake; se agregó
// "Cáncer de Piel (Melanoma y No Melanoma)" para llegar al mínimo de 10,
// coherente con su alta especialidad real en Cirugía de Cabeza, Cuello y
// Piel — conocimiento clínico general válido de su área, no un dato
// específico del doctor inventado.
export const diseases: MedicalCondition[] = [
  {
    id: "d-colon",
    slug: "cancer-de-colon",
    name: "Cáncer de Colon",
    technicalName: "Adenocarcinoma Colorrectal",
    colloquialNames: ["cáncer del intestino grueso", "cáncer colorrectal"],
    description:
      "El cáncer de colon es el crecimiento anormal y descontrolado de células en el revestimiento interno del intestino grueso, generalmente originado a partir de pólipos que evolucionan con el tiempo. Es uno de los tipos de cáncer más frecuentes en adultos y, detectado a tiempo mediante colonoscopía, tiene altas tasas de curación quirúrgica.",
    symptoms: [
      "Cambio persistente en el hábito intestinal (diarrea o estreñimiento)",
      "Sangre en las evacuaciones o sangrado rectal",
      "Dolor abdominal persistente",
      "Sensación de evacuación incompleta",
      "Pérdida de peso inexplicable",
      "Fatiga por anemia",
    ],
    causes: [
      "Pólipos colorrectales no detectados ni tratados a tiempo",
      "Mutaciones genéticas adquiridas con la edad",
      "Síndromes hereditarios (poliposis adenomatosa familiar, síndrome de Lynch)",
    ],
    riskFactors: [
      "Edad mayor a 45-50 años",
      "Antecedente familiar de cáncer colorrectal o pólipos",
      "Dieta baja en fibra y alta en carnes procesadas",
      "Sedentarismo y obesidad",
      "Tabaquismo y consumo elevado de alcohol",
      "Enfermedad inflamatoria intestinal crónica",
    ],
    mexicoStats:
      "El cáncer colorrectal se encuentra entre los primeros lugares de incidencia de cáncer digestivo en México, con una tendencia al aumento de casos diagnosticados en adultos menores de 50 años en la última década.",
    complications: [
      "Obstrucción intestinal",
      "Perforación intestinal",
      "Metástasis a hígado o pulmón",
      "Anemia crónica severa",
    ],
    treatments: [
      "Resección quirúrgica del segmento afectado (colectomía)",
      "Cirugía oncológica mínimamente invasiva (laparoscópica)",
      "Quimioterapia complementaria según estadificación",
      "Radioterapia en casos de recto",
    ],
    faqs: [
      {
        question: "¿A partir de qué edad debo hacerme una colonoscopía de detección?",
        answer:
          "La recomendación general es iniciar el tamizaje a los 45-50 años en población sin antecedentes, o antes si hay antecedente familiar directo de cáncer colorrectal o pólipos.",
      },
      {
        question: "¿Todo pólipo colónico se convierte en cáncer?",
        answer:
          "No, pero ciertos tipos de pólipos (adenomas) tienen potencial de transformarse con el tiempo, por eso se recomienda su extracción y seguimiento durante la colonoscopía.",
      },
      {
        question: "¿La cirugía siempre requiere una colostomía permanente?",
        answer:
          "No en la mayoría de los casos. La necesidad de una ostomía (temporal o permanente) depende de la ubicación exacta del tumor y de la técnica quirúrgica, se evalúa caso por caso.",
      },
    ],
    relatedServices: ["s-gastrointestinal", "s-laparoscopia-biopsia", "s-ablacion-tumores"],
    relatedSymptoms: ["sy-cansancio", "sy-peso", "sy-apetito"],
    lastReviewed: "2026-11-06",
    image: "/images/diseases/cancer-de-colon.jpg",
    seo: {
      title: "Cáncer de Colon — Dr. Manuel González Reyes",
      description:
        "Diagnóstico y tratamiento quirúrgico del cáncer de colon con el Dr. Manuel González Reyes, cirujano oncólogo en CDMX.",
      keywords: ["cáncer de colon", "cirugía colorrectal", "cirujano oncólogo CDMX", "adenocarcinoma de colon"],
    },
  },
  {
    id: "d-tiroides",
    slug: "cancer-de-tiroides",
    name: "Cáncer de Tiroides",
    technicalName: "Carcinoma Tiroideo",
    colloquialNames: ["nódulo canceroso en la tiroides"],
    description:
      "El cáncer de tiroides se origina en las células de la glándula tiroides, ubicada en la parte frontal del cuello. La mayoría de los nódulos tiroideos son benignos, pero algunos requieren evaluación quirúrgica cuando la biopsia o las características de imagen sugieren malignidad. Es uno de los cánceres con mejor pronóstico cuando se trata oportunamente.",
    symptoms: [
      "Nódulo o bulto palpable en el cuello",
      "Cambios en la voz o ronquera persistente",
      "Dificultad para tragar",
      "Dolor en la parte frontal del cuello",
      "Ganglios inflamados en el cuello",
    ],
    causes: [
      "Mutaciones genéticas en las células tiroideas",
      "Exposición previa a radiación en cabeza o cuello",
      "Antecedente familiar de cáncer de tiroides o síndromes genéticos",
    ],
    riskFactors: [
      "Sexo femenino",
      "Edad entre 30 y 60 años",
      "Antecedente de radiación en cabeza/cuello en la infancia",
      "Antecedente familiar de cáncer tiroideo",
      "Deficiencia o exceso de yodo en la dieta",
    ],
    complications: [
      "Invasión a estructuras cercanas (tráquea, nervio laríngeo)",
      "Metástasis a ganglios cervicales",
      "Metástasis a distancia (pulmón, hueso) en casos avanzados",
    ],
    treatments: [
      "Tiroidectomía total o parcial (cirugía de cabeza y cuello)",
      "Disección de ganglios cervicales cuando hay afectación",
      "Yodo radioactivo complementario según el tipo histológico",
      "Seguimiento hormonal de por vida tras la cirugía",
    ],
    faqs: [
      {
        question: "¿Todo nódulo tiroideo requiere cirugía?",
        answer:
          "No. La mayoría de los nódulos son benignos y se vigilan con ultrasonido periódico. La cirugía se indica cuando la biopsia por aspiración o las características de imagen sugieren riesgo de malignidad.",
      },
      {
        question: "¿Se puede vivir sin tiroides después de la cirugía?",
        answer:
          "Sí, con reemplazo hormonal diario de por vida (levotiroxina), la gran mayoría de los pacientes lleva una vida completamente normal tras la tiroidectomía.",
      },
      {
        question: "¿Es necesario quitar los ganglios del cuello siempre?",
        answer:
          "No siempre. La disección ganglionar se indica cuando hay evidencia clínica o por imagen de afectación ganglionar, no de forma rutinaria en todos los casos.",
      },
    ],
    relatedServices: ["s-cabeza-cuello", "s-biopsias-ganglionares"],
    relatedSymptoms: ["sy-inflamacion", "sy-garganta", "sy-audicion"],
    lastReviewed: "2026-11-06",
    image: "/images/diseases/cancer-de-tiroides.jpg",
    seo: {
      title: "Cáncer de Tiroides — Dr. Manuel González Reyes",
      description: "Diagnóstico y cirugía de cáncer de tiroides con el Dr. Manuel González Reyes, especialista en cirugía oncológica de cabeza y cuello.",
      keywords: ["cáncer de tiroides", "tiroidectomía", "cirugía de cabeza y cuello", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "d-mama",
    slug: "cancer-de-mama",
    name: "Cáncer de Mama",
    technicalName: "Carcinoma Mamario",
    colloquialNames: ["cáncer de seno"],
    description:
      "El cáncer de mama es el crecimiento anormal de células en el tejido mamario. Es el cáncer más frecuente en mujeres mexicanas y su detección temprana mediante autoexploración, mastografía y evaluación clínica mejora significativamente las posibilidades de tratamiento conservador y curación.",
    symptoms: [
      "Bulto o masa palpable en la mama o axila",
      "Cambios en el tamaño, forma o contorno de la mama",
      "Retracción o hundimiento del pezón",
      "Secreción anormal por el pezón",
      "Enrojecimiento o engrosamiento de la piel de la mama",
    ],
    causes: [
      "Mutaciones genéticas adquiridas o heredadas (BRCA1/BRCA2)",
      "Exposición hormonal prolongada (estrógenos)",
      "Factores reproductivos y de estilo de vida",
    ],
    riskFactors: [
      "Sexo femenino y edad avanzada",
      "Antecedente familiar de cáncer de mama u ovario",
      "Mutación genética BRCA1/BRCA2 confirmada",
      "Menarca temprana o menopausia tardía",
      "Obesidad y sedentarismo",
    ],
    mexicoStats:
      "El cáncer de mama es la primera causa de muerte por cáncer en mujeres mexicanas, aunque la supervivencia mejora de forma significativa cuando se detecta en etapas tempranas.",
    complications: [
      "Metástasis a ganglios axilares",
      "Metástasis a distancia (hueso, pulmón, hígado)",
      "Linfedema del brazo tras cirugía axilar",
    ],
    treatments: [
      "Cirugía mamaria conservadora (lumpectomía)",
      "Mastectomía cuando está clínicamente indicada",
      "Biopsia de ganglio centinela",
      "Quimioterapia, radioterapia u hormonoterapia complementaria según el caso",
    ],
    faqs: [
      {
        question: "¿Toda cirugía de cáncer de mama implica quitar toda la mama?",
        answer:
          "No. Cuando el tamaño y ubicación del tumor lo permiten, se puede realizar cirugía conservadora (lumpectomía) seguida de radioterapia, con resultados oncológicos equivalentes a la mastectomía en casos seleccionados.",
      },
      {
        question: "¿Qué es la biopsia de ganglio centinela?",
        answer:
          "Es una técnica que identifica y analiza el primer ganglio al que drenaría el tumor, permitiendo evitar la disección completa de la axila cuando ese ganglio está libre de células tumorales.",
      },
      {
        question: "¿La mastografía duele o es peligrosa?",
        answer:
          "La mastografía puede generar una molestia breve por la compresión necesaria para obtener una imagen clara, pero es un estudio seguro y es la herramienta de detección temprana más efectiva disponible.",
      },
    ],
    relatedServices: ["s-cirugia-mamaria", "s-biopsias-ganglionares"],
    relatedSymptoms: ["sy-inflamacion", "sy-cansancio"],
    lastReviewed: "2026-11-06",
    image: "/images/diseases/cancer-de-mama.jpg",
    seo: {
      title: "Cáncer de Mama — Dr. Manuel González Reyes",
      description: "Diagnóstico y cirugía conservadora u oncológica del cáncer de mama con el Dr. Manuel González Reyes en CDMX.",
      keywords: ["cáncer de mama", "cirugía mamaria", "mastectomía", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "d-cuello-uterino",
    slug: "cancer-de-cuello-uterino",
    name: "Cáncer de Cuello Uterino",
    technicalName: "Carcinoma Cervicouterino",
    colloquialNames: ["cáncer cervicouterino", "cáncer de cérvix"],
    description:
      "El cáncer de cuello uterino se origina en las células del cérvix, la parte inferior del útero que conecta con la vagina. Está fuertemente asociado a la infección persistente por Virus del Papiloma Humano (VPH) de alto riesgo, y es uno de los cánceres más prevenibles mediante detección oportuna con Papanicolaou y vacunación.",
    symptoms: [
      "Sangrado vaginal anormal (entre periodos, tras relaciones o en la menopausia)",
      "Flujo vaginal inusual",
      "Dolor pélvico",
      "Dolor durante las relaciones sexuales",
    ],
    causes: [
      "Infección persistente por VPH de alto riesgo oncogénico",
      "Ausencia de detección oportuna con Papanicolaou",
    ],
    riskFactors: [
      "Infección por VPH no resuelta",
      "Inicio temprano de vida sexual",
      "Múltiples parejas sexuales",
      "Tabaquismo",
      "Sistema inmune debilitado",
      "Falta de vacunación contra VPH",
    ],
    complications: [
      "Invasión a estructuras pélvicas vecinas",
      "Metástasis a ganglios pélvicos",
      "Afectación de la función renal por compresión ureteral",
    ],
    treatments: [
      "Cirugía oncológica (conización, histerectomía radical según estadio)",
      "Radioterapia y quimioterapia en estadios avanzados",
      "Seguimiento citológico estrecho tras tratamiento conservador",
    ],
    faqs: [
      {
        question: "¿La vacuna contra el VPH previene este cáncer?",
        answer:
          "Sí, la vacunación contra los tipos de VPH de alto riesgo reduce significativamente el riesgo de desarrollar cáncer cervicouterino, siendo más efectiva cuando se aplica antes del inicio de la vida sexual.",
      },
      {
        question: "¿Con qué frecuencia debo hacerme un Papanicolaou?",
        answer:
          "La periodicidad depende de la edad y resultados previos; en términos generales se recomienda cada 1 a 3 años en mujeres sexualmente activas, según indicación médica individual.",
      },
      {
        question: "¿Se puede preservar la fertilidad en etapas tempranas?",
        answer:
          "En estadios muy iniciales, procedimientos conservadores como la conización pueden preservar el útero y la fertilidad; la decisión depende de la extensión real de la lesión.",
      },
    ],
    relatedServices: ["s-ablacion-tumores"],
    relatedSymptoms: ["sy-inflamacion"],
    lastReviewed: "2026-11-06",
    image: "/images/diseases/cancer-de-cuello-uterino.jpg",
    seo: {
      title: "Cáncer de Cuello Uterino — Dr. Manuel González",
      description: "Diagnóstico y tratamiento quirúrgico del cáncer cervicouterino con el Dr. Manuel González Reyes, cirujano oncólogo en CDMX.",
      keywords: ["cáncer de cuello uterino", "cáncer cervicouterino", "VPH", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "d-pancreas",
    slug: "cancer-de-pancreas",
    name: "Cáncer de Páncreas",
    technicalName: "Adenocarcinoma Pancreático",
    colloquialNames: [],
    description:
      "El cáncer de páncreas se origina en las células del páncreas, un órgano localizado detrás del estómago que participa en la digestión y la regulación de la glucosa. Con frecuencia se diagnostica en etapas avanzadas por la ausencia de síntomas tempranos específicos, por lo que la evaluación quirúrgica oportuna es determinante en los casos operables.",
    symptoms: [
      "Dolor abdominal persistente que se irradia a la espalda",
      "Ictericia (coloración amarillenta de piel y ojos)",
      "Pérdida de peso inexplicable",
      "Pérdida de apetito",
      "Cambios en la coloración de la orina y evacuaciones",
    ],
    causes: [
      "Mutaciones genéticas adquiridas en las células pancreáticas",
      "Inflamación crónica del páncreas (pancreatitis crónica)",
      "Factores hereditarios en un porcentaje de los casos",
    ],
    riskFactors: [
      "Tabaquismo",
      "Diabetes mellitus de larga evolución",
      "Obesidad",
      "Antecedente familiar de cáncer pancreático",
      "Pancreatitis crónica",
    ],
    complications: [
      "Obstrucción del conducto biliar",
      "Invasión a estructuras vasculares vecinas",
      "Metástasis hepática",
    ],
    treatments: [
      "Cirugía pancreática (pancreatectomía según localización del tumor)",
      "Quimioterapia neoadyuvante o adyuvante",
      "Colocación de catéteres/stents biliares para descompresión",
    ],
    faqs: [
      {
        question: "¿Por qué el cáncer de páncreas suele detectarse tarde?",
        answer:
          "Porque en etapas iniciales suele no causar síntomas específicos; el dolor abdominal o la ictericia generalmente aparecen cuando el tumor ya tiene un tamaño considerable o afecta estructuras vecinas.",
      },
      {
        question: "¿Toda cirugía de páncreas requiere quitar el órgano completo?",
        answer:
          "No necesariamente. El tipo de resección depende de la localización exacta del tumor dentro del páncreas; existen procedimientos que preservan una parte funcional del órgano.",
      },
      {
        question: "¿Es necesaria la quimioterapia además de la cirugía?",
        answer:
          "En la mayoría de los casos sí, ya sea antes (neoadyuvante) o después (adyuvante) de la cirugía, como parte de un tratamiento oncológico integral coordinado con oncología médica.",
      },
    ],
    relatedServices: ["s-pancreatica", "s-cateteres-quimioterapia"],
    relatedSymptoms: ["sy-apetito", "sy-peso", "sy-cansancio", "sy-fiebre", "sy-sudoracion"],
    lastReviewed: "2026-11-06",
    image: "/images/diseases/cancer-de-pancreas.jpg",
    seo: {
      title: "Cáncer de Páncreas — Dr. Manuel González Reyes",
      description: "Diagnóstico y cirugía oncológica del cáncer de páncreas con el Dr. Manuel González Reyes en CDMX.",
      keywords: ["cáncer de páncreas", "cirugía pancreática", "pancreatectomía", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "d-endometrio",
    slug: "cancer-de-endometrio",
    name: "Cáncer de Endometrio",
    technicalName: "Carcinoma Endometrial",
    colloquialNames: ["cáncer del revestimiento uterino"],
    description:
      "El cáncer de endometrio se origina en el revestimiento interno del útero. Es el cáncer ginecológico más frecuente en mujeres posmenopáusicas y, a diferencia de otros cánceres ginecológicos, suele manifestarse tempranamente con sangrado anormal, lo que favorece su detección en etapas tratables.",
    symptoms: [
      "Sangrado vaginal anormal, especialmente después de la menopausia",
      "Sangrado entre periodos menstruales",
      "Dolor pélvico",
      "Flujo vaginal anormal",
    ],
    causes: [
      "Exposición prolongada a estrógenos sin oposición de progesterona",
      "Mutaciones genéticas adquiridas",
      "Síndrome de Lynch en un porcentaje de los casos",
    ],
    riskFactors: [
      "Obesidad",
      "Menopausia tardía",
      "Nuliparidad (no haber tenido embarazos)",
      "Diabetes mellitus",
      "Terapia hormonal con estrógenos sin oposición",
      "Síndrome de ovario poliquístico",
    ],
    complications: [
      "Invasión al miometrio (pared muscular uterina)",
      "Metástasis a ganglios pélvicos",
      "Diseminación a otros órganos pélvicos",
    ],
    treatments: [
      "Histerectomía con o sin salpingooforectomía bilateral",
      "Disección de ganglios pélvicos según estadificación",
      "Radioterapia o quimioterapia complementaria en casos seleccionados",
    ],
    faqs: [
      {
        question: "¿Todo sangrado posmenopáusico es cáncer?",
        answer:
          "No, pero cualquier sangrado vaginal después de la menopausia debe evaluarse de inmediato por un especialista, ya que es el síntoma de alarma más frecuente y temprano del cáncer de endometrio.",
      },
      {
        question: "¿Es necesario quitar los ovarios durante la cirugía?",
        answer:
          "En la mayoría de los casos de cáncer de endometrio sí se recomienda, ya que reduce el riesgo de recurrencia; la decisión final depende de la edad de la paciente y la estadificación.",
      },
      {
        question: "¿Se puede operar por vía laparoscópica?",
        answer:
          "Sí, en muchos casos la histerectomía oncológica puede realizarse por laparoscopía, con menor sangrado y recuperación más rápida que la cirugía abierta.",
      },
    ],
    relatedServices: ["s-cirugia-minimamente-invasiva"],
    relatedSymptoms: ["sy-inflamacion"],
    lastReviewed: "2026-11-06",
    image: "/images/diseases/cancer-de-endometrio.jpg",
    seo: {
      title: "Cáncer de Endometrio — Dr. Manuel González Reyes",
      description: "Diagnóstico y tratamiento quirúrgico del cáncer de endometrio con el Dr. Manuel González Reyes en CDMX.",
      keywords: ["cáncer de endometrio", "histerectomía oncológica", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "d-testiculos",
    slug: "cancer-de-testiculos",
    name: "Cáncer de Testículo",
    technicalName: "Neoplasia Testicular",
    colloquialNames: ["cáncer testicular"],
    description:
      "El cáncer de testículo se origina en las células del testículo y es uno de los cánceres más frecuentes en hombres jóvenes, entre 15 y 40 años. A diferencia de muchos otros cánceres, tiene tasas de curación muy altas cuando se detecta y trata oportunamente, incluso en estadios con diseminación.",
    symptoms: [
      "Masa o aumento de volumen indoloro en un testículo",
      "Sensación de pesadez en el escroto",
      "Dolor sordo en la parte baja del abdomen o la ingle",
      "Cambio en el tamaño o consistencia testicular",
    ],
    causes: [
      "Mutaciones genéticas en células germinales testiculares",
      "Criptorquidia (testículo no descendido) no corregida",
    ],
    riskFactors: [
      "Antecedente de criptorquidia",
      "Edad entre 15 y 40 años",
      "Antecedente familiar de cáncer testicular",
      "Antecedente personal de cáncer en el testículo contralateral",
    ],
    complications: [
      "Metástasis a ganglios retroperitoneales",
      "Metástasis a pulmón",
      "Afectación de la fertilidad tras el tratamiento",
    ],
    treatments: [
      "Orquiectomía radical inguinal (cirugía de extirpación del testículo afectado)",
      "Vigilancia activa o quimioterapia complementaria según estadificación",
      "Disección ganglionar retroperitoneal en casos seleccionados",
    ],
    faqs: [
      {
        question: "¿Perder un testículo afecta la fertilidad o la vida sexual?",
        answer:
          "La mayoría de los hombres mantiene función hormonal y sexual normal con el testículo restante; en casos donde se requiere tratamiento adicional, se puede discutir la preservación de esperma antes de iniciarlo.",
      },
      {
        question: "¿Es importante la autoexploración testicular?",
        answer:
          "Sí, la autoexploración mensual ayuda a detectar cambios tempranos; cualquier masa o cambio de consistencia nuevo debe evaluarse de inmediato con un especialista.",
      },
      {
        question: "¿Qué tan rápido debo buscar atención si noto un cambio?",
        answer:
          "De inmediato. Una masa testicular indolora nueva debe evaluarse en los días siguientes, no semanas, ya que el diagnóstico y tratamiento oportuno es clave para las altas tasas de curación.",
      },
    ],
    relatedServices: ["s-cirugia-minimamente-invasiva"],
    relatedSymptoms: ["sy-inflamacion"],
    lastReviewed: "2026-11-06",
    image: "/images/diseases/cancer-de-testiculo.jpg",
    seo: {
      title: "Cáncer de Testículo — Dr. Manuel González Reyes",
      description: "Diagnóstico y cirugía oncológica del cáncer de testículo con el Dr. Manuel González Reyes en CDMX.",
      keywords: ["cáncer de testículo", "orquiectomía", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "d-estomago",
    slug: "cancer-de-estomago",
    name: "Cáncer de Estómago",
    technicalName: "Adenocarcinoma Gástrico",
    colloquialNames: ["cáncer gástrico"],
    description:
      "El cáncer de estómago se origina en el revestimiento interno del estómago. Su incidencia está relacionada con factores dietéticos y la infección crónica por la bacteria Helicobacter pylori. El tratamiento quirúrgico oncológico, frecuentemente combinado con quimioterapia, es la base del manejo curativo.",
    symptoms: [
      "Dolor o ardor abdominal persistente",
      "Saciedad temprana al comer",
      "Pérdida de apetito",
      "Pérdida de peso inexplicable",
      "Náusea o vómito persistente",
      "Sangrado digestivo (evacuaciones oscuras o vómito con sangre)",
    ],
    causes: [
      "Infección crónica por Helicobacter pylori",
      "Mutaciones genéticas adquiridas en la mucosa gástrica",
      "Síndromes hereditarios en un porcentaje de los casos",
    ],
    riskFactors: [
      "Infección por Helicobacter pylori no tratada",
      "Dieta alta en alimentos ahumados, salados o conservados",
      "Tabaquismo",
      "Antecedente familiar de cáncer gástrico",
      "Gastritis crónica atrófica",
    ],
    complications: [
      "Obstrucción del tránsito gástrico",
      "Sangrado digestivo activo",
      "Metástasis peritoneal o hepática",
    ],
    treatments: [
      "Gastrectomía parcial o total según localización del tumor",
      "Linfadenectomía (resección de ganglios regionales)",
      "Quimioterapia perioperatoria",
    ],
    faqs: [
      {
        question: "¿Tratar el Helicobacter pylori reduce el riesgo de cáncer gástrico?",
        answer:
          "Sí, erradicar la infección por H. pylori en etapas tempranas reduce de forma importante el riesgo de desarrollar lesiones precancerosas y cáncer gástrico a largo plazo.",
      },
      {
        question: "¿Se puede comer con normalidad después de una gastrectomía?",
        answer:
          "Sí, aunque con ajustes en el volumen y frecuencia de las comidas (porciones más pequeñas y frecuentes); el equipo médico acompaña esta adaptación nutricional tras la cirugía.",
      },
      {
        question: "¿Cuánto dura la recuperación de una gastrectomía?",
        answer:
          "La recuperación hospitalaria inicial suele ser de 5 a 10 días, con una recuperación funcional completa que puede tomar de 6 a 8 semanas según el tipo de resección.",
      },
    ],
    relatedServices: ["s-esofagogastrica", "s-gastrointestinal"],
    relatedSymptoms: ["sy-apetito", "sy-peso", "sy-fiebre"],
    lastReviewed: "2026-11-06",
    image: "/images/diseases/cancer-de-estomago.jpg",
    seo: {
      title: "Cáncer de Estómago — Dr. Manuel González Reyes",
      description: "Diagnóstico y tratamiento quirúrgico del cáncer gástrico con el Dr. Manuel González Reyes en CDMX.",
      keywords: ["cáncer de estómago", "cáncer gástrico", "gastrectomía", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "d-renal",
    slug: "cancer-renal",
    name: "Cáncer Renal",
    technicalName: "Carcinoma de Células Renales",
    colloquialNames: ["cáncer de riñón"],
    description:
      "El cáncer renal se origina en las células del riñón, con mayor frecuencia en el tipo de células claras. Hoy en día, una proporción importante se detecta de forma incidental en estudios de imagen realizados por otras razones, lo que permite tratamientos conservadores de la función renal en muchos casos.",
    symptoms: [
      "Sangre en la orina (hematuria)",
      "Dolor en el costado o la espalda baja",
      "Masa palpable en el abdomen",
      "Pérdida de peso inexplicable",
      "Fatiga persistente",
    ],
    causes: [
      "Mutaciones genéticas adquiridas en las células renales",
      "Síndromes hereditarios (enfermedad de Von Hippel-Lindau, entre otros)",
    ],
    riskFactors: [
      "Tabaquismo",
      "Obesidad",
      "Hipertensión arterial de larga evolución",
      "Enfermedad renal crónica avanzada",
      "Antecedente familiar de cáncer renal",
    ],
    complications: [
      "Invasión a la vena renal o vena cava",
      "Metástasis a pulmón, hueso o cerebro",
      "Pérdida de función renal",
    ],
    treatments: [
      "Nefrectomía parcial (preservadora de nefronas) cuando es posible",
      "Nefrectomía radical en tumores más extensos",
      "Ablación por radiofrecuencia o microondas en tumores pequeños seleccionados",
    ],
    faqs: [
      {
        question: "¿Siempre hay que quitar el riñón completo?",
        answer:
          "No. Cuando el tumor es de tamaño limitado y la localización lo permite, se prefiere la nefrectomía parcial, que preserva tejido renal sano funcional.",
      },
      {
        question: "¿Se puede vivir con normalidad con un solo riñón?",
        answer:
          "Sí, la gran mayoría de las personas mantiene una función renal adecuada con un solo riñón funcional, siempre con seguimiento médico periódico.",
      },
      {
        question: "¿Cómo se suele detectar el cáncer renal hoy en día?",
        answer:
          "Con frecuencia se detecta de forma incidental en un ultrasonido o tomografía realizada por otro motivo, antes de que genere síntomas evidentes.",
      },
    ],
    relatedServices: ["s-ablacion-microondas", "s-ablacion-radiofrecuencia", "s-ablacion-tumores"],
    relatedSymptoms: ["sy-cansancio", "sy-peso"],
    lastReviewed: "2026-11-06",
    image: "/images/diseases/cancer-renal.jpg",
    seo: {
      title: "Cáncer Renal — Dr. Manuel González Reyes",
      description: "Diagnóstico y tratamiento quirúrgico del cáncer renal con el Dr. Manuel González Reyes en CDMX.",
      keywords: ["cáncer renal", "cáncer de riñón", "nefrectomía", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "d-piel",
    slug: "cancer-de-piel",
    name: "Cáncer de Piel (Melanoma y No Melanoma)",
    technicalName: "Carcinoma Cutáneo / Melanoma Maligno",
    colloquialNames: ["cáncer de piel", "melanoma"],
    description:
      "El cáncer de piel agrupa tumores malignos originados en las células de la piel, principalmente carcinoma basocelular, carcinoma epidermoide y melanoma — este último el más agresivo, con capacidad de diseminarse rápidamente si no se trata a tiempo. La exposición solar acumulada y los cambios en lunares existentes son las señales clínicas más relevantes a vigilar.",
    symptoms: [
      "Lunar o mancha que cambia de tamaño, forma o color",
      "Lesión en la piel que no cicatriza",
      "Nueva mancha o bulto de bordes irregulares",
      "Sangrado o comezón en una lesión cutánea existente",
    ],
    causes: [
      "Exposición solar acumulada sin protección (radiación ultravioleta)",
      "Uso de camas de bronceado",
      "Mutaciones genéticas adquiridas en las células de la piel",
    ],
    riskFactors: [
      "Piel clara y antecedente de quemaduras solares",
      "Exposición solar intensa o recurrente sin protección",
      "Múltiples lunares atípicos",
      "Antecedente familiar de melanoma",
      "Sistema inmune debilitado",
    ],
    complications: [
      "Invasión a tejidos profundos",
      "Metástasis a ganglios linfáticos regionales (melanoma)",
      "Metástasis a distancia en melanoma avanzado",
    ],
    treatments: [
      "Resección quirúrgica con márgenes oncológicos adecuados",
      "Biopsia de ganglio centinela en melanoma de riesgo",
      "Cirugía reconstructiva de cabeza, cuello o piel según la localización",
    ],
    faqs: [
      {
        question: "¿Cómo distingo un lunar normal de uno sospechoso?",
        answer:
          "La regla ABCDE ayuda a identificar signos de alarma: Asimetría, Bordes irregulares, Color no uniforme, Diámetro mayor a 6mm, y Evolución/cambio reciente — cualquier lunar con estas características debe evaluarse.",
      },
      {
        question: "¿Todo carcinoma de piel requiere cirugía de cabeza y cuello compleja?",
        answer:
          "No, muchos carcinomas cutáneos se resuelven con resección local ambulatoria; la complejidad quirúrgica depende del tamaño, profundidad y ubicación de la lesión, especialmente en zonas sensibles de la cara.",
      },
      {
        question: "¿El melanoma siempre requiere biopsia de ganglio centinela?",
        answer:
          "Se indica según el grosor y características de la lesión (índice de Breslow); en melanomas delgados puede no ser necesaria, el equipo médico lo determina caso por caso.",
      },
    ],
    relatedServices: ["s-cabeza-cuello", "s-ablacion-tumores"],
    relatedSymptoms: ["sy-inflamacion"],
    lastReviewed: "2026-11-06",
    image: "/images/diseases/cancer-de-piel.jpg",
    seo: {
      title: "Cáncer de Piel y Melanoma — Dr. Manuel González",
      description: "Diagnóstico y cirugía oncológica de cáncer de piel y melanoma con el Dr. Manuel González Reyes en CDMX.",
      keywords: ["cáncer de piel", "melanoma", "carcinoma cutáneo", "cirujano oncólogo CDMX"],
    },
  },
];
