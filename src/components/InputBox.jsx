import { useState } from "react";

const InputBox = (props) => {
  const [savings, setSavings] = useState(10000);
  const [yearlyContribution, setYearlyContribution] = useState(1000);
  const [expectedInterestRate, setExpectedInterestRate] = useState(7);
  const [duration, setDuration] = useState(10);

  const savingsChangeHandler = (event) => {
    setSavings(event.target.value);
  };

  const contributionChangeHandler = (event) => {
    setYearlyContribution(event.target.value);
  };

  const interestChangeHandler = (event) => {
    setExpectedInterestRate(event.target.value);
  };

  const durationChangeHandler = (event) => {
    setDuration(event.target.value);
  };

  const yearlyData = {
    savings: +savings,
    yearlyContribution: +yearlyContribution,
    expectedInterestRate: +expectedInterestRate,
    duration: duration,
  };

  return (
    <div>
      <div className="input-group" onChange={props.userDataHandler(yearlyData)}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={savings}
            onChange={savingsChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={contributionChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedInterestRate}
            onChange={interestChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={durationChangeHandler}
          />
        </p>
      </div>
    </div>
  );
};
export default InputBox;
