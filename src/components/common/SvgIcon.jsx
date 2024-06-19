export default function SvgIcon({ name = "" }) {
  switch (name) {
    case "volume":
      return (
        <svg
          width="24"
          height="24"
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
          width="24"
          height="24"
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
          width="32"
          height="32"
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
          width="32"
          height="32"
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
          width="32"
          height="32"
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
  }
}
