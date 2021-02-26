import React, {useState} from 'react';

export default function ListItem({todo, id, checkComplete}) {
    const [onEdit, setOnEdit] = useState(false)
    const [editValue, setEditValue] = useState(todo.name)

    const handleOnEdit = () => {
        setOnEdit(true)
    }

    const handleSave = id => {
        setOnEdit(false)
    }

    if(onEdit) {
        return (
            
                <li>
                    
                    <input type="text" id="editValue" value={editValue} name="editValue" 
                    onChange={e => setEditValue(e.target.value.toLowerCase())}/>
                    <button onClick={() => handleSave(id)}>Save</button>
                </li>
        )
    } else {
        return (
            <div>
                <li>
                    <label htmlFor={id} className={todo.complete ? "active" : ""}>
                        <input type="checkbox" id={id} checked={todo.complete}
                        onChange={() => checkComplete(id)}/>
                        {todo.name}
                    </label>
                    <button disabled={todo.complete} onClick={handleOnEdit}>Edit</button>
                </li>
            </div>
        ) 
    }
}
