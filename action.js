function bclick(val){
    document.getElementById("output").value+=val
}

function bclear(){
    document.getElementById("output").value=""
}
function equclick(){
    var text=document.getElementById("output").value
    var result=eval(text)
    document.getElementById("output").value=result
}