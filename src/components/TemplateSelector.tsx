import React from 'react';
import { Layout } from 'lucide-react';

interface TemplateSelectorProps {
  selectedTemplate: string;
  onSelect: (template: string) => void;
}

const templates = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and professional design with a modern touch',
    preview: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=200&h=280'
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional resume format, perfect for formal applications',
    preview: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=200&h=280'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Stand out with a unique and creative layout',
    preview: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=200&h=280'
  }
];

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ selectedTemplate, onSelect }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose a Template</h3>
      <div className="grid grid-cols-3 gap-6">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelect(template.id)}
            className={`relative group rounded-lg overflow-hidden border-2 transition-all ${
              selectedTemplate === template.id
                ? 'border-blue-500 ring-2 ring-blue-200'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="aspect-[3/4] relative">
              <img
                src={template.preview}
                alt={template.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
            </div>
            <div className="p-4 bg-white">
              <div className="flex items-center gap-2">
                <Layout className="w-4 h-4 text-gray-500" />
                <h4 className="font-medium text-gray-900">{template.name}</h4>
              </div>
              <p className="text-sm text-gray-500 mt-1">{template.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;