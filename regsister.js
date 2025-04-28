const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const form3 = document.querySelector("#form3");
const submitBtn = form3.querySelector('input[type="submit"]');

form3.addEventListener('submit', (evt) => {
    const name = form1.querySelector('input[type="text"]').value;
    const mail = form1.querySelector('input[placeholder="VIT Mail ID"]').value;
    const contact = form1.querySelector('input[placeholder="Contact No."]').value;
    const prn = form2.querySelector('input[placeholder="PRN"]').value;
    const rollno = form2.querySelector('input[placeholder="Roll No."]').value;
    const username = form3.querySelector('input[placeholder="Username"]').value;
    const newPassword = form3.querySelector('input[placeholder="New Password"]').value;
    const confirmPassword = form3.querySelector('input[placeholder="Confirm Password"]').value;

    if(!name){
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "CREATE";
            alert("Please fill out Your NAME !");
        }, 300); // 0.3s
    }  
    else if(!mail){
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "CREATE";
            alert("Please fill out Your VIT Mail ID !");
        }, 300); // 0.3s
    }
    else if(!contact){
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "CREATE";
            alert("Please fill out Your Contact No. !");
        }, 300); // 0.3s
    }
        else if(contact.length != 10){
            evt.preventDefault();
            submitBtn.value = "Loading...";
            setTimeout((evt) => {
                submitBtn.value = "CREATE";
                alert("Please enter 10 digits in Contact No. !");
            }, 300); // 0.3s
        }
    else if(!prn){
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "CREATE";
            alert("Please fill out Your PRN !");
        }, 300); // 0.3s
    }
    else if(prn.length != 8){
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "CREATE";
            alert("Please enter 8 digits PRN !");
        }, 300); // 0.3s
    }
    else if(!rollno){
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "CREATE";
            alert("Please fill out Your Roll No. !");
        }, 300); // 0.3s
    }
    else if(!username){
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "CREATE";
            alert("Please fill out USERNAME !");
        }, 300); // 0.3s
    }
    else if(!newPassword){
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "CREATE";
            alert("Please fill out New PASSWORD !");
        }, 300); // 0.3s
    }
    else if(newPassword.length < 8){
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "CREATE";
            alert("Please enter atleast 8 characters long New PASSWORD !");
        }, 300); // 0.3s
    }
    else if(!confirmPassword){
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "CREATE";
            alert("Please fill out Confirm PASSWORD !");
        }, 300); // 0.3s
    }
    else if(confirmPassword != newPassword){
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "CREATE";
            alert("PASSWORD does not matches to new PASSWORD !");
        }, 300); // 0.3s
    }
    else{
        evt.preventDefault();
        submitBtn.value = "Loading...";
        setTimeout((evt) => {
            submitBtn.value = "CREATE";
            alert("Register Successful");
            localStorage.setItem("username", username);
            localStorage.setItem("password", newPassword);
            window.location.href = "login.html";
        }, 1000); // 1s
    }
});
