import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import './Roles.css';


function Roll() {
    const [dropdown, setDropdown] = useState(false);

    const abrirCerrarDropdown = () => {
        setDropdown(!dropdown);
    }
    return (
        <div className="Roll">

            <Dropdown  isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg">
                <DropdownToggle caret className="dropdown">
                    Usuarios 
                </DropdownToggle>

                <DropdownMenu className="menu">
                    <DropdownItem id="ad">Administrador</DropdownItem>
                    <DropdownItem id="op">Operador</DropdownItem>
                </DropdownMenu>
            </Dropdown>

        </div>
    )
};
export default Roll;