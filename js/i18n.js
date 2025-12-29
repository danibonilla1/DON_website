// i18n.js - Language Toggle System (con traducciones embebidas para evitar CORS)

// Traducciones en español embebidas
var spanishTranslations = {
  "logo": "Diario de una Oveja Negra",
  "nav.home": "Inicio",
  "nav.story": "Historia",
  "nav.essence": "Esencia",
  "nav.preorder": "Reserva",
  "hero.title": "Diario de una Oveja Negra",
  "hero.subtitle": "Un viaje a lo más profundo de la esencia humana",
  "hero.author": "por Dani Bonilla",
  "hero.cta": "Únete al viaje",
  "hero.hook": "Para aquellos que nunca encajaron realmente.",
  "book.spine": "DIARIO DE UNA OVEJA NEGRA",
  "book.inner.title": "Un homenaje<br>a los inadaptados",
  "book.inner.author": "por Dani Bonilla",
  "book.back.quote": "\"Estas páginas contienen las reflexiones más íntimas de un alma que eligió caminar su propio camino, incluso cuando dolía.\"",
  "page.intro.title": "Introducción",
  "page.intro.p1": "Mi nombre es Leín, y durante mucho tiempo me he sentido como una oveja negra. Ya sabes: el diferente, el raro, nunca encajando realmente en lo que otros llaman \"normal\".",
  "page.intro.p2": "Durante muchos años no entendí realmente por qué, pero quizás el mejor lugar para empezar es la forma en que llegué a este mundo...",
  "book.backinner.quote1": "\"Un viaje introspectivo que desafía las convenciones sociales y celebra la belleza de ser diferente. Bonilla nos regala una obra honesta y conmovedora que resonará con cualquiera que alguna vez se haya sentido fuera de lugar.\"",
  "book.backinner.critic": "— Crítico literario",
  "book.backinner.reader1": "\"Por primera vez, me sentí visto.\"<br>— Lector",
  "book.backinner.reader2": "\"Este libro transformó mi dolor en esperanza.\"<br>— Anónimo",
  "book.backouter.text": "\"Una exploración cruda y honesta de la identidad humana.\"",
  "book.ethereal": "El comienzo de una gran aventura",
  "story.title": "Comienzos de la Historia",
  "story.loading": "Cargando...",
  "story.step1.number": "De repente...",
  "story.step1.title": "Todo se Desmorona",
  "story.step1.desc": "Una infancia hermosa se convierte en pesadilla tras el colapso repentino. Ahora, debe buscar refugio y una sensación de seguridad en un mundo nuevo y desconocido.",
  "story.step1.quote": "\"De un momento al siguiente, todo cambió completamente.\"",
  "story.step2.number": "Entonces...",
  "story.step2.title": "La Oscuridad",
  "story.step2.desc": "Asentándose sintiéndose fuera de lugar, rodeado de otros pero siempre en guardia, aprende a sobrevivir ocultando su verdadero ser.",
  "story.step2.quote": "\"Nunca encajé realmente. De alguna manera, siempre me estaba defendiendo.\"",
  "story.step3.number": "Después...",
  "story.step3.title": "Escape Interior",
  "story.step3.desc": "La creatividad se convierte en su refugio secreto. Empieza a construir mundos imaginarios en su mente, un lugar donde finalmente puede respirar y existir sin miedo, una rebelión silenciosa invisible para quienes lo rodean.",
  "story.step3.quote": "\"Creé mundos dentro de mi cabeza, lugares donde nadie podía alcanzarme.\"",
  "story.step4.number": "Finalmente...",
  "story.step4.title": "Comienza la Aventura",
  "story.step4.desc": "Poco a poco, encuentra el coraje para ir más allá de sus miedos. Incierto pero decidido a descubrir quién es realmente. Ya no se esconde del mundo ni de sí mismo.",
  "story.step4.quote": "\"Aunque estaba asustado de pies a cabeza, decidí saltar a lo desconocido.\"",
  "characters.title": "Los Personajes",
  "characters.card1.front.desc": "Buscando significado",
  "characters.card1.back.title": "El Soñador",
  "characters.card1.back.desc": "Las sombras se aferran a su historia.<br>Sobrevive encontrando belleza en el exilio.",
  "characters.card1.back.quote": "\"Algunos destinos están escritos en la oscuridad.\"",
  "characters.card2.front.title": "Los Cuidadores",
  "characters.card2.front.desc": "En pequeños actos, reescriben su destino.",
  "characters.card2.back.title": "Los Anclajes Silenciosos",
  "characters.card2.back.desc": "Reparan lo que ha sido olvidado.<br>Incluso la más pequeña bondad resuena durante años.",
  "characters.card2.back.quote": "\"Las pequeñas acciones pueden sanar un gran corazón\"",
  "characters.card3.front.title": "Las Sombras",
  "characters.card3.front.desc": "Sobrevivir significa aprender a moverse sin ser visto.",
  "characters.card3.back.title": "Guardianes de la Puerta",
  "characters.card3.back.desc": "¿Cuál es el resultado de la distancia y el control?<br>Mantiene a Leín cerca de su reino.",
  "characters.card3.back.quote": "\"No todas las jaulas son visibles.\"",
  "characters.card4.front.title": "Robal",
  "characters.card4.front.desc": "Ve promesa oculta donde otros solo ven defecto.",
  "characters.card4.back.title": "El Mentor",
  "characters.card4.back.desc": "Inspira a Leín a soñar más allá de sus límites.<br>Aparece cuando más se necesita.",
  "characters.card4.back.quote": "\"A veces necesitas ver a través de los ojos de otro para encontrar tu propio camino.\"",
  "characters.card5.front.title": "Germán",
  "characters.card5.front.desc": "Juntos, reescriben las reglas.",
  "characters.card5.back.title": "La Amistad",
  "characters.card5.back.desc": "Juntos, encienden revoluciones.<br>Ayuda a Leín a trascender sus propias limitaciones.",
  "characters.card5.back.quote": "\"El cambio a menudo comienza con un solo amigo imprudente.\"",
  "characters.card6.front.title": "Los Enemigos",
  "characters.card6.front.desc": "Su presencia persiste, incluso en silencio.",
  "characters.card6.back.title": "Sombras Internas",
  "characters.card6.back.desc": "Miedo, duda, traición. Sus armas son sutiles.<br>Su verdadero poder: hacerte cuestionarte a ti mismo.",
  "characters.card6.back.quote": "\"Algunas batallas se libran en la mente, no en el mundo.\"",
  "themes.title": "Los Temas",
  "themes.card1.front.title": "Búsqueda de Propósito",
  "themes.card1.front.desc": "El conocimiento de lo que debes hacer se revela en los pliegues más inesperados del viaje.<br><span class=\"highlight\">El propósito es la brújula más grande cuando estás perdido.</span>",
  "themes.card1.back.title": "La Brújula Interior",
  "themes.card1.back.desc": "El propósito no se encuentra, se vive.<br>El viaje revela lo que importa.<br>Lo que te llama, te transforma.",
  "themes.card1.back.quote": "\"Si estás perdido, sigue lo que conmueve tu alma.\"",
  "themes.card2.front.title": "Tecnología",
  "themes.card2.front.desc": "En el caos moderno, aprender a escuchar los susurros digitales puede convertirse en la brújula sutil del alma.<br><span class=\"highlight\">Entre líneas de texto, a veces florecen señales.</span>",
  "themes.card2.back.title": "Ecos Digitales",
  "themes.card2.back.desc": "La tecnología es tanto refugio como oráculo.<br>Entre código y pantalla, se puede encontrar orientación.<br>La sabiduría se esconde en las corrientes de datos.",
  "themes.card2.back.quote": "\"Incluso lo artificial puede señalarnos el camino a casa.\"",
  "themes.card3.front.title": "Exploración del Mundo",
  "themes.card3.front.desc": "Los viajes y espacios geográficos pueden abrir puertas a lugares nunca imaginados.<br><span class=\"highlight\">No hay diferencia entre exploración interior y exterior.</span>",
  "themes.card3.back.title": "Mapas Interiores y Exteriores",
  "themes.card3.back.desc": "Los nuevos lugares reflejan nuevos yoes.<br>Cada viaje transforma tanto el paisaje como el corazón.<br>La exploración es un trabajo interior.",
  "themes.card3.back.quote": "\"Cada milla afuera es una milla adentro.\"",
  "author.title": "Sobre el Autor",
  "author.stats": "Dani Bonilla • Creador Internacional • Narrador",
  "author.name": "Dani Bonilla",
  "author.back.desc": "Creador de contenido y narrador apasionado por crear historias que llegan muy adentro. Más de una década dedicada a crear contenido introspectivo y significativo para una audiencia global.",
  "author.back.quote": "Mi propósito es crear contenido transformador que realmente impacte el mundo interior de las personas.",
  "author.bio1": "Dani es un creador de contenido apasionado por la narración. Ha pasado más de una década creando historias profundas e introspectivas. Su viaje comenzó solo, solo un joven con una cámara y la necesidad de entender qué significa ser humano. Lo que comenzó como una búsqueda personal de significado se convirtió en una misión para ayudar a otros a conectarse consigo mismos.",
  "author.quote": "Mi propósito es crear contenido que mueva a las personas desde adentro. Quiero que mis historias sean un espejo, una chispa y un momento tranquilo de transformación interior.",
  "author.bio2": "Brillantemente, su trabajo ha llegado a millones, no por tendencias, sino por el poder de la narración honesta. Revela lo extraordinario oculto en vidas ordinarias, convirtiendo la experiencia personal en algo universal. Para muchos, es una voz de confianza cuando necesitan ver la vida con nuevos ojos.",
  "author.intro": "Esto es lo que la gente dice sobre el impacto de sus historias",
  "preorder.title": "Únete al viaje",
  "preorder.subtitle": "Sé parte de la creación de esta historia transformadora",
  "preorder.timeline": "Estimado para terminar a mediados de 2026",
  "preorder.promise": "Cada contribución y cada persona en la lista de espera ayuda a dar vida a esta historia.<br>Gracias por creer en el poder de ser diferente.",
  "donate.description": "¿Quieres apoyar el proyecto sin compromisos?",
  "donate.cta": "Solo donar",
  "preorder.testimonial1": "\"Una montaña rusa de emociones—a veces reía, a veces lloraba. Siempre me sentí menos solo.\"",
  "preorder.testimonial2": "\"Una experiencia verdaderamente transformadora\"",
  "tiers.backer.title": "🖤 TIER PATROCINADOR",
  "tiers.backer.subtitle": "Para los partidarios fundamentales que creen en la narración cruda",
  "tiers.backer.cta": "Únete como Patrocinador - $50",
  "tiers.backer.benefits.title": "Lo que obtienes:",
  "tiers.backer.benefits.item1.strong": "Acceso inmediato",
  "tiers.backer.benefits.item1.text": "a una muestra exclusiva de 8-12 páginas (Capítulos 1-2)",
  "tiers.backer.benefits.item2.strong": "Múltiples extractos del manuscrito",
  "tiers.backer.benefits.item2.text": "durante el proceso de escritura—contenido que nadie más verá",
  "tiers.backer.benefits.item3.strong": "Tu opinión importa:",
  "tiers.backer.benefits.item3.text": "Canal directo de entrada para influir en la dirección de la historia",
  "tiers.backer.benefits.item4.strong": "Tu nombre inmortalizado",
  "tiers.backer.benefits.item4.text": "en la sección \"Patrocinadores\" del libro final",
  "tiers.backer.benefits.item5.strong": "Ebook final",
  "tiers.backer.benefits.item5.text": "(EPUB + PDF) al completarse (estimado marzo 2026)",
  "tiers.backer.benefits.item6.strong": "Actualizaciones regulares de progreso",
  "tiers.backer.benefits.item6.text": "durante todo el viaje",
  "tiers.backer.message": "No solo estás apoyando—estás co-creando. Tu voz ayuda a dar forma a esta historia.",
  "tiers.producer.title": "🔥 TIER PRODUCTOR",
  "tiers.producer.subtitle": "Para creadores y partidarios serios que quieren la experiencia completa",
  "tiers.producer.cta": "Únete como Productor - $250",
  "tiers.producer.benefits.title": "Todo en Patrocinador, MÁS:",
  "tiers.producer.benefits.item1.strong": "Crédito de Productor Distinguido",
  "tiers.producer.benefits.item1.text": "destacado prominentemente en las páginas de apertura del libro",
  "tiers.producer.benefits.item2.strong": "El Paquete de Video del Productor",
  "tiers.producer.benefits.item2.text": "(entregado durante todo el proceso):",
  "tiers.producer.benefits.item3.strong": "Masterclass de Estructura del Libro:",
  "tiers.producer.benefits.item3.text": "Desglose completo en video de mi marco de narración y proceso",
  "tiers.producer.benefits.item4.strong": "Tutorial de Creación de Trailer con IA:",
  "tiers.producer.benefits.item4.text": "Guía paso a paso para diseñar trailers de libros convincentes con herramientas de IA de vanguardia",
  "tiers.producer.benefits.item5.strong": "Crónicas Entre Bastidores:",
  "tiers.producer.benefits.item5.text": "Actualizaciones regulares en video mostrando el verdadero proceso creativo",
  "tiers.producer.benefits.item6.strong": "Contenido Exclusivo Solo para Productores:",
  "tiers.producer.benefits.item6.text": "Borradores tempranos, escenas eliminadas, decisiones creativas explicadas",
  "tiers.producer.message": "Este es tu pase de bastidores para ver un libro cobrar vida. Ve cada decisión, cada giro, cada avance en tiempo real.",
  "tiers.footer.promise": "**Estimado de finalización:** Marzo 2026 con actualizaciones regulares de progreso durante todo el proceso. Una historia. Un proyecto. Terminado.",
  "tiers.footer.cta": "Esto es para personas que entienden que el arte auténtico requiere apoyo auténtico. Si alguna vez te has sentido como la oveja negra en tu propia vida, esta historia es para ti.",
  "modal.donate.title": "Apoya el Proyecto",
  "pricing.presale": "(PREVENTA)",
  "pricing.delivery": "Entrega Est.: 1 de abril de 2026",
  "modal.donate.presale_badge": "PREVENTA",
  "modal.donate.description": "Elige tu forma preferida de apoyar esta historia transformadora. Cada contribución, sin importar el tamaño, ayuda a dar vida a este proyecto.",
  "modal.donate.ko-fi.title": "Ko-fi",
  "modal.donate.ko-fi.desc": "Cómprame un café para alimentar el proceso de escritura",
  "modal.donate.paypal.title": "PayPal",
  "modal.donate.paypal.desc": "Donación directa vía PayPal",
  "modal.donate.revolut.title": "Revolut",
  "modal.donate.revolut.desc": "Apoyo a través de Revolut",
  "modal.donate.twint.title": "Twint (Suiza)",
  "modal.donate.twint.desc": "Pago móvil suizo - Haz clic para obtener el número",
  "modal.donate.bizum.title": "Bizum (España)",
  "modal.donate.bizum.desc": "Pago móvil español - Haz clic para obtener el número",
  "modal.donate.crypto.title": "Criptomonedas",
  "modal.donate.crypto.desc": "Haz clic para ver direcciones de cripto",
  "modal.donate.crypto.btc.label": "Bitcoin (BTC):",
  "modal.donate.crypto.eth.label": "Ethereum (ETH):",
  "modal.donate.crypto.sol.label": "Solana (SOL):",
  "modal.donate.mural": "💜 **¿Quieres aparecer en nuestro mural de patrocinadores?**<br>Envía una captura de pantalla de tu donación con tu nombre a: **hola.danibonilla@gmail.com**",
  "modal.donate.gratitude": "Gracias por creer en el poder de la narración y ser diferente. ¡Tu apoyo significa el mundo! 💜",
  "meta.title": "Diario de una Oveja Negra",
  "footer.copyright": "© Dani Bonilla. Todos los derechos reservados.",
  "footer.disclaimer": "Ficción autobiográfica. Los nombres, personajes, lugares e incidentes son productos de la imaginación del autor.",
  "pricing.eyebrow": "Selecciona tu Edición",
  "pricing.title": "Diario de una Oveja Negra",
  "pricing.subtitle": "Tres formas de vivir la historia. Elige la que resuene contigo.",
  "pricing.tier1.subtitle": "Historia Completa",
  "pricing.tier1.title": "The Immersive Journey",
  "pricing.tier1.description": "La historia completa con mi voz. 10+ horas de narración cinematográfica. Un viaje que guardas para siempre.",
  "pricing.tier1.guarantee": "Archivos tuyos para siempre",
  "pricing.tier1.feature1": "10+ Horas de Experiencia de Audio",
  "pricing.tier1.feature2": "La Historia en Ebook (PDF/EPUB)",
  "pricing.tier1.feature3": "Pack de Arte y Atmósfera",
  "pricing.tier1.feature4": "Acceso de por Vida",
  "pricing.tier1.feature1.details": "No es un audiolibro estándar. Narración cinematográfica con música original, diseño sonoro y profundidad emocional. Una experiencia para tus oídos.",
  "pricing.tier1.feature2.details": "500+ páginas de narrativa profunda. Libro digital bellamente maquetado que es tuyo para siempre. Sin suscripciones ni caducidad.",
  "pricing.tier1.feature3.details": "Mi playlist curada de canciones que acompañaron la creación del libro, bocetos conceptuales, diseños originales y fondos de pantalla exclusivos. Todo lo visual que define el universo de la obra.",
  "pricing.tier1.feature4.details": "Descarga una vez, quédatelo para siempre. Tus archivos, tu biblioteca. Acceso desde cualquier dispositivo, en cualquier momento.",
  "pricing.badge.recommended": "RECOMENDADO",
  "pricing.tier2.subtitle": "Producción de Contenido",
  "pricing.tier2.title": "The Creator's Toolkit",
  "pricing.tier2.description": "Todo lo anterior + cómo lo hice. El proceso creativo completo: mis técnicas, decisiones y herramientas documentadas para que aprendas de primera mano.",
  "pricing.tier2.guarantee": "Aprende mi proceso completo",
  "pricing.tier2.feature1": "Desglose Completo del Proceso Creativo",
  "pricing.tier2.feature2": "Acceso a Borradores y Escenas Eliminadas",
  "pricing.tier2.feature3": "Licencia Musical para Creadores",
  "pricing.tier2.feature4": "Todo lo de The Immersive Journey incluido",
  "pricing.tier2.feature1.details": "Desglose completo en video: cómo creo contenido de principio a fin, decisiones creativas, herramientas que uso, integración de IA y mi proceso personal de storytelling. Mi flujo de trabajo real documentado.",
  "pricing.tier2.feature2.details": "Borradores originales, escenas eliminadas y cómo la historia evolucionó desde la primera versión.",
  "pricing.tier2.feature3.details": "Usa mis composiciones originales en tu contenido de YouTube, TikTok o redes sociales. Solo mencioname como autor en la descripción. Sin remixes, publicidad, ni redistribución.",
  "pricing.tier3.subtitle": "Acceso Personal Exclusivo",
  "pricing.tier3.title": "The Inner Circle",
  "pricing.tier3.description": "Acceso directo a mi mente. Un video personal exclusivo de ~60 min donde respondo tu pregunta en profundidad. Tu nombre en la obra. Mecenazgo puro sin intermediarios.",
  "pricing.tier1.cta": "Únete al Viaje",
  "pricing.tier2.cta": "Obtener el Toolkit",
  "pricing.tier3.cta": "Unirse al Inner Circle",
  "pricing.tier3.guarantee": "Mecenazgo puro y conexión",
  "pricing.tier3.limit": "Limitado",
  "pricing.tier3.topLabel": "★ Top Supporter",
  "pricing.tier3.feature1": "Video Personal Exclusivo + Tu Pregunta Respondida",
  "pricing.tier3.feature2": "Tu Nombre en la Obra (Opcional)",
  "pricing.tier3.feature3": "Todo lo de Creator's Toolkit incluido",
  "pricing.tier3.feature1.details": "Un video exclusivo de ~60 min donde hablo directamente a cámara sobre la historia y mis reflexiones más profundas sobre la obra. Puedes enviar una pregunta que desarrollaré en profundidad en el video.",
  "pricing.tier3.feature2.details": "Tu nombre o alias aparecerá en el libro si quieres. Tú decides: nombre real, alias, o anónimo. Orden de créditos por contribución. Es tu elección.",
  "pricing.tier3.feature3.details": "Cada euro va directamente al creador. Sin editoriales ni plataformas llevándose una tajada. Mecenazgo puro, la forma en que el arte debería financiarse.",
  "pricing.secret_door.text": "Opción solo lectura disponible — o descarga una muestra",
  "secret.ebook.subtitle": "Lectura Digital",
  "secret.ebook.title": "Edición Ebook",
  "secret.ebook.description": "Accede a 500 páginas (versión PDF). 100% para ti, el libro para siempre. Contribución directa al autor.",
  "secret.ebook.cta": "Acceder Ahora",
  "secret.ebook.delivery": "Entrega Est.: 1 de abril de 2026",
  "secret.ebook.feature1": "500 Páginas (PDF)",
  "secret.ebook.feature2": "Tuyo para Siempre",
  "secret.ebook.feature3": "Apoyo Directo al Autor",
  "secret.donate.subtitle": "Contribución Libre",
  "secret.donate.title": "Solo Donar",
  "secret.donate.description": "Apoyo puro. Sin producto incluido. Solo contribuye lo que sientas.",
  "secret.donate.cta": "Elegir Cantidad",
  "secret.donate.note": "Sin producto incluido",
  "secret.donate.price": "Lo que Quieras",
  "secret.donate.feature1": "Ko-fi, PayPal, Revolut",
  "secret.donate.feature2": "Bizum, Twint, Crypto",
  "secret.donate.feature3": "100% Va al Creador",
  "secret.free.badge": "✦ GRATIS",
  "secret.free.title": "Capítulo de Muestra",
  "secret.free.description": "Prueba antes de comprar. Recibe un capítulo completo al instante.",
  "secret.free.cta": "Gratis",
  "secret.free.note": "Solo tu email",
  "pricing.trust.secure.title": "Pago Seguro",
  "pricing.trust.secure.desc": "Encriptación SSL 256-bit",
  "pricing.trust.transparency.title": "Sin Letra Pequeña",
  "pricing.trust.transparency.desc": "Lo que ves es lo que hay",
  "manifesto.text1": "Esto es para todos aquellos que nunca encajaron del todo.",
  "manifesto.text2": "Para los que siempre se sintieron diferentes. Los que veían el mundo con otros ojos y se preguntaban por qué nadie más parecía verlo igual.",
  "manifesto.text3": "Para los que aprendieron a esconder partes de sí mismos. Los que cargaron con la sensación de ser un extraño, incluso entre los suyos.",
  "manifesto.text4": "Si alguna vez te has sentido como la oveja negra, buscando dónde encajar, no estás solo.",
  "manifesto.final": "Esta historia es para ti.",
  "testimonial.citation": "En el canal de YouTube:",
  "testimonial.1.text": "\"Bro, me siento tan identificado con tu historia. No tienes idea de cuánto me relaciono contigo.\"",
  "testimonial.2.text": "\"Contar historias es tu don. Tu voz trae una sensación de calma y es un placer escucharte. Nunca pierdas tu curiosidad por descubrir nuevos mundos.\"",
  "testimonial.3.text": "\"Este tío tiene mucho potencial, las tomas, la edición, la narración. Esta es una de esas veces que agradezco a YouTube por recomendar contenido de calidad.\"",
  "testimonial.4.text": "\"No entiendo cómo tus videos no tienen muchos más likes. Tu contenido tiene alma. Me estoy poniendo al día con todos tus videos porque me inspiras a ir a por ello.\"",
  "testimonial.5.text": "\"No podría explicarse mejor, y lo haces con tanto respeto y sinceridad. Gracias por traducir sentimientos en palabras.\"",
  "testimonial.6.text": "\"Primer canal de YouTube que realmente ha tenido sentido para mí... ¿Cómo un canal tan bueno tiene tan pocas vistas y suscriptores? ¡Eres increíble, Dani!\"",
  "testimonial.7.text": "\"...y tan HONESTO en tu comunicación. Esa transparencia hace que cada video se sienta cercano y auténtico.\"",
  "testimonial.8.text": "\"Lo vi todo. Prueba y error, Dani: eres un ejemplo vivo de cómo contar una historia real y mantenernos pegados a la pantalla.\"",
  "testimonial.9.text": "\"Es tan hermoso escuchar tu historia. Hablas desde la honestidad, no desde el ego, y eso se nota en cada minuto.\"",
  "testimonial.10.text": "\"Después de 50 años en Suiza y 30 años en TV, tu madurez analizando y narrando estas diferencias realmente me sorprende. Explicas todo con una claridad admirable.\"",
  "testimonial.11.text": "\"Hermoso video: experiencias personales genuinas y honestas. Gracias por compartirlas con un toque tan humano.\"",
  "testimonial.12.text": "\"Hablar durante una hora seguida a la cámara y mantenernos comprometidos muestra tu pasión y un verdadero don para contar historias. Gracias por la inspiración.\"",
  "testimonial.13.text": "\"Es mejor arrepentirse de lo que has hecho que de lo que no hiciste... Me encanta tu catarsis.\"",
  "testimonial.14.text": "\"Gracias por tus reflexiones; me motivan a crear mi propio contenido. La forma en que cuentas las cosas me hace querer empezar también.\"",
  "testimonial.15.text": "\"Este video es tan poderoso; estoy en el mismo camino que tú, Dani. Realmente me tocó.\"",
  "testimonial.16.text": "\"Tan emocionante como el final de una saga de películas.\"",
  "testimonial.17.text": "\"Me veo totalmente reflejado en ti... gracias por transformar mi visión y el coraje para enfrentar la vida.\"",
  "testimonial.18.text": "\"Estoy impresionado por tu edición. Tu fuerza es contar historias y hacer que la gente las sienta como propias. Aprovecha esa cualidad.\"",
  "testimonial.19.text": "\"¡Qué edición tan increíble, amigo! ¡La voz en off, la música, todo! Cada video te superas a ti mismo. Eres increíble y llegarás allí.\"",
  "modal.phone.title.default": "Protección de Privacidad",
  "modal.phone.title.unlock": "Desbloquear número de",
  "faq.title": "Preguntas Frecuentes",
  "faq.q1.question": "¿Esto es un audiolibro \"normal\"?",
  "faq.q1.answer": "No. Es una <strong>edición inmersiva del autor</strong>: narración premium + extras (ebook, arte, playlist) y apoyo directo al autor.",
  "faq.q2.question": "¿Dónde puedo escucharlo?",
  "faq.q2.answer": "Podrás escucharlo en <strong>móvil con app</strong> o en <strong>tu navegador</strong> con el reproductor web.",
  "faq.q3.question": "¿Puedo descargar el audio?",
  "faq.q3.answer": "Si está habilitado, tendrás <strong>descarga de MP3 sin DRM</strong> desde tu biblioteca.",
  "faq.q4.question": "¿Cuándo lo recibiré?",
  "faq.q4.answer": "Es una <strong>preventa</strong>. Entrega estimada: <strong>inicios de Abril 2026</strong>. Recibirás un email con acceso cuando se publique.",
  "faq.q5.question": "¿Cómo accedo después de comprar?",
  "faq.q5.answer": "Recibirás un email con instrucciones. El acceso queda vinculado al <strong>correo con el que compras</strong>.",
  "faq.q6.question": "¿Es una historia autoconclusiva?",
  "faq.q6.answer": "Sí. Este libro está pensado como una <strong>experiencia completa</strong> por sí misma.",
  "faq.q7.question": "¿Hay comunidad, llamadas o soporte 1:1?",
  "faq.q7.answer": "No. Esto es una <strong>obra terminada</strong>, no un programa ni una mentoría.",
  "faq.q8.question": "¿Qué pasa si pierdo el email o cambio de dispositivo?",
  "faq.q8.answer": "Puedes entrar con tu email y recuperar acceso desde tu biblioteca. La plataforma de entrega ofrece soporte para problemas técnicos.",


  "faq.new.q1.question": "¿Qué pasa si pago y nunca terminas el libro?",
  "faq.new.q1.answer": "Esto es una <strong>preventa</strong>. Si no cumplo con la entrega del producto, tienes derecho a un reembolso completo. Te mantendré informado de cualquier cambio en el plan.",
  "faq.new.q2.question": "¿Cuál es la diferencia entre esto y tus vídeos de YouTube?",
  "faq.new.q2.answer": "En YouTube tienes fragmentos de 20-30 minutos. Esto es la <strong>experiencia completa</strong>: horas de conexión profunda, la misma calidad emocional que sientes en mis vídeos, pero sin el algoritmo limitando lo que puedo compartir. Es la diferencia entre un vistazo y el viaje completo.",
  "faq.new.q3.question": "¿Cómo sé si esto es para mí?",
  "faq.new.q3.answer": "Si has resonado con las historias que cuento en YouTube, esto es para ti. Si disfrutas de la <strong>conexión profunda</strong>, sentirte comprendido, y las historias que se quedan contigo mucho después de terminar. Todos los niveles incluyen el PDF completo si prefieres leer.",
  "faq.new.q4.question": "La fecha de entrega está lejos. ¿Recibo algo ahora?",
  "faq.new.q4.answer": "Mi foco principal es terminar y entregar el libro. Por eso recibes un <strong>descuento ahora</strong> por confiar en mí temprano. Compartiré actualizaciones ocasionales sobre el proceso, así que no te quedarás solo. Gracias por tu apoyo.",
  "faq.new.q5.question": "¿Hay política de devoluciones?",
  "faq.new.q5.answer": "No hay devoluciones una vez comprado. Quiero centrarme en terminar esta obra de la <strong>mejor forma posible</strong>. Mis vídeos en YouTube muestran exactamente el estilo de historia, conexión y profundidad que puedes esperar. Me comprometo a entregar la experiencia de mayor calidad.",

  "faq.tech.q1.question": "¿Qué pasa si la fecha de entrega se retrasa?",
  "faq.tech.q1.answer": "Entrega estimada: <strong>1 de abril de 2026</strong>. Si hay algún retraso por producción, te avisaré por email y actualizaré la fecha. Estás comprando una preventa con descuento por confiar temprano.",
  "faq.tech.q2.question": "¿Cómo recibiré el producto?",
  "faq.tech.q2.answer": "Recibirás un <strong>email con links de descarga</strong> en la fecha de entrega. También puedes acceder a todo desde tu librería de Gumroad en cualquier momento. Revisa spam si no lo ves.",
  "faq.tech.q3.question": "¿Cómo se calculan los impuestos?",
  "faq.tech.q3.answer": "Los impuestos se calculan <strong>automáticamente en el checkout</strong> según tu país. La plataforma cobra en USD, así que tu banco hará la conversión de euros a dólares. Tu banco puede aplicar una pequeña comisión por conversión.",
  "faq.tech.q4.question": "¿Qué NO incluye la compra?",
  "faq.tech.q4.answer": "Esto es una <strong>obra digital terminada</strong>, no un programa ni mentoría. No incluye: soporte técnico 1:1, sesiones personalizadas, envío físico, ni comunidad/llamadas. Para problemas con la plataforma, Gumroad ofrece ayuda."
};

