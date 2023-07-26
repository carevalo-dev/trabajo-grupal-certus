import './App.css';
import Libro from './componentes/Libro';

function App() {
  return (
    <div className="App">
      <div className='contendor-principal'>
        <nav className='navegador-principal'>
          <ul className='lista-navegador'>
            <li>
              <a href="#" className='item-navegador'>Dan Brown</a>
            </li>
            <li>
              <a href="#" className='item-navegador-inactivo'>Otros autores</a>
            </li>
            <li>
              <a href="#" className='item-navegador-inactivo'>Más vendidos</a>
            </li>
          </ul>
        </nav>
        <Libro
          titulo='El código Da Vinci'
          imagen='libro-3'
          puntuacion='4.5'
          genero='Novela'
          editorial='Planeta'
          paginas='600'
          resumen='Robert Langdon recibe una llamada en mitad de la noche: el conservador del museo del Louvre ha sido asesinado en extrañas circunstancias y junto a su cadáver ha aparecido un desconcertante mensaje cifrado. Al profundizar en la investigación, Langdon, experto en simbología, descubre que las pistas conducen a las obras de Leonardo Da Vinci… y que están a la vista de todos, ocultas por el ingenio del pintor.

Langdon une esfuerzos con la criptóloga francesa Sophie Neveu y descubre que el conservador del museo pertenecía al priorato de Sión, una sociedad que a lo largo de los siglos ha contado con miembros tan destacados como sir Isaac Newton, Botticelli, Victor Hugo o el propio Da Vinci, y que ha velado por mantener en secreto una sorprendente verdad histórica.
'
        />
        <Libro
          titulo='Ángeles y demonios'
          imagen='libro-2'
          puntuacion='4.4'
          genero='Novela'
          editorial='Planeta'
          paginas='500'
          resumen='Robert Langdon, experto en simbología, es convocado a un centro de investigación suizo para analizar un misterioso signo marcado a fuego en el pecho de un físico asesinado. Allí, Langdon descubre el resurgimiento de una antigua hermandad secreta: los illuminati, que han emergido de las sombras para llevar a cabo la fase final de una legendaria venganza contra su enemigo más odiado: la Iglesia católica.

Los peores temores de Langdon se confirman cuando los illuminati anuncian que han escondido una bomba en el corazón de la Ciudad del Vaticano. Con la cuenta atrás en marcha, Langdon viaja a Roma para unir fuerzas con Vittoria Vetra, una bella y misteriosa científica. Los dos se embarcarán en una desesperada carrera contrarreloj por los rincones menos conocidos del Vaticano.'
        />
        <Libro
          titulo='Inferno'
          imagen='libro-6'
          puntuacion='4.3'
          genero='Novela'
          editorial='Planeta'
          paginas='550'
          resumen='El profesor de simbología Robert Langdon se despierta en un hospital en mitad de la noche con una herida en la cabeza. No recuerda nada de las últimas treinta y seis horas. Ni cómo ha llegado hasta allí, ni el origen del macabro objeto que los médicos descubren entre sus pertenencias.

El mundo de Langdon pronto se convierte en un caos y se ve obligado a huir por las calles de Florencia junto a una inteligente joven, Sienna Brooks, cuyas hábiles maniobras le salvan la vida. Langdon no tarda en darse cuenta de que se encuentra en posesión de una serie de inquietantes códigos creados por un brillante científi co; un genio cuya obsesión con el fi n del mundo sólo es equiparable a la pasión que siente por una de las obras maestras más infl uyentes jamás escritas: Inferno, el oscuro poema épico de Dante Alighieri.'
        />
        <Libro
          titulo='El símbolo perdido'
          imagen='libro-5'
          puntuacion='4.2'
          genero='Novela'
          editorial='Planeta'
          paginas='450'
          resumen='Washington. Langdon es convocado inesperadamente por Peter Solomon, masón, filántropo y su antiguo mentor, para dar una conferencia en el Capitolio.

Pero el secuestro de Peter y el hallazgo de una mano tatuada con cinco enigmáticos símbolos cambian drásticamente el curso de los acontecimientos. Atrapado entre las exigencias de una mente perturbada y la investigación oficial, Langdon se ve inmerso en un mundo clandestino de secretos masónicos, historia oculta y escenarios nunca antes vistos, que parecen arrastrarlo hacia una sencilla pero inconcebible verdad.'
        />
        <Libro
          titulo='Origen'
          imagen='libro-1'
          puntuacion='4.1'
          genero='Novela'
          editorial='Planeta'
          paginas='650'
          resumen='Robert Langdon, profesor de simbología e iconografía religiosa de la Universidad de Harvard, acude al Museo Guggenheim de Bilbao para asistir a un trascendental anuncio que «cambiará la faz de la ciencia para siempre». El anfitrión de la velada es Edmond Kirsch, un joven multimillonario cuyos visionarios inventos tecnológicos y audaces predicciones lo han convertido en una figura de renombre mundial. Kirsch, uno de los alumnos más brillantes de Langdon años atrás, se dispone a revelar un extraordinario descubrimiento que dará respuesta a las dos preguntas que han obsesionado a la humanidad desde el principio de los tiempos:

¿DE DÓNDE VENIMOS? ¿ADÓNDE VAMOS? '
        />
        <Libro
          titulo='Fortaleza Digital'
          imagen='libro-4'
          puntuacion='4.0'
          genero='Novela'
          editorial='Planeta'
          paginas='550'
          resumen='Cuando el sofisticado superordenador de la NSA —la agencia de Inteligencia más poderosa del mundo— intercepta un código que es incapaz de descifrar, ésta debe recurrir a su mejor criptógrafa, Susan Fletcher. Fletcher descubrirá algo que hará tambalear las más altas esferas de poder: un intrincado código que, si llegara a hacerse público, podría provocar el mayor desastre de la historia de los servicios de inteligencia de Estados Unidos.

Atrapada en una espiral de secretos y mentiras, Fletcher quiere salvar la agencia en la que cree pero, traicionada por todos, pronto se da cuenta de que debe luchar no sólo por su país, sino también por su vida. Una batalla por la supervivencia, una carrera crucial para destruir una creación de increíble sabiduría que amenaza con poner en jaque el equilibrio del poder mundial...para siempre.'
        />
      </div>
    </div>
  );
}

export default App;
