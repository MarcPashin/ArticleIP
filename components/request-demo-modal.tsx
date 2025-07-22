"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface RequestDemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const RequestDemoModal = ({ isOpen, onClose }: RequestDemoModalProps) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
        interests: [] as string[],
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const interests = [
        "Provisional Technical Patents",
        "EoU and Claim Charts",
        "Portfolio Management",
        "Translation",
        "Press",
        "Other"
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleInterestChange = (interest: string) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Prepare form data for FormSubmit
            const formDataToSend = new FormData();
            formDataToSend.append('firstName', formData.firstName);
            formDataToSend.append('lastName', formData.lastName);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('company', formData.company);
            formDataToSend.append('role', formData.role);
            formDataToSend.append('interests', formData.interests.join(', '));
            formDataToSend.append('message', formData.message);

            // FormSubmit configuration
            formDataToSend.append('_replyto', formData.email);
            formDataToSend.append('_subject', 'New Demo Request from ArticleIP Website');
            formDataToSend.append('_captcha', 'false');
            formDataToSend.append('_template', 'table');

            const response = await fetch("https://formsubmit.co/ajax/4f6d5f9608e9b470aad844d293785e1a", {
                method: "POST",
                body: formDataToSend
            });

            if (response.ok) {
                setSubmitStatus("success");
                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    company: "",
                    role: "",
                    interests: [],
                    message: ""
                });
                // Close modal after 3 seconds
                setTimeout(() => {
                    onClose();
                    setSubmitStatus("idle");
                }, 3000);
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Background with Aurora Effect - More Blue */}
            <div className="absolute inset-0 bg-[#1A2142]">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-500/12 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-500/15 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/8 rounded-full filter blur-3xl animate-pulse"></div>
                <div
                    className="absolute inset-0 bg-black/35 backdrop-blur-sm"
                    onClick={onClose}
                />
            </div>

            {/* Modal with Enhanced Frosted Glass */}
            <div className="relative bg-white/[0.08] border border-white/20 backdrop-blur-3xl rounded-3xl p-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl ring-1 ring-white/10 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-white/5 before:rounded-3xl before:pointer-events-none">
                {/* Circular Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110 group"
                >
                    <X className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </button>

                {/* Header */}
                <div className="mb-8">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-serif font-bold text-white mb-2">
                            ArticleIP
                        </h1>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>
                    <h2 className="text-2xl font-semibold text-center text-white mb-2">
                        Request a Demo
                    </h2>
                    <p className="text-gray-400 text-center text-sm">
                        Transform your IP workflow with modern patent intelligence
                    </p>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                    <div className="mb-6 p-5 bg-green-600/20 backdrop-blur-sm border border-green-500/40 rounded-2xl text-green-300 text-center font-medium">
                        Thank you! Your demo request has been submitted successfully.
                    </div>
                )}

                {submitStatus === "error" && (
                    <div className="mb-6 p-5 bg-red-600/20 backdrop-blur-sm border border-red-500/40 rounded-2xl text-red-300 text-center font-medium">
                        Sorry, there was an error submitting your request. Please try again.
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                First Name*
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-5 py-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl focus:ring-2 focus:ring-white/40 focus:border-white/40 placeholder-gray-400 text-white transition-all duration-200 hover:bg-white/[0.12] hover:border-white/30 shadow-lg ring-1 ring-white/5"
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Last Name*
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-5 py-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl focus:ring-2 focus:ring-white/40 focus:border-white/40 placeholder-gray-400 text-white transition-all duration-200 hover:bg-white/[0.12] hover:border-white/30 shadow-lg ring-1 ring-white/5"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address*
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-5 py-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl focus:ring-2 focus:ring-white/40 focus:border-white/40 placeholder-gray-400 text-white transition-all duration-200 hover:bg-white/[0.12] hover:border-white/30 shadow-lg ring-1 ring-white/5"
                            placeholder="Email Address"
                        />
                    </div>

                    {/* Company and Role */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Company
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full px-5 py-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl focus:ring-2 focus:ring-white/40 focus:border-white/40 placeholder-gray-400 text-white transition-all duration-200 hover:bg-white/[0.12] hover:border-white/30 shadow-lg ring-1 ring-white/5"
                                placeholder="Company"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Role
                            </label>
                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                className="w-full px-5 py-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl focus:ring-2 focus:ring-white/40 focus:border-white/40 placeholder-gray-400 text-white transition-all duration-200 hover:bg-white/[0.12] hover:border-white/30 shadow-lg ring-1 ring-white/5"
                                placeholder="Role"
                            />
                        </div>
                    </div>

                    {/* Interests */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                            Interest
                        </label>
                        <div className="grid md:grid-cols-2 gap-3">
                            {interests.map((interest) => (
                                <label
                                    key={interest}
                                    className="flex items-center p-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl cursor-pointer hover:bg-white/[0.12] hover:border-white/30 transition-all duration-200 hover:scale-[1.02] shadow-lg ring-1 ring-white/5"
                                >
                                    <input
                                        type="checkbox"
                                        checked={formData.interests.includes(interest)}
                                        onChange={() => handleInterestChange(interest)}
                                        className="w-5 h-5 text-white bg-white/5 border-white/20 rounded-lg focus:ring-white/30 focus:ring-2 transition-all duration-200"
                                    />
                                    <span className="ml-3 text-gray-300 font-medium">{interest}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-5 py-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl focus:ring-2 focus:ring-white/40 focus:border-white/40 placeholder-gray-400 text-white resize-none transition-all duration-200 hover:bg-white/[0.12] hover:border-white/30 shadow-lg ring-1 ring-white/5"
                            placeholder="Type here..."
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-5 bg-white/[0.12] hover:bg-white/[0.18] disabled:bg-gray-700/50 text-white font-semibold rounded-2xl transition-all duration-300 text-lg shadow-2xl hover:scale-[1.02] backdrop-blur-xl border border-white/30 hover:border-white/40 ring-1 ring-white/10"
                    >
                        {isSubmitting ? "SUBMITTING..." : "REQUEST DEMO"}
                    </button>
                </form>
            </div>
        </div>
    );
};