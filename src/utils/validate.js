
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
    // const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isFullNameValid) return "Invalid full name (capitalize first letter, no alphanumeric characters)"
    if(!isEmailValid) return "Email ID is not valid"
    if (password.length < 8)
		return "Password must be at least 8 characters long.";
	if (!/[a-z]/.test(password))
		return "Password must contain at least 1 lowercase letter.";
	if (!/[A-Z]/.test(password))
		return "Password must contain at least 1 uppercase letter.";
	if (!/\d/.test(password)) return "Password must contain at least 1 number.";
	if (!/[^((0-9)|(a-z)|(A-Z)|\s)]/.test(password))
		return "Password must contain at least 1 special characters.";

    return null;
} 

export const checkForgotPassData = (email) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

    if(!isEmailValid) return "Email ID is not valid";
    return null;
}