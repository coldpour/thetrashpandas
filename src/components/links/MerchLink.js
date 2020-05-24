import React from "react";

import NavLink from "components/NavLink";
import Anchor from "components/Anchor";

const MerchLink = props => (
  <NavLink
    element={Anchor}
    href="https://shop.spreadshirt.com/trash-pandas"
    {...props}
  >
    merch
  </NavLink>
);

export default MerchLink;
