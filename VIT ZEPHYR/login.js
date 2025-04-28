const form = document.querySelector("form");
const submitBtn = form.querySelector('input[value="Login"]');
const storedUsername = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");

form.addEventListener('submit', (evt) => {
    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    if(!username || !password){
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "Login";
            alert("Please fill out both fields !");
        }, 300); // 0.3s
    }
    else if(username === storedUsername && password === storedPassword){
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "Login";
            alert("Login Successful");
            window.location.href = "index.html";
        }, 1000); // 1s
    }
    else{
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "Login";
            alert("Wrong username and password ! Try again");
        }, 300); // 0.3s
    }
});
