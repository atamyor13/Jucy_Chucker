document.addEventListener("onmouseup", myScript);
document.addEventListener("onmouseup", myScript2);
var shooting = false;
function Controls(){
    this.actualizar = function(){
        if(shooting){
            console.log("shoot");
        }
    }
}

function myScript(){
    shooting = true;
}

function myScript2(){
    shooting = false;
}