const timers = {}

function startCountdown(id, duration, callback) {
    if (timers[id]) clearTimeout(timers[id])

    timers[id] = setTimeout(() => {
        callback()
        delete timers[id]
    }, duration)
}

function stopCountdown(id) {
    if (timers[id]) {
        clearTimeout(timers[id])
        delete timers[id]
    }
}

module.exports = {
    startCountdown,
    stopCountdown
}
