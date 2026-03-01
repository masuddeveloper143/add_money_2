document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = getInputValueById("add_money_amount");
        const pin = getInputValueById("add_money_pin");
        const balance = getInputValueById("add_money_pin");
        const account = document.getElementById("add-money_number").value;

        if (account.length === 11) {
            if (pin === 2333) {
                alert('successful login')
            } else {
                alert('incorrect pin')
            }
        } else {
            alert('invalid number');
        }

    });