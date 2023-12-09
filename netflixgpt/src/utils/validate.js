const validateCredentials = (email,password) => {
    const checkName =/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const checkPassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    let errorMessage = "";

    if(!checkName)
    errorMessage = "Email not valid";

    else if(!checkPassword)
    errorMessage = "Password not valid";

    else errorMessage = null;

    return errorMessage
}

export default validateCredentials;