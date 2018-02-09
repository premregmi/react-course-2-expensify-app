import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpanse } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpanse(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div >
        <h1 className="page-title">Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
          submitButtonlabel="Add Expense"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpanse: (expense) => dispatch(startAddExpanse(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
