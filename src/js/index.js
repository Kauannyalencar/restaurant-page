import '../css/styles.scss'

import Home from './home-page.js'
import Menu from './menu-page.js'
import About from './about.js'
const btnsSections = document.querySelectorAll("button")
Home()

btnsSections.forEach((btn,index) => {
    btn.addEventListener("click", () => {

       if (index === 0 ) {
        Home()
       }else if (index === 1) {
        Menu()
       }else{
        About()
       }

    })
});


