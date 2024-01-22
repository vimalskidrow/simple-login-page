login=()=>{
    let username = uname.value;
    let password = pswd.value;
    
    if (!username || !password) {
        alert("Invalid credentials!!  Login failed")
    }
    else{

        localStorage.setItem("usname",username)

        console.log(`Username:${username}, Password:${password}`);
        window.location="darshboard.html"
    }


}