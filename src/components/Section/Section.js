export const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h1 className="sectionTitle">{title}</h1>
      {children}
    </section>
  );
};
