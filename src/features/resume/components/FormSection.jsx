import React, { useEffect, useState } from "react";
import Section from "./Section";
import Input from "./Input";

const FormSection = ({ fields, sendData }) => {
  const [resumeData, setResumeData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      location: "",
      github: "",
      linkedin: "",
    },

    summary: "",

    skills: [],

    projects: [
      {
        name: "",
        tech: "",
        description: "",
      },
    ],

    experience: [
      {
        company: "",
        role: "",
        description: "",
      },
    ],

    education: [
      {
        degree: "",
        college: "",
        year: "",
        cgpa: "",
      },
    ],

    certifications: [
      {
        name: "",
        organization: "",
        date: "",
        credentialId: "",
        url: "",
      },
    ],

    achievements: [
      {
        title: "",
        description: "",
        date: "",
      },
    ],

    languages: [
      {
        name: "",
        level: "",
      },
    ],
  });

  const handleChange = (section, field, value) => {
    setResumeData((prev) => ({
      ...prev,

      [section]: {
        ...prev[section],

        [field]: value,
      },
    }));
  };

  const addProject = () => {
    setResumeData((prev) => ({
      ...prev,

      projects: [
        ...prev.projects,
        {
          name: "",
          tech: "",
          description: "",
        },
      ],
    }));
  };

  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,

      experience: [
        ...prev.experience,
        {
          company: "",
          role: "",
          description: "",
        },
      ],
    }));
  };

  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,

      education: [
        ...prev.education,
        {
          degree: "",
          college: "",
          year: "",
          cgpa: "",
        },
      ],
    }));
  };

  const addCertification = () => {
    setResumeData((prev) => ({
      ...prev,

      certifications: [
        ...prev.certifications,
        {
          name: "",
          organization: "",
          date: "",
          credentialId: "",
          url: "",
        },
      ],
    }));
  };

  const addAchievement = () => {
    setResumeData((prev) => ({
      ...prev,

      achievements: [
        ...prev.achievements,
        {
          title: "",
          description: "",
          date: "",
        },
      ],
    }));
  };

  const addLanguage = () => {
    setResumeData((prev) => ({
      ...prev,

      languages: [
        ...prev.languages,
        {
          name: "",
          level: "",
        },
      ],
    }));
  };

  const addSkill = () => {
    setResumeData((prev) => ({
      ...prev,

      skills: [...prev.skills, ""],
    }));
  };

  useEffect(() => {
    sendData(resumeData);
  }, [resumeData]);

  return (
    <div className="space-y-6">
      {/* PERSONAL */}

      {fields.Personal && (
        <Section title="Personal Details">
          <Input
            placeholder="Full Name"
            value={resumeData.personal.name}
            onChange={(e) => handleChange("personal", "name", e.target.value)}
          />

          <Input
            placeholder="Email"
            value={resumeData.personal.email}
            onChange={(e) => handleChange("personal", "email", e.target.value)}
          />

          <Input
            placeholder="Phone"
            value={resumeData.personal.phone}
            onChange={(e) => handleChange("personal", "phone", e.target.value)}
          />

          <Input
            placeholder="Location"
            value={resumeData.personal.location}
            onChange={(e) =>
              handleChange("personal", "location", e.target.value)
            }
          />
        </Section>
      )}

      {/* SUMMARY */}

      {fields.Summary && (
        <Section title="Summary">
          <textarea
            value={resumeData.summary}
            onChange={(e) => {
              setResumeData((prev) => ({
                ...prev,

                summary: e.target.value,
              }));
            }}
            className="w-full p-3 border rounded-lg"
            placeholder="Write summary"
          />
        </Section>
      )}

      {/* SKILLS */}

      {fields.Skills && (
        <Section title="Skills">
          {resumeData.skills.map((skill, index) => (
            <Input
              key={index}
              placeholder="React Javascript Node"
              value={skill}
              onChange={(e) => {
                const copy = [...resumeData.skills];

                copy[index] = e.target.value;

                setResumeData((prev) => ({
                  ...prev,

                  skills: copy,
                }));
              }}
            />
          ))}

          <button
            onClick={addSkill}
            className="
bg-blue-600
text-white
px-5
py-3
rounded-xl
"
          >
            + Add Skill
          </button>

          <button
            className="
bg-purple-600
text-white
px-5
py-3
rounded-xl
"
          >
            Suggest Skills
          </button>
        </Section>
      )}

      {/* PROJECTS */}

      {fields.Projects && (
        <Section title="Projects">
          {resumeData.projects.map((item, index) => (
            <div key={index} className="space-y-3">
              <Input
                placeholder="Project Name"
                value={item.name}
                onChange={(e) => {
                  const copy = [...resumeData.projects];

                  copy[index].name = e.target.value;

                  setResumeData((prev) => ({
                    ...prev,
                    projects: copy,
                  }));
                }}
              />

              <Input
                placeholder="Technology"
                value={item.tech}
                onChange={(e) => {
                  const copy = [...resumeData.projects];

                  copy[index].tech = e.target.value;

                  setResumeData((prev) => ({
                    ...prev,
                    projects: copy,
                  }));
                }}
              />

              <textarea
                placeholder="Description"
                value={item.description}
                className="
          w-full
          p-3
          border
          rounded-lg
          "
                onChange={(e) => {
                  const copy = [...resumeData.projects];

                  copy[index].description = e.target.value;

                  setResumeData((prev) => ({
                    ...prev,
                    projects: copy,
                  }));
                }}
              />
            </div>
          ))}

          <button
            onClick={addProject}
            className="
      bg-blue-600
      text-white
      px-5
      py-3
      rounded-xl
      "
          >
            + Add Project
          </button>
        </Section>
      )}
      {/* EXPERIENCE */}

      {fields.Experience && (
        <Section title="Experience">
          {resumeData.experience.map((item, index) => (
            <div key={index}>
              <Input
                placeholder="Company"
                onChange={(e) => {
                  const copy = [...resumeData.experience];

                  copy[index].experience = e.target.value;

                  setResumeData((prev) => ({
                    ...prev,
                    experience: copy,
                  }));
                }}
              />

              <Input placeholder="Role" />

              <textarea
                onChange={(e) => {
                  const copy = [...resumeData.projects];

                  copy[index].description = e.target.value;

                  setResumeData((prev) => ({
                    ...prev,
                    projects: copy,
                  }));
                }}
                placeholder="Description"
                className="w-full p-3 border"
              />
            </div>
          ))}

          <button
            onClick={addExperience}
            className="
bg-blue-600
text-white
px-5
py-3
rounded-xl
"
          >
            + Add Experience
          </button>
        </Section>
      )}

      {/* EDUCATION */}

      {fields.Education && (
        <Section title="Education">
          {resumeData.education.map((item, index) => (
            <div key={index}>
              <Input
                placeholder="Degree"
                onChange={(e) => {
                  const copy = [...resumeData.education];

                  copy[index].education = e.target.value;

                  setResumeData((prev) => ({
                    ...prev,
                    education: copy,
                  }));
                }}
              />

              <Input
                placeholder="College"
                onChange={(e) => {
                  const copy = [...resumeData.education];

                  copy[index].education = e.target.value;

                  setResumeData((prev) => ({
                    ...prev,
                    education: copy,
                  }));
                }}
              />

              <Input
                placeholder="Year"
                onChange={(e) => {
                  const copy = [...resumeData.education];

                  copy[index].education = e.target.value;

                  setResumeData((prev) => ({
                    ...prev,
                    education: copy,
                  }));
                }}
              />

              <Input
                placeholder="CGPA"
                onChange={(e) => {
                  const copy = [...resumeData.education];

                  copy[index].education = e.target.value;

                  setResumeData((prev) => ({
                    ...prev,
                    education: copy,
                  }));
                }}
              />
            </div>
          ))}

          <button
            onClick={addEducation}
            className="
bg-blue-600
text-white
px-5
py-3
rounded-xl
"
          >
            + Add Education
          </button>
        </Section>
      )}

      {/* CERTIFICATIONS */}

      {fields.Certifications && (
        <Section title="Certifications">
          <button
            onClick={addCertification}
            className="
bg-blue-600
text-white
px-5
py-3
rounded-xl
"
          >
            + Add Certification
          </button>
        </Section>
      )}

      {/* ACHIEVEMENTS */}

      {fields.Achievements && (
        <Section title="Achievements">
          <button
            onClick={addAchievement}
            className="
bg-blue-600
text-white
px-5
py-3
rounded-xl
"
          >
            + Add Achievement
          </button>
        </Section>
      )}

      {/* LANGUAGES */}

      {fields.Languages && (
        <Section title="Languages">
          <button
            onClick={addLanguage}
            className="
bg-blue-600
text-white
px-5
py-3
rounded-xl
"
          >
            + Add Language
          </button>
        </Section>
      )}
    </div>
  );
};

export default FormSection;
