//demo3
//兼容IE8-浏览器
test3.onmousedown = function() {
  if (this.dragDrop) {
    this.dragDrop();
  }
};
//浏览器兼容
function browser(e) {
  return e || event;
}

//阻止默认事件
function stopDefault(e){
  e = browser(e);
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

test3.ondragstart = function(e) {
  browser(e);
  //兼容firefox浏览器
  e.dataTransfer.setData("text", "");
  e.dataTransfer.effectAllowed = "all";
};
target01.ondragenter = target02.ondragenter = 
target03.ondragenter = target04.ondragenter = function(e) {
  stopDefault(e);
  this.style.background = "red";
};

target01.ondragover = function(e) {
  stopDefault(e);
  e.dataTransfer.dropEffect = "none";
};
target02.ondragover = function(e) {
  stopDefault(e);
  e.dataTransfer.dropEffect = "move";
};

target03.ondragover = function(e) {
  stopDefault(e);
  e.dataTransfer.dropEffect = "copy";
};

target04.ondragover = function(e) {
  stopDefault(e);
  e.dataTransfer.dropEffect = "link";
};
target01.ondragleave = target02.ondragleave 
= target03.ondragleave = target04.ondragleave = function(e) {
  browser(e);
  this.style.backgroundColor = "lightblue";
};
target01.ondrop = target02.ondrop 
= target03.ondrop = target04.ondrop = function(e) {
  stopDefault(e);
  this.style.backgroundColor = "orange";
};
