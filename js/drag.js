drag(document.getElementById('ss'));

/* 拖拽事件 */
function drag(element, dragFn) {
  let disX = 0;
  let disY = 0;
  let realL = "";
  let realT = "";
  element.style.cursor = 'move';
  element.onmousedown = event => {
    var event = event || window.event;
    disX = event.clientX - element.offsetLeft;
    disY = event.clientY - element.offsetTop;
    
    document.onmousemove = event => {
      var event = event || window.event;
      let iL = event.clientX - disX;
      let iT = event.clientY - disY;
      let maxL = element.parentNode.clientWidth - element.offsetWidth;
      let maxT = element.parentNode.clientHeight - element.offsetHeight;

      iL <= 0 && (iL = 0);
      iT <= 0 && (iT = 0);
      iL >= maxL && (iL = maxL);
      iT >= maxT && (iT = maxT);

      realL = iL + "px";
      realT = iT + "px";

      element.style.left = realL;
      element.style.top = realT;
      return false;
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
      this.releaseCapture && this.releaseCapture();
      if (dragFn) {
        dragFn({
          left: realL,
          top: realT
        });
      }
    };
    this.setCapture && this.setCapture();
    return false;
  };
}




