import React from 'react';
import { SystemMetric } from '../types';

interface Props {
  metric: SystemMetric;
}

export const MetricsCard: React.FC<Props> = ({ metric }) => {
  const getStatusColor = (status: SystemMetric['status']) => {
    switch (status) {
      case 'critical': return '#e63946';
      case 'warning': return '#f4a261';
      default: return '#2a9d8f';
    }
  };

  return (
    <div className="metric-card">
      <span className="metric-label">{metric.label}</span>
      <div className="metric-value-container">
        <span className="metric-value">{metric.value}</span>
        <span className="metric-unit">{metric.unit}</span>
      </div>
      <div 
        className="metric-status-bar" 
        style={{ backgroundColor: getStatusColor(metric.status), width: `${Math.min(metric.value, 100)}%` }}
      />
    </div>
  );
};
