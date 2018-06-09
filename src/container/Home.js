import React from 'react';
import '../scss/base/reset.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let Home = () => (
  <section>
    <h1>WellCome!!</h1>
    <Link to="/Counter" style={{ color: 'blue' }}>
      to Count
    </Link>
  </section>
);

export default connect()(Home);
