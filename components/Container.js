export default ({ children, ...props }) => (
  <div {...props}>
    {children}

    <style jsx>{`
      div {
        margin: 16px auto;
        width: 66%;
      }
    `}</style>
  </div>
);
