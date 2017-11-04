
var input;//variable to store 

var recColor = "#21F7F3";
//var canvas = document.createElement('canvas');

var c = document.getElementById("canvas");

var ctx = c.getContext("2d");

//canvas coordinate for rectangle formation
var x = 120;
var y = 20;
var z = y;

//Dynamically change the height and width of rectangle with respect to the input form user form
var width = 150;
var height = 100;

//function to count the rectangle count 
function RecCount() {

    input = document.getElementById("rec").value;

}

function blurFunction() {
    //alert("hello");
    //alert(input);

}

//Function to draw rectangle inside canvas
function Rectangle() {

    for (i = 0; i < input; i++) {
        /*var canvas = document.getElementById("canvas");*/


        ctx.fillStyle = recColor;
        ctx.fillRect(x, y, width, height);

        y += 120;
        z = y;
        //code to randomly generate the color for recangle
        var letters = '0123456789ABCDEF';
        var color = '#';
        var arr = [];
        for (var j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)];
            recColor = color;
            arr[i] = color;
        }

    }

    //alert(arr[i-1]);    

}

//function to remove the current rectangle
function deleteRectangle() {
    //alert("hi");
    ctx.clearRect(x, z - 120, 150, 100);
    z -= 120;
}

//function to display the block form
function editFunction() {
    document.getElementById("myDIV").style.display = "block";
}

//function to edit properties of the rectangular list
function editProp() {
    width = document.getElementById("width").value;
    height = document.getElementById("height").value;
    //alert(width);

    //remove the current rectangle canvas and follow with the edit Rectangle printing
    deleteRectangle();
    printEditedRec();

}

//function to print an edited recatangles
function printEditedRec() {
    ctx.fillStyle = recColor;
    ctx.fillRect(x, z, width, height);

}