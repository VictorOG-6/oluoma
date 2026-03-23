"use client"

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

const servicesList: string[] = [
    "Brand Identity Design",
    "Logo Design",
    "Social Media Design",
    "Poster & Campaign Design",
    "Creative Direction",
    "Brand Design",
];

const Book: React.FC = () => {
    const [state, handleSubmit] = useForm("xqkowery");

    // typed as string array
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    // typed parameter
    const toggleService = (service: string): void => {
        setSelectedServices((prev) =>
            prev.includes(service)
                ? prev.filter((item) => item !== service)
                : [...prev, service]
        );
    };

    return (
        <main className="relative">
            <section className="max-w-7xl flex justify-center pt-14 pb-20 md:pb-160 px-5 md:px-16 text-secondary">
                <div className="flex flex-col">
                    {/* <Link href={"/"} className="flex items-center gap-4 mb-14 cursor-pointer transition-all duration-300 hover:underline">
                        <MoveLeft color="#EE51B4" />
                        <p className="text-[32px]">Back to home</p>
                    </Link> */}

                    <div className="flex flex-col">
                        <h1 className="text-[64px] font-semibold mb-6">
                            Book a Design Service
                        </h1>

                        <form onSubmit={handleSubmit} className="flex flex-col">
                            {/* PERSONAL INFO */}
                            <div className="flex flex-col mb-8">
                                <label className="text-[32px] mb-3">
                                    Personal Information
                                </label>

                                <div className="flex flex-col gap-6">
                                    <div>
                                        <input
                                            id="full_name"
                                            type="text"
                                            name="full_name"
                                            placeholder="Full name"
                                            className="w-full h-14 bg-[#FFC6E0] rounded-[40px] bg-opacity-50 px-8 placeholder:text-[#00000060]"
                                        />
                                        <ValidationError
                                            prefix="Full Name"
                                            field="full_name"
                                            errors={state.errors}
                                        />
                                    </div>

                                    <div>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="Email address"
                                            className="w-full h-14 bg-[#FFC6E0] rounded-[40px] bg-opacity-50 px-8 placeholder:text-[#00000060]"
                                        />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>

                                    <div>
                                        <input
                                            id="phone_number"
                                            type="text"
                                            name="phone_number"
                                            placeholder="Phone number"
                                            className="w-full h-14 bg-[#FFC6E0] rounded-[40px] bg-opacity-50 px-8 placeholder:text-[#00000060]"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* SERVICE SELECTION */}
                            <div className="flex flex-col mb-8">
                                <label className="text-[32px] mb-1">
                                    Service Selection
                                </label>
                                <p className="text-primary text-2xl mb-3 italic">
                                    Which service are you interested in?
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-7 md:gap-x-16 gap-y-4">
                                    {servicesList.map((service: string) => {
                                        const isActive =
                                            selectedServices.includes(service);

                                        return (
                                            <span
                                                key={service}
                                                onClick={() =>
                                                    toggleService(service)
                                                }
                                                className={`w-87.5 h-14 rounded-4xl flex items-center justify-center text-secondary text-2xl cursor-pointer transition-colors duration-300
                        ${isActive
                                                        ? "bg-[#ffc6e0c0]"
                                                        : "bg-[#FFC6E0] bg-opacity-50 hover:bg-[#ffc6e0c0]"
                                                    }`}
                                            >
                                                {service}
                                            </span>
                                        );
                                    })}
                                </div>

                                {/* Hidden input for Formspree */}
                                <input
                                    type="hidden"
                                    name="services"
                                    value={selectedServices.join(", ")}
                                />
                            </div>

                            {/* PROJECT DETAILS */}
                            <div className="flex flex-col mb-8">
                                <label className="text-[32px] mb-1">
                                    Project Details
                                </label>
                                <p className="text-primary text-2xl mb-3 italic">
                                    Tell me about your project
                                </p>

                                <textarea
                                    name="project_details"
                                    className="w-full h-16 md:h-44 bg-[#FFC6E0] rounded-[30px] bg-opacity-50 px-4 py-3"
                                />
                                <ValidationError
                                    prefix="Project Details"
                                    field="project_details"
                                    errors={state.errors}
                                />
                            </div>

                            {/* TIMELINE */}
                            <div className="flex flex-col mb-8">
                                <label className="text-[32px] mb-3">
                                    Project Timeline
                                </label>

                                <textarea
                                    name="project_timeline"
                                    className="w-full h-16 md:h-44 bg-[#FFC6E0] rounded-[30px] bg-opacity-50 px-4 py-3"
                                />
                                <ValidationError
                                    prefix="Project Timeline"
                                    field="project_timeline"
                                    errors={state.errors}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="border border-secondary bg-background rounded-2xl text-primary w-40 h-14 flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-background/50"
                            >
                                Submit
                            </button>
                        </form>

                        {state.succeeded && (
                            <p className="text-green-500 mt-4">
                                Thanks! Your submission has been sent.
                            </p>
                        )}
                    </div>
                </div>
            </section>
            <img src="/contact-bg.avif" alt="Contact Content" className='w-full absolute bottom-0 left-0 -z-10' />
        </main>
    );
};

export default Book;