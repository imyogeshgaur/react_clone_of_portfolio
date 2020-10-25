import React from 'react';
import { NavLink } from "react-router-dom";

const StyleSwitcher = () => {
    return (
       <>
       <div id="switcher" class="">
    <div class="content-switcher">
        <h4>STYLE SWITCHER</h4>
        <ul>
            <li>
                <NavLink to="#" onclick="setActiveStyleSheet('purple');" title="purple" class="color"><img src="../../public/img/styleswitcher/purple.png" alt="purple"/></NavLink>
            </li>
            <li>
                <NavLink to="#" onclick="setActiveStyleSheet('red');" title="red" class="color"><img src="../../public/img/styleswitcher/red.png" alt="red"/></NavLink>
            </li>
            <li>
                <NavLink to="#" onclick="setActiveStyleSheet('blueviolet');" title="blueviolet" class="color"><img src="../../public/img/styleswitcher/blueviolet.png" alt="blueviolet"/></NavLink>
            </li>
            <li>
                <NavLink to="#" onclick="setActiveStyleSheet('blue');" title="blue" class="color"><img src="../../public/img/styleswitcher/blue.png" alt="blue"/></NavLink>
            </li>
            <li>
                <NavLink to="#" onclick="setActiveStyleSheet('goldenrod');" title="goldenrod" class="color"><img src="../../public/img/styleswitcher/goldenrod.png" alt="goldenrod"/></NavLink>
            </li>
            <li>
                <NavLink to="#" onclick="setActiveStyleSheet('magenta');" title="magenta" class="color"><img src="../../public/img/styleswitcher/magenta.png" alt="magenta"/></NavLink>
            </li>
            <li>
                <NavLink to="#" onclick="setActiveStyleSheet('yellowgreen');" title="yellowgreen" class="color"><img src="../../public/img/styleswitcher/yellowgreen.png" alt="yellowgreen"/></NavLink>
            </li>
            <li>
                <NavLink to="#" onclick="setActiveStyleSheet('orange');" title="orange" class="color"><img src="../../public/img/styleswitcher/orange.png" alt="orange"/></NavLink>
            </li>
            <li>
                <NavLink to="#" onclick="setActiveStyleSheet('green');" title="green" class="color"><img src="../../public/img/styleswitcher/green.png" alt="green"/></NavLink>
            </li>
            <li>
                <NavLink to="#" onclick="setActiveStyleSheet('yellow');" title="yellow" class="color"><img src="../../public/img/styleswitcher/yellow.png" alt="yellow"/></NavLink>
            </li>
        </ul>

        <div id="hideSwitcher">&times;</div>
    </div>

</div>
<div id="showSwitcher" class="styleSecondColor"><i class="fa fa-cog fa-spin"></i></div>
       </>
    )
}

export default StyleSwitcher;
