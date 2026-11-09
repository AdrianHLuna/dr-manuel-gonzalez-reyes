import type { Symptom } from "@/types/schema";

// Catálogo real de síntomas de alarma oncológica atendidos por el Dr.
// Manuel González Reyes — exactos al intake (10), sin ampliar.
export const symptoms: Symptom[] = [
  {
    id: "sy-cansancio",
    slug: "cansancio-o-agotamiento-extremo",
    name: "Cansancio o Agotamiento Extremo",
    colloquialNames: ["fatiga crónica", "cansancio que no se quita con el descanso"],
    description:
      "El cansancio o agotamiento extremo que no mejora con el descanso habitual, y que se mantiene por varias semanas, puede ser una manifestación de un proceso oncológico activo, especialmente cuando el cuerpo destina energía a combatir el crecimiento tumoral o cuando hay anemia asociada a sangrado crónico.",
    causes: [
      "Anemia por sangrado digestivo crónico",
      "Proceso tumoral activo que consume energía del organismo",
      "Alteraciones metabólicas asociadas al cáncer",
      "Causas no oncológicas (anemia por otras causas, hipotiroidismo, trastornos del sueño)",
    ],
    alarmSigns: [
      "Cansancio extremo que no mejora tras varios días de descanso",
      "Cansancio acompañado de pérdida de peso inexplicable",
      "Cansancio con palidez marcada o dificultad para respirar al esfuerzo",
      "Cansancio persistente de más de 4 semanas sin causa aparente",
    ],
    whyConsult:
      "Cuando el cansancio extremo se acompaña de pérdida de peso, cambios en el apetito o sangrado, conviene descartar causas oncológicas mediante una valoración clínica y estudios dirigidos, en vez de atribuirlo solo al estrés o la falta de sueño.",
    faqs: [
      {
        question: "¿Todo cansancio persistente significa cáncer?",
        answer:
          "No, la gran mayoría de los casos de fatiga tienen otras causas (anemia, tiroides, sueño insuficiente, estrés). Sin embargo, cuando se acompaña de otras señales de alarma, amerita evaluación médica para descartar un origen oncológico.",
      },
      {
        question: "¿Qué estudios ayudan a investigar el cansancio persistente?",
        answer:
          "Generalmente se inicia con una biometría hemática completa, perfil tiroideo y, dependiendo de los hallazgos y otros síntomas asociados, estudios de imagen o endoscopía dirigidos.",
      },
    ],
    relatedConditions: ["d-colon", "d-pancreas", "d-renal", "d-mama"],
    lastReviewed: "2026-11-06",
    image: "/images/symptoms/cansancio-agotamiento-extremo.jpg",
    seo: {
      title: "Cansancio o Agotamiento Extremo | Dr. M. González",
      description: "Cuándo el cansancio persistente puede ser señal de alarma oncológica. Valoración con el Dr. Manuel González Reyes en CDMX.",
      keywords: ["cansancio extremo", "fatiga persistente", "señales de alarma cáncer", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "sy-peso",
    slug: "perdida-o-subida-de-peso",
    name: "Pérdida o Subida de Peso Inexplicable",
    colloquialNames: ["bajar de peso sin hacer dieta"],
    description:
      "La pérdida de peso no intencionada y significativa (más del 5% del peso corporal en pocos meses) sin cambios en la dieta o actividad física es una de las señales de alarma más consistentes en oncología, ya que múltiples tumores alteran el metabolismo del cuerpo incluso antes de causar otros síntomas evidentes.",
    causes: [
      "Procesos tumorales digestivos (estómago, páncreas, colon)",
      "Alteración del apetito secundaria a un tumor",
      "Aumento del gasto metabólico asociado al cáncer",
    ],
    alarmSigns: [
      "Pérdida de más del 5% del peso corporal en menos de 6 meses sin dieta",
      "Pérdida de peso acompañada de dolor abdominal o cambios digestivos",
      "Pérdida de peso con cansancio marcado o fiebre persistente",
    ],
    whyConsult:
      "Una pérdida de peso involuntaria sostenida, especialmente si se acompaña de cambios digestivos o cansancio, debe evaluarse pronto: es una de las banderas rojas que con más frecuencia lleva al diagnóstico de tumores digestivos en etapas tratables.",
    faqs: [
      {
        question: "¿Cuánta pérdida de peso se considera una señal de alarma?",
        answer:
          "En general, perder más del 5% del peso corporal total en un periodo de 6 a 12 meses sin cambios voluntarios en dieta o ejercicio se considera clínicamente relevante y amerita evaluación.",
      },
      {
        question: "¿La pérdida de peso siempre es por cáncer?",
        answer:
          "No, muchas causas no oncológicas (hipertiroidismo, diabetes, depresión) también la provocan. Pero amerita descartar un origen tumoral, especialmente si se acompaña de cambios digestivos.",
      },
    ],
    relatedConditions: ["d-colon", "d-pancreas", "d-estomago", "d-renal"],
    lastReviewed: "2026-11-06",
    image: "/images/symptoms/perdida-subida-de-peso.jpg",
    seo: {
      title: "Pérdida de Peso Inexplicable | Dr. M. González",
      description: "Cuándo la pérdida de peso sin causa aparente amerita evaluación oncológica. Dr. Manuel González Reyes, CDMX.",
      keywords: ["pérdida de peso inexplicable", "señales de alarma cáncer", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "sy-apetito",
    slug: "falta-de-apetito",
    name: "Falta de Apetito",
    colloquialNames: ["no tener hambre", "inapetencia"],
    description:
      "La pérdida sostenida del apetito, especialmente cuando se acompaña de saciedad temprana al comer poco, puede estar relacionada con tumores del tracto digestivo que alteran la capacidad gástrica o con cambios metabólicos generados por un proceso oncológico activo.",
    causes: [
      "Tumores gástricos o pancreáticos que alteran la digestión",
      "Cambios metabólicos asociados al cáncer",
      "Causas no oncológicas (gastritis, estrés, depresión)",
    ],
    alarmSigns: [
      "Falta de apetito sostenida por más de 2-3 semanas",
      "Falta de apetito con saciedad temprana al comer poco",
      "Falta de apetito acompañada de pérdida de peso o dolor abdominal",
    ],
    whyConsult:
      "Cuando la falta de apetito se prolonga y se acompaña de saciedad temprana o pérdida de peso, conviene descartar un origen digestivo oncológico mediante una valoración clínica dirigida.",
    faqs: [
      {
        question: "¿La falta de apetito por sí sola amerita estudios?",
        answer:
          "Si es breve y sin otros síntomas, generalmente no. Pero si se mantiene por varias semanas o se acompaña de pérdida de peso, cambios digestivos o cansancio, sí amerita evaluación médica dirigida.",
      },
      {
        question: "¿Qué estudios se realizan ante falta de apetito persistente?",
        answer:
          "Generalmente una valoración clínica inicial seguida de estudios de laboratorio y, si hay señales digestivas asociadas, endoscopía o estudios de imagen dirigidos.",
      },
    ],
    relatedConditions: ["d-colon", "d-pancreas", "d-estomago"],
    lastReviewed: "2026-11-06",
    image: "/images/symptoms/falta-de-apetito.jpg",
    seo: {
      title: "Falta de Apetito Persistente | Dr. M. González",
      description: "Cuándo la falta de apetito sostenida amerita valoración oncológica. Dr. Manuel González Reyes, CDMX.",
      keywords: ["falta de apetito", "inapetencia", "señales de alarma cáncer", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "sy-inflamacion",
    slug: "inflamacion-o-protuberancias",
    name: "Inflamación o Protuberancias",
    colloquialNames: ["bulto", "bolita", "ganglio inflamado"],
    description:
      "La aparición de una masa, bulto o inflamación nueva en el cuello, mama, abdomen o cualquier parte del cuerpo —especialmente si es de crecimiento progresivo, no dolorosa y persiste por más de 2-3 semanas— es una de las señales más directas que motiva una evaluación quirúrgica oncológica.",
    causes: [
      "Crecimiento tumoral localizado",
      "Ganglios linfáticos reactivos a un proceso tumoral cercano",
      "Causas benignas (quistes, lipomas, infecciones)",
    ],
    alarmSigns: [
      "Bulto o protuberancia de crecimiento progresivo en 2-4 semanas",
      "Bulto duro, fijo a tejidos profundos y no doloroso",
      "Bulto acompañado de pérdida de peso o cansancio",
      "Ganglios inflamados en cuello, axila o ingle que no se resuelven en 2-3 semanas",
    ],
    whyConsult:
      "No todo bulto es canceroso, pero cualquier masa nueva que crece de forma progresiva y persiste más de 2-3 semanas debe evaluarse con examen clínico y, de ser necesario, biopsia para descartar un origen oncológico.",
    faqs: [
      {
        question: "¿Cómo distinguir un ganglio normal de uno preocupante?",
        answer:
          "Un ganglio reactivo a una infección suele ser pequeño, móvil y doloroso, y se resuelve en 1-2 semanas. Un ganglio que crece, es duro, fijo y no doloroso, y persiste más de 3 semanas, amerita evaluación especializada.",
      },
      {
        question: "¿Todo bulto debe biopsiarse?",
        answer:
          "No, muchos bultos son benignos (quistes, lipomas) y se identifican por examen clínico o ultrasonido; la biopsia se reserva para los que generan sospecha de un origen tumoral.",
      },
    ],
    relatedConditions: ["d-tiroides", "d-mama", "d-cuello-uterino", "d-endometrio", "d-testiculos", "d-piel"],
    lastReviewed: "2026-11-06",
    image: "/images/symptoms/inflamacion-protuberancias.jpg",
    seo: {
      title: "Bultos o Inflamación Persistente | Dr. M. González",
      description: "Cuándo un bulto o inflamación nueva amerita evaluación oncológica. Dr. Manuel González Reyes, CDMX.",
      keywords: ["bulto", "protuberancia", "ganglio inflamado", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "sy-fiebre",
    slug: "fiebre",
    name: "Fiebre Persistente o Recurrente",
    colloquialNames: ["calentura que no se quita"],
    description:
      "La fiebre persistente o recurrente sin un foco infeccioso claro, sobre todo cuando se presenta junto con sudoraciones nocturnas y pérdida de peso, forma parte de los llamados síntomas B en oncología, asociados con mayor frecuencia a tumores hematológicos y, en algunos casos, a tumores sólidos avanzados.",
    causes: [
      "Respuesta inflamatoria del organismo a un proceso tumoral",
      "Infección secundaria asociada a un tumor",
      "Causas no oncológicas (infecciones virales o bacterianas comunes)",
    ],
    alarmSigns: [
      "Fiebre recurrente sin causa infecciosa identificada por más de 2 semanas",
      "Fiebre acompañada de sudoraciones nocturnas y pérdida de peso",
      "Fiebre con ganglios inflamados persistentes",
    ],
    whyConsult:
      "Una fiebre que se repite sin causa infecciosa clara, especialmente junto con sudoración nocturna y pérdida de peso, amerita estudios dirigidos para descartar un origen oncológico, no solo manejo sintomático.",
    faqs: [
      {
        question: "¿Qué diferencia una fiebre común de una fiebre de origen oncológico?",
        answer:
          "La fiebre común suele asociarse a un foco infeccioso identificable y resolverse en días. La fiebre de posible origen oncológico tiende a ser recurrente, sin foco claro, y se acompaña de otros síntomas como sudoración nocturna o pérdida de peso.",
      },
      {
        question: "¿Qué estudios se hacen ante fiebre persistente sin causa clara?",
        answer:
          "Se inicia con biometría hemática, marcadores inflamatorios y, según los hallazgos, estudios de imagen dirigidos para descartar un foco infeccioso oculto o un proceso tumoral.",
      },
    ],
    relatedConditions: ["d-pancreas", "d-estomago"],
    lastReviewed: "2026-11-06",
    image: "/images/symptoms/fiebre-persistente.jpg",
    seo: {
      title: "Fiebre Persistente sin Causa | Dr. M. González",
      description: "Cuándo la fiebre recurrente amerita evaluación oncológica. Dr. Manuel González Reyes, CDMX.",
      keywords: ["fiebre persistente", "fiebre recurrente", "señales de alarma cáncer", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "sy-sudoracion",
    slug: "sudoraciones-nocturnas",
    name: "Sudoraciones Nocturnas",
    colloquialNames: ["sudar mucho en la noche", "empapar la ropa de dormir"],
    description:
      "Las sudoraciones nocturnas intensas, suficientes para empapar la ropa o la ropa de cama, que se repiten varias noches a la semana sin relación con la temperatura ambiente, forman parte de los síntomas sistémicos que ameritan descartar un origen oncológico, especialmente cuando se asocian a fiebre o pérdida de peso.",
    causes: [
      "Respuesta sistémica a un proceso tumoral activo",
      "Causas no oncológicas (menopausia, infecciones, ciertos medicamentos)",
    ],
    alarmSigns: [
      "Sudoración nocturna que empapa la ropa varias noches por semana",
      "Sudoración nocturna acompañada de fiebre o pérdida de peso",
      "Sudoración nocturna persistente por más de 2-3 semanas",
    ],
    whyConsult:
      "Cuando las sudoraciones nocturnas son intensas, recurrentes y se acompañan de fiebre o pérdida de peso, forman parte de una tríada clínica relevante que debe evaluarse con estudios dirigidos.",
    faqs: [
      {
        question: "¿Las sudoraciones nocturnas siempre indican cáncer?",
        answer:
          "No, son más frecuentemente causadas por cambios hormonales (como la menopausia) o infecciones comunes. Sin embargo, si se repiten de forma intensa junto con fiebre o pérdida de peso, conviene descartar un origen oncológico.",
      },
      {
        question: "¿Cuándo preocuparse por sudoraciones nocturnas?",
        answer:
          "Cuando empapan la ropa de cama varias noches por semana y se acompañan de fiebre o pérdida de peso sin otra explicación; esa combinación amerita evaluación médica dirigida.",
      },
    ],
    relatedConditions: ["d-pancreas"],
    lastReviewed: "2026-11-06",
    image: "/images/symptoms/sudoraciones-nocturnas.jpg",
    seo: {
      title: "Sudoraciones Nocturnas Intensas | Dr. M. González",
      description: "Cuándo las sudoraciones nocturnas ameritan evaluación oncológica. Dr. Manuel González Reyes, CDMX.",
      keywords: ["sudoraciones nocturnas", "señales de alarma cáncer", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "sy-cabeza",
    slug: "dolores-de-cabeza",
    name: "Dolores de Cabeza Persistentes",
    colloquialNames: ["dolor de cabeza que no se quita"],
    description:
      "Los dolores de cabeza persistentes o de patrón nuevo, especialmente en personas sin antecedente de migraña, pueden ser una manifestación de procesos que afectan la presión intracraneal o, en el contexto oncológico, una señal a vigilar cuando se acompañan de otros síntomas sistémicos.",
    causes: [
      "Tensión muscular y estrés",
      "Causas vasculares o de presión intracraneal",
      "Síntoma sistémico asociado a un proceso oncológico en evaluación",
    ],
    alarmSigns: [
      "Dolor de cabeza de inicio reciente, distinto a los habituales, en mayores de 50 años",
      "Dolor de cabeza que empeora progresivamente en semanas",
      "Dolor de cabeza acompañado de alteraciones visuales o auditivas",
      "Dolor de cabeza que despierta por la noche o es peor al despertar",
    ],
    whyConsult:
      "Un dolor de cabeza de patrón nuevo y progresivo, sobre todo si se acompaña de cambios en la visión o audición, amerita una evaluación médica completa para identificar la causa de fondo.",
    faqs: [
      {
        question: "¿Cuándo un dolor de cabeza deja de ser algo común?",
        answer:
          "Cuando cambia de patrón respecto a los dolores habituales, empeora progresivamente, o se acompaña de síntomas neurológicos como alteraciones visuales, debilidad o confusión — ahí amerita evaluación médica sin demora.",
      },
      {
        question: "¿Un dolor de cabeza que despierta de noche es preocupante?",
        answer:
          "Sí, el dolor de cabeza que despierta al paciente de madrugada o es peor justo al despertar puede asociarse a cambios en la presión intracraneal y amerita evaluación dirigida.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-06",
    image: "/images/symptoms/dolores-de-cabeza.jpg",
    seo: {
      title: "Dolores de Cabeza Persistentes | Dr. M. González",
      description: "Cuándo un dolor de cabeza persistente amerita evaluación médica. Dr. Manuel González Reyes, CDMX.",
      keywords: ["dolor de cabeza persistente", "señales de alarma", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "sy-vision",
    slug: "problemas-de-vision",
    name: "Problemas de Visión",
    colloquialNames: ["visión borrosa", "ver doble"],
    description:
      "Los cambios visuales de aparición reciente —visión borrosa, pérdida de un campo visual o visión doble— no son un síntoma oncológico común por sí solos, pero cuando se presentan junto con dolor de cabeza progresivo u otros síntomas sistémicos, forman parte de la evaluación integral de ciertos procesos tumorales.",
    causes: [
      "Causas oftalmológicas comunes (error refractivo, fatiga visual)",
      "Causas neurológicas que requieren evaluación dirigida",
    ],
    alarmSigns: [
      "Pérdida súbita o progresiva de un campo visual",
      "Visión doble de aparición reciente",
      "Problemas de visión acompañados de dolor de cabeza intenso",
    ],
    whyConsult:
      "Un cambio visual nuevo y persistente, especialmente si se acompaña de dolor de cabeza u otros síntomas sistémicos, debe evaluarse para identificar su causa específica de forma oportuna.",
    faqs: [
      {
        question: "¿Todo problema de visión requiere ver a un oncólogo primero?",
        answer:
          "No, la mayoría de los problemas de visión tienen causas oftalmológicas comunes y deben evaluarse primero por oftalmología. Solo cuando se acompañan de otros síntomas sistémicos de alarma se integra una evaluación más amplia.",
      },
      {
        question: "¿Qué otros síntomas hacen que un cambio visual sea más preocupante?",
        answer:
          "Cuando se acompaña de dolor de cabeza progresivo, debilidad, confusión o pérdida de peso inexplicable; esa combinación amerita una evaluación médica integral y oportuna.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-06",
    image: "/images/symptoms/problemas-de-vision.jpg",
    seo: {
      title: "Problemas de Visión Persistentes | Dr. M. González",
      description: "Cuándo los cambios de visión ameritan evaluación médica integral. Dr. Manuel González Reyes, CDMX.",
      keywords: ["problemas de visión", "visión borrosa", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "sy-audicion",
    slug: "problemas-de-audicion",
    name: "Problemas de Audición",
    colloquialNames: ["pérdida de audición", "zumbido en el oído"],
    description:
      "La pérdida de audición de aparición reciente o unilateral (en un solo oído), especialmente cuando se acompaña de otros síntomas en cabeza y cuello, debe evaluarse de forma integral dentro de la consulta de cirugía oncológica de cabeza y cuello.",
    causes: [
      "Causas otológicas comunes (tapón de cerumen, infecciones)",
      "Afectación de estructuras de cabeza y cuello por un proceso tumoral cercano",
    ],
    alarmSigns: [
      "Pérdida de audición unilateral de aparición reciente",
      "Problemas de audición acompañados de bultos en el cuello",
      "Problemas de audición con dolor facial o parálisis facial asociada",
    ],
    whyConsult:
      "Una pérdida de audición unilateral persistente, sobre todo si se acompaña de otros síntomas en cabeza y cuello, debe evaluarse de forma integral para identificar su causa.",
    faqs: [
      {
        question: "¿Todo problema de audición amerita evaluación oncológica?",
        answer:
          "No, la gran mayoría tiene causas comunes como tapones de cerumen o infecciones del oído. La evaluación oncológica se integra cuando hay otros síntomas asociados en cabeza y cuello.",
      },
      {
        question: "¿Qué hace que una pérdida de audición sea más urgente de evaluar?",
        answer:
          "Cuando es unilateral, de aparición reciente y se acompaña de bultos en el cuello, dolor facial o parálisis facial; esa combinación amerita evaluación especializada pronta.",
      },
    ],
    relatedConditions: ["d-tiroides"],
    lastReviewed: "2026-11-06",
    image: "/images/symptoms/problemas-de-audicion.jpg",
    seo: {
      title: "Problemas de Audición Persistentes | Dr. M. González",
      description: "Cuándo los problemas de audición ameritan evaluación de cabeza y cuello. Dr. Manuel González Reyes, CDMX.",
      keywords: ["problemas de audición", "pérdida de audición", "cirujano oncólogo CDMX"],
    },
  },
  {
    id: "sy-garganta",
    slug: "tos-o-irritacion-de-garganta-persistente",
    name: "Tos o Irritación de Garganta que No Desaparece",
    colloquialNames: ["tos que no se quita", "garganta irritada constante"],
    description:
      "Una tos seca o irritación de garganta que persiste por más de 3-4 semanas sin relación con un resfriado o alergia conocida, especialmente en personas con antecedente de tabaquismo, debe evaluarse para descartar afectación de estructuras de cabeza, cuello o vía aérea.",
    causes: [
      "Irritación crónica de vías respiratorias altas",
      "Reflujo gastroesofágico",
      "Afectación de estructuras de cabeza y cuello por un proceso tumoral",
    ],
    alarmSigns: [
      "Tos o irritación de garganta persistente por más de 3-4 semanas",
      "Tos con cambios en la voz o ronquera persistente",
      "Tos con dificultad para tragar o sensación de cuerpo extraño en la garganta",
    ],
    whyConsult:
      "Una irritación de garganta o tos que no mejora después de varias semanas, especialmente si se acompaña de cambios en la voz o dificultad para tragar, amerita una evaluación de cabeza y cuello dirigida.",
    faqs: [
      {
        question: "¿Cuándo una tos persistente deja de ser un resfriado común?",
        answer:
          "Cuando se prolonga más de 3-4 semanas sin mejorar, no se relaciona con un cuadro gripal reciente, o se acompaña de cambios en la voz, dificultad para tragar o pérdida de peso.",
      },
      {
        question: "¿El tabaquismo aumenta el riesgo asociado a este síntoma?",
        answer:
          "Sí, el antecedente de tabaquismo aumenta la relevancia de una tos o irritación de garganta persistente y hace más pertinente una evaluación de cabeza y cuello dirigida.",
      },
    ],
    relatedConditions: ["d-tiroides"],
    lastReviewed: "2026-11-06",
    image: "/images/symptoms/tos-irritacion-garganta.jpg",
    seo: {
      title: "Tos o Irritación de Garganta | Dr. M. González",
      description: "Cuándo la tos o irritación de garganta persistente amerita evaluación de cabeza y cuello. Dr. Manuel González Reyes, CDMX.",
      keywords: ["tos persistente", "irritación de garganta", "cirujano oncólogo CDMX"],
    },
  },
];
