import { IoMdClose } from "react-icons/io";

const Modal = ({ open, onClose, children }) => {
  return (
    // backdrop overlay (visible when modal is open)
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      {/* modal box */}
      {/* stop propogation of click event */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          onClick={onClose}
        >
          <IoMdClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
