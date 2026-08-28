'use client';

import { useEffect } from 'react';

const GLOW_TARGETS = [
  '.siteHeader',
  '.campaignCard',
  '.profileGrid',
  '.careerPortrait',
  '.workCategoryCard',
  '.workDetailNav',
  '.placeholderGallery article',
  '.pylCaseHeader',
  '.pylArtworkSegment',
  '.brandKvCase',
  '.brandKvImage',
  '.renderImageCard',
  '.livestreamCard',
  '.homepageCaseHeader',
  '.homepageContinuousPage',
  '.homepageCarouselViewport',
  '.homepageOperationCard',
  '.homepageProductRow',
  '.storeProjectImage',
  '.contactCard'
].join(',');

const decorate = (root: ParentNode = document) => {
  root.querySelectorAll<HTMLElement>(GLOW_TARGETS).forEach(element => {
    if (element.classList.contains('hasBorderGlow')) return;
    element.classList.add('hasBorderGlow');
    if (window.getComputedStyle(element).position === 'static') {
      element.dataset.glowPositioned = 'true';
      element.style.position = 'relative';
    }
    const glow = document.createElement('span');
    glow.className = 'borderGlowLayer';
    glow.setAttribute('aria-hidden', 'true');
    element.appendChild(glow);
  });
};

export default function BorderGlowController() {
  useEffect(() => {
    decorate();

    const observer = new MutationObserver(records => {
      records.forEach(record => {
        record.addedNodes.forEach(node => {
          if (node instanceof HTMLElement) {
            if (node.matches(GLOW_TARGETS)) decorate(node.parentElement ?? document);
            else decorate(node);
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    let active: HTMLElement | null = null;
    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>(GLOW_TARGETS)
        : null;

      if (!target) {
        active?.classList.remove('borderGlowActive');
        active = null;
        return;
      }

      if (active !== target) {
        active?.classList.remove('borderGlowActive');
        active = target;
        active.classList.add('borderGlowActive');
      }

      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const angle = (Math.atan2(y - centerY, x - centerX) * 180) / Math.PI + 90;
      const distanceToEdge = Math.min(x, y, rect.width - x, rect.height - y);
      const proximity = Math.max(0, Math.min(1, 1 - distanceToEdge / 96));

      target.style.setProperty('--glow-angle', `${angle}deg`);
      target.style.setProperty('--glow-proximity', proximity.toFixed(3));
      target.style.setProperty('--glow-x', `${x}px`);
      target.style.setProperty('--glow-y', `${y}px`);
    };

    const handlePointerLeave = () => {
      active?.classList.remove('borderGlowActive');
      active = null;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave);
      document.querySelectorAll<HTMLElement>('.hasBorderGlow').forEach(element => {
        element.classList.remove('hasBorderGlow', 'borderGlowActive');
        element.querySelector(':scope > .borderGlowLayer')?.remove();
        if (element.dataset.glowPositioned === 'true') {
          element.style.removeProperty('position');
          delete element.dataset.glowPositioned;
        }
      });
    };
  }, []);

  return null;
}
