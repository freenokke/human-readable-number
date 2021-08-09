module.exports = function toReadable (number) {
    
    let remainderHundred = number % 100;
    let remainderTen = number % 10;
    let remainderHundredDevision = Math.floor(remainderHundred / 10);
    let divisionHundred = Math.floor(number / 100);
    let divisionTen = Math.floor(number / 10);
    const arr = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve', 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const arr2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let arrAfterNine = arr.slice(10);
    
    if (number.toString().length == 1) {
        return arr[number];
    } else if (number.toString().length == 2) {
        if (number >=10 && number <=19) {
            return arr[number]
        }
        if (remainderTen == 0) {
            return arr2[divisionTen]
        } else {
        return arr2[divisionTen] + ' ' + arr[remainderTen];
        }
    } else if (number.toString().length == 3) {
        if (remainderHundred >=10 && remainderHundred <= 19) {
            return arr[divisionHundred] + ' hundred' + ' ' + arrAfterNine[remainderTen];
        } else {
            if (remainderTen == 0 && remainderHundredDevision !== 0) {
                return arr[divisionHundred] + ' hundred' + ' ' + arr2[remainderHundredDevision]
            } else if (remainderHundredDevision == 0 && remainderTen !== 0) {
                return arr[divisionHundred] + ' hundred' + ' ' + arr[remainderTen];
            } else if (remainderTen == 0 && remainderHundredDevision == 0) {
                return arr[divisionHundred] + ' hundred';
            } else {
            return arr[divisionHundred] + ' hundred' + ' ' + arr2[remainderHundredDevision] + ' ' + arr[remainderTen];
            }
        }
    }      
}
