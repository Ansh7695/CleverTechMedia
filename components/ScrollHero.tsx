"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

type ScrollHeroProps = {
  src?: string;
  poster?: string;
  scrollLength?: string;
  objectPosition?: string;
  smoothing?: number;
  children: ReactNode;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function ScrollHero({
  src = "/Assets/HeroVideo2.mp4",
  poster = "/Assets/hero-poster.jpg",
  scrollLength = "400vh",
  objectPosition = "center",
  smoothing = 0.22,
  children,
}: ScrollHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const durationRef = useRef(0);
  const unlockedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;
    const fadeElements = Array.from(section.querySelectorAll<HTMLElement>("[data-hero-fade]"));

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateTargetProgress = () => {
      const scrollDistance = section.offsetHeight - window.innerHeight;
      if (scrollDistance <= 0) return;

      const rect = section.getBoundingClientRect();
      targetProgressRef.current = clamp(-rect.top / scrollDistance, 0, 1);
    };

    const syncVideo = (nextProgress: number) => {
      if (reducedMotion || durationRef.current <= 0) return;

      const nextTime = clamp(nextProgress * durationRef.current, 0, durationRef.current);
      if (Math.abs(video.currentTime - nextTime) > 0.01) video.currentTime = nextTime;
    };

    const animate = () => {
      const target = targetProgressRef.current;
      const current = currentProgressRef.current;
      const next = current + (target - current) * clamp(smoothing, 0.01, 1);
      currentProgressRef.current = next;

      if (hintRef.current) hintRef.current.style.opacity = String(Math.max(0, 1 - next * 4));

      syncVideo(next);

      frameRef.current = window.requestAnimationFrame(animate);
    };

    const handleMetadata = () => {
      durationRef.current = Number.isFinite(video.duration) ? video.duration : 0;
      if (reducedMotion) video.currentTime = 0;
      syncVideo(currentProgressRef.current);
    };

    const unlockSeeking = () => {
      if (unlockedRef.current) return;
      unlockedRef.current = true;
      const playPromise = video.play();
      if (playPromise) {
        playPromise.then(() => video.pause()).catch(() => undefined);
      } else {
        video.pause();
      }
    };

    const startFadeIn = () => {
      fadeElements.forEach((element) => element.classList.add("is-visible"));
    };

    updateTargetProgress();
    video.addEventListener("loadedmetadata", handleMetadata);
    video.addEventListener("loadeddata", unlockSeeking, { once: true });
    window.addEventListener("touchstart", unlockSeeking, { passive: true, once: true });
    window.addEventListener("project-ready", startFadeIn);
    window.addEventListener("scroll", updateTargetProgress, { passive: true });
    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) handleMetadata();
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      video.removeEventListener("loadedmetadata", handleMetadata);
      video.removeEventListener("loadeddata", unlockSeeking);
      window.removeEventListener("touchstart", unlockSeeking);
      window.removeEventListener("project-ready", startFadeIn);
      window.removeEventListener("scroll", updateTargetProgress);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [smoothing]);

  return (
    <section
      ref={sectionRef}
      style={{ height: scrollLength }}
      aria-label="Clevertechmedia influencer marketplace introduction"
      className="relative"
    >
      <div className="sticky top-[61px] z-10 h-[calc(100vh-61px)] overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover"
          style={{ objectPosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
        <div className="absolute inset-0 flex items-start justify-start px-6 pt-20 md:px-[1cm] md:pt-28">
          <div className="w-full max-w-none">
            {children}
          </div>
        </div>
        <div
          ref={hintRef}
          className="absolute bottom-8 right-6 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--text-primary)] transition-opacity md:right-12"
          aria-hidden="true"
        >
          <span className="h-px w-10 bg-[var(--text-primary)]" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
