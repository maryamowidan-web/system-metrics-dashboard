import { SystemMetric, ServiceStatus } from './types';

export const initialMetrics: SystemMetric[] = [
  { id: '1', label: 'CPU Usage', value: 42, unit: '%', status: 'normal' },
  { id: '2', label: 'Memory Usage', value: 78, unit: '%', status: 'warning' },
  { id: '3', label: 'Disk IOPS', value: 1250, unit: 'IOPS', status: 'normal' },
  { id: '4', label: 'Network In/Out', value: 340, unit: 'MB/s', status: 'normal' },
];

export const initialServices: ServiceStatus[] = [
  { id: 's1', name: 'nginx-web-server', category: 'Frontend', status: 'running', uptime: '99.9%', cpuUsage: 12.4 },
  { id: 's2', name: 'auth-service-api', category: 'Backend', status: 'running', uptime: '99.5%', cpuUsage: 24.1 },
  { id: 's3', name: 'postgresql-primary', category: 'Database', status: 'running', uptime: '99.99%', cpuUsage: 45.0 },
  { id: 's4', name: 'redis-cache-cluster', category: 'Database', status: 'degraded', uptime: '98.2%', cpuUsage: 68.3 },
  { id: 's5', name: 'ubuntu-update-daemon', category: 'System', status: 'stopped', uptime: '0%', cpuUsage: 0.0 },
];
