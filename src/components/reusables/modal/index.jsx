import  { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { RxCross2 } from "react-icons/rx";

export default function Modal ({ isOpen, onClose,  children, className, size = 'md' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    "2xl": 'max-w-2xl'
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`bg-white rounded-xl py-8 px-4 shadow-lg overflow-hidden ${sizeClasses[size]} w-full ${className}`}
      >
        <div className="flex justify-between items-center  w-full p-4">
          {/* {title && <h2 className="text-lg font-semibold">{title}</h2>} */}
          <button onClick={onClose} className="text-gray-400 bg-white shadow-lg justify-start ml-auto p-2 rounded-lg hover:text-gray-600">
            <RxCross2 size={24} />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', "2xl"]),
};

