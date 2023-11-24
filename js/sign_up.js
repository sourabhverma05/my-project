function signup(){

    let name = document.getElementById('name').value;
    let userName = document.getElementById('user_name').value;
    let age = document.getElementById('age').value;
    let mobileNumber = document.getElementById('mobile_number').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confPassword = document.getElementById('conf_password').value;

    localStorage.setItem("name1",name);
    localStorage.setItem("userName1",userName);
    localStorage.setItem("age1",age);
    localStorage.setItem("mobileNumber1",mobileNumber);
    localStorage.setItem("email1",email);
    localStorage.setItem("password1",password);
    localStorage.setItem("confPassword1",confPassword);
}