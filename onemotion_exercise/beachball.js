"use strict";

import { animate, stagger, timeline } from "https://cdn.skypack.dev/motion";

// animate(".ball", { x: 400, rotate: 200 }, { duration: 2 });

// animate(".ball", { scale: 0 }, { delay: 1, duration: 3 });

const sequence = [
  [".ball", { x: 400, rotate: 200 }, { duration: 1 }],

  // This will start at the same time as the x: 100 animation
  [".ball", { scale: 0, x: 800, y: -900 }, { duration: 1 }],
];

// [
//     [".ball", { x: 400, rotate: 200 }, { duration:3 }];
// ]

timeline(sequence, { duration: 2 });
