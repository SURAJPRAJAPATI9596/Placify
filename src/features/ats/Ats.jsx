import React, { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import FileUploader from "./components/FileUploader";
import AtsResultCard from "./components/AtsResultCard";
import InputBox from "./components/InputBox";
import KewordMatchPersentage from "./components/KewordMatchPersentage";
import TextResult from "./components/textResult";
import Header from "./components/Header";
import Download from "./components/Download";

const Ats = ({ dark }) => {
  return (
    <div
      className="
      min-h-screen
      px-5
      py-40
      bg-(--bg-primary)
      text-(--text-primary)
      "
    >
      {/* Header */}
      <Header dark={dark} />
      {/* Upload */}

      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <FileUploader dark={dark} />
        <InputBox />
      </section>

      {/* Result */}

      <section className="max-w-6xl mx-auto mt-14">
        <h2 className="text-3xl font-bold mb-8">Analysis Result</h2>
        <KewordMatchPersentage dark={dark} />
        <TextResult dark={dark} />
      </section>
      <Download dark={dark} />
    </div>
  );
};

export default Ats;
