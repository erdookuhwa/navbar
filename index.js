const inputName = document.querySelector('.name-input')
const linkName = document.querySelector('.link-name')


const addName = (name) => {
    linkName.innerHTML = "Welcome "
    let boldName = document.createElement("span")
    boldName.innerText = name
    boldName.classList.add("bold")
    linkName.appendChild(boldName)
    return boldName;
}

inputName.addEventListener('change', e => {
    console.log(e.target.value)
    addName(e.target.value)
    e.target.value=''
})


