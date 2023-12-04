function myFuction() {
    let text = "Value OK";
    const inObj = document.getElementById("id1");

    // if(!inObj.checkValidity()){
    //     document.getElementById("demo").innerHTML = inObj.validationMessage;
    // }

    if(inObj.validity.rangeOverflow){
        text = "Value is too large";
    } else if(inObj.validity.rangeUnderflow) {
        text = "Value is too small";
    } else {
        text = "Ok";
    }
    document.getElementById("demo").innerHTML = text;

}