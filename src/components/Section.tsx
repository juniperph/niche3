import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, icon, title, subtitle, children }) => {
  return (
    <section id={id} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-white/5 rounded-2xl mb-4">
            {icon}
          </div>
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-400">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;