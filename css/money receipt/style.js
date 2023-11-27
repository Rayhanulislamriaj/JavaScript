//  const paymentSuccess = true;
//  const marks = 80;

//  function enroll(callback){
//   console.log('Course enrollment is in progress:');

//   setTimeout(function(){
//     if(paymentSuccess){
//       callback();
//     } else {
//       console.log('Payment Failed');
//     }
//   }, 2000);
//  }

//  function progress(callback){
//   console.log('Course on progress:');

//   setTimeout(function(){
//     if(marks >= 80) {
//       callback();
//     } else {
//       console.log('You could not get enough marks to get the certificate!');
//     }
//   }, 3000);
//  }

//  function getCertificate(){
//   console.log('Preparing certificate');

//   setTimeout(function() {
//     console.log('Congratulations! You got your certificate');
//   }, 1000);
//  }

//  enroll(function(){
//   progress(getCertificate);
//  });






// // const status = true;

// // console.log('Task 1');

// // const promise = new Promise(function(resolve, reject) {
// //   setTimeout(function(){
// //     if(status) {
// //       resolve('Task 2');
// //     } else {
// //       reject('failed!');
// //     }
// //   }, 2000);
// // });

// // promise
// //       .then(function(value){
// //         console.log(value);
// //       })
// //       .catch(function(err){
// //         console.log(err);
// //       });

// // console.log('Task 3');



const paymentSuccess = true;
const marks = 80;

function enroll(){
 console.log('Course enrollment is in progress:');

 const promise = new Promise(function(resolve, reject) {

    setTimeout(function(){
    if(paymentSuccess){
      resolve();
    } else {
      reject('Payment Failed');
    }
  }, 2000);
 });
   return promise;

}


function progress(){
 console.log('Preparing certificate');
   
 const promise = new Promise(function (resolve, reject) {
  setTimeout(function(){
    if(marks >= 80) {
      resolve();
    } else {
      reject('You could not get enough marks to get the certificate!');
    }
  }, 3000);
 });

 return promise;

}

 function getCertificate(){
  console.log('Preparing certificate');

  const promise = new Promise(function(resolve){
    setTimeout(function() {
      resolve('Congratulations! You got your certificate');
    }, 1000);
  });
  return promise;
 }

 enroll()
      .then(progress)
      .then(getCertificate)
      .then(function(value){
        console.log(value);
      })
      .catch(function(){
        console.log(err);
      });