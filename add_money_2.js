document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();


        const amount = getInputValueById("add_money_amount");
        const pin = getInputValueById("add_money_pin");
        const balance = getInnerTextById("add_money_min_balence");
        const account = document.getElementById("add-money_number").value;
        const allBank = document.getElementById("all-bank").value;
        console.log(allBank);

        if (amount < 0) {
            alert("added money minimum 1 tk")
            return;
        }



        if (account.length === 11) {
            if (pin === 1234) {
                const sum = balance + amount;
                // document.getElementById("add_money_min_balence").innerText = sum;
                setInnerTextByIdandValue("add_money_min_balence", sum);
                // console.log(sum);
                console.log('add money successful🎉');


                const container = document.getElementById('transaction-container');
               const div = document.createElement("div");
                div.classList.add("bg-red-400");
                div.innerHTML = `
                    <h1 class="text-yellow-500">Added money from ${allBank} </h1>
                    <h3>${amount}</h3>
                `;

                container.appendChild(div);


            } else {
                alert('incorrect pin')
            }
        } else {
            alert('invalid number');
        }

    });