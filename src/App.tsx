import React, { useState } from 'react';
import { FileText, Briefcase, Award, Settings } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ResumeBuilder from './components/ResumeBuilder';
import CoverLetterGenerator from './components/CoverLetterGenerator';
import LinkedInOptimizer from './components/LinkedInOptimizer';

function App() {
  const [activeTab, setActiveTab] = useState<'resume' | 'cover-letter' | 'linkedin'>('resume');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 p-8">
        {activeTab === 'resume' ? <ResumeBuilder /> : 
         activeTab === 'cover-letter' ? <CoverLetterGenerator /> : 
         <LinkedInOptimizer />}
      </main>
    </div>
  );
}

export default App;