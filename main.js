
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
    document.documentElement.scrollTop -= (delta * 30);
    document.body.scrollTop -= (delta * 30);
    event.preventDefault();
}

// Event listener for mouse wheel
if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', handleMouseWheel, false);
}
window.onmousewheel = document.onmousewheel = handleMouseWheel;

var formVisible = false; // Variable to track the visibility of the form

function toggleForm() {
    
    var form = document.getElementById("signupForm");
    var signUpButton = document.querySelector('.sign');
    var reg = document.getElementById("register");

  

    if (formVisible) {
        // If the form is currently hidden, make it visible and update the button text
        
        formVisible = !formVisible; 
        form.style.display = "none"; // Restore the original HTML content
        signUpButton.textContent = 'SignUp/SignIn';
    } else {
        // If the form is currently visible, hide it and restore the original button text
        formVisible = !formVisible; 
        showSignUpForm()
        form.style.display = "block";
        signUpButton.textContent = 'close';
    }
}


function showForgotPasswordForm() {
    var forgotpassword = document.getElementById('signupForm');
    forgotpassword.innerHTML = `
        <div class="forgotpassword-form" id="ForgotPasswordForm">
            <input type="text" placeholder="Username or Email">
            <button class="forgotpassword">Submit</button>
            
            <!-- Sign Up link -->
            <div class="sign-up" id="SignUpLink">
                <p onclick="showSignUpForm()">Sign Up</p>
            </div>
            
            <!-- Sign In link -->
            <div class="sign-in" id="signInLink">
                <p onclick="showSignInForm()">Sign In</p>
            </div>
        </div>`;
}


function showSignInForm() {
    var signUpForm = document.getElementById('signupForm');
    signUpForm.innerHTML = `
        <input type="text" placeholder="Username or Email">
        <input type="password" placeholder="Password">
        <button class="signin">Sign In</button>
        <!-- Sign Up link -->
        <div class="sign-up" id="SignUpLink">
            <p onclick="showSignUpForm()">Sign Up</p>
        </div>
        <!-- Forgot Password link -->
        <div class="forgot-password" id="forgotPasswordLink">
            <p onclick="showForgotPasswordForm()">Forgot Password</p>
        </div>`;
}

function showSignUpForm() {
    var signUpForm = document.getElementById('signupForm');
    signUpForm.innerHTML = `
        <input type="text" placeholder="Username or Email">
        <input type="password" placeholder="Password">
        <button class="signup">Sign Up</button>
        <!-- Sign In link -->
        <div class="sign-in" id="signInLink">
            <p onclick="showSignInForm()">Sign In</p>
        </div>
        <!-- Forgot Password link -->
        <div class="forgot-password" id="forgotPasswordLink">
            <p onclick="showForgotPasswordForm()">Forgot Password</p>
        </div>`;
}


