window.addEventListener('DOMContentLoaded', () => {
    console.log('ficne');
    const modal = document.querySelector('.modal');
    const crest = document.querySelector('.cresy');
    const heart = document.querySelector('.heart');
    const boots = document.querySelector('.boots');
    const socker1 = document.querySelector('.cur1');
    const socker2 = document.querySelector('.cur2');
    const size = document.querySelector('.button');
    const size1 = document.querySelector('.button2');
    const roll = document.querySelector('.SIZE');
    const SizeScroll = document.querySelector('.under_button');
    const SizeScroll1 = document.querySelector('.under_button1');
    const card = document.querySelector('.card');
    const addToCard = document.querySelector('.button1');
    const addToCard1 = document.querySelector('.button3');
    const sizes = document.querySelectorAll('.size_t');
    const sizes1 = document.querySelectorAll('.size_z');
    const White_color = document.querySelectorAll('.white');
    const About = document.querySelector('.socker_background');
    const DiagonalSocker = document.querySelector('.front_img');
    const lastsockers = document.querySelector('.last_sockers');
    const data = '';
    heart.addEventListener('click', () => {
        if (heart.classList.contains('heart_red')) {
            console.log("yep");
            heart.innerHTML = '<i class="far fa-heart"></i> ';
            heart.classList.remove('heart_red');
            heart.classList.add('fade')
        } else {
            console.log("fuck");
            heart.innerHTML = ' <i class="fas fa-heart"></i> ';
            heart.classList.add('heart_red');
            heart.classList.add('fade');
        }
    });
    socker1.addEventListener('click', () => {
        boots.innerHTML = "  <img src='img/img.jpg' alt='boots'> ";
        About.innerHTML = " <img src='img/sockers3.jpg' alt ='boots'>";
        DiagonalSocker.innerHTML = "<img src='img/sockers4.png' alt='sockers4'>";
        lastsockers.innerHTML = "<img src='img/sockers5.jpg' alt='sockers5'>";
        
    });
    socker2.addEventListener('click', () => {
        boots.innerHTML = "  <img src='img/whiteandblack2.jpg' alt='boots'> ";
        About.innerHTML = " <img src='img/blackandwhite.jpg' alt='background'>";
        DiagonalSocker.innerHTML = "<img src='img/blackandwhite2.jpg' alt='sockers4'>";
        lastsockers.innerHTML = "<img src='img/last_socker.jpg' alt='sockers5'>";
    });

    function showSizeScroll(e) {
        e.classList.remove("hide");
        e.classList.add("show");
        e.classList.add("fade");
    }

    function hideSizeScroll(e) {
        console.log("work!");
        e.classList.remove("show");
        e.classList.remove("fade");
        e.classList.add("hide");
    }

    hideSizeScroll(SizeScroll);
    size.addEventListener('click', () => {
        if (SizeScroll.classList.contains("hide")) {
            showSizeScroll(SizeScroll);
        } else {
            hideSizeScroll(SizeScroll);
        }
    });
    hideSizeScroll(SizeScroll1);
    size1.addEventListener('click', () => {
        if (SizeScroll1.classList.contains("hide")) {
            showSizeScroll(SizeScroll1);
        } else {
            hideSizeScroll(SizeScroll1);
        }
    });
    let ar = 0;
    addToCard.addEventListener('click', () => {
        ar++;
        card.innerHTML = `<i class='fas fa-shopping-basket'></i><a href='CLG'>Card(${ar})</a>`;
    });
    addToCard1.addEventListener('click', () => {
        ar++;
        card.innerHTML = `<i class='fas fa-shopping-basket'></i><a href='CLG'>Card(${ar})</a>`;
    });

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

    card.addEventListener('click', ()=>{
        ShowModal(modal);
    });
    
    crest.addEventListener('click', ()=>{
        HideModal(modal);
    });

});