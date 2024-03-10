let greeting :string[] = ['admin', 'Ahmed Raza', 'Nazar', 'Adeel', 'Areeb'];
for(let i=0; i<greeting.length; i++){

    if(greeting[i] === 'admin')
    console.log('Hello admin, would you like to see a status report?');

    else{
        console.log(`Hello ${greeting[i]}: Thank you for logging in again.`)
    }
}
