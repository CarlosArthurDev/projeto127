scoreRightWrist = 0;
 scoreLeftWrist = 0;
  rightWristX = 0;
   rightWristY = 0;
    leftWristX = 0; 
    leftWristY=0;
var musica=""
function preload(){
    musica=loadSound("music.mp3")
}
function setup(){
    canvas=createCanvas(400,400)
    canvas.center()

    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}
function draw(){
    image(video,0,0,400,400)

}
function play(){
    musica.play()
    musica.setVolume(1)
    musica.rate(1)
}
function modelLoaded(){
    console.log("modelo carregado")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        scoreRightWrist=results[0].pose.keypoints[10].score
        scoreLeftWrist=results[0].pose.keypoints[9].score
        rightWristX=results[0].pose.rightWrist.x
        rightWristY=results[0].pose.rightWrist.y
        leftWristX=results[0].pose.leftWrist.x
        leftWristY=results[0].pose.leftWrist.y 
    }
}
