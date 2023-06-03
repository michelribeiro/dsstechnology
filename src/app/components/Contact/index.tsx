export default function Contact() {
  return (
    <>
      <main className="pt-4">
        <h2
          id="contact"
          className="mb-3 font-semibold box-decoration-slice bg-gradient-to-r from-indigo-600 to-[#2E99D5] text-white p-2"
        >
          CONTACT
        </h2>

        <section className="leading-6 p-2">
          <p className="mt-2">
            phone: <a href="tel:+5521979044440">+55 21 97904-44440</a>
            <br />
            <a href="mailto:michel.ribeiro@michelribeiro.com.br">
              email: michel.ribeiro@michelribeiro.com.br
            </a>
          </p>
        </section>
      </main>
      <div className="pt-3 pb-5 text-center">
        <p>Copyright Termly 2023</p>
      </div>
    </>
  );
}
