import { X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Resume = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleResume = () => {
        setIsModalOpen((prev) => !prev);
    }

    return (
        <div className="relative">
            <button onClick={handleResume} className="w-fit bg-blue-600 text-gray-200 font-bold p-2 top-[50%] z-50 fixed transform rotate-90 rounded-2xl ">
                {
                    (!isModalOpen) ? "Resume" : <X color="red" />
                }
            </button>
            {isModalOpen &&
                <div className="fixed flex items-center justify-center w-full bg-opacity-50 z-40">
                    <embed className="m-16 rounded-lg" src="./Harsh Makwana.pdf" width="100%" height="600px"></embed>
                </div>
            }

        </div>
    )
};

export default Resume;