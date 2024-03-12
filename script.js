const canvas = document.getElementById('game')
canvas.width = 840
canvas.height = 650
const ctx = canvas.getContext('2d')

const car = new Image()
car.src = 'image/police car.png'

let xCar = 600
let yCar = 500

const speed = 5


const keys = {
    up: false, down: false, right: false, left: false
}


window.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowLeft':
            keys.left = true
            break
        case 'ArrowRight':
            keys.right = true
            break
        case 'ArrowUp':
            keys.up = true
            break
        case 'ArrowDown':
            keys.down = true
    }
})

window.addEventListener('keyup', function (event) {
    switch (event.key) {
        case 'ArrowLeft':
            keys.left = false
            break
        case 'ArrowRight':
            keys.right = false
            break
        case 'ArrowUp':
            keys.up = false
            break
        case 'ArrowDown':
            keys.down = false
    }
})


function update() {
    if (keys.left) {
        xCar -= speed
    }
    if (keys.right) {
        xCar += speed
    }
    if (keys.up) {
        yCar -= speed
    }
    if (keys.down) {
        yCar += speed
    }

    if (xCar < 0) {
        xCar = 0
    }
    if (yCar < 0) {
        yCar = 0
    }

    if (xCar + car.width > canvas.width) {
        xCar = canvas.width - car.width
    }
    if (yCar + car.height > canvas.height) {
        yCar = canvas.height - car.height
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(car, xCar, yCar)
}

function gameLoop() {
    update()
    draw()
    requestAnimationFrame(gameLoop)
}


car.onload = () => {
    gameLoop()
}