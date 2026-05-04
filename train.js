/* MIT D-TASK*/

function checkContent(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}

console.log(checkContent("mitgroup", "gmtiprou"));

/* TASK - C

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  getTime() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    return `${hour}:${minute}`;
  }

  qoldiq() {
    console.log(
      `Hozir ${this.getTime()}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud!`
    );
  }

  sotish(mahsulot, soni) {
    if (this[mahsulot] >= soni) {
      this[mahsulot] -= soni;
      console.log(`${this.getTime()}da ${soni}ta ${mahsulot} sotildi.`);
    } else {
      console.log(`${mahsulot} yetarli emas!`);
    }
  }

  qabul(mahsulot, soni) {
    this[mahsulot] += soni;
    console.log(`${this.getTime()}da ${soni}ta ${mahsulot} qabul qilindi.`);
  }
}

const shop = new Shop(4, 5, 2);

shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();

*/

/* MIT B-TASK 

function countDigits(data) {
  let count = 0;
  for (let a of data) {
    if ("0123456789".includes(a)) count++;
  }
  return count;
}
console.log(countDigits("t0ny1m3m2t41"));

*/

/* MIT A-TASK 

function countLetter(harf, soz) {
  let count = 0;
  for (let m of soz) {
    if (m === harf) count++;
  }
  return count;
}
const result = countLetter("o", "cristiano ronaldo");
console.log(result);

*/

// console.log("Jack Ma maslahatlari");

// const list = [
//   "yahshi talaba boling", // 0-20

//   "togri boshliq tanlang va koproq hato qiling", // 20-30

//   "uzingizga ishlashingizni boshlang", // 30-40

//   "siz kuchli bolgan narsalarni qiling", // 40-50

//   "yoshlarga investitsiya qiling", // 50-60

//   "endi dam oling, foydasi yoq endi", // 60
// ];

// Callback function
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// ASYNC function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//   }
// }

// call via then/catch
// console.log("passed here 0");
// maslahatBering(20)
//   .then((data) => {
//     maslahatBering(29)
//       .then((data) => {
//         maslahatBering(40)
//           .then((data) => {
//             console.log("javob:", data);
//           })
//           .catch((err) => {
//             console.log("ERROR", err);
//           });
//         console.log("passed here 1");

//         console.log("javob:", data);
//       })
//       .catch((err) => {
//         console.log("ERROR", err);
//       });
//     console.log("passed here 1");

//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });
// console.log("passed here 1");

// call via async/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();
