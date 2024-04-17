const form = document.querySelector("#preliminary-questions");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const salary = document.getElementById("annualSalary");
const assets = document.getElementById("totalAssetsValue");
const inheritance = document.getElementById("inheritance");
const form2 = document.getElementById("followup-questions");

const displaySecondaryForm = function () {
  form2.style.display = "block";
};

const checkPrelim = function () {
  //get values from form
  //   const firstNameValue = firstName.value.trim();
  //   const lastNameValue = lastName.value.trim();
  //   const emailValue = email.value.trim();
  const currSalary = salary.value;
  const totalAssets = assets.value;
  const unMetRequirements =
    "Thank you for considering our services. To ensure we can provide the most effective and tailored financial guidance, our practice is currently focused on clients with a minimum salary or Assets Under Management (AUM) of $100,000. If your current financial situation does not meet these criteria, we recommend exploring resources that align more closely with your needs. We appreciate your understanding and wish you success on your financial journey.";

  console.log(currSalary);
  console.log(totalAssets);
  console.log(inheritance.checked);
  console.log(form);
  console.log(form2);

  //if they make less than 100k, have less than 100k in assets, and have don't have an interitance, show error message

  if (
    currSalary === "salaryTier0" &&
    totalAssets === "totalAssetsTier0" &&
    !inheritance.checked
  ) {
    alert(unMetRequirements);
  }

  //if they make less than 100, but have more than 100k in assets + inheritance, show the rest of the form
  else if (
    currSalary === "salaryTier0" ||
    totalAssets != "totalAssetsTier0" ||
    inheritance.checked
  ) {
    console.log("form ok");
    displaySecondaryForm();
  }

  //if they make less than 100k and have less than 100k in assets, but have an inheritience, show the rest of the form
  else if (
    currSalary === "salaryTier0" &&
    totalAssets == "totailAssetsTier0" &&
    inheritance.checked
  ) {
    console.log("form okay");
    displaySecondaryForm();
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkPrelim();
});
