document.getElementById('cashout_btn')
    .addEventListener('click', function (event) {
        event.preventDefault();


        const cashNumber = document.getElementById('cashout_number').value;

        const cashoutAmount = getInputValueById('cashout_amount');
        const cashoutPin = getInputValueById('cashout_pin');
        const cashoutMinBalance = getInnerTextById('add_money_min_balence');
        // console.log(cashoutAmount,cashoutPin,cashoutMinBalance);

        if (cashNumber.length === 11) {
            if (cashoutPin === 1234) {
                const sum = cashoutAmount - cashoutMinBalance;
                document.getElementById('add_money_min_balence').innerText = sum;
                console.log('cashout successful🎉');
            } else {
                alert('incorrect pin')
            }
        } else {
            console.log('invalid your nunber');
        }

    })