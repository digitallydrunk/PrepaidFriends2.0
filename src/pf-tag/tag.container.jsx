import React from 'react';

const tagConfigurations = {
  Primary: {
    bgColor: 'bg-blue-200',
    textColor: 'text-blue-700',
    icon: 'feather-bell-off',
  },
  Success: {
    bgColor: 'bg-green-200',
    textColor: 'text-green-700',
    icon: 'feather-arrow-right',
  },
  Warning: {
    bgColor: 'bg-orange-200',
    textColor: 'text-orange-700',
    icon: 'feather-activity',
  },
  Error: {
    bgColor: 'bg-red-200',
    textColor: 'text-red-700',
    icon: 'feather-archive',
  },
  Default: {
    bgColor: 'bg-white',
    textColor: 'text-gray-700',
    icon: 'feather-hard-drive',
  },
};

function PFTag({ variant = 'Default', label, onClick }) {
  const tagConfiguration = tagConfigurations[variant];

  if (!tagConfiguration) {
    return null;
  }

  const { bgColor, textColor, icon } = tagConfiguration;

  return (
    <div
      className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full ${bgColor} ${textColor} border`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={`feather ${icon} mr-2`}
      />
      {label || variant}
    </div>
  );
}

export  {PFTag};
