import Link from "next/link";
import css from "styled-jsx/css";

import Container from "./Container";

const { className, styles } = css.resolve`
  div {
    display: flex;
  }
`;

export default () => (
  <div className={className}>
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

    {styles}
  </div>
);
