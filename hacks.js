//Hacks! credit to https://github.com/PatheticMustan !
function getallitems() {
    var a = ["outfit", "hat", "boots", "weapon"];
    for (u in a) {
        PIXI.game.prodigy.player.backpack.data[u] = [];
        x = PIXI.game.state.states.Boot._gameData[u];
        for (i in x) {
            PIXI.game.prodigy.player.backpack.data[u][i] = {"ID": x[i].ID, "N": 1};
        }
    }
    PIXI.game.prodigy.player.backpack.data.currency = [];
    x = PIXI.game.state.states.Boot._gameData.currency;
    for (i in x) {
        PIXI.game.prodigy.player.backpack.data.currency[i] = {"ID": x[i].ID, "N": 99999999}
    }
    PIXI.game.prodigy.player.backpack.data.follow = [];
    x = PIXI.game.state.states.Boot._gameData.follow;
    for (i in x) {
        PIXI.game.prodigy.player.backpack.data.follow[i] = {"ID": x[i].ID};
    }
    PIXI.game.prodigy.player.backpack.data.item = [];
    x = PIXI.game.state.states.Boot._gameData.item;
    for (i in x) {
        PIXI.game.prodigy.player.backpack.data.item[i] = {"ID": x[i].ID, "N": 99999999};
    }
}

function getallpets() {
    PIXI.game.prodigy.debugMisc.getAllPets();
}

function makemember() {
    PIXI.game.prodigy.player.tt=true;
}

function infinitewheelofwonderchances() {
    PIXI.game.prodigy.player.backpack.data.item.push({"N":Infinity,"ID":130});
}

function getallfossils() {
    PIXI.game.prodigy.player.backpack.data.fossil = [];
    x = PIXI.game.state.states.Boot._gameData.fossil;
    for (i in x) {
        PIXI.game.prodigy.player.backpack.data.fossil[i] = {"ID": x[i].ID, "N": 1};
    }
}

function getallpotions() {
    PIXI.game.prodigy.debugMisc.getAllPotions();
}

function fillcombatenergy() {
    PIXI.game.prodigy.debugMisc.setBattleEnergy(10);
}

function unlockallzones() {
    PIXI.game.prodigy.classModeController.lockedZones = 0;
}

function teleporttomousepointer() {
    window.addEventListener('keydown', (event) => {
        PIXI.game.prodigy.user.x = PIXI.game.input.mousePointer.position.x;
        PIXI.game.prodigy.user.y = PIXI.game.input.mousePointer.position.y;
    });
}

function upgradeheartbonus() {
    var x = PIXI.game.state.states.Boot._gameData.affix;
    for (i in x) {
        PIXI.game.state.states.Boot._gameData.affix[i].data.value=Infinity;
        PIXI.game.state.states.Boot._gameData.affix[i].data.valuePercent=Infinity;
    }
}
function getallrelics() {
    PIXI.game.prodigy.player.backpack.data.spellRelic = [];
    x = PIXI.game.state.states.Boot._gameData.spellRelic;
    for (i in x) {
        PIXI.game.prodigy.player.backpack.data.spellRelic[i] = {"ID": x[i].ID, "N": 1};
    }
}
function getmaxbountypoints() {
    PIXI.game.prodigy.player.data.bountyScore=100;
}
function greedisgood() {
    PIXI.game.prodigy.debugMisc.greedIsGood();
}
function gainpetstars() {
    for (let PetLoopTest = 0; PetLoopTest < PIXI.game.prodigy.player.kennel.data.length; PetLoopTest++) { 
        PIXI.game.prodigy.player.kennel.data[PetLoopTest].level=100;
    };
}
function getmaxconjurecubes() {
    PIXI.game.prodigy.debugMisc.getCubes(99);
    PIXI.game.prodigy.create.conjureCubeButton();
}
//function newwizzardname() {
//    PIXI.game.prodigy.player.appearance._name.lastName=(Math.round(Math.random() * 1000));
//    PIXI.game.prodigy.player.appearance._name.middleName=(Math.round(Math.random() * 1000));
//}
function gottagofast() {
    PIXI.game.prodigy.debugMisc.setGameSpeed(30);
}
function getrich() {
    for (let i = 0; i < 5000; i++) {
        PIXI.game.prodigy.debugMisc.grabBag(50);
    }
    //Sets the amount of all your currencies to 9 million.
    x = PIXI.game.prodigy.player.backpack.data.item;
    for (i in x) {
        x[i] = {"ID": x[i].ID, "N": 9000000}
    }
}
function ALLOFTHEM() {
    getallitems();
    getallpets();
    makemember();
    infinitewheelofwonderchances();
    getallfossils();
    getallpotions();
    fillcombatenergy();
    unlockallzones();
    teleporttomousepointer();
    upgradeheartbonus();
    getallrelics();
    getmaxbountypoints();
    greedisgood();
    gainpetstars();
    getmaxconjurecubes();
    gottagofast();
    getrich();
}
//function () {
//
//}

