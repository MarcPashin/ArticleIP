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
        "Prior Art Search",
        "EoU and Claim Charts",
        "Portfolio Management",
        "Scientific Research",
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
            const response = await fetch("/api/request-demo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
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
                // Close modal after 2 seconds
                setTimeout(() => {
                    onClose();
                    setSubmitStatus("idle");
                }, 2000);
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
            {/* Light Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Darker Blue Frosted Glass Modal */}
            <div className="relative bg-gradient-to-br from-slate-900/90 via-blue-950/80 to-indigo-950/90 backdrop-blur-2xl border border-blue-400/20 rounded-3xl p-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl ring-1 ring-blue-300/10">
                {/* Circular Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-blue-500/20 hover:bg-blue-400/30 rounded-full transition-all duration-300 backdrop-blur-sm border border-blue-300/40 hover:scale-110 group"
                >
                    <X className="w-5 h-5 text-blue-100 group-hover:text-white transition-colors" />
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
                    <p className="text-gray-300 text-center text-sm">
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
                            <label className="block text-sm font-medium text-blue-100 mb-2">
                                First Name*
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-5 py-4 bg-blue-500/10 backdrop-blur-sm border border-blue-300/40 rounded-2xl focus:ring-2 focus:ring-blue-400/60 focus:border-blue-400/60 placeholder-blue-200/60 text-white transition-all duration-200 hover:bg-blue-400/15"
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-blue-100 mb-2">
                                Last Name*
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-5 py-4 bg-blue-500/10 backdrop-blur-sm border border-blue-300/40 rounded-2xl focus:ring-2 focus:ring-blue-400/60 focus:border-blue-400/60 placeholder-blue-200/60 text-white transition-all duration-200 hover:bg-blue-400/15"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-blue-100 mb-2">
                            Email Address*
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-5 py-4 bg-blue-500/10 backdrop-blur-sm border border-blue-300/40 rounded-2xl focus:ring-2 focus:ring-blue-400/60 focus:border-blue-400/60 placeholder-blue-200/60 text-white transition-all duration-200 hover:bg-blue-400/15"
                            placeholder="Email Address"
                        />
                    </div>

                    {/* Company and Role */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-blue-100 mb-2">
                                Company
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full px-5 py-4 bg-blue-500/10 backdrop-blur-sm border border-blue-300/40 rounded-2xl focus:ring-2 focus:ring-blue-400/60 focus:border-blue-400/60 placeholder-blue-200/60 text-white transition-all duration-200 hover:bg-blue-400/15"
                                placeholder="Company"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-blue-100 mb-2">
                                Role
                            </label>
                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                className="w-full px-5 py-4 bg-blue-500/10 backdrop-blur-sm border border-blue-300/40 rounded-2xl focus:ring-2 focus:ring-blue-400/60 focus:border-blue-400/60 placeholder-blue-200/60 text-white transition-all duration-200 hover:bg-blue-400/15"
                                placeholder="Role"
                            />
                        </div>
                    </div>

                    {/* Interests */}
                    <div>
                        <label className="block text-sm font-medium text-blue-100 mb-3">
                            Interest
                        </label>
                        <div className="grid md:grid-cols-2 gap-3">
                            {interests.map((interest) => (
                                <label
                                    key={interest}
                                    className="flex items-center p-4 bg-blue-500/10 backdrop-blur-sm border border-blue-300/40 rounded-2xl cursor-pointer hover:bg-blue-400/15 transition-all duration-200 hover:scale-[1.02]"
                                >
                                    <input
                                        type="checkbox"
                                        checked={formData.interests.includes(interest)}
                                        onChange={() => handleInterestChange(interest)}
                                        className="w-5 h-5 text-blue-400 bg-blue-500/10 border-blue-300/40 rounded-lg focus:ring-blue-400/60 focus:ring-2 transition-all duration-200"
                                    />
                                    <span className="ml-3 text-blue-100 font-medium">{interest}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-blue-100 mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-5 py-4 bg-blue-500/10 backdrop-blur-sm border border-blue-300/40 rounded-2xl focus:ring-2 focus:ring-blue-400/60 focus:border-blue-400/60 placeholder-blue-200/60 text-white resize-none transition-all duration-200 hover:bg-blue-400/15"
                            placeholder="Type here..."
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-5 bg-gradient-to-r from-blue-800 to-purple-800 hover:from-blue-900 hover:to-purple-900 disabled:from-gray-700 disabled:to-gray-700 text-white font-semibold rounded-2xl transition-all duration-300 text-lg shadow-2xl hover:shadow-blue-500/25 hover:scale-[1.02] backdrop-blur-sm border border-blue-600/30"
                    >
                        {isSubmitting ? "SUBMITTING..." : "REQUEST DEMO"}
                    </button>
                </form>
            </div>
        </div>
    );
};