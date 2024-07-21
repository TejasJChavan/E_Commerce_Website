import { useRef, useState } from "react";

function Navbar() {
  const listRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  function onClick(event) {
    const list = listRef.current;
    if (menuOpen) {
      event.target.src = "http://localhost:3000/assets/menu-50.png";
      list.classList.remove("opacity-100");
      list.classList.remove("top-[64px]");
    } else {
      event.target.src = "http://localhost:3000/assets/cross-50.png";
      list.classList.add("opacity-100");
      list.classList.add("top-[64px]");
    }
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className="bg-5 h-[64px] items-center flex p-4 justify-around z-50 relative">
        <div
          to
          className="text-1 mr-2 cursor-pointer text-4xl text-center p-1 rounded-xl pb-3"
        >
          <a href="/">Vendora</a>
        </div>
        <input
          className="bg-1 w-3/5 py-1 min-w-40 pl-3 rounded-lg focus:outline-none"
          placeholder="Search"
        ></input>

        <img
          src="assets/menu-50.png"
          alt="menu"
          className="lg:hidden block h-full mx-3 cursor-pointer"
          onClick={onClick}
        />

        <ul
          ref={listRef}
          className="lg:opacity-100 transition-all ease-in duration-500 opacity-0 top-[-400px] lg:h-10 lg:flex lg:items-center lg:static absolute bg-5 w-full lg:w-auto z-[-1] lg:z-auto left-0 lg:py-0 py-2 lg:pl-0 pl-4"
        >
          <li className="h-full flex text-1 items-center gap-4 cursor-pointer hover:scale-[1.02] transition-all ease-in-out">
            <a href="/cart" className="h-full">
            <img
            src="assets/cart-50.png"
            alt="shopping-cart"
            className="max-h-full mx-3 lg:py-0 py-4"
          /></a>
            <span className="lg:hidden">Cart</span>
          </li>
          <li className="h-full flex text-1 items-center gap-4 cursor-pointer hover:scale-[1.02] transition-all ease-in-out">
            <a href="/login" className="h-full">
              <img
                src="assets/male-user-50.png"
                alt="user-male-circle--v1"
                className="max-h-full mx-3 lg:py-0 py-4"
              />
            </a>
            <span className="lg:hidden">Account</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
