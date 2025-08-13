let drawItem;
let clicked;

function setup() {
  createCanvas(800, 800);
  var elements = {
    0:['Fire'],
    1:['Water'],
    2:['Air'],
    3:['Earth']
  };
  
  var item = function(itm,x,y,id=null){
    this.id=id;
    this.itm=itm;
    this.name=elements[itm][0];
    this.x=x;
    this.y=y;
  }
  
  items = [new item(1,400,400), new item(0,300,300)];
  
  drawItem = function(id){
    itm = items[id]
    fill(0);
    textAlign(CENTER,CENTER);
    textSize(50);
    text(itm.name,itm.x,itm.y);
  }
}

function mousePressed(){
  k = 0;
  while (k < items.length){
    itm = items[k]
    if (mouseX>=itm.x-50 && mouseX<=itm.x+50 && mouseY>=itm.y-50 && mouseY<=itm.y+50){
      clicked = k;
    }
    k++;
  }
}

function mouseDragged(){
  if (clicked != null){
    items[clicked].x=mouseX;
    items[clicked].y=mouseY;
  }
}

function mouseReleased(){
  clicked = null;
}

function draw() {
  fill(255)
  rect(0,0,800,800);
  drawItem(0);
}
