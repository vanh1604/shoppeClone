import React, { useState, useMemo } from "react";

const ExpensiveCalculation = ({ number }) => {
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    return num * 2; // Giả sử đây là một phép tính đắt đỏ
  };

  // Chỉ tính lại expensiveCalculation khi 'number' thay đổi
  const memoizedResult = useMemo(() => expensiveCalculation(number), [number]);

  return <div>Result: {memoizedResult}</div>;
};

export default ExpensiveCalculation;
