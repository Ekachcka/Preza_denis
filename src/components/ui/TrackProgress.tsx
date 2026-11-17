"use client";

import { formatTime } from "@/lib/useAudioTrack";

type TrackProgressProps = {
  label: string;
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  className?: string;
};

export function TrackProgress({
  label,
  currentTime,
  duration,
  onSeek,
  className = "",
}: TrackProgressProps) {
  const percent = duration > 0 ? (currentTime / duration) * 100 : 0;
  return (
    <div className={`flex min-w-0 items-center gap-2 ${className}`}>
      <input
        type="range"
        min={0}
        max={duration || 0}
        step={0.1}
        value={Math.min(currentTime, duration || 0)}
        disabled={duration === 0}
        aria-label={`Прогрес: ${label}`}
        onChange={(e) => onSeek(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, var(--color-accent) ${percent}%, #6b6b6b ${percent}%)`,
        }}
        className="h-1 min-w-0 flex-1 cursor-pointer appearance-none rounded-full disabled:cursor-default [&::-moz-range-thumb]:size-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-accent [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent"
      />
      <span className="shrink-0 text-xs font-medium tabular-nums text-white">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>
    </div>
  );
}
