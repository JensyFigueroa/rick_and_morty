export default function validateInputs (inputs){
    // console.log(inputs)
    let errors = {}
    if(!inputs.email || !/\S+@\S+\.\S+/.test(inputs.email) || inputs.email.length >=35) errors.email = 'required field';
    if(!inputs.password || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z]{6,10}$/.test(inputs.password)) errors.password = 'Required field, must contain 6 to 10 characters'

    return errors
}