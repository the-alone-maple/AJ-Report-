/**
 * 函数节流
 */
export function _throttle(fn,delay){
    let timer
    var delay = delay || 1000;   //一秒内触发一次
    return function(...args){
        const context = this
        let canExecute = !timer
        if(canExecute){
            fn.apply(context,args)
        }else{
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            timer = null
        }, delay);
    }
} 