import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageUrl,
  features,
}) => {
  return (
    <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-2xl overflow-hidden backdrop-blur-sm">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-64 md:h-auto">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-300 mb-6">{description}</p>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-purple-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;