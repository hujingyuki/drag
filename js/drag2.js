//demo2
target2.ondragenter = function(e) {
  e = e || event;
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
  this.innerHTML = "有元素进入目标区域";
  this.style.background = "red";
};
target2.ondragover = function(e) {
  e = e || event;
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
};
target2.ondragleave = function(e) {
  e = e || event;
  this.innerHTML = "元素已离开目标区域";
  this.style.backgroundColor = "lightblue";
};
target2.ondrop = function(e) {
  e = e || event;
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
  result.innerHTML = "落入目标区域的文字为:" + e.dataTransfer.getData("text");
  this.innerHTML = "元素已落在目标区域";
  this.style.backgroundColor = "orange";
};
