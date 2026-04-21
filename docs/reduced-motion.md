# Reduced Motion Plan

HackerPage is intentionally cinematic, but the experience should still respect users who prefer reduced motion.

## Target Behavior

When `prefers-reduced-motion: reduce` is active:

- Reduce large camera moves and fast parallax effects.
- Replace long animated transitions with short fades or static states.
- Keep terminal, investigation, and timeline content readable without waiting for animation.
- Avoid flashing or rapid scene changes.

## Implementation Checklist

- Add CSS media queries for `prefers-reduced-motion`.
- Gate JavaScript scene transitions behind a reduced-motion check.
- Keep focus movement predictable for keyboard users.
- Test first load, scene navigation, and timeline interactions in both modes.

## Acceptance Notes

Reduced motion should not remove the theme of the site. It should keep the investigative atmosphere while lowering movement intensity.

Refs #4.
