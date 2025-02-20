import React, { useState } from 'react';
import { FileText, Download, Eye } from 'lucide-react';

interface CoverLetterData {
  jobTitle: string;
  company: string;
  hiringManager: string;
  keyPoints: string[];
  tone: 'professional' | 'friendly' | 'enthusiastic';
  customization: string;
}

const CoverLetterGenerator: React.FC = () => {
  const [formData, setFormData] = useState<CoverLetterData>({
    jobTitle: '',
    company: '',
    hiringManager: '',
    keyPoints: [''],
    tone: 'professional',
    customization: ''
  });

  const [generatedLetter, setGeneratedLetter] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      // Simulate AI generation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const letter = `Dear ${formData.hiringManager || 'Hiring Manager'},

I am writing to express my strong interest in the ${formData.jobTitle} position at ${formData.company}. With my background and expertise, I am confident in my ability to contribute significantly to your team.

${formData.keyPoints.map(point => `\n• ${point}`).join('')}

${formData.customization}

I am excited about the opportunity to join ${formData.company} and would welcome the chance to discuss how I can contribute to your team's success.

Best regards,
[Your Name]`;

      setGeneratedLetter(letter);
      setShowPreview(true);
    } catch (error) {
      console.error('Error generating cover letter:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const addKeyPoint = () => {
    setFormData(prev => ({
      ...prev,
      keyPoints: [...prev.keyPoints, '']
    }));
  };

  const updateKeyPoint = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      keyPoints: prev.keyPoints.map((point, i) => i === index ? value : point)
    }));
  };

  const removeKeyPoint = (index: number) => {
    setFormData(prev => ({
      ...prev,
      keyPoints: prev.keyPoints.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Cover Letter Generator</h2>
          <p className="text-gray-600 mt-1">Create a personalized cover letter with AI assistance</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Eye className="w-4 h-4" />
            {showPreview ? 'Edit' : 'Preview'}
          </button>
          {generatedLetter && (
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Download className="w-4 h-4" />
              Download
            </button>
          )}
        </div>
      </div>

      {showPreview && generatedLetter ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="max-w-[21cm] mx-auto">
            <div className="prose prose-sm max-w-none">
              {generatedLetter.split('\n').map((paragraph, index) => (
                <p key={index} className="whitespace-pre-wrap mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g. Senior Software Engineer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g. Acme Corp"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hiring Manager's Name (optional)
              </label>
              <input
                type="text"
                value={formData.hiringManager}
                onChange={(e) => setFormData(prev => ({ ...prev, hiringManager: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g. John Smith"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-medium text-gray-700">Key Points</label>
                <button
                  type="button"
                  onClick={addKeyPoint}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  + Add Point
                </button>
              </div>
              <div className="space-y-3">
                {formData.keyPoints.map((point, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => updateKeyPoint(index, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Add a key achievement or qualification"
                    />
                    {formData.keyPoints.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeKeyPoint(index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tone
              </label>
              <select
                value={formData.tone}
                onChange={(e) => setFormData(prev => ({ ...prev, tone: e.target.value as CoverLetterData['tone'] }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="professional">Professional</option>
                <option value="friendly">Friendly</option>
                <option value="enthusiastic">Enthusiastic</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Customization
              </label>
              <textarea
                value={formData.customization}
                onChange={(e) => setFormData(prev => ({ ...prev, customization: e.target.value }))}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Add any specific points you'd like to emphasize or company research you'd like to include"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isGenerating}
                className={`px-6 py-2 bg-blue-600 text-white rounded-lg transition-colors ${
                  isGenerating ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isGenerating ? 'Generating...' : 'Generate Cover Letter'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CoverLetterGenerator;