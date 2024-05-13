"use strict"

let person = {
    name: "Eric Schwartz",
    address: "1234 easy street",
    city: "Fort Myers Beach",
    state: "FL",
    zip: "33931"
};

function printContact(yourmom){

    console.log(`
    ${yourmom.name}
    ${yourmom.address}
    ${yourmom.city}, ${yourmom.state} ${yourmom.zip}
    `);

}

printContact(person);