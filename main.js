noseX=0;
noseY=0;

function preload()
{

}

function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    noseX=results[0].pose.nose.x-40;
    noseY=results[0].pose.nose.y;
}

}

function modelLoaded()
{
    console.log('poseNet is initialized');
}

function draw()
{
image(video,0 ,0 ,300 ,300);
}

function take_snapshot()
{
    save("myfilteredimage.png");
}