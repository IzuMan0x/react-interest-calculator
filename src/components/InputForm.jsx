import CalculateButton from "./CalculateButton";
import InputBox from "./InputBox";
import ResetButton from "./ResetButton";
const InputForm = (props) => {
  let userInput;

  const calculateHandler = (userInput) => {
    props.inputData(userInput);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.savings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedInterestRate / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    props.storeDataHandler(yearlyData);
    // do something with yearlyData ...
  };

  const yearlyDataChangeHandler = (formData) => {
    //We need to check if the data exist or it will throw an error
    if (formData) {
      userInput = formData;
      console.log("This is from InputForm component", userInput);
    }
  };

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        calculateHandler(userInput);
      }}
    >
      <InputBox userDataHandler={yearlyDataChangeHandler} />
      <p className="actions">
        <ResetButton storeDataHandler={props.storeDataHandler} />
        <CalculateButton />
      </p>
    </form>
  );
};

export default InputForm;
