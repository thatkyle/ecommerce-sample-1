import { h, render, Component } from 'preact';

export function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export const numbers = [1, 2, 3, 4, 5];