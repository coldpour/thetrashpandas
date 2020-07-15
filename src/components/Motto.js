import React, { Fragment } from "react";

import PopRockMoshDisco from "components/PopRockMoshDisco";
import YoureGonnaDance from "components/YoureGonnaDance";
import { LightThemeProvider } from "./Theme";

const Motto = (props) => (
  <>
    <LightThemeProvider>
      <PopRockMoshDisco />
    </LightThemeProvider>
    <YoureGonnaDance />
  </>
);

export default Motto;
