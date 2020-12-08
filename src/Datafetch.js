import React, { useState, useEffect } from "react";
import axios from "axios";
import response from "./test-data";
import { isCompositeComponent } from "react-dom/test-utils";
import moment from "moment";
// UCHLLH0H979IWVEN
// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=full&symbol=IBM&interval=60min&apikey=UCHLLH0H979IWVEN

const Datafetch = ({ length }) => {
	const [dataSet, setDataSet] = useState([]);
	const [results, setResults] = useState([]);
	const [dates, setDates] = useState([]);

	const maxProfit = (arr) => {
		var maxProfit = 0;
		var minVal = Infinity;
		var minDate = "";
		var maxDate = "";
		var results = {};
		arr.forEach((value) => {
			var current = Number(value.res["4. close"]);
			//7|infinity, 1|7, 5|1,
			if (current < minVal) {
				minDate = value.date;
				minVal = current;
				//5 - 1,
			} else if (current - minVal > maxProfit) {
				maxProfit = current - minVal;
				maxDate = value.date;
			}
		});
		results = { minDate, maxDate, maxProfit };
		//return max profit and which dates
		console.log(results);
		return results;
	};

	const getDates = () => {
		const current = moment();
		var resultDates = [];
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
		maxProfit(selectedDates);
	};

	const getData = async () => {
		// GETS API DATA
		// var url =
		// 	"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=full&symbol=IBM&interval=60min&apikey=R287S1LX03F6ERCB";
		// var res = await axios.get(url).then((res) => {
		// 	return res;
		// }, console.error("error"));
		// var response = res.data;
		// var object = JSON.stringify(response["Time Series (Daily)"]);

		// Test Data
		var object = response;
		setResults(object);
		getDates();
	};
	useEffect(() => {
		if (length === 0) return;
		getData();
		console.log("useeffect", dataSet);
	}, [results, length]);

	return <div>{length}</div>;
};
export default Datafetch;
