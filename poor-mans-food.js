// It's a bit messy. everything has to be lowercace and it deosn't take in more than one itme at a time I coulden't get the arrays to work and I never got around to using functions sorry. will be implementing fixes in th future or never... it just depends on intrest I guess.
// great example of what a mess code can be if it's not dynamic

// let sideMenu = {
//   'Chips': -6,
//   'Fies': -6,
//   'cookie': -6,
//   'Soda': -6,
//   'Pine sap coffe': -6,
//   'Watter': -1
// }
var meal = ""
var endGame = false;
while (endGame === false) {
  var money = prompt("How much money do you have?", "50");
  if (money >= 1) {
    if (confirm("$" + money + "\nAre you hungry?")) {
      var mealTime = prompt("$" + money + "\nWhat are you hungry for?\nBreakfast\nLunch\nSupper", "breakfast");
      if (mealTime === null) {
        if (confirm("You realy want to leave?")) {
          endGame = true
        } else {
          endGame = false
        }
      } else if (mealTime == "breakfast") {
        while (endGame === false && money >= 1) {
          // let breakfastMenu = {
          //   'Pineapple salad': -20,
          //   'Sugarcane salad': -20,
          //   'Salmon salad': -20,
          //   'Bacon pileup': -25,
          //   'Prime beef': -27,
          //   'Lemony salmon': -23,
          // }
          if (money < 1) {
            if (confirm("You'r out of mony. Do you want to leave?")) {
              endGame = true
            } else {
              endGame = false
            }
          }
          var meal = prompt("$" + money + "\nPineapple Salad $20, Sugarcane Salad $20, Salmon Salad\n$20 Bacon Pileup $25, Prime Beef $27, Lemony Salmon $23\nAlong with\nChips, Fries, a Cookie, Soda or Coffe\neach one is only $6\nAnd watter is only $1", "pineapple")
          if (meal == null) {
            if (confirm("You realy want to leave?")) {
              endGame = true
            } else {
              endGame = false
            }

          } else if (meal == "pineapple" && money >= 20) {
            money = money - 20;
            console.log("Pineapple Salad $20\nYou found an Apple pen! it doesn't work.")
          } else if (meal == "sugarcane" && money >= 20) {
            money = money - 20;
            console.log("Sugarcane Salad $20\nTo bad you have hyperglycemia.")
          } else if (meal == "salmon" && money >= 20) {
            money = money - 20;
            console.log("Salmon Salad $20\nCongrats on your salmonella.")
          } else if (meal == "bacon" && money >= 25) {
            money = money - 25;
            console.log("Bacon Pileup $25\nThere where dog bones in your bakon.")
          } else if (meal == "prime" && money >= 27) {
            money = money - 27;
            console.log("Prime Beef $27\nWasn't all that prime.")
          } else if (meal == "lemony" && money >= 23) {
            money = money - 23;
            console.log("Lemony Salmon $23\nCongrats on your extremely bad salmonella.")
          } else if (meal == "chips" && money >= 6) {
            money = money - 6
            console.log("Salty $6")
          } else if (meal == "fries" && money >= 6) {
            money = money - 6
            console.log("Nibble $6")
          } else if (meal == "cookie" && money >= 6) {
            money = money - 6
            console.log("So good $6")
          } else if (meal == "soda" && money >= 6) {
            money = money - 6
            console.log("So sweet $6")
          } else if (meal == "coffe" && money >= 6) {
            money = money - 6
            console.log("I'm hyped $6")
          } else if (meal == "watter" && money >= 1) {
            money = money - 1
            console.log("swish $1")
          } else {
            alert("Sorry... you can't do that")
          }
        }
      } else if (mealTime == "lunch") {
        while (endGame === false && money >= 1) {
          // let breakfastMenu = {
          //   'Pineapple salad': -20,
          //   'Sugarcane salad': -20,
          //   'Salmon salad': -20,
          //   'Bacon pileup': -25,
          //   'Prime beef': -27,
          //   'Lemony salmon': -23,
          // }
          if (money < 1) {
            if (confirm("You'r out of mony. Do you want to leave?")) {
              endGame = true
            } else {
              endGame = false
            }
          }
          var meal = prompt("$" + money + "\nBurger Bash $30, Spicy Mex Burger $50, USA Burger $150\nTube Sock Wrap $10, Small Gold Duck Corpse $100, Crispy Hair $Free$\nAlong with\nChips, Fries, a Cookie, Soda or Coffe\nAll only $6\nAnd watter is $1", "burger")
          if (meal == null) {
            if (confirm("You realy want to leave?")) {
              endGame = true
            } else {
              endGame = false
            }

          } else if (meal == "burger" && money >= 30) {
            money = money - 30;
            console.log("Burger Bash $30\nThe burger is flat.")
          } else if (meal == "spicy" && money >= 50) {
            money = money - 50;
            console.log("Spicy Mex Burger $50\nOne of the many hot things from Mexico")
          } else if (meal == "usa" && money >= 150) {
            money = money - 150;
            console.log("USA Burger $150\nStraight off the mixing pot.")
          } else if (meal == "tube" && money >= 10) {
            money = money - 10;
            console.log("Tube Sock Wrap $10\nThese have not bin washed.")
          } else if (meal == "small" && money >= 100) {
            money = money - 100;
            console.log("Small Gold Duck Corpse $100\nWas this ever alive?")
          } else if (meal == "crispy" && money >= 0) {
            money = money - 0;
            console.log("Crispy Hair $free$\nCongrats on your extremely bad hair day.")
          } else if (meal == "chips" && money >= 6) {
            money = money - 6
            console.log("Salty $6")
          } else if (meal == "fries" && money >= 6) {
            money = money - 6
            console.log("Nibble $6")
          } else if (meal == "cookie" && money >= 6) {
            money = money - 6
            console.log("So good $6")
          } else if (meal == "soda" && money >= 6) {
            money = money - 6
            console.log("So sweet $6")
          } else if (meal == "coffe" && money >= 6) {
            money = money - 6
            console.log("I'm hyped $6")
          } else if (meal == "watter" && money >= 1) {
            money = money - 1
            console.log("Swish $1")
          } else {
            alert("Sorry... you can't do that")
          }
        }

      } else if (mealTime == "supper") {
        while (endGame === false && money >= 1) {
          // let breakfastMenu = {
          //   'Pineapple salad': -20,
          //   'Sugarcane salad': -20,
          //   'Salmon salad': -20,
          //   'Bacon pileup': -25,
          //   'Prime beef': -27,
          //   'Lemony salmon': -23,
          // }
          if (money < 1) {
            if (confirm("You'r out of mony. Do you want to leave?")) {
              endGame = true
            } else {
              endGame = false
            }
          }
          var meal = prompt("$" + money + "\nCloud Coffee $220, Sleeping Sheep nuggets $60, Burrito$20\n Steamed Potatoes $15, lion's mane $27,  Hazbin Alive $10\nAlong with\nChips, Fries, a Cookie, Soda or Tea\neach one is only $6\nAnd watter is only $1", "cloud")
          if (meal == null) {
            if (confirm("You realy want to leave?")) {
              endGame = true
            } else {
              endGame = false
            }
          } else if (meal == "cloud" && money >= 220) {
            money = money - 220;
            console.log("Cloud Coffee $220\nSo fluffy...")
          } else if (meal == "sleeping" && money >= 60) {
            money = money - 60;
            console.log("Sleeping Sheep nuggets $60\nJoin them.")
          } else if (meal == "burrito" && money >= 20) {
            money = money - 20;
            console.log("Burrito $20\nWrapped up nice and cozy.")
          } else if (meal == "steemed" && money >= 15) {
            money = money - 15;
            console.log("Steamed Potatoes $15\nFilled with fuzzy warmness")
          } else if (meal == "lion" && money >= 27) {
            money = money - 27;
            console.log("lion's mane $27\nFor the mind.")
          } else if (meal == "hazbin" && money >= 10) {
            money = money - 10;
            console.log("Hazbin Alive $10\nIt isn't now.")
          } else if (meal == "chips" && money >= 6) {
            money = money - 6
            console.log("Salty $6")
          } else if (meal == "fries" && money >= 6) {
            money = money - 6
            console.log("Nibble $6")
          } else if (meal == "cookie" && money >= 6) {
            money = money - 6
            console.log("So good $6")
          } else if (meal == "soda" && money >= 6) {
            money = money - 6
            console.log("So sweet $6")
          } else if (meal == "tea" && money >= 6) {
            money = money - 6
            console.log("at peace $6")
          } else if (meal == "watter" && money >= 1) {
            money = money - 1
            console.log("swish $1")
          } else {
            alert("Sorry... you can't do that")
          }
        }

      } else {
        alert("Sorry... you can't do that")
      }
    } else {
      if (confirm("You realy want to leave?")) {
        endGame = true
      } else {
        endGame = false
      }
    }
  } else {
    if (confirm("You realy want to leave?")) {
      endGame = true
    } else {
      endGame = false
    }
  }
}
console.log(money)
// could also have it print out the total cost and remaining money.
