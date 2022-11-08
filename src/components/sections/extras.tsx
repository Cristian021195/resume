import { component$, useStylesScoped$ } from '@builder.io/qwik';
import CardImage from '../UI/CardImage';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section id='extras'>
      <h1>Extras</h1>
      <div className='d-flex justify-content-center'>
        <article className='col-8 p-2 d-flex flex-wrap justify-content-evenly h-scroll'>
          <CardImage border='p-1' size='12em' titulo='POSTMAN' descripcion='Manejo de ambientes de desarrollo, perfiles.' img='/svg/postman.svg'/>
          <CardImage border='p-1' size='12em' titulo='ADOBE XD' descripcion='Diseño de logos e interfaces' img='/svg/adobe-xd.svg'/>
          <CardImage border='p-1' size='12em' titulo='FIGMA' descripcion='Diseño de logos e interfaces' img='/svg/figma.svg'/>
          <CardImage border='p-1' size='12em' titulo='INGLES' descripcion='Ingles intermedio para lectura y escritura' img='/svg/languaje.svg'/>
          <CardImage border='p-1' size='12em' titulo='PAQUETE OFFICE' descripcion='Excel, Word, OneNote, Powerpoint' img='/svg/office.svg'/>
        </article>
      </div>
    </section>
  );
});


/*
<CardImage titulo='FIGMA' descripcion='Diseño de logos e interfaces'/>
<CardImage titulo='INGLES' descripcion='Ingles intermedio para lectura y escritura'/>
<CardImage titulo='PAQUETE OFFICE' descripcion='Excel, Word, OneNote, Powerpoint'/>
*/