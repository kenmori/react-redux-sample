import React from 'react';
import TestRenderer from 'react-test-renderer';


const Topic = () => (
    <div>fafa</div>
)

const testRenderer = TestRenderer.create(
    <Topic />
);

console.log("Topic", testRenderer.toJSON());

export default Topic;
