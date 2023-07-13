import { createMenu } from "./CreateMenu.js";
import { createCards, back } from "./cards.js";


const gameWin=()=>{
const card = document.querySelectorAll(".card");
let flag=true;
card.forEach(el => {
   if(!el.classList.contains("rotate")){
      flag = false;
   }
})
return flag;

}







export const createField= (lvl)=>{
   const body =document.querySelector("body");
   body.style.backgroundImage=`url(${back[0]})`;
   let startusGame=true;
const main = document.querySelector("main");
main.classList.add("null")
console.log(lvl);
let lvlText;
switch(lvl){
case 8:
lvlText="Легкий уровень"
break
case 12:
   lvlText="Средний уровень"
   break
   case 16:
      lvlText="Хардкорный уровень"
      break;



}

const game = document.querySelector(".game");
game.style.display="block"
const level = game.querySelector(".lvl");
level.textContent = lvlText;

const menu = game.querySelector(".btn");
menu.addEventListener('click',()=>{

   createMenu();
})
const cards = createCards(lvl);
console.log(cards);
const gameCard = game.querySelector(".game-cards");
gameCard.innerHTML = "";
let prev=null;
cards.forEach (el => {
   
   const card = document.createElement('div');
   card.classList.add('card'); 
   card.style.backgroundImage= `url(${el.back})`;

   gameCard.appendChild(card);
   
   card.addEventListener('click', ()=>{
      if (startusGame==true && !card.classList.contains("rotate")){
         console.log(prev);
         console.log(card);
         card.classList.add("rotate");
         card.style.backgroundImage= `url(${el.img})`;
         if(prev==null){
            prev=card;
         }
         else{
           
           
            if (prev.style.backgroundImage == card.style.backgroundImage){
               prev=null;
               if  (gameWin()){
                  let model = document.createElement('div');
                  model.classList.add("model");
                  let context = document.createElement('div')
                  context.classList.add("context");
                  context.textContent="Вы победили"
                  let button = document.createElement('div');
                  button.classList.add("btn");
                  button.textContent = "Выйти в меню"
                  model.appendChild(context);
                  model.appendChild(button);
                  main.appendChild(model);
                  button.addEventListener('click', () => {
                     createMenu();

                  })



               
               }
               
            }
            else{
               startusGame=false;
               const time = setTimeout(()=>{
                  card.classList.remove("rotate");
                  card.style.backgroundImage = `url(${el.back})`;
                  prev.classList.remove("rotate");
                  prev.style.backgroundImage = `url(${el.back})`;
                  prev=null;
                  startusGame=true;
               },1000);
               time;
            }
         }
      }

          
            
         
      
});

})
}
