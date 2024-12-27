import React from 'react';
import { Gamepad2, Bot, Target, Users, SparkleIcon } from 'lucide-react';
import Header from './components/Header';
import Section from './components/Section';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white">
      <Header />
      
      {/* Vision Section */}
      <Section
        id="vision"
        icon={<Bot className="w-12 h-12 text-purple-400" />}
        title="Our Vision"
        subtitle="Leveraging AI for Fun"
      >
        <div className="space-y-6 text-lg">
          <p className="leading-relaxed">
            We envision a world where artificial intelligence transforms everyday moments into
            extraordinary experiences. By harnessing the power of cutting-edge AI technology,
            we're creating a future where entertainment isn't just an escape—it's an enhancement
            to your daily life.
          </p>
          <div className="flex items-center gap-4 bg-purple-800/30 p-6 rounded-xl">
            <SparkleIcon className="w-8 h-8 text-purple-400 flex-shrink-0" />
            <p className="text-purple-100">
              Pioneering the intersection of AI and entertainment to bring magic into every interaction.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section
        id="mission"
        icon={<Target className="w-12 h-12 text-blue-400" />}
        title="Our Mission"
        subtitle="Creating Joy Through Innovation"
      >
        <div className="space-y-6 text-lg">
          <p className="leading-relaxed">
            Our mission is to develop engaging entertainment apps and games that seamlessly
            integrate into your daily routine. We believe that every moment has the potential
            for joy, and we're here to unlock it through innovative technology.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-800/30 p-6 rounded-xl">
              <h3 className="font-bold mb-2">Innovative Design</h3>
              <p className="text-blue-100">Creating intuitive and engaging user experiences</p>
            </div>
            <div className="bg-blue-800/30 p-6 rounded-xl">
              <h3 className="font-bold mb-2">AI Integration</h3>
              <p className="text-blue-100">Powering experiences with smart technology</p>
            </div>
            <div className="bg-blue-800/30 p-6 rounded-xl">
              <h3 className="font-bold mb-2">User Joy</h3>
              <p className="text-blue-100">Prioritizing happiness in every feature</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Products Section */}
      <Section
        id="products"
        icon={<Gamepad2 className="w-12 h-12 text-green-400" />}
        title="Our Products"
        subtitle="Magic at Your Fingertips"
      >
        <div className="space-y-8">
          <ProductCard
            title="Call Santa Claus"
            description="Experience the magic of Christmas with our AI-powered Santa calls! Connect with Santa through immersive video chats that bring holiday joy to children of all ages."
            imageUrl="https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&q=80"
            features={['AI-Powered Conversations', 'Real-time Video Chat', 'Personalized Experience']}
          />
        </div>
      </Section>

      {/* About Us Section */}
      <Section
        id="about"
        icon={<Users className="w-12 h-12 text-pink-400" />}
        title="About Us"
        subtitle="The Team Behind the Magic"
      >
        <div className="space-y-6 text-lg">
          <p className="leading-relaxed">
            We're a dynamic team of innovators, developers, and dreamers who believe in the
            power of technology to create joy. Our expertise in AI and game development
            allows us to push the boundaries of what's possible in digital entertainment.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-800/30 p-6 rounded-xl">
              <h3 className="font-bold mb-2">Our Expertise</h3>
              <ul className="list-disc list-inside space-y-2 text-pink-100">
                <li>Advanced AI Development</li>
                <li>Interactive Entertainment</li>
                <li>User Experience Design</li>
                <li>Game Development</li>
              </ul>
            </div>
            <div className="bg-pink-800/30 p-6 rounded-xl">
              <h3 className="font-bold mb-2">Our Values</h3>
              <ul className="list-disc list-inside space-y-2 text-pink-100">
                <li>Innovation First</li>
                <li>User-Centered Design</li>
                <li>Continuous Learning</li>
                <li>Quality Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;