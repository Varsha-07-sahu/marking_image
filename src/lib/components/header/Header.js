import React from "react";
import ButtonList from "./ButtonList";

function Header() {

    return (

        <div style={{ textAlign: "left", backgroundColor: "#4B3F72", marginTop: "0", padding: "10px", fontSize: "35px", color: "white" }}>
            {/* Litwiz Workspace */}
            <ButtonList />
        </div>

    );
}

export default Header;