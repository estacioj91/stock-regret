import React from "react";

const Inputform = ({ changeLength }) => {
	const nameEl = React.useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		changeLength(nameEl.current.value);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					length
					<input type="text" ref={nameEl} />
				</label>
				<input type="submit" name="Submit" />
			</form>
		</div>
	);
};
export default Inputform;
