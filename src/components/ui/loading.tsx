import React from "react";

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  color = "#4CAF50",
}) => {
  return (
    <div
      className={`inline-block relative`}
      style={{ width: size, height: size }}
    >
      <div
        className={`absolute rounded-full w-full h-full animate-spin border-4 opacity-20 border-${color}`}
      />
      <div
        className="absolute rounded-full w-full h-full animate-spin"
        style={{
          border: `4px solid transparent`,
          borderTopColor: color,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
