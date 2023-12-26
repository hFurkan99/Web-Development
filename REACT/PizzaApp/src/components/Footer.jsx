const open = 9;
const close = 22;

function Footer() {
  let time = new Date().getHours();
  console.log(time);
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {time > 9 && time < 22
            ? "Welcom to the PizzaLand"
            : `We're open from ${open}:00 to ${close}:00. Come visit us or order online.`}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default Footer;
