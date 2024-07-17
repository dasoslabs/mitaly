export const initialState = {
  name: "",
  address: "",
  addressDetail: "",
  contact: "",
  businessHours: "",
  breakTime: "",
  holidays: "",
  options: [],
  imageFile: "",
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload }
    case "SET_ADDRESS":
      return { ...state, address: action.payload }
    case "SET_ADDRESS_DETAIL":
      return { ...state, addressDetail: action.payload }
    case "SET_CONTACT":
      return { ...state, contact: action.payload }
    case "SET_BUSINESS_HOURS":
      return { ...state, businessHours: action.payload }
    case "SET_BREAK_TIME":
      return { ...state, breakTime: action.payload }
    case "SET_HOLIDAYS":
      return { ...state, holidays: action.payload }
    case "TOGGLE_OPTION":
      const options = state.options.includes(action.payload)
        ? state.options.filter((option) => option !== action.payload)
        : [...state.options, action.payload]
      return { ...state, options }
    case "SET_IMAGE_FILE":
      return { ...state, imageFile: action.payload }
    default:
      return state
  }
}
