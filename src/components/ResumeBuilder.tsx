import React, { useState } from 'react';
import { Download, Upload, FileText, Eye } from 'lucide-react';
import ResumePreview from './ResumePreview';
import TemplateSelector from './TemplateSelector';

export type FormData = {
  jobTitle: string;
  industry: string;
  experienceLevel: string;
  skills: string;
  workHistory: {
    company: string;
    position: string;
    duration: string;
    description: string;
  }[];
  education: {
    school: string;
    degree: string;
    year: string;
  }[];
  selectedTemplate: string;
};

const ResumeBuilder = () => {
  const [formData, setFormData] = useState<FormData>({
    jobTitle: '',
    industry: '',
    experienceLevel: '',
    skills: '',
    workHistory: [{ company: '', position: '', duration: '', description: '' }],
    education: [{ school: '', degree: '', year: '' }],
    selectedTemplate: 'modern'
  });

  const [showPreview, setShowPreview] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    try {
      // Simulate AI generation delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // TODO: Integrate with actual AI service
      console.log('Generated resume with:', formData);
      setShowPreview(true);
    } catch (error) {
      console.error('Error generating resume:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addWorkHistory = () => {
    setFormData(prev => ({
      ...prev,
      workHistory: [...prev.workHistory, { company: '', position: '', duration: '', description: '' }]
    }));
  };

  const updateWorkHistory = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      workHistory: prev.workHistory.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, { school: '', degree: '', year: '' }]
    }));
  };

  const updateEducation = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Resume Builder</h2>
          <p className="text-gray-600 mt-1">Create your professional resume with AI assistance</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Eye className="w-4 h-4" />
            {showPreview ? 'Edit' : 'Preview'}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Upload className="w-4 h-4" />
            Import
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {showPreview ? (
        <ResumePreview formData={formData} />
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <TemplateSelector
            selectedTemplate={formData.selectedTemplate}
            onSelect={(template) => setFormData(prev => ({ ...prev, selectedTemplate: template }))}
          />
          
          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g. Senior Software Engineer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g. Technology"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience Level
              </label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select experience level</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
                <option value="executive">Executive Level</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Key Skills
              </label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your key skills, separated by commas"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-medium text-gray-700">Work History</label>
                <button
                  type="button"
                  onClick={addWorkHistory}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  + Add More
                </button>
              </div>
              {formData.workHistory.map((work, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 mb-4 p-4 border border-gray-200 rounded-lg">
                  <div>
                    <input
                      type="text"
                      value={work.company}
                      onChange={(e) => updateWorkHistory(index, 'company', e.target.value)}
                      placeholder="Company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={work.position}
                      onChange={(e) => updateWorkHistory(index, 'position', e.target.value)}
                      placeholder="Position"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={work.duration}
                      onChange={(e) => updateWorkHistory(index, 'duration', e.target.value)}
                      placeholder="Duration (e.g., 2020-2023)"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="col-span-2">
                    <textarea
                      value={work.description}
                      onChange={(e) => updateWorkHistory(index, 'description', e.target.value)}
                      placeholder="Job description and achievements"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-medium text-gray-700">Education</label>
                <button
                  type="button"
                  onClick={addEducation}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  + Add More
                </button>
              </div>
              {formData.education.map((edu, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 mb-4 p-4 border border-gray-200 rounded-lg">
                  <div>
                    <input
                      type="text"
                      value={edu.school}
                      onChange={(e) => updateEducation(index, 'school', e.target.value)}
                      placeholder="School/University"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                      placeholder="Degree"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={edu.year}
                      onChange={(e) => updateEducation(index, 'year', e.target.value)}
                      placeholder="Year"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isGenerating}
                className={`px-6 py-2 bg-blue-600 text-white rounded-lg transition-colors ${
                  isGenerating ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isGenerating ? 'Generating...' : 'Generate Resume'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;