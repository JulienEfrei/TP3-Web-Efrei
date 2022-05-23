function create_robot(){
    let bender = document.createElement("img")
    bender.src = "../img/bender.png"
    bender.style.height = "100px"
    bender.style.position = "absolute"
    bender.style.left = "0px"
    bender.style.top = "0px"
    bender.style.transition = "all 2s"
    bender.id = "bender"
    document.body.appendChild(bender)
}

function move_bot_right(){
    let bender = document.getElementById("bender")
    bender.style.left = parseInt(bender.style.left) + 10 + "px"
}

function move_bot_left(){
    let bender = document.getElementById("bender")
    bender.style.left = parseInt(bender.style.left) - 10 + "px"
}

function move_bot_top(){
    let bender = document.getElementById("bender")
    bender.style.top = parseInt(bender.style.top) - 10 + "px"
}

function move_bot_bottom(){
    let bender = document.getElementById("bender")
    bender.style.top = parseInt(bender.style.top) + 10 + "px"
}

function activate_bot(){
    alert("BOT GO !")
}



