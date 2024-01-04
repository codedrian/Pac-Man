let world = [
    [2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,2,2,1,2,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2]
];

function displayMap() {

    let output = "";

    for (let i = 0; i < world.length; i++) {
        output = output + "<div class = 'row'>"

        for (let j = 0; j < world[i].length; j++) {
            if( world[i][j] == 2) {
                output += "<div class ='brick'></div>"
            }
            else if(world[i][j] == 1) {
                output += "<div class ='coin'></div>"
            }
            // output +=  "\t" + world[i][j];

        }
        output += "</div>"

    }

    document.getElementById("world").innerHTML = output;
}




displayMap();
