import React, { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import FileUploader from "../components/FileUploader";
import AtsResultCard from "../components/AtsResultCard";
import InputBox from "../components/InputBox";
import KewordMatchPersentage from "../components/KewordMatchPersentage";
import TextResult from "../components/textResult";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import ProgressLoader from "../../../components/common/loaders/ProgressLoader";

const Ats = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDes, setJobDes] = useState("");
  const [loading, setLoading] = useState(false);
  const [atsData, setAtsData] = useState({
    atsScore: 100,
    matchLevel: "Excellent Match",
    matchScore: [
      { title: "Keyword", score: 100 },

      { title: "Skills", score: 100 },

      { title: "Formatting", score: 100 },

      { title: "Experience", score: 100 },

      { title: "Education", score: 100 },

      { title: "Projects", score: 100 },
    ],

    overallFeedback: "Placify",

    keywordsFound: ["Placify"],

    missingKeywords: ["Placify"],

    strengths: ["Placify"],

    improvements: ["Placify"],

    suggestedSkills: ["Placify"],

    atsFriendly: true,

    sectionScores: [
      { title: "Summary", score: 100 },
      { title: "Skills", score: 100 },
      { title: "Projects", score: 100 },
      { title: "Experience", score: 100 },
      { title: "Education", score: 100 },
      { title: "Format", score: 100 },
    ],
  });
  const handleSubmit = async () => {
    setLoading(true);
    if (!selectedFile || !jobDes) {
      return alert("Hey please fill entry");
    }
    const formData = new FormData();
    formData.append("resume", selectedFile);
    formData.append("jobDes", jobDes);

    try {
      const response = await axios.post("/api/v1/ai/ats", formData);
      let data = response.data.atsResult.content;
      data = JSON.parse(data);
      setAtsData(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

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
      <Header />
      {/* Upload */}
      {loading ? <ProgressLoader /> : ""}
      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* ===========file uploader section=========== */}
        <FileUploader setSelectedFile={setSelectedFile} />
        <InputBox
          setJobDes={setJobDes}
          jobDes={jobDes}
          handleSubmit={handleSubmit}
          selectedFile={selectedFile}
        />
      </section>
      {/* Result */}
      <section className="max-w-6xl mx-auto mt-14">
        <h2 className="text-3xl font-bold mb-8">Analysis Result</h2>
        <KewordMatchPersentage atsData={atsData} />
        <TextResult atsData={atsData} />
      </section>
      <Footer atsData={atsData} />
    </div>
  );
};

export default Ats;
