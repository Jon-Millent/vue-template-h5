class Rem{
  constructor(){
    this.render();
  }
  render() {
    let SCREENTYPE = 'orientationchange' in window ? 'orientationchange' : 'resize';
    let DEFINENUMBER = 10;
    function setView(){
      let gg = document.documentElement;
      let width = gg.clientWidth;
      if(gg.clientWidth > 600){
        width = 600;
      }else if(gg.clientWidth < 320){
        width = 320;
      }
      gg.style.fontSize = width / DEFINENUMBER + 'px';
      return setView;
    }
    window.addEventListener(SCREENTYPE,setView());
    document.addEventListener('touchstart',function (event) {
      if(event.touches.length>1){
        event.preventDefault();
      }
    })
    var lastTouchEnd=0;
    document.addEventListener('touchend',function (event) {
      var now=(new Date()).getTime();
      if(now-lastTouchEnd<=300){
        event.preventDefault();
      }
      lastTouchEnd=now;
    },false);
  }
}


export default Rem;
