import React from 'react'
import './Exerscise.css'
import lunges from "../assests/lunges.png"
import yoga from '../assests/yoga-pose.png';
import extended from "../assests/extended.png"
const Exerscise = () => {
  return (
    <section>
        <div className="container container_exerscise">
            <div className="exerscise_top">
                <h2 className="section_title">
                    Benefits of <span className='highlights'>
                         Exerscise
                    </span>

                </h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem nesciunt quaerat error dolores,<br /> ullam necessitatibus sequi totam fugit voluptas quidem at eveniet tenetur. Aut rerum iusto placeat
                </p>
            </div>

            <div className="exerscise_wrapper">
                <div className="exerscise_item">
                    <span className="exerscise_icon">
                        <img src={lunges} alt="" />
                    </span>
                    <div className="exerscise_content">
                        <h4>Healthy Lifestyle</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.   </p>
                    </div>
                    
                </div>
                <div className="exerscise_item">
                    <span className="exerscise_icon">
                        <img src={yoga} alt="" />
                    </span>
                    <div className="exerscise_content">
                        <h4>Reducing Blood Pressure</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipi elit. Quidem minus.</p>
                    </div>
                    
                </div>
                <div className="exerscise_item">
                    <span className="exerscise_icon">
                        <img src={extended} alt="" />
                    </span>
                    <div className="exerscise_content">
                        <h4>Increased Flexibility</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem  minus.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Exerscise
