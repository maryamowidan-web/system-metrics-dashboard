export interface SystemMetric {
  id: string;
  label: string;
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
}

export interface ServiceStatus {
  id: string;
  name: string;
  category: string;
  status: 'running' | 'stopped' | 'degraded';
  uptime: string;
  cpuUsage: number;
}
