export const signUpFormControls = [
    {
        name : 'userName',
        label : 'User Name',
        placeholder : 'Enter your username',
        type : 'text',
        componentType : 'input',
    },
    {
        name : 'userEmail',
        label : 'User Email',
        placeholder : 'Enter your Email',
        type : 'email',
        componentType : 'input',
    },
    {
        name : 'password',
        label : 'Password',
        placeholder : 'Enter your password',
        type : 'password',
        componentType : 'input',
    },
] // array of form control and objects for signup form

export const signInFormControls = [
    {
        name : 'userEmail',
        label : 'User Email',
        placeholder : 'Enter your Email',
        type : 'email',
        componentType : 'input',
    },
    {
        name : 'password',
        label : 'Password',
        placeholder : 'Enter your password',
        type : 'password',
        componentType : 'input',
    },
] // array of form control and objects for signin form

export const initialSignInFormData = {
    userEmail : "",
    password : "",
}
export const initialSignUpFormData = {
    userName : "",
    userEmail : "",
    password : "",
}