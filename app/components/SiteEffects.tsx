'use client';

import { lazy, Suspense, useEffect, useState } from 'react';

const LiquidEther = lazy(() => import('./LiquidEther'));
const BorderGlowController = lazy(() => import('./effects/BorderGlowController'));
const MotionDirector = lazy(() => import('./effects/MotionDirector'));
const LIQUID_COLORS = ['#5227FF', '#FF9FFC', '#B497CF'];

export default function SiteEffects() {
  const [showMotion, setShowMotion] = useState(false);
  const [showBorderGlow, setShowBorderGlow] = useState(false);
  const [showWebGL, setShowWebGL] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const device = navigator as Navigator & { deviceMemory?: number };
    const isHome = window.location.pathname === '/';
    const motionTimer = window.setTimeout(() => setShowMotion(true), isHome ? 450 : 80);
    const glowTimer = !reducedMotion && finePointer
      ? window.setTimeout(() => setShowBorderGlow(true), 1000)
      : 0;

    const canUseWebGL = !reducedMotion
      && !connection?.saveData
      && connection?.effectiveType !== '2g'
      && connection?.effectiveType !== 'slow-2g'
      && finePointer
      && window.innerWidth >= 960
      && (navigator.hardwareConcurrency || 8) >= 6
      && (device.deviceMemory || 8) >= 4;

    let webglTimer = 0;
    let webglIdle = 0;
    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (canUseWebGL) {
      if (idleWindow.requestIdleCallback) {
        webglIdle = idleWindow.requestIdleCallback(() => setShowWebGL(true), { timeout: 3200 });
      } else {
        webglTimer = window.setTimeout(() => setShowWebGL(true), 2200);
      }
    }

    return () => {
      window.clearTimeout(motionTimer);
      if (glowTimer) window.clearTimeout(glowTimer);
      if (webglTimer) window.clearTimeout(webglTimer);
      if (webglIdle) idleWindow.cancelIdleCallback?.(webglIdle);
    };
  }, []);

  return (
    <>
      <div className="siteLiquidBackground" aria-hidden="true">
        <Suspense fallback={null}>
          {showWebGL ? <LiquidEther
            colors={LIQUID_COLORS}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={20}
            iterationsPoisson={22}
            resolution={0.28}
            maxFps={20}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          /> : null}
        </Suspense>
      </div>
      <Suspense fallback={null}>{showBorderGlow ? <BorderGlowController /> : null}</Suspense>
      <Suspense fallback={null}>{showMotion ? <MotionDirector /> : null}</Suspense>
    </>
  );
}
