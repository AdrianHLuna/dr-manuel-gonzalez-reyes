# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dr. Manuel González Reyes — Cirugía General / Cirugía Oncológica
**Ciudad:** Ciudad de México
**Especialidad:** Cirujano Oncólogo (Cirugía Oncológica Adultos, Alta Especialidad en Cabeza, Cuello y Piel)

**Nota de discreción clínica:** el catálogo incluye diagnósticos oncológicos de alta sensibilidad. Todos los prompts están redactados para verse **clínicos y editoriales, nunca gráficos, alarmantes ni explícitos**: diagramas anatómicos esquemáticos de corte/sección, equipo e instrumental quirúrgico ordenado, fotografía clínica discreta de exploración o consulta — nunca tumores expuestos, cirugía en proceso, sangre ni tejido explícito.

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/...jpg`).

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud y sitios web de Cirugía Oncológica de alta gama.
Tono: Preciso, sobrio y de autoridad clínica — editorial y confiable, nunca alarmante ni gráfico.
Estilo: Renders 3D anatómicos esquemáticos (órganos, tumores representados de forma abstracta/no explícita) para enfermedades; fotografía clínica de instrumental quirúrgico y equipo de diagnóstico ordenado para procedimientos; fotografía de escenas cotidianas de paciente con iluminación natural suave para síntomas.
Identidad visual OBLIGATORIA (paleta real de marca del doctor): azul pizarra oscuro (#314557) y azul medio (#445A8B) como acentos principales, navy secundario (#222D46) de apoyo, neutros cálidos (#988369, #C1B5A5) como detalle — fondo dominante blanco cálido (#FBFAF8), nunca blanco frío ni negro total.
Restricciones: Cero nombres de medicamentos/quimioterapias visibles. Cero logotipos de marcas comerciales. Cero rostros de pacientes reales o reconocibles. Cero texto superpuesto en la imagen. Cero tumores expuestos, cirugía en proceso, sangre o tejido explícito — usar diagramas esquemáticos, instrumental ordenado o encuadres discretos en su lugar. Prohibidos hologramas, neones, HUDs interactivos o elementos de ciencia ficción.
Formato: JPG horizontal de aspecto 16:10 (--ar 16:10 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Clean, bright, warm editorial lighting — soft natural light or elegant studio light, never dark/moody.
- Color Palette: Slate Blue (#314557), Medium Blue (#445A8B), Navy (#222D46), warm neutrals (#988369, #C1B5A5), warm white (#FBFAF8).
- Composition: Centered, calm, editorial framing with generous negative space — precise and professional, never cluttered or alarming.
- Suffixes: realistic medical CGI or high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
- Negative Prompt: hologram, sci-fi, futuristic, neon, glowing digital UI, hud, text, words, letters, watermark, signature, exposed tumor, surgery in progress, excessive blood, gore, dark background.

Estas son instrucciones, no hagas imágenes todavía.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES

### 1. Cáncer de Colon (`public/images/diseases/cancer-de-colon.jpg`)
```text
Render 3D anatómico esquemático de un corte transversal del colon mostrando una masa polipoide localizada, estilo educativo de libro de texto médico, sin detalle gráfico.

