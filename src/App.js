import React, { useState, useEffect } from "react";
import Datafetch from "./Datafetch";
import Inputform from "./Inputform";
const App = () => {
	const [singleState, setSingle] = useState({
		length: 7,
		stock: "IBM",
		volume: "10",
	});
	const [ready, setReady] = useState(false);
	useEffect(() => {
		console.log("app useeffect", singleState, "ready", ready);
	}, [ready]);
	return (
		<div className="app body-wrap">
			<Inputform changeSingle={setSingle} setReady={setReady} />
		</div>
	);
};

export default App;
