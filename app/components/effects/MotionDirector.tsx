'use client';

import { useLayoutEffect } from 'react';
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
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = document.documentElement;
    const opening = document.querySelector<HTMLElement>('.openingSequence');
    const hero = document.querySelector<HTMLElement>('.hero');
    const returningToWorks = Boolean(hero) && window.sessionStorage.getItem('portfolio-return-to-works') === '1';
    if (returningToWorks) window.sessionStorage.removeItem('portfolio-return-to-works');
    const openingPlayed = window.sessionStorage.getItem('portfolio-opening-played') === '1';
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      if (opening) opening.style.display = 'none';
      root.classList.add('motionReady');
      return () => root.classList.remove('motionReady');
    }

    root.classList.add('motionEnhanced');
    const imageCleanup: Array<() => void> = [];
    let refreshTimer = 0;

    const context = gsap.context(() => {
      const shouldPlayOpening = Boolean(hero) && !returningToWorks && !openingPlayed && (!window.location.hash || window.location.hash === '#top');

      document.querySelectorAll<HTMLImageElement>('.workDetailPage img').forEach(image => {
        gsap.set(image, { autoAlpha: 0 });

        let cancelled = false;
        const showImage = () => {
          const finish = () => {
            if (cancelled) return;
            gsap.to(image, { autoAlpha: 1, duration: 0.78, ease: 'power2.out', overwrite: true });
          };
          if (typeof image.decode === 'function') image.decode().then(finish).catch(finish);
          else finish();
        };
        const showFallback = () => gsap.set(image, { autoAlpha: 1 });

        if (image.complete && image.naturalWidth > 0) showImage();
        else {
          image.addEventListener('load', showImage, { once: true });
          image.addEventListener('error', showFallback, { once: true });
        }

        imageCleanup.push(() => {
          cancelled = true;
          image.removeEventListener('load', showImage);
          image.removeEventListener('error', showFallback);
        });
      });

      if (opening && shouldPlayOpening) {
        window.sessionStorage.setItem('portfolio-opening-played', '1');
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
          .fromTo('.openingWordInner', { yPercent: 120 }, { yPercent: 0, duration: 0.55 })
          .fromTo('.openingMeta', { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.4 }, '<0.08')
          .fromTo('.openingProgress i', { scaleX: 0 }, { scaleX: 1, duration: 0.62, ease: 'power3.inOut' }, '<0.03')
          .to('.openingPanel', { yPercent: -104, duration: 0.9, stagger: 0.06 }, '+=0.08')
          .to('.openingWord,.openingMeta,.openingProgress', { y: -28, autoAlpha: 0, duration: 0.3, ease: 'power3.in' }, '<0.02')
          .to('.heroScene', {
            clipPath: 'inset(0% 0% 0% 0% round 0px)',
            scale: 1,
            yPercent: 0,
            duration: 1.05,
            ease: 'expo.inOut'
          }, '-=0.7')
          .to('.heroContent', { y: 0, scaleY: 1, autoAlpha: 1, duration: 0.78, ease: 'expo.out' }, '-=0.72')
          .to('.siteHeader', { yPercent: 0, autoAlpha: 1, duration: 0.62, ease: 'power4.out' }, '-=0.58')
          .to('.campaignRail', { y: 0, autoAlpha: 1, duration: 0.68, ease: 'power4.out' }, '-=0.52')
          .to('.scrollCue', { y: 0, autoAlpha: 1, duration: 0.48, ease: 'power3.out' }, '-=0.38')
          .set(opening, { display: 'none' });
      } else {
        if (opening) gsap.set(opening, { display: 'none' });
        root.classList.add('motionReady');
      }

      if (hero && !returningToWorks) {
      const categoryCards = gsap.utils.toArray<HTMLElement>('.workCategoryCard');
      const categoryMedia = categoryCards
        .map(card => card.querySelector<HTMLElement>('.workCategoryMedia'))
        .filter((item): item is HTMLElement => Boolean(item));
      gsap.set(categoryCards, { y: 52, autoAlpha: 0, clipPath: 'inset(0 0 12% 0 round 28px)' });
      gsap.set(categoryMedia, { clipPath: 'inset(0 100% 0 0)', xPercent: -4 });

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
            .to(cards, {
                y: 0,
                autoAlpha: 1,
                clipPath: 'inset(0 0 0% 0 round 28px)',
                duration: 1.35,
                stagger: 0.2,
                ease: 'expo.out',
                clearProps: 'transform,opacity,visibility,clipPath'
              })
            .to(media, {
                clipPath: 'inset(0 0% 0 0)',
                xPercent: 0,
                duration: 1.45,
                stagger: 0.2,
                ease: 'expo.inOut',
                clearProps: 'transform,clipPath'
              }, 0.08);
        }
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

      const detailCards = gsap.utils.toArray<HTMLElement>(DETAIL_CARDS);
      gsap.set(detailCards, { y: 58, autoAlpha: 0, clipPath: 'inset(0 0 10% 0)' });
      ScrollTrigger.batch(DETAIL_CARDS, {
        start: 'top 90%',
        once: true,
        interval: 0.16,
        batchMax: 4,
        onEnter: cards => gsap.to(cards, {
            y: 0,
            autoAlpha: 1,
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.25,
            stagger: 0.16,
            ease: 'expo.out',
            clearProps: 'transform,opacity,visibility,clipPath'
          })
      });

      refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 220);
    }, document.body);

    return () => {
      imageCleanup.forEach(cleanup => cleanup());
      window.clearTimeout(refreshTimer);
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
