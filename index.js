

function groupNumber(array) {

    const hashArray = []
    array.forEach(currentNumber => {
        hashArray[currentNumber] = currentNumber
    })

    let resultString = ''
    let prevNumber = null
    let startCurrentDiaposone = null

    hashArray.forEach(currentNumber => {
        if(prevNumber) {
            if(currentNumber - prevNumber !== 1) {
                if(prevNumber !== startCurrentDiaposone) { resultString += `-${prevNumber}, ${currentNumber}` }
                else { resultString += `, ${currentNumber}` }
                startCurrentDiaposone = currentNumber
            }
            prevNumber = currentNumber
        }
        else {
            prevNumber = currentNumber
            startCurrentDiaposone = currentNumber
            resultString += `${prevNumber}`
        }
    })

    return resultString
}

console.log(groupNumber([1, 3, 2, 7, 8, 4, 9, 56, 7, 10]))