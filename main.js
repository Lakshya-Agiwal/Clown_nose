var nose_x = 0;
var nose_y = 0;
var img = "";
var hat="";

function preLoad() {

    img = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
    hat = loadImage("https://i.postimg.cc/MKLGyz0R/hat.jpg");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(623.569, 100);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    var posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", got_poses);
}

function modelLoaded() {
    console.log(ml5.version);

}

function draw() {
    image(video, 0, 0, 300, 300);
    ////fill("red");
  //  circle(nose_x, nose_y, 40);
  var y = nose_y-10;
    image(img,nose_x,nose_y,40,40);
    image(hat,nose_x,y,60,60);
}

function got_poses(result) {
    if (result.length != 0) {
        console.log(result);
        nose_x = result[0].pose.nose.x;
        nose_y = result[0].pose.nose.y;
        console.log(nose_x);
        console.log(nose_y);
    }
}

function shot() {
    save("Filter.jpg");
}