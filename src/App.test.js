import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function sum(a, b){
    return a + b;
}

it('sums numbers', ()=> {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
})


