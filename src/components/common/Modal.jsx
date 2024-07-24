"use client"

const Modal = ({ open = false, children, className = "" }) => {
  return open ? (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen max-h-full overflow-y-auto overflow-x-hidden inset-0 bg-stone-900/50">
      <div className={`bg-white w-full max-w-screen-md ${className}`}>
        {children}
      </div>
    </div>
  ) : null
}

export default Modal
