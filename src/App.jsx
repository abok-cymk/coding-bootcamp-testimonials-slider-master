import { useState } from "react";
import Sliders from "./components/Sliders";
import { useCallback } from "react";

const imagePath = import.meta.env.BASE_URL;

const testimonials = [
  {
    name: "Tanya Sinclair",
    testimony:
      " “ I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. ” ",
    role: "UX Engineer",
    profile: `${imagePath}/image-tanya.jpg`,
  },
  {
    name: "John Tarkpor",
    testimony:
      " “ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” ",
    role: "Junior Front-end Developer",
    profile: `${imagePath}/image-john.jpg`,
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const currentTestimonial = testimonials[currentIndex];
  return (
    <>
      <main className="grid place-items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-50 relative overflow-hidden">
        <h1 className="sr-only">Coding Bootcamp Testimonials Slider</h1>

        {/* Background patterns */}
        <img
          src={`${imagePath}/pattern-bg.svg`}
          alt=""
          className="absolute max-sm:w-full max-sm:-top-42 max-sm:right-2 top-0 h-full lg:right-32 md:-right-24 object-contain z-0"
        />
        <img
          src={`${imagePath}/pattern-curve.svg`}
          alt=""
          className="absolute bottom-0 left-0 z-0"
        />

        <section className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="sr-only">Testimonal Sliders Section</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Profile Image */}
            <figure className="order-1 md:order-2 relative max-sm:mb-24">
              <div className="relative">
                <img
                  src={currentTestimonial.profile}
                  alt={`${currentTestimonial.name}, ${currentTestimonial.role}`}
                  className="w-full h-full rounded object-cover max-sm:h-72 max-sm:w-72 max-sm:mx-auto"
                />
                <Sliders
                  className="-bottom-5 md:left-24 transform max-sm:left-1/2 max-sm:-translate-x-1/2"
                  onPrev={handlePrev}
                  onNext={handleNext}
                />
              </div>
            </figure>

            {/* Testimonial Content */}
            <div className="order-2 md:order-1 relative md:-right-12 text-center md:text-left">
              <img
                src={`${imagePath}/pattern-quotes.svg`}
                alt=""
                className="absolute -top-8 left-16 max-sm:left-1/2 max-sm:-translate-x-1/2 w-16 h-16 z-10"
              />
              <blockquote className="text-xl md:text-2xl font-light text-Blue-950 leading-relaxed mb-3 md:mb-6 relative z-20">
                {currentTestimonial.testimony}
              </blockquote>
              <div className="flex items-center gap-x-2 md:flex-row flex-col">
                <cite className="text-lg font-bold text-gray-900 not-italic">
                  {currentTestimonial.name}
                </cite>
                <p className="text-lg text-Gray-400 font-medium">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
