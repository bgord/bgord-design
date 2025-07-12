import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { AxisPlacementsGenerator } from "../src/generators/axis-placements-generator";

describe("AxisPlacementsGenerator", () => {
  test("should generate axis placements CSS", () => {
    const config = {
      AxisPlacements: {
        start: "flex-start",
        end: "flex-end",
        center: "center",
        baseline: "baseline",
      },
      Breakpoints: {
        sm: 640,
      },
    } as GeneratorConfigType;

    const generator = new AxisPlacementsGenerator(config);
    const css = generator.generateCss();

    expect(css).toBe(
      `*[data-main='start'] {
  justify-content: flex-start;
}
*[data-main='end'] {
  justify-content: flex-end;
}
*[data-main='center'] {
  justify-content: center;
}
*[data-main='baseline'] {
  justify-content: baseline;
}
*[data-cross='start'] {
  align-items: flex-start;
}
*[data-cross='end'] {
  align-items: flex-end;
}
*[data-cross='center'] {
  align-items: center;
}
*[data-cross='baseline'] {
  align-items: baseline;
}
*[data-self='start'] {
  align-self: flex-start;
}
*[data-self='end'] {
  align-self: flex-end;
}
*[data-self='center'] {
  align-self: center;
}
*[data-self='baseline'] {
  align-self: baseline;
}
@media (max-width: 640px) {
  *[data-sm-main='start'] {
    justify-content: flex-start;
  }
  *[data-sm-main='end'] {
    justify-content: flex-end;
  }
  *[data-sm-main='center'] {
    justify-content: center;
  }
  *[data-sm-main='baseline'] {
    justify-content: baseline;
  }
  *[data-sm-cross='start'] {
    align-items: flex-start;
  }
  *[data-sm-cross='end'] {
    align-items: flex-end;
  }
  *[data-sm-cross='center'] {
    align-items: center;
  }
  *[data-sm-cross='baseline'] {
    align-items: baseline;
  }
  *[data-sm-self='start'] {
    align-self: flex-start;
  }
  *[data-sm-self='end'] {
    align-self: flex-end;
  }
  *[data-sm-self='center'] {
    align-self: center;
  }
  *[data-sm-self='baseline'] {
    align-self: baseline;
  }
}
`,
    );
  });
});
