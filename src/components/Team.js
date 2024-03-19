import React from "react";

const teamData = [
  {
    name: "Aswin Pradeep C",
    role: "CEO",
    image: "aswinpradeep.jpg",
    social: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/aswinpradeepc",
      },
      {
        platform: "twitter",
        url: "#",
      },
      {
        platform: "instagram",
        url: "#",
      },
    ],
  },
  {
    name: "Ashitha",
    role: "COO",
    image: "ashitha.jpg",
    social: [
      {
        platform: "linkedin",
        url: "#",
      },
      {
        platform: "twitter",
        url: "#",
      },
      {
        platform: "instagram",
        url: "#",
      },
    ],
  },
  {
    name: "Fadhil Basheer",
    role: "CFO",
    image: "fadhilbasheer.jpeg",
    social: [
      {
        platform: "linkedin",
        url: "#",
      },
      {
        platform: "twitter",
        url: "#",
      },
      {
        platform: "instagram",
        url: "#",
      },
    ],
  },
  {
    name: "Aakash P R",
    role: "CTO",
    image: "aakash.jpg",
    social: [
      {
        platform: "linkedin",
        url: "#",
      },
      {
        platform: "twitter",
        url: "#",
      },
      {
        platform: "instagram",
        url: "#",
      },
    ],
  },
  {
    name: "Swsthik H Nair",
    role: "CQO",
    image: "SWSTHIK.jpg",
    social: [
      {
        platform: "linkedin",
        url: "#",
      },
    ],
  },
  {
    name: "ARUN KN",
    role: "CCO",
    image: "arunkn.jpeg",
    social: [
      {
        platform: "linkedin",
        url: "#",
      },
    ],
  },
  {
    name: "Abhin P T",
    role: "CSRO",
    image: "abhin.jpg",
    social: [
      {
        platform: "linkedin",
        url: "#",
      },
    ],
  },
];

const Team = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-white pb-36">
        <div className="flex flex-col">
          <div className="flex flex-col mt-8">
            <div className="container max-w-7xl px-4">
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  <h1 className="w-full md:w-full font-normal text-4xl md:text-7xl !leading-tight uppercase text-center pb-4">
                    Meet the Team
                  </h1>
                </div>
              </div>

              <div className="flex flex-wrap">
                {teamData.map((member, index) => (
                  <div
                    key={index}
                    className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
                  >
                    <div className="flex flex-col">
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100  align-middle border-none h-96"
                          src={member.image}
                          alt={member.name}
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          {member.name}
                        </h1>

                        <div className="text-gray-700 font-light mb-2">
                          {member.role}
                        </div>

                        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                          {member.social.map((socialItem, index) => (
                            <a
                              key={index}
                              href={socialItem.url}
                              className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                            >
                              <i
                                className={`mdi mdi-${socialItem.platform} text-indigo-500 mx-auto mt-2`}
                              ></i>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
