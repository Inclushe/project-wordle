import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
	let guessArray;
	let checkedGuess;
	if (guess === undefined) {
		guessArray = range(0, 5).map((_) => "");
		checkedGuess = range(0, 5).map((_) => ({
			status: "",
		}));
	} else {
		guessArray = guess.result.split("");
		checkedGuess = checkGuess(guess.result, answer);
	}
	return (
		<p className="guess">
			{guessArray.map((letter, index) => (
				<span className={`cell ${checkedGuess[index].status}`} key={index}>
					{letter}
				</span>
			))}
		</p>
	);
}

export default Guess;
