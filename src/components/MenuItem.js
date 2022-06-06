import React from 'react'

function MenuItem({item}) {

    function formatToCurrency(amount){
        return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
    }

  return (
    <div>
        <p>{item.name} {item.spicy && <span className="spicy"></span>}</p>
        <p>{item.description}</p>
        <p>${formatToCurrency(item.price)}</p>
    </div>
  )
}

export default MenuItem