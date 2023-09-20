

function getRangesFromArray(array) {
    const hashArray = getSortedHashArray(array)
    return getRangesFromHashArray(hashArray)
}

function getSortedHashArray(array) {
    const resultArray = []
    array.forEach(currentNumber => {
        resultArray[currentNumber] = currentNumber
    })
    return resultArray
}

function getRangesFromHashArray(array) {    
    let resultString = ''
    let prevNumber = null
    let startCurrentDiaposone = null

    array.forEach(currentNumber => {
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

console.log(getRangesFromArray([1, 3, 2, 7, 8, 4, 9, 56, 7, 10]))