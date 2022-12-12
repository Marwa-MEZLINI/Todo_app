import SideNavigation from "./SideNavigation";

function Layout(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <SideNavigation />
                <div className="col-1"></div>
                <main className="col-8" >
                    {props.children}
                </main>
            </div>
        </div>
    )
}

export default Layout;