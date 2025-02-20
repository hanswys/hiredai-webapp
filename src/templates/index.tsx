import React from 'react';
import type { FormData } from '../components/ResumeBuilder';

export const modernTemplate = (data: FormData) => (
  <div className="p-8 max-w-[21cm] mx-auto space-y-6">
    <header className="border-b pb-6">
      <h1 className="text-3xl font-bold text-gray-900">{data.jobTitle || 'Your Name'}</h1>
      <p className="text-lg text-gray-600 mt-2">{data.industry} • {data.experienceLevel}</p>
    </header>

    <section>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Professional Summary</h2>
      <p className="text-gray-700">
        Experienced {data.jobTitle} with expertise in {data.skills}.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Work Experience</h2>
      <div className="space-y-6">
        {data.workHistory.map((work, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <h3 className="font-medium text-gray-900">{work.position}</h3>
            <p className="text-gray-600">{work.company} • {work.duration}</p>
            <p className="mt-2 text-gray-700">{work.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
      <div className="space-y-4">
        {data.education.map((edu, index) => (
          <div key={index}>
            <h3 className="font-medium text-gray-900">{edu.degree}</h3>
            <p className="text-gray-600">{edu.school} • {edu.year}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {data.skills.split(',').map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {skill.trim()}
          </span>
        ))}
      </div>
    </section>
  </div>
);

export const classicTemplate = (data: FormData) => (
  <div className="p-8 max-w-[21cm] mx-auto space-y-6">
    <header className="text-center border-b pb-6">
      <h1 className="text-2xl font-serif font-bold text-gray-900">{data.jobTitle || 'Your Name'}</h1>
      <p className="text-gray-600 mt-2">{data.industry} • {data.experienceLevel}</p>
    </header>

    <section className="grid grid-cols-[1fr_2fr] gap-8">
      <div className="space-y-6">
        <div>
          <h2 className="font-serif text-lg font-semibold text-gray-900 mb-3">Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            {data.skills.split(',').map((skill, index) => (
              <li key={index} className="text-gray-700">{skill.trim()}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-gray-900 mb-3">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-medium text-gray-900">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school}</p>
              <p className="text-gray-500">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="font-serif text-lg font-semibold text-gray-900 mb-4">Professional Experience</h2>
          {data.workHistory.map((work, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-medium text-gray-900">{work.position}</h3>
              <p className="text-gray-600">{work.company}</p>
              <p className="text-gray-500 mb-2">{work.duration}</p>
              <p className="text-gray-700">{work.description}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  </div>
);

export const creativeTemplate = (data: FormData) => (
  <div className="p-8 max-w-[21cm] mx-auto">
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
      <h1 className="text-4xl font-bold">{data.jobTitle || 'Your Name'}</h1>
      <p className="text-xl mt-2 opacity-90">{data.industry} • {data.experienceLevel}</p>
    </header>

    <div className="mt-8 grid grid-cols-[1fr_2px_2fr] gap-8">
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.split(',').map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-medium text-gray-900">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school}</p>
              <p className="text-purple-600">{edu.year}</p>
            </div>
          ))}
        </section>
      </div>

      <div className="bg-gray-200" />

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Work Experience</h2>
          {data.workHistory.map((work, index) => (
            <div key={index} className="mb-8 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-600 before:rounded-full">
              <h3 className="font-medium text-gray-900">{work.position}</h3>
              <p className="text-purple-600">{work.company}</p>
              <p className="text-gray-500 mb-2">{work.duration}</p>
              <p className="text-gray-700">{work.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  </div>
);