import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-cyan-500 transition-all duration-300 group">
      <Icon className="h-12 w-12 text-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}