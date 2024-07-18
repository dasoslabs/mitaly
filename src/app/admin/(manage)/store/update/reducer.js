export const initialState = {
  region: "",
  name: "",
  address: "",
  address_detail: "",
  contact: "",
  business_hours: "",
  break_time: "",
  holidays: "",
  options: [],
  image_file: "",
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_REGION":
      return { ...state, region: action.payload }
    case "SET_NAME":
      return { ...state, name: action.payload }
    case "SET_ADDRESS":
      return { ...state, address: action.payload }
    case "SET_ADDRESS_DETAIL":
      return { ...state, address_detail: action.payload }
    case "SET_CONTACT":
      return { ...state, contact: action.payload }
    case "SET_BUSINESS_HOURS":
      return { ...state, business_hours: action.payload }
    case "SET_BREAK_TIME":
      return { ...state, break_time: action.payload }
    case "SET_HOLIDAYS":
      return { ...state, holidays: action.payload }
    case "TOGGLE_OPTION":
      const options = state.options.includes(action.payload)
        ? state.options.filter((option) => option !== action.payload)
        : [...state.options, action.payload]
      return { ...state, options }
    case "SET_IMAGE_FILE":
      return { ...state, image_file: action.payload }
    case "SET_STATE":
      return { ...state, ...action.payload }
    default:
      return state
  }
}
