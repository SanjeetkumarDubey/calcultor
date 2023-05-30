function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculateResult() {
    let result = document.getElementById('result').value;
    let calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;
  }