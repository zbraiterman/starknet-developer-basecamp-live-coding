"use client";

interface CounterValueProps {
  value: any;
  isLoading: boolean;
  error: any;
}

export const CounterValue = ({ value, isLoading, error }: CounterValueProps) => {
  if (error) return <span className="text-error">failed</span>;
  if (isLoading || value === undefined) return <span>...</span>;

  return <span className="font-mono">{String(value)}</span>;
};
