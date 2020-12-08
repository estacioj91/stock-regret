import React, { useState, useEffect } from "react";
import Datafetch from "./Datafetch";
import Inputform from "./Inputform";
const App = () => {
	const [length, setLength] = useState(0);
	useEffect(() => {
		console.log("app useeffect");
	}, [length]);
	return (
		<div>
			<Inputform changeLength={setLength} />
			<Datafetch length={length} />
		</div>
	);
};

export default App;
