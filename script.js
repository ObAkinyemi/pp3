let playerHP = 100;
let enemyHP = 100;
document.getElementById("enemy-hp").innerText = `HP: + ${enemyHP}`;
document.getElementById("player-hp").innerText = `HP:  + ${playerHP}`;
function enemyDmg () {
    let hit = Math.random()*10;

    return Math.round(hit)+10;

}

function attack () {
    
    // console.log("damage: " + enemyDmg());

    // console.log("enemyHP:" + enemyHP);
    if (enemyHP <= enemyDmg()) {
        enemyHP = 0;
        document.getElementById("feedback").innerText = "You won!";
    } else {
        enemyHP -= enemyDmg();
        document.getElementById("feedback").innerText = `You did a whopping ${enemyDmg()} damage!`;
        if (playerHP <= playerDmg()){
            playerHP = 0;
            document.getElementById("feedback").innerText = "Damn Nigga. You suck ass bruh!";
        } else {
                playerHP -= playerDmg();
                
                console.log(`Player hp: ${playerHP}`)
        }
    }
    document.getElementById("enemy-hp").innerText = `HP: ${enemyHP}`;
    setTimeout(() => {
        document.getElementById("player-hp").innerText = `HP: ${playerHP}`;
        document.getElementById("feedback").innerText = `The enemy did a whopping ${playerDmg()} damage!`;

    }, 2500);

}

function playerDmg () {
    let counterAtk = Math.random()*10;

    return Math.round(counterAtk)+10;

}

function test () {
    // console.log(enemyHP);
}

