import React from 'react'
import MenuItem from "./MenuItem"

function Homepage({items}) {
    const starters = items.filter(item => item.type === "starters").sort((a, b) => a.menuOrder-b.menuOrder)
    const pasta = items.filter(item => item.type === "pasta").sort((a, b) => a.menuOrder-b.menuOrder)
    const pizza = items.filter(item => item.type === "pizza").sort((a, b) => a.menuOrder-b.menuOrder)

  return (
    <div className="menu-container">
    <header>
      <h1>Fancy Italian Restaurant</h1>
    </header>
    <main>
      <section id="starters">
        <h2>Starters</h2>
        {starters.map(item => <MenuItem key={item.name} item={item}/>)}
      </section>
      <section id="pasta">
        <h2>Pasta</h2>
        {pasta.map(item => <MenuItem key={item.name} item={item}/>)}
      </section>
      <section id="pizza">
        <h2>Pizza</h2>
        {pizza.map(item => <MenuItem key={item.name} item={item}/>)}
      </section>
    </main>
    <footer>
        <p>Disclaimer</p>
        <p className="disclaimer spicy">Spicy</p>
    </footer>
    </div>
  )
}

export default Homepage