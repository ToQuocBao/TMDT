function handleLogin(){
    localStorage.setItem("isLogin","True")
}

document.getElementById("login-btn").addEventListener("click", handleLogin)