const actual_date = new Date();
const actual_year = actual_date.getFullYear();
const age = actual_year - 1984;

window.onload=function() {
  document.getElementById('age').innerHTML = age;
};
