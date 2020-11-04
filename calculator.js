let button = document.getElementById('button');

button.addEventListener('click', function(){
    let billAmount = document.getElementById('bill').value;
    let tipPercentage = document.getElementById('tip-percent').value;
    let totalpeople = document.getElementById('people').value;

    
    let tip = document.getElementById('tipperperson').value = (parseFloat(billAmount) * parseFloat(tipPercentage)) / 100 / parseFloat(totalpeople);
    document.getElementById('total-bill').value = parseFloat(billAmount) + parseFloat(tip) * parseFloat(totalpeople);

})
