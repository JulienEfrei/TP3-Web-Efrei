function create_robot(){
    let bender = document.createElement("img")
    bender.src = "bender.png"
    bender.style.height = "100px"
    bender.style.position = "absolute"
    bender.style.left = "500px"
    bender.style.top = "500px"
    bender.style.transition = "all 2s"
    bender.id = "bender"
    document.body.appendChild(bender)
}
create_robot()

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
    const tasks = document.getElementById("table")
    const tab = []
    for (let i = 2; i < tasks.childNodes.length; i++) {
        tab.push(tasks.childNodes[i].childNodes[0].textContent);
    }
    // for each command in tab, setTimeout and execute the command
    const execute = () => {
        if (tab.length > 0) {
            const action = get_bot_action(tab.shift())
            action()
            setTimeout(execute,1000)
        }
    }
    execute()
}

function get_bot_action(query){
    switch (query) {
        case "BOT_RIGHT":
            return () => {
                move_bot_right()
            };
        case "BOT_LEFT":
            return () => {
                move_bot_left()
            };
        case "BOT_TOP":
            return () => {
                move_bot_top()
            };
        case "BOT_BOTTOM":
            return () => {
                move_bot_bottom()
            };
        default:
            return () => {};
    }

}



