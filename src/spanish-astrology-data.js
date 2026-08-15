export const spanishAstrology={
  koc:{1:'Aries',4:'Fuego',7:'Cardinal',10:'iniciación, coraje y acción directa',13:'impaciencia y tendencia a actuar en solitario'},
  boga:{1:'Tauro',4:'Tierra',7:'Fijo',10:'estabilidad, valores y seguridad corporal',13:'terquedad, resistencia al cambio y posesividad'},
  ikizler:{1:'Géminis',4:'Aire',7:'Mutable',10:'curiosidad, lenguaje y conexión',13:'dispersión, superficialidad y sobrecarga mental'},
  yengec:{1:'Cáncer',4:'Agua',7:'Cardinal',10:'pertenencia, cuidado y seguridad emocional',13:'sensibilidad, retraimiento y sobreprotección'},
  aslan:{1:'Leo',4:'Fuego',7:'Fijo',10:'creatividad, visibilidad y expresión desde el corazón',13:'orgullo, dramatización y necesidad de aprobación'},
  basak:{1:'Virgo',4:'Tierra',7:'Mutable',10:'discernimiento, servicio y sistemas funcionales',13:'perfeccionismo, crítica y ansiedad'},
  terazi:{1:'Libra',4:'Aire',7:'Cardinal',10:'equilibrio, relación y negociación justa',13:'indecisión, complacencia y evitación del conflicto'},
  akrep:{1:'Escorpio',4:'Agua',7:'Fijo',10:'profundidad, transformación y honestidad emocional',13:'control, sospecha y absolutizar la intensidad'},
  yay:{1:'Sagitario',4:'Fuego',7:'Mutable',10:'sentido, exploración y perspectiva amplia',13:'exageración, inquietud y omitir detalles'},
  oglak:{1:'Capricornio',4:'Tierra',7:'Cardinal',10:'responsabilidad, estructura y esfuerzo a largo plazo',13:'rigidez, exceso de trabajo e identificación con el logro'},
  kova:{1:'Acuario',4:'Aire',7:'Fijo',10:'originalidad, comunidad y cambio de sistemas',13:'distancia, ideas rígidas y desconexión emocional'},
  balik:{1:'Piscis',4:'Agua',7:'Mutable',10:'intuición, compasión y percepción permeable',13:'evasión, límites difusos e idealización'},
  1:{1:'Yo y comienzos'},2:{1:'Recursos, dinero y valores'},3:{1:'Aprendizaje, comunicación y entorno cercano'},4:{1:'Raíces, hogar y seguridad interior'},5:{1:'Creatividad, romance y juego'},6:{1:'Rutinas, trabajo y hábitos de salud'},7:{1:'Relaciones, asociaciones y proyección'},8:{1:'Recursos compartidos, crisis y transformación'},9:{1:'Creencias, educación superior y horizontes lejanos'},10:{1:'Carrera, dirección y papel público'},11:{1:'Comunidad, futuro y objetivos colectivos'},12:{1:'Retiro, patrones inconscientes y cierres'},
  gunes:{1:'Sol',4:'identidad, vitalidad y dirección consciente'},ay:{1:'Luna',4:'necesidades emocionales, hábitos y seguridad'},merkur:{1:'Mercurio',4:'mente, lenguaje y procesamiento de información'},venus:{1:'Venus',4:'valores, vínculos y atracción'},mars:{1:'Marte',4:'deseo, acción y establecimiento de límites'},jupiter:{1:'Júpiter',4:'crecimiento, sentido y creencias'},saturn:{1:'Saturno',4:'responsabilidad, estructura y tiempo'},uranus:{1:'Urano',4:'liberación, ruptura y despertar'},neptun:{1:'Neptuno',4:'imaginación, intuición y disolución'},pluton:{1:'Plutón',4:'poder, sombra y transformación'},
  kavusum:{1:'Conjunción',4:'dos funciones que se concentran en el mismo ámbito'},karsit:{1:'Oposición',4:'conciencia y equilibrio entre dos polos'},kare:{1:'Cuadratura',4:'acción y crecimiento a través de la fricción'},ucgen:{1:'Trígono',4:'flujo natural, talento y facilidad'},sekstil:{1:'Sextil',4:'oportunidad, cooperación y potencial desarrollable'},quincunx:{1:'Quincuncio de 150°',4:'ajuste continuo entre necesidades que no encajan'},
  _ui:{home:'Biblioteca de carta natal',intro:'Un centro de referencia estructurado para signos, casas, planetas, aspectos, tránsitos y movimientos retrógrados.',read:'Abrir guía',meaning:'Significado central',light:'Expresión constructiva',shadow:'Expresión de sombra',practice:'Pregúntate',faq:'Preguntas frecuentes',note:'Este contenido es educativo y para la reflexión personal; no constituye diagnóstico científico ni predicción cierta.'}
};
export const esField=(row,index)=>spanishAstrology[row[0]]?.[index];
export const esUi=spanishAstrology._ui;
