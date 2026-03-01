document.getElementById('cashout-section').style.display = "none";

document.getElementById('add-money_box')
    .addEventListener('clicked', function () {
        handleToggle("first_login_section", "none")
        handleToggle("cashout-section", "block")
    });

document.getElementById('cashout_box') 
.addEventListener('clicked', function(){

      handleToggle("first_login_section", "none")
        handleToggle("cashout-section", "block")
});
function handleToggle