import { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadTime =
      window.performance.timing.loadEventEnd -
      window.performance.timing.navigationStart;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min((elapsed / loadTime) * 100, 100);
      setProgress(percentage);

      if (percentage >= 100) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-gray-200 h-1 rounded">
      <div
        className="absolute bg-blue-500 h-1 rounded transition-all ease-linear"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
