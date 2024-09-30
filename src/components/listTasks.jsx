function ListTasks({id, name, status}){
    return(
        <li>
            <label style={{fontSize:'20px'}}>
                <input type="checkbox" defaultChecked={status}/>
                {name}
            </label>
            <br />
            <button id= 'editButton'>{`Edit ${name}`}</button>
            <button id= 'deleteButton'>{`Delete ${name}`}</button>
        </li>
    )
}

export default ListTasks;