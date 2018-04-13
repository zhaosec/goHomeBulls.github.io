class Scene {
    constructor (game){
        this.game = game
        this.maps = this.initMaps(window.boxMaps)
    }
    initMaps(maps){
        let ret = new Array()
        for (let i = 0; i < maps.length; i++){
            ret[i] = new Array()
            for (let j = 0; j < maps[i].length; j++){
                ret[i][j] = new Array()
                for (let k = 0; k < maps[i][j].length; k++){
                    ret[i][j][k] = maps[i][j][k]
                }
            }
        }
        return ret
    }
    init (){}
    drawMap (){}
    drawItem (x, y, item){
        let w = CONFIG.blockWidth
        let img = this.game.images[item]
        let context = this.game.context
        context.drawImage(img, x * w, y * w, w, w)
    }
}