import "@picocss/pico"
import "./Layout.css"
import {Outlet} from "react-router";

function Layout() {
    return (
        <>
            <div className={"header"}>
                <div className={"header-menu"}>
                    <h1 className={"creatorverse-header"}>CREATORVERSE</h1>
                    <div style={{"display": "flex", "width":"50%", "height": "50%"}}>
                        <button className={"outline"}>VIEW ALL CREATORS</button>
                        <button className={"outline"}>ADD A CREATOR</button>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Layout;