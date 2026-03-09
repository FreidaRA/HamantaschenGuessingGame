//Freida Atkins, 2026
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function processGuess() {
    const min= 0;
    const max = 5;

    //get random number of hamantaschen
    const hamantaschenNumber = getRandomNumber(min, max);
	const container =  document.getElementById('hamantaschenContainer');
     container.innerHTML = '';

    //get the player's guess
    const numberGuessed = parseInt(document.getElementById("playerGuess").value);

    //start the message we'll send back to the player
    let message = `You guessed ${numberGuessed} and there are  ${hamantaschenNumber} hamantaschen left. `;
    
    if (isNaN(numberGuessed) || numberGuessed <0 || numberGuessed > 20)
    {
        document.getElementById("result").textContent = "Please enter a whole number between 0 and 20.";
        return;
    }
	if ( hamantaschenNumber == numberGuessed && hamantaschenNumber == 0)
	{
	//aww man there is no hamantaschens left
		document.getElementById("result").textContent = "You are correct there are no hamantaschens left";
		const imgg = document.createElement('img');
		//Image made by me(Freida Atkins) in adobe illistrator

        imgg.src = "plate with crumbs.png";
        container.appendChild(imgg);
	}
    
    else if (hamantaschenNumber===numberGuessed)
    {
        //player is correct!
        document.getElementById("result").textContent = message + "You are correct!";
    }
    else
    {
        //player guessed incorrectly
		document.getElementById("result").textContent = message + "Sorry, you didn't guess the right amount of hamantaschens left.";
    }
	//show hamantaschen
	//Image made by me(Freida Atkins) in adobe illistrator
     for (let i = 0; i < hamantaschenNumber; i++) {
       const img = document.createElement('img');
       img.src = "Hamantaschen.png";
       container.appendChild(img);
     }	
}

document.getElementById("submitGuess").addEventListener("click", processGuess);
