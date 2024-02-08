import React from 'react'
import vg from "../assest/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai" 

const Home = () => {
  return (
    <>
    <div className="home" id="home">
     
       <main>
          <h1>
             Techystar
          </h1>
          <p>Solution for ur future goal</p>
       </main>
    </div>


     <div className="home2">
       <img src={vg} alt="Graphics"/>
        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eius incidunt voluptatibus blanditiis assumenda accusamus officiis commodi veniam, omnis quam.</p>
          </div>
    </div>

    <div className="home3" id="about">
        <div>
            <h1>Who we are</h1>
            <p> asperiores, quia obcaecati qui optio saepe. Explicabo aliquid ut nisi! Corporis laboriosam, recusandae, autem quasi quam quibusdam debitis ratione dolores sapiente quo magnam alias molestiae quisquam fugit, incidunt voluptatum cumque! Aliquam sunt ut similique sed illo est, quidem amet numquam doloribus. Fugiat corporis cum qui. Non mollitia cum sit ut saepe impedit animi nostrum vero alias, quaerat eaque doloremque dignissimos enim tempora voluptates totam eum ducimus nihil, quibusdam quis incidunt nemo. Voluptatem error rerum libero et at provident perspiciatis, facilis iusto veritatis magnam maxime aliquid? Nemo excepturi provident magni qui recusandae voluptatum aperiam illum, beatae sapiente odit sint dolores pariatur corporis quisquam iusto nam debitis soluta accusantium quaerat quasi? Non aperiam, pariatur perferendis temporibus perspiciatis et. Adipisci corporis provident ducimus molestiae eligendi. Officiis, qui vero.</p>
        </div>
    </div>

    <div className="home4" id="brand" >
      <div>
        <h1>Brands</h1>
        <article>
          {/* <div style={{
            animationDelay:"0.3s",
          }}></div> */}

           <div style={{
            animationDelay:"0.3s"
           }}
           >
            <AiFillGoogleCircle/>
             <p>Google</p>
           </div>

           <div style={{
            animationDelay:"0.5s"
           }}
           >
            <AiFillAmazonCircle/>
             <p>Amazon</p>
           </div>

           <div style={{
            animationDelay:"0.7s"
           }}
           >
            <AiFillInstagram/>
             <p>Instagram</p>
           </div>

           {/* <div style={{
            animationDelay:"0.9s"
           }}
           >
            <AiFillFacebook/>
             <p>Facebook</p>
           </div> */}

           <div style={{
            animationDelay:"1s"
           }}
           >
            <AiFillYoutube/>
             <p>Youtube</p>
           </div>

        </article>
      </div>
    </div>
</>
  )
}

export default Home