// Submit Confirmation Form
document.getElementById("confirmation-submit-button").addEventListener("click", (e) => {
    e.preventDefault();

    var confirmationCode = document.getElementById("confirmation-code-input").value
    var email = localStorage.getItem("email") || document.getElementById("confirmation-email-input").value

    var userData = {
        Username : email,
        Pool : userPool
    };
    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);


    cognitoUser.confirmRegistration(confirmationCode, true, function(err, result) {
        if (err) {
            alert(err);
            return;
        }

        var authenticationData = {
            Username : localStorage.getItem("email"),
            Password : localStorage.getItem("password")
        };
        localStorage.clear()
        var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                console.log('access token + ' + result.getAccessToken().getJwtToken());
            },

            onFailure: function(err) {
                alert(err);
            },
        });

        console.log('call result: ' + result);
    });

})
