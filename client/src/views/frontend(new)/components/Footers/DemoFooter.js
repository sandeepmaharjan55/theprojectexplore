/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/Inksvilla-105401371607429"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/inksvillapro/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCeuyOwpPgt2EZXNTpJrJlNA"
                  target="_blank"
                >
                  Youtube
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Twitter
                </a>
              </li> */}
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, Inksvilla Inc.
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
