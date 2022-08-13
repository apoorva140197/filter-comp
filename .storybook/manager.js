import { addons } from "@storybook/addons";
import classplus from "./classplus";

addons.setConfig({
  theme: classplus,
  isToolshown: true,
  sidebar: {
    showRoots: true,
  },
});
