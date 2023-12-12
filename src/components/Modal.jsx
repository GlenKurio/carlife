import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

function Modal({ setIsOpenModal, children }) {
  const close = () => setIsOpenModal(false);
  const ref = useOutsideClick(close);

  return createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen bg-blue-950 bg-opacity-30 backdrop-blur-sm z-50 transition-all duration-500">
      <div
        ref={ref}
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-blue-200 rounded-lg shadow-md px-4 py-4 flex flex-col min-w-[80%] md:min-w-[50%]"
      >
        <button onClick={close} className="self-end hover:text-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="my-8 px-8 text-center">{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
