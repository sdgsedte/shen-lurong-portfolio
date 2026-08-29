'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const DETAIL_CARDS = [
  '.brandKvCase',
  '.renderImageCard',
  '.livestreamCard',
  '.homepageOperationCard',
  '.homepageProductRow',
  '.storeProjectImage',
  '.pylArtworkSegment'
].join(',');

export default function MotionDirector() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = document.documentElement;
    const opening = document.querySelector<HTMLElement>('.openingSequence');
    const hero = document.querySelector<HTMLElement>('.hero');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      if (opening) opening.style.display = 'none';
      root.classList.add('motionReady');
      return () => root.classList.remove('motionReady');
    }

    root.classList.add('motionEnhanced');

    const context = gsap.context(() => {
      const shouldPlayOpening = Boolean(hero) && (!window.location.hash || window.location.hash === '#top');

      if (opening && shouldPlayOpening) {
        root.classList.add('motionLocked');
        gsap.set(opening, { autoAlpha: 1, display: 'block' });
        gsap.set('.siteHeader', { yPercent: -145, autoAlpha: 0 });
        gsap.set('.heroScene', {
          clipPath: 'inset(9% 6% 12% 6% round 42px)',
          scale: 0.88,
          yPercent: 4,
          transformOrigin: '50% 50%'
        });
        gsap.set('.heroContent', { y: 115, scaleY: 0.78, autoAlpha: 0, transformOrigin: '0 100%' });
        gsap.set('.campaignRail', { y: 90, autoAlpha: 0 });
        gsap.set('.scrollCue', { y: 24, autoAlpha: 0 });

        gsap.timeline({
          defaults: { ease: 'power4.inOut' },
          onComplete: () => {
            root.classList.remove('motionLocked');
            root.classList.add('motionReady');
            ScrollTrigger.refresh();
          }
        })
          .fromTo('.openingWordInner', { yPercent: 120 }, { yPercent: 0, duration: 0.95 })
          .fromTo('.openingMeta', { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.75 }, '<0.12')
          .fromTo('.openingProgress i', { scaleX: 0 }, { scaleX: 1, duration: 1.05, ease: 'power3.inOut' }, '<0.05')
          .to('.openingPanel', { yPercent: -104, duration: 1.45, stagger: 0.09 }, '+=0.18')
          .to('.openingWord,.openingMeta,.openingProgress', { y: -40, autoAlpha: 0, duration: 0.48, ease: 'power3.in' }, '<0.02')
          .to('.heroScene', {
            clipPath: 'inset(0% 0% 0% 0% round 0px)',
            scale: 1,
            yPercent: 0,
            duration: 1.9,
            ease: 'expo.inOut'
          }, '-=1.15')
          .to('.heroContent', { y: 0, scaleY: 1, autoAlpha: 1, duration: 1.42, ease: 'expo.out' }, '-=1.15')
          .to('.siteHeader', { yPercent: 0, autoAlpha: 1, duration: 1.05, ease: 'power4.out' }, '-=0.94')
          .to('.campaignRail', { y: 0, autoAlpha: 1, duration: 1.15, ease: 'power4.out' }, '-=0.82')
          .to('.scrollCue', { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' }, '-=0.56')
          .set(opening, { display: 'none' });
      } else {
        if (opening) gsap.set(opening, { display: 'none' });
        root.classList.add('motionReady');
      }

      if (hero) {
      gsap.timeline({ scrollTrigger: { trigger: '#about', start: 'top 72%', once: true } })
        .from('.careerBio .motionLineInner', {
          yPercent: 125,
          scaleY: 0.72,
          rotate: 2,
          duration: 1.35,
          stagger: 0.13,
          ease: 'expo.out'
        })
        .from('.about .sectionKicker', { x: -90, autoAlpha: 0, duration: 1, ease: 'power4.out' }, '<0.1')
        .from('.careerPortrait', {
          clipPath: 'inset(0 100% 0 0 round 28px)',
          scale: 0.94,
          duration: 1.55,
          ease: 'expo.inOut'
        }, '-=0.75')
        .from('.careerEyebrow,.careerIntro,.careerMeta>div,.careerStats>div,.careerTags span', {
          y: 64,
          autoAlpha: 0,
          duration: 1.05,
          stagger: 0.075,
          ease: 'power4.out'
        }, '-=1.05');

      gsap.timeline({ scrollTrigger: { trigger: '.careerPath', start: 'top 76%', once: true } })
        .from('.careerPathHeading>*', { y: 72, autoAlpha: 0, duration: 1.1, stagger: 0.12, ease: 'power4.out' })
        .fromTo('.careerTimeline', { '--path-progress': 0 }, { '--path-progress': 1, duration: 1.4, ease: 'expo.inOut' })
        .from('.careerTimeline article', {
          y: 88,
          autoAlpha: 0,
          duration: 1.2,
          stagger: 0.18,
          ease: 'power4.out'
        }, '-=0.8');

      gsap.timeline({ scrollTrigger: { trigger: '#works', start: 'top 72%', once: true } })
        .from('.worksHeading .motionLineInner', {
          yPercent: 130,
          scaleY: 0.68,
          duration: 1.45,
          ease: 'expo.out'
        })
        .from('.works .sectionKicker', { x: -100, autoAlpha: 0, duration: 1.05, ease: 'power4.out' }, '<0.08')
        .from('.worksHeading>div>span,.worksHeading>p', {
          y: 48,
          autoAlpha: 0,
          duration: 0.95,
          stagger: 0.12,
          ease: 'power4.out'
        }, '-=0.85');

      ScrollTrigger.batch('.workCategoryCard', {
        start: 'top 88%',
        once: true,
        interval: 0.18,
        batchMax: 3,
        onEnter: cards => {
          const media = cards
            .map(card => card.querySelector<HTMLElement>('.workCategoryMedia'))
            .filter((item): item is HTMLElement => Boolean(item));
          gsap.timeline()
            .fromTo(cards,
              { y: 126, autoAlpha: 0, clipPath: 'inset(0 0 24% 0 round 28px)' },
              {
                y: 0,
                autoAlpha: 1,
                clipPath: 'inset(0 0 0% 0 round 28px)',
                duration: 1.45,
                stagger: 0.2,
                ease: 'expo.out',
                clearProps: 'transform,opacity,visibility,clipPath'
              })
            .fromTo(media,
              { clipPath: 'inset(0 100% 0 0)', xPercent: -7 },
              {
                clipPath: 'inset(0 0% 0 0)',
                xPercent: 0,
                duration: 1.55,
                stagger: 0.2,
                ease: 'expo.inOut',
                clearProps: 'transform,clipPath'
              }, 0.12);
        }
      });

      document.querySelectorAll<HTMLElement>('.workCategoryCard').forEach(card => {
        gsap.fromTo(card,
          { '--scroll-parallax': '-16px' },
          {
            '--scroll-parallax': '16px',
            ease: 'none',
            scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1.2 }
          });
      });

      gsap.fromTo('.careerPortrait',
        { '--portrait-parallax': '-22px' },
        {
          '--portrait-parallax': '22px',
          ease: 'none',
          scrollTrigger: { trigger: '.careerPortrait', start: 'top bottom', end: 'bottom top', scrub: 1.4 }
        });

      gsap.timeline({ scrollTrigger: { trigger: '#contact', start: 'top 74%', once: true } })
        .from('.contactStatement .motionLineInner', {
          yPercent: 130,
          scaleY: 0.7,
          duration: 1.5,
          stagger: 0.14,
          ease: 'expo.out'
        })
        .from('.contactStatement>p,.contactBrand', { x: -74, autoAlpha: 0, duration: 1, stagger: 0.15, ease: 'power4.out' }, '-=1.05')
        .from('.contactCard', {
          x: 130,
          autoAlpha: 0,
          clipPath: 'inset(0 0 0 32% round 28px)',
          duration: 1.5,
          ease: 'expo.out'
        }, '-=1.2')
        .from('.footerMeta>*', { y: 38, autoAlpha: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }, '-=0.55');
      }

      document.querySelectorAll<HTMLElement>('.caseCategoryHeading,.renderSectionHeading,.homepageModuleHeading').forEach(heading => {
        const title = heading.querySelector<HTMLElement>('h1,h2,h3');
        if (!title) return;
        const supporting = Array.from(heading.children).filter(child => child !== title);
        gsap.timeline({ scrollTrigger: { trigger: heading, start: 'top 82%', once: true } })
          .from(title, {
            y: 96,
            scaleY: 0.72,
            autoAlpha: 0,
            transformOrigin: '0 100%',
            duration: 1.35,
            ease: 'expo.out'
          })
          .from(supporting, { y: 42, autoAlpha: 0, duration: 0.9, stagger: 0.1, ease: 'power4.out' }, '-=0.82');
      });

      ScrollTrigger.batch(DETAIL_CARDS, {
        start: 'top 90%',
        once: true,
        interval: 0.16,
        batchMax: 4,
        onEnter: cards => gsap.fromTo(cards,
          { y: 92, autoAlpha: 0, clipPath: 'inset(0 0 18% 0)' },
          {
            y: 0,
            autoAlpha: 1,
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.35,
            stagger: 0.16,
            ease: 'expo.out',
            clearProps: 'transform,opacity,visibility,clipPath'
          })
      });

      window.setTimeout(() => ScrollTrigger.refresh(), 220);
    }, document.body);

    return () => {
      context.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      root.classList.remove('motionEnhanced', 'motionLocked', 'motionReady');
    };
  }, []);

  return (
    <div className="openingSequence" aria-hidden="true">
      <div className="openingPanel openingPanelA" />
      <div className="openingPanel openingPanelB" />
      <div className="openingPanel openingPanelC" />
      <div className="openingWord"><span className="openingWordInner">SLR®</span></div>
      <div className="openingMeta"><span>VISUAL DESIGN</span><span>GUANGZHOU · 2026</span></div>
      <div className="openingProgress"><i /></div>
    </div>
  );
}
