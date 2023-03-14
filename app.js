
// adding functionality to my menu button

let menu_btn = document.querySelector('.menu')
let nav = document.querySelector('nav')

menu_btn.addEventListener('click', ()=>{
     nav.classList.toggle('show')

})


// convertion logic starts here

// target the convert btn
document.querySelector('.btn-convert').addEventListener('click', (event)=>{
     
     // currency
     let from = document.querySelector('.from').value;
     let to = document.querySelector('.to').value;

     // amount
     let currency_value = Number(document.querySelector('.currency-value').value);

     // symbol-display
     let symbol = document.querySelector('.symbol')

     // converted_value
     let converted_value = document.querySelector('.amount-value')




     // phase 1
     if(from === 'USD' && to === 'USD'){
          let amount = currency_value * 1
          amount = Number(amount)
          amount = amount.toLocaleString('en')
          symbol.textContent = '$'
          converted_value.textContent = amount

     }else  if(from === 'USD' && to === 'EUR'){
          let amount = currency_value / 1.02
          amount = Number(amount)
          amount = amount.toLocaleString('en')
          symbol.textContent = '€'
          converted_value.textContent = amount

     }

})




