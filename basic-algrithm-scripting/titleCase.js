

function titleCase(str) {

    str = str.split(" ")
    let newArr = []
    for (let i = 0; i < str.length; i++) {
        newArr[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase()
    }
    return newArr.join(" ")

}


console.log(titleCase("hello boy and girl"))