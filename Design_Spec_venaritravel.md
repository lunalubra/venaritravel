# Especificación de Diseño — venaritravel

Sistema visual de marca, en coherencia con el briefing estratégico aprobado: lujo discreto, herencia, atemporalidad, anclaje territorial español.

---

## 1. Principios fundacionales

Tres principios gobiernan cualquier decisión visual. Cuando una pieza, un copy o una elección de imagen no encaje con alguno de los tres, se reformula.

**Sustracción antes que ornamento.** La identidad comunica por lo que retira. Cada elemento que entra al sistema —una regla, un color, una imagen— debe ganarse el sitio. El sistema funciona en blanco y negro y con una sola tipografía.

**Materia antes que mensaje.** El cliente reconoce el lujo en el material, no en la promesa. Cuero, lana, papel, latón, madera oleada. La textura y el grano de la imagen hacen el trabajo que en otras marcas hace el copy. Cuando hay que escribir, se escribe poco y bien.

**Lugar antes que promesa.** La identidad está anclada en lugares concretos —dehesas, sierras, casonas, fincas— no en abstracciones de "lujo" o "exclusividad". El sitio no se vende a sí mismo: el lugar habla.

---

## 2. Paleta de colores

Sistema de cuatro colores de marca más dos neutros de texto.

| Nombre | HEX | RGB | Uso |
|---|---|---|---|
| Verde Loden | `#1F2A22` | 31, 42, 34 | Color primario. Superficies amplias, fondos, elementos estructurales. |
| Hueso | `#F1E9D6` | 241, 233, 214 | Papel y respiración. Fondos editoriales, espacios negativos. |
| Cordobán | `#5C2A1E` | 92, 42, 30 | Acento cálido. Detalles, hover states, marcadores editoriales. |
| Pajizo | `#B8945A` | 184, 148, 90 | Acento secundario, uso muy limitado. Filetes, líneas de detalle, separadores. |
| Tinta | `#1A1815` | 26, 24, 21 | Texto principal. Negro cálido, no negro puro. |
| Piedra | `#6E6961` | 110, 105, 97 | Texto secundario, captions, metadatos. |

Inspiración material: la chaqueta de caza loden, el libro encuadernado en piel verde, la dehesa al atardecer, el cordobán del calzado clásico, los campos de cereal castellanos en agosto.

### Pautas de uso

- **Distribución 60-30-10.** El 60% de cualquier composición pertenece al Verde Loden, el 30% al Hueso, y el 10% restante se reparte entre Cordobán y Pajizo. El Pajizo nunca supera el 3-4% del total.
- **Nada de color puro.** No usar negro #000, no usar blanco #FFF. Tinta y Hueso sustituyen a ambos.
- **Web y digital.** Comprobar contraste WCAG AA mínimo en toda combinación texto/fondo. Tinta sobre Hueso pasa AAA. Hueso sobre Loden pasa AAA. Pajizo y Cordobán nunca como color de texto sobre fondos claros.
- **Print.** Equivalente Pantone Solid Coated y conversión CMYK calibrada al tipo de papel.

---

## 3. Tipografía

Pareja única, accesible vía Google Fonts.

### Cormorant Garamond + Proza Libre

- **Cormorant Garamond** para titulares, citas y elementos editoriales. Es una revisión más expresiva del Garamond clásico, diseñada específicamente para uso display. Aporta peso editorial sin perder elegancia.
- **Proza Libre** para cuerpo de texto y UI. Sans-serif humanista diseñada para lectura en pantalla, con buen ritmo a tamaños pequeños y todas las variantes (regular, italic, bold, bold italic).

Las sans humanistas funcionan especialmente bien con serifs Old Style: comparten cualidad caligráfica. Cormorant da el peso editorial-display y Proza Libre aguanta sin competir.

### Sistema de jerarquía

| Rol | Familia | Tamaño base (web) | Peso | Uso |
|---|---|---|---|---|
| Display | Cormorant Garamond | 56-72px | Regular | Titulares de hero, números editoriales. |
| H1 | Cormorant Garamond | 40-48px | Regular | Encabezados principales de sección. |
| H2 | Cormorant Garamond | 28-32px | Regular | Subsecciones. |
| H3 | Proza Libre | 18-20px | Medium | Etiquetas estructurales, capítulos. |
| Body | Proza Libre | 16-17px | Regular | Texto corrido. |
| Caption | Proza Libre | 13-14px | Regular | Pies de foto, metadatos. |
| Eyebrow | Proza Libre | 11-12px | Medium | Etiquetas previas a un titular, navegación secundaria. Letterspacing positivo (0.06-0.08em). |

La jerarquía descansa más en el contraste de tamaño y en el espacio en blanco que en el peso tipográfico: un solo peso por familia siempre que sea posible. Tamaños indicativos para web; en print se reescala manteniendo proporciones relativas.

---

## 4. Imaginería y fotografía

### Dirección general

Documental editorial. Filmica, lenta, contemplativa. Luz natural, con preferencia por luz baja (amanecer, atardecer, niebla, interiores en penumbra). Composiciones que respiran: el sujeto rara vez ocupa el centro, casi nunca llena el encuadre. Color desaturado, sombras cálidas. La textura del grano se preserva.

### Categorías de imagen

Cinco familias temáticas, cada una con su vocabulario y atributos definitorios.

