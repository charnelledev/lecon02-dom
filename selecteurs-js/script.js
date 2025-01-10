let nombre = 2;
// console.log(nombre);

// document.querySelector est une methode js qui permet de selectionner les elements dans le dom d'une page web

// let titre = document.querySelector("h1"); 
// let btn01 = document.querySelector(".btn-1");
// let btn02 = document.querySelector(".btn-2");
// let text = document.querySelector("#text");

// console.log(titre);
// console.log(btn01);
// console.log(btn02);
// console.log(text);



const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");


const questioncontent = document.querySelector(".click-btn")

const paragraph = document.querySelector('p');
const div = document.querySelector("div");



// console.log(questioncontent);

// console.log(btn1);
// console.log(btn2);

// btn1.addEventListener("evenement",fonction)

btn1.addEventListener("click",

    ()=>{
        console.log('Baffoussam');
        paragraph.classList.add('paragraphvisible');//comme fontionnalite on a aussi add
        btn1.style.color = 'yellow'
        btn1.style.borderRadius = '7px'
        btn1.style.padding ='7px'
        btn1.style.backgroundColor= 'red'
    }
)
btn2.addEventListener("click",
    ()=>{
        console.log('yaounde')
        paragraph.classList.toggle('paragraphvisible');//comme fontionnalite on a aussi add
        btn2.style.color = 'yellow'
        btn2.style.borderRadius = '7px'
        btn2.style.padding ='7px'
        btn2.style.backgroundColor= 'green'
    }
)
div.addEventListener("click",
    ()=>{
        console.log('click-btn')
        div.style.color = 'yellow'
        div.style.borderRadius = '12px'
        div.style.padding ='7px'
        div.style.backgroundColor= 'green'
    }
)

 function addition(a,b){
    
    return a + b;
}
let somme = addition (5,9) //appel de fonction 
// console.log(somme);

 const add = function (a1,b1) {
    return a1 + b1;
}
// console.log(add(1,2));


// foncton flechee,fonction de rappel(callback),(fonction annonyme)
 const add2 = (a2,b2)=> {
    return  a2 + b2;
    
}
// console.log(add2(5,2));

 const add3 = ()=> som4 = a1 + b;
//  console.log(add3(9,2));

  
