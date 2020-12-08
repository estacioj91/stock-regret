import React from "react";
import Datafetch from "./Datafetch";
import { Button } from "react-bootstrap";
const Inputform = ({
	changeSingle,
	changeLength,
	changeStock,
	changeVolume,
}) => {
	const lengthEL = React.useRef(null);
	const stockEL = React.useRef(null);
	const volumeEL = React.useRef(null);
	const [userVolume, setVolume] = React.useState(10);
	const [userLength, setLength] = React.useState(7);
	const [userStock, setStock] = React.useState();
	const [userReady, setuserReady] = React.useState(false);
	const stockRef = React.useRef("");
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<form
				className="input-wrap"
				onSubmit={handleSubmit}
				style={{ alignContent: "center" }}
			>
				<label>
					Stock
					<input
						id="input-data"
						type="text"
						ref={stockEL}
						onChange={() => {
							console.log(stockEL.current.value);
						}}
					/>
				</label>
				<br />
				<p>Length</p>
				<div className="length-button">
					<Button
						variant="outline-dark"
						value="7"
						name="length"
						className="Button-length active"
						onClick={(e) => {
							var elements = document.getElementsByClassName(
								"Button-length"
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
					</Button>
					<Button
						variant="outline-dark"
						value="30"
						name="length"
						className="Button-length"
						onClick={(e) => {
							var elements = document.getElementsByClassName(
								"Button-length"
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
					</Button>
					<Button
						variant="outline-dark"
						value="180"
						name="length"
						className="Button-length"
						onClick={(e) => {
							var elements = document.getElementsByClassName(
								"Button-length"
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
					</Button>
					<Button
						variant="outline-dark"
						value="365"
						name="length"
						className="Button-length"
						onClick={(e) => {
							var elements = document.getElementsByClassName(
								"Button-length"
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
					</Button>
				</div>
				<br />
				<p>Shares</p>
				<div className="share-button">
					<Button
						variant="outline-dark"
						value="10"
						name="value"
						className="Button active"
						onClick={(e) => {
							var elements = document.getElementsByClassName("Button");
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
					</Button>
					<Button
						variant="outline-dark"
						type="radio"
						value="100"
						name="value"
						className="Button"
						onClick={(e) => {
							var elements = document.getElementsByClassName("Button");
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
					</Button>
					<Button
						variant="outline-dark"
						type="radio"
						value="1000"
						name="value"
						className="Button"
						onClick={(e) => {
							var elements = document.getElementsByClassName("Button");
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
					</Button>
				</div>
				<br />
				<Button
					className="submit-button"
					variant="outline-dark"
					style={{ width: "100%" }}
					type="submit"
					name="Submit"
					onClick={() => {
						var inputStock = document.getElementById("input-data").value;
						console.log("input stock", inputStock);
						setStock(inputStock);
						setuserReady(true);
					}}
				>
					Submit
				</Button>
			</form>
			{console.log("user volume", userVolume, userLength, userStock)}
			<Datafetch
				stock={userStock}
				length={userLength}
				volume={userVolume}
				ready={userReady}
			/>
		</div>
	);
};
export default Inputform;
// length: lengthEL.current.value,
// stock: stockEL.current.value,
// volume: volumeEL.current.value,
