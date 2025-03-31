let playerHP = 100;
let enemyHP = 100;

function dmg () {
    let hit = Math.random()*10;

    return Math.round(hit)+10;

}

function attack () {
    dmg();
    let atk = document.getElementById("atkBtn");
    console.log(dmg());
}