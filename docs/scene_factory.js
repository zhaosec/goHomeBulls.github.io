class SceneFactory {
    constructor (game){
        this._sceneTitle = this._sceneTitle || new SceneTitle(game)
        this._sceneMain = this._sceneMain || new SceneMain(game)
        this._sceneEditor = this._sceneEditor || new SceneEditor(game)
    }
    getSceneTitleInstance (){
        return this._sceneTitle
    }
    getSceneMainInstance (){
        return this._sceneMain
    }
    getSceneEditorInstance (){
        return this._sceneEditor
    }
}