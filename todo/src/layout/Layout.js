import SideNavigation from "./SideNavigation";


function Layout(props) {
    return (
        <div className="container-fluid vh-100">
            <div className="row">
                <SideNavigation />
                <main className="col-9" >
                    {props.children}
                </main>
            </div>
        </div>
    )
}

export default Layout;