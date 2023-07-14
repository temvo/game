import { createField } from "./CreateField.js";
export const createMenu=()=>{


}
const menu = document.querySelector(".menu");
menu.style.display="block";
const btn = menu.querySelectorAll(".btn");
btn.forEach(el =>{

el.addEventListener('click',() =>
{
   console.log(el.textContent); 
   switch(el.textContent){

   case"Легкий":
      createField(8);
      break
   case"Средний":
      createField(12);
         break
   case"Хардкор":
createField(16);
   break;
   }
}
);
});

