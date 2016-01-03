
export default {
  bindings: {
    todos: '='
  },
  template: `
    <ul class="todo-list">
      <todo-item todo="todo" ng-repeat="todo in vm.todos"></todo-item>
    </ul>
  `,
  controllerAs: 'vm'
}
