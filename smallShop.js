function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    let price = 0;

    switch(town) {
       case "Sofia" : 
          if (product === "coffee") {
           price = quantity * 0.5;
          } else if (product === "water") {
           price = quantity * 0.8;
          } else if (product === "beer") {
           price = quantity * 1.2;
          } else if (product === "sweets") {
           price = quantity * 1.45;
          } else if (product === "peanuts") {
           price = quantity * 1.6;
          }
           break;
       case "Plovdiv" :
           if (product === "coffee") {
               price = quantity * 0.4;
              } else if (product === "water") {
               price = quantity * 0.7;
              } else if (product === "beer") {
               price = quantity * 1.15;
              } else if (product === "sweets") {
               price = quantity * 1.3;
              } else if (product === "peanuts") {
               price = quantity * 1.5;
              }
               break;
       case "Varna" :
           if (product === "coffee") {
               price = quantity * 0.45;
              } else if (product === "water") {
               price = quantity * 0.7;
              } else if (product === "beer") {
               price = quantity * 1.1;
              } else if (product === "sweets") {
               price = quantity * 1.35;
              } else if (product === "peanuts") {
               price = quantity * 1.55;
              }
               break;
    }
    
    console.log(price);
}
smallShop(["beer", "Sofia", "2"]);