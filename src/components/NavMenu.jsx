import arrow from "../assets/arrow-down-s-fill.png";

function NavMenu() {
  return (
    <>
      <div className="menu-links">
        <a href="#">My Dashboard</a>
        <a href="#">Today</a>
        <a href="#"> Hourly</a>
        <a href="#">10 Day</a>
        <a href="#">Weekend</a>
        <a href="#">Monthly</a>
        <a href="#">Radar</a>
        <div className="forecasts">
          <a href="#">More Forecasts</a>
        </div>
      </div>
    </>
  );
}

export default NavMenu;
