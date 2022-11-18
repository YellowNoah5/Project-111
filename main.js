Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#camera")

Webcam.attach("#camera")

function cap_picture() {
    Webcam.snap(function(picture){
        document.getElementById("snapshot").innerHTML = "<img id='captureimg' src ='" +picture+"'>"
    })
}
console.log("ml5 version:", ml5.version)

classifier = ml5.imageClassifier("model.json", modelLoaded)

function modelLoaded() {
    console.log("Model Loaded")
}