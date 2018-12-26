/* 拖拽数据 */
window.onload = function() {
  var box1Div, box2Div, box3Div;
  box1Div = document.getElementById("box1");
  box2Div = document.getElementById("box2");
  box3Div = document.getElementById("box3");

  box1Div.ondragover = function(e) {
    e.preventDefault();
  };
  box2Div.ondragover = function(e) {
    e.preventDefault();
  };

  box3Div.ondragstart = function(e) {
    console.log(e);
    //设置被拖动的元素
    e.dataTransfer.setData("dragId", "box3");
  };

  //落点元素的处理方法
  box1Div.ondrop = drophandler;
  box2Div.ondrop = drophandler;
};

function drophandler(e) {
  console.log(e);
  //获取被拖动的元素的id
  var div = document.getElementById(e.dataTransfer.getData("dragId")); 
  //e.target表示落点元素，将被拖动的元素添加到落点元素中
  e.target.appendChild(div);
}