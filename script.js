/* var index = 0; */

function changeColor(){
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    var hexcode = '';

    for(var i=0; i < 6; i++ ){
        var r = Math.random()
        var random_index = Math.floor(r * hex_numbers.length);
        /* console.log(r) */
        hexcode += hex_numbers[random_index];
        /* console.log(hexcode) */
    }
    document.getElementById("hex-code").innerHTML = hexcode;
    document.body.style.backgroundColor = "#" + hexcode;

}