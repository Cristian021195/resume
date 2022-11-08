export function compartir(title='Titulo', text='Texto a compartir', url='/'):boolean{
    if(navigator){    
      if(navigator.share){
        navigator.share({
            title,
            text,
            url
        }).then(()=>{
            return true;
        }).catch(()=>{
            return false;
        })
      }else{
          return false;
      }
    }else{
      return false;
    }
    return false;
}