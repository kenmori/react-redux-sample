import React from 'react';
import '../scss/base/reset.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let Home = () => (
  <section>
    <h1>WellCome!!</h1>
    <Link to="/counter" style={{ color: 'blue' }}>
      to Count
    </Link>
    <br />
    <Link to="/example" style={{ color: 'blue' }}>
      Example
    </Link>
  </section>
);

export default connect()(Home);
