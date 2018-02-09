import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div className="expense-single">
    <Link className="title" to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      <span>{numeral(amount / 100).format('$0,0.00')}</span>
      -
      <span>{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </p>
  </div>
);

export default ExpenseListItem;
