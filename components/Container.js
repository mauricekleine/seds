export default ({ children, ...props }) => (
  <div {...props}>
    {children}

    <style jsx>{`
      div {
        margin: 16px auto;
        width: 100%;
      }

      // Bootstrap container styles
      @media (min-width: 1200px) {
        div {
          max-width: 1140px;
        }
      }
      @media (min-width: 992px) {
        div {
          max-width: 960px;
        }
      }
      @media (min-width: 768px) {
        div {
          max-width: 720px;
        }
      }
      @media (min-width: 576px) {
        div {
          max-width: 540px;
        }
      }
    `}</style>
  </div>
);
