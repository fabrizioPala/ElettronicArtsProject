const header = document.querySelector('header');
//ho creato una variabile che indica lo scroll precedente
let lastScroll = 0;

window.addEventListener('scroll', () => {
    //ho salvato in una costante la" quantità di scorrimento" verticale attuale.
  const currentScroll = window.scrollY;
// Questo controllo viene spesso utilizzato per determinare la direzione in cui l'utente sta scorrendo la pagina.
  if (currentScroll > lastScroll) {
    //se lo scroll avviene verso il basso aggiungo la classe hidden alla nav 1 
    header.querySelector('.nav1').classList.add('hidden');
    //questa transformazione sposta l'elemento verso l'alto del 100%
    header.querySelector('.nav2').style.transform = 'translateY(-100%)';
  } else {
    //se invece lo scroll è verso l'alto rimuovo la classe hidden e restituisco la trasformazione a default
    header.querySelector('.nav1').classList.remove('hidden');
    header.querySelector('.nav2').style.transform = 'translateY(0)';
  }
 //faccio in modo che la variabile lastScroll contenga il  valore della currentscroll e si ricomincia da capo
  lastScroll = currentScroll;
});