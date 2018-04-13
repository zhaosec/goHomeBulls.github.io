class SceneEditor extends Scene{
    constructor (game){
        super(game)
        this.man = new Man('down')
        this.keydown = (event) => {
            let k = event.key
            //save map
            if (k == 'c'){
                this.saveMap(this.map)
            }
            //reset map
            if (k == 'z'){
                this.resetMap(this.map)
            }
            //quit editing mode
            if (k == 'x'){
                this.exit()
            }
        }
        this.click = (event) => {
            let canvas = this.game.canvas
            if (event.target != canvas) {
                return
            }
            let posX = event.offsetX
            let posY = event.offsetY
            if (posX > canvas.width || posY > canvas.height || posX <= 0 || posY <= 0){
                return
            }
            let x = Math.ceil(posY / CONFIG.blockWidth) - 1
            let y = Math.ceil(posX / CONFIG.blockWidth) - 1
            this.changeItem(this.map, x, y)
        }
    }
    //Intialize the scene
    init (){
        //load empty map
        log('scene editor init...')
        this.load()
        //add actionListener
        window.addEventListener('keydown', this.keydown)
        window.addEventListener('click', this.click)
    }
    load (){
        let canvas = this.game.canvas
        this.game.context.clearRect(0, 0, canvas.width, canvas.height)
        this.map = new Array()
        for (let i = 0; i < this.maps[0].length; i++){
            this.map[i] = new Array()
            for (let j = 0; j < this.maps[0][i].length; j++){
                this.map[i].push(1)
            }
        }
        this.drawMap (this.map)
    }
    drawMap (map){
        for (let i = 0; i < map.length; i++){
            for (let j = 0; j < map[i].length; j++){
                this.drawItem(j, i, 'block')
                if (map[i][j] == MAP_CODE.wall){
                    // wall
                    this.drawItem(j, i, 'wall')
                }
                if (map[i][j] == MAP_CODE.bull){
                    // bull
                    this.drawItem(j, i, 'bull')
                }
                if (map[i][j] == MAP_CODE.house){
                    // house
                    this.drawItem(j, i, 'house')
                }
                if (map[i][j] == MAP_CODE.man){
                    // man
                    this.man.x = i
                    this.man.y = j
                    this.drawItem(j, i, this.man.direction)
                }
                if (map[i][j] == MAP_CODE.boxedBull){
                    this.drawItem(j, i, 'boxedBull')
                }
                if (map[i][j] == MAP_CODE.manBall){
                    this.man.x = i
                    this.man.y = j
                    this.drawItem(j, i, 'house')
                    this.drawItem(j, i, this.man.direction)
                }
            }
        }
    }
    drawItem (x, y, item){
        let w = CONFIG.blockWidth
        let img = this.game.images[item]
        let context = this.game.context
        context.drawImage(img, x * w, y * w, w, w)
    }

    refresh (map){
        let canvas = this.game.canvas
        let ctx = this.game.context
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.drawMap(map)
    }
    saveMap (map){
        log(map)
        document.write('[')
        for(let i=0; i < map.length; i++){
            document.write('['+this.map[i]+'] ,'+'<br />')
        }
        document.write('] ,')
    }
    resetMap (map){
        for (let i = 0; i < map.length; i++){
            for (let j = 0; j < map[i].length; j++){
                map[i][j] = 1
            }
        }
        this.refresh(map)
    }
    changeItem (map, x, y){
        map[x][y] ++
        if (map[x][y] == MAP_CODE.man){
            this.man.x = x
            this.man.y = y
        }
        //If exceed the boundary, change to first one
        if (map[x][y] == MAP_CODE.manBall + 1){

            map[x][y] = MAP_CODE.block
        }
        this.refresh(map)
    }
    exit (){
        window.removeEventListener('click', this.click)
        window.removeEventListener('keydown', this.keydown)
        let scene = this.game.sceneFactory.getSceneTitleInstance()
        scene.init()
    }
}