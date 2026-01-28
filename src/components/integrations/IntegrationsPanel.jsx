import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const integrations = [
  {
    name: 'Gmail',
    logo: 'https://cdn.worldvectorlogo.com/logos/gmail-icon.svg',
    description: 'Track email communications with founders to auto-update early stage profiles',
    features: ['Email threads', 'Response tracking', 'Auto-update profiles', 'Communication frequency'],
  },
  {
    name: 'HubSpot',
    logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg',
    description: 'Import deals with touchpoint history and communication records',
    features: ['Deal sync', 'Meeting history', 'Email tracking', 'Contact notes'],
  },
  {
    name: 'Salesforce',
    logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg',
    description: 'Import CRM data including opportunities, activities, and touchpoints',
    features: ['Opportunity sync', 'Activity timeline', 'Contact history', 'Deal stages'],
  },
];

export default function IntegrationsPanel() {
  return (
    <div className="space-y-4">
      {integrations.map((integration, index) => (
        <motion.div
          key={integration.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-slate-200 hover:shadow-md transition-all"
        >
          <div className="flex items-start gap-4">
            <img 
              src={integration.logo} 
              alt={integration.name} 
              className="w-12 h-12 object-contain"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-slate-900">{integration.name}</h3>
                <Button size="sm" className="gap-2">
                  Connect
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-slate-600 mb-4">{integration.description}</p>
              <div className="flex flex-wrap gap-2">
                {integration.features.map((feature, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}