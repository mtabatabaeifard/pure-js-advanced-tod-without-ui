import {handleCreateNewTodo} from "./modules/controller/handleCreateTodo.js";
import { toastify } from "./modules/components/toastify.js";


const submitTodoButton = document.getElementById("submit");

submitTodoButton.addEventListener("click", handleCreateNewTodo);

// const arr = ['b','c','a','d'];
// const arr2 = [22,55,11,8];
// console.log(arr.sort());
// console.log(arr2.sort((a,b)=>a-b));
// const testArr = null;
// two methods of sorting:
// testArr && testArr.sort();
// testArr?.sort();