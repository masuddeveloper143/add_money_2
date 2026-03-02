document.getElementById('cashout-section').style.display = "none";
document.getElementById('first_login_section').style.display = "none";
document.getElementById('transection_hestory').style.display = "none";

document.getElementById('add-money_box')
    .addEventListener('click', function () {
        console.log('clicked');
        handleToggle("first_login_section", "block")
        handleToggle("cashout-section", "none")
        handleToggle("transection_hestory", "none");
    });

document.getElementById('cashout_box')
    .addEventListener('click', function () {

        handleToggle("first_login_section", "none")
        handleToggle("cashout-section", "block")
        handleToggle("transection_hestory", "none");
    });
function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}