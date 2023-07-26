import React from "react";
import '../hojas-de-estilo/Libro.css';

function Libro(props) {
  return (
    <ul className='contenedor-libro'>
      <article className='item-libro'>
        <img
          className='imagen-libro'
          src={require(`../imagenes/${props.imagen}.jpg`)}
          alt=""/>
        <div className='contenedor-texto-libro'>
          <h2 className='titulo-libro'>{props.titulo}</h2>
          <dl className='contenido-libro'>
            <div className='puntuacion-libro'>
              <dt className='texto-azul'>
                <span className='sr-only'>Puntuación</span>
                <svg width="16" height="20" fill="currentColor">
                  <path className='svg-item'
                        d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"/>
                </svg>
              </dt>
              <dd>{props.puntuacion}</dd>
            </div>
            <div>
              <dt className='sr-only'>Genero</dt>
              <dd className='genero-libro'>{props.genero}</dd>
            </div>
            <div className='editorial-libro'>
              <dt></dt>
              <dd>{props.editorial}</dd>
            </div>
            <div>
              <dt className='sr-only'>Páginas</dt>
              <dd className='paginas-libro'>
                <svg width="2" height="2" fill="currentColor" className="svg-item" aria-hidden="true">
                  <circle cx="1" cy="1" r="1"/>
                </svg>
                {props.paginas} páginas
              </dd>
            </div>
            <div className='resumen-libro'>
              <dt className='sr-only'>Resumen</dt>
              <dd>
                {props.resumen}
              </dd>
            </div>
          </dl>
        </div>
      </article>
    </ul>
  );
}

export default Libro;