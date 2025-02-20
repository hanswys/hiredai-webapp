import React from 'react';
import type { FormData } from './ResumeBuilder';
import { modernTemplate, classicTemplate, creativeTemplate } from '../templates';

interface ResumePreviewProps {
  formData: FormData;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ formData }) => {
  const getTemplateContent = () => {
    switch (formData.selectedTemplate) {
      case 'modern':
        return modernTemplate(formData);
      case 'classic':
        return classicTemplate(formData);
      case 'creative':
        return creativeTemplate(formData);
      default:
        return modernTemplate(formData);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="max-w-[21cm] mx-auto bg-white">
        {getTemplateContent()}
      </div>
    </div>
  );
};

export default ResumePreview;