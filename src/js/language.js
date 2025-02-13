document.addEventListener('DOMContentLoaded', function () {
  var selectElement = document.getElementById('language-select');

  selectElement.addEventListener('change', function () {
    var selectedValue = selectElement.value;
    if (selectedValue) {
      window.location.href = selectedValue; 
    }
  });
});
