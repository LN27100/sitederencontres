const flexCheckDefault = document.getElementById('flexCheckDefault');
const flexCheckChecked = document.getElementById('flexCheckChecked');

flexCheckDefault.addEventListener('change', function () {
    if (flexCheckDefault.checked) {
        flexCheckChecked.disabled = false;
    } else {
        flexCheckChecked.disabled = true;
    }
});

flexCheckChecked.addEventListener('change', function () {
    if (flexCheckChecked.checked) {
        flexCheckDefault.disabled = false;
    } else {
        flexCheckDefault.disabled = true;
    }
});