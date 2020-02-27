import React from 'react'

import { Link } from 'components/Router'

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/subscribe">Subscribe</Link>
      <Link to="/book">Book</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  )
}
