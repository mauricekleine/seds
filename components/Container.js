import css from "styled-jsx/css";

const { className: content, styles: contentStyles } = css.resolve`
  flex: 8;

  @media (min-width: 768px) {
    flex: 6;
  }
`;

const { className: gutter, styles: gutterStyles } = css.resolve`
  flex: 0;

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const { className: wrapper, styles: wrapperStyles } = css.resolve`
  display: flex;
  margin: 8px;

  @media (min-width: 576px) {

  }
  @media (min-width: 768px) {

  }
  @media (min-width: 992px) {

  }
  @media (min-width: 1200px) {

  }
`;

export default ({ children }) => (
  <div className={wrapper}>
    <div className={gutter} />

    <div className={content}>{children}</div>

    <div className={gutter} />

    {contentStyles}
    {gutterStyles}
    {wrapperStyles}
  </div>
);
