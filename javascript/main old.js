(document).ready = function(){
    const theNav = $('header nav')[0];
    const theBurger = $('header nav a')[0];
    let burgerOpen = Boolean(false); //sets the default state of the nav

    theBurger.onclick = function(){
    theNav.classList.toggle('open-nav');
    burgerOpen = !burgerOpen; //sets the current state of the nav
    };

    window.onscroll = function(){ //closes the nav if the user scrolls on the page
        if (burgerOpen) { //checks if the nav is open
            theNav.classList.toggle('open-nav');
            burgerOpen = !burgerOpen;
        };
    };

    const theParagraphs = $('#lineup .artists-text p');
    const theImgs = $('#lineup .artists-imgs img');

    function onResize(){
        if (screen.width<=480) { //only runs this code for mobile sizes
            for (let index = 0; index < theParagraphs.length; index++) {
                const element = theParagraphs[index];
                let theHeight = $(element).height(); //gets the paragraphs height
                let theOffset = $(theImgs[index]).height(); //gets the images height
                let theMargin = theHeight + 6 - theOffset; //calculates the difference accounting for margin
                $(theImgs[index]).css('margin-bottom', theMargin); //sets the images bottom margin to the difference
            }
        }else{
            $(theImgs).css('margin-bottom', 0); //removes the margin if moving from a phone scale to tablet scale, such as when rotating screen
        };
    };

    window.addEventListener('resize', onResize);

};