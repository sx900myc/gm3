import React from 'react';
import { Download, ShieldCheck, Smartphone, Search, Terminal, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-grid-pattern bg-grid">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow z-0 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-nexus-accent/30 bg-nexus-accent/5 text-nexus-accent text-xs font-medium mb-8 animate-pulse">
            <span className="flex h-2 w-2 rounded-full bg-nexus-accent mr-2"></span>
            v4.2.0 Update Available - New Support for MTK & Qualcomm
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Professional Service Software <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-accent to-blue-500">For Mobile Devices</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 mb-8">
          The ultimate all-in-one solution for phone repair, debugging, and firmware management. Supports Samsung, Xiaomi, Huawei, Oppo, Vivo and 5000+ other models.
        </p>

        {/* Search Bar */}
        <div className="max-w-lg mx-auto mb-12 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-500" />
            </div>
            <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-4 border border-slate-700 rounded-lg leading-5 bg-nexus-card/80 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-nexus-accent focus:border-nexus-accent sm:text-sm shadow-lg backdrop-blur-sm transition-all"
                placeholder="Search supported models (e.g. Galaxy S23, Redmi Note 12)..."
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <span className="text-slate-600 text-xs">8,542 Models</span>
            </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
          <button className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-nexus-accent hover:bg-nexus-accentHover transition-all duration-200 shadow-[0_0_20px_rgba(0,180,216,0.4)] hover:shadow-[0_0_30px_rgba(0,180,216,0.6)] hover:-translate-y-1 group">
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Tool
          </button>
          <button className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-slate-300 bg-nexus-card border border-slate-700 hover:bg-slate-800 hover:text-white transition-all duration-200 hover:border-nexus-accent/50">
            View Features
          </button>
        </div>

        {/* Software Preview Placeholder */}
        <div className="relative mx-auto max-w-6xl rounded-t-xl border border-slate-700/50 bg-nexus-dark shadow-2xl overflow-hidden ring-1 ring-white/10">
             {/* Window Title Bar */}
             <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#0F131E]">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-xs text-slate-500 font-mono ml-2">NexusTool v4.2.0 - Connected: SM-S918B</span>
                </div>
                <div className="text-xs text-nexus-accent flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-nexus-accent animate-pulse"></span>
                    SERVER ONLINE
                </div>
             </div>

             {/* Main Interface Area */}
             <div className="flex flex-col md:flex-row h-[400px] md:h-[500px] bg-[#0B0F19]">
                {/* Sidebar */}
                <div className="w-full md:w-64 border-r border-slate-800/50 bg-[#111623] p-4 hidden md:flex flex-col gap-2">
                    <div className="p-3 bg-nexus-accent/10 rounded border border-nexus-accent/20 mb-4">
                         <div className="text-xs text-slate-400 uppercase mb-1">Selected Device</div>
                         <div className="font-bold text-white">Samsung Galaxy S23 Ultra</div>
                         <div className="text-xs text-nexus-accent mt-1">ADB Mode</div>
                    </div>
                    {[
                        {icon: <ShieldCheck size={16} />, label: "General Repair"},
                        {icon: <Terminal size={16} />, label: "Firmware Flash"},
                        {icon: <Cpu size={16} />, label: "Network Unlock"},
                        {icon: <Smartphone size={16} />, label: "FRP Reset"},
                    ].map((item, i) => (
                        <div key={i} className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-colors ${i === 2 ? 'bg-nexus-accent text-white shadow-lg shadow-nexus-accent/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                            {item.icon}
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 bg-[#0B0F19] relative overflow-hidden">
                     <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-4 rounded bg-[#151B2B] border border-slate-800">
                             <div className="text-xs text-slate-500 mb-1">IMEI Status</div>
                             <div className="text-green-400 font-mono text-sm">OK - Clean</div>
                        </div>
                        <div className="p-4 rounded bg-[#151B2B] border border-slate-800">
                             <div className="text-xs text-slate-500 mb-1">Knox Status</div>
                             <div className="text-red-400 font-mono text-sm">Tripped (0x1)</div>
                        </div>
                     </div>
                     
                     <div className="border border-slate-800 rounded bg-[#080A10] p-4 font-mono text-xs text-slate-300 h-64 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-2">
                            <span className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-400">LOG OUTPUT</span>
                        </div>
                        <p className="text-green-500"> > Connecting to server... OK</p>
                        <p className="text-blue-400"> > Handshake established (Protocol v2.1)</p>
                        <p> > Reading device information...</p>
                        <p> > Model: SM-S918B</p>
                        <p> > Android Version: 14.0</p>
                        <p> > Security Patch: 2024-02-01</p>
                        <p className="text-yellow-500"> > Checking root status... ROOTED</p>
                        <p> > Initializing Network Unlock sequence...</p>
                        <p> > Calculation: <span className="animate-pulse">Processing...</span></p>
                        <div className="mt-2 h-1 w-full bg-slate-800 rounded overflow-hidden">
                            <div className="h-full bg-nexus-accent w-2/3"></div>
                        </div>
                     </div>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;