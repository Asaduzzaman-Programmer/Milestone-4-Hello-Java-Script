// const a = document.querySelectorAll('section')
// for (let i of a) {
//     console.log(i);
//     i.style.border = "2px solid red"
//     i.style.margin = "5px"
//     i.style.alignItems = 'center'
//     i.style.textAlign = 'center'

// }

// function like() {
//     document.getElementById('btn').innerText = 'Liked'
//     const b = document.getElementById('id')
//     b.classList.add('text')
//     document.getElementById('id2').classList.add('text')
//     const x = document.createElement('li')
//     x.innerText = 'Tasin'
//     document.getElementById('id2').appendChild(x)
// }


const id2 = document.getElementById('id2')

const li = document.createElement('li')
li.innerText = "bal"
id2.appendChild(li)


console.log(id2);


const newSec = document.createElement('section')
newSec.innerHTML = `
    <h1>Mes er sauya</h1>
        <ul id="id2">
            <li>Sarafat</li>
            <li>Raisul</li>
            <li>Mukib</li>
            <li>Samdim</li>
        </ul>
`

const appe = document.getElementById('mai')

appe.appendChild(newSec)












