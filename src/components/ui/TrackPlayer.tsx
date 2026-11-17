"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useAudioTrack } from "@/lib/useAudioTrack";
import { TrackProgress } from "./TrackProgress";

type TrackState = ReturnType<typeof useAudioTrack>;

const TrackContext = createContext<TrackState | null>(null);

type ControlsProps = {
  state: TrackState;
  title: string;
  className?: string;
};

function Controls({ state, title, className = "" }: ControlsProps) {
  const { playing, currentTime, duration, toggle, seek } = state;
  return (
    <div
      className={`flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={`${playing ? "Пауза" : "Слухати"}: ${title}`}
        aria-pressed={playing}
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-black transition-opacity hover:opacity-90"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-5 fill-current"
        >
          {playing ? (
            <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
          ) : (
            <path d="M8 5v14l11-7z" />
          )}
        </svg>
      </button>
      <TrackProgress
        label={title}
        currentTime={currentTime}
        duration={duration}
        onSeek={seek}
        className="min-w-[140px] flex-1"
      />
    </div>
  );
}

type TrackPlayerProps = {
  src: string;
  title: string;
  className?: string;
};

export function TrackPlayer({ src, title, className }: TrackPlayerProps) {
  const state = useAudioTrack(src);
  return <Controls state={state} title={title} className={className} />;
}

type PlayableBlockProps = {
  src?: string;
  className?: string;
  as?: "div" | "article";
  children: ReactNode;
};

export function PlayableBlock({
  src,
  className = "",
  as: Tag = "div",
  children,
}: PlayableBlockProps) {
  const state = useAudioTrack(src ?? "");
  return (
    <TrackContext.Provider value={src ? state : null}>
      <Tag
        className={`${src ? "cursor-pointer" : ""} ${className}`}
        onClick={src ? state.toggle : undefined}
      >
        {children}
      </Tag>
    </TrackContext.Provider>
  );
}

export function BlockPlayer({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const state = useContext(TrackContext);
  if (!state) return null;
  return <Controls state={state} title={title} className={className} />;
}
