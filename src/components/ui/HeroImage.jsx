import { useState, useEffect } from "react";
import images from "../../assets/images/HeroImages";
import React from "react";

const HeroImage = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="
relative
"
    >
      <div
        className="
absolute
inset-0
bg-purple-600/30
blur-3xl
"
      ></div>

      <div
        className="
relative
rounded-[30px]
overflow-hidden
border
border-white/10
shadow-2xl
"
      >
        <img
          src={images[active]}
          className="
h-145
w-full
object-cover
transition
duration-700
"
        />

        {/* dots */}

        <div
          className="
absolute
bottom-5
left-1/2
-translate-x-1/2
flex
gap-3
"
        >
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setActive(i)}
              className={`
h-2
rounded-full
cursor-pointer

${active === i ? "w-10 bg-purple-500" : "w-2 bg-gray-400"}

`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
