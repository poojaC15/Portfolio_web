const sidemenu = document.querySelector('#sidemenu');

function openMenu(){
    sidemenu.style.transform ='translateX(-16rem)';

}
function closeMenu(){
    sidemenu.style.transform ='translateX(16rem)';
    
}
const options = {
    strings: [
        "Innovative Thinker", 
        "Learner", 
        "Passionate Developer", 
        "Problem-Solver", 
        "Tech Enthusiast"
    ],
    typeSpeed: 50,        // Speed of typing
    backSpeed: 25,       //speed of deleting
    backDelay: 1000,      // Delay before starting to delete
    loop: true,           // Loop the animation
    showCursor: true,     // Show blinking cursor
};
// Function to start the Typed.js animation
    
function startTypingAnimation() {
    const typed = new Typed('#typed', options);
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', startTypingAnimation);
 
window.addEventListener( 'scroll',()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white','-opacity-50','backdrop-blur-lg','shadow-sm')
    }
    else{
        navBar.classList.remove('bg-white','-opacity-50','backdrop-blur-lg','shadow-sm')
    }
})


