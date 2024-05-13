"use strict"

function parsePartCode(code){

    let supplierCode = code.substring(0, code.indexOf(":"));

    let productNumber = code.substring(code.indexOf(":")+1, code.indexOf("-"));

    let size = code.substring(code.indexOf("-")+1);

    return {
        supplierCode: supplierCode,
        productNumber: productNumber,
        size: size
    }

}

let potato = "XYZ:1234-L";

let parsedCode = parsePartCode(potato);

console.log(`
Supplier: ${parsedCode.supplierCode}
Product Number: ${parsedCode.productNumber}
Size: ${parsedCode.size}
`);