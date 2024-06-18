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
  }
}
