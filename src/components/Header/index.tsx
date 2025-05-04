import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { Scroll, Timer } from "phosphor-react";
import TomateTimer from "../../assets/TomateTimer.png";

export function Header() {
    return (
        <HeaderContainer>
            <img src={TomateTimer} alt="" />
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    );
}