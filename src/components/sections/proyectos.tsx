import { component$, useStylesScoped$ } from '@builder.io/qwik';
import CardImage from '../UI/CardImage';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
    <section id='proyectos'>
      <h1>Proyectos</h1>
      <div className='d-flex justify-content-center'>
        <article className='col-8 p-2 d-flex flex-wrap justify-content-evenly h-scroll'>
          <CardImage border='p-1' size='16em' link='https://horabondi.vercel.app/' repo='https://github.com/Cristian021195/horabondi' img='/svg/horabondi.svg' titulo='HoraBondi' descripcion='Esta es una SPA y PWA, en la cual podemos consultar los horarios de los colectivos urbanos de la provincia de Tucumán. Entre ellos: Exprebus, Tesa, Gutiérrez. Además, podemos consultar los precios, ver publicaciones de cada empresa o del sitio, e imprimir los horarios. Hecho en HTML, CSS, JS, Materialize, PHP y MySQL.'>
            <a href="#" className='btn p-1' style={{backgroundColor:'red'}}>Probar</a>
          </CardImage>
          <CardImage border='p-1' size='16em' link='https://panerita.000webhostapp.com/panerita/' repo='https://github.com/Cristian021195/panerita' img='/svg/panerita.svg' titulo='Panerita' descripcion='PWA para distribuidora de productos alimenticios. La aplicación trabaja con roles y diferentes permisos, genera, edita e imprime comprobantes, maneja stock de productos y analiza la cantidad de productos vendidos por fechas. Hecho en HTML, CSS, JS, Bootstrap 5, PHP y MySQL.'>
          <a href="#" className='btn p-1' style={{backgroundColor:'red'}}>Probar</a>
          </CardImage>
          <CardImage border='p-1' size='16em' link='https://cristian021195.github.io/notas/' repo='https://github.com/Cristian021195/notas' img='/svg/notas.svg' titulo='Notas' descripcion='Es una PWA centrada en el funcionamiento offline de una simple aplicación de notas, con la librería PouchDB y uso de una tabla dinámica que yo diseñé. Hecho con Bootstrap, HTML y JS.'>
          <a href="#" className='btn p-1' style={{backgroundColor:'red'}}>Probar</a>
          </CardImage>
          <CardImage border='p-1' size='16em' link='https://climap-6e45e.web.app/' repo='https://climap-6e45e.web.app/' img='/svg/climap.svg' titulo='Climap' descripcion='Es una PWA de muy simple diseño, con uso de React Router y alojada en Google Cloud Services (lo que permite mejor experiencia con las rutas), hace uso de las API’S de Openweathermap y Mapbox. Hecho con React JS, y CSS.'>
          <a href="#" className='btn p-1' style={{backgroundColor:'red'}}>Probar</a>
          </CardImage>
          <CardImage link='https://escritos-f9d8d.web.app/' border='p-1' size='16em' img='/svg/escritos.svg' titulo='Escritos' descripcion='Es una PWA, alojada en Firebase Hosting. Hace uso de una API propia montada en heroku y otra pública, además puede notificarte cuando haya nuevos escritos. Hecho con React JS, y CSS.'>
          </CardImage>
          <CardImage link='https://listacompras-omega.vercel.app/' border='p-1' size='16em' img='/svg/lista-compras.svg' titulo='ListaCompras' descripcion='Es una PWA, desplegada en Vercel, hecho con React JS, y CSS + DexieJS. Sirve para llevar control en un dia de compras en el supermercado'></CardImage>
        </article>
      </div>
    </section>
    </>
  );
});
