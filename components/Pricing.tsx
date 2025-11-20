import React from 'react';
import { Check, CreditCard } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'Start',
    price: 'Free',
    features: [
      'Read Device Info',
      'Driver Installation',
      'Limited Downloads (3/day)',
      'Community Support',
      'Basic ADB Commands'
    ]
  },
  {
    name: 'Pro License',
    price: '$49.90',
    features: [
      'All Start Features',
      'Network Unlock (Unlimited)',
      'FRP Removal (Unlimited)',
      'High-Speed Firmware Downloads',
      'Priority Email Support',
      'Multi-Device (3 PCs)',
      'IMEI Repair'
    ],
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: '$199.90',
    features: [
      'All Pro Features',
      'API Access',
      'Bulk Operations Manager',
      'Remote Services Protocol',
      'Dedicated Account Manager',
      'Unlimited Seat License',
      'Priority Features Request'
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Purchase License</h2>
          <p className="text-slate-400 text-lg">Select the plan that powers your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-1 rounded-2xl transition-all duration-300 ${
                 tier.isPopular ? 'bg-gradient-to-b from-nexus-accent to-blue-600 shadow-2xl shadow-blue-900/20 transform scale-105 z-10' : 'bg-slate-800'
              }`}
            >
              <div className="flex-1 flex flex-col bg-[#151B2B] rounded-xl p-8 h-full">
                {tier.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nexus-accent text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className={`text-lg font-bold uppercase tracking-wider mb-4 ${tier.isPopular ? 'text-nexus-accent' : 'text-slate-300'}`}>
                    {tier.name}
                </h3>
                
                <div className="flex items-baseline mb-8 border-b border-slate-800 pb-8">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.price !== 'Free' && <span className="text-slate-500 ml-2 text-sm">/ year</span>}
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group">
                      <Check className={`h-5 w-5 mr-3 shrink-0 ${tier.isPopular ? 'text-nexus-accent' : 'text-slate-600 group-hover:text-nexus-accent transition-colors'}`} />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 px-4 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-200 flex items-center justify-center gap-2 ${
                    tier.isPopular
                      ? 'bg-nexus-accent hover:bg-nexus-accentHover text-white shadow-lg shadow-nexus-accent/25'
                      : 'bg-slate-800 border border-slate-600 hover:bg-slate-700 text-white hover:border-slate-500'
                  }`}
                >
                  {tier.price === 'Free' ? 'Download Free' : <><CreditCard size={16} /> Buy Now</>}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;