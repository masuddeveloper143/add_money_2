document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = getInputValueById("add_money_amount");
        console.log(amount);

    });