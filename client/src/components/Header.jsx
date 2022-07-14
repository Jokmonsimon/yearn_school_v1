import icon from './assets/icon.svg';

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={icon} alt="logo" className="mr-2" />
            <div className="fs-4">Yearn School</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
