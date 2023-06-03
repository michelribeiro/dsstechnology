export default function OurGols() {
  return (
    <main className="pt-4">
      <h2
        id="ourgouls"
        className="mb-3 font-semibold box-decoration-slice bg-gradient-to-r from-indigo-600 to-[#2E99D5] text-white p-2"
      >
        OUR VALUES
      </h2>

      <section className="grid lg:grid-flow-col lg:auto-cols-auto gap-3 p-2 lg:p-0">
        <article className="leading-6 border-2 rounded p-4">
          <h3 className="font-semibold uppercase">Mission</h3>
          <p>
            Our mission is to provide cutting-edge cybersecurity technology that
            can quickly and effectively identify and address cyber threats to
            protect sensitive data on public and private company networks,
            reducing the incidence of cybercrime.
          </p>
        </article>
        <article className="leading-6 border-2 rounded p-4">
          <h3 className="font-semibold uppercase">Vision</h3>
          <p>
            Our vision is to be a leading provider of cybersecurity solutions
            that enable businesses to operate securely and efficiently in an
            ever- evolving digital landscape.
          </p>
        </article>
        <article className="leading-6 border-2 rounded p-4">
          <h3 className="font-semibold uppercase">Values</h3>
          <p>
            We value innovation, quality, affordability, accessibility, and
            customer satisfaction. We are committed to using the latest
            technology and research to develop products that are safe,
            effective, and easy to use in a digital environment. We are
            dedicated to listening to our customers and providing exceptional
            service and support, enhancing cybersecurity, and reducing crimes.
          </p>
        </article>
      </section>
    </main>
  );
}
