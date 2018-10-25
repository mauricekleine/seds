import Link from "next/link";

import Container from "./Container";

export default () => (
  <Container>
    <Link href="/" prefetch>
      <a>Home</a>
    </Link>

    <Link href="/about" prefetch>
      <a>About SEDS</a>
    </Link>

    <Link href="/environment" prefetch>
      <a>Environment</a>
    </Link>

    <Link href="/education" prefetch>
      <a>Children's Education</a>
    </Link>

    <Link href="/reports" prefetch>
      <a>Reports</a>
    </Link>

    <style jsx>{`
      a {
        margin-right: 16px;
      }
    `}</style>
  </Container>
);
