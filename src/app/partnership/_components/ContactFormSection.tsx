"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// Form validation schema
const contactFormSchema = z.object({
  schoolName: z.string().min(1, "School name is required"),
  fullAddress: z.string().min(1, "Full address is required"),
  contactPersonName: z.string().min(1, "Contact person name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  emailAddress: z.string().email("Please enter a valid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          to: "adefidipei@gmail.com",
          subject: `School Partnership Inquiry from ${data.schoolName}`,
        }),
      });

      if (response.ok) {
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
        <div className=" rounded-3xl  p-8 lg:p-12">
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
                  Let us know how your school would like to support education
                  for out-of-school children.
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* School Name */}
                <div>
                  <label
                    htmlFor="schoolName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    School Name
                  </label>
                  <input
                    {...register("schoolName")}
                    type="text"
                    id="schoolName"
                    placeholder="Enter your school name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors"
                  />
                  {errors.schoolName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.schoolName.message}
                    </p>
                  )}
                </div>

                {/* Full Address */}
                <div>
                  <label
                    htmlFor="fullAddress"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Address
                  </label>
                  <input
                    {...register("fullAddress")}
                    type="text"
                    id="fullAddress"
                    placeholder="Enter your full address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors"
                  />
                  {errors.fullAddress && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullAddress.message}
                    </p>
                  )}
                </div>

                {/* Contact Person Name */}
                <div>
                  <label
                    htmlFor="contactPersonName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Contact Person Name
                  </label>
                  <input
                    {...register("contactPersonName")}
                    type="text"
                    id="contactPersonName"
                    placeholder="Enter your contact person name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors"
                  />
                  {errors.contactPersonName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contactPersonName.message}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
                      <span className="text-green-600 text-sm mr-2">🇳🇬</span>
                      <span className="text-gray-500 text-sm">+234</span>
                    </div>
                    <input
                      {...register("phoneNumber")}
                      type="tel"
                      id="phoneNumber"
                      placeholder="Enter your phone number"
                      className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors"
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber.message}
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

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message (We&apos;d love to hear how your school might like
                    to support.)
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    placeholder="Please share any ideas or ways you'd be open to partnering with us - such as offering discounts, available spaces or any forms of support."
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
      </div>
    </section>
  );
}
