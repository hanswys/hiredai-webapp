import React from 'react';
import { FileText, Briefcase, Award, Settings } from 'lucide-react';

interface SidebarProps {
  activeTab: 'resume' | 'cover-letter' | 'linkedin';
  onTabChange: (tab: 'resume' | 'cover-letter' | 'linkedin') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { icon: FileText, label: 'Resume Builder', id: 'resume' as const },
    { icon: Briefcase, label: 'Cover Letter', id: 'cover-letter' as const },
    { icon: Award, label: 'LinkedIn Profile', id: 'linkedin' as const },
    { icon: Settings, label: 'Settings', id: 'settings' as const }
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-8">
        <FileText className="w-8 h-8 text-blue-600" />
        <h1 className="text-xl font-bold">ResumeAI</h1>
      </div>
      
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => ['resume', 'cover-letter', 'linkedin'].includes(item.id) && onTabChange(item.id as 'resume' | 'cover-letter' | 'linkedin')}
            className={`flex items-center gap-3 w-full p-3 rounded-lg text-left mb-2 transition-colors
              ${activeTab === item.id
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;