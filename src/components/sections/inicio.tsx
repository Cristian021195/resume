import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (//style={{backgroundColor:'#EAEAEA'}} className='d-flex justify-content-center align-items-center intro'
  <><h1>Inicio</h1>
    <section id='inicio' style={{backgroundColor:'#272822', display:'flex', justifyContent:'center'}} className='intro'>
        <div style={{paddingTop:'5em', display:'flex', alignItems:'center'}}>
          <div>
            <code style={{color:'whitesmoke'}}>
              <span style={{color:'#6a993e'}}>/*Recuerde que las cosas no son siempre como parecen ser. La curiosidad crea posibilidades y oportunidades - Roy T. Bennett */</span><br />
            </code>
            <code style={{color:'whitesmoke'}}>
              <span style={{color:'#6CD5DB'}}>interface</span><span style={{color:'#4ebc7c'}}> IPersona</span>&#123;<br />
              &emsp;<span style={{color:'#6CD5DB'}}>nombre</span>:<span style={{color:'#4ebc7c'}}>string</span>,<br />
              &emsp;<span style={{color:'#6CD5DB'}}>apellido</span>:<span style={{color:'#4ebc7c'}}>string</span>,<br />
              &emsp;<span style={{color:'#6CD5DB'}}>profesion</span>:<span style={{color:'#4ebc7c'}}>string</span><br />
              &#125;
              <br />
              <span style={{color:'#F7286F'}}>const </span>
              <span style={{color:'#6CD5DB'}}>cristian</span>:<span style={{color:'#4ebc7c'}}>IPersona</span> = &#123;<br />
              &emsp;<span style={{color:'#6CD5DB'}}>nombre</span>: <span style={{color:'#F5A44E'}}>'Cristian Ismael'</span>,<br/>
              &emsp;<span style={{color:'#6CD5DB'}}>apellido</span>: <span style={{color:'#F5A44E'}}>'Gramajo'</span>,<br/>
              &emsp;<span style={{color:'#6CD5DB'}}>profesion</span>:<span style={{color:'#F5A44E'}}>'Desarrollador Web'</span>
              <br />
              &#125;
              <br />
              <span style={{color:'#F7286F'}}>function </span>
              <span style={{color:'#AADB4D'}}>mePresento</span>
              <span style={{color:'whitesmoke'}}>(
                <span style={{color:'#6CD5DB'}}>persona</span>:
                <span style={{color:'#4ebc7c'}}>IPersona</span>):<span style={{color:'#4ebc7c'}}>string</span>&ensp;
              </span>&#123; <br />
              &emsp;<span style={{color:'#F7286F'}}>return </span>
              <span style={{color:'#F5A44E'}}>`Hola, mi nombre es: 
                <span style={{color:'#2566ca'}}>$&#123;<span style={{color:'#6CD5DB'}}>persona.nombre</span>&#125; $&#123;<span style={{color:'#6CD5DB'}}>persona.apellido</span>&#125;</span> y soy <span style={{color:'#2566ca'}}>$&#123;<span style={{color:'#6CD5DB'}}>persona.profesion</span>&#125;</span>`
              </span>;
              <br />
              &#125;
            </code>
          </div>
        </div>
    </section>
    </>
  );
});//<h1>Inicio</h1>