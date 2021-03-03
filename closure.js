function test (){
    var msg = "I am Learning Lexical Scope and Closure"

    function sayMsg (){
        console.log(msg)
    }
    return sayMsg
}
var sayMsg = test()
sayMsg()