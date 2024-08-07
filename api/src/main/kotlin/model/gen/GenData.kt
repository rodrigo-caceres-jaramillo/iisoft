package model.gen

import model.DraftTournament
import model.DraftUser

val usersGEN = listOf(
    listOf("jania@gmail.com", "jania", "jania"),
    listOf("rodrigo@gmail.com", "rodrigo", "rodrigo"),
    listOf("luisa@gmail.com", "luisa", "luisa"),
    listOf("ana@gmail.com", "ana", "ana"),
    listOf("carlos@gmail.com", "carlos", "carlos"),
    listOf("maria@gmail.com", "maria", "maria"),
    listOf("juan@gmail.com", "juan", "juan"),
    listOf("sara@gmail.com", "sara", "sara"),
    listOf("pedro@gmail.com", "pedro", "pedro"),
    listOf("laura@gmail.com", "laura", "laura"),
    listOf("diego@gmail.com", "diego", "diego"),
    listOf("claudia@gmail.com", "claudia", "claudia"),
    listOf("andres@gmail.com", "andres", "andres"),
    listOf("natalia@gmail.com", "natalia", "natalia"),
    listOf("sergio@gmail.com", "sergio", "sergio"),
    listOf("paola@gmail.com", "paola", "paola"),
    listOf("daniel@gmail.com", "daniel", "daniel"),
    listOf("valeria@gmail.com", "valeria", "valeria"),
    listOf("jorge@gmail.com", "jorge", "jorge"),
    listOf("ana_maria@gmail.com", "ana_maria", "ana_maria"),
    listOf("felipe@gmail.com", "felipe", "felipe"),
    listOf("carolina@gmail.com", "carolina", "carolina"),
    listOf("oscar@gmail.com", "oscar", "oscar"),
    listOf("diana@gmail.com", "diana", "diana"),
    listOf("roberto@gmail.com", "roberto", "roberto"),
    listOf("camila@gmail.com", "camila", "camila"),
    listOf("manuel@gmail.com", "manuel", "manuel"),
    listOf("lucia@gmail.com", "lucia", "lucia"),
    listOf("jose@gmail.com", "jose", "jose"),
    listOf("mariana@gmail.com", "mariana", "mariana"),
    listOf("andrea@gmail.com", "andrea", "andrea"),
    listOf("ricardo@gmail.com", "ricardo", "ricardo"),
)

