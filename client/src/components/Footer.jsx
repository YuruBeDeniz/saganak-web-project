import { useContext } from 'react';
import { AuthContext } from "../context/auth";

export default function Footer() {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);

  return (
    <footer className="text-center bg-slate-900 text-white fixed inset-x-0 bottom-0">

     <div className="pt-1">
     <div className="flex justify-center mb-0">
    {/* ------------------------------- EMAIL ---------------------------- */}
       <a
         href="/contact"
         type="button"
         rel="noopener noreferrer"
         className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
       >
         <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="currentColor"
           data-icon="bi bi-envelope"
           className="w-4 h-full mx-auto"
           viewBox="0 0 16 16"
         >
           <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
         </svg>
       </a>
       {/* ------------------------------- LINKEDIN ---------------------------- */}
       <a
         href="https://www.linkedin.com/in/dilara-deniz-saganak-45190b146/"
         type="button"
         target="_blank"
         rel="noopener noreferrer"
         className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
       >
         <svg
           aria-hidden="true"
           focusable="false"
           data-prefix="fab"
           data-icon="linkedin-in"
           className="w-4 h-full mx-auto"
           role="img"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 448 512"
         >
           <path
             fill="currentColor"
             d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
           ></path>
         </svg>
       </a>
       {/* ------------------------------- GITHUB ---------------------------- */}
       <a
         href="https://github.com/YuruBeDeniz"
         type="button"
         target="_blank"
         rel="noopener noreferrer"
         className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
       >
       <svg
         aria-describedby="desc"
         aria-labelledby="title"
         role="img"
         viewBox="0 0 64 64"
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
       >
         <path
           d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"
           data-name="layer2"
           fill="#ffffff"
         />
         <path
           d="M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z"
           data-name="layer1"
           fill="#202020"
         />
       </svg>
       </a>
      </div>
     </div>

     {/*---------------------------------Copyright----------------------------*/}
     <div>
          <div
            className="text-center font-light text-sm p-1 text-gray-600"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <div className="flex justify-between">
              <div></div>
              <div>
                © 2023 Copyright:&nbsp;Deniz Saganak&nbsp;
              </div>
              <div className="mt-2">
                {isLoggedIn ? (
                  <span>
                    <a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        className="bi bi-box-arrow-in-right mx-auto "
                        viewBox="0 0 16 16"
                        onClick={logoutUser}
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                        />
                      </svg>
                    </a>
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}
