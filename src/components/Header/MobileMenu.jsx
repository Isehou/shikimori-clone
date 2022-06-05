import { useState } from "react";

function MobileMenu({ openMenu, changeMenu }) {
  return (
    <div
      className={openMenu ? "menu active" : "menu"}
      // onClick={() => {
      //   changeMenu(false);
      // }}
    >
      {console.log("hello")}
    </div>
  );
}
export default MobileMenu;