val tournamentsGEN = listOf(
    Pair("Torneo de Verano", "El torneo de verano es una competición amistosa que se realiza durante los meses de calor."),
    Pair("Torneo de Otoño", "Una competición emocionante que se lleva a cabo en la temporada de otoño."),
    Pair("Gran Torneo Anual", "El evento más esperado del año, donde los mejores competidores se enfrentan."),
    Pair("Torneo de Primavera", "Una celebración deportiva que marca el comienzo de la temporada de primavera."),
    Pair("Desafío Invernal", "Los participantes se enfrentan en duras condiciones climáticas invernales."),
    Pair("Torneo de Leyendas", "Los más grandes jugadores de todos los tiempos compiten por la gloria."),
    Pair("Copa del Sol", "Un torneo internacional que se lleva a cabo en destinos soleados."),
    Pair("Torneo del Trueno", "Una competencia llena de energía que sacude los corazones de los espectadores."),
    Pair("Carrera de Campeones", "Los ganadores de diferentes torneos se enfrentan para determinar quién es el mejor."),
    Pair("Torneo del Crepúsculo", "Un evento misterioso que tiene lugar al anochecer."),
    Pair("Desafío del Desierto", "Los competidores luchan en medio de vastos paisajes desérticos."),
    Pair("Torneo de la Luna", "Una competición nocturna bajo la luz de la luna."),
    Pair("Campeonato del Mar", "Los participantes se enfrentan en desafíos relacionados con el agua."),
    Pair("Torneo de las Estrellas", "Solo los mejores son invitados a este prestigioso evento."),
    Pair("Copa del Viento", "Una competencia emocionante que se lleva a cabo en lugares ventosos."),
    Pair("Desafío de las Montañas", "Los competidores se enfrentan en terrenos montañosos y escarpados."),
    Pair("Torneo del Fuego", "Una competición ardiente que pone a prueba la resistencia de los participantes."),
    Pair("Desafío de Hielo", "Los jugadores se enfrentan en una superficie congelada."),
    Pair("Copa de la Tierra", "Una competencia que se desarrolla en entornos terrestres diversos."),
    Pair("Torneo de los Sueños", "Los participantes compiten por alcanzar sus metas más ambiciosas."),
    Pair("Gran Premio", "Una carrera emocionante donde los competidores luchan por un premio generoso."),
    Pair("Torneo de la Aurora", "Una competición que tiene lugar al amanecer."),
    Pair("Copa del Cielo", "Los jugadores compiten en desafíos aéreos."),
    Pair("Desafío del Bosque", "Una competencia que se desarrolla en medio de exuberantes bosques."),
    Pair("Torneo del Crepúsculo", "Los participantes se enfrentan en un escenario misterioso al atardecer."),
    Pair("Carrera Relámpago", "Una competición de velocidad que mantiene a los espectadores al borde de sus asientos."),
    Pair("Torneo de los Elementos", "Los competidores representan los diferentes elementos naturales en esta competencia."),
    Pair("Copa del Arco Iris", "Un torneo lleno de colores y diversión."),
    Pair("Desafío del Cosmos", "Los participantes se enfrentan en desafíos que desafían las leyes de la física."),
    Pair("Torneo del Espacio", "Una competición que se desarrolla en ambientes extraterrestres."),
    Pair("Copa del Eclipse", "Una competencia única que tiene lugar durante un eclipse."),
    Pair("Gran Torneo del Norte", "Una competición que se lleva a cabo en las regiones más septentrionales."),
    Pair("Torneo del Sur", "Los participantes compiten en desafíos inspirados en las culturas del sur."),
    Pair("Desafío del Tiempo", "Una competencia que desafía la percepción del tiempo."),
    Pair("Torneo de la Historia", "Los jugadores reviven momentos históricos en este torneo."),
    Pair("Copa de la Fantasía", "Una competencia que tiene lugar en un mundo de fantasía."),
    Pair("Torneo del Presente", "Los participantes se enfrentan en desafíos que reflejan la actualidad."),
    Pair("Desafío del Futuro", "Una competición que explora las posibilidades del futuro."),
    Pair("Carrera Espacial", "Los competidores se enfrentan en una carrera hacia el espacio."),
    Pair("Torneo de la Tecnología", "Una competencia que destaca las innovaciones tecnológicas."),
    Pair("Copa del Caos", "Una competición impredecible donde todo puede suceder."),
    Pair("Torneo de la Armonía", "Los participantes buscan la paz y la unidad en esta competencia."),
    Pair("Desafío de la Diversidad", "Una competición que celebra la variedad de culturas y tradiciones."),
    Pair("Torneo del Conocimiento", "Los jugadores demuestran su sabiduría en este desafío intelectual."),
    Pair("Copa del Cambio", "Una competencia que promueve el cambio y la evolución."),
    Pair("Gran Torneo de la Imaginación", "Los participantes exploran los límites de la creatividad en este evento único."),
    Pair("Torneo de la Justicia", "Una competencia que busca la equidad y la igualdad."),
    Pair("Desafío de la Aventura", "Los competidores se enfrentan en desafíos emocionantes y peligrosos."),
    Pair("Torneo del Misterio", "Una competición llena de enigmas y sorpresas."),
    Pair("Copa del Encanto", "Los participantes deslumbran al público con su carisma y encanto."),
    Pair("Torneo de la Fortuna", "Una competencia donde la suerte juega un papel importante."),
    Pair("Desafío de la Resistencia", "Los jugadores demuestran su fuerza y ​​resiliencia en este desafío físico."),
)

