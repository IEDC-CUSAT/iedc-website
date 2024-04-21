const people = [
  {
    name: "Aswin Pradeep C",
    role: "Chief Executive Officer",
    imageUrl: "aswinpradeep.jpg",
    // xUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/aswinpradeepc/",
  },
  {
    name: "Ashitha Pallath ",
    role: "Chief Operating Officer",
    imageUrl: "ashitha.jpg",
    // xUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/ashitha-pallath-6bb942258",
  },
  {
    name: "Fadhil Basheer",
    role: "Chief Financial Officer",
    imageUrl: "fadhilbasheer.jpeg",
    // xUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/fadilcbasheer",
  },
  {
    name: "Aakash P R",
    role: "Chief Technology Officer",
    imageUrl: "aakash.jpg",
    // xUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/aakash-p-r-398290231/",
  },
  {
    name: "Muhammed Naseef",
    role: "Chief Marketing Officer",
    imageUrl: "naseef.jpg",
    // xUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/muhammed-naseef-324113221/",
  },
  {
    name: "Swsthik H Nair",
    role: "Chief Quality Officer",
    imageUrl: "SWSTHIK.jpg",
    // xUrl: "#",
    linkedinUrl: "http://www.linkedin.com/in/swsthik-h-nair-26a451249",
  },
  {
    name: "Abhin P T",
    role: "Chief Social Responsibility Officer",
    imageUrl: "abhin.jpg",
    // xUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/abhin-p-t-445463227/",
  },
  {
    name: "Arun K N",
    role: "Chief Creatives Officer",
    imageUrl: "arunkn.jpeg",
    // xUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/arun-k-n-02596124a/",
  },
  {
    name: "Varsha Shaheen",
    role: "IPR & Research Lead",
    imageUrl: "varsha.jpg",
    // xUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/varsha-shaheen/",
  },
];

export default function Example() {
  return (
    <div className="bg-white py-9 md:py-16" id="team">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-normal text-4xl md:text-7xl !leading-tight uppercase text-center text-gray-900">
            Meet our team
          </h2>
          <p className=" text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do.
          </p>
        </div>
        <ul className="mx-auto mt-10 md:mt-20 grid max-w-2xl grid-cols-1 md:gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 pl-0">
          {people.map((person) => (
            <li key={person.name}>
              <img
                className="mx-auto h-56 w-56 object-cover rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              <ul className="mt-6 flex justify-center items-center gap-x-6 pl-0">
                {/* <li>
                  <a
                    href={person.xUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">X</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li> */}
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
