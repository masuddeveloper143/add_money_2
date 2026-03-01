document.getElementById('cashout-section').style.display = "none";

document.getElementById('add-money_box')
    .addEventListener('click', function () {
        console.log('clicked');
        handleToggle("first_login_section", "block")
        handleToggle("cashout-section", "none")
    });

document.getElementById('cashout_box') 
.addEventListener('click', function(){

      handleToggle("first_login_section", "none")
        handleToggle("cashout-section", "block")
});
function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}