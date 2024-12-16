import React from "react";
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
    return (
        <div className="min-h-[100px] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="flex gap-5">
                <Github className="cursor-pointer hover:text-blue-500" />
                <Linkedin className="cursor-pointer hover:text-blue-500" />
                <Mail className="cursor-pointer hover:text-blue-500" />
            </div>
            <p className="text-blue-500">Made by <span className="text-red-500">harshx3</span></p>
        </div>
    )
};

export default Footer;