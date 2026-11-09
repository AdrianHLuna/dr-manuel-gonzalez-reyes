import type { DoctorProfile } from "@/types/schema";

// Datos reales del intake (2026-11-06). Sin fabricar nada no entregado:
// COFEPRIS, pacientes atendidos y testimonios de texto quedan PENDIENTE —
// no inventados. El doctor atiende en 3 sedes hospitalarias reales
// distintas (ver `locations`); `address`/`googleMapsUrl` top-level reflejan
// la sede principal (San Ángel Inn Universidad, la primera dada en el
// intake) para no romper componentes que ya leen esos campos directo.
export const doctor: DoctorProfile = {
  name: "Manuel González Reyes",
  title: "Dr.",
  specialty: "Cirugía General",
  specialistTitle: "Cirujano Oncólogo",
  subspecialty: "Cirugía Oncológica Adultos",
  // Alta especialidad (no tiene campo propio en el schema — se incorpora a
  // specialistTitle/bio en vez de perderse).
  cedula: "4032869",
  cedulaInstitucion: "U. de Colima",
  cedulaEspecialidad: "6820857",
  cedulaEspecialidadInstitucion: "U. de Guadalajara",
  cedulaSubespecialidad: "7237058",
  cedulaSubespecialidadInstitucion: "UNAM",
  // Sin folio COFEPRIS confirmado todavía — se deja vacío (formatCredentials
  // muestra "En trámite" automáticamente, nunca se omite el segmento).
  cofepris: "",
  phone: "+525555489462",
  whatsapp: "+525555489462",
  // Línea de urgencias real, distinta del teléfono de citas.
  emergencyPhone: "+525537630950",
  email: "drglezreyesm@gmail.com",
  address:
    "Avenida Río Churubusco #601, interior 545, entre Avenida Universidad y Calle Mayorazgo, Colonia Xoco, C.P. 03330, Alcaldía Benito Juárez, Ciudad de México",
  city: "Ciudad de México",
  state: "Ciudad de México",
  country: "México",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Avenida+R%C3%ADo+Churubusco+601+Colonia+Xoco+Benito+Ju%C3%A1rez+Ciudad+de+M%C3%A9xico",
  locations: [
    {
      name: "Hospital San Ángel Inn Universidad",
      address:
        "Avenida Río Churubusco #601, interior 545, entre Avenida Universidad y Calle Mayorazgo, Colonia Xoco, C.P. 03330, Alcaldía Benito Juárez, Ciudad de México",
      phone: "+525558732176",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Hospital+San+%C3%81ngel+Inn+Universidad+Avenida+R%C3%ADo+Churubusco+601+Ciudad+de+M%C3%A9xico",
    },
    {
      name: "Hospital Star Médica Lunaparc",
      address:
        "Avenida 1 de Mayo Mz. C, interior 1007, entre Avenida Constitución y Avenida Huixquilucan, Colonia Centro Urbano, C.P. 54700, Cuautitlán Izcalli, Estado de México",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Hospital+Star+M%C3%A9dica+Lunaparc+Avenida+1+de+Mayo+Cuautitl%C3%A1n+Izcalli",
    },
    {
      name: "Hospital Ángeles Roma",
      address:
        "Calle Querétaro #58, consultorio 308, piso 3, Colonia Roma Norte, C.P. 06700, Alcaldía Cuauhtémoc, Ciudad de México",
      phone: "+525592134831",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Hospital+%C3%81ngeles+Roma+Calle+Quer%C3%A9taro+58+Ciudad+de+M%C3%A9xico",
    },
  ],
  consultationPrice: 1500,
  paymentMethods: [
    "Efectivo",
    "Transferencia",
    "Tarjeta de débito",
    "Tarjeta de crédito (Visa, MasterCard, American Express)",
    "Pagos móviles NFC (Apple Pay / Google Pay)",
    "Cheques",
    "Seguros médicos",
  ],
  insurances: ["Pago por tabulador — acepta seguros médicos (consultar aseguradora con el consultorio)"],
  schedule: "Lunes, miércoles y viernes de 17:00 a 20:00 horas",
  openingHours: ["Mo,We,Fr 17:00-20:00"],
  acceptingNewPatients: true,
  photo: "/doctor-placeholder.jpg",
  bio: "El Dr. Manuel González Reyes es cirujano general con subespecialidad en Cirugía Oncológica de Adultos y alta especialidad en Cirugía de Cabeza, Cuello y Piel. Con más de 11 años de experiencia y más de 10,000 procedimientos realizados, atiende en tres sedes hospitalarias en la Ciudad de México y el Estado de México: Hospital San Ángel Inn Universidad, Hospital Star Médica Lunaparc y Hospital Ángeles Roma. Su práctica abarca el diagnóstico y tratamiento quirúrgico de cáncer gastrointestinal, mamario, de cabeza y cuello, y de piel, con un enfoque en cirugía mínimamente invasiva cuando es clínicamente apropiado.",
  philosophy:
    "Un diagnóstico oncológico preciso y una cirugía bien planeada empiezan por escuchar al paciente y explicarle cada paso con claridad, sin tecnicismos que generen más incertidumbre.",
  experience: [],
  stats: [
    { label: "Pacientes Atendidos", value: "—" },
    { label: "Procedimientos Realizados", value: "+10,000" },
    { label: "Años de Experiencia", value: "+11" },
  ],
  certifications: [
    { name: "Consejo Mexicano de Oncología (CMO)", institution: "CMO" },
    { name: "Society of Surgical Oncology (SSO, USA)", institution: "SSO" },
  ],
  education: [
    { degree: "Médico Cirujano y Partero", institution: "Universidad de Colima" },
    { degree: "Especialidad en Cirugía General", institution: "Universidad de Guadalajara" },
    { degree: "Subespecialidad en Cirugía Oncológica Adultos", institution: "Universidad Nacional Autónoma de México" },
  ],
  sameAs: [
    "https://www.facebook.com/drmanuelglez",
    "https://www.instagram.com/oncologiacdmx/",
    "https://g.page/r/CZUwOqlkO7VoEBM/",
  ],
  ga4Id: undefined,
};
