document.querySelectorAll('.dock li').forEach(li => {
    li.addEventListener('mousemove', e => {
        let item = e.target;
        let itemRect = item.getBoundingClientRect();
        let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width
        let prev = item.previousElementSibling || null
        let next = item.nextElementSibling || null
        let scale = 0.6
        resetScale()
        if (prev) {
            prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1))
        }
        item.style.setProperty('--scale', 1 + scale)
        if (next) {
            next.style.setProperty('--scale', 1 + scale * offset)
        }
    })
})

document.querySelector('.dock').addEventListener('mouseleave', e => { resetScale() })

function resetScale() {
    document.querySelectorAll('.dock li').forEach(li => {
        li.style.setProperty('--scale', 1)
    })
}



document.querySelector('#standardForm').addEventListener('click', e=> {
    document.querySelector('#loginForm').style.display = "block";
    document.querySelector('#fetchLoginForm').style.display = "none";
})

document.querySelector('#fetchForm').addEventListener('click', e=> {
    document.querySelector('#loginForm').style.display = "none";
    document.querySelector('#fetchLoginForm').style.display = "block";
})

// example for fetch: POST with JSON format
const fetchLoginForm = document.querySelector('#fetchLoginForm')
fetchLoginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.target;
    const formObject = {};
    formObject['username'] = form.fetchUsername.value;
    formObject['password'] = form.fetchPassword.value;
    const response = await fetch('http://localhost:8080/post', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formObject),
    })
    let jsonResponse = await response.json();
    document.querySelector('#fetch-area').innerHTML = 
    `<div>username: ${jsonResponse.username}</div>
    <div>password: ${jsonResponse.password}</div>`
})