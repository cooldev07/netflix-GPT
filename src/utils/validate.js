export default function chackValidateData(username="Gogul nithin07",email,password){
    const isUsername=/^[a-z,',-]+(\s)[a-z,',-]+$/i.test(username);
const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
if(username!==null){
    if(!isUsername) return "Username is not valid"
}
if(!isEmailValid) return "Email ID is not valid"
if(!isPasswordValid) return "Password is not valid"
return null;
}