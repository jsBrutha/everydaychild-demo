export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "The program has been life-changing for our family. My daughter now has access to quality education and the support she needs to succeed.",
      author: "Dr. Diana Henderson",
      title: "Parent",
      image: "/placeholder-avatar.jpg",
      rating: 5,
    },
    {
      text: "Through this organization, I've been able to continue my education and build a better future for myself and my community.",
      author: "Sarah Johnson",
      title: "Student",
      image: "/placeholder-avatar.jpg",
      rating: 5,
    },
    {
      text: "The comprehensive approach to child development has made a real difference in our community. Children are thriving like never before.",
      author: "Michael Anderson",
      title: "Community Leader",
      image: "/placeholder-avatar.jpg",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-500" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-yellow-400 relative overflow-hidden">
      {/* Quote decoration */}
      <div className="absolute top-10 left-10 text-8xl text-yellow-500 opacity-20 font-serif">
        &quot;
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What People Say
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Hear from the families, students, and community members whose lives
            have been transformed through our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg relative transform hover:scale-105 transition-transform duration-300"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 left-8 bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">&quot;</span>
              </div>

              <div className="mt-4">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {testimonial.text}
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>

                <div className="mt-4">{renderStars(testimonial.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
