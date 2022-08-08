import React from 'react';

export class Counter extends React.Component {
  state = { value: 0 };
  handleIncrement = () => {};
  handleDerement = () => {};

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <div>
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDerement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}
