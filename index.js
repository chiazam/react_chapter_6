import React from 'react'
import { render } from 'react-dom'
import { Menu } from "./components/menu.js"
import { Data } from "./api_data/data.js"

render(<Menu recipes={Data} title="Delicious Recipes" />, document.getElementById('root'))