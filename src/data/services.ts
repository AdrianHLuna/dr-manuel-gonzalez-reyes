import type { MedicalService } from "@/types/schema";

// Catálogo real de 12 procedimientos del Dr. Manuel González Reyes, exacto
// al intake. Sin precio por procedimiento (solo se dio el precio de
// consulta general, ya en doctor.consultationPrice) — nunca se fabrica un
// rango de precio por cirugía que el doctor no proporcionó.
export const services: MedicalService[] = [
  {
    id: "s-gastrointestinal",
    slug: "cirugia-gastrointestinal",
    name: "Cirugía Gastrointestinal",
    description: "Cirugía oncológica del tracto digestivo, incluyendo colon, recto y estómago.",
    longDescription:
      "La cirugía gastrointestinal oncológica abarca la resección quirúrgica de tumores del esófago, estómago, intestino delgado, colon y recto. El Dr. Manuel González Reyes evalúa cada caso para determinar la técnica más adecuada (abierta o mínimamente invasiva), priorizando siempre la resección oncológica completa con el menor impacto funcional posible para el paciente.",
    type: "hospitalario",
    anesthesiaType: "General",
    duration: "2 a 5 horas, según el segmento afectado",
    recoveryTime: "4 a 6 semanas, según el tipo de cirugía",
    isPainful: true,
    benefits: [
      "Resección oncológica completa del tumor",
      "Posibilidad de abordaje mínimamente invasivo en casos seleccionados",
      "Evaluación ganglionar simultánea para una estadificación precisa",
    ],
    postOpRecommendations: [
      "Reposo progresivo según indicación médica",
      "Dieta en etapas supervisada por el equipo médico",
      "Seguimiento clínico estrecho las primeras semanas",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Anestesia: "General",
      Duración: "2 a 5 horas",
    },
    faqs: [
      {
        question: "¿Toda cirugía gastrointestinal requiere una incisión grande?",
        answer: "No. En casos seleccionados es posible realizar el procedimiento por laparoscopía, con incisiones pequeñas y recuperación más rápida que la cirugía abierta tradicional.",
      },
      {
        question: "¿Cuánto tiempo de hospitalización se requiere?",
        answer: "Generalmente de 3 a 7 días, dependiendo del segmento intestinal operado y de la evolución postoperatoria del paciente.",
      },
    ],
    relatedConditions: ["d-colon", "d-estomago"],
    lastReviewed: "2026-11-06",
    image: "/images/services/cirugia-gastrointestinal.jpg",
    seo: {
      title: "Cirugía Gastrointestinal | Dr. Manuel González Reyes",
      description: "Cirugía oncológica del tracto digestivo con el Dr. Manuel González Reyes, cirujano oncólogo en CDMX.",
      keywords: ["cirugía gastrointestinal", "cirugía de colon", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "s-cirugia-mamaria",
    slug: "cirugia-mamaria",
    name: "Cirugía Mamaria",
    description: "Cirugía oncológica conservadora o radical del cáncer de mama.",
    longDescription:
      "La cirugía mamaria oncológica incluye desde la resección conservadora (lumpectomía) hasta la mastectomía, según el tamaño, ubicación y características del tumor. El Dr. Manuel González Reyes integra la biopsia de ganglio centinela cuando está indicada, con un enfoque orientado a preservar la mayor cantidad de tejido sano posible sin comprometer el control oncológico.",
    type: "hospitalario",
    anesthesiaType: "General",
    duration: "1.5 a 3 horas",
    recoveryTime: "2 a 4 semanas",
    isPainful: true,
    benefits: [
      "Abordaje conservador cuando es oncológicamente seguro",
      "Biopsia de ganglio centinela para evitar disección axilar innecesaria",
      "Coordinación con radioterapia/oncología médica para el tratamiento integral",
    ],
    postOpRecommendations: [
      "Uso de brasier postquirúrgico de compresión según indicación",
      "Movilidad progresiva del brazo guiada",
      "Seguimiento con oncología médica y radioterapia si aplica",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Anestesia: "General",
      Duración: "1.5 a 3 horas",
    },
    faqs: [
      {
        question: "¿Toda cirugía mamaria implica quitar toda la mama?",
        answer: "No, en casos seleccionados se realiza cirugía conservadora seguida de radioterapia, con resultados oncológicos equivalentes a la mastectomía.",
      },
      {
        question: "¿Es necesaria la reconstrucción mamaria inmediata?",
        answer: "Depende del caso y la preferencia de la paciente; se puede planear reconstrucción inmediata o diferida en conjunto con cirugía plástica cuando está indicada.",
      },
    ],
    relatedConditions: ["d-mama"],
    lastReviewed: "2026-11-06",
    image: "/images/services/cirugia-mamaria.jpg",
    seo: {
      title: "Cirugía Mamaria Oncológica | Dr. Manuel González Reyes",
      description: "Cirugía oncológica conservadora o radical de mama con el Dr. Manuel González Reyes en CDMX.",
      keywords: ["cirugía mamaria", "cirugía de cáncer de mama", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "s-cirugia-minimamente-invasiva",
    slug: "cirugia-oncologica-minimamente-invasiva",
    name: "Cirugía Oncológica Mínimamente Invasiva",
    description: "Cirugía laparoscópica oncológica con incisiones pequeñas y recuperación más rápida.",
    longDescription:
      "La cirugía oncológica mínimamente invasiva utiliza instrumental laparoscópico para realizar resecciones oncológicas complejas a través de incisiones pequeñas, en casos clínicamente seleccionados. Esto permite menor dolor postoperatorio, menor sangrado y una recuperación más rápida comparada con la cirugía abierta tradicional, sin comprometer el resultado oncológico.",
    type: "hospitalario",
    anesthesiaType: "General",
    duration: "2 a 4 horas",
    recoveryTime: "2 a 3 semanas",
    isPainful: true,
    benefits: [
      "Incisiones pequeñas y menor cicatriz visible",
      "Menor dolor postoperatorio comparado con cirugía abierta",
      "Recuperación más rápida y menor estancia hospitalaria",
    ],
    postOpRecommendations: [
      "Movilización temprana según indicación médica",
      "Dieta en etapas supervisada",
      "Seguimiento de las incisiones laparoscópicas",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Anestesia: "General",
      Abordaje: "Laparoscópico",
    },
    faqs: [
      {
        question: "¿La cirugía mínimamente invasiva es igual de efectiva que la abierta?",
        answer: "En casos oncológicamente seleccionados, sí ofrece resultados equivalentes, con la ventaja de menor trauma quirúrgico y recuperación más rápida.",
      },
      {
        question: "¿Cualquier paciente es candidato a este abordaje?",
        answer: "No; depende del tamaño, ubicación y extensión del tumor, así como de cirugías previas del paciente. El equipo médico evalúa caso por caso.",
      },
    ],
    relatedConditions: ["d-endometrio", "d-testiculos"],
    lastReviewed: "2026-11-06",
    image: "/images/services/cirugia-minimamente-invasiva.jpg",
    seo: {
      title: "Cirugía Mínimamente Invasiva | Dr. Manuel González Reyes",
      description: "Cirugía laparoscópica oncológica con el Dr. Manuel González Reyes, cirujano oncólogo en CDMX.",
      keywords: ["cirugía mínimamente invasiva", "cirugía laparoscópica oncológica", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "s-cabeza-cuello",
    slug: "cirugia-oncologica-de-cabeza-y-cuello",
    name: "Cirugía Oncológica de Cabeza y Cuello",
    description: "Cirugía oncológica de tiroides, glándulas salivales, piel y estructuras de cabeza y cuello.",
    longDescription:
      "La cirugía oncológica de cabeza y cuello, área de alta especialidad del Dr. Manuel González Reyes, abarca el tratamiento quirúrgico de tumores de tiroides, piel de cara y cuero cabelludo, y otras estructuras de la región cervicofacial, con un enfoque que busca el control oncológico cuidando el resultado funcional y estético.",
    type: "hospitalario",
    anesthesiaType: "General o local según el caso",
    duration: "1.5 a 4 horas, según la estructura afectada",
    recoveryTime: "2 a 4 semanas",
    isPainful: true,
    benefits: [
      "Abordaje quirúrgico especializado en una región anatómica compleja",
      "Cuidado del resultado funcional y estético de cara y cuello",
      "Coordinación con endocrinología/dermatología según el caso",
    ],
    postOpRecommendations: [
      "Cuidado de la incisión cervical o facial según indicación",
      "Reposo de voz en cirugías de tiroides, si aplica",
      "Seguimiento hormonal o dermatológico según el procedimiento",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Región: "Cabeza y cuello",
      Duración: "1.5 a 4 horas",
    },
    faqs: [
      {
        question: "¿La cirugía de tiroides deja una cicatriz muy visible?",
        answer: "La incisión se planea cuidadosamente en un pliegue natural del cuello para minimizar su visibilidad, y suele difuminarse de forma considerable con el tiempo.",
      },
      {
        question: "¿Toda cirugía de cabeza y cuello requiere hospitalización prolongada?",
        answer: "No, muchos procedimientos de esta región son de estancia corta; la duración depende de la estructura afectada y la extensión de la resección.",
      },
    ],
    relatedConditions: ["d-tiroides", "d-piel"],
    lastReviewed: "2026-11-06",
    image: "/images/services/cirugia-cabeza-cuello.jpg",
    seo: {
      title: "Cirugía de Cabeza y Cuello | Dr. Manuel González Reyes",
      description: "Cirugía oncológica de tiroides, piel y cabeza/cuello con el Dr. Manuel González Reyes en CDMX.",
      keywords: ["cirugía de cabeza y cuello", "cirugía de tiroides", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "s-pancreatica",
    slug: "cirugia-pancreatica",
    name: "Cirugía Pancreática",
    description: "Resección quirúrgica oncológica de tumores del páncreas.",
    longDescription:
      "La cirugía pancreática es uno de los procedimientos oncológicos de mayor complejidad técnica, ya que requiere resecar el tumor preservando, cuando es posible, la función digestiva y endocrina del páncreas restante. El tipo de resección (pancreatectomía distal, duodenopancreatectomía) depende de la localización exacta del tumor.",
    type: "hospitalario",
    anesthesiaType: "General",
    duration: "4 a 8 horas",
    recoveryTime: "6 a 8 semanas",
    isPainful: true,
    benefits: [
      "Resección oncológica especializada de alta complejidad",
      "Preservación de función pancreática cuando es técnicamente posible",
      "Seguimiento multidisciplinario con nutrición y endocrinología",
    ],
    postOpRecommendations: [
      "Hospitalización prolongada con vigilancia estrecha",
      "Ajuste nutricional progresivo con apoyo especializado",
      "Monitoreo de glucosa postoperatorio",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Anestesia: "General",
      Duración: "4 a 8 horas",
    },
    faqs: [
      {
        question: "¿Toda cirugía de páncreas afecta la producción de insulina?",
        answer: "Depende de cuánto tejido pancreático funcional se preserve; algunos pacientes requieren manejo de glucosa después de la cirugía, otros mantienen función normal.",
      },
      {
        question: "¿Por qué la recuperación es tan prolongada?",
        answer: "Es una cirugía de alta complejidad que involucra reconstrucción digestiva; el cuerpo necesita tiempo para adaptarse a la nueva anatomía antes de reanudar la dieta y actividad habituales.",
      },
    ],
    relatedConditions: ["d-pancreas"],
    lastReviewed: "2026-11-06",
    image: "/images/services/cirugia-pancreatica.jpg",
    seo: {
      title: "Cirugía Pancreática Oncológica | Dr. Manuel González Reyes",
      description: "Cirugía oncológica de páncreas con el Dr. Manuel González Reyes, cirujano oncólogo en CDMX.",
      keywords: ["cirugía pancreática", "pancreatectomía", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "s-esofagogastrica",
    slug: "cirugia-esofagogastrica",
    name: "Cirugía Esofagogástrica",
    description: "Cirugía oncológica del esófago y el estómago.",
    longDescription:
      "La cirugía esofagogástrica aborda tumores del esófago y la unión esofagogástrica, requiriendo una planeación cuidadosa de la reconstrucción del tránsito digestivo tras la resección. El Dr. Manuel González Reyes coordina el manejo perioperatorio con oncología médica cuando el caso requiere quimioterapia neoadyuvante.",
    type: "hospitalario",
    anesthesiaType: "General",
    duration: "4 a 7 horas",
    recoveryTime: "6 a 8 semanas",
    isPainful: true,
    benefits: [
      "Resección oncológica especializada de esófago y estómago",
      "Reconstrucción del tránsito digestivo en el mismo tiempo quirúrgico",
      "Manejo coordinado con quimioterapia perioperatoria cuando aplica",
    ],
    postOpRecommendations: [
      "Dieta líquida a sólida progresiva y supervisada",
      "Hospitalización prolongada con vigilancia nutricional",
      "Seguimiento estrecho de la cicatrización de la anastomosis",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Anestesia: "General",
      Duración: "4 a 7 horas",
    },
    faqs: [
      {
        question: "¿Se puede comer con normalidad tras una cirugía esofagogástrica?",
        answer: "Sí, aunque la reintroducción de alimentos es progresiva y supervisada, generalmente iniciando con líquidos y avanzando en consistencia en las semanas siguientes.",
      },
      {
        question: "¿Siempre se requiere quimioterapia antes de la cirugía?",
        answer: "No en todos los casos; depende de la etapa y características del tumor, el equipo médico determina si conviene quimioterapia neoadyuvante antes del procedimiento.",
      },
    ],
    relatedConditions: ["d-estomago"],
    lastReviewed: "2026-11-06",
    image: "/images/services/cirugia-esofagogastrica.jpg",
    seo: {
      title: "Cirugía Esofagogástrica | Dr. Manuel González Reyes",
      description: "Cirugía oncológica de esófago y estómago con el Dr. Manuel González Reyes en CDMX.",
      keywords: ["cirugía esofagogástrica", "cirugía de esófago", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "s-laparoscopia-biopsia",
    slug: "biopsias-por-laparoscopia-y-toracoscopia",
    name: "Biopsias por Laparoscopía y Toracoscopia",
    description: "Toma de biopsia mínimamente invasiva de lesiones abdominales o torácicas.",
    longDescription:
      "Cuando una lesión abdominal o torácica no puede biopsiarse de forma segura por punción percutánea, la biopsia por laparoscopía o toracoscopia permite obtener una muestra de tejido representativa con una incisión mínima, bajo visión directa, para establecer un diagnóstico histopatológico preciso antes de definir el tratamiento.",
    type: "hospitalario",
    anesthesiaType: "General",
    duration: "45 a 90 minutos",
    recoveryTime: "1 a 2 semanas",
    isPainful: false,
    benefits: [
      "Diagnóstico histopatológico preciso previo al tratamiento definitivo",
      "Abordaje mínimamente invasivo con recuperación rápida",
      "Visión directa de la cavidad abdominal o torácica",
    ],
    postOpRecommendations: [
      "Reposo relativo las primeras 48-72 horas",
      "Vigilancia de las incisiones laparoscópicas",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Anestesia: "General",
      Duración: "45 a 90 minutos",
    },
    faqs: [
      {
        question: "¿Por qué no siempre se usa una biopsia por punción simple?",
        answer: "Cuando la lesión es de difícil acceso o se requiere una muestra de mayor tamaño para un diagnóstico certero, la biopsia por laparoscopía o toracoscopia ofrece una visión directa y mejor rendimiento diagnóstico.",
      },
      {
        question: "¿Cuánto tarda en conocerse el resultado de la biopsia?",
        answer: "El estudio histopatológico suele tardar entre 5 y 10 días hábiles, dependiendo de si requiere estudios adicionales como inmunohistoquímica.",
      },
    ],
    relatedConditions: ["d-colon"],
    lastReviewed: "2026-11-06",
    image: "/images/services/biopsias-laparoscopia-toracoscopia.jpg",
    seo: {
      title: "Biopsias por Laparoscopía/Toracoscopia | Dr. M. González",
      description: "Biopsia mínimamente invasiva de lesiones abdominales o torácicas con el Dr. Manuel González Reyes en CDMX.",
      keywords: ["biopsia por laparoscopía", "biopsia por toracoscopia", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "s-biopsias-ganglionares",
    slug: "biopsias-ganglionares",
    name: "Biopsias Ganglionares",
    description: "Toma de biopsia de ganglios linfáticos para estudio oncológico.",
    longDescription:
      "La biopsia ganglionar permite determinar si un ganglio linfático inflamado o de características sospechosas contiene células tumorales, ya sea por biopsia escisional completa del ganglio o mediante biopsia de ganglio centinela en el contexto de mama o melanoma. Es un paso clave en la estadificación oncológica.",
    type: "ambulatorio",
    anesthesiaType: "Local o regional, según el caso",
    duration: "30 a 60 minutos",
    recoveryTime: "3 a 7 días",
    isPainful: false,
    benefits: [
      "Confirmación diagnóstica precisa del estado ganglionar",
      "Procedimiento ambulatorio en la mayoría de los casos",
      "Información clave para la estadificación y plan de tratamiento",
    ],
    postOpRecommendations: [
      "Cuidado de la herida según indicación",
      "Evitar esfuerzo físico intenso los primeros días",
    ],
    technicalSpecs: {
      Tipo: "Ambulatorio",
      Anestesia: "Local o regional",
      Duración: "30 a 60 minutos",
    },
    faqs: [
      {
        question: "¿Toda biopsia ganglionar significa que hay cáncer?",
        answer: "No, la biopsia es justamente el estudio que determina si el ganglio tiene o no células tumorales; muchos ganglios biopsiados resultan reactivos y benignos.",
      },
      {
        question: "¿La biopsia de ganglio centinela sustituye a la disección axilar completa?",
        answer: "En muchos casos de mama o melanoma sí, cuando el ganglio centinela resulta negativo, evitando una disección más extensa e innecesaria.",
      },
    ],
    relatedConditions: ["d-tiroides", "d-mama"],
    lastReviewed: "2026-11-06",
    image: "/images/services/biopsias-ganglionares.jpg",
    seo: {
      title: "Biopsias Ganglionares | Dr. Manuel González Reyes",
      description: "Biopsia de ganglios linfáticos para estudio oncológico con el Dr. Manuel González Reyes en CDMX.",
      keywords: ["biopsia ganglionar", "ganglio centinela", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "s-cateteres-quimioterapia",
    slug: "colocacion-de-cateteres-para-quimioterapia",
    name: "Colocación de Catéteres para Quimioterapia",
    description: "Colocación quirúrgica de catéteres venosos centrales para administrar quimioterapia de forma segura.",
    longDescription:
      "La colocación de un catéter venoso central (tipo portacath o similar) permite administrar quimioterapia, medicamentos y tomar muestras de sangre de forma segura y repetida, sin necesidad de puncionar una vena periférica en cada sesión. Es un procedimiento ambulatorio breve que facilita significativamente el tratamiento oncológico prolongado.",
    type: "ambulatorio",
    anesthesiaType: "Local con sedación",
    duration: "30 a 45 minutos",
    recoveryTime: "3 a 5 días",
    isPainful: false,
    benefits: [
      "Acceso venoso seguro y duradero para tratamiento prolongado",
      "Reduce la necesidad de punciones repetidas",
      "Procedimiento ambulatorio de recuperación rápida",
    ],
    postOpRecommendations: [
      "Cuidado del sitio de inserción según indicación",
      "Evitar esfuerzo con el brazo del lado del catéter los primeros días",
    ],
    technicalSpecs: {
      Tipo: "Ambulatorio",
      Anestesia: "Local con sedación",
      Duración: "30 a 45 minutos",
    },
    faqs: [
      {
        question: "¿El catéter se queda de forma permanente?",
        answer: "Se mantiene durante todo el tratamiento oncológico que lo requiera y se retira cuando el equipo médico lo indica, una vez concluido el esquema de quimioterapia.",
      },
      {
        question: "¿Puedo bañarme con normalidad teniendo el catéter?",
        answer: "Sí, con los cuidados indicados por el equipo médico para mantener el sitio de inserción limpio y seco durante los primeros días.",
      },
    ],
    relatedConditions: ["d-pancreas"],
    lastReviewed: "2026-11-06",
    image: "/images/services/cateteres-quimioterapia.jpg",
    seo: {
      title: "Catéteres para Quimioterapia | Dr. Manuel González Reyes",
      description: "Colocación de catéter venoso central para quimioterapia con el Dr. Manuel González Reyes en CDMX.",
      keywords: ["catéter para quimioterapia", "portacath", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "s-ablacion-tumores",
    slug: "ablacion-de-tumores",
    name: "Ablación de Tumores",
    description: "Destrucción localizada de tejido tumoral mediante técnicas de ablación, sin cirugía abierta.",
    longDescription:
      "La ablación de tumores es una técnica mínimamente invasiva que destruye tejido tumoral localizado mediante calor o energía dirigida, guiada por imagen, en pacientes seleccionados donde la cirugía abierta no es la primera opción o como complemento al tratamiento oncológico integral.",
    type: "hospitalario",
    anesthesiaType: "Local con sedación o general, según el caso",
    duration: "45 a 90 minutos",
    recoveryTime: "1 a 2 semanas",
    isPainful: false,
    benefits: [
      "Técnica mínimamente invasiva guiada por imagen",
      "Alternativa en pacientes no candidatos a cirugía abierta",
      "Recuperación más rápida que la cirugía tradicional",
    ],
    postOpRecommendations: [
      "Reposo relativo las primeras 24-48 horas",
      "Seguimiento por imagen para confirmar el control del tumor",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Guía: "Por imagen",
      Duración: "45 a 90 minutos",
    },
    faqs: [
      {
        question: "¿La ablación sustituye a la cirugía?",
        answer: "No siempre; se indica en casos seleccionados según el tamaño, ubicación y características del tumor, y el equipo médico determina si es la mejor opción frente a la cirugía abierta.",
      },
      {
        question: "¿Se requiere hospitalización después de una ablación?",
        answer: "Muchos casos se manejan con estancia corta o incluso de forma ambulatoria, dependiendo del órgano tratado y la respuesta del paciente al procedimiento.",
      },
    ],
    relatedConditions: ["d-colon", "d-cuello-uterino", "d-renal", "d-piel"],
    lastReviewed: "2026-11-06",
    image: "/images/services/ablacion-de-tumores.jpg",
    seo: {
      title: "Ablación de Tumores | Dr. Manuel González Reyes",
      description: "Ablación mínimamente invasiva de tumores con el Dr. Manuel González Reyes, cirujano oncólogo en CDMX.",
      keywords: ["ablación de tumores", "tratamiento mínimamente invasivo", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "s-ablacion-microondas",
    slug: "ablacion-por-microondas",
    name: "Ablación por Microondas",
    description: "Destrucción de tejido tumoral mediante energía de microondas, guiada por imagen.",
    longDescription:
      "La ablación por microondas utiliza energía electromagnética para generar calor localizado y destruir tejido tumoral de forma controlada, guiada por ultrasonido o tomografía. Es especialmente útil en tumores renales o hepáticos pequeños en pacientes donde se busca preservar la mayor cantidad de tejido sano posible.",
    type: "hospitalario",
    anesthesiaType: "Local con sedación o general",
    duration: "30 a 60 minutos",
    recoveryTime: "1 semana",
    isPainful: false,
    benefits: [
      "Destrucción precisa y controlada del tejido tumoral",
      "Preservación de tejido sano circundante",
      "Procedimiento guiado por imagen de alta precisión",
    ],
    postOpRecommendations: [
      "Vigilancia postprocedimiento según protocolo hospitalario",
      "Seguimiento por imagen a corto y mediano plazo",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Energía: "Microondas",
      Duración: "30 a 60 minutos",
    },
    faqs: [
      {
        question: "¿En qué se diferencia de la ablación por radiofrecuencia?",
        answer: "Ambas destruyen tejido tumoral con calor localizado guiado por imagen; la elección entre microondas y radiofrecuencia depende del tamaño, ubicación del tumor y criterio del equipo médico.",
      },
      {
        question: "¿Cuántas sesiones se necesitan?",
        answer: "En la mayoría de los casos de tumores pequeños y bien seleccionados basta una sola sesión; el equipo médico evalúa con imagen de seguimiento si se requiere otra.",
      },
    ],
    relatedConditions: ["d-renal"],
    lastReviewed: "2026-11-06",
    image: "/images/services/ablacion-por-microondas.jpg",
    seo: {
      title: "Ablación por Microondas | Dr. Manuel González Reyes",
      description: "Ablación de tumores por microondas con el Dr. Manuel González Reyes, cirujano oncólogo en CDMX.",
      keywords: ["ablación por microondas", "cáncer renal", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "s-ablacion-radiofrecuencia",
    slug: "ablacion-por-radiofrecuencia",
    name: "Ablación por Radiofrecuencia",
    description: "Destrucción de tejido tumoral mediante energía de radiofrecuencia, guiada por imagen.",
    longDescription:
      "La ablación por radiofrecuencia emplea corriente eléctrica de alta frecuencia para generar calor y destruir tejido tumoral de forma localizada y controlada, guiada por ultrasonido o tomografía. Es una alternativa mínimamente invasiva en tumores pequeños y bien seleccionados, especialmente a nivel renal.",
    type: "hospitalario",
    anesthesiaType: "Local con sedación o general",
    duration: "30 a 60 minutos",
    recoveryTime: "1 semana",
    isPainful: false,
    benefits: [
      "Técnica mínimamente invasiva guiada por imagen",
      "Preservación de la función del órgano tratado",
      "Recuperación rápida comparada con cirugía abierta",
    ],
    postOpRecommendations: [
      "Vigilancia postprocedimiento según protocolo hospitalario",
      "Seguimiento por imagen a corto y mediano plazo",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Energía: "Radiofrecuencia",
      Duración: "30 a 60 minutos",
    },
    faqs: [
      {
        question: "¿Es dolorosa la recuperación de una ablación por radiofrecuencia?",
        answer: "El malestar postprocedimiento suele ser leve y manejable, considerablemente menor al de una cirugía abierta tradicional.",
      },
      {
        question: "¿Qué seguimiento se requiere después del procedimiento?",
        answer: "Se realizan estudios de imagen periódicos para confirmar que el tejido tratado no muestra actividad tumoral residual.",
      },
    ],
    relatedConditions: ["d-renal"],
    lastReviewed: "2026-11-06",
    image: "/images/services/ablacion-por-radiofrecuencia.jpg",
    seo: {
      title: "Ablación por Radiofrecuencia | Dr. Manuel González Reyes",
      description: "Ablación de tumores por radiofrecuencia con el Dr. Manuel González Reyes, cirujano oncólogo en CDMX.",
      keywords: ["ablación por radiofrecuencia", "cáncer renal", "cirujano oncólogo CDMX"],
    },
  },
];
