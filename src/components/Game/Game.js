import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [results, setResults] = React.useState([]);
	const [status, setStatus] = React.useState("playing");
	React.useEffect(() => {
		if (results.length === 0) return;
		const latestResult = results[results.length - 1];
		if (latestResult.result === answer) {
			setStatus("won");
			return;
		}
		if (results.length === NUM_OF_GUESSES_ALLOWED) {
			setStatus("lost");
			return;
		}
	}, [results]);
	function addResult(input) {
		const nextResults = [...results];
		nextResults.push({
			id: crypto.randomUUID(),
			result: input,
		});
		setResults(nextResults);
	}

	return (
		<>
			<GuessResults results={results} answer={answer} />
			<GuessInput addResult={addResult} status={status} />
			{status === "won" && (
				<Banner classes="happy">
					{" "}
					<p>
						<strong>Congratulations!</strong> Got it in{" "}
						<strong>
							{results.length} guess{results.length !== 1 && "es"}
						</strong>
						.
					</p>
				</Banner>
			)}
			{status === "lost" && (
				<Banner classes="sad">
					{" "}
					<p>
						Sorry, the correct answer is <strong>{answer}</strong>.
					</p>
				</Banner>
			)}
		</>
	);
}

export default Game;
