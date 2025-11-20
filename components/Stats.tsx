import React from 'react';
import { Smartphone, Globe, UserCheck, Clock } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-12 border-y border-slate-800 bg-[#0F131E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-slate-800/50">
          <div className="flex flex-col items-center p-4 group">
            <Smartphone className="w-8 h-8 text-slate-600 group-hover:text-nexus-accent mb-4 transition-colors" />
            <div className="text-4xl font-bold text-white mb-1">8,542+</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Supported Models</div>
          </div>
          <div className="flex flex-col items-center p-4 group">
            <UserCheck className="w-8 h-8 text-slate-600 group-hover:text-nexus-accent mb-4 transition-colors" />
            <div className="text-4xl font-bold text-nexus-accent mb-1">2.4M+</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Happy Users</div>
          </div>
          <div className="flex flex-col items-center p-4 group">
            <Globe className="w-8 h-8 text-slate-600 group-hover:text-nexus-accent mb-4 transition-colors" />
            <div className="text-4xl font-bold text-white mb-1">120+</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Countries</div>
          </div>
          <div className="flex flex-col items-center p-4 group">
            <Clock className="w-8 h-8 text-slate-600 group-hover:text-nexus-accent mb-4 transition-colors" />
            <div className="text-4xl font-bold text-nexus-accent mb-1">24/7</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Live Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;