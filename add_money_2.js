document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();


        const amount = getInputValueById("add_money_amount");
        const pin = getInputValueById("add_money_pin");
        const balance = getInnerTextById("add_money_min_balence");
        const account = document.getElementById("add-money_number").value;

        if (amount < 0) {
            alert("added money minimum 1 tk")
            return;
        }
        if (amount > balance){
            alert("invalig")
        }
            if (account.length === 11) {
                if (pin === 1234) {
                    const sum = balance + amount;
                    // document.getElementById("add_money_min_balence").innerText = sum;
                    setInnerTextByIdandValue("add_money_min_balence", sum);
                    // console.log(sum);
                    console.log('add money successful🎉');


                    const container = document.getElementById('transaction-container');
                    const p = document.createElement("p");

                    p.innerText = `added ${amount} from ${account} acount`;
                    container.appendChild(p)


                } else {
                    alert('incorrect pin')
                }
            } else {
                alert('invalid number');
            }

    });