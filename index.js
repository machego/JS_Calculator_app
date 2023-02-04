let dataResult = document.getElementById('result')


function display(val){
    dataResult.value += val
    return val
}

function solve(){
    let x = dataResult.value
    let y = eval(x);
    dataResult.value = y
    return y
}

function clearScreen(){
    dataResult.value = ''
}





