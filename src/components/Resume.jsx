import { X } from "lucide-react";
import React, { useState, useEffect } from "react";

const Resume = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Handle screen resize
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleResume = (e) => {
        e.stopPropagation();
        setIsModalOpen((prev) => !prev);
    };

    const handleClickOutside = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            setIsModalOpen(false);
        }
    };

    const isMobile = screenWidth < 640;

    return (
        <div className="relative">
            {/* Toggle Button */}
            <button
                onClick={handleResume}
                className="fixed top-1/2 right-0 z-50 transform -translate-y-1/2 rotate-90 bg-blue-600 text-gray-200 font-bold px-4 py-2 rounded-t-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
                {!isModalOpen ? "Resume" : <X className="w-6 h-6" />}
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-start justify-center z-40 modal-overlay bg-black bg-opacity-75"
                    onClick={handleClickOutside}
                    style={{
                        top: isMobile ? 0 : '64px' // Assuming navbar height is 64px, adjust if different
                    }}
                >
                    <div className={`relative mx-auto bg-white rounded-lg shadow-xl ${isMobile
                        ? 'w-[90%] h-[80%] mt-16'
                        : 'w-11/12 max-w-4xl h-[calc(100vh-80px)]' // Adjusted height for space below navbar
                        }`}>
                        {/* Show close button only on mobile */}
                        {isMobile && (
                            <button
                                onClick={handleResume}
                                className="absolute -top-4 -right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-lg transition-colors z-[60]"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}

                        <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                            <embed
                                className="w-full h-full"
                                src="./Harsh_Makwana.pdf"
                                type="application/pdf"
                                style={{
                                    backgroundColor: 'white',
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Resume;