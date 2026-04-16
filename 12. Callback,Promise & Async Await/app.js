// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//         },5000);
//     });
// }


//Callback hell
// getallData(1,() => {
//     console.log("Getting data2...");
//     getData(2,() => {
//         console.log("getting data3...");
//         getData(3,() => {
//             console.log("getting data4 ....");
//             getData(4);
//         });
//     });
// });


//Promise Chain

// console.log("getting data1 ....");
// getData(1)
//  .then((res) => {
//     console.log("getting data2 ....");
//     return getData(2);
//  })
//  .then((res) => {
//     console.log("getting data3 ....");
//     return getData(3);
//  });

// // Async- Await
// async function getData(){
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
//     console.log("getting data3....");
//     await getData(3);
// }

// IIFE 

// (async function () {
//     console.log("Getting data1...");
//     await getData(1);
//     console.log("getting data2...")
//     await getData(2);
// })();




