// Execution Context

function a(){
    b()
    console.log('i am function A')
}

function b(){
    d()
    console.log('i am function B')
}

function c(){
    console.log('i am function C')
}

function d(){
    c()
    console.log('i am function D')
}

var x = 100

a()

console.log('i am global')