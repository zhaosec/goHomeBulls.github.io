class SceneTitle extends Scene{
    constructor (game){
        super(game)
        this.paused = false
        this.keydown = (event) => {
            let k = event.key
            if (!this.paused){
                if (k == 's'){
                    let scene = this.game.sceneFactory.getSceneMainInstance()
                    this.loadScene(scene)
                }
                if (k == 'e'){
                    let scene = this.game.sceneFactory.getSceneEditorInstance()
                    this.loadScene(scene)
                }
            }
        }
    }
    //intialize the map
    init (){
        //add scene
        log('sceneTitle init')
        this.load()
        //add actionlistener
        window.addEventListener('keydown', this.keydown)
    }
    load (){
        let canvas = this.game.canvas
        this.game.context.clearRect(0, 0, canvas.width, canvas.height)
        this.drawMap ()
    }
    drawMap (){
        for (let i = 0; i < this.maps[0].length; i++){
            for (let j = 0; j < this.maps[0][i].length; j++){
                this.drawItem (j, i, 'block')
            }
        }
        let canvas = this.game.canvas
        let context = this.game.context
        context.font = '26px "Microsoft YaHei"'
        context.fillStyle = '#F44336'
        context.textAlign = 'center'
        context.fillText("Press S to start", canvas.width/2, 150)
        context.fillText("Press E to edit the map", canvas.width/2, 210)

    }
    drawItem (x, y, item){
        let w = CONFIG.blockWidth
        let img = this.game.images[item]
        let context = this.game.context
        context.drawImage(img, x * w, y * w, w, w)
    }
    loadScene (scene) {
        window.removeEventListener('keydown', this.keydown)

        scene.init()
    }
}