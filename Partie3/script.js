
const supr = document.querySelector('.supprimer')
supr.addEventListener('click', (e) => {
    e.preventDefault()
    const table = document.getElementById('table')
    while (table.childElementCount > 1) {
        table.removeChild(table.lastChild)
    }
})


async function ajouter() {
    var tache = tacheSaisie()
    pushTache(tache)
    const table = document.getElementById("table");
    console.log(table)
    mesTaches.forEach((tache) => {
        var bol = true
        for( i = 1; i < table.childNodes.length ; i++){
            if(table.childNodes[i].childNodes[0].textContent === tache.nom){
                bol = false
            }
        }
        if(bol){
            const tr = document.createElement("tr")
            const name = document.createElement("td")
            const date = document.createElement("td")
            const category = document.createElement("td")
            const add_date = document.createElement("td")
            const duree = document.createElement("td") 
            const terminer = document.createElement("td")
            const buttonFinish = document.createElement("button")
            duree.classList.add('duree')
            name.textContent = tache.nom
            date.textContent = tache.date
            category.textContent = tache.categorie
            duree.textContent = 0 
            let isFinish = false
            add_date.textContent = debut_fin_tache()
            buttonFinish.onclick = () => isFinish = true
            buttonFinish.textContent = "Terminer tache"

            tr.appendChild(name)
            tr.appendChild(date)
            tr.appendChild(category)
            tr.appendChild(add_date)
            tr.appendChild(duree)
            tr.appendChild(terminer)
            tr.appendChild(buttonFinish)
            table.appendChild(tr)

            if (name.textContent === "BOT_RUN") {
                activate_bot()
            }
            const increment = () => {
                setTimeout(() => { 
                    if (!isFinish){
                        duree.textContent = parseInt(duree.textContent) + 1
                        increment();
                    }
                    else{
                        buttonFinish.textContent = "Terminer";
                        terminer.textContent = debut_fin_tache();
                    }
                }, 1000);
            }
            increment();
        }
    })
}

function debut_fin_tache(){
    var d = new Date();
    var date = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " à " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    return date;
}

function incrementerDuree(){
    let durees = document.getElementsByClassName('duree')
    if(durees.length !=0){
        Array.prototype.forEach.call(durees, (dureeElement) => {
            let valeur = parseInt(dureeElement.textContent)
            dureeElement.textContent = valeur + 1
        });
    }
}



let tache = {
    name: "",
    date: "",
    category: "",
    duree: 0,
    isFinish: false
}

[Symbol.iterator] = function* () {
    yield this.name;
    yield this.date;
    yield this.category;
    yield this.duree;
    yield this.isFinish;
}

function tacheSaisie() {
    const form = document.forms[0]
    const nomSaisi = form.elements[0].value
    const dateSaisie = form.elements[1].value
    const categorieSaisie = form.elements[2].value
    const nouvelleTache = new Tache(nomSaisi, dateSaisie, categorieSaisie)
    return nouvelleTache
}


class Tache{
    constructor(nom,date,categorie){
        this.nom = nom;
        this.date = date;
        this.categorie = categorie;
    }
}


function maNouvelleTache(nom,date,categorie) {
    return {
        name: nom,
        date: date,
        category: categorie,
    }
}

const mesTaches = []
function pushTache(tache) {
    mesTaches.push(tache)
}