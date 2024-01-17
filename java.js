function checkResult() {
  var rollNumber = $('#rollNumber').val();
  google.script.run.withSuccessHandler(displayResult).getStudentResult(rollNumber);
}

function displayResult(result) {
  if (result) {
    $('#resultDisplay').html(`<p>Name: ${result.name}</p><p>Roll Number: ${result.rollNumber}</p><p>Marks: ${result.marks}</p>`);
  } else {
    $('#resultDisplay').html('<p>Student not found</p>');
  }
}
