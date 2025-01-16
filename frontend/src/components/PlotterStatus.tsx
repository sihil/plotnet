import React, { useEffect, useState } from 'react';

interface PlotterStatus {
  status: string;
  current_job: string | null;
  progress: number;
}

export const PlotterStatus: React.FC = () => {
  const [status, setStatus] = useState<PlotterStatus | null>(null);

  useEffect(() => {
    // TODO: Implement actual API call
    const fetchStatus = async () => {
      // Placeholder status
      setStatus({
        status: 'idle',
        current_job: null,
        progress: 0
      });
    };

    const interval = setInterval(fetchStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!status) return <div>Loading...</div>;

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">Plotter Status</h2>
      <div>Status: {status.status}</div>
      <div>Current Job: {status.current_job || 'None'}</div>
      <div>Progress: {status.progress}%</div>
    </div>
  );
}; 