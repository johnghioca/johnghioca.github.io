import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import styles from "./styles.module.css";

const CARDS = [
  "url(/images/chase.svg)",
  "url(/images/marriott.svg)",
  "url(/images/mondelez.svg)",
  "url(/images/verizon.svg)",
  "url(/images/starbucks.svg)",
  "url(/images/google.svg)",
  "url(/images/maybelline.svg)",
  "url(/images/murad.svg)",
  "url(/images/us-soccer.svg)",
  "url(/images/cruise.svg)",
  "url(/images/palms.svg)",
  "url(/images/nike.svg)",
  "url(/images/hss.svg)",
  "url(/images/ibm.svg)",
  "url(/images/audi.svg)",
  "url(/images/sunrun.svg)",
  "url(/images/mayo.svg)",
  "url(/images/chick-fil-a.svg)",
  "url(/images/longbranch.svg)",
  "url(/images/capital-one.svg)",
  "url(/images/realberry.svg)",
];

const Portfolio = () => {
  const styledDeck = styles.deck;
  const styledContent = styles.content;
  
  const to = (i: number) => ({
    x: 0,
    y: i * -1,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  });
  const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
  const trans = (r: number, s: number) =>
    `perspective(1500px) rotateX(30deg) rotateY(${
      r / 10
    }deg) rotateZ(${r}deg) scale(${s})`;

  // This is being used down there in the view, it interpolates rotation and scale into a css transform
  const [gone] = useState(() => new Set()); // The set flags all the CARDS that are flicked out
  const [props, api] = useSprings(CARDS.length, (i) => ({
    ...to(i),
    from: from(),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.02; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      api.start((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        // When a card is gone it flys out left or right, otherwise goes back to zero
        let x = 0;
        if (isGone) {
          x = (150 + window.innerWidth) * dir;
        } else if (down) {
          x = mx;
        }
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active CARDS lift up a bit
        let tension = 500;
        if (down) {
          tension = 800;
        } else if (isGone) {
          tension = 200;
        }
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension },
        };
      });
      if (!down && gone.size === CARDS.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );

  return (
    <section
      id="portfolio"
      className="bg-black mt-14 p-4 rounded-lg md:mt-18 md:p-8 relative overflow-hidden h-[500px] scroll-mt-30 md:scroll-mt-34"
    >
      <h2 className="font-serif font-bold text-2xl">PORTFOLIO</h2>

      <div className={styles.container}>
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div className={styledDeck} key={CARDS[i]} style={{ x, y }}>
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <animated.div
              className={styledContent}
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                backgroundImage: CARDS[i],
              }}
            />
          </animated.div>
        ))}
      </div>
    </section>
  );
};

export { Portfolio };
