// function InfoClick() {
//     var x = document.getElementById("information");
//     var y = document.getElementById("connection");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//         y.style.display = "none";
//     }
// }

// function ConnectClick() {
//     var x = document.getElementById("information");
//     var y = document.getElementById("connection");
//     if (y.style.display === "none") {
//         y.style.display = "block";
//         x.style.display = "none";
//     }
// }

const i = $("#information");
const c = $("#connection");
const ibutton = $("#info_button");
const cbutton = $("#connect_button");

function InfoClick() {
    
    if(i.css("display") === "none")
    {
        i.css("display", "block");
        c.css("display", "none");
        ibutton.css("background-color", "rgb(17, 17, 83)");
        cbutton.css("background-color", "#2e0a68");
    }
}

function ConnectClick() {
    if(c.css("display") === "none")
    {
        c.css("display", "block");
        i.css("display", "none");
        cbutton.css("background-color", "rgb(17, 17, 83)");
        ibutton.css("background-color", "#2e0a68");
    }
}

