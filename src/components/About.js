import React from "react";
import aboutImg from "../asssets/img/manager/about.jpg";
// import tick from "../asssets/img/manager/tick.png";
// import citticLogo from "citticlogo.svg";

const About = () => {
  return (
    <section className=" pt-8 md:pt-0 items-center" id="about">
      <div className="container py-9 md:py-16 px-5">
        <div className="row">
          <div className="col-lg-6 pb-5">
            <img className="img-fluid" src={aboutImg} alt="" />
          </div>
          <div className="col-lg-6">
            {/* <h5 className="text-secondary">Easier decision making for</h5>  */}
            <p className="w-full md:w-full font-normal text-4xl md:text-7xl !leading-tight uppercase">
              About Us
            </p>
            <p className="mb-4 fw-medium text-secondary">
              IEDC CUSAT is a government-funded organization that aims to
              promote entrepreneurship among students and young professionals in
              India. The organization was established with the goal of fostering
              a culture of innovation and entrepreneurship among the student
              community and to provide the necessary support for the conversion
              of innovative ideas into successful ventures.
              <br />
            </p>
            <div className="d-flex align-items-center mb-3">
              {" "}
              <img
                className="me-sm-4 me-2"
                src="check.png"
                width="35"
                alt="tick"
              />
              <p className="fw-medium mb-0 text-secondary">
                Provides various training and resources for future
                entrepreneurs.
                <br />
              </p>
            </div>
            <div className="d-flex align-items-center mb-3">
              {" "}
              <img
                className="me-sm-4 me-2"
                src="check.png"
                width="35"
                alt="tick"
              />
              <p className="fw-medium mb-0 text-secondary">
                Entrepreneurship-related workshops, seminars, and competitions.
                <br />
              </p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img
                className="me-sm-4 me-2"
                src="check.png"
                width="35"
                alt="tick"
              />
              <p className="fw-medium mb-0 text-secondary">
                {" "}
                Provides incubation facilities for start-ups in CITTIC, CUSAT
                <br />
              </p>
            </div>
            <div className="d-flex align-items-center mb-3">
              {" "}
              <img
                className="me-sm-4 me-2"
                src="check.png"
                width="35"
                alt="tick"
              />
              <p className="fw-medium mb-0 text-secondary">
                {" "}
                Provides opportunities for entrepreneurs to connect with other
                like-minded individuals.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-9 md:py-16 px-5">
        <div className="flex items-center justify-center">
          <div className="col-lg-6">
            {/* <h5 className="text-secondary">Easier decision making for</h5>  */}
            <div className="flex flex-row items-center justify-center">
              <div className="pb-10">
                <svg
                  width="192"
                  height="37"
                  viewBox="0 0 192 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.6309 10.0102L20.7635 22.6896L42.9214 0.775696H29.8924L20.6309 10.0102Z"
                    fill="#1DA6DF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M56.145 26.239L56.0123 13.5596L33.8545 35.4735H46.8835L56.145 26.239Z"
                    fill="#1DA6DF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.7637 22.6895L27.9072 15.6247L40.9961 28.406L33.8543 35.4735L20.7637 22.6895Z"
                    fill="#1179B9"
                  />
                  <path
                    d="M89.292 14.9449H84.6258C84.5406 14.3413 84.3666 13.805 84.1038 13.3363C83.841 12.8604 83.5037 12.4556 83.0918 12.1218C82.6798 11.788 82.204 11.5323 81.6642 11.3547C81.1315 11.1772 80.5527 11.0884 79.9277 11.0884C78.7984 11.0884 77.8148 11.369 76.9767 11.93C76.1386 12.484 75.4888 13.2937 75.0271 14.359C74.5655 15.4172 74.3347 16.7028 74.3347 18.2155C74.3347 19.7709 74.5655 21.0778 75.0271 22.136C75.4959 23.1942 76.1493 23.9932 76.9873 24.533C77.8254 25.0728 78.7949 25.3427 79.8957 25.3427C80.5136 25.3427 81.0854 25.261 81.6109 25.0976C82.1436 24.9343 82.6159 24.6964 83.0278 24.3839C83.4398 24.0643 83.7807 23.6772 84.0506 23.2226C84.3275 22.7681 84.5193 22.2496 84.6258 21.6672L89.292 21.6886C89.1713 22.69 88.8695 23.6559 88.3865 24.5863C87.9106 25.5096 87.2679 26.337 86.4582 27.0685C85.6557 27.793 84.6969 28.3682 83.5818 28.7944C82.4739 29.2134 81.2203 29.4229 79.8212 29.4229C77.8751 29.4229 76.1351 28.9826 74.601 28.1019C73.074 27.2212 71.8666 25.9464 70.9788 24.2773C70.0981 22.6083 69.6578 20.5877 69.6578 18.2155C69.6578 15.8363 70.1052 13.8121 71.0001 12.1431C71.895 10.4741 73.1095 9.20276 74.6436 8.32918C76.1777 7.4485 77.9035 7.00816 79.8212 7.00816C81.0854 7.00816 82.2572 7.18571 83.3368 7.54083C84.4234 7.89594 85.3858 8.41441 86.2239 9.09622C87.0619 9.77094 87.7437 10.5984 88.2693 11.5785C88.802 12.5586 89.1429 13.6807 89.292 14.9449ZM97.2128 7.30645V29.1246H92.5999V7.30645H97.2128ZM100.177 11.1097V7.30645H118.096V11.1097H111.417V29.1246H106.857V11.1097H100.177ZM120.216 11.1097V7.30645H138.135V11.1097H131.456V29.1246H126.896V11.1097H120.216ZM145.699 7.30645V29.1246H141.086V7.30645H145.699ZM168.745 14.9449H164.079C163.994 14.3413 163.82 13.805 163.557 13.3363C163.294 12.8604 162.957 12.4556 162.545 12.1218C162.133 11.788 161.657 11.5323 161.117 11.3547C160.585 11.1772 160.006 11.0884 159.381 11.0884C158.252 11.0884 157.268 11.369 156.43 11.93C155.592 12.484 154.942 13.2937 154.48 14.359C154.019 15.4172 153.788 16.7028 153.788 18.2155C153.788 19.7709 154.019 21.0778 154.48 22.136C154.949 23.1942 155.602 23.9932 156.44 24.533C157.279 25.0728 158.248 25.3427 159.349 25.3427C159.967 25.3427 160.538 25.261 161.064 25.0976C161.597 24.9343 162.069 24.6964 162.481 24.3839C162.893 24.0643 163.234 23.6772 163.504 23.2226C163.781 22.7681 163.972 22.2496 164.079 21.6672L168.745 21.6886C168.624 22.69 168.323 23.6559 167.84 24.5863C167.364 25.5096 166.721 26.337 165.911 27.0685C165.109 27.793 164.15 28.3682 163.035 28.7944C161.927 29.2134 160.673 29.4229 159.274 29.4229C157.328 29.4229 155.588 28.9826 154.054 28.1019C152.527 27.2212 151.32 25.9464 150.432 24.2773C149.551 22.6083 149.111 20.5877 149.111 18.2155C149.111 15.8363 149.558 13.8121 150.453 12.1431C151.348 10.4741 152.563 9.20276 154.097 8.32918C155.631 7.4485 157.357 7.00816 159.274 7.00816C160.538 7.00816 161.71 7.18571 162.79 7.54083C163.877 7.89594 164.839 8.41441 165.677 9.09622C166.515 9.77094 167.197 10.5984 167.722 11.5785C168.255 12.5586 168.596 13.6807 168.745 14.9449Z"
                    fill="#0B497C"
                  />
                </svg>
              </div>
            </div>
            <p className="mb-4 fw-medium text-secondary text-center">
              CITTIC CUSAT provide a springboard to budding entrepreneurs who
              wish to launch themselves into the world of technology based
              business careers. In CITTIC, bright ideas can be developed to a
              product or service using advanced technology solutions. This
              innovation centre is designed to provide all the support to make
              business ventures successful.
              <br />
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
