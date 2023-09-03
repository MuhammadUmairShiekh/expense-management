let bug_value = document.getElementById("bug_value")
let exp_amount = document.getElementById("exp_amount")
let balance_value = document.getElementById("balance_value")
// <<<<<<<<<<--------------Total on above ---------------------->>>>>>>>>>>>>>>
const error_Message = document.getElementById("bug-user")
const error_Message2 = document.getElementById("bug-error")
// <<<<<<<--------------Error Message Above------------------------->>>>>>>>>>
let total_amount_inp = document.getElementById("total_amount")
let user_exp_inp = document.getElementById("user-exp")
let date_exp = document.getElementById("date-exp")
let select_tittle = document.getElementById("select-tittled") 
let descreption = document.getElementById("descreption")
const total_btn = document.getElementById("total_amount_btn")
const user_btn = document.getElementById("user-btn")
let list1 = document.getElementById("list")
let form = document.getElementById("form")
let tempAmount = 0

let dumiData = [
    {
        id:1,
        date_exp : "09/7/23",
        select_tittle : "Rent",
        descreption : "Being Paid Cash",
        total_amount_inp: 3000,
    }
    ,
    {
        id:2,
        date_exp : "09/10/23",
        descreption : "Being Paid Cash",
        select_tittle : "Exp",
        user_exp_inp: 4000,
        total_amount_inp: 4000,
    }

]

user_btn.addEventListener("click", (transaction) =>{
    let item = document.createElement("li")
    item.innerHTML`
    ${transaction.user_exp_inp}
    ${transaction.descreption}
    ${transaction.date_exp}
    ${transaction.select_tittle}
    <span class="Del" onclick="removeTransaction(${transaction.id})" > X</span> 
    `;
    list1.appendChild(item)
})





