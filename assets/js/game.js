// Game states
// "WIN" - Player robot has defeated all enemy robots
//      *Fight all enemy-robots
//      *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //  alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that as a result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        //log a message to the console so we know that it worked
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that as a result to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
        //log a resulting message to the console so we know it worked
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        // check player's health
        if (playerName <=0) {
            window.alert(playerName + " has died.");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left");
        }
    }
    // if player chooses to skip
    else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight! Goodbye!");
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
    }
    else {
        window.alert("You need to chosse a valid option. Try again!");
    }
};

for(var i = 0; i <enemyNames.length; i++) {
    fight(enemyNames[i]);
}