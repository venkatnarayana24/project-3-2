
function openPage(url) {
    // Specify the URL of the page you want to open
   // Change this to the desired URL
    // Open the URL in the current tab
    
    
    
        window.location.href = url + ".html"; // Redirect to the specified URL after delay
}
// JavaScript to enable scrolling without scrollbar

// Function to handle mouse wheel event
function handleMouseWheel(event) {
    const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    document.documentElement.scrollTop -= (delta * 40);
    document.body.scrollTop -= (delta * 40);
    event.preventDefault();
}

// Event listener for mouse wheel
if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', handleMouseWheel, false);
}
window.onmousewheel = document.onmousewheel = handleMouseWheel;
