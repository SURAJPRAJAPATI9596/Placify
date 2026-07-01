import React from "react";

import {
  User,
  Mail,
  MapPin,
  Trophy,
  Code2,
  Target,
  Settings,
  LogOut,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const ProfileMenu = () => {
  return (
    <div className="space-y-2 bg-(--bg-primary) text-(--text-primary)">
      {/* Header */}

      <div className="flex flex-col items-center gap-5">
        <img
          src="https://i.pravatar.cc/150"
          className="
          w-24
          h-24
          rounded-full
          object-cover
          border
          border-white/20
          "
        />

        <div>
          <h1 className="text-2xl font-bold">Suraj Kumar</h1>

          <p className="opacity-70">Frontend Developer</p>

          <p className="text-blue-400 text-sm mt-1">Profile Completion 75%</p>
        </div>
      </div>

      {/* Personal Details */}

      <div
        className="
        bg-white/5
        rounded-2xl
        p-5
        "
      >
        <h2 className="font-bold text-xl mb-4">Personal Details</h2>

        <div className="space-y-3">
          <p className="flex gap-3 items-center">
            <Mail size={18} />
            suraj@example.com
          </p>

          <p className="flex gap-3 items-center">
            <MapPin size={18} />
            India
          </p>

          <p className="flex gap-3 items-center">
            <FaGithub size={18} />
            github.com/user
          </p>

          <p className="flex gap-3 items-center">
            <FaLinkedin size={18} />
            linkedin.com/user
          </p>
        </div>
      </div>

      {/* Career */}

      {/* <div
        className="
        bg-white/5
        rounded-2xl
        p-5
        "
      >
        <h2 className="text-xl font-bold">Career Goal</h2>

        <div className="mt-4 space-y-2 opacity-80">
          <p>
            Target Role:
            <span className="text-blue-400 ml-2">Frontend Developer</span>
          </p>

          <p>
            Target Company:
            <span className="text-blue-400 ml-2">Google</span>
          </p>
        </div>
      </div> */}

      {/* Stats */}

      <div
        className="
        grid
        grid-cols-3
        gap-3
        "
      >
        <div className="bg-white/5 p-4 rounded-xl text-center">
          <Trophy className="mx-auto" />

          <h3 className="font-bold mt-2">124</h3>

          <p className="text-xs opacity-70">Problems</p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl text-center">
          <Code2 className="mx-auto" />

          <h3 className="font-bold mt-2">86%</h3>

          <p className="text-xs opacity-70">Accuracy</p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl text-center">
          <Target className="mx-auto" />

          <h3 className="font-bold mt-2">14</h3>

          <p className="text-xs opacity-70">Streak</p>
        </div>
      </div>

      {/* Actions */}

      <div className="space-y-3">
        <button
          className="
          w-full
          bg-blue-600
          py-3
          rounded-xl
          flex
          justify-center
          items-center
          gap-2
          "
        >
          <User size={18} />
          View Full Profile
        </button>

        <button
          className="
          w-full
          bg-white/10
          py-3
          rounded-xl
          flex
          justify-center
          items-center
          gap-2
          "
        >
          <Settings size={18} />
          Settings
        </button>

        <button
          className="
          w-full
          bg-red-500/10
          text-red-400
          py-3
          rounded-xl
          flex
          justify-center
          items-center
          gap-2
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
