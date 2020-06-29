import React from 'react'



const style = {
    background: 'lightyellow',
    border: '2px solid darkorange',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const Square = ({ value, onClick }) => {
    return (
    <button style={style} onClick={onClick} className='square'>
        {value}
    </button>
    )
}

export default Square;