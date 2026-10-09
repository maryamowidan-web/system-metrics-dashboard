import React, { useState } from 'react';
import { ServiceStatus } from '../types';

interface Props {
  services: ServiceStatus[];
}

export const ServiceTable: React.FC<Props> = ({ services }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || service.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="table-container">
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select 
          value={filterStatus} 
          onChange={(e) => setFilterStatus(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Statuses</option>
          <option value="running">Running</option>
          <option value="degraded">Degraded</option>
          <option value="stopped">Stopped</option>
        </select>
      </div>

      <table className="services-table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Uptime</th>
            <th>CPU Load</th>
          </tr>
        </thead>
        <tbody>
          {filteredServices.map((service) => (
            <tr key={service.id}>
              <td className="service-name">{service.name}</td>
              <td>{service.category}</td>
              <td>
                <span className={`status-badge ${service.status}`}>
                  {service.status}
                </span>
              </td>
              <td>{service.uptime}</td>
              <td>{service.cpuUsage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
