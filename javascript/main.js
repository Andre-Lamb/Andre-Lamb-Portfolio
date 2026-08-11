// import * as THREE from 'three';
// const header = document.querySelector('.cylinder');
// const renderer = new THREE.WebGLRenderer({canvas:header});
// renderer.setSize(header.clientWidth, header.clientHeight);
// document.body.appendChild(renderer.domElement);
// const scene = new THREE.Scene();
// const camera = new THREE.OrthographicCamera(
//     -10, 10, 10, -100, 5, 50
// );
// // 5 here represents the length of the axes.
// const axesHelper = new THREE.AxesHelper(100);
// scene.add(axesHelper);
// camera.position.set(0, 0, 0);

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshPhongMaterial({color: 0x0000FF});
// const box = new THREE.Mesh(geometry, material);
// scene.add(box);
// box.rotation.x = 5;
// box.rotation.y = 5;

// function animate(time) {
//     box.rotation.x = time / 1000;
//     box.rotation.y = time / 1000;
//     renderer.render(scene, camera);
// }

// renderer.setAnimationLoop(animate);

// const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
// scene.add(ambientLight);

// const directionalLight = 
// new THREE.DirectionalLight(0xFFFFFF, 10);
// scene.add(directionalLight);
// const dLightHelper = 
// new THREE.DirectionalLightHelper(directionalLight);
// scene.add(dLightHelper);

// renderer.render(scene, camera);




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
const breakdownImageDiv = document.querySelector('.scroll-container');
const breakdownImageArray = document.querySelectorAll('.scroll-container img');
let breakdownBigBool = false;
let breakdownBigId = -1;
//Changes the text corresponding to breakdown scroll
function breakdownUpdate(){
    let scrollOffset = breakdownImageDiv.scrollWidth*0.05;
    let scrollAmt = (breakdownImageDiv.scrollLeft+scrollOffset)/(breakdownImageDiv.scrollWidth-window.innerWidth);
    scrollAmt = Math.floor((breakdownText.length-1)*scrollAmt);
    if (scrollAmt<0) scrollAmt = 0;
    for (let index = 0; index < breakdownText.length; index++) {
        if (index == scrollAmt){
            breakdownTitle[index].style.display = 'block';
            breakdownText[index].style.display = 'block';
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
window.addEventListener('load', breakdownUpdate);
breakdownImageDiv.addEventListener('scroll', breakdownUpdate);