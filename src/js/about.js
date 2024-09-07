function About() {
    const content = document.querySelector(".content");
    content.innerHTML = "";
    content.innerHTML = `
       <div class="about">
        <div class="schedule">
            <h1>Our values</h1>
            <hr/>
            <p>Make life more sweeter and provide the best service.</p>
        </div>
        <div class="contact-infor">
        <h1>Contact us</h1>
        <hr/>
            <h3>Phone</h3>
            <p>5555-5555</p>
            <h3>Email</h3>
            <p>@myrealrealemail.com</p>
            <h3>Location</h3>
            <p>Av.Amore, 202</p>
        </div>
       </div>
     `
}

export default About;