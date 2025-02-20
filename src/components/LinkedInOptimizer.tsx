import React, { useState } from 'react';
import { Award, Sparkles, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

interface ProfileData {
  headline: string;
  summary: string;
  skills: string[];
  experience: {
    title: string;
    company: string;
    description: string;
  }[];
  recommendations: {
    section: string;
    suggestions: string[];
    impact: 'high' | 'medium' | 'low';
  }[];
}

const LinkedInOptimizer: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    headline: '',
    summary: '',
    skills: [''],
    experience: [{ title: '', company: '', description: '' }],
    recommendations: []
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    try {
      // Simulate AI analysis
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Example recommendations
      const recommendations = [
        {
          section: 'Headline',
          suggestions: [
            'Add industry-specific keywords',
            'Highlight your unique value proposition',
            'Include your most impressive achievement'
          ],
          impact: 'high' as const
        },
        {
          section: 'Summary',
          suggestions: [
            'Start with a compelling hook',
            'Include quantifiable achievements',
            'Add relevant industry keywords'
          ],
          impact: 'high' as const
        },
        {
          section: 'Experience',
          suggestions: [
            'Use action verbs to start bullet points',
            'Include metrics and results',
            'Highlight leadership and collaboration'
          ],
          impact: 'medium' as const
        }
      ];

      setProfileData(prev => ({ ...prev, recommendations }));
      setScore(85);
    } catch (error) {
      console.error('Error analyzing profile:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const addSkill = () => {
    setProfileData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const updateSkill = (index: number, value: string) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }));
  };

  const addExperience = () => {
    setProfileData(prev => ({
      ...prev,
      experience: [...prev.experience, { title: '', company: '', description: '' }]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">LinkedIn Profile Optimizer</h2>
          <p className="text-gray-600 mt-1">Enhance your professional presence with AI-powered suggestions</p>
        </div>
        {score !== null && (
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg">
            <Award className="w-5 h-5" />
            <span className="font-medium">Profile Score: {score}%</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-6">
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Content</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Professional Headline
                </label>
                <input
                  type="text"
                  value={profileData.headline}
                  onChange={(e) => setProfileData(prev => ({ ...prev, headline: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g. Senior Software Engineer | AI Specialist | Tech Leader"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Summary
                </label>
                <textarea
                  value={profileData.summary}
                  onChange={(e) => setProfileData(prev => ({ ...prev, summary: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write a compelling summary that highlights your expertise and achievements..."
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-medium text-gray-700">Skills</label>
                  <button
                    type="button"
                    onClick={addSkill}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    + Add Skill
                  </button>
                </div>
                <div className="space-y-3">
                  {profileData.skills.map((skill, index) => (
                    <input
                      key={index}
                      type="text"
                      value={skill}
                      onChange={(e) => updateSkill(index, e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g. React.js, Project Management, Data Analysis"
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-medium text-gray-700">Experience</label>
                  <button
                    type="button"
                    onClick={addExperience}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    + Add Experience
                  </button>
                </div>
                <div className="space-y-6">
                  {profileData.experience.map((exp, index) => (
                    <div key={index} className="space-y-4 p-4 border border-gray-200 rounded-lg">
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => setProfileData(prev => ({
                          ...prev,
                          experience: prev.experience.map((item, i) => 
                            i === index ? { ...item, title: e.target.value } : item
                          )
                        }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Job Title"
                      />
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => setProfileData(prev => ({
                          ...prev,
                          experience: prev.experience.map((item, i) => 
                            i === index ? { ...item, company: e.target.value } : item
                          )
                        }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Company"
                      />
                      <textarea
                        value={exp.description}
                        onChange={(e) => setProfileData(prev => ({
                          ...prev,
                          experience: prev.experience.map((item, i) => 
                            i === index ? { ...item, description: e.target.value } : item
                          )
                        }))}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Describe your role and achievements..."
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className={`w-full px-6 py-2 bg-blue-600 text-white rounded-lg transition-colors ${
                  isAnalyzing ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Profile'}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {profileData.recommendations.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Optimization Suggestions
              </h3>
              <div className="space-y-6">
                {profileData.recommendations.map((rec, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-2">
                      {rec.impact === 'high' ? (
                        <Sparkles className="w-5 h-5 text-yellow-500" />
                      ) : rec.impact === 'medium' ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-blue-500" />
                      )}
                      <h4 className="font-medium text-gray-900">{rec.section}</h4>
                    </div>
                    <ul className="space-y-2">
                      {rec.suggestions.map((suggestion, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pro Tips</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                <span>Use industry-specific keywords to improve visibility</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                <span>Quantify achievements with metrics when possible</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                <span>Keep your profile regularly updated with recent accomplishments</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                <span>Engage with your network to increase profile visibility</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInOptimizer;