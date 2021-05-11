canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
car1_width = 100;
car1_height = 90;
car2_width = 100;
car2_height = 90;
background_image = "racing.png";
car1_image = "car1.png";
car2_image = "car2.png";

car1_x = 10;
car1_y = 10;
car2_x = 20;
car2_y = 10;
function add(){
    background_img=new Image();
    background_img.onload = upload;
    background_img.src = background_image;
    car1_img=new Image();
    car2_img=new Image();

    car1_img.onload = upload_car1;

car2_img.onload = upload_car2;
car1_img.src =car1_image ;
car2_img.src =car2_image ;

}
function upload(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);

}
function upload_car2(){
    ctx.drawImage(car1_img, car1_x, car1_y, car1_width, car1_height );
    ctx.drawImage(car2_img, car2_x, car2_y, car2_width, car2_height );

}
