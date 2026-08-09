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

ribbon.onclick = function() {
    ribbon.classList.toggle('flag-down');
    ribbonDown = !ribbonDown;
}
//Breakdown variables
const breakdownText = document.querySelectorAll('.breakdown-text p');
const breakdownImages = document.querySelector('.scroll-container');

function breakdownUpdate(){
    let scrollOffset = breakdownImages.scrollWidth*0.05;
    let scrollAmt = (breakdownImages.scrollLeft+scrollOffset)/(breakdownImages.scrollWidth-window.innerWidth);
    scrollAmt = Math.floor((breakdownText.length-1)*scrollAmt);
    if (scrollAmt<0) scrollAmt = 0;
    for (let index = 0; index < breakdownText.length; index++) {
        if (index == scrollAmt) breakdownText[index].style.display = 'inline';
        else breakdownText[index].style.display = 'none';
    }
};

const header = document.querySelector('#rolling');

document.onscroll = function() {
    //Moving the header's texture to mimic scrolling
    let scrollCurrent = document.documentElement.scrollTop/(document.documentElement.scrollHeight-window.innerHeight);
    scrollCurrent = 100-100*scrollCurrent + '%';
    scrollCurrent = '50% ' + scrollCurrent;
    console.log(scrollCurrent);
    header.style.backgroundPosition = scrollCurrent;
    console.log(header.style.backgroundPosition);
    //Closing the burger menu if open
    if (ribbonDown) {
        ribbon.classList.toggle('flag-down');
        ribbonDown = false;
    }
}

window.addEventListener('load', breakdownUpdate);
breakdownImages.addEventListener('scroll', breakdownUpdate);