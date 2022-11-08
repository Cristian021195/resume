import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section id='sobre-mi'>
      <h1>Sobre Mí</h1>
      <div className='d-flex justify-content-center'>
        <article className='col-6 p-3'>
        <p>Tengo 26 años y el Desarrollo Web es mi pasión.</p><br/>
        <p>Desarrollo aplicaciones fullstack modernas. Me gusta enfocarme mucho en el diseño responsive para la mejor experiencia de usuario en cualquier dispositivo.</p><br/>
        <a href="https://drive.google.com/file/d/12J3lBtxtGnumXmhQArdV0xGZigtWchUl/view?usp=sharing" target="_blank" rel="noopener" className='btn p-1' 
        style={{backgroundColor:'#0A66C2', color:'whitesmoke'}}>
          Curriculum Vitae
        </a>
        </article>
      </div>
    </section>
  );
});
