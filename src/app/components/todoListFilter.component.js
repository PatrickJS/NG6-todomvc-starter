
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
      <li><a href ng-class="{selected: vm.filterState == 'all'}" ng-click="vm.filter('all')">All</a></li>
      <li><a href ng-class="{selected: vm.filterState == 'active'}" ng-click="vm.filter('active')">Active</a></li>
      <li><a href ng-class="{selected: vm.filterState == 'completed'}" ng-click="vm.filter('completed')">Completed</a></li>
    </ul>
  `,
  controller: TodoListFilter,
  controllerAs: 'vm'
}
