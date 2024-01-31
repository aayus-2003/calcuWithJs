let logo = document.getElementById("logo")
let sun = document.getElementById("sun")
let moon = document.getElementById('moon')
let input = document.getElementById('input')
let containerChild = document.getElementById("containerChild")
let first = document.getElementById('first')
let newColor = document.getElementsByTagName("button")[0]
let btn1 = document.querySelectorAll(".btn")

logo.addEventListener('click',()=>{
    sun.classList.toggle("sun")
    moon.classList.toggle("moon")
    containerChild.classList.toggle("not")
    input.classList.toggle("not")
    first.classList.toggle("color")
    second.classList.toggle("color")
    third.classList.toggle("color")
    four.classList.toggle("color")
    five.classList.toggle("color")
    btnBody.classList.toggle("color") 
    newColor.classList.toggle("new")
    btn1.forEach((value)=> {
        value.classList.toggle("new")
    })
})

//calculator logic
let string = ""

let btn = document.querySelectorAll(".btn")
Array.from(btn)

btn.forEach((value)=>{
    value.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string)
            document.getElementsByTagName("input")[0].value = string 
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML
            document.getElementsByTagName("input")[0].value = string
        }
        
    })
})

//clear btn

let ac = document.getElementById("ac")

ac.addEventListener('click',()=>{
    string = ""
    document.getElementsByTagName("input")[0].value = ""
})

// dlete single item

let btnNew = document.getElementById("btn-new")
// let display = btnNew.toString()

btnNew.addEventListener('click',()=>{
    document.getElementsByTagName("input")[0].value = string.toString().slice
    (0,-1);
    string = string.toString().slice
    (0,-1)
})