import React from "react";

const Inputform = ({
	changeSingle,
	changeLength,
	changeStock,
	changeVolume,
	setReady,
}) => {
	const lengthEL = React.useRef(null);
	const stockEL = React.useRef(null);
	const volumeEL = React.useRef(null);
	const [userVolume, setVolume] = React.useState(0);
	const [userLength, setLength] = React.useState(0);
	const handleSubmit = (e) => {
		e.preventDefault();
		changeSingle({
			length: userLength,
			stock: "TSLA",
			volume: userVolume,
		});
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Stock
					<input type="text" ref={stockEL} />
				</label>
				<br />
				<label>
					Length
					<button
						value="7"
						name="length"
						className="button-length active"
						onClick={(e) => {
							var elements = document.getElementsByClassName(
								"button-length"
							);
							for (let i = 0; i < elements.length; i++) {
								elements[i].className = elements[i].className.replace(
									" active",
									""
								);
							}
							e.target.classList.add("active");
							setLength(7);
						}}
					>
						Week
					</button>
					<button
						value="30"
						name="length"
						className="button-length"
						onClick={(e) => {
							var elements = document.getElementsByClassName(
								"button-length"
							);
							for (let i = 0; i < elements.length; i++) {
								elements[i].className = elements[i].className.replace(
									" active",
									""
								);
							}
							e.target.classList.add("active");
							setLength(30);
						}}
					>
						Month
					</button>
					<button
						value="180"
						name="length"
						className="button-length"
						onClick={(e) => {
							var elements = document.getElementsByClassName(
								"button-length"
							);
							for (let i = 0; i < elements.length; i++) {
								elements[i].className = elements[i].className.replace(
									" active",
									""
								);
							}
							e.target.classList.add("active");
							setLength(180);
						}}
					>
						6 Month
					</button>
					<button
						value="365"
						name="length"
						className="button-length"
						onClick={(e) => {
							var elements = document.getElementsByClassName(
								"button-length"
							);
							for (let i = 0; i < elements.length; i++) {
								elements[i].className = elements[i].className.replace(
									" active",
									""
								);
							}
							e.target.classList.add("active");
							setLength(365);
						}}
					>
						Year
					</button>
				</label>
				<br />
				<label>
					Volume
					<button
						value="10"
						name="value"
						className="button active"
						onClick={(e) => {
							var elements = document.getElementsByClassName("button");
							for (let i = 0; i < elements.length; i++) {
								elements[i].className = elements[i].className.replace(
									" active",
									""
								);
							}
							e.target.classList.add("active");
							setVolume(10);
						}}
					>
						10
					</button>
					<button
						type="radio"
						value="100"
						name="value"
						className="button"
						onClick={(e) => {
							var elements = document.getElementsByClassName("button");
							for (let i = 0; i < elements.length; i++) {
								elements[i].className = elements[i].className.replace(
									" active",
									""
								);
							}
							e.target.classList.add("active");
							setVolume(100);
						}}
					>
						100
					</button>
					<button
						type="radio"
						value="1000"
						name="value"
						className="button"
						onClick={(e) => {
							var elements = document.getElementsByClassName("button");
							for (let i = 0; i < elements.length; i++) {
								elements[i].className = elements[i].className.replace(
									" active",
									""
								);
							}
							e.target.classList.add("active");
							setVolume(1000);
						}}
					>
						1000
					</button>
				</label>
				<br />
				<button
					type="submit"
					name="Submit"
					onClick={() => {
						setReady(true);
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
};
export default Inputform;
// length: lengthEL.current.value,
// stock: stockEL.current.value,
// volume: volumeEL.current.value,
