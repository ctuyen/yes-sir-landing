'use client'
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface YesSirStudioProps {
  contactPhone?: string;
  contactEmail?: string;
}

const YesSirStudioClient: React.FC<YesSirStudioProps> = ({ contactPhone = "+84 70 2845158", contactEmail = "hello@yessirstudio.com" }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [projectDescription, setProjectDescription] = React.useState('');
  const [file, setFile] = React.useState<File | null>(null);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, projectDescription, file });
  };

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
            <Dialog>
              <DialogTrigger asChild>
                <Button className="px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200">Get Quick Quote</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Get Quick Quote</DialogTitle>
                  <DialogDescription>
                    Send us a brief description of your project and we will get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="project-description" className="text-right">
                      Project Description
                    </Label>
                    <Textarea id="project-description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="file" className="text-right">Upload File</Label>
                    <Input id="file" type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit" onClick={handleSubmit}>Submit</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="outline" className="px-6 py-2 bg-transparent border border-white text-white hover:bg-gray-200 font-semibold rounded-lg">
              Schedule a quick chat
            </Button>
          </div>

          {/* Contact Information */}
          <div className="mt-12 mb-2 text-sm text-gray-500">
            <hr className="my-4 border-gray-700" />
            <p>Tel: <a href={`tel:${contactPhone}`}> {contactPhone} </a> | Email: <a href={`mailto:${contactEmail}`}> {contactEmail} </a></p>
            <p>&copy; 2024 YesSirStudio. All rights reserved.</p>
          </div>
        </div>

        {/* Hero Graphics Desktop */}
        <Image src="/assets/images/Hero-Image-Section.svg" alt="YesSirStudio Hero Image" className="w-5/12 hidden md:block" width={667} height={493} priority />
      </div>
    </div>
  );
};

export default function Page() {
  return <YesSirStudioClient />;
}
