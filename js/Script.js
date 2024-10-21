    function validatePasswords(event) {
        let password = document.getElementById("passwordInput").value;
        let confirmPassword = document.getElementById("confirmPasswordInput").value;
        
        if (password !== confirmPassword) {
            alert("Passwords do not match! Please try again.");
            event.preventDefault(); 
        }
    }

    function handleLogin(event) {
        event.preventDefault(); 
        let loginEmail = document.getElementById("loginEmail").value;
        let loginPassword = document.getElementById("loginPassword").value;

        if (loginEmail && loginPassword) {
            window.location.href = 'home.html'; 
        } else {
            alert("Please enter both your email and password.");
        }
    }

    const goToSignUp = document.getElementById('goToSignUp');
    const goToSignIn = document.getElementById('goToSignIn');
    const wrapper = document.getElementById('wrapper');

    goToSignUp.addEventListener('click', () => {
        wrapper.classList.add("active-panel");
    });

    goToSignIn.addEventListener('click', () => {
        wrapper.classList.remove("active-panel");
    });
