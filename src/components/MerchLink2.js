import React from "react";

import Link from "components/Link";

const MerchLink = ({
  element: Element = Link,
  children = "merch",
  ...rest
}) => (
  <Element href="https://shop.spreadshirt.com/trash-pandas" {...rest}>
    {children}
  </Element>
);

export default MerchLink;
