let getDay = (time) => {
    let x
    switch (time) {
        case 0:
            x = 'SUN'
            break
        case 1:
            x = 'MON'
            break
        case 2:
            x = 'TUE'
            break
        case 3:
            x = 'WED'
            break
        case 4:
            x = 'THU'
            break
        case 5:
            x = 'FRI'
            break
        case 6:
            x = 'SAT'
            break
    }

    return x
}

let setTime = () => {
    let time = new Date()
    let day = getDay(time.getDay())
    document.querySelector('#day').textContent = day
    let hours = time.getHours()
    document.querySelector('#hours').textContent = hours
    let mins = time.getMinutes()
    document.querySelector('#mins').textContent = mins
    let sec = time.getSeconds()
    document.querySelector('#sec').textContent = sec
}

setTime()
setInterval(setTime, 100)

