document.getElementById("signup-submit-button").addEventListener("click", (e) => {
    e.preventDefault();

    var email = document.getElementById("email-input").value
    var password = document.getElementById("password-input").value

    localStorage.setItem("email", email)
    localStorage.setItem("password", password)

    var attributeList = [];

    var dataEmail = {
        Name : 'email',
        Value : email
    };

    attributeList.push(dataEmail);

    userPool.signUp(email, password, attributeList, null, function(err, result){
        if (err) {
            alert(err);
            return;
        }

        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });
})