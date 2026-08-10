// Login

function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;


    if (email === "" || password === "") {

        alert("Please fill all fields.");

        return;
    }


    alert("Login successful! 🎉");

    window.location.href = "dashboard.html";
}


// Register

function registerUser(event) {

    event.preventDefault();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    if (password !== confirmPassword) {

        alert("Passwords do not match!");

        return;
    }


    alert("Registration successful! 🎉");

    window.location.href = "login.html";
}


// Create Blog

function createBlog(event) {

    event.preventDefault();


    const title =
        document.getElementById("blogTitle").value;

    const content =
        document.getElementById("blogContent").value;


    if (title === "" || content === "") {

        alert("Please fill all fields.");

        return;
    }


    alert("Blog published successfully! 🚀");

    window.location.href = "dashboard.html";
}


// Read Blog

function readBlog() {

    alert(
        "Blog reading feature will be added soon!"
    );

}