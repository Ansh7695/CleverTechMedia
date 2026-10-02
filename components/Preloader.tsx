"use client";

import { useEffect, useState } from "react";

const waitForWindowLoad = () => {
  if (document.readyState === "complete") return Promise.resolve();
  return new Promise<void>((resolve) => window.addEventListener("load", () => resolve(), { once: true }));
};

const waitForImages = () => {
  const images = Array.from(document.images);
  return Promise.all(
    images.map((image) => {
      if (image.complete) return Promise.resolve();
      return new Promise<void>((resolve) => {
        image.addEventListener("load", () => resolve(), { once: true });
        image.addEventListener("error", () => resolve(), { once: true });
      });
    }),
  );
};

const waitForVideo = () => {
  const video = document.querySelector("video");
  if (!video || video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) return Promise.resolve();

  return new Promise<void>((resolve) => {
    video.addEventListener("canplay", () => resolve(), { once: true });
    video.addEventListener("error", () => resolve(), { once: true });
  });
};

export function Preloader() {
  const [ready, setReady] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const finishLoading = async () => {
      await Promise.all([
        waitForWindowLoad(),
        waitForImages(),
        waitForVideo(),
        document.fonts?.ready ?? Promise.resolve(),
      ]);
      setReady(true);
      window.setTimeout(() => {
        window.dispatchEvent(new Event("project-ready"));
        setHidden(true);
      }, 300);
      document.body.style.overflow = previousOverflow;
    };

    void finishLoading();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      role="status"
      aria-label="Loading Clevertechmedia"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-300 ${ready ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center gap-4 text-[var(--text-primary)]">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[rgba(225,220,201,0.25)] border-t-[var(--text-primary)]" />
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em]">Loading</span>
      </div>
    </div>
  );
}
