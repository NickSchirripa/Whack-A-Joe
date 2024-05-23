

let currMoleTile;
let currPlantTile;
let score = 0;
let gameover = false;



window.onload=function(){
    setGame();

}



function setGame(){
    for(let i = 0; i < 9; i++){

        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selectTile)
        document.getElementById("board").appendChild(tile);

    }
    
    setInterval(setMole, 1000)
    setInterval(setPlant, 2000)
    


  
}






function getRandomTile(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}




function setMole(){

    if(gameover){
        return
    }

    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }


    let mole = document.createElement("img");
    mole.src = "./joe.png"

    let num = getRandomTile();

    if(currPlantTile && currPlantTile.id === num){
        return
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
    document.getElementById("btn").style.display = "none"

}




function setPlant(){

    if(gameover){
        return
    }

    if(currPlantTile){
        currPlantTile.innerHTML = ""
    }

 
    let plant = document.createElement("img")
    plant.src = "./nickPic.png"

    let num = getRandomTile()

    if(currMoleTile && currMoleTile.id === num){
        return
    }
    currPlantTile = document.getElementById(num)
    currPlantTile.appendChild(plant);
}



function selectTile(){

    if(gameover){
        return
    }

    if (this == currMoleTile){
        score += 10
        document.getElementById("score").innerText = score.toString()
    }
    else if (this == currPlantTile){
        document.getElementById("score").innerText = "Game Over Loser" + " " + score.toString()
        gameover = true
       document.getElementById("btn").style.display = "block"
       document.getElementById("btn").addEventListener("click", reStart)
    
    }
}




function reStart(){
    gameover = false
    score = 0
    document.getElementById("score").innerText = "Whack a Joe"

}