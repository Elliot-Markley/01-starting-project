export default function Section({ title, children, mode, ...styles }) {
  let cssId = `${mode}`;

  return (
    <section
      id={cssId}
      {...styles}
    >
      <h2>{title}</h2>
      {children}
    </section>
  );
}
