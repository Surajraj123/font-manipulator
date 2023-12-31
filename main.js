noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        righttwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);

        console.log("leftwristX = " + leftwristX + "rightwristX = " + rightwristX + "difference = " + difference)
    }
}

function draw()
{
    background("#969A97")

    document.getElementById("font_size").innerHTML = "Font Size of the Text will be :- " + difference + "px";
    textSize(difference);
    fill('#F90093');
    stroke('#F90093');
    text('Suraj Sahoo', 50, 400);
}