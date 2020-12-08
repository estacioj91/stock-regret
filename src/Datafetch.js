import React, { useState, useEffect } from "react";
import axios from "axios";
// import response from "./test-data";
import { isCompositeComponent } from "react-dom/test-utils";
import moment from "moment";
// UCHLLH0H979IWVEN
// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=full&symbol=IBM&interval=60min&apikey=UCHLLH0H979IWVEN

const Datafetch = ({ length, stock, volume, ready }) => {
	const [results, setResults] = useState([]);
	const [dates, setDates] = useState([]);
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
		resultsObj = { minDate, maxDate, minPrice, maxPrice, maxProfit };
		//return max profit and which dates
		console.log("profits", resultsObj);
		setData(resultsObj);
	};

	const getDates = () => {
		console.log("in get Dates:Results:", results);
		console.log(results);
		const current = moment();
		var resultDates = [];
		if (!results) return;
		if (results.length === 0) return;
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
		console.log("end of get Dates");
	};
	// R287S1LX03F6ERCB
	const getData = async () => {
		// GETS API DATA
		console.log("in get data", stock);
		var url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=full&symbol=${stock}&interval=60min&apikey=8RTQVH1OT3KIYYXY`;
		var res = await axios.get(url).then((res) => {
			var response = res.data;
			var object = response["Time Series (Daily)"];
			// Test Data
			// var object = response;
			setResults(object);
		}, console.error("max calls"));
	};
	useEffect(() => {
		getData();
		getDates();
		console.log("in useEffect from DataFetch", length, dates);
	}, [ready]);

	return (
		<div>
			<h4>Best Date to buy: {data.minDate} </h4>
			<p>{data.minPrice}</p>
			<h4>Best Date to sell: {data.maxDate}</h4>
			<p>{data.maxPrice}</p>
			<h3>{data.maxProfit}</h3>
		</div>
	);
};
export default Datafetch;
