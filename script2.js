//Adding an employee
document.getElementById('add-btn').addEventListener('click', async () => {
  const employeeData = getFormData();
   if (employeeData.empId === "" || employeeData.firstName === "" || employeeData.lastName === "" || employeeData.email === "") {
    alert("All fields must be filled out");
    return false;
  }
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(employeeData.emailId)) {
      alert("Invalid email format");
      return false;
  }
  try {
    const response = await fetch('http://localhost:8080/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    });
    const data = await response.json();
    console.log('Employee added:', data);
    window.location.href = "index.html";
    alert('Employee added successfully');
  } catch (error) {
    console.error('Error adding employee:', error);
  }
});

function getFormData() {
  const employeeId = document.getElementById('employee-id').value;
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  return {
    empId: employeeId,
    firstName: firstName,
    lastName: lastName,
    emailId: email,
  };
}


    