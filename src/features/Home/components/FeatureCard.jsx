import React from "react";
import { ArrowRight } from "lucide-react";

const FeatureCard = ({ image, title, description, icon: Icon }) => {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-(--bg-primary) text-(--text-primary) transition-all duration-500 hover:-translate-y-3 hover:border-purple-500/40 hover:shadow-[0_20px_60px_rgba(168,85,247,0.25)] ">
      {/* Image */}
      <div className="h-65 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />
      </div>

      {/* Content */}

      <div className="p-8">
        {/* icon + title */}

        <div className="flex items-center gap-5">
          <div
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-purple-500/10
            text-purple-400
            "
          >
            <Icon size={28} />
          </div>

          <h2
            className="
            text-2xl
            font-bold
            text-white
            "
          >
            {title}
          </h2>
        </div>

        <p
          className="
          mt-8
          text-lg
          leading-8
          text-gray-400
          "
        >
          {description}
        </p>

        <button
          className="
          mt-8
          flex
          items-center
          gap-2
          text-lg
          font-semibold
          text-purple-400
          transition-all
          group-hover:gap-4
          "
        >
          Explore
          <ArrowRight size={20} />
        </button>
      </div>

      {/* hover glow */}

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        opacity-0
        transition
        duration-500
        group-hover:opacity-100
        bg-linear-to-t
        from-purple-500/10
        to-transparent
        "
      />
    </div>
  );
};

export default FeatureCard;
