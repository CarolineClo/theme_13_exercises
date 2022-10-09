"use strict";

import { animate, stagger } from "https://cdn.skypack.dev/motion";

animate(".ball", { transform: ["translateY(0)", "translateY(-400px)", "translateY(0)", "translateY(-200px)", "translateY(0)"] }, { duration: 3, delay: stagger(0.2), ease: "ease-in-out", repeat: 2 });
