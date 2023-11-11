function getUserData(data) {

    // calling networ and getting user data
    let userData = [23,45,67];
    data(userData);
}

getUserData(function(userData){
    console.log(userData);
    //DOM manipulation
})