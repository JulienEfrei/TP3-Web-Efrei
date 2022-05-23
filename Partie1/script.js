
const supr = document.querySelector('.supprimer')
supr.addEventListener('click', (e) => {
    e.preventDefault()
    const table = document.getElementById('table')
    while (table.childElementCount > 1) {
        table.removeChild(table.lastChild)
    }
})


function ajouter() {
    let form = document.forms;
    const tr = document.createElement("tr")
    const name = document.createElement("td")
    const date = document.createElement("td")
    const category = document.createElement("td")

    name.textContent = form[0].elements[0].value
    date.textContent = form[0].elements[1].value
    category.textContent = form[0].elements[2].value
    
    tr.appendChild(name)
    tr.appendChild(date)
    tr.appendChild(category)
    document.getElementById("table").appendChild(tr)
}