val teamsGEN = listOf(
    "Tigres FC",
    "Leones Blancos",
    "Águilas Doradas",
    "Panteras Negras",
    "Lobos Plateados",
    "Tiburones Rojos",
    "Jaguares Azules",
    "Cocodrilos Verdes",
    "Osos Polares",
    "Halcones Grises",
    "Pumas Salvajes",
    "Canguros Ágiles",
    "Leopardos Rápidos",
    "Rinocerontes Fuertes",
    "Coyotes Astutos",
    "Gatos Monteses",
    "Pájaros Cantores",
    "Búhos Nocturnos",
    "Zorros Listados",
    "Perros Callejeros",
    "Elefantes Gigantes",
    "Ballenas Azules",
    "Delfines Saltarines",
    "Tortugas Marinas",
    "Cabras Montañesas",
    "Cebúes Cornudos",
    "Burros Testarudos",
    "Conejos Saltarines",
    "Ciervos Majestuosos",
    "Liebres Veloces",
    "Ratones Audaces",
    "Canguros Boxeadores",
    "Gorilas Gigantes",
    "Orangutanes Ágiles",
    "Chimpancés Juguetones",
    "Bonobos Amigables",
    "Mangabeyes Saltarines",
    "Babuinos Barbudos",
    "Langures Listados",
    "Capuchinos Cautelosos",
    "Tamarinos Tímidos",
    "Lémures Juguetones",
    "Ayes Aulladores",
    "Colobos Colilargos",
    "Gibones Gimnastas",
    "Macacos Melódicos",
    "Murciélagos Nocturnos",
    "Zarigüeyas Curiosas",
    "Coyotes de Río",
    "Nutrias Nadadoras",
    "Castores Ingeniosos",
    "Focas de Hielo",
    "Morsas Masivas",
    "Delfines Juguetones",
    "Orcas Asesinas",
    "Tiburones Martillo",
    "Pirañas Voraces",
    "Bagres Luminosos",
    "Ranas Saltarinas",
    "Sapos Toxicos",
    "Truchas Arcoíris",
    "Salmón Nadador",
    "Atunes Veloces",
    "Tortugas Gigantes",
    "Cocodrilos del Nilo",
    "Caimanes del Amazonas",
    "Serpientes Venenosas",
    "Boas Constrictoras",
    "Anacondas Verdes",
    "Pitones Reticuladas",
    "Víboras Cornudas",
    "Cobras Reales",
    "Mambas Negras",
    "Najas Doradas",
    "Culebras Corredoras",
    "Hienas Risueñas",
    "Zorros Listados",
    "Coyotes Cazadores",
    "Pumas Ágiles",
    "Leopardos Veloces",
    "Guepardos Corredores",
    "Jaguares Amazónicos",
    "Tigres Bengalíes",
    "Leones Africanos",
    "Elefantes Africanos",
    "Rinocerontes Negros",
    "Hipopótamos Hambrientos",
    "Leopardos de las Nieves",
    "Osos Polares",
    "Zorros del Desierto",
    "Jabalíes Salvajes",
    "Cabras Montesas",
    "Coyotes del Desierto",
    "Caimanes del Nilo",
    "Tiburones Blancos",
    "Orca Asesina",
    "Ballena Jorobada",
    "León Marino",
    "Foca Gris",
    "Tigre de Bengala",
    "Puma de las Montañas",
    "Jaguar de la Selva",
    "Oso Kodiak",
    "Elefante Africano",
    "Rinoceronte Negro",
    "Hipopótamo del Nilo",
    "Leopardo de las Nieves",
    "Guepardo Veloz",
    "León del Desierto",
    "Lobo Ártico",
    "Zorro del Desierto",
    "Jabalí de los Bosques",
    "Cabra de las Montañas",
    "Coyote del Desierto"
)