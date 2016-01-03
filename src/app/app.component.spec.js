import {TodoAppController} from './app.component';

describe('Application Component', () => {

  /** @type {TodoAppController} */
  let ctrl;
  let todoManager, todoManagerMock;

  beforeEach(() => {
    todoManager = {
      add: (task) => {},
      showAll: () => {},
      showActive: () => {},
      showCompleted: () => {},
      toggleAll: () => {}
    };
    todoManagerMock = sinon.mock(todoManager);
    ctrl = new TodoAppController(todoManager);
  });

  it('adds task to list', () => {
    todoManagerMock.expects('add').once().withExactArgs('description');
    ctrl.onSave('description');
    todoManagerMock.verify();
  });

  it('not adds task with empty description to list', () => {
    todoManagerMock.expects('add').never();
    ctrl.onSave('');
    todoManagerMock.verify();
  });

  describe('Filtering', () => {
    ['All', 'Completed', 'Active'].forEach((state) => {

      it(`shows ${state.toLowerCase()} tasks`, () => {
        todoManagerMock.expects('show'+state).once();
        ctrl.onFilter(state.toLowerCase());
        todoManagerMock.verify();
      });

    });
  });

  it('toggles state of all tasks', () => {
    todoManagerMock.expects('toggleAll').once();
    ctrl.onToggleAll();
    todoManagerMock.verify();
  });

  afterEach(() => {
    todoManagerMock.restore();
  });

});
