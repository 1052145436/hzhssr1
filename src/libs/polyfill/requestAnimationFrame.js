(function () {
    let lastTime = 0
    let vendors = [ 'webkit', 'moz' ]

    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (callback) => {
            // 调整时间，让一次动画等待和执行时间在最佳循环时间间隔内完成
            let currTime = new Date().getTime()
            let timeToCall = Math.max(0, 16 - (currTime - lastTime))
            let id = window.setTimeout(() => {
                // eslint-disable-next-line
                callback(currTime + timeToCall)
            }, timeToCall)

            lastTime = currTime + timeToCall
            return id
        }
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = (id) => {
            clearTimeout(id)
        }
    }
}())
