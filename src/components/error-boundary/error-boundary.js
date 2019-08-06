import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.log('Hello');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
}
