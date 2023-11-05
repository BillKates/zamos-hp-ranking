import React from 'react';
import './ActivityInfo.css';

interface ActivityInfoProps {
  lastActivityDate: string;
  currentMonth: string;
  currentYear: string;
  updateLastActivityDate: () => void;
  updateCurrentMonth: () => void;
  updateCurrentYear: () => void;
  children: React.ReactNode;
}

const ActivityInfo: React.FC<ActivityInfoProps> = ({
  lastActivityDate,
  currentMonth,
  currentYear,
  updateLastActivityDate,
  updateCurrentMonth,
  updateCurrentYear,
  children,
}) => {
  return (
    <div className="activity-info-container">
      <div className="rankings">
        {children}
      </div>
      <button onClick={updateLastActivityDate}>Update Last Activity Date</button>
      <button onClick={updateCurrentMonth}>Update Current Month</button>
      <button onClick={updateCurrentYear}>Update Current Year</button>
    </div>
  );
}

export default ActivityInfo;
