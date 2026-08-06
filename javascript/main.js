//Mobile ribbon variables
const ribbonMotion = [{transform: 'translateY(-20px)'}, {transform: 'translateY(100px)'},];
const ribbonTime = {duration: 100, iterations: 1,};
const ribbon = document.querySelector('a');

ribbon.onclick = function() {
    ribbon.animate(ribbonMotion, ribbonTime);
    ribbon.transform = 'translateY(100)';
}
//Breakdown variables
const breakdownText = document.querySelectorAll('.breakdown-text p');
const breakdownImages = document.querySelector('.scroll-container');

function breakdownUpdate(){
    let scrollOffset = breakdownImages.scrollWidth*0.05;
    let scrollAmt = (breakdownImages.scrollLeft+scrollOffset)/(breakdownImages.scrollWidth-window.innerWidth);
    scrollAmt = Math.floor((breakdownText.length-1)*scrollAmt);
    console.log(scrollAmt)
    if (scrollAmt<0) scrollAmt = 0;
    for (let index = 0; index < breakdownText.length; index++) {
        if (index == scrollAmt) breakdownText[index].style.display = 'inline';
        else breakdownText[index].style.display = 'none';
    }
};
window.addEventListener('load', breakdownUpdate);
breakdownImages.addEventListener('scroll', breakdownUpdate);