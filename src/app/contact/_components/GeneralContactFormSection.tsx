"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";

// Form validation schema for general contact
const generalContactFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  emailAddress: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type GeneralContactFormData = z.infer<typeof generalContactFormSchema>;

export default function GeneralContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GeneralContactFormData>({
    resolver: zodResolver(generalContactFormSchema),
  });
  //script.google.com/macros/s/AKfycbyNGK9BLg2ZoJ_pmEon34scP26k0JgndwDQi6TrtoRsW7hK9MUBX7B3MnwngIvr_CGh/exec
  //script.google.com/macros/s/AKfycbyNGK9BLg2ZoJ_pmEon34scP26k0JgndwDQi6TrtoRsW7hK9MUBX7B3MnwngIvr_CGh/exec
  const GOOGLE_SCRIPT_WEBAPP_URL =
    "https://script.google.com/macros/s/AKfycbwO2hOxdi_DUo8Fj9qY3HlVRHo2Xah0-crdFvxYRxqhTA4liAp0so927bu1DkEERTYE/exec"; // TODO: Replace with your actual URL

  const onSubmit = async (data: GeneralContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const params = new URLSearchParams();
      params.append("fullName", data.fullName);
      params.append("emailAddress", data.emailAddress);
      params.append("subject", data.subject);
      params.append("message", data.message);
     

      const response = await axios.post(GOOGLE_SCRIPT_WEBAPP_URL, params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.status === 200 && response.data.result === "success") {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Header */}
          <div className="space-y-6">
            {/* Chat Icon */}
            <div className="w-16 h-16 bg-primary-blue rounded-2xl flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium tracking-wide text-gray-600 mb-4">
                GET IN TOUCH
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold font-display text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Fill out the form below and our team will get back to you
                shortly.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  {...register("fullName")}
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  {...register("emailAddress")}
                  type="email"
                  id="emailAddress"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors"
                />
                {errors.emailAddress && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.emailAddress.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  placeholder="Enter your subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  placeholder="Please type your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-blue text-white py-4 rounded-full font-medium text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="text-green-600 text-center font-medium">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-600 text-center font-medium">
                  Sorry, there was an error sending your message. Please try
                  again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
