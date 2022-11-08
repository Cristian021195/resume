import { component$ } from '@builder.io/qwik';
interface ICardImage{
  titulo?:string,
  descripcion?:string,
  img?:string,
  size?:string,
  border?:string,
  link?:string,
  repo?:string,
}
export default component$(({titulo='', descripcion='', img='https://picsum.photos/200/300', size='14em', border='', link, repo='http://google.com.ar'}:ICardImage) => {
  return (
    <div style={{backgroundColor:'whitesmoke', borderRadius:'0.5em', width:size, minWidth:size, margin:'2em', boxShadow: '5px 7px 7px 0px rgba(0,0,0,0.1)'}}>
        <div className={'card-header d-flex align-items-center '+border} style={{minHeight:'10em', backgroundColor:'#ECEFF1', borderRadius:'50%'}}>
          <img src={img} width='75%' height='75%' alt="images" style={{borderRadius:'0.5em 0.5em 0 0'}} loading="lazy"/>
        </div>
        <div className='card-body p-1'>
          <h2 style={{textAlign:'center'}}>{titulo}</h2>
          <p>{descripcion}</p>
        </div>
        { link && 
            <div className='card-footer d-flex justify-content-between p-1'>
              <a href={link} className='btn p-1' style={{backgroundColor:'#000', textDecoration:'none', color:'whitesmoke'}}>Probar</a>
              <a href={repo} className='btn p-1' style={{backgroundColor:'#A2B5BB', textDecoration:'none', color:'whitesmoke'}}>Ver Repositorio</a>
            </div>
        }
        
    </div>
  );
});
