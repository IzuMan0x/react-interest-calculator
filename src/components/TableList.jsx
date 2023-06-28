const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const TableList = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {props.calculatedData.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>
              {formatter.format(
                yearData.savingsEndOfYear -
                  yearData.yearlyContribution * yearData.year -
                  props.uncalculatedData.savings
              )}
            </td>
            <td>
              {formatter.format(
                yearData.yearlyContribution * yearData.year +
                  props.uncalculatedData.savings
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableList;
