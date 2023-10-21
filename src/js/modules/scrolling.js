
// header animation on scroll:

export const scrolling = () => {
    
  let scroll = 0;      
  window.onscroll = onScroll;   
  function onScroll() {
    let top = window.pageYOffset;  
    if (scroll > top) {
      //console.log('1'); 
      document.querySelector('.header').classList.remove('header--scroll');      
    
    } else if (scroll < top) {
      //console.log('0');  
      document.querySelector('.header').classList.add('header--scroll');        
    }
    scroll = top;  
    
  }
  
}
