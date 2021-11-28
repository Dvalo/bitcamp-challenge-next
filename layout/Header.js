import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Container>
        <div className="header-inner">
          <a
            href="https://forum.bitcamp.ge/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/logo.jpg" alt="BitCamp" width="192" height="40" />
          </a>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <a
                  href="https://forum.bitcamp.ge/t/bitcamp-drupal-node-react-next-js/358/41"
                  target="_blank"
                  rel="noreferrer"
                >
                  Challenge
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
