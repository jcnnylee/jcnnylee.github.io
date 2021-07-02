// Fact Generator Button //
var factList = [
  "1 in 5 adults (20.6% which is about 51.5 million people) experienced mental illness in 2019.", /*0*/
  "Serious mental illness (SMI) rose from 2.9 percent (47,000) to 5.6 percent (136,000) in AAPI people ages 18-25 between 2008 and 2018.", /*1*/
  "The prevalence of mental illness among Asian adults is 14.4%. Of the 14.4%, a mere 23.3% received treatment.", /*2*/
  "In 2018, 10.8 percent of Asian Americans lived at or below poverty level, and 6.2 percent were without health insurance. Hawaiian Natives and Pacific Islanders fared slightly worse with 14.8 percent at or below poverty level, and 8.6 percent without health insurance.", /*3*/
  "Compared to non-Hispanic whites, Asian Americans were 3 times less likely to seek healthcare for mental illnesses.", /*4*/
  "Major depressive episodes increased from 10 percent-13.6 percent in AAPI youth ages 12-17, 8.9 percent to 10.1 percent in young adults 18-25, and 3.2 percent to 5 percent in the 26-49 age range between 2015 and 2018.",/*5*/
];


var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

if (factButton) {
factButton.addEventListener("click", displayFact);
}


function displayFact() {
  factText.innerHTML = factList[count];
  count++;

  if (count == factList.length) {
    count = 0;
  }
}
