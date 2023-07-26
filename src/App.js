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
          resumen='Un asesinato en el Louvre y una serie de pistas en cuadros de Da Vinci llevan a un descubrimiento que podría sacudir los cimientos de la Cristiandad.'
        />
        <Libro
          titulo='Ángeles y demonios'
          imagen='libro-2'
          puntuacion='4.4'
          genero='Novela'
          editorial='Planeta'
          paginas='500'
          resumen='El experto en simbología Robert Langdon se enfrenta a una secta secreta, los Illuminati, en una carrera contra el reloj por el Vaticano.'
        />
        <Libro
          titulo='Inferno'
          imagen='libro-6'
          puntuacion='4.3'
          genero='Novela'
          editorial='Planeta'
          paginas='550'
          resumen='Robert Langdon se despierta en un hospital en Florencia, Italia, sin recuerdos de los últimos días y se ve arrastrado a un mundo basado en la obra maestra literaria de Dante, el Infierno.'
        />
        <Libro
          titulo='El símbolo perdido'
          imagen='libro-5'
          puntuacion='4.2'
          genero='Novela'
          editorial='Planeta'
          paginas='450'
          resumen='Robert Langdon es convocado inesperadamente a Washington D.C. y se encuentra con una serie de pistas conectadas con los secretos de los Masones.'
        />
        <Libro
          titulo='Origen'
          imagen='libro-1'
          puntuacion='4.1'
          genero='Novela'
          editorial='Planeta'
          paginas='650'
          resumen='Robert Langdon llega al Guggenheim de Bilbao para asistir a un importante anuncio que "cambiará la faz de la ciencia para siempre". Pronto se encuentra de nuevo en una carrera contra el tiempo.'
        />
        <Libro
          titulo='Fortaleza Digital'
          imagen='libro-4'
          puntuacion='4.0'
          genero='Novela'
          editorial='Planeta'
          paginas='550'
          resumen='Una inteligencia artificial ha sido creada con el potencial de descifrar cualquier tipo de encriptación, amenazando con destruir el secreto de las comunicaciones.'
        />
      </div>
    </div>
  );
}

export default App;
