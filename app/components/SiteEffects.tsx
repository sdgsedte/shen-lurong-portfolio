'use client';

import { lazy, Suspense, useEffect, useState } from 'react';

const LiquidEther = lazy(() => import('./LiquidEther'));
const BorderGlowController = lazy(() => import('./effects/BorderGlowController'));
const MotionDirector = lazy(() => import('./effects/MotionDirector'));
const LIQUID_COLORS = ['#5227FF', '#FF9FFC', '#B497CF'];

export default function SiteEffects() {
  const [showWebGL, setShowWebGL] = useState(false);
  const [showMotion, setShowMotion] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const motionTimer = reducedMotion ? 0 : window.setTimeout(() => setShowMotion(true), 0);
    const webglTimer = reducedMotion || connection?.saveData
      ? 0
      : window.setTimeout(() => setShowWebGL(true), 700);

    return () => {
      if (motionTimer) window.clearTimeout(motionTimer);
      if (webglTimer) window.clearTimeout(webglTimer);
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
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.36}
            maxFps={30}
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
      <Suspense fallback={null}><BorderGlowController /></Suspense>
      <Suspense fallback={null}>{showMotion ? <MotionDirector /> : null}</Suspense>
    </>
  );
}
