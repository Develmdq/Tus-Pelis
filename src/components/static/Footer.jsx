const Footer = () => {
  const age = new Date();
  return (
    <nav className="navbar fixed-bottom navbar-dark bg-dark d-flex container-fluid p-3 mt-4 align-items-center justify-content-center">
      <div>
        <a
          href="https://www.facebook.com/"
          rel="moopener noreferrer"
          target="_blank"
          className="mx-3"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/"
          rel="moopener noreferrer"
          target="_blank"
          className="mx-3"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com/?lang=es"
          rel="moopener noreferrer"
          target="_blank"
          className="mx-3"
        >
          Twitter
        </a>
      </div>
      <span className="navbar-brand mx-3">
        <p className="fs-6 m-0">
          Copyrigth@ {age.getFullYear()} Alkemy Challenge
        </p>
      </span>
    </nav>
  );
};

export default Footer;
