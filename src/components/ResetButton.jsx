const ResetButton = (props) => {
  const resetDataHandler = () => {
    props.storeDataHandler(null);
  };
  return (
    <button type="reset" className="buttonAlt" onClick={resetDataHandler}>
      Reset
    </button>
  );
};

export default ResetButton;
