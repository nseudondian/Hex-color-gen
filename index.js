const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const value = document.querySelector('.value')
const btn = document.querySelector('.btn')
const col = document.querySelector('.col')
const bend = document.querySelector('#bend')
const columa = document.querySelector('.columa')
const concluded = document.querySelector('#concluded')
const color = document.querySelector('.color')


    
btn.addEventListener('click', ()=>{
    let hexColor = '#'
    for(let i=0; i<6; i++){
        hexColor += hex[randNum()]
    }
    value.innerHTML = hexColor
    col.style.backgroundColor = hexColor
    

    let hexGen = '#'
    for(let i = 0; i<6; i++){
        hexGen += hex[randNum()]
    }
    columa.innerHTML = hexGen
    bend.style.backgroundColor = hexGen
    btn.style.backgroundColor = hexGen

    let genColor = '#'
    for(let i=0; i<6; i++){
        genColor += hex[randNum()]
    }
    color.innerHTML = genColor
    concluded.style.backgroundColor = genColor
})

const randNum = ()=>{
    return Math.floor(Math.random() * hex.length)
}

// const randNumber = ()=>{
//     return Math.floor(Math.random() * hex.length -1)
// }