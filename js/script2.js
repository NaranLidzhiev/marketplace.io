const modal = document.querySelector('.modal');
const crest = document.querySelector('.cresy');
const arr = document.querySelectorAll('.jacket');
const card = document.querySelector('.card');

function ShowModal(a){
    a.classList.remove('hide');
    a.classList.add('show');
    a.classList.add('fade');
}
function HideModal(a){
    a.classList.remove('show');
    a.classList.remove('fade');
    a.classList.add('hide');
}
let k = 0;
for (let i  = 0; i < arr.length; i++){
    arr[i].addEventListener('click', ()=>{
        k++;
        card.innerHTML = `<i class='fas fa-shopping-basket'></i><a href='CLG'>Card(${k})</a>`;
    });
}

card.addEventListener('click', ()=>{
    ShowModal(modal);
});

crest.addEventListener('click', ()=>{
    HideModal(modal);
});