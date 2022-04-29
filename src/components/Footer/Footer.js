import "./Footer.css";

function Footer(props) {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h1 className="line-h">Company</h1>
            <p>
              The brand strives to create respect for its products among the
              audience, so that the presence of the company's products is a sign
              of prestige.
            </p>
          </div>
          <div className="col-3 line-h">
            <h1>Navigation</h1>
            <aside>123 Street,New York,USA</aside>
            <aside>+0123 459 7685</aside>
          </div>
          <div className="col-3 line-h">
            <h1>Opening</h1>
            <aside>Monday-Saturday</aside>
            <aside>09 A.M-09 P.M</aside>
            <aside>Sunday</aside>
            <aside>10 A.M-08 P.M</aside>
          </div>
          <div className="col-3">
            <h1 className="line-h"> Newsletter</h1>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <a href="/">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