**Paisaje.** El protagonista es el territorio, no el cazador.
- ES: *dehesa, encinas, monte mediterráneo, sierra al amanecer, campo castellano niebla, paisaje extremadura*
- EN: *dehesa, oak savanna, mediterranean countryside, mountain fog dawn, winter pasture, spanish countryside*
- Atributos: orientación horizontal, sin personas, luz baja, color desaturado.
- Ejemplo: amanecer con bruma sobre encinar; sierra a media distancia.

**Detalle de material.** Primer plano, luz lateral, fondo difuminado.
- ES: *cuero curtido, manos enguantadas, cartuchos en hilera, escopeta detalle, lana tweed, madera oleada*
- EN: *leather gloves close up, tweed jacket detail, shotgun cartridges row, oiled wood texture, brass detail, leather case*
- Atributos: macro o primer plano, profundidad de campo reducida, sin estudio, sin fondo blanco.
- Ejemplo: mano con guante de piel cargando; cartuchos en hilera sobre mesa de madera; etiqueta cosida en chaqueta de tweed.

**Arquitectura e interiores.** Vividos, no escenificados.
- ES: *casona andaluza interior, salón rural, comedor finca, biblioteca campo, chimenea encendida casa de campo*
- EN: *spanish country house interior, rustic estate dining room, country library natural light, manor house fireplace, hunting lodge interior*
- Atributos: luz natural, sin "twilight" exagerado, sin staging tipo Airbnb.
- Ejemplo: comedor con luz lateral entrando por ventanal; biblioteca con sillón de cuero al atardecer.

**Acción.** Sugerida, no documentada con detalle.
- ES: *cazador de espalda campo, silueta amanecer, perro de muestra, rehala*
- EN: *hunter walking field back view, person silhouette dawn, pointer dog working, gun dog spaniel, shooting party silhouette*
- Atributos: sujeto de espalda o en silueta, sin caras visibles, sin armas en primer plano.
- Ejemplo: figura caminando por dehesa al amanecer; perro de muestra trabajando entre la hierba alta; silueta contra el cielo.

**Retrato editorial.** Ocasional. Cuando aparezca, parcial.
- ES: *manos sosteniendo, perfil cortado, figura ambiente*
- EN: *hands holding leather, gloved hands detail, partial portrait country, contextual figure*
- Atributos: manos, perfil, espalda; cara nunca de frente; siempre integrado al entorno.
- Ejemplo: detalle de manos limpiando una escopeta; perfil contra ventana; figura junto a chimenea.

### Tratamiento de color

Ligeramente desaturado, sin llegar a monocromo. Sombras tirando a cálido (ámbar/cordobán), altas con leve cast verde-azulado. Sin HDR. Sin contraste exagerado. Negros con detalle, no aplastados. Si una imagen necesita un filtro reconocible para "funcionar", está mal capturada y se descarta. En postproducción, ajuste fino de exposición y balance, nada más.

### Lo que descartamos sistemáticamente

Cualquier imagen que tenga alguna de estas propiedades:

- Animales muertos como sujeto principal.
- Trofeos colgados en pared como recurso visual (pueden aparecer en contexto editorial; nunca como portada o hero).
- Sangre, escenas de cobro, muerte explícita.
- Estética bright o saturada de marcas outdoor americanas.
- Camuflajes, naranja fluorescente, equipo táctico moderno.
- Estética influencer, lifestyle de Instagram, group selfies.
- Fotografía con dron que evoque vídeo promocional inmobiliario o turístico.
- Sonrisas a cámara, *guests laughing*, group shots posados.
- Filtros vintage exagerados, sepia, blanco y negro no justificado.
- Logos visibles en ropa o equipo (Beretta, Filson, Barbour, etc.).
- *Creative collections* genéricas con modelos posando.

### Referencias visuales

No para copiar, sino para tener en la cabeza al evaluar resultados.

- **Holland & Holland**, campañas editoriales de los últimos diez años — luz, encuadre, gestión del frío y la humedad.
- **Loewe**, vídeos de documentación de oficio (serie del Craft Prize) — atención al detalle de material, manos trabajando.
- **FT — How To Spend It**, fotografía editorial — composición, blanco, ritmo de página.
- **Aman Resorts**, fotografía de destino — discreción extrema, ausencia de protagonismo del cliente.
- **Bryan Schutmaat**, fotógrafo americano de paisaje — atmósfera de montaña, luz baja.
- **Joel Meyerowitz**, especialmente *Cape Light* — luz natural, color desaturado pero rico.
- **The Field** y **Gentleman's Journal** (UK) — fotografía de country sports tradicional.

---

## 5. Texturas y patrones

La marca no usa patrones literales. Nada de azulejos andaluces, nada de wallpapers repetidos, nada de motivos heráldicos. La textura proviene del material y se aplica con sutileza:

- **Grano y fibra como textura.** El cuero cordobán, el tweed, el papel verjurado, la veta de la madera oleada aparecen en fotografía y, ocasionalmente, como fondo sutil de bloques editoriales (overlay 5-10%).
- **Filetes hairline.** Reglas de 0.5-1px en Tinta o Piedra para enmarcar bloques editoriales y separar secciones. Sin filetes decorativos.
- **Cero efectos digitales.** Sin sombras, sin gradientes, sin glow, sin blur. Lo plano y lo material son aliados.
- **Papel en print.** Papeles con textura natural (Fedrigoni Materica, Old Mill, Arena, Constellation). Tintas planas. Acabados sin brillos, salvo gofrado o stamping puntual.
