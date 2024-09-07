import  mint  from "../images/mint-ice-cream.png"
import  strawberry  from "../images/strawberry.png"
import  redVelvet  from "../images/red-velvet.jpg";
import chocolate  from "../images/Chocolate-Cake.jpg"

function Menu() {
    const content = document.querySelector(".content")
    content.innerHTML = ""

    content.innerHTML = `
    <h1 class="titulo">Ice Cream</h1>
              <div class="ice-creams">
            <div class="card">
                <img class="card-img" src="${mint}"
                    alt="chocolate Ice cream">
                <h1>Mint</h1>
                <span class="price">$2.50</span>
            </div>
            <div class="card">
                <img class="card-img" src="${strawberry}"
                    alt="chocolate Ice cream">
                <h1>Strawberry</h1>
                <span class="price">$2.50</span>
            </div>
        </div>
        <h1 class="titulo">Cakes</h1>
        <div class="cakes">
                <div class="card">
                    <img class="cake-img" src="${redVelvet}" alt="">
                     <h1>Red velvet</h1>
                     <span class="price">$12.00</span>
                 </div>
                 <div class="card">
                    <img class="cake-img" src="${chocolate}" alt="">
                     <h1>Chocolate </h1>
                     <span class="price">$5.00</span>
                 </div>
        </div>
     `
}

export default Menu;