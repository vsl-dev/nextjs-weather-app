import Link from "next/link";

export default function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer>
        <div className="text-center w-full">
          <Link href="https://vsldev.tk">
            <p style={{ cursor: "pointer" }}>Created by vsldev</p>
          </Link>
          <Link href="https://github.com/vsl-dev">
            <p style={{ cursor: "pointer" }}>Github</p>
          </Link>
        </div>
      </footer>
    </>
  );
}
