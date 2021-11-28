import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Container>
        <div className="header-inner">
          <Image src="/logo.jpg" alt="BitCamp" width="192" height="40" />
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
