"use client";

import { useRef } from "react";
import { assetPath } from "@/lib/assetPath";

type ProcessVideoProps = {
  src: string;
  title: string;
  className?: string;
};

export function ProcessVideo({
  src,
  title,
  className = "",
}: ProcessVideoProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={`flex h-10 w-full items-center justify-center rounded-button bg-accent p-2.5 text-[15px] font-bold uppercase text-white transition-opacity hover:opacity-90 ${className}`}
      >
        Процес роботи
      </button>
      <dialog
        ref={dialogRef}
        aria-label={`Процес роботи: ${title}`}
        onClose={() => videoRef.current?.pause()}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="m-auto w-[min(1200px,94vw)] max-w-none rounded-card bg-plate p-3 text-white backdrop:bg-black/80"
      >
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="min-w-0 break-words text-base font-bold uppercase">
            {title}
          </p>
          <button
            type="button"
            onClick={close}
            aria-label="Закрити"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-black transition-opacity hover:opacity-90"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-5 fill-none stroke-current"
              strokeWidth={2.5}
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <video
          ref={videoRef}
          src={assetPath(src)}
          controls
          playsInline
          preload="none"
          className="aspect-[64/27] w-full rounded-[5px] bg-black"
        />
      </dialog>
    </>
  );
}
