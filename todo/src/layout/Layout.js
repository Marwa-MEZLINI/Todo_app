function Layout(props) {
    return (
        <div className="container-fluid">
            <main>
                {props.children}
            </main>
        </div>
    )
}