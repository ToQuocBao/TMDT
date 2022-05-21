function checkingAccount(){
    aBtn = document.getElementById("account-btn")
    if (localStorage.getItem("isLogin")){
        aBtn.innerHTML = "<a href='../Profile/'><div class='account-btn btn-alter'>Lonhh</div></a>"
        console.log(aBtn)
    }

    console.log(aBtn)
}


function handleLogin(){
    localStorage.setItem("isLogin","True")
    localStorage.setItem("profile",
    '{"name":"Lonh", "birth":"1986-12-14", "username":"username01", "password": "password01", "address": "", "phoneNumber": "012345678", "email": "usermail@gmail.com"}'
    )
}

function handleLogin(){
    localStorage.setItem("isLogin","True")
}

function handleLogout(){
    localStorage.setItem("isLogin","")
}

handleLogin()
handleLogout()
checkingAccount()