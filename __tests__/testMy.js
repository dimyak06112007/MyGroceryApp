const task3 = {
    charCount: function (str) {
        let outputStr = new Object()
        for (let letter of str) {
            if(outputStr[letter]!==undefined){
                outputStr[letter]+=1
            }else{
                outputStr[letter]= 1
            }
        }
        return outputStr
    }
}
console.log(task3.charCount("dimaa"))