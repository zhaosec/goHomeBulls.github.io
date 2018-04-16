let log = console.log.bind('console')
var cloneObj = function(obj){
    let str, newobj = obj.constructor === Array ? [] : {}
    if(typeof obj !== 'object'){
        return
    } else if(window.JSON){
        str = JSON.stringify(obj)//Serialize the objects
        newobj = JSON.parse(str)//Reset
    } else {
        for(let i in obj){
            newobj[i] = typeof obj[i] === 'object' ? 
            cloneObj(obj[i]) : obj[i]
        }
    }
    return newobj
}