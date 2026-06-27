import React from "react";
import Section from "./Section";
import Input from "./Input";
import { useState } from "react";
const addProject = () => {
  setProjects([
    ...projects,
    {
      name: "",
      tech: "",
      description: "",
    },
  ]);
};

const addExperience = () => {
  setExperience([
    ...experience,
    {
      company: "",
      role: "",
      description: "",
    },
  ]);
};

const addEducation = () => {
  setEducation([
    ...education,
    {
      degree: "",
      college: "",
      year: "",
      cgpa: "",
    },
  ]);
};

const addCertifications = () => {
  setCertifications([
    ...certifications,
    {
      name: "",
      organization: "",
      date: "",
      credentialId: "",
      url: "",
    },
  ]);
};

const addAchievement = () => {
  setAchievement([
    ...achievement,
    {
      title: "",
      description: "",
      date: "",
    },
  ]);
};
const addLanguage = () => {
  setLanguage([
    ...language,
    {
      name: "",
      level: "",
    },
  ]);
};
const FormSection = ({ fields }) => {
  const [projects, setProjects] = useState([
    {
      name: "",
      tech: "",
      description: "",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      company: "",
      role: "",
      description: "",
    },
  ]);

  const [education, setEducation] = useState([
    {
      degree: "",
      college: "",
      year: "",
      cgpa: "",
    },
  ]);
  const [certifications, setCertifications] = useState([
    {
      name: "",
      organization: "",
      date: "",
      credentialId: "",
      url: "",
    },
  ]);

  const [achievement, setAchievement] = useState([
    {
      title: "",
      description: "",
      date: "",
    },
  ]);
  const [language, setLanguage] = useState([
    {
      name: "",
      level: "",
    },
  ]);

  return (
    <div className="space-y-6">
      {fields.Personal && (
        <Section title="Personal Details">
          <Input placeholder="Full Name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone" />
          <Input placeholder="Location" />
          <Input placeholder="Github" />
          <Input placeholder="LinkedIn" />
        </Section>
      )}

      {fields.Summary && (
        <Section title="Summary">
          <textarea
            placeholder="Write summary"
            className="
w-full
p-3
border
rounded-lg
bg-(--bg-primary)
text-(--text-primary)
"
          />
        </Section>
      )}

      {fields.Skills && (
        <Section title="Skills">
          <Input placeholder="React Javascript Node" />

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

      {fields.Projects && (
        <Section title="Projects">
          {projects.map((item, index) => (
            <div key={index} className="space-y-3">
              <Input placeholder="Project Name" />

              <Input placeholder="Technology" />

              <textarea
                placeholder="Description"
                className="
w-full
p-3
border
rounded-lg
bg-(--bg-primary)
"
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

      {fields.Experience && (
        <Section title="Experience">
          {experience.map((item, index) => (
            <div key={index} className="space-y-3">
              <Input placeholder="Company" />

              <Input placeholder="Role" />

              <textarea
                placeholder="Description"
                className="
w-full
p-3
border
rounded-lg
bg-(--bg-primary)
"
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

      {fields.Education && (
        <Section title="Education">
          {education.map((item, index) => (
            <div key={index} className="space-y-3">
              <Input placeholder="Degree" />
              <Input placeholder="College" />
              <Input placeholder="Year" />
              <Input placeholder="CGPA" />
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
      {fields.Certifications && (
        <Section title="Certifications">
          {certifications.map((v, i) => {
            return (
              <div key={i} className="space-y-3">
                <Input placeholder="Name" />

                <Input placeholder="Organization" />

                <Input placeholder="Date" />

                <Input placeholder=" credentialId" />
                <Input placeholder=" url" />
              </div>
            );
          })}
          <button
            onClick={addCertifications}
            className="
            bg-blue-600 text-white
            px-5 py-3 rounded-xl
            "
          >
            + Add Certification
          </button>
        </Section>
      )}
      {fields.Achievements && (
        <Section title="Achievements">
          {achievement.map((v, i) => {
            return (
              <div key={i} className="space-y-3">
                <Input placeholder="Title" />

                <Input placeholder="Description" />

                <Input placeholder="Date" />
              </div>
            );
          })}
          <button
            onClick={addAchievement}
            className="
            bg-blue-600 text-white
            px-5 py-3 rounded-xl
            "
          >
            + Add Education
          </button>
        </Section>
      )}

      {fields.Languages && (
        <Section title="Language">
          {language.map((v, i) => {
            return (
              <div key={i} className="space-y-3">
                <Input placeholder="Name" />
                <Input placeholder="Level" />
              </div>
            );
          })}
          <button
            onClick={addLanguage}
            className="
            bg-blue-600 text-white
            px-5 py-3 rounded-xl
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
