var canvas = document.getElementById("canvas");
var dwn = document.getElementById('btndownload')
canvas.width= 1668;
canvas.height= 1123;

document.getElementById("canvas").style.display = "none"; // after
document.getElementById("preview").style.display = "none"; // after
document.getElementById("download").style.display = "none"; //after

var context = canvas.getContext("2d");

function PreviewImage(input) {
   
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('preview').setAttribute("src",e.target.result);
    };
    reader.readAsDataURL(input.files[0]);

   
    
}

function setImage() {
    var image = new Image();
    image.crossOrigin = "anonymous";
    image.src = "bg1.jpg";

    image.onload = function() {
        context.drawImage(image, 0, 0, 1668, 1123);
 
        context.font= '40px Almarai';
        context.fillStyle= '#b69208';
        context.textAlign= 'center';
     
        context.moveTo(0,canvas.height/2);
        context.fillText(document.getElementById("txtName").value, 600, 800);
 
        var dataURL = canvas.toDataURL("image/jpg", 1.0);
        var a = document.createElement("a");
        a.download = "Eid.jpg";
        a.href = dataURL;
        // simulate a click on the anchor element
        a.click();
    }
 }


download_img = function(el) {
 
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};



