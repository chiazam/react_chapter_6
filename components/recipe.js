import React from 'react'
export class Recipe extends React.Component {

    render() {

        return (<section id={this.props.name.toLowerCase().replace(/ /g, "-")}>

            <h1>{this.props.name}</h1>

            <ul className="ingredients">
                {this.props.ingredients.map((ingredient, i) =>
                    <li key={i}>{ingredient.name}</li>
                )}
            </ul>

            <section className="instructions">

                <h2>Cooking Instructions</h2>

                {this.props.steps.map((step, i) =>
                    <p key={i}>{step}</p>
                )}

            </section>

        </section>
        );

    };

};