import { component$, useStylesScoped$ } from '@builder.io/qwik';
import CardImage from '../UI/CardImage';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section id='conocimientos'>
      <h1>Conocimientos</h1>
      <div className='d-flex justify-content-center'>
        <article className='col-8 p-2 d-flex flex-wrap justify-content-evenly h-scroll'>
          <CardImage size='12em' border='p-1' titulo='HTML 5' img='/svg/HTML5.svg'/>
          <CardImage size='12em' border='p-1' titulo='CSS 3' img='/svg/CSS3.svg'/>
          <CardImage size='12em' border='p-1' titulo='JAVASCRIPT' img='/svg/javascript.svg'/>
          <CardImage size='12em' border='p-1' titulo='BOOTSTRAP' img='/svg/bootstrap5.svg'/>
          <CardImage size='12em' border='p-1' titulo='MATERIALIZE' img='/svg/materialize.svg'/>
          <CardImage size='12em' border='p-1' titulo='JQUERY' img='/svg/jquery.svg'/>
          <CardImage size='12em' border='p-1' titulo='REACT' img='/svg/react-black.svg'/>
          <CardImage size='12em' border='p-1' titulo='PHP' img='/svg/php-1.svg'/>
          <CardImage size='12em' border='p-1' titulo='NODE JS' img='/svg/nodejs.svg'/>
          <CardImage size='12em' border='p-1' titulo='MYSQL' img='/svg/mysql-2.svg'/>
        </article>
      </div>
    </section>
  );
});