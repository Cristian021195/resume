import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header className='d-flex justify-content-end align-items-center'>
      <ul className='d-flex justify-content-center h-scroll-style'>
        <li><a href="#inicio">inicio</a></li>
        <li><a href="#sobre-mi">sobre mi</a></li>
        <li><a href="#conocimientos">conocimientos</a></li>
        <li><a href="#extras">extras</a></li>
        <li><a href="#proyectos">proyectos</a></li>
        <li><a href="#contacto">contacto</a></li>
      </ul>
    </header>
  );
});
