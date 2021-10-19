import React from 'react'
import { Recipe } from "./recipe.js"

export class Menu extends React.Component {

   render() {

      return (<article>

         <header>

            <h1>{this.props.title}</h1>

         </header>

         <div className="recipes">
            {this.props.recipes.map((recipe, i) =>
               <Recipe key={i} name={recipe.name}
                  ingredients={recipe.ingredients}
                  steps={recipe.steps} />
            )}
         </div>

      </article>)

   };

};