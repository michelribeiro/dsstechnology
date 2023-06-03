import Image from "next/image";

export default function Header() {
  return (
    <>
      <header
        className="
        bg-[url('/dsstechnology/img/call-to-action.png')] grid content-center bg-cover bg-bottom bg-no-repeat grid-cols-1 h-[400px]
      "
      >
        <h1 className="ml-8">
          <Image
            src="/dsstechnology/img/logo.png"
            alt="Deceptive Security Suite Technology"
            width={150}
            height={150}
            className="rounded"
          />
        </h1>
      </header>
      <nav className="bg-[#2E99D5] flex justify-center">
        <ul className="flex gap-6 p-1">
          <li>
            <a
              href="#aboutus"
              className="block text-white p-3 border-2 border-[#2E99D5] hover:border-white rounded"
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="#ourgouls"
              className="block text-white p-3 border-2 border-[#2E99D5] hover:border-white rounded"
            >
              OUR VALUES
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-white p-3 border-2 border-[#2E99D5] hover:border-white rounded"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
