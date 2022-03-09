import React from "react";
import signin from "../styles/Signin.module.css";
import signup from "../styles/signup.module.css";
const SignIn = () => {
  return (
    <section className="lg:flex bg-black text-white ">
      <div className="bg-black h-96 w-96"> sasas</div>
      {/* Second */}

      <div className={signup.section}>
        <div className={signup.top}>
          <svg
            width="375"
            height="235"
            className={signup.top_mask_curve}
            viewBox="0 0 375 235"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.4211 94.6272C34.8941 103.179 -17.2954 148.074 -35.4492 169.453V234.607H380.927C381.267 167.586 381.742 32.4252 380.927 27.9458C379.909 22.3467 299.994 -17.8655 236.367 10.1304C172.74 38.1263 177.83 83.9378 98.4211 94.6272Z"
              fill="#3CA2DC"
              fillOpacity="0.3"
            />
          </svg>
          <svg
            width="107"
            height="33"
            className={signin.top_signin}
            viewBox="0 0 107 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M103.405 3.19673V1.15378H102.643V0.880859H104.477V1.15378H103.711V3.19673H103.405Z"
              fill="white"
            />
            <path
              d="M104.781 3.19673V0.880859H105.242L105.789 2.52203C105.839 2.67459 105.876 2.78886 105.899 2.86484C105.925 2.78035 105.967 2.65636 106.021 2.49346L106.575 0.882073H106.987V3.19794H106.692V1.25893L106.02 3.19733H105.749L105.081 1.2255V3.19733L104.781 3.19673Z"
              fill="white"
            />
            <path
              d="M51.8268 7.34734C52.1238 7.04769 52.4771 6.80969 52.8662 6.64697C53.2554 6.48425 53.6728 6.40002 54.0945 6.39911H57.5648C57.6563 6.39992 57.747 6.38249 57.8317 6.34784C57.9164 6.31319 57.9933 6.26201 58.0581 6.19728C58.1228 6.13256 58.174 6.05558 58.2087 5.97085C58.2434 5.88611 58.2609 5.79532 58.2602 5.70374C58.2599 5.61267 58.2411 5.52259 58.205 5.43899C58.1689 5.3554 58.1162 5.28003 58.05 5.21747C57.9185 5.09366 57.7447 5.02492 57.5642 5.02539H54.0945C52.8811 5.03634 51.7204 5.5237 50.8624 6.38256C50.0044 7.24143 49.5176 8.40313 49.5068 9.61762V11.1865C49.5176 12.4009 50.0044 13.5626 50.8624 14.4215C51.7204 15.2804 52.8811 15.7677 54.0945 15.7787H57.5648C57.7453 15.7792 57.9192 15.7104 58.0506 15.5866C58.1168 15.524 58.1695 15.4487 58.2056 15.3651C58.2417 15.2815 58.2605 15.1914 58.2608 15.1003C58.2615 15.0088 58.244 14.918 58.2093 14.8332C58.1746 14.7485 58.1234 14.6715 58.0587 14.6068C57.994 14.5421 57.917 14.4909 57.8323 14.4562C57.7476 14.4216 57.6569 14.4042 57.5654 14.405H54.0945C53.2433 14.3999 52.4284 14.0591 51.8265 13.4566C51.2246 12.8541 50.8843 12.0384 50.8794 11.1865V11.0886H56.9483C57.0394 11.0885 57.1294 11.0698 57.213 11.0337C57.2965 10.9975 57.3718 10.9446 57.4342 10.8783C57.5582 10.7469 57.6267 10.5727 57.6255 10.392C57.6256 10.3002 57.6068 10.2094 57.5702 10.1252C57.5184 10.0066 57.4342 9.90501 57.3273 9.83219C57.2154 9.75541 57.0828 9.7143 56.9471 9.71427H50.8794V9.61641C50.8804 9.19441 50.9647 8.77677 51.1272 8.38741C51.2898 7.99804 51.5275 7.64461 51.8268 7.34734Z"
              fill="white"
            />
            <path
              d="M67.5643 6.28187C67.4111 5.92604 67.1645 5.61834 66.8507 5.39138L66.7341 5.3075H66.7092C66.3895 5.12194 66.0263 5.02462 65.6567 5.02546C65.2778 5.02229 64.9054 5.12388 64.5805 5.31905L64.5332 5.34701L64.487 5.39321C64.33 5.49734 64.1893 5.62436 64.0698 5.77007C63.9421 5.92748 63.8385 6.10304 63.7625 6.29098L60.1866 14.8615C60.1793 14.8779 60.172 14.8925 60.1653 14.912C60.1505 14.9559 60.1409 15.0014 60.1368 15.0475C60.1354 15.0724 60.1354 15.0974 60.1368 15.1223C60.1376 15.2972 60.2073 15.4647 60.3308 15.5884C60.4543 15.7121 60.6216 15.782 60.7963 15.783C60.8525 15.7828 60.9086 15.7762 60.9633 15.7636C61.0619 15.7406 61.1535 15.694 61.2302 15.6278C61.3069 15.5617 61.3664 15.4779 61.4036 15.3837L62.3626 13.0854H68.9703L69.9274 15.3782C69.9434 15.4268 69.9654 15.4731 69.993 15.5162C70.0581 15.613 70.1504 15.6883 70.2584 15.7326C70.3413 15.7663 70.43 15.7835 70.5195 15.783C70.6139 15.7828 70.7072 15.762 70.7928 15.7222C70.9126 15.6663 71.0129 15.5757 71.0807 15.4621C71.1454 15.3539 71.1794 15.2301 71.1791 15.104V14.9436L67.5661 6.28491L67.5643 6.28187ZM62.9116 11.7603L64.9765 6.79306C65.0033 6.73002 65.0398 6.67157 65.0846 6.61983C65.1388 6.5586 65.1999 6.50393 65.2668 6.45693L65.3026 6.43322L65.3743 6.40587C65.4649 6.37017 65.5607 6.34964 65.6579 6.34508C65.7967 6.34471 65.9332 6.38121 66.0533 6.45085L66.0624 6.45997L66.1043 6.48671C66.1562 6.5203 66.2018 6.56267 66.2391 6.61193C66.2768 6.66058 66.3069 6.71469 66.3284 6.77239L66.3321 6.78273L68.4182 11.7591L62.9116 11.7603Z"
              fill="white"
            />
            <path
              d="M80.2747 14.405H77.3681C76.8152 14.4016 76.286 14.1803 75.8952 13.789C75.5043 13.3977 75.2833 12.8679 75.2801 12.3146V5.70375C75.2799 5.61267 75.2611 5.52259 75.225 5.439C75.1889 5.3554 75.1361 5.28003 75.07 5.21747C74.9386 5.09355 74.7647 5.0248 74.5841 5.02539C74.4924 5.02551 74.4016 5.04455 74.3175 5.08132C74.199 5.13317 74.0975 5.21744 74.0248 5.32445C73.9467 5.43606 73.9044 5.56874 73.9033 5.70496V12.3146C73.9057 13.2328 74.2712 14.1126 74.9199 14.7619C75.5686 15.4111 76.4477 15.7769 77.3651 15.7793H80.2717C80.3635 15.7792 80.4542 15.7601 80.5383 15.7234C80.6568 15.6715 80.7583 15.5872 80.831 15.4802C80.9077 15.3682 80.9488 15.2355 80.9489 15.0997C80.95 14.919 80.8815 14.7449 80.7576 14.6135C80.6952 14.548 80.6204 14.4957 80.5374 14.4599C80.4544 14.4241 80.3651 14.4054 80.2747 14.405Z"
              fill="white"
            />
            <path
              d="M90.9075 5.14392C90.7956 5.06689 90.663 5.02557 90.5273 5.02539H82.4068C82.315 5.02551 82.2243 5.04454 82.1402 5.08131C82.0217 5.13303 81.9204 5.21735 81.848 5.32445C81.77 5.43606 81.7276 5.56874 81.7266 5.70495C81.7254 5.88565 81.794 6.05982 81.9179 6.19123C81.9804 6.25742 82.0557 6.3102 82.1392 6.34635C82.2227 6.38251 82.3127 6.40129 82.4037 6.40154H85.778V15.1003C85.7783 15.1914 85.797 15.2815 85.8332 15.3651C85.8693 15.4487 85.922 15.524 85.9882 15.5866C86.1195 15.7106 86.2934 15.7794 86.474 15.7787C86.5654 15.7791 86.656 15.7606 86.74 15.7246C86.8585 15.6727 86.96 15.5885 87.0327 15.4814C87.1095 15.3694 87.1506 15.2368 87.1506 15.1009V6.39911H90.5248C90.6158 6.39886 90.7058 6.38008 90.7894 6.34392C90.8729 6.30777 90.9482 6.25499 91.0107 6.1888C91.1345 6.05728 91.2032 5.88323 91.2026 5.70252C91.2025 5.61068 91.1835 5.51984 91.1467 5.43568C91.0957 5.31799 91.0128 5.21692 90.9075 5.14392Z"
              fill="white"
            />
            <path
              d="M102.503 5.42309C102.445 5.30406 102.355 5.2039 102.243 5.13437C102.112 5.05184 101.957 5.01452 101.803 5.02813C101.649 5.04174 101.503 5.10553 101.388 5.20974C101.322 5.26915 101.269 5.34104 101.23 5.42127C101.188 5.50903 101.166 5.60524 101.166 5.7027V11.7258H93.9668V5.70452C93.9668 5.60568 93.9442 5.50814 93.9006 5.41945C93.8402 5.29703 93.7449 5.19529 93.6267 5.12708C93.5113 5.06051 93.3803 5.0257 93.2471 5.02617C93.0705 5.02543 92.8999 5.09043 92.7685 5.20853C92.7029 5.26813 92.6495 5.33998 92.6113 5.42006C92.5689 5.50782 92.5469 5.60402 92.5469 5.70149V15.1011C92.547 15.1986 92.569 15.2948 92.6113 15.3825C92.6683 15.5018 92.7586 15.6021 92.8712 15.6713C92.984 15.7416 93.1142 15.779 93.2471 15.7795C93.425 15.7798 93.5972 15.7169 93.733 15.602C93.8022 15.5418 93.8587 15.4684 93.8994 15.3862C93.9429 15.2975 93.9655 15.1999 93.9656 15.1011V13.0995H101.167V15.1011C101.167 15.1986 101.189 15.2948 101.231 15.3825C101.288 15.5018 101.378 15.6021 101.491 15.6713C101.622 15.7536 101.777 15.7906 101.931 15.7766C102.085 15.7627 102.231 15.6986 102.345 15.5941C102.411 15.5343 102.465 15.4625 102.503 15.3825C102.544 15.2944 102.565 15.1983 102.564 15.1011V5.70452C102.565 5.60733 102.544 5.51122 102.503 5.42309Z"
              fill="white"
            />
            <path
              d="M46.7979 5.13437C46.6668 5.05184 46.5123 5.01452 46.358 5.02813C46.2037 5.04174 46.0581 5.10553 45.9434 5.20974C45.8776 5.26933 45.8239 5.34117 45.7855 5.42127C45.7447 5.50942 45.724 5.60554 45.7248 5.7027V11.7258H38.5189V5.70452C38.5193 5.60564 38.4966 5.50804 38.4527 5.41945C38.3925 5.2969 38.2971 5.19511 38.1788 5.12708C38.0636 5.06054 37.9329 5.02572 37.7998 5.02617C37.6232 5.02532 37.4526 5.09032 37.3213 5.20853C37.2554 5.26811 37.2018 5.33996 37.1634 5.42006C37.1212 5.50786 37.0994 5.60407 37.0996 5.70149V15.1011C37.0995 15.1985 37.1213 15.2947 37.1634 15.3825C37.2206 15.5017 37.3109 15.6019 37.4233 15.6713C37.5364 15.7416 37.6667 15.779 37.7998 15.7795C37.9777 15.78 38.15 15.7171 38.2857 15.602C38.3553 15.5421 38.4119 15.4687 38.4521 15.3862C38.4959 15.2975 38.5185 15.2 38.5183 15.1011V13.0995H45.7217V15.1011C45.721 15.1983 45.7417 15.2944 45.7825 15.3825C45.8397 15.5017 45.93 15.6019 46.0424 15.6713C46.174 15.7543 46.3293 15.7917 46.4842 15.7778C46.6392 15.7638 46.7853 15.6993 46.8999 15.5941C46.9658 15.5345 47.0194 15.4626 47.0578 15.3825C47.0999 15.2947 47.1218 15.1985 47.1222 15.1011V5.70452C47.1219 5.60709 47.0999 5.51095 47.0578 5.42309C47.0008 5.30381 46.9105 5.20356 46.7979 5.13437Z"
              fill="white"
            />
            <path
              d="M44.8628 21.8222C45.2709 21.3815 45.4306 20.6606 45.4306 20.2254C45.4315 19.5877 45.1797 18.9756 44.7304 18.5234L44.7212 18.5094L44.6903 18.4632L44.649 18.4262C44.1941 18.0152 43.6044 17.7857 42.9916 17.7812H39.539C38.9258 17.7826 38.3351 18.0125 37.8822 18.4262L37.8737 18.4335L37.8658 18.4414L37.813 18.4942C37.3569 18.9545 37.1008 19.5765 37.1006 20.2248V26.0953C37.1014 26.7426 37.3574 27.3634 37.813 27.8228L37.8658 27.8762L37.8737 27.8841L37.8822 27.8914C38.3353 28.3049 38.9259 28.5348 39.539 28.5364H42.9916C43.7817 28.5374 44.5504 28.2793 45.1799 27.8015C45.8095 27.3237 46.2653 26.6526 46.4776 25.8909C46.6898 25.1292 46.6469 24.3188 46.3552 23.5839C46.0636 22.849 45.5393 22.2299 44.8628 21.8216V21.8222ZM38.7817 19.4668L38.8497 19.3987L38.8885 19.3701C39.077 19.2314 39.305 19.1568 39.539 19.1574H42.9916C43.2199 19.1598 43.4415 19.2343 43.625 19.3701L43.7295 19.4467L43.7495 19.4668C43.948 19.6692 44.0588 19.9418 44.0581 20.2254C44.0602 20.506 43.9509 20.7761 43.7542 20.9762C43.5576 21.1763 43.2896 21.2902 43.0092 21.2927H38.4725V20.2248C38.4721 19.9413 38.5832 19.669 38.7817 19.4668ZM42.9916 27.1633H39.539C39.305 27.1638 39.077 27.0893 38.8885 26.9505L38.8497 26.9225L38.7817 26.8539C38.583 26.6517 38.4719 26.3794 38.4725 26.0959V22.6659H43.0092C44.2178 22.6659 45.2387 23.6955 45.2387 24.9149C45.2387 26.1342 44.2099 27.1633 42.9916 27.1633Z"
              fill="white"
            />
            <path
              d="M53.8899 17.7832H51.9526C50.7391 17.7938 49.5783 18.281 48.7201 19.1398C47.8619 19.9986 47.375 21.1603 47.3643 22.3748V23.9437C47.3714 25.1594 47.8571 26.3233 48.7161 27.1829C49.575 28.0426 50.7379 28.5287 51.9526 28.5359H53.8899C56.3769 28.5359 58.4782 26.4328 58.4782 23.9437V22.3748C58.4674 21.1603 57.9806 19.9986 57.1224 19.1398C56.2642 18.281 55.1034 17.7938 53.8899 17.7832ZM53.8899 27.1622H51.9526C51.0989 27.1622 50.2802 26.8228 49.6765 26.2186C49.0729 25.6144 48.7338 24.795 48.7338 23.9406V22.3718C48.7338 21.5174 49.0729 20.698 49.6765 20.0938C50.2802 19.4896 51.0989 19.1502 51.9526 19.1502H53.8899C55.6329 19.1502 57.1057 20.6242 57.1057 22.3718V23.9406C57.1057 25.6888 55.6329 27.1622 53.8899 27.1622Z"
              fill="white"
            />
            <path
              d="M69.1975 17.8185C69.1106 17.8175 69.0244 17.8339 68.9439 17.8667C68.8634 17.8995 68.7903 17.9481 68.7288 18.0096C68.6673 18.0711 68.6187 18.1442 68.5858 18.2248C68.553 18.3053 68.5365 18.3916 68.5374 18.4786V27.0807L61.7232 18.2877C61.5167 17.9838 61.1274 17.7832 60.7242 17.7832C60.3905 17.7835 60.0707 17.9163 59.8347 18.1524C59.5988 18.3886 59.4661 18.7087 59.4658 19.0426V27.8399C59.4658 28.015 59.5353 28.1829 59.659 28.3067C59.7827 28.4305 59.9504 28.5 60.1254 28.5C60.3003 28.5 60.4681 28.4305 60.5917 28.3067C60.7154 28.1829 60.7849 28.015 60.7849 27.8399V19.2378L67.5991 28.0308C67.8056 28.3383 68.1948 28.5359 68.5981 28.5359C68.9307 28.5313 69.2483 28.3969 69.4833 28.1613C69.7182 27.9256 69.8519 27.6075 69.8559 27.2746V18.4786C69.8568 18.3917 69.8405 18.3055 69.8078 18.2251C69.775 18.1446 69.7266 18.0715 69.6653 18.0101C69.604 17.9486 69.531 17.9 69.4507 17.8671C69.3704 17.8342 69.2843 17.8176 69.1975 17.8185Z"
              fill="white"
            />
            <path
              d="M76.1635 17.7832H73.7148C73.1016 17.7845 72.5109 18.0145 72.058 18.4281L72.0495 18.4354L72.0416 18.4433L71.9888 18.4962C71.5332 18.9559 71.2772 19.5769 71.2764 20.2243V26.0948C71.2771 26.7421 71.5331 27.3629 71.9888 27.8223L72.0416 27.8758L72.0495 27.8837L72.058 27.891C72.511 28.3044 73.1016 28.5343 73.7148 28.5359H76.1635C77.3781 28.5285 78.5408 28.0423 79.3996 27.1827C80.2584 26.3231 80.744 25.1593 80.7512 23.9437V22.3748C80.7407 21.1603 80.254 19.9985 79.3959 19.1396C78.5378 18.2808 77.377 17.7937 76.1635 17.7832ZM76.1635 27.1622H73.7148C73.4808 27.1627 73.2528 27.0882 73.0643 26.9494L73.0261 26.9215L72.9574 26.8528C72.7588 26.6507 72.6477 26.3783 72.6483 26.0948V20.2237C72.6478 19.94 72.7588 19.6675 72.9574 19.4651L73.0254 19.397L73.0643 19.3684C73.2528 19.2297 73.4808 19.1551 73.7148 19.1557H76.1635C77.9162 19.1557 79.3969 20.6297 79.3969 22.3773V23.9461C79.3969 25.6888 77.9162 27.1622 76.1635 27.1622Z"
              fill="white"
            />
            <path
              d="M90.159 17.7832C89.9794 17.7834 89.8072 17.8549 89.6802 17.9819C89.5531 18.1089 89.4816 18.2812 89.4813 18.461V24.4829H83.0151V18.461C83.0124 18.2789 82.9377 18.1054 82.8073 17.9783C82.677 17.8513 82.5017 17.7811 82.3197 17.7832C82.1402 17.7836 81.9682 17.8551 81.8413 17.9821C81.7143 18.1091 81.6429 18.2813 81.6426 18.461V27.8582C81.6429 28.0378 81.7143 28.21 81.8413 28.3371C81.9682 28.4641 82.1402 28.5356 82.3197 28.5359C82.5017 28.538 82.677 28.4679 82.8073 28.3409C82.9377 28.2138 83.0124 28.0403 83.0151 27.8582V25.856H89.4813V27.8582C89.4865 28.0345 89.5602 28.2018 89.6867 28.3247C89.8132 28.4475 89.9825 28.5162 90.1587 28.5162C90.335 28.5162 90.5043 28.4475 90.6308 28.3247C90.7572 28.2018 90.8309 28.0345 90.8362 27.8582V18.461C90.836 18.2813 90.7646 18.109 90.6377 17.9819C90.5107 17.8549 90.3386 17.7834 90.159 17.7832Z"
              fill="white"
            />
            <path
              d="M101.889 17.7832C101.707 17.7811 101.532 17.8513 101.402 17.9783C101.271 18.1054 101.196 18.2789 101.194 18.461V23.9437C101.194 25.6888 99.7216 27.1652 97.9786 27.1652H97.1326C96.2796 27.1643 95.4618 26.8244 94.8589 26.2204C94.2561 25.6163 93.9175 24.7975 93.9175 23.9437V18.461C93.9147 18.2789 93.84 18.1054 93.7097 17.9783C93.5793 17.8513 93.404 17.7811 93.2221 17.7832C93.0425 17.7834 92.8704 17.8549 92.7434 17.9819C92.6165 18.109 92.5451 18.2813 92.5449 18.461V23.9437C92.5521 25.1593 93.0377 26.3231 93.8965 27.1828C94.7553 28.0424 95.918 28.5286 97.1326 28.5359H97.9786C99.1921 28.5251 100.353 28.0378 101.211 27.1789C102.069 26.32 102.556 25.1582 102.566 23.9437V18.461C102.566 18.2813 102.495 18.109 102.368 17.9819C102.241 17.8549 102.069 17.7834 101.889 17.7832Z"
              fill="white"
            />
            <path
              d="M27.6275 15.7031H27.622C27.3365 15.7071 27.0642 15.8237 26.8642 16.0276C26.6641 16.2314 26.5526 16.506 26.5537 16.7918C26.5537 17.4075 27.0092 17.8591 27.6262 17.8591C27.7677 17.8612 27.9082 17.8348 28.0394 17.7817C28.1706 17.7285 28.2898 17.6497 28.39 17.5497C28.4903 17.4497 28.5695 17.3306 28.623 17.1995C28.6766 17.0684 28.7034 16.9279 28.7018 16.7863C28.697 16.1985 28.2038 15.7031 27.6275 15.7031Z"
              fill="white"
            />
            <path
              d="M29.9103 14.5563C29.3232 13.9488 
              28.5202 13.5979 27.676 13.5801H27.6152C25.8995
               13.5801 24.4426 15.0444 24.4335 16.7779C24.4321 
               17.6195 24.7624 18.4277 25.3526 19.0271C25.9427 19.6266 
               26.7453 19.969 27.5861 19.98H27.6092C27.9922 19.9809 
               28.3725 19.9147 28.7327 19.7843C28.1964 22.1318 27.0425 
               24.3255 25.4532 26.138C24.7935 26.8876 24.0658 27.5743 
               23.2796 28.1895C22.0525 29.1586 20.6985 29.955 19.2555
                30.5564C17.8174 31.1582 16.2915 31.5232 14.737 
                31.6372C14.3495 31.6639 13.9529 31.6791 13.5527 
                31.6791C12.3569 31.6791 11.1289 31.5436 10.0108 
                31.1807C9.45686 31.0042 8.92657 30.7604 8.43179
                 30.4549C7.93554 30.147 7.48944 29.7646 7.10904 
                 29.3213C6.81341 28.9762 6.5846 28.579 6.43431 
                 28.15C6.28707 27.7282 6.21252 27.2844 6.21385
                  26.8377C6.21618 25.9348 6.50262 25.0556 
                  7.03252 24.3249C7.39266 23.827 7.84451 
                  23.4046 8.33279 23.0022C8.82108 22.5998
                   9.34459 22.2193 9.8432 21.8011C10.2408 
                   21.4722 10.6058 21.1058 10.9333 20.707C11.1674
                    20.417 11.3748 20.1063 11.5528 19.7788V21.5045C11.553 
                    21.9415 11.7265 22.3605 12.0352 22.6695C12.344 22.9785 
                    12.7626 23.1522 13.1993 23.1523H14.8323C15.269 23.1522 
                    15.6876 22.9785 15.9964 22.6695C16.3051 22.3605 16.4786
                     21.9415 16.4788 21.5045V20.5015C16.481 20.3881 16.438 
                     20.2783 16.3594 20.1966C16.2807 20.1148 16.1728 20.0676 
                     16.0594 20.0654C15.946 20.0632 15.8364 20.1062 15.7547 
                     20.1849C15.673 20.2637 15.6259 20.3716 15.6237 
                     20.4851V21.5045C15.6244 21.6103 15.6038 21.7151 
                     15.5629 21.8127C15.5028 21.9542 15.403 22.0754 
                     15.2757 22.1616C15.1453 22.2501 14.9911 22.2971 
                     14.8336 22.2965H13.2005C13.0948 22.2972 12.99 
                     22.2766 12.8926 22.2357C12.749 22.1753 12.6263 
                     22.0739 12.5399 21.9442C12.4535 21.8145 12.4072
                      21.6622 12.4067 21.5063V18.8215C12.4067 18.7143
                       12.3642 18.6115 12.2884 18.5357C12.2127 18.4598
                        12.1099 18.4173 12.0028 18.4173H9.32273C9.19287
                         18.4175 9.06497 18.3857 8.95035 18.3246C8.83572 18.2635 8.73792 18.1751 8.6656 18.0671C8.57708 17.9366 8.53008 17.7824 8.53078 17.6246V15.9908C8.53003 15.8848 8.55069 15.7798 8.59151 15.682C8.65166 15.5404 8.75142 15.4192 8.87877 15.3331C9.00939 15.2445 9.16372 15.1974 9.32151 15.1981H10.2544C10.3661 15.1995 10.474 15.1578 10.5559 15.0818C10.6379 15.0058 10.6875 14.9012 10.6947 14.7897C10.6976 14.732 10.6888 14.6743 10.6688 14.6201C10.6488 14.5659 10.6179 14.5164 10.5781 14.4746C10.5384 14.4327 10.4905 14.3994 10.4374 14.3767C10.3844 14.3539 10.3273 14.3422 10.2695 14.3423H9.32273C8.8859 14.3423 8.46696 14.516 8.15808 14.8251C7.8492 15.1343 7.67567 15.5536 7.67567 15.9908V17.6228C7.67559 17.8393 7.71814 18.0537 7.80089 18.2537C7.88365 18.4537 8.00497 18.6354 8.15794 18.7884C8.31091 18.9415 8.49251 19.0628 8.69238 19.1456C8.89224 19.2283 9.10644 19.2708 9.32273 19.2707H11.2321C11.0424 19.6661 10.8063 20.0374 10.5289 20.3769C10.2223 20.751 9.88062 21.0947 9.50857 21.4036C9.02878 21.806 8.50588 22.1859 8.0018 22.6016C7.49773 23.0174 7.01065 23.4684 6.61104 24.0197C6.01701 24.8392 5.69593 25.8252 5.69338 26.8377C5.692 27.3433 5.77662 27.8454 5.94359 28.3226C6.11519 28.8123 6.37633 29.2658 6.71368 29.6599C7.12839 30.1432 7.61462 30.5602 8.15545 30.8962C8.94983 31.3934 9.83773 31.718 10.7566 31.9198C11.6752 32.1123 12.6118 32.2058 13.5503 32.1988C13.9633 32.1988 14.3714 32.183 14.7698 32.1563C16.3801 32.0385 17.9608 31.6606 19.4504 31.0372C20.9371 30.418 22.3323 29.5984 23.5972 28.601C24.4091 27.966 25.1607 27.2573 25.8425 26.4839C27.5782 24.5054 28.8135 22.0892 29.3261 19.4992C29.7311 19.2464 30.0741 18.9057 30.3299 18.5023C30.5857 18.0989 30.7476 17.6432 30.8037 17.1687C30.8597 16.6943 30.8086 16.2133 30.654 15.7613C30.4993 15.3094 30.2452 14.8979 29.9103 14.5575V14.5563ZM28.8129 17.9486C28.6579 18.1053 28.4732 18.2295 28.2696 18.3137C28.066 18.3979 27.8477 18.4406 27.6274 18.4391C26.6879 18.4391 25.9773 17.731 25.9749 16.7931C25.9726 16.3537 26.1443 15.9312 26.4523 15.6181C26.7604 15.305 27.1798 15.1267 27.6189 15.1222H27.6274C27.8442 15.123 28.0586 15.1669 28.2583 15.2515C28.4579 15.336 28.6388 15.4594 28.7904 15.6145C29.1015 15.9229 29.2796 16.3409 29.2866 16.7791C29.2895 16.9958 29.2491 17.2109 29.1678 17.4118C29.0864 17.6126 28.9657 17.7951 28.8129 17.9486Z"
              fill="white"
            />
            <path
              d="M20.2275 15.3486C20.1011 15.0501 19.8898 14.7955 19.6198 14.6165C19.3498 14.4374 19.033 14.342 18.7092 14.342H16.4803V12.1088C16.4804 11.8923 16.4378 11.678 16.3551 11.4779C16.2723 11.2779 16.151 11.0962 15.998 10.9432C15.8451 10.7901 15.6635 10.6688 15.4636 10.586C15.2637 10.5033 15.0495 10.4608 14.8332 10.4609H13.2014C12.985 10.4607 12.7708 10.5031 12.5708 10.5859C12.3709 10.6686 12.1892 10.7899 12.0362 10.943C11.8832 11.096 11.7618 11.2778 11.679 11.4778C11.5962 11.6779 11.5536 11.8923 11.5537 12.1088V14.7225C11.5537 14.8353 11.5985 14.9436 11.6782 15.0234C11.758 15.1032 11.8661 15.148 11.9788 15.148C11.996 15.1489 12.0133 15.1489 12.0305 15.148H12.0675C12.2616 15.1568 12.4548 15.181 12.6451 15.2203C12.9494 15.2791 13.2467 15.3702 13.5318 15.492C13.7861 15.6008 14.0272 15.7385 14.2502 15.9023C14.7416 16.2656 15.1112 16.7696 15.31 17.3478C15.4702 17.8228 15.5482 18.3217 15.5408 18.823C15.5408 18.8772 15.5514 18.9308 15.5722 18.9808C15.5929 19.0309 15.6233 19.0763 15.6616 19.1146C15.6999 19.1529 15.7454 19.1832 15.7954 19.2039C15.8454 19.2246 15.899 19.2352 15.9531 19.2351H15.9872C16.0408 19.2584 16.0987 19.2704 16.1572 19.2704H18.708C18.9246 19.2712 19.1394 19.2291 19.3398 19.1467C19.5402 19.0642 19.7224 18.9429 19.8759 18.7898C20.0294 18.6367 20.1511 18.4548 20.2342 18.2545C20.3172 18.0541 20.3599 17.8394 20.3599 17.6225V15.9905C20.359 15.7698 20.314 15.5515 20.2275 15.3486ZM19.5023 17.6225C19.5029 17.7283 19.4822 17.8331 19.4416 17.9307C19.3813 18.0723 19.2816 18.1936 19.1543 18.2802C19.0235 18.3684 18.8693 18.4154 18.7116 18.4151H16.3564C16.3355 18.0658 16.2789 17.7196 16.1876 17.3818C16.0937 17.0328 15.9545 16.6976 15.7734 16.3849C15.4989 15.9164 15.1279 15.5117 14.6851 15.1978C14.4019 14.9964 14.0961 14.8287 13.7741 14.6982C13.3983 14.5466 13.0065 14.4386 12.6062 14.376C12.5351 14.3651 12.4702 14.3566 12.4119 14.3499V12.1088C12.4111 12.003 12.4317 11.8982 12.4726 11.8006C12.5329 11.6569 12.6342 11.5341 12.7638 11.4477C12.8934 11.3612 13.0456 11.3148 13.2014 11.3143H14.8332C14.963 11.3142 15.0908 11.3461 15.2053 11.4072C15.3198 11.4682 15.4175 11.5566 15.4898 11.6645C15.5782 11.795 15.6252 11.9492 15.6246 12.107V14.728C15.6246 14.7413 15.6246 14.7547 15.6246 14.7681C15.6246 14.7821 15.6246 14.7954 15.6246 14.8088C15.6246 14.8593 15.6345 14.9093 15.6539 14.956C15.6732 15.0026 15.7015 15.045 15.7372 15.0807C15.7729 15.1163 15.8153 15.1446 15.8619 15.1639C15.9086 15.1832 15.9586 15.193 16.009 15.193H18.711C18.8167 15.1922 18.9214 15.2128 19.0189 15.2538C19.1605 15.3139 19.2818 15.4138 19.3681 15.5413C19.4563 15.6722 19.5032 15.8265 19.5029 15.9844L19.5023 17.6225Z"
              fill="white"
            />
            <path
              d="M0.602224 11.1235C1.3133 9.37051 2.36132 7.77433 3.68681 6.42547L3.76151 6.3501V1.76699C3.76151 1.53489 3.71582 1.30507 3.62706 1.09065C3.5383 0.876233 3.4082 0.681412 3.2442 0.517324C3.08019 0.353236 2.88549 0.223094 2.67123 0.13433C2.45696 0.0455665 2.22732 -7.97356e-05 1.99542 1.04629e-07H1.76646C1.53459 -7.97669e-05 1.30498 0.0455701 1.09074 0.134341C0.876509 0.223113 0.681853 0.353265 0.517897 0.517361C0.353941 0.681457 0.223899 0.876281 0.135204 1.0907C0.0465083 1.30511 0.000896864 1.53492 0.000976667 1.76699V12.9409C0.160871 12.3224 0.361731 11.7152 0.602224 11.1235Z"
              fill="white"
            />
            <path
              d="M24.1854 18.0508C23.827 20.4842 22.6088 22.7084 20.7519 24.3197C18.8951 25.931 16.5226 26.8226 14.065 26.8328C14.0529 26.8336 14.0407 26.8336 14.0286 26.8328C13.5373 26.8417 13.0691 27.0432 12.7247 27.3941C12.3804 27.745 12.1875 28.2171 12.1875 28.7089C12.1875 29.2007 12.3804 29.6729 12.7247 30.0238C13.0691 30.3746 13.5373 30.5762 14.0286 30.585C20.4188 30.585 25.8106 26.3022 27.4971 20.4499C26.7697 20.4234 26.0666 20.1811 25.477 19.754C24.8874 19.3269 24.4378 18.734 24.1854 18.0508Z"
              fill="white"
            />
            <path
              d="M24.2276 15.3957C24.5019 14.7209 24.9704 14.143 25.5736 13.7353C26.1768 13.3277 26.8874 13.1086 27.6152 13.1059C26.0969 7.10229 20.7185 2.63893 14.2766 2.52344C14.1922 2.52344 14.106 2.52344 14.0215 2.52344C6.19257 2.52344 -0.151505 8.9714 0.00275484 16.8381C0.00275484 16.8508 0.00275484 16.8636 0.00275484 16.877V20.9142C-0.00172803 21.1635 0.0434601 21.4112 0.13568 21.6428C0.2279 21.8745 0.365304 22.0854 0.539867 22.2633C0.714431 22.4411 0.922656 22.5824 1.15238 22.6789C1.38211 22.7753 1.62874 22.825 1.87786 22.825C2.12698 22.825 2.37361 22.7753 2.60333 22.6789C2.83306 22.5824 3.04129 22.4411 3.21585 22.2633C3.39041 22.0854 3.52782 21.8745 3.62004 21.6428C3.71226 21.4112 3.75744 21.1635 3.75296 20.9142V17.2447C3.75911 17.1841 3.76215 17.1232 3.76207 17.0623C3.76207 17.0496 3.76207 17.0405 3.76207 17.0301C3.75478 16.8727 3.75053 16.7153 3.75053 16.5566C3.75029 15.2065 4.01579 13.8696 4.53185 12.6223C5.04792 11.3749 5.80445 10.2415 6.75823 9.28676C7.71202 8.33205 8.84437 7.57474 10.0906 7.05809C11.3369 6.54143 12.6726 6.27555 14.0215 6.27563C14.7476 6.27634 15.4717 6.35027 16.183 6.49628C18.1257 6.89501 19.9087 7.85568 21.311 9.25915C22.7132 10.6626 23.6731 12.4472 24.0715 14.3915C24.1403 14.7282 24.1923 15.063 24.2276 15.3957Z"
              fill="white"
            />
          </svg>
          <h1 className={signup.top_signin_text}>Sign Up</h1>
          <p className={signup.top_signin_description}>
            Sign Up Sign Up to Healthbondu and amazing thing near around you
          </p>
        </div>

        <div className={signup.inputField}>
          <form className={signup.fromField}>
            <div className={signup.phoneDiv}>
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

            <div className={signup.accountsignin}> Sign Up</div>
          </form>
          <p className={signup.bottom_singup_text}>Or quick continue with</p>
          <div>
            <svg
              width="11"
              height="19"
              className={signup.facebook_signin}
              viewBox="0 0 11 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.86327 18.8V10.2991H9.62748L10.0384 6.9707H6.86327V4.85066C6.86327 3.89021 7.1212 3.23263 8.44982 3.23263H10.1333V0.265201C9.31421 0.174125 8.49085 0.13015 7.66704 0.133476C5.22374 0.133476 3.54622 1.68098 3.54622 4.52187V6.96448H0.800003V10.2929H3.55222V18.8H6.86327Z"
                fill="white"
              />
            </svg>
            <svg
              width="19"
              height="19"
              className={signup.google_signin}
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6162 7.7164C18.7352 8.34121 18.8 8.99447 18.8 9.67617C18.8 15.0084 15.1582 18.8 9.65775 18.8C8.40688 18.8003 7.16819 18.5592 6.01246 18.0903C4.85673 17.6214 3.80662 16.9339 2.92212 16.0671C2.03762 15.2004 1.33607 14.1713 0.857558 13.0388C0.379046 11.9062 0.13295 10.6924 0.133332 9.46663C0.13295 8.24086 0.379046 7.02702 0.857558 5.89448C1.33607 4.76194 2.03762 3.73289 2.92212 2.86614C3.80662 1.99938 4.85673 1.31191 6.01246 0.842998C7.16819 0.374086 8.40688 0.132927 9.65775 0.133301C12.2295 0.133301 14.3784 1.06057 16.027 2.56619L13.3421 5.19723V5.19059C12.3427 4.25764 11.0742 3.77884 9.65775 3.77884C6.5152 3.77884 3.9609 6.38049 3.9609 9.46095C3.9609 12.5405 6.5152 15.1478 9.65775 15.1478C12.5091 15.1478 14.45 13.5502 14.8486 11.3562H9.65775V7.7164H18.6171H18.6162Z"
                fill="white"
              />
            </svg>
            <svg
              width="12"
              height="13"
              className={signup.bottom_text_ok_sign}
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 11.2939H11.25V12.7939H0.75V11.2939ZM4.2 9.26895L0.75 5.81894L2.25 4.39395L4.2 6.34395L9.75 0.793945L11.25 2.29395L4.2 9.26895Z"
                fill="#3E6ED7"
              />
            </svg>
            <p className={signup.bottom_text}>
              By signing up you accept our Terms & Conditions and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
