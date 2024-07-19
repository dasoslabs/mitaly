import SvgIcon from "../common/SvgIcon"

export default function Checkbox({
  checked = "",
  setChecked = () => {},
  children,
  name = "checkbox",
  required = false,
}) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        name={name}
        type="checkbox"
        className="opacity-0 w-0"
        checked={checked}
        onChange={() => setChecked(!checked)}
        required={required}
      />
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center border mr-2 ${
          checked ? "border-black bg-black" : "border-light-gray"
        }`}
      >
        <SvgIcon name="check" color={checked ? "#fff" : "#E6E6E6"} />
      </div>
      {children}
    </label>
  )
}
