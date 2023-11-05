import React from 'react';
import './ActivityInfo.css';

interface ActivityInfoProps {
  children: React.ReactNode;
}

const ActivityInfo: React.FC<ActivityInfoProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default ActivityInfo;
