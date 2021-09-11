var box1,box2;
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(50,50,20,20,2);
  box2 = new Box(220,220,20,20,-3);
}

function draw() 
{
  background(220);
  box1.show();
  box1.move();

  box2.show();
  box2.move();

  
}

