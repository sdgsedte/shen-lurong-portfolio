'use client';

import LiquidEther from './LiquidEther';
import BorderGlowController from './effects/BorderGlowController';
import MotionDirector from './effects/MotionDirector';

export default function SiteEffects() {
  return (
    <>
      <div className="siteLiquidBackground" aria-hidden="true">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B497CF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <BorderGlowController />
      <MotionDirector />
    </>
  );
}
