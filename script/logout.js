function handleLogout(){
    localStorage.setItem("isLogin","")
}


document.getElementById("logout-btn").addEventListener("click", handleLogout)