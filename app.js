//for toggle button 
function toggleClass(){
    const body = document.querySelector('body');
    body.classList.toggle(`light`);
    body.style.transition = `0.3s linear`;

}

//for time 
const deg = 6;
//360 total deg / (12*5)
const hr =document.querySelector('#hr');
const mn =document.querySelector('#mn');
const sc =document.querySelector('#sc');
setInterval(()=>{

    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*deg;
    let ss = day.getSeconds()*deg;
    //very important steps 
    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

})