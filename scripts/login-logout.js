document.getElementById("login-submit-button").addEventListener("click", (e) => {
    e.preventDefault()
    var email = document.getElementById("login-email-input").value;
    var password = document.getElementById("login-password-input").value;
    var authenticationData = {
        Username : email,
        Password : password,
    };
    var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
    var userData = {
        Username : email,
        Pool : userPool
    };
    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log('access token + ' + result.getAccessToken().getJwtToken());
        },

        onFailure: function(err) {
            alert(err);
        },

    });
})


document.getElementById("logout-submit-button").addEventListener("click", (e) => {
    e.preventDefault();
    var cognitoUser = userPool.getCurrentUser();
    if(cognitoUser){
        cognitoUser.signOut();
    }
})