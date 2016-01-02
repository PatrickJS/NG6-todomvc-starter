
export default {
  bindings: {
    todos: '='
  },
  template: `
    <ul class="todo-list">
      <todo-item todo="todo" ng-repeat="todo in todoList.todos"></todo-item>
    </ul>
  `
}
