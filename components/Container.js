export default ({ children, ...props }) => (
  <div {...props}>
    {children}

    <style jsx>{`
      div {
        margin: 8px;
      }
    `}</style>
  </div>
);
