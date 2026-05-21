// AnnouncementModal.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Removed 'isOpen' from destructuring
const AnnouncementModal = ({ onClose, title, children }: { onClose: () => void, title: string, children: React.ReactElement }) => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="relative w-[90%] max-w-lg rounded-xl bg-white p-6 shadow-2xl"
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-2xl"
                    onClick={onClose}
                >
                    &times;
                </button>

                {title && <h2 className="mb-4 text-xl font-bold text-gray-800">{title}</h2>}
                <div className="text-gray-600">{children}</div>
            </motion.div>
        </motion.div>
    );
};

export default AnnouncementModal;