// Store original English texts globally
window.originalTexts = {};
window.currentLanguage = 'en';

// Toggle function exposed globally
window.toggleLanguage = function () {
  if (window.currentLanguage === 'en') {
    loadSpanish();
  } else {
    loadEnglish();
  }
};

document.addEventListener('DOMContentLoaded', function () {
  // Save original English texts FIRST (before any translation)
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    window.originalTexts[key] = el.innerHTML;
  });

  // Check for URL param or saved preference
  var urlParams = new URLSearchParams(window.location.search);
  var langParam = urlParams.get('lang');
  var savedLang = localStorage.getItem('userLanguage');

  // Priority: URL param > LocalStorage > Default 'en'
  var targetLang = langParam || savedLang || 'en';

  // Set initial language
  if (targetLang === 'es') {
    loadSpanish();
  } else {
    updateButton('ES');
    window.currentLanguage = 'en';
    document.documentElement.lang = 'en';
  }
});

function loadSpanish() {
  // Apply translations from embedded object
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (spanishTranslations[key]) {
      el.innerHTML = spanishTranslations[key];
    }
  });

  window.currentLanguage = 'es';
  localStorage.setItem('userLanguage', 'es');
  updateButton('EN');
  document.documentElement.lang = 'es';

  // Update URL
  var url = new URL(window.location);
  url.searchParams.set('lang', 'es');
  window.history.replaceState({}, '', url);

  document.dispatchEvent(new CustomEvent('translationsLoaded'));
}

function loadEnglish() {
  // Restore original English texts
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (window.originalTexts[key]) {
      el.innerHTML = window.originalTexts[key];
    }
  });

  window.currentLanguage = 'en';
  localStorage.setItem('userLanguage', 'en');
  updateButton('ES');
  document.documentElement.lang = 'en';

  // Update URL
  var url = new URL(window.location);
  url.searchParams.delete('lang');
  window.history.replaceState({}, '', url);

  document.dispatchEvent(new CustomEvent('translationsLoaded'));
}

function updateButton(label) {
  var btn = document.getElementById('langToggleBtn');
  if (btn) {
    btn.textContent = label;
  }
}