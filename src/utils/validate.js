
export const checkSignInData = (email, password) => {

    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid"
    if(!isPasswordValid) return "Password is not valid";

    return null;
};

export const checkSignUpData = (fullName, email, password) => {
    const isFullNameValid = /^[A-Z]([a-zA-Z]|\.| |')+$/.test(fullName);
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isFullNameValid) return "Invalid full name (capitalize first letter, no alphanumeric characters)"
    if(!isEmailValid) return "Email ID is not valid"
    if(!isPasswordValid) return "Password is not valid"

    return null;
} 
