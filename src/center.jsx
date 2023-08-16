import React from 'react'

export default function Center(props) {
console.log(123,props);
    let { name, type, price, num, _id } = props.id

    return (
        <ul>
            <li>{name}</li>
            <li>{type}</li>
            <li>{price}</li>
            <li>{num}</li>
        </ul>
    )
}
