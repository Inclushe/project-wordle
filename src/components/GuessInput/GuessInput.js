import React from "react";

function GuessInput({ addResult, status }) {
	const [input, setInput] = React.useState("");

	function handleSubmit(event) {
		event.preventDefault();
		addResult(input);
		setInput("");
	}

	return (
		<div>
			<form className="guess-input-wrapper" onSubmit={handleSubmit}>
				<label htmlFor="guess-input">Enter guess:</label>
				<input
					id="guess-input"
					type="text"
					pattern="[A-Z]{5}"
					value={input}
					disabled={status !== "playing"}
					onChange={(event) => {
						if (event.target.value.length > 5) return;
						setInput(event.target.value.toLocaleUpperCase());
					}}
				/>
			</form>
		</div>
	);
}

export default GuessInput;
