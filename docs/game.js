class Game {
    constructor (canvas){
        this.images = null
        this.canvas = canvas
        this.context = canvas.getContext('2d')
        this.sceneFactory = this.sceneFactory || new SceneFactory(this)
    }
    //intialize the game
    init (){
    //take game as parameter to the scene
        let scene = this.sceneFactory.getSceneTitleInstance()
        scene.init()
    }
}