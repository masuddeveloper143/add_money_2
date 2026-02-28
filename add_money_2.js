document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const sum = getElementValueById();
        console.log(sum);
    });