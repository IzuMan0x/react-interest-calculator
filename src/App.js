import { useState } from "react";
import InputForm from "./components/InputForm";
import MainHeader from "./components/MainHeader";
import TableList from "./components/TableList";

function App() {
  const [calculatedData, setCalculatedData] = useState(null);

  const [userInput, setUserInput] = useState(null);

  const displayCalculatedDateHandler = (calculatedUserData) => {
    setCalculatedData(calculatedUserData);
  };

  const inputDataHandler = (userFormInput) => {
    setUserInput(userFormInput);
  };

  return (
    <div>
      <MainHeader />
      <InputForm
        storeDataHandler={displayCalculatedDateHandler}
        inputData={inputDataHandler}
      />

      {!calculatedData && (
        <p className="header"> No investment calculated yet!!</p>
      )}
      {calculatedData && (
        <TableList
          calculatedData={calculatedData}
          uncalculatedData={userInput}
        />
      )}
    </div>
  );
}

export default App;
