function _main(canvasDom, width, height) {
    let canvas = document.querySelector(canvasDom)
    let context = canvas.getContext('2d')

    let images = {
        house: 'images/house.png',
        block: 'images/block.png',
        bull: 'images/bull.png',
        down: 'images/down.png',
        left: 'images/left.png',
        right: 'images/right.png',
        up: 'images/up.png',
        wall: 'images/wall.png',
        boxedBull: 'images/boxedBull.png',
    }
    let game = new Game(canvas)
    initImages(images, game)
    
}

function initImages(images, game) {
    //pre-load all of the image
    
    let loads = []
    let imgNames = Object.keys(images)
    for (let i = 0; i < imgNames.length; i++){
        let name = imgNames[i]
        let path = images[name]
        let img = new Image()
        img.src = path
        img.onload = function (){
            images[name] = img
            loads.push(1)
            if (loads.length == imgNames.length){
                //Images loaded sucessfully 
                game.images = images
                //Game intialize
                game.init()
            }
        }
    }
}