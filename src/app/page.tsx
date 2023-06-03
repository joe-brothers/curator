export default function Home() {
  return (
    <>
      <h1>Hello world!</h1>
      <hr />
      <hgroup>
        <h2>Heading 2</h2>
        <h3>Subtitle for heading 2</h3>
      </hgroup>
      <hr />
      <div className="grid">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>
          <mark>abcd</mark>
        </div>
      </div>
      <blockquote>
        &quot;Maecenas vehicula metus tellus, vitae congue turpis hendrerit non.
        Nam at dui sit amet ipsum cursus ornare.&quot;
        <footer>
          <cite>- Phasellus eget lacinaaaa</cite>
        </footer>
      </blockquote>
    </>
  );
}
