const makePink = document.getElementById('pink');
makePink.addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink'
})


const section = document.getElementById('sec');
function add(){
    const sec = document.createElement('section');
    sec.innerHTML = `
       
        <ul>
          <li>sawon</li>
          <li>taskin</li>
          <li>sawon</li>
          <li>taskin</li>
        </ul>
     
`
    document.querySelector('body').append(sec)
}

function comment(){
    const text =  document.getElementById('text').value
    const commentSection = document.getElementById('comment-section')
    const add = document.createElement('p')
    add.innerText = text
    commentSection.appendChild(add)
    document.getElementById('text').value = ''
}













