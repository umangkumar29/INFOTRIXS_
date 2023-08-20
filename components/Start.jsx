import React from 'react'
import "./Start.css"
import trainImg from "../assests/trainer.png"
const Start = () => {
  return (
    <section>
      <div className="container">
        <div className="start_wrapper">
            <div className="start_img">
                <img src={trainImg} alt=""  />
            </div>
            <div className="start_content">
                <h2 className="section_title">
                    Ready to make a <span className="highlights">Change?</span>
                </h2>   
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolor quia porro corporis hic praesentium soluta quam asperiores rerum eligendi, sapiente delectus voluptas voluptatem aspernatur aliquid accusamus adipisci officia, reiciendis voluptatibus.
                </p>

                <button className='signin getstarted'>Get Started</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Start
