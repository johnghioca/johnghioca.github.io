import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import styles from "./styles.module.css";

const Portfolio = () => {
  const commonImgPath = "/images/";
  const cards = [
    "chase.svg",
    "marriott.svg",
    "mondelez.svg",
    "verizon.svg",
    "starbucks.svg",
    "google.svg",
    "maybelline.svg",
    "murad.svg",
    "us-soccer.svg",
    "cruise.svg",
    "palms.svg",
    "nike.svg",
    "hss.svg",
    "ibm.svg",
    "audi.svg",
    "sunrun.svg",
    "mayo.svg",
    "chick-fil-a.svg",
    "longbranch.svg",
    "capital-one.svg",
  ];
  const to = (i: number) => ({
    x: 0,
    y: i * -2,
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
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, (i) => ({
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
        const x = isGone ? (150 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );

  return (
    <section
      id="about-header"
      className="bg-black mt-14 p-4 rounded-lg md:mt-18 md:p-8 relative overflow-hidden h-[500px]"
    >
      <h2 className="font-serif font-bold text-2xl">PORTFOLIO</h2>

      <div className={styles.container}>
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div className={styles.deck} key={i} style={{ x, y }}>
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <animated.div
              className={styles.content}
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                backgroundImage: `url(${commonImgPath}${cards[i]})`,
              }}
            />
          </animated.div>
        ))}
      </div>
    </section>
  );
};

export { Portfolio };
