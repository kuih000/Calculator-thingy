function appendToDisplay(value) {
    document.getElementById("display").value += value
}


function result(){
    document.getElementById("display").value = eval(
        document.getElementById("display").value
    )
}

function clr(){
    document.getElementById("display").value = ""
}
