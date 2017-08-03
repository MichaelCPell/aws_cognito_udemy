// Restoring a Session
window.onload = function(){
    var cognitoUser = userPool.getCurrentUser();

    if (cognitoUser != null) {
        cognitoUser.getSession(function(err, session) {
            if (err) {
                alert(err);
                return;
            }
            if(session.isValid()){
                document.getElementById("username").innerHTML = cognitoUser.getUsername();
            };
        });
    }
}