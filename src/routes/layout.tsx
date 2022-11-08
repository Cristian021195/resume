import { component$ } from '@builder.io/qwik'; //Slot para rutas
import Header from '../components/header/header';
import Inicio from '~/components/sections/inicio';
import Referencia from '~/components/sections/referencia';
import Conocimientos from '~/components/sections/conocimientos';
import Extras from '~/components/sections/extras';
import Proyectos from '~/components/sections/proyectos';
import { compartir } from '~/Utils/compartir';
export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <Inicio/>
        <Referencia/>
        <Conocimientos/>
        <Extras/>
        <Proyectos></Proyectos>
      </main>
      <footer className='p-3' id='contacto' style={{backgroundColor:'#18191a', color:'whitesmoke', textAlign:'center'}}>
        <h1>Contacto</h1>
        <p>Hablame por alguna de estas redes sociales, ó &nbsp;
          <button className='btn p-1' 
            style={{backgroundColor:'#E57373', color:'whitesmoke'}} onClick$={()=>{
              compartir('Portfolio', 'Cristian Gramajo', document.location.href);
            }}>Comparte</button>
           &nbsp;este portfolio a quien necesite.</p>
        <div>
          <a href="mailto:cristiangramajo015@gmail.com" className='btn p-1' style={{backgroundColor:'#E57373', color:'whitesmoke'}}>GMail</a>&nbsp;&nbsp;
          <a href="https://github.com/Cristian021195" className='btn p-1' style={{backgroundColor:'#546E7A', color:'whitesmoke'}}>GitHub</a>&nbsp;&nbsp;
          <a href="https://drive.google.com/file/d/12J3lBtxtGnumXmhQArdV0xGZigtWchUl/view?usp=sharing" className='btn p-1' 
          style={{backgroundColor:'#FBC02D', color:'whitesmoke'}}>CV</a>&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/cristian-ismael-gramajo-760534165/" className='btn p-1' 
          style={{backgroundColor:'#0A66C2', color:'whitesmoke'}}>LinkedIn</a>&nbsp;&nbsp;
        </div>
      </footer>
    </>
  );
});
