import React from 'react'
import aboutImg from '../asssets/img/manager/about.jpg'
import tick from '../asssets/img/manager/tick.png'

const About = () => {
    return (
        <section className=" pt-8 md:pt-20" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pb-5"><img className="img-fluid" src={aboutImg} alt="" /></div>
                    <div className="col-lg-6">
                         {/* <h5 className="text-secondary">Easier decision making for</h5>  */}
                        <p className="w-full md:w-full font-normal text-4xl md:text-7xl !leading-tight uppercase">About Us</p>
                        <p className="mb-4 fw-medium text-secondary">
                            IEDC CUSAT is a government-funded organization that aims to promote entrepreneurship among students and
                            young professionals in India. The organization was established with the goal of fostering a culture of
                            innovation and entrepreneurship among the student community and to provide the necessary support for the
                            conversion of innovative ideas into successful ventures.<br />
                        </p>
                        <div className="d-flex align-items-center mb-3"> <img className="me-sm-4 me-2" src={tick}
                            width="35" alt="tick" />
                            <p className="fw-medium mb-0 text-secondary">Provides various training and resources for future
                                entrepreneurs.<br /></p>
                        </div>
                        <div className="d-flex align-items-center mb-3"> <img className="me-sm-4 me-2" src={tick}
                            width="35" alt="tick" />
                            <p className="fw-medium mb-0 text-secondary">Entrepreneurship-related workshops, seminars, and competitions.
                                <br />
                            </p>
                        </div>
                        <div className="d-flex align-items-center mb-3"><img className="me-sm-4 me-2" src={tick}
                            width="35" alt="tick" />
                            <p className="fw-medium mb-0 text-secondary"> Provides incubation facilities for start-ups in CITTIC,
                                CUSAT<br />
                            </p>
                        </div>
                        <div className="d-flex align-items-center mb-3"> <img className="me-sm-4 me-2" src={tick}
                            width="35" alt="tick" />
                            <p className="fw-medium mb-0 text-secondary"> Provides opportunities for entrepreneurs to connect with other
                                like-minded individuals.<br />
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        {/* </div> */}

    </section >
  )
}

export default About