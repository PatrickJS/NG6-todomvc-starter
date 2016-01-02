
class TodoListFilter {
  filter(state) {
    this.onFilter({state});
  }
}

export default {
  bindings: {
    onFilter: '&',
    filterState: '='
  },
  template: `
    <ul class="filters">
      <li><a href ng-class="{selected: todoListFilter.filterState == 'all'}" ng-click="todoListFilter.filter('all')">All</a></li>
      <li><a href ng-class="{selected: todoListFilter.filterState == 'active'}" ng-click="todoListFilter.filter('active')">Active</a></li>
      <li><a href ng-class="{selected: todoListFilter.filterState == 'completed'}" ng-click="todoListFilter.filter('completed')">Completed</a></li>
    </ul>
  `,
  controller: TodoListFilter
}
