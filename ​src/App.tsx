import React, { useState } from 'react';
import { initialMetrics, initialServices } from './data';
import { MetricsCard } from './components/MetricsCard';
import { ServiceTable } from './components/ServiceTable';
import './App.css';

export const App: React.FC = () => {
  const [metrics] = useState(initialMetrics);
  const [services] = useState(initialServices);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Ubuntu Enterprise System Monitor</h1>
        <p>Real-time metrics & open-source service management dashboard</p>
      </header>

      <section className="metrics-grid">
        {metrics.map((metric) => (
          <MetricsCard key={metric.id} metric={metric} />
        ))}
      </section>

      <section className="dashboard-section">
        <h2>Active Services</h2>
        <ServiceTable services={services} />
      </section>
    </div>
  );
};

export default App;
