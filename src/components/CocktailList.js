import React from 'react'

export default function CocktailList(props){
  const cocktails = props.cocktails.cocktails
  //console.log(cocktails)
  //const cocktails = props.cocktails.map(cocktail => cocktail.drink)
  //console.log(cocktails.map(cocktail => cocktail.category))
  return(
    <div>
     <ul>
      {cocktails.map(cocktail => 
        <li key={cocktail.id}>
            {cocktail.category}
        </li>)}
     </ul>
     </div>
  )
}