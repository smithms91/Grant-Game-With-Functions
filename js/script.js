"use strict";
{
  //Start Function
  function startGame() {
    let playing = prompt("Do you want to play?");

    if (playing.toUpperCase() === "YES") {
      const userName = prompt("Enter your name");
      let userHealth = 40;
      let grantsHealth = 10;
      let wins = 0;
      startCombat(playing, userName, userHealth, grantsHealth, wins);
    } else if (playing.toUpperCase() === "NO") {
      console.log("Fine...");
    } else {
      console.log("I didn't recognize that. Try again!");
      startGame();
    }
  }

  //Combat Function
  function startCombat(playing, userName, userHealth, grantsHealth, wins) {

    while (playing) {
      let nextMove = prompt("Do you want to 'attack' or 'quit'.");
      if (nextMove.toUpperCase() === "ATTACK") {

        let health = randNum(5);
        userHealth -= health;
        console.log(`Grant swings and does ${health} damage!`);

        health = randNum(5);
        grantsHealth -= health;
        console.log(`${userName} swings back for ${health} damage!`);

        console.log(""); // Spacing
        console.log(`${userName} has ${userHealth} health remaining.`); // Log our HP to console
        console.log(`Grant the God Chicken has ${grantsHealth} health remaining.`);
        console.log(""); // Spacing

        // If Grant dies
        if (grantsHealth <= 0) {
          wins++;
          grantsHealth = 10;
          if (wins === 3) {
            console.log(`Holy cow! You managed to kill Grant 3 times. Congratulations!`); // :O
            break; // End Game
          } else {
            console.log(`Nice you killed Grant! Only ${3 - wins} wins left!`);
            console.log(`Grants HP has been reset to 10!`);
            console.log(""); // Spacing
          }
        } else if (userHealth <= 0) {
          console.log("Wow.. you lost to a robot :(");
          break; // End Game
        }
      } else if (nextMove.toUpperCase() === "QUIT") {
        console.log("Feels Bad.");
        break;
      } else {
        console.log("I didn't get that. Try again!");
      }
    }
  }

  // Random Number Functon
  function randNum(dmg) {
    return Math.floor(Math.random() * dmg + 1);
  }

  startGame();
}

