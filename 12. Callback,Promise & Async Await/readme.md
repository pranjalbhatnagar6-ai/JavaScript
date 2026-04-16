// setTimeout - set the time to execute in program.

# Sync in JS
## Synchronus
code runs in sequence
## Asynchronous

# Callback
A Callback is a function passed as an argument to another function.
(jab bhi hum kisi function ke andar dusra function pass kardete hain usse hum callback kehte hain.)

Note - Callback ko ()paranthesis ke sath pass nahi kiya.

individual sequence wise update ke liye callback use karenge.

//Callback hell - nested solve by -> Promises

# Promises
Syntax -
let promise = new Promise((resolve,reject) => {....})

stages - pending,fullfilled(resolved),rejected.

API returns data in Promises.


// .then() & .catch()

promise.then((res) => {...})

promise.catch((err) => {...})

## promise Chain

# Async-Await

Async - return a promise
Await - to wait

await pauses the execution of its surrounding async function until the promise is settled.

Await only use in asyn function.

# IIFE - immediately Invoked Function Expression
called immediately as soon as it is defined.

AUTOMATICALLY CALLS
ONE TIME USE
SYNTAX-
    (FUNCTION)();

DONE