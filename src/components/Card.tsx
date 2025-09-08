import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 m-2">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
