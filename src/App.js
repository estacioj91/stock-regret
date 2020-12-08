import React, { useState, useEffect } from "react";
import Datafetch from "./Datafetch";
import Inputform from "./Inputform";
const App = () => {
	const [singleState, setSingle] = useState({
		length: 0,
		stock: "IBM",
		volume: "10",
	});
	const [ready, setReady] = useState(false);
	useEffect(() => {
		console.log("app useeffect", singleState, "ready", ready);
	}, [ready]);
	return (
		<div>
			<Inputform changeSingle={setSingle} setReady={setReady} />
			<Datafetch
				length={singleState.length}
				stock={singleState.stock}
				volume={singleState.volume}
				ready={ready}
			/>
		</div>
	);
};

export default App;
