function TodoItem(props) {
    return (
        <li>
            <div className="form-check">
                <label className="form-check-label">
                    <input className="checkbox" type="checkbox">{props.text}</input>
                    <i className="input-helper"></i>
                </label>
            </div>
            <i className="remove mdi mdi-close-circle-outline"></i>
        </li>


    )
}

export default TodoItem;