document.addEventListener("mousedown", myScript);
document.addEventListener(" mouseup", myScript2);
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