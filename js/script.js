document.addEventListener('DOMContentLoaded', (event) => {

});


// ml5.js: Object Detection with COCO-SSD (Webcam)
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/ml5/1.3-object-detection.html
// https://youtu.be/QEzRxnuaZCk

// p5.js Web Editor - Image: https://editor.p5js.org/codingtrain/sketches/ZNQQx2n5o
// p5.js Web Editor - Webcam: https://editor.p5js.org/codingtrain/sketches/VIYRpcME3
// p5.js Web Editor - Webcam Persistence: https://editor.p5js.org/codingtrain/sketches/Vt9xeTxWJ

// let img;
let video;
let detector;
let detections = [];
let closeness = 0;
let closenessPercent = 0;
let timerMvt = 0;
let oldCloseness = 0;
let isAnimating = false;
let isAnimatingOld = false;

function preload() {
    detector = ml5.objectDetector('cocossd');
}

function gotDetections(error, results) {
    if (error) {
        console.error("error");
    }
    detections = results;
    detector.detect(video, gotDetections);
}

function setup() {
    
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    document.querySelector("video").addEventListener('loadeddata', (event) => {
        detector.detect(video, gotDetections);
  });  
}

function animateDiv() {
    $(".greenDiv").toggleClass("show");
    console.log("animateGreenDiv");
    if (isAnimating) setTimeout(animateDiv, 2000);
}

let opsz1Target = 0;
let opsz2Target = 0;
let opsz3Target = 0;
let opszDISPLAY1 = 0;
let opszDISPLAY2 = 0;
let opszDISPLAY3 = 0;

let minPercent = 0.35;
let maxPercent = 0.60;


function draw() {
    image(video, 0, 0);
    let distance = 0;
    isAnimating = false;
    for (let i = 0; i < detections.length; i++) {
        let object = detections[i];
        if (object.label == "person") {
            isAnimating = true;
            distance = object.x / object.y;
            if (i == 0) {
                let adding = Math.round((object.width - closeness) * 0.05);
                closeness += adding;
                if (Math.abs(oldCloseness - closeness) > 1) {
                    oldCloseness = closeness;
                    timerMvt++;
                }
            } 
            // closenessPercent = (closeness / width);
            closenessPercent = Math.sqrt((closeness / width), 2);


            document.querySelectorAll('.distance').forEach(function(el) {
                el.innerHTML = "Distance: " + Math.round(closenessPercent * 100)/100;
              });
              document.querySelectorAll('.font').forEach(function(el) {
                el.innerHTML = "Optical Size: " + Math.round(closenessPercent * 200 * 100) /100;
              });
              
            // document.getElementById("distance").innerHTML = "Distance: " + closenessPercent;
            // document.getElementById("font").innerHTML = "Optical Size: " + closenessPercent * 200;

            // document.getElementById("timerMvt").innerHTML = "timerMvt: " + timerMvt;
        }

        if (closenessPercent < 0.4) {
            opsz1Target = 0;
            opsz2Target = 70;
            opsz3Target = 90;
        } else if (closenessPercent < 0.4) {
            opsz1Target = 0;
            opsz2Target = 70;
            opsz3Target = 90;
        } else if (closenessPercent < 0.5) {
            opsz1Target = 50;
            opsz2Target = 100;
            opsz3Target = 130;
        } else if (closenessPercent < 0.8) {
            opsz1Target = 50;
            opsz2Target = 100;
            opsz3Target = 130;
        } else if (closenessPercent > 0.8) {
            opsz1Target = 50;
            opsz2Target = 100;
            opsz3Target = 130;
        }

        opszDISPLAY1 += (opsz1Target - opszDISPLAY1) * 0.1;
        opszDISPLAY2 += (opsz2Target - opszDISPLAY2) * 0.1;
        opszDISPLAY3 += (opsz3Target - opszDISPLAY3) * 0.1;



       

        let opsz1 = clamp(invertPercent(closenessPercent), minPercent, maxPercent);
        let opsz2 = clamp(invertPercent(closenessPercent), minPercent, maxPercent);
        let opsz3 = clamp(invertPercent(closenessPercent), minPercent, maxPercent);
        let opsz4 = clamp(invertPercent(closenessPercent), minPercent, maxPercent);
        let opsz5 = clamp(invertPercent(closenessPercent), minPercent, maxPercent);

        opsz1 = map(opsz1, minPercent, maxPercent, 200, 50);
        opsz2 = map(opsz2, minPercent, maxPercent, 200, 70);
        opsz3 = map(opsz3, minPercent, maxPercent, 200, 100);
        opsz4 = map(opsz4, minPercent, maxPercent, 200, 0);
        opsz5 = map(opsz5, minPercent, maxPercent, 200, 125);


        $(".page1").css("font-variation-settings", "\"opsz\"" + opsz1);
        $(".page2").css("font-variation-settings", "\"opsz\"" + opsz3);
        $(".page3").css("font-variation-settings", "\"opsz\"" + opsz2);
        $(".page4text1").css("font-variation-settings", "\"opsz\"" + opszDISPLAY2);
        $(".page4text2").css("font-variation-settings", "\"opsz\"" + opszDISPLAY1);
        $(".page4text3").css("font-variation-settings", "\"opsz\"" + opszDISPLAY2);
        $(".page4text4").css("font-variation-settings", "\"opsz\"" + opszDISPLAY1);
        $(".page4numero").css("font-variation-settings", "\"opsz\"" + opszDISPLAY3);
        $(".page5").css("font-variation-settings", "\"opsz\"" + opsz1);
        $(".page6").css("font-variation-settings", "\"opsz\"" + opsz3);
        $(".page7").css("font-variation-settings", "\"opsz\"" + opsz1);
        $(".page8").css("font-variation-settings", "\"opsz\"" + opsz5);
        $(".page9").css("font-variation-settings", "\"opsz\"" + opsz1);
        $(".page10").css("font-variation-settings", "\"opsz\"" + opsz2);
        $(".page11text1").css("font-variation-settings", "\"opsz\"" + opszDISPLAY2);
        $(".page11text2").css("font-variation-settings", "\"opsz\"" + opszDISPLAY1);
        $(".page11text3").css("font-variation-settings", "\"opsz\"" + opszDISPLAY2);
        $(".page11text4").css("font-variation-settings", "\"opsz\"" + opszDISPLAY1);
        $(".page11numero").css("font-variation-settings", "\"opsz\"" + opsz2);
        $(".page12").css("font-variation-settings", "\"opsz\"" + opsz3);
        $(".page13").css("font-variation-settings", "\"opsz\"" + opsz1);
        $(".page14").css("font-variation-settings", "\"opsz\"" + opsz1);
        $(".page15").css("font-variation-settings", "\"opsz\"" + opsz4);
    









        console.log(invertPercent(closenessPercent));
        

        

       
        


        stroke(0, 255, 0);
        strokeWeight(4);
        noFill();
        rect(object.x, object.y, object.width, object.height);
        noStroke();
        fill(255);
        textSize(24);
        text(object.label, object.x + 10, object.y + 24);
        text(distance, object.x + 10, object.y + 48);
    }
    if (isAnimatingOld === false && isAnimating === true) {
        // animateDiv();
    }

    isAnimatingOld = isAnimating;
}

function invertPercent(per) {
    return Math.abs(per - 1); //1 -> 0; 0 -> 1: 0.2 -> 0.8; etc
}

function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

function map(num, start1, stop1, start2, stop2) {
    return ((num - start1) / (stop1 - start1)) * (stop2 - start2) + start2
  }