# Hero artwork and motion update

The hero uses the supplied robot/dhow artwork as the edit target, separated into a transparent sprite with the built-in image-generation tool (not the API/CLI). It retains the blue/yellow robot and wooden dhow with ivory/blue sails. Previously occluded areas were reconstructed during separation, so this is an edited derivative rather than a pixel-identical extraction.

Final asset: `public/images/hero-robot-dhow.webp`. Transparency is preserved. The original generated PNG was converted to WebP for delivery (approximately 323 KB). CSS independently positions the left and right regions without mirroring either object.

## Editing prompt

Use case: background-extraction. Edit target: the supplied small image of a blue and yellow IoT wheeled robot with a yellow gripper arm in front of a wooden dhow with ivory and royal-blue sails. Create one website asset sprite on a genuinely transparent background, wide landscape 2:1 canvas. Isolate these EXACT SAME two objects and separate them: robot centred within the LEFT HALF of the canvas, wooden dhow centred within the RIGHT HALF of the canvas, with clear transparent space between, no overlap. Preserve their precise design, colours, materials, orientation, perspective and details, including robot front ultrasonic eyes, wheels, chassis, cables and raised yellow gripper, and the dhow's wooden hull, mast, rigging, ivory sail and blue sail. Do NOT redesign them, do NOT add objects, people, decoration or text. Remove the white background, tabletop, stray blue marks and original background. Complete only tiny previously occluded parts as necessary to separate the objects. Both entire objects visible without clipping and each within its own half. Leave 5% transparent margins. Crisp clean photographic cutouts; soft natural contact shadow only, no rectangular background.

## Verification

- Next.js production build and TypeScript validation passed.
- Desktop, 390px phone and 768px tablet layouts inspected in browser.
- Phone hero ends at the initial viewport boundary; no horizontal page overflow.
- Circuit stroke progress changes with actual scrolling, and stays outside the main text column.
- Footer pattern is decorative and does not obstruct navigation or contact links.
- All new movement respects the reduced-motion setting; native scrolling is preserved.
