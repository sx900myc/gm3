import React from 'react';
import { Zap, Twitter, Facebook, Youtube, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-6 w-6 text-nexus-accent" />
              <span className="text-xl font-bold text-white">
                Nexus<span className="text-nexus-accent">Tool</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              The #1 comprehensive solution for mobile device servicing. Engineered for professionals, designed for everyone.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-nexus-accent">Features</a></li>
              <li><a href="#" className="hover:text-nexus-accent">Supported Models</a></li>
              <li><a href="#" className="hover:text-nexus-accent">Pricing</a></li>
              <li><a href="#" className="hover:text-nexus-accent">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-nexus-accent">Help Center</a></li>
              <li><a href="#" className="hover:text-nexus-accent">Drivers</a></li>
              <li><a href="#" className="hover:text-nexus-accent">Contact Us</a></li>
              <li><a href="#" className="hover:text-nexus-accent">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-nexus-accent">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-nexus-accent">Terms of Service</a></li>
              <li><a href="#" className="hover:text-nexus-accent">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm mb-4 md:mb-0">
            © 2025 NexusTool Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-nexus-accent transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-slate-500 hover:text-nexus-accent transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-slate-500 hover:text-nexus-accent transition-colors"><Youtube className="h-5 w-5" /></a>
            <a href="#" className="text-slate-500 hover:text-nexus-accent transition-colors"><Github className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;