import React from 'react'

const Basket = (props) => {
 const {basket} = props;
    return (
    <aside className = "side-panel-basket">
    <h2>Basket</h2>
    
    <div>
        {basket.length == 0 && <div>Basket is empty</div>}
    </div>
    </aside>
  )
}

export default Basket