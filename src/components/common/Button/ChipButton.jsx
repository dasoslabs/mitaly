export default function ChipButton({
  isSelected,
  children,
  className,
  ...props
}) {
  return (
    <button
      className={`text-sm py-2 px-6 font-bold rounded-full ${isSelected ? "font-bold text-black bg-primary" : "font-normal text-[#999999] bg-white"} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
