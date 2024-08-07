export default function SvgIcon({ name = "", color = "", size = 48 }) {
  switch (name) {
    case "volume":
      return (
        <svg
          className="w-4 h-4 lg:w-6 lg:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.75 5.25L6.91667 9.10714H2.25V14.8929H6.91667L12.75 18.75V5.25Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M19.2797 6C21.0215 7.59147 22 9.74967 22 12C22 14.2503 21.0215 16.4085 19.2797 18M16 8.99576C16.8709 9.79149 17.3601 10.8706 17.3601 11.9958C17.3601 13.1209 16.8709 14.2 16 14.9958"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "arrow-right":
      return (
        <svg
          className="w-4 h-4 lg:w-6 lg:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" />
        </svg>
      )
    case "heart":
      return (
        <svg
          className="w-6 h-6 lg:w-8 lg:h-8"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.8409 5.29859C27.1568 4.56987 26.3445 3.9918 25.4504 3.5974C24.5563 3.203 23.598 3 22.6302 3C21.6625 3 20.7042 3.203 19.8101 3.5974C18.916 3.9918 18.1037 4.56987 17.4195 5.29859L15.9996 6.81023L14.5798 5.29859C13.1978 3.82732 11.3234 3.00076 9.36905 3.00076C7.41466 3.00076 5.54031 3.82732 4.15835 5.29859C2.77638 6.76986 2 8.76534 2 10.846C2 12.9267 2.77638 14.9222 4.15835 16.3935L5.57823 17.9051L15.9996 29L26.4211 17.9051L27.8409 16.3935C28.5254 15.6651 29.0684 14.8003 29.4389 13.8484C29.8093 12.8966 30 11.8764 30 10.846C30 9.81571 29.8093 8.79548 29.4389 7.84363C29.0684 6.89178 28.5254 6.02697 27.8409 5.29859Z"
            fill="#FF293B"
            stroke="#FF293B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "chat":
      return (
        <svg
          className="w-6 h-6 lg:w-8 lg:h-8"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.66541 15.9234C2.66005 17.9816 3.14094 20.0121 4.06892 21.8493C5.16922 24.0508 6.86073 25.9026 8.95398 27.1971C11.0472 28.4916 13.4596 29.1777 15.9208 29.1787C17.979 29.1841 20.0095 28.7032 21.8467 27.7752L29.332 29.3346L27.7726 21.8493C28.7006 20.0121 29.1815 17.9816 29.1761 15.9234C29.1751 13.4622 28.489 11.0498 27.1945 8.95658C25.9 6.86333 24.0482 5.17182 21.8467 4.07152C20.0095 3.14354 17.979 2.66265 15.9208 2.66801H15.141C11.8906 2.84734 8.8205 4.2193 6.5186 6.5212C4.2167 8.8231 2.84474 11.8932 2.66541 15.1436V15.9234Z"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "send":
      return (
        <svg
          className="w-6 h-6 lg:w-8 lg:h-8"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.3346 2.66797L14.668 17.3346"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.3346 2.66797L20.0013 29.3346L14.668 17.3346L2.66797 12.0013L29.3346 2.66797Z"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "facebook":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.8867 26.1107L30.5841 21.5707H26.228V18.624C26.228 17.3827 26.836 16.1707 28.7881 16.1707H30.7681V12.3067C30.7681 12.3067 28.9707 12 27.2521 12C23.6654 12 21.3187 14.1733 21.3187 18.1107V21.5707H17.332V26.1107H21.3187V37.2747H26.228V26.1107H29.8867Z"
            fill="#999999"
          />
        </svg>
      )
    case "instagram":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0003 10.3242C20.2848 10.3242 19.8195 10.339 18.3599 10.4069C16.9047 10.4734 15.909 10.7039 15.0389 11.0422C14.1407 11.3923 13.3769 11.8606 12.6161 12.62C11.8567 13.3808 11.3884 14.1446 11.0383 15.0428C10.7 15.9144 10.4695 16.9086 10.403 18.3638C10.3366 19.8234 10.3203 20.2888 10.3203 24.0042C10.3203 27.7197 10.3351 28.185 10.403 29.6446C10.4695 31.1013 10.7 32.0955 11.0383 32.9657C11.3884 33.8653 11.8567 34.6276 12.6161 35.3885C13.3769 36.1493 14.1407 36.6161 15.0389 36.9662C15.9105 37.3045 16.9047 37.535 18.3599 37.6015C19.8195 37.668 20.2848 37.6842 24.0003 37.6842C27.7158 37.6842 28.1811 37.6694 29.6407 37.6015C31.0959 37.535 32.0916 37.3045 32.9617 36.9662C33.8599 36.6161 34.6237 36.1493 35.3845 35.3885C36.1439 34.6276 36.6122 33.8653 36.9623 32.9657C37.3006 32.094 37.5311 31.1013 37.5976 29.6446C37.664 28.185 37.6803 27.7197 37.6803 24.0042C37.6803 20.2888 37.6655 19.8234 37.5976 18.3638C37.5311 16.9086 37.3006 15.9129 36.9623 15.0428C36.6122 14.1446 36.1439 13.3808 35.3845 12.62C34.6237 11.8606 33.8599 11.3923 32.9617 11.0422C32.0901 10.7039 31.0959 10.4734 29.6407 10.4069C28.1811 10.339 27.7158 10.3242 24.0003 10.3242ZM24.0003 12.7899C27.6522 12.7899 28.0851 12.8046 29.5284 12.8696C30.8625 12.9287 31.5863 13.1533 32.0694 13.3394C32.7062 13.5876 33.1626 13.8846 33.6413 14.3632C34.1199 14.8419 34.4169 15.2984 34.6651 15.9366C34.8512 16.4182 35.0743 17.1421 35.1349 18.4776C35.2014 19.9194 35.2146 20.3523 35.2146 24.0042C35.2146 27.6576 35.2014 28.089 35.1349 29.5324C35.0758 30.8664 34.8512 31.5903 34.6651 32.0734C34.4169 32.7101 34.1185 33.1666 33.6413 33.6452C33.1626 34.1239 32.7062 34.4208 32.068 34.669C31.5863 34.8551 30.8625 35.0782 29.527 35.1388C28.0866 35.2053 27.6537 35.2186 24.0003 35.2186C20.3469 35.2186 19.914 35.2053 18.4722 35.1388C17.1381 35.0797 16.4143 34.8551 15.9312 34.669C15.2945 34.4208 14.838 34.1224 14.3593 33.6452C13.8807 33.1666 13.5837 32.7101 13.3355 32.0719C13.1494 31.5903 12.9263 30.8664 12.8657 29.5309C12.7993 28.089 12.786 27.6576 12.786 24.0042C12.786 20.3523 12.7993 19.9194 12.8657 18.4761C12.9248 17.1421 13.1494 16.4182 13.3355 15.9351C13.5837 15.2984 13.8821 14.8419 14.3593 14.3632C14.838 13.8846 15.2945 13.5876 15.9327 13.3394C16.4143 13.1533 17.1381 12.9302 18.4736 12.8696C19.9155 12.8032 20.3484 12.7899 24.0003 12.7899Z"
            fill="#999999"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0012 28.5511C21.4824 28.5511 19.4407 26.5094 19.4407 23.9906C19.4407 21.4717 21.4824 19.4301 24.0012 19.4301C26.5201 19.4301 28.5617 21.4717 28.5617 23.9906C28.5617 26.5094 26.5201 28.5511 24.0012 28.5511ZM24.0012 16.9659C20.1218 16.9659 16.9766 20.1111 16.9766 23.9906C16.9766 27.87 20.1218 31.0152 24.0012 31.0152C27.8807 31.0152 31.0259 27.87 31.0259 23.9906C31.0259 20.1111 27.8807 16.9659 24.0012 16.9659ZM32.9449 16.6882C32.9449 17.5953 32.2107 18.3295 31.3036 18.3295C30.3966 18.3295 29.6623 17.5953 29.6623 16.6897C29.6623 15.7811 30.3965 15.0469 31.3021 15.0469C32.2107 15.0469 32.9449 15.7811 32.9449 16.6882Z"
            fill="#999999"
          />
        </svg>
      )
    case "call":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.9992 22.466V26.38C29.0007 26.7434 28.9261 27.1031 28.7802 27.436C28.6344 27.7689 28.4205 28.0678 28.1522 28.3134C27.8839 28.559 27.5672 28.7461 27.2223 28.8625C26.8774 28.9789 26.5119 29.0221 26.1493 28.9894C22.1266 28.5532 18.2626 27.1813 14.8676 24.984C11.709 22.9809 9.03104 20.3083 7.02394 17.1559C4.81462 13.7523 3.43971 9.8771 3.01061 5.84434C2.97794 5.48355 3.02091 5.11992 3.13676 4.77661C3.25262 4.43331 3.43884 4.11783 3.68355 3.85029C3.92827 3.58274 4.22612 3.36897 4.55815 3.2226C4.89018 3.07623 5.24911 3.00047 5.61208 3.00013H9.5339C10.1683 2.99389 10.7834 3.21811 11.2644 3.63098C11.7455 4.04386 12.0597 4.61721 12.1484 5.24418C12.314 6.49676 12.621 7.72664 13.0635 8.91034C13.2394 9.37732 13.2775 9.88483 13.1732 10.3727C13.069 10.8606 12.8267 11.3085 12.4753 11.6632L10.815 13.3202C12.676 16.5865 15.3858 19.291 18.6587 21.1483L20.3189 19.4913C20.6743 19.1405 21.1231 18.8988 21.612 18.7947C22.1008 18.6907 22.6093 18.7287 23.0772 18.9042C24.2633 19.3459 25.4956 19.6523 26.7507 19.8175C27.3857 19.9069 27.9657 20.2261 28.3802 20.7145C28.7948 21.2028 29.0151 21.8261 28.9992 22.466Z"
            fill="black"
          />
        </svg>
      )
    case "message":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29 21.3333C29 22.0406 28.719 22.7189 28.219 23.219C27.7189 23.719 27.0406 24 26.3333 24H7.33333L3 28V6.66667C3 5.95942 3.28095 5.28115 3.78105 4.78105C4.28115 4.28095 4.95942 4 5.66667 4H26.3333C27.0406 4 27.7189 4.28095 28.219 4.78105C28.719 5.28115 29 5.95942 29 6.66667V21.3333Z"
            fill="black"
          />
          <circle cx="9.5" cy="14" r="1.5" fill="white" />
          <circle cx="16" cy="14" r="1.5" fill="white" />
          <circle cx="22.5" cy="14" r="1.5" fill="white" />
        </svg>
      )
    case "map":
      return (
        <svg
          className="w-4 h-4 lg:w-6 lg:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "call-outline":
      return (
        <svg
          className="w-4 h-4 lg:w-6 lg:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9975 16.9201V19.9201C21.9986 20.1986 21.9416 20.4743 21.83 20.7294C21.7184 20.9846 21.5548 21.2137 21.3496 21.402C21.1443 21.5902 20.9021 21.7336 20.6382 21.8228C20.3744 21.912 20.0949 21.9452 19.8175 21.9201C16.7403 21.5857 13.7845 20.5342 11.1875 18.8501C8.77132 17.3148 6.72283 15.2663 5.18749 12.8501C3.49747 10.2413 2.44573 7.27109 2.11749 4.1801C2.0925 3.90356 2.12537 3.62486 2.21399 3.36172C2.30262 3.09859 2.44506 2.85679 2.63226 2.65172C2.81945 2.44665 3.0473 2.28281 3.30128 2.17062C3.55527 2.05843 3.82983 2.00036 4.10749 2.0001H7.10749C7.5928 1.99532 8.06328 2.16718 8.43125 2.48363C8.79922 2.80008 9.03957 3.23954 9.10749 3.7201C9.23411 4.68016 9.46894 5.62282 9.80749 6.5301C9.94204 6.88802 9.97115 7.27701 9.8914 7.65098C9.81164 8.02494 9.62635 8.36821 9.35749 8.6401L8.08749 9.9101C9.51105 12.4136 11.5839 14.4865 14.0875 15.9101L15.3575 14.6401C15.6294 14.3712 15.9726 14.1859 16.3466 14.1062C16.7206 14.0264 17.1096 14.0556 17.4675 14.1901C18.3748 14.5286 19.3174 14.7635 20.2775 14.8901C20.7633 14.9586 21.2069 15.2033 21.524 15.5776C21.8412 15.9519 22.0097 16.4297 21.9975 16.9201Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "message-outline":
      return (
        <svg
          className="w-4 h-4 lg:w-6 lg:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 6L12 13L2 6"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "arrow-triangle-right":
      return (
        <svg
          className="w-4 h-4 lg:w-6 lg:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 4L16 12L8 20" stroke="black" strokeWidth="2" />
        </svg>
      )
    case "check":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.5 8.12997L6.46311 11L12.5 5" stroke={color} />
        </svg>
      )
    case "menu":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M3 6H21"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M3 18H21"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "close":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 5L19.0004 19.0004"
            stroke="black"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M19 5L4.99962 19.0004"
            stroke="black"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "plus":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 2L8 14" stroke="black" strokeLinejoin="round" />
          <path d="M14 8L2 8" stroke="black" strokeLinejoin="round" />
        </svg>
      )
    case "minus":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 8L2 8" stroke="black" strokeLinejoin="round" />
        </svg>
      )
    case "search":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1527_3296)">
            <path
              d="M10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.8056 15.1944 2 10.5 2C5.8056 2 2 5.8056 2 10.5C2 15.1944 5.8056 19 10.5 19Z"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M16.6094 16.6094L20.852 20.852"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1527_3296">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case "arrow-start":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 4L7.5 8L11.5 12"
            stroke="#999999"
            strokeLinecap="square"
          />
          <line x1="5" y1="3" x2="5" y2="13" stroke="#999999" />
        </svg>
      )
    case "arrow-prev":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 4L6 8L10 12" stroke="#999999" strokeLinecap="square" />
        </svg>
      )
    case "arrow-next":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 4L10 8L6 12" stroke="#999999" />
        </svg>
      )
    case "arrow-end":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.5 4L8.5 8L4.5 12" stroke="#999999" />
          <line x1="12" y1="3" x2="12" y2="13" stroke="#999999" />
        </svg>
      )
    case "arrow-up":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 15L12 9L18 15" stroke="black" strokeWidth="2" />
        </svg>
      )
    case "arrow-down":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 9L12 15L6 9" stroke="black" strokeWidth="2" />
        </svg>
      )
    case "event":
      return (
        <svg
          className="w-4 h-4 lg:w-6 lg:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_698_66)">
            <path
              d="M12 6C13.11 6 14 5.1 14 4C14 3.62 13.9 3.27 13.71 2.97L12 0L10.29 2.97C10.1 3.27 10 3.62 10 4C10 5.1 10.9 6 12 6ZM18 9H13V7H11V9H6C4.34 9 3 10.34 3 12V21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21V12C21 10.34 19.66 9 18 9ZM19 20H5V17C5.9 16.99 6.76 16.63 7.4 15.99L8.49 14.92L9.56 15.99C10.87 17.3 13.15 17.29 14.45 15.99L15.53 14.92L16.6 15.99C17.24 16.63 18.1 16.99 19 17V20V20ZM19 15.5C18.49 15.49 18.01 15.3 17.65 14.93L15.52 12.8L13.38 14.93C12.64 15.67 11.35 15.67 10.61 14.93L8.48 12.8L6.34 14.93C5.99 15.29 5.51 15.49 5 15.5V12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12V15.5Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_698_66">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case "parking":
      return (
        <svg
          className="w-4 h-4 lg:w-6 lg:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_698_69)">
            <path
              d="M13 3H6V21H10V15H13C16.31 15 19 12.31 19 9C19 5.69 16.31 3 13 3ZM13.2 11H10V7H13.2C14.3 7 15.2 7.9 15.2 9C15.2 10.1 14.3 11 13.2 11Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_698_69">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case "takeout":
      return (
        <svg
          className="w-4 h-4 lg:w-6 lg:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_698_80)">
            <path
              d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_698_80">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case "wifi":
      return (
        <svg
          className="w-4 h-4 lg:w-6 lg:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_698_84)">
            <path
              d="M1 9.00001L3 11C7.97 6.03001 16.03 6.03001 21 11L23 9.00001C16.93 2.93001 7.08 2.93001 1 9.00001ZM9 17L12 20L15 17C13.35 15.34 10.66 15.34 9 17ZM5 13L7 15C9.76 12.24 14.24 12.24 17 15L19 13C15.14 9.14001 8.87 9.14001 5 13Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_698_84">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case "delivery":
      return (
        <svg
          className="w-4 h-4 lg:w-6 lg:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_698_72)">
            <path
              d="M19 7C19 5.9 18.1 5 17 5H14V7H17V9.65L13.52 14H10V9H6C3.79 9 2 10.79 2 13V16H4C4 17.66 5.34 19 7 19C8.66 19 10 17.66 10 16H14.48L19 10.35V7ZM4 14V13C4 11.9 4.9 11 6 11H8V14H4ZM7 17C6.45 17 6 16.55 6 16H8C8 16.55 7.55 17 7 17Z"
              fill="white"
            />
            <path d="M10 6H5V8H10V6Z" fill="white" />
            <path
              d="M19 13C17.34 13 16 14.34 16 16C16 17.66 17.34 19 19 19C20.66 19 22 17.66 22 16C22 14.34 20.66 13 19 13ZM19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_698_72">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
  }
}
