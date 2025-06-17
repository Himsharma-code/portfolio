// app/components/ErrorBoundary.tsx
"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-4 bg-red-100 text-red-700 rounded-lg">
      <h2>Error loading profile!</h2>
      <button
        onClick={reset}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
      >
        Retry
      </button>
    </div>
  );
}
