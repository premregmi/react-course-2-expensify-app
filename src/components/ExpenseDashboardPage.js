import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div className="dashboard">
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
    <div>
      <ExpensesSummary />
    </div>
  </div>
);

export default ExpenseDashboardPage;
