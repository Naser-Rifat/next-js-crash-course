import React from "react";
import signup from "../styles/Signup.module.css";
const SignUp = () => {
  return (
    <section className="min-h-screen flex bg-black items-stretch text-white ">
      <div className="bg-black h-96 w-96"> sasas</div>
      {/* Second */}

      <div className={signup.section}>
        <div className={signup.top}></div>

        <div className={signup.inputField}>
          <form className={signup.fromField}>
            <div className={signup.phoneDiv}>
              {" "}
              <svg
                width="10"
                height="17"
                className="inline "
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1.5C8.26522 1.5 8.51957 1.60536 8.70711 1.79289C8.89464 1.98043 9 2.23478 9 2.5V14.5C9 14.7652 8.89464 15.0196 8.70711 15.2071C8.51957 15.3946 8.26522 15.5 8 15.5H2C1.73478 15.5 1.48043 15.3946 1.29289 15.2071C1.10536 15.0196 1 14.7652 1 14.5V2.5C1 2.23478 1.10536 1.98043 1.29289 1.79289C1.48043 1.60536 1.73478 1.5 2 1.5H8ZM2 0.5C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V14.5C0 15.0304 0.210714 15.5391 0.585786 15.9142C0.960859 16.2893 1.46957 16.5 2 16.5H8C8.53043 16.5 9.03914 16.2893 9.41421 15.9142C9.78929 15.5391 10 15.0304 10 14.5V2.5C10 1.96957 9.78929 1.46086 9.41421 1.08579C9.03914 0.710714 8.53043 0.5 8 0.5H2Z"
                  fill="#575757"
                />
              </svg>
              <input placeholder="Phone Number" className={signup.inputPhone} />
            </div>
            <div className={signup.nameDiv}>
              {" "}
              <svg
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.44262 10.2846C9.34478 10.2526 8.72631 9.97379 9.11278 8.79902H9.10724C10.1146 7.76149 10.8845 6.09195 10.8845 4.44826C10.8845 1.92087 9.20385 0.595947 7.25062 0.595947C5.29616 0.595947 3.62478 1.92025 3.62478 4.44826C3.62478 6.09872 4.39031 7.77502 5.40385 8.8101C5.79893 9.84641 5.09247 10.231 4.94478 10.2852C2.89924 11.0249 0.499237 12.3732 0.499237 13.7043V14.2033C0.499237 16.0169 4.01554 16.4292 7.2697 16.4292C10.5288 16.4292 14.0008 16.0169 14.0008 14.2033V13.7043C14.0008 12.3332 11.5891 10.9953 9.44262 10.2846Z"
                  fill="#575757"
                />
              </svg>
              <input placeholder="Full Name" className={signup.inputName} />
            </div>
            <div className={signup.passwordDiv}>
              <svg
                width="13"
                height="15"
                viewBox="0 0 13 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.25 4.83329H11.5833C11.7601 4.83329 11.9297 4.90353 12.0547 5.02855C12.1798 5.15358 12.25 5.32315 12.25 5.49996V13.5C12.25 13.6768 12.1798 13.8463 12.0547 13.9714C11.9297 14.0964 11.7601 14.1666 11.5833 14.1666H0.916667C0.739856 14.1666 0.570286 14.0964 0.445262 13.9714C0.320238 13.8463 0.25 13.6768 0.25 13.5V5.49996C0.25 5.32315 0.320238 5.15358 0.445262 5.02855C0.570286 4.90353 0.739856 4.83329 0.916667 4.83329H2.25V4.16663C2.25 3.10576 2.67143 2.08834 3.42157 1.3382C4.17172 0.588053 5.18913 0.166626 6.25 0.166626C7.31087 0.166626 8.32828 0.588053 9.07843 1.3382C9.82857 2.08834 10.25 3.10576 10.25 4.16663V4.83329ZM1.58333 6.16663V12.8333H10.9167V6.16663H1.58333ZM5.58333 8.83329H6.91667V10.1666H5.58333V8.83329ZM2.91667 8.83329H4.25V10.1666H2.91667V8.83329ZM8.25 8.83329H9.58333V10.1666H8.25V8.83329ZM8.91667 4.83329V4.16663C8.91667 3.45938 8.63572 2.7811 8.13562 2.28101C7.63552 1.78091 6.95724 1.49996 6.25 1.49996C5.54276 1.49996 4.86448 1.78091 4.36438 2.28101C3.86428 2.7811 3.58333 3.45938 3.58333 4.16663V4.83329H8.91667Z"
                  fill="#575757"
                />
              </svg>

              <input placeholder="Password" className={signup.inputPassword} />
            </div>
            <div className={signup.referDiv}>
              <svg
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.08333 10.2442L6.46125 12.6221L5.87208 13.2113L4.08333 11.4225L2.29458 13.2113L1.70542 12.6221L4.08333 10.2442ZM2.41667 1.25C2.41667 0.918479 2.54836 0.600537 2.78278 0.366117C3.0172 0.131696 3.33515 0 3.66667 0H7C7.33152 0 7.64946 0.131696 7.88388 0.366117C8.1183 0.600537 8.25 0.918479 8.25 1.25V1.66667H9.91667V9.58333H0.75V1.66667H2.41667V1.25ZM2.41667 2.5H1.58333V3.33333H2.41667V2.5ZM2.41667 4.16667H1.58333V8.75H3.66667V6.25H7V8.75H9.08333V4.16667H8.25V4.58333C8.25 4.91485 8.1183 5.2328 7.88388 5.46722C7.64946 5.70164 7.33152 5.83333 7 5.83333H3.66667C3.33515 5.83333 3.0172 5.70164 2.78278 5.46722C2.54836 5.2328 2.41667 4.91485 2.41667 4.58333V4.16667ZM8.25 3.33333H9.08333V2.5H8.25V3.33333ZM6.16667 8.75V7.08333H4.5V8.75H6.16667ZM3.66667 0.833333C3.55616 0.833333 3.45018 0.877232 3.37204 0.955372C3.2939 1.03351 3.25 1.13949 3.25 1.25V4.58333C3.25 4.69384 3.2939 4.79982 3.37204 4.87796C3.45018 4.9561 3.55616 5 3.66667 5H7C7.11051 5 7.21649 4.9561 7.29463 4.87796C7.37277 4.79982 7.41667 4.69384 7.41667 4.58333V1.25C7.41667 1.13949 7.37277 1.03351 7.29463 0.955372C7.21649 0.877232 7.11051 0.833333 7 0.833333H3.66667ZM4.91667 2.5V1.25H5.75V2.5H7V3.33333H5.75V4.58333H4.91667V3.33333H3.66667V2.5H4.91667Z"
                  fill="#575757"
                />
              </svg>

              <input
                placeholder="Refer Code (Optional)"
                className={signup.inputRefer}
              />
            </div>
          </form>
        </div>
        <div className={signup.accountSignUp}> </div>

        {/* <from className="mx-5 bg-gray-100 signUpRound flex my-20  flex-col">
          <input className="form-control rounded-full p-5 m-5" />
          <input className="form-control rounded-full p-5 m-5" />
          <input className="form-control rounded-full p-5 m-5" />
          <input className="form-control rounded-full p-5 m-5" />
          <button className=" rounded-full bg-blue-700 p-6 w-40   mx-auto  ">
            SignUp
          </button>
        </from> */}

        {/* <div className="py-6 space-x-2 text-center">
          <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
            G+
          </span>
          <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
            in
          </span>
        </div> */}
      </div>
    </section>
  );
};

export default SignUp;
