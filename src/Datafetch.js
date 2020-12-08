import React, { useState, useEffect } from "react";
import axios from "axios";
// import response from "./test-data";
import { isCompositeComponent } from "react-dom/test-utils";
import moment from "moment";
// UCHLLH0H979IWVEN
// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=full&symbol=IBM&interval=60min&apikey=UCHLLH0H979IWVEN

const Datafetch = ({ length, stock, volume, ready }) => {
	const [results, setResults] = useState("");
	const [dates, setDates] = useState("");
	const [data, setData] = useState("");

	const maxProfit = (arr) => {
		var maxProfit = 0;
		var minVal = Infinity;
		var minDate = "";
		var minPrice = "";
		var maxDate = "";
		var maxPrice = "";
		var resultsObj = {};
		arr.forEach((value) => {
			var current = Number(value.res["4. close"]);
			//7|infinity, 1|7, 5|1,
			if (current < minVal) {
				minDate = value.date;
				minPrice = current;
				minVal = current;
				//5 - 1,
			} else if (current - minVal > maxProfit) {
				maxProfit = current - minVal;
				maxDate = value.date;
				maxPrice = current;
			}
		});
		maxProfit = Number(maxProfit) * Number(volume);
		resultsObj = { minDate, maxDate, minPrice, maxPrice, maxProfit, stock };
		//return max profit and which dates
		setData(resultsObj);
	};

	const getDates = () => {
		const current = moment();
		var resultDates = [];
		if (!results) return;
		while (length > 0) {
			if (!results[current.format("YYYY-MM-DD")]) {
				current.subtract(1, "day");
				continue;
			}
			resultDates.push(current.format("YYYY-MM-DD"));
			current.subtract(1, "day");
			length--;
		}
		var selectedDates = resultDates
			.map((day) => {
				return { date: day, res: results[day] };
			})
			.reverse();
		setDates(selectedDates);
		maxProfit(selectedDates);
	};
	// R287S1LX03F6ERCB
	// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=full&symbol=${stock}&interval=60min&apikey=PUO5FKYX4DDICCZH
	const getData = async () => {
		// GETS API DATA
		if (stock === undefined) return;
		var url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo`;
		var res = await axios.get(url).then((res) => {
			if (
				res.data["Information"] ===
				"Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency."
			) {
				alert(res.data["Information"]);
			}
			var response = res.data;
			// var object = response["Time Series (Daily)"];
			var object = response["Time Series (Daily)"];
			// Test Data
			// var object = response;
			setResults(object);
		}, console.error("max calls"));
	};
	useEffect(() => {
		if (ready === false) return true;
		console.log("results in hooks", results === "");
		if (results == "") {
			getData();
		} else {
			getDates();
		}
	}, [ready, results]);

	return (
		<div className="data-fetch" style={{ textAlign: "center" }}>
			<h1>{data.stock}</h1>
			<h3>Best Date to buy: </h3>
			<p>{data.minDate}</p>
			<p>{!data.minPrice || "price: $" + data.minPrice}</p>
			<h3>Best Date to sell:</h3>
			<p>{data.maxDate}</p>
			<p>{!data.maxPrice || "price: $" + data.maxPrice}</p>
			<h3>Max Profit: </h3>
			<p>{data.maxProfit}</p>
		</div>
	);
};
export default Datafetch;
