import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  const navItems = ['Vision', 'Mission', 'Products', 'About'];

  return (
    <header className="relative">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                FunTech AI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Where AI Meets Play
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Transforming everyday moments into extraordinary experiences through
            AI-powered entertainment
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;