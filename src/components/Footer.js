import React from 'react'
import './css/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='subFooter'>
                <div className='about'>
                    <p>About Us</p>
                    <span>
                        <p>
                            Lorem ipsum dolor sit amet.
                            consectetur adipisicing elit. Autem
                            architecto, asperiores. Recusandae ea a
                            culpa eligendi, harum amet cumque quod.
                    </p>
                        <br/>
                        <p>
                            Lorem ipsum dolor sit amet.
                            consectetur adipisicing elit.
                            Aliquid sequi, fuga rem aperiam
                            expedita ipsum.
                    </p>
                    </span>
                </div>
                <div className='project'>
                    <p>Latest Projects</p>
                    <span>
                        <p>
                            Lorem ipsum dolor sit amet.
                            consectetur adipisicing elit. Autem
                            architecto, asperiores. Recusandae ea a
                            culpa eligendi, harum amet cumque quod.
                    </p>
                        <br/>
                        <p>
                            Lorem ipsum dolor sit amet.
                            consectetur adipisicing elit.
                            Aliquid sequi, fuga rem aperiam
                            expedita ipsum.
                    </p>
                    </span>
                </div>
                <div className='contact'>
                    <p>Contact Info</p>
                    <span>
                        <p>
                            Call Us +234 812 345 6789
                    </p>
                        <p>
                            business@support.com
                    </p>
                    </span>
                </div>
            </div>
            <div className='connect'>
                <p>Connect With Us</p>
                <a href="#fb" ><i class="fas fa-facebook-f    "></i>F</a>
                <a href="#inst" ><i class="fa fa-instagram" aria-hidden="true"></i>i</a>
                <a href="#tet" ><i class="fa fa-twitter" aria-hidden="true"></i>t</a>
                <a href="#li" ><i class="fa fa-linkedin" aria-hidden="true"></i>L</a>
            </div>
        </div>
    )
}

export default Footer
