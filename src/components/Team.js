import React from "react";

const teamData = [
  {
    "name": "Tranter Jaskulski",
    "role": "Founder & Specialist",
    "image": "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80",
    "social": [
      {
        "platform": "linkedin",
        "url": "#"
      },
      {
        "platform": "twitter",
        "url": "#"
      },
      {
        "platform": "instagram",
        "url": "#"
      }
    ]
  },
  {
    "name": "Denice Jagna",
    "role": "Tired & M. Specialist",
    "image": "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80",
    "social": [
      {
        "platform": "linkedin",
        "url": "#"
      },
      {
        "platform": "twitter",
        "url": "#"
      },
      {
        "platform": "instagram",
        "url": "#"
      }
    ]
  },
  {
    "name": "Kenji Milton",
    "role": "Team Member",
    "image": "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80",
    "social": [
      {
        "platform": "linkedin",
        "url": "#"
      },
      {
        "platform": "twitter",
        "url": "#"
      },
      {
        "platform": "instagram",
        "url": "#"
      }
    ]
  },
  {
    "name": "Doesn't Matter",
    "role": "Will be fired",
    "image": "https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80",
    "social": [
      {
        "platform": "linkedin",
        "url": "#"
      },
      {
        "platform": "twitter",
        "url": "#"
      },
      {
        "platform": "instagram",
        "url": "#"
      }
    ]
  }
]


const Team = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-white py-48">
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
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
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
