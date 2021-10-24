window.onload = function(){
    let button = document.getElementsByTagName("form")[0].getElementsByTagName("button")[0];
    let message = document.getElementsByClassName("message")[0];
    let email = document.getElementById("email");
    let footer = document.getElementsByTagName("footer")[0].getElementsByClassName("container")[0].getElementsByTagName("p")[0]
    
    footer.innerHTML = "Copyright 2020, Ajani Lewis"

    button.addEventListener("click", (e) => {
        e.preventDefault();

        let messages = [];

        if(email.value ==="" || email.value == null){
            messages.push("Please Enter a Valid Email Address");

        }else if(email.value.indexOf("@") == -1){
            messages.push("Please Enter a Valid Email Address");

        }else{
            messages.push("Thank You! Your email address " + email.value + " has been added to our mailing list!");
        }
        
        message.innerHTML = messages[0];

    });

};