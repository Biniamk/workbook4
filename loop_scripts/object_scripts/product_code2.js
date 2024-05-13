"use strict"

function getSuppler(code) {

    return code.substring(0, code.indexOf(":"));

}

function getProductNumber(code) {

    return code.substring(code.indexOf(":") + 1, code.indexOf("-"));

}

function getSize(code) {

    return code.substring(code.indexOf("-") + 1);

}

function parsePartCode(code) {

    let supplierCode = getSuppler(code);

    let productNumber = getProductNumber(code)

    let size = getSize(code);

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