export default function validateInputs (inputs){
    let errors = {}
    if(!inputs.username || !/\S+@\S+\.\S+/.test(inputs.username) || inputs.username.length >=35) errors.username = 'Campo obligatorio, debe de tener al menos 35 caracteres';
    if(!inputs.password || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z]{6,10}$/.test(inputs.password)) errors.password = 'Campo Obligatorio de 6 a 10 caracteres'

    return errors
}