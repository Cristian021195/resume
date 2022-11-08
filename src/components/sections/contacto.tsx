import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section id='contacto' className='d-flex justify-content-end align-items-center'>
        <h1>Contacto</h1>
    </section>
  );
});
