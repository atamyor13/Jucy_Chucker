document.addEventListener("keydown", onDocumentKeyDown, false);

function Controls(miPlayer) {

    player = miPlayer;
    
    this.actualizar = function () {
        
    }

}

function onDocumentKeyDown(event) {
    var keyCode = event.which;

    //tecla espacio
    if(keyCode == 32){
        console.log("shoot ");
        player.shoot();
    }
};
