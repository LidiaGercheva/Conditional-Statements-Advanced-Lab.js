function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);

    let commissions = 0;

    switch(city) {
 case "Sofia" : 
   if (sales < 0) {
    console.log("error");
   } else if (sales <= 500) {
    commissions = (5 / 100) * sales;
   } else if (sales <= 1000) {
    commissions = (7 / 100) * sales;
   } else if (sales <= 10000) {
     commissions = (8 / 100) * sales;
   } else {
    commissions = (12 / 100) * sales;
   }
      break;
 case "Varna" : 
     if (sales < 0) {
    console.log("error");
   } else if (sales <= 500) {
    commissions = (4.5 / 100) * sales;
   } else if (sales <= 1000) {
    commissions = (7.5 / 100) * sales;
   } else if (sales <= 10000) {
     commissions = (10 / 100) * sales;
   } else {
    commissions = (13 / 100) * sales;
   }
      break;
 case "Plovdiv" :
    if (sales < 0) {
        console.log("error");
       } else if (sales <= 500) {
        commissions = (5.5 / 100) * sales;
       } else if (sales <= 1000) {
        commissions = (8 / 100) * sales;
       } else if (sales <= 10000) {
         commissions = (12 / 100) * sales;
       } else {
        commissions = (14.5 / 100) * sales;
       }
      break;
    default : console.log("error"); break;
    }
   
    if (commissions > 0){
        console.log(commissions.toFixed(2));
    }
}
tradeCommissions(["Sofia",

"1500"]);