Lighting: Soft warm studio lighting, clean highlight on the anatomical structure.
Color Palette: Slate blue (#314557) outline details, medium blue (#445A8B) accent, warm white (#FBFAF8) background, muted organic tissue tones.
Composition: Centered cross-section, macro framing, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore, graphic tumor detail.
```

### 2. Cáncer de Tiroides (`public/images/diseases/cancer-de-tiroides.jpg`)
```text
Render 3D anatómico esquemático de la glándula tiroides en la región cervical anterior, mostrando un nódulo discreto, estilo educativo limpio.

Lighting: Soft clinical studio lighting.
Color Palette: Slate blue (#314557) and medium blue (#445A8B) anatomical tones, warm white background.
Composition: Centered neck/thyroid cross-section, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 3. Cáncer de Mama (`public/images/diseases/cancer-de-mama.jpg`)
```text
Render 3D anatómico esquemático del tejido mamario mostrando una zona de densidad irregular, estilo educativo discreto y no explícito.

Lighting: Soft warm studio lighting.
Color Palette: Slate blue (#314557) outline, medium blue (#445A8B) accent, warm white background.
Composition: Centered schematic cross-section, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, nudity, graphic detail.
```

### 4. Cáncer de Cuello Uterino (`public/images/diseases/cancer-de-cuello-uterino.jpg`)
```text
Render 3D anatómico esquemático del aparato reproductor femenino con enfoque en el cuello uterino, estilo educativo de libro de texto, nunca explícito.

Lighting: Soft clinical studio lighting.
Color Palette: Slate blue (#314557) and medium blue (#445A8B), warm white background.
Composition: Centered anatomical diagram, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, nudity, graphic detail.
```

### 5. Cáncer de Páncreas (`public/images/diseases/cancer-de-pancreas.jpg`)
```text
Render 3D anatómico esquemático del páncreas y órganos adyacentes, mostrando una masa localizada, estilo educativo limpio.

Lighting: Soft warm studio lighting.
Color Palette: Slate blue (#314557) outline, warm neutral (#988369) accent, warm white background.
Composition: Centered abdominal cross-section, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 6. Cáncer de Endometrio (`public/images/diseases/cancer-de-endometrio.jpg`)
```text
Render 3D anatómico esquemático del útero mostrando engrosamiento endometrial irregular, estilo educativo discreto.

Lighting: Soft clinical studio lighting.
Color Palette: Slate blue (#314557) and medium blue (#445A8B), warm white background.
Composition: Centered anatomical cross-section, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, nudity, graphic detail.
```

### 7. Cáncer de Testículo (`public/images/diseases/cancer-de-testiculo.jpg`)
```text
Render 3D anatómico esquemático del aparato reproductor masculino con enfoque discreto en el testículo, estilo educativo de libro de texto, nunca explícito.

Lighting: Soft clinical studio lighting.
Color Palette: Slate blue (#314557) and medium blue (#445A8B), warm white background.
Composition: Centered schematic diagram, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, nudity, graphic detail.
```

### 8. Cáncer de Estómago (`public/images/diseases/cancer-de-estomago.jpg`)
```text
Render 3D anatómico esquemático del estómago mostrando una lesión localizada en la mucosa, estilo educativo limpio.

Lighting: Soft warm studio lighting.
Color Palette: Slate blue (#314557) outline, medium blue (#445A8B) accent, warm white background.
Composition: Centered cross-section, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 9. Cáncer Renal (`public/images/diseases/cancer-renal.jpg`)
```text
Render 3D anatómico esquemático del riñón mostrando una masa localizada en el parénquima renal, estilo educativo discreto.

Lighting: Soft clinical studio lighting.
Color Palette: Slate blue (#314557) and medium blue (#445A8B), warm white background.
Composition: Centered anatomical cross-section, generous negative space.
Suffixes: realistic medical CGI, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 10. Cáncer de Piel (Melanoma y No Melanoma) (`public/images/diseases/cancer-de-piel.jpg`)
```text
Primer plano discreto de la piel de un antebrazo con un dermatoscopio siendo utilizado por un profesional con guantes, enfoque en la exploración clínica, sin mostrar lesión explícita.

Lighting: Soft natural clinic light.
Color Palette: Slate blue (#314557) accent on dermatoscope, natural skin tones, warm white background.
Composition: Macro framing on exam, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, graphic lesion detail, blood.
```

---

## 🔧 SECCIÓN 2: PROMPTS PARA SERVICIOS Y PROCEDIMIENTOS

### 1. Cirugía Gastrointestinal (`public/images/services/cirugia-gastrointestinal.jpg`)
```text
Instrumental quirúrgico laparoscópico ordenado sobre una mesa estéril en una sala quirúrgica limpia y bien iluminada, sin mostrar al paciente.

Lighting: Bright clean surgical suite lighting.
Color Palette: Steel instrument tones, slate blue (#314557) and medium blue (#445A8B) sterile drape accents.
Composition: Top-down or angled shot of organized instruments, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore, patient face.
```

### 2. Cirugía Mamaria (`public/images/services/cirugia-mamaria.jpg`)
```text
Equipo e instrumental quirúrgico mínimamente invasivo ordenado sobre una mesa estéril, tonos azul-slate.

Lighting: Bright clean surgical lighting.
Color Palette: Steel instrument tones, slate blue (#314557)/medium blue (#445A8B) sterile accents.
Composition: Angled shot of organized instruments, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 3. Cirugía Oncológica Mínimamente Invasiva (`public/images/services/cirugia-minimamente-invasiva.jpg`)
```text
Equipo de laparoscopia (monitor, cámara, torre quirúrgica) en una sala quirúrgica limpia y moderna, sin mostrar al paciente.

Lighting: Bright clean surgical suite lighting.
Color Palette: White/steel surgical tones, slate blue (#314557) and medium blue (#445A8B) monitor accents.
Composition: Wide shot of equipment, no patient visible, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore, patient face.
```

### 4. Cirugía Oncológica de Cabeza y Cuello (`public/images/services/cirugia-cabeza-cuello.jpg`)
```text
Médico con bata blanca examinando la región cervical de un paciente con guantes, enfoque en la exploración física profesional, sin mostrar rostro.

Lighting: Soft clinical studio lighting.
Color Palette: Slate blue (#314557) accent on scrubs/gloves, neutral skin tones, warm white background.
Composition: Mid-shot on neck exam, no face visible, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 5. Cirugía Pancreática (`public/images/services/cirugia-pancreatica.jpg`)
```text
Instrumental quirúrgico especializado ordenado sobre una bandeja estéril, ambiente de sala de procedimientos limpio.

Lighting: Clean bright clinical lighting.
Color Palette: Steel tray tones, slate blue (#314557) accent linen, warm white background.
Composition: Top-down shot of organized instruments, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 6. Cirugía Esofagogástrica (`public/images/services/cirugia-esofagogastrica.jpg`)
```text
Equipo de endoscopia digestiva (monitor, torre) en una sala de procedimientos clínica limpia, sin mostrar al paciente.

Lighting: Bright clean clinical lighting.
Color Palette: White/steel tones, slate blue (#314557) and medium blue (#445A8B) monitor accents.
Composition: Wide shot of equipment, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore, patient face.
```

### 7. Biopsias por Laparoscopía y Toracoscopia (`public/images/services/biopsias-laparoscopia-toracoscopia.jpg`)
```text
Instrumental de biopsia mínimamente invasiva ordenado sobre una bandeja estéril, ambiente de sala de procedimientos.

Lighting: Clean bright clinical lighting.
Color Palette: Steel tray tones, slate blue (#314557) accent linen, warm white background.
Composition: Top-down shot of organized instruments, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 8. Biopsias Ganglionares (`public/images/services/biopsias-ganglionares.jpg`)
```text
Jeringa clínica y gasa sobre una bandeja de instrumental estéril, sin mostrar aguja insertada en piel.

Lighting: Clean bright clinical lighting.
Color Palette: Steel tray tones, slate blue (#314557) accent linen, warm white background.
Composition: Macro framing on tray and instruments, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, needle in skin, blood.
```

### 9. Colocación de Catéteres para Quimioterapia (`public/images/services/cateteres-quimioterapia.jpg`)
```text
Equipo médico y material estéril para colocación de catéter venoso central ordenado sobre una bandeja clínica, ambiente limpio.

Lighting: Clean bright clinical lighting.
Color Palette: Steel/white tray tones, slate blue (#314557) accent, warm white background.
Composition: Top-down shot of organized equipment, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, needle in skin, blood.
```

### 10. Ablación de Tumores (`public/images/services/ablacion-de-tumores.jpg`)
```text
Equipo de ablación guiada por imagen (monitor, consola) en una sala de procedimientos limpia y moderna, sin mostrar al paciente.

Lighting: Bright clean clinical lighting.
Color Palette: White/steel tones, slate blue (#314557) and medium blue (#445A8B) monitor accents.
Composition: Wide shot of equipment, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore, patient face.
```

### 11. Ablación por Microondas (`public/images/services/ablacion-por-microondas.jpg`)
```text
Consola de ablación por microondas y electrodo sobre una bandeja estéril, ambiente de sala de procedimientos limpio.

Lighting: Clean bright clinical lighting.
Color Palette: Steel/white console tones, slate blue (#314557) accent, warm white background.
Composition: Angled shot of equipment, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 12. Ablación por Radiofrecuencia (`public/images/services/ablacion-por-radiofrecuencia.jpg`)
```text
Consola de radiofrecuencia y electrodo sobre una bandeja estéril, ambiente de sala de procedimientos limpio.

Lighting: Clean bright clinical lighting.
Color Palette: Steel/white console tones, medium blue (#445A8B) accent, warm white background.
Composition: Angled shot of equipment, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

---

## ⚠️ SECCIÓN 3: PROMPTS PARA SÍNTOMAS

### 1. Cansancio o Agotamiento Extremo (`public/images/symptoms/cansancio-agotamiento-extremo.jpg`)
```text
Persona adulta sentada con los ojos cerrados y la mano en la frente, en un entorno doméstico cálido, sin mostrar rostro completo.

Lighting: Soft warm natural indoor light.
Color Palette: Neutral warm tones, slate blue (#314557) accent in background decor.
Composition: Mid-shot, face partially obscured, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature.
```

### 2. Pérdida o Subida de Peso Inexplicable (`public/images/symptoms/perdida-subida-de-peso.jpg`)
```text
Báscula clínica en un consultorio médico limpio, con una bata de doctor desenfocada al fondo, sin mostrar a ninguna persona.

Lighting: Soft clinical studio lighting.
Color Palette: Neutral tones, slate blue (#314557) accent nearby, warm white background.
Composition: Macro framing on scale, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature.
```

### 3. Falta de Apetito (`public/images/symptoms/falta-de-apetito.jpg`)
```text
Plato de comida apenas tocado sobre una mesa, persona desenfocada al fondo sin mostrar rostro.

Lighting: Soft natural indoor light.
Color Palette: Warm neutral tones, slate blue (#314557) accent in background.
Composition: Macro framing on plate, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature.
```

### 4. Inflamación o Protuberancias (`public/images/symptoms/inflamacion-protuberancias.jpg`)
```text
Médico con guantes examinando discretamente el cuello de un paciente, enfoque en la exploración física, sin mostrar rostro.

Lighting: Soft clinical studio lighting.
Color Palette: Slate blue (#314557) accent on gloves, neutral skin tones, warm white background.
Composition: Mid-shot on neck exam, no face visible, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, visible mass.
```

### 5. Fiebre Persistente o Recurrente (`public/images/symptoms/fiebre-persistente.jpg`)
```text
Termómetro digital clínico sobre una mesa de noche junto a un vaso de agua, ambiente doméstico cálido y tenue.

Lighting: Soft warm ambient indoor light.
Color Palette: Warm neutral tones, slate blue (#314557) accent nearby.
Composition: Macro framing on thermometer, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature.
```

### 6. Sudoraciones Nocturnas (`public/images/symptoms/sudoraciones-nocturnas.jpg`)
```text
Persona sentada al borde de la cama de noche, luz tenue de lámpara, sin mostrar rostro.

Lighting: Soft dim nighttime ambient light, warm lamp glow.
Color Palette: Muted warm tones, slate blue (#314557) accent in bedroom decor.
Composition: Mid-shot from behind or side, no face visible, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature.
```

### 7. Dolores de Cabeza Persistentes (`public/images/symptoms/dolores-de-cabeza.jpg`)
```text
Persona adulta sosteniéndose las sienes sentada en un escritorio, sin mostrar rostro completo, luz natural suave.

Lighting: Soft natural indoor light.
Color Palette: Neutral tones, slate blue (#314557) accent in background.
Composition: Mid-shot, face partially obscured, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature.
```

### 8. Problemas de Visión (`public/images/symptoms/problemas-de-vision.jpg`)
```text
Persona ajustando sus anteojos frente a una pantalla, encuadre discreto sin mostrar rostro completo, luz natural de oficina.

Lighting: Soft natural indoor light.
Color Palette: Neutral tones, slate blue (#314557) accent nearby.
Composition: Mid-shot, face partially obscured, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature.
```

### 9. Problemas de Audición (`public/images/symptoms/problemas-de-audicion.jpg`)
```text
Primer plano discreto de una mano cerca del oído en gesto de dificultad para escuchar, fondo clínico neutro.

Lighting: Soft clinical studio lighting.
Color Palette: Natural skin tones, slate blue (#314557) accent nearby, warm white background.
Composition: Macro framing, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature.
```

### 10. Tos o Irritación de Garganta que No Desaparece (`public/images/symptoms/tos-irritacion-garganta.jpg`)
```text
Persona adulta cubriéndose la boca al toser, encuadre discreto desde el torso sin mostrar rostro completo, luz natural suave.

Lighting: Soft natural indoor light.
Color Palette: Neutral tones, slate blue (#314557) accent in background.
Composition: Mid-shot, face partially obscured, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature.
```
