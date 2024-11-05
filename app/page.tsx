import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"

interface YesSirStudioProps {
  phone: string;
  email: string;
}


const YesSirStudio: React.FC<YesSirStudioProps> = ({ phone = "+84 70 2845158", email = "hello@yessirstudio.com" }) => {
  return (
    <div className="min-h-screen w-screen" style={{ background: 'radial-gradient(50% 50% at 50% 50%, #1A1748 0%, #161616 100%)' }}>
      {/* Header */}
      <div className="px-4 md:px-12 py-4">
        {/* Logo */}
        <div className="p-4">
          <Image src="/assets/images/logo.svg" alt="YesSirStudio Logo" width={40} height={40} priority />
        </div>
      </div>
      {/* Hero Section */}
      <div className="flex items-center justify-between text-white px-4 md:px-12 mt-4 md:mt-8">
        <div className="flex flex-col items-start px-4 w-full md:w-7/12 text-left">

          {/* Main Content */}
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Make Better IT Services
          </h2>
          <h1 className="text-4xl font-bold my-4">Hello, we are YesSirStudio!</h1>
          <p className="text-lg font-light text-gray-300">
            We are a team based in Vietnam, dedicated to delivering the best quality in record time.
          </p>

          {/* Hero Graphics Mobile */}
          <Image src="/assets/images/Hero-Image-Section.svg" alt="YesSirStudio Hero Image" className="w-full md:hidden" width={667} height={493} priority />

          {/* Buttons */}
          <div className="w-full mt-10 flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <Button className="px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200">Get Quick Quote</Button>
            <Button variant="outline" className="px-6 py-2 bg-transparent border border-white text-white hover:bg-gray-200 font-semibold rounded-lg">
              Schedule a quick chat
            </Button>
          </div>

          {/* Contact Information */}
          <div className="mt-12 mb-2 text-sm text-gray-500">
            <hr className="my-4 border-gray-700" />
            <p>Tel: <a href={`tel:${phone}`}> {phone} </a> | Email: <a href={`mailto:${email}`}> {email} </a></p>
            <p>&copy; 2024 YesSirStudio. All rights reserved.</p>
          </div>
        </div>

        {/* Hero Graphics Desktop */}
        <Image src="/assets/images/Hero-Image-Section.svg" alt="YesSirStudio Hero Image" className="w-5/12 hidden md:block" width={667} height={493} priority />
      </div>
    </div>
  );
};

export default YesSirStudio;
