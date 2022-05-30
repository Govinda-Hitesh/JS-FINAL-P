//Pop uping the Add New List
function Add_item(){
    document.querySelector(".list").style.display="block"
    document.querySelector("div.container").style.filter="blur(10px)"
    }

//to hide - add new list,.p1 on click  
$(".b1,.b2").click(function () {
    $(".list,.p1").hide()
})

$(".b2").click(function () {
    document.querySelector("div.container").style.filter="blur(0px)"
})//to remove blurness in bg on close





const AddCard = document.querySelector(".b1")//.b1-Add button
const DivContainer = document.getElementById("div-container")

AddCard.addEventListener("click",AddNew)//AddNew-Ftn name


//to print inserted data in div child
const listText = document.getElementById('text');
const flex = document.getElementById('div-container');


function AddNew(){
    const listText = document.getElementById('text');
    const flex = document.getElementById('div-container'); 
    let card = document.createElement('div');
    card.classList.add('card');
    flex.appendChild(card);

    let Maincard = document.createElement('div');
    Maincard.classList.add('main');
    card.appendChild(Maincard);

    let ListTitle = document.createElement('h2');
    ListTitle.classList.add('title');
    ListTitle.style.color = 'tomato';
    ListTitle.innerHTML = `${listText.value} `;
    Maincard.appendChild(ListTitle);

    let line = document.createElement('hr');
    line.classList.add('line');
    card.appendChild(line);

    

    let Addplus = document.createElement("div")
    Addplus.id="task"
    Addplus.innerHTML=`<i  class="fa-solid fa-circle-plus addplus"></i>
    <i  class="fa-solid fa-trash-can trash"></i>`
    card.appendChild(Addplus);
    
    document.querySelector("div.container").style.filter="blur(0px)"

    ListTitle.addEventListener('click', myFunc)
    function myFunc() {
        document.querySelector("div.card").style.display="block"
   
    }
    
};
console.log("ji");

//scratch completed tasks

flex.addEventListener('click', scratchTodo);

function scratchTodo(e) {
    let item = e.target;
    if (item.classList.contains('tick')) {

        // let id = item.id;
        // let newid = document.getElementById(id);
        item.parentElement.classList.toggle('me');

    }
}


// remove tasks

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('trash')) {
        e.target.parentElement.parentElement.remove();
    }
});

// adding tasks

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('addplus')) {
        document.querySelector(".pop1").style.display="block"
        parentNode = e.target.parentNode.parentNode;
    }
});

const text1 = document.getElementById('text1');

newkid.addEventListener('click', () => {


    let pTask = document.createElement('div');
    pTask.classList.add('pTask');

    pTask.innerHTML = `
        <span class="material-icons tick ">indeterminate_check_box</span>
        <p class="scratch" id="">${text1.value}</p>
        `;
    parentNode.appendChild(pTask);
    text1.value = '';
});