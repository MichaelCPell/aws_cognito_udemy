var cognitoUser;

document.getElementById("request-reset-button").addEventListener("click", (e) =>{
    e.preventDefault();

    email = document.getElementById("forgot-email-input").value

    var userData = {
        Username : email,
        Pool : userPool
    };
    cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);

    cognitoUser.forgotPassword({
        onSuccess: function () {
            console.log("Password Reset Initiated")
        },
        onFailure: function(err) {
            alert(err);
        }
    });
})

document.getElementById("forgot-submit-button").addEventListener("click", (e) =>{
    e.preventDefault();
    
    email = document.getElementById("forgot-email-input").value
    var userData = {
        Username : email,
        Pool : userPool
    };
    cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);


    verificationCode = document.getElementById("reset-code-input").value;
    newPassword = document.getElementById("new-password-input").value;
    
    cognitoUser.confirmPassword(verificationCode, newPassword, {
        onSuccess: () => {
            console.log("Success")
        },
        onFailure: (err) => {
            console.log(err)
        }
    });
});

