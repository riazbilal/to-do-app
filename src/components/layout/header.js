import React from 'react'


function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    )
}

const headerStyle = {
    backgorund: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10 px'
}
export default Header;

