import React, { Component } from "react";
const echarts = require("echarts"); // Import echarts API
import chartStyle from "../../styles/Charts.module.scss";

// Bar chart component
class BarCharts extends React.Component {
  async componentDidMount() {
    // Initialize the chart
    var myChart = echarts.init(document.getElementById("bar"));
    // Get userId from local storage
    let userId = localStorage.getItem("loggedInUserId");
    // Fetch expense objects by userId
    const responseExpense = await fetch(
      `/api/getExpense` + "?userId=" + userId
    );
    let expense = await responseExpense.json();

    let food = 0,
      entertainment = 0,
      medical = 0,
      selfcare = 0,
      housing = 0,
      travel = 0;
    if (expense.message.length > 0) {
      // Sum up the expenses by category
      for (let i = 0; i < expense.message.length; i++) {
        let category = expense.message[i].category;
        if (category == "food" || category == "Food") {
          food += parseInt(expense.message[i].expense);
        } else if (category == "entertainment" || category == "Entertainment") {
          entertainment += parseInt(expense.message[i].expense);
        } else if (category == "medical" || category == "Medical") {
          medical += parseInt(expense.message[i].expense);
        } else if (
          category == "selfcare" ||
          category == "Self Care" ||
          category == "Selfcare"
        ) {
          selfcare += parseInt(expense.message[i].expense);
        } else if (category == "housing" || category == "Housing") {
          housing += parseInt(expense.message[i].expense);
        } else if (category == "travel" || category == "Travel") {
          travel += parseInt(expense.message[i].expense);
        }
      }
    }

    // Set the chart properties
    var option = {
      title: {
        text: "Expenses by categories",
      },
      tooltip: {},
      legend: {
        data: ["Expenses"],
      },
      xAxis: {
        data: [
          "Food",
          "Entertainment",
          "Medical",
          "Self Care",
          "Housing",
          "Travel",
        ],
      },
      yAxis: {},
      series: [
        {
          name: "Expenses",
          type: "bar",
          data: [food, entertainment, medical, selfcare, housing, travel],
        },
      ],
    };

    myChart.setOption(option);
  }
  render() {
    return <div id="bar" className={chartStyle.chart}></div>;
  }
}

export default BarCharts;
