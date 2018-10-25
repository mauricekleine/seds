export default ({ children }) => (
  <div>
    {children}

    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
    `}</style>
  </div>
);
