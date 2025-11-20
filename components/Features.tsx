import React from 'react';
import { Unlock, Shield, Activity, Cpu, RefreshCw, Globe } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Network Factory Reset",
    description: "Reset network settings and remove carrier locks instantly for thousands of supported models safely.",
    icon: <Unlock className="h-6 w-6" />,
  },
  {
    title: "FRP Bypass",
    description: "Remove Google Factory Reset Protection quickly without compromising device integrity or data.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Firmware Flashing",
    description: "Advanced flashing capabilities with automatic compatibility checks to prevent bricking devices.",
    icon: <RefreshCw className="h-6 w-6" />,
  },
  {
    title: "Hardware Diagnostics",
    description: "Read detailed hardware info including battery health, sensor status, and component verification.",
    icon: <Activity className="h-6 w-6" />,
  },
  {
    title: "One-Click Root",
    description: "Gain full administrative access to your device file system with our proprietary rooting engine.",
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    title: "Global Carrier Support",
    description: "Works with major carriers worldwide. Our database is updated daily with new operational profiles.",
    icon: <Globe className="h-6 w-6" />,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-nexus-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-nexus-accent font-bold tracking-wider uppercase text-xs mb-3">Powerful Utility</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Professional Features</h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Designed for repair shops and advanced users who need reliable tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#111623] p-8 rounded-xl border border-slate-800/60 hover:border-nexus-accent/40 transition-all duration-300 group"
            >
              <div className="bg-slate-800/50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-nexus-accent group-hover:bg-nexus-accent group-hover:text-white transition-colors duration-300 shadow-lg shadow-transparent group-hover:shadow-nexus-accent/20">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-nexus-accent transition-colors">{feature.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;