const dropdowns = document.getElementsByClassName('dropdown');
const y = document.body.offsetWidth;

dropdowns[0].childNodes[3].style.left = `-212px`;
dropdowns[1].childNodes[3].style.left = `-50px`;
dropdowns[2].childNodes[3].style.left = `-130px`;

for(let i = 0; i<3;i++)
{
    dropdowns[i].childNodes[1].addEventListener('click',() => dropdowns[i].scrollIntoView(true))
}



//imp

let impstatus = false;
const impbtn = document.getElementById('impbtn');
const impbar = document.getElementById('impLinks');


const impOpen = () =>{
    impbar.style.transform = 'translateX(0)';
    impstatus = true;
    impbtn.innerText = '←';
    impbtn.style.left = '246px';
    impbtn.style.borderRadius = '50% 0 0 50%';
}


const impClose = () => {
    impbar.style.transform = 'translateX(-100%)';
    impstatus = false;
    impbtn.innerText = '→'
    impbtn.style.left = '300px';
    impbtn.style.borderRadius = '0px 50% 50% 0px';
}

setTimeout(impOpen, 3000);
setTimeout(impClose, 8000);

impbtn.addEventListener('click', () =>{
    if(impstatus)
        impClose();
    else
        impOpen();
})



//imp end

const today = document.getElementById('date');
const tim = document.getElementById('time');

today.innerText = new Date().toDateString();
tim.innerText = new Date().toTimeString().slice(0,9);

setInterval(() => {

    today.innerText = new Date().toDateString();
    tim.innerText = new Date().toTimeString().slice(0,9);

},1000);

// imp ends

// news modal

const newsModalBtn = document.getElementById('news-modal-btn')
const close = document.getElementById('news-modal-close');
newsModalBtn.addEventListener('click', () => {
    const modal = document.getElementById('news-modal');
    modal.style.opacity = 1;
    modal.style.visibility = 'visible';
    modal.style.zIndex = 10;
})

close.addEventListener('click', () => {
    const modal = document.getElementById('news-modal');
    modal.style.opacity = 0;
    modal.style.visibility = 'hidden';
    modal.style.zIndex = -10;
})

// news modal ends
