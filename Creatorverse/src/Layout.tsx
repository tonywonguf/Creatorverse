import "@picocss/pico"
import "./Layout.css"
import {Outlet} from "react-router";

function Layout() {
    return (
        <>
            <div className={"header"}>
                <div className={"header-menu"}>
                    <h1 style={{"width": "100%", "color": "white", "font-size": "120px", "margin":"150px"}}>CREATORVERSE</h1>
                    <div style={{"display": "flex", "width":"50%", "height": "50%"}}>
                        <button className={"outline"} style={{"background-color":"blue", "margin":"25px"}}>VIEW ALL CREATORS</button>
                        <button className={"outline"} style={{"background-color":"blue", "margin":"25px"}}>ADD A CREATOR</button>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Layout;