//Mobile ribbon variables
const ribbon = document.querySelector('.mobile-flag');
let ribbonDown = false;
//Toggles the mobile ribbon on and off
ribbon.onclick = function() {
    ribbon.classList.toggle('flag-down');
    ribbonDown = !ribbonDown;
}
//Breakdown variables
const breakdownTitle = document.querySelectorAll('.breakdown-text h3');
const breakdownText = document.querySelectorAll('.breakdown-text p');
const breakdownTextDiv = document.querySelector('.breakdown-text');
const breakdownImageDiv = document.querySelector('.scroll-container');
const breakdownImageArray = document.querySelectorAll('.scroll-container img');
let breakdownBigBool = false;
let breakdownBigId = -1;
// function breakdownHeight(){
//     let height = 0;
//     for (let b = 0; b < breakdownText.length; b++) {
//         if (breakdownText[b].offsetHeight > height) height = breakdownText[b].offsetHeight;
//     }
//     height += 50;
//     const breakdownTextDiv = document.querySelector('.breakdown-text');
//     console.log(height);
//     breakdownTextDiv.style.height = height + 'px';
// }
//Changes the text corresponding to breakdown scroll
function breakdownUpdate(){
    let scrollWidth = breakdownImageDiv.scrollWidth-window.innerWidth;
    let scrollReq = scrollWidth/breakdownText.length;
    let scrollAmt = (breakdownImageDiv.scrollLeft+scrollReq)/scrollWidth;
    scrollAmt = Math.floor((breakdownText.length)*scrollAmt);
    //Normalises to the first text being 0
    scrollAmt --;
    //Ensures the scroll amount doesn't go over the limit at the end of the box
    if (scrollAmt>breakdownText.length-1) scrollAmt = breakdownText.length-1;
    if (scrollAmt<0) scrollAmt = 0;
    for (let index = 0; index < breakdownText.length; index++) {
        if (index == scrollAmt){
            breakdownTitle[index].style.display = 'block';
            breakdownText[index].style.display = 'block';
            let newHeight = breakdownText[index].offsetHeight;
            newHeight += 50;
            breakdownTextDiv.style.height = newHeight + 'px';
        }
        else{
            breakdownTitle[index].style.display = 'none';
            breakdownText[index].style.display = 'none';
        }
    }
};
//Makes an image expand or shrink
function breakdownImg(i) {
    if (breakdownBigBool) {
        if (i == breakdownBigId) {
            breakdownImageArray[i].classList.toggle('clicked-img');
            breakdownBigBool = false;
        }
        return;
    }
    breakdownImageArray[i].classList.toggle('clicked-img');
    breakdownBigId = i;
    breakdownBigBool = true;
}
for (let i = 0; i < breakdownImageArray.length; i++) {
    breakdownImageArray[i].addEventListener('click', function() {
    breakdownImg(i);
});
}
//Rolling variables
const header = document.querySelector('#rolling');
//Makes the header background roll as the user scrolls the page
document.onscroll = function() {
    //Moving the header's texture to mimic scrolling
    let scrollCurrent = document.documentElement.scrollTop/(document.documentElement.scrollHeight-window.innerHeight);
    scrollCurrent = 100-100*scrollCurrent + '%';
    scrollCurrent = '50% ' + scrollCurrent;
    header.style.backgroundPosition = scrollCurrent;
    //Closing the burger menu if open
    if (ribbonDown) {
        ribbon.classList.toggle('flag-down');
        ribbonDown = false;
    }
    if (breakdownBigBool) {
        breakdownImg(breakdownBigId);
    }
}
//Listeners
// window.addEventListener('load', breakdownHeight);
window.addEventListener('load', breakdownUpdate);
// window.addEventListener('resize', breakdownHeight);
breakdownImageDiv.addEventListener('scroll', breakdownUpdate);