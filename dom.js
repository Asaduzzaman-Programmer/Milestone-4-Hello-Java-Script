const a = document.querySelectorAll('section')
for (let i of a) {
    console.log(i);
    i.style.border = "2px solid red"
    i.style.margin = "5px"
    i.style.alignItems = 'center'
    i.style.textAlign = 'center'

}




function like() {
    document.getElementById('btn').innerText = 'Liked'
    const b = document.getElementById('id')
    b.classList.add('text')


    document.getElementById('id2').classList.add('text')
    const x = document.createElement('li')
x.innerText = 'Tasin'
    document.getElementById('id2').appendChild(x)

}

























