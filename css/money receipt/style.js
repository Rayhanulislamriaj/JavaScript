var LANGUAGE = "Java";
var language = "JavaScript";

function getLanguage(){
    if(!language){
        let language = LANGUAGE;
    }
    return language;
}
console.log(getLanguage());