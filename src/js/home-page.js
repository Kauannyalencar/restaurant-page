import mainIceCream from '../images/main-ice-cream.png'

function Home() {
    const content = document.querySelector(".content")
     content.innerHTML = ""
    content.innerHTML = `
          <div class="home">
             <div class="header-main">
              <h1>Ice cream</h1>
            <h3>Enjoy the sweetest part of life, cause life is sweeter when you are.</h3>
            <button class="buy-btn">Buy now</button>
            </div>
            <img src="${mainIceCream}" class="main-img">
            </div>
    `
}

export default Home