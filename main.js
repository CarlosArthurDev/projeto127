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
    fill("#FF0000")
    stroke("#FF0000")
    if(scoreLeftWrist>0.2){
        circle(leftWristX,leftWristY,20)
        InNumberleftWristY=Number(leftWristY)
        removeDecimais=floor(InNumberleftWristY)
        volume=removeDecimais/500
        document.getElementById("volume").innerHTML="volume="+volume
        musica.setVolume(volume)
    }
    if(scoreRightWrist>0.2){
        circle(rightWristX,rightWristY,20)
        if(rightWristY>0 && rightWristY<=100){
           document.getElementById("speed").innerHTML="velocidade=0.5"  
           musica.rate(0.5)
        }
        else if(rightWristY>100 && rightWristY<=200){
            document.getElementById("speed").innerHTML="velocidade=1"  
            musica.rate(1)
        }
        else if(rightWristY>200 && rightWristY<=300){
            document.getElementById("speed").innerHTML="velocidade=1.5"  
            musica.rate(1.5)
        }
        else if(rightWristY>300 && rightWristY<=400){
            document.getElementById("speed").innerHTML="velocidade=2"  
            musica.rate(2)
        }
        else if(rightWristY>400 && rightWristY<=500){
            document.getElementById("speed").innerHTML="velocidade=2.5"  
            musica.rate(2.5)
        }
    }
}
    
function tocar(){
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
