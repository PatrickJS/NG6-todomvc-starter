import {TodoItemController} from './todoItem.component';

describe('Todo Item Component', () => {

  const task = {
    description: 'Unchanged description',
    complete: false
  };

  /** @type TodoItemController */
  let ctrl;

  let todoManager, todoManagerMock;

  beforeEach(() => {
    todoManager = {
      remove: (task) => {},
      toggleStatus: (task) => {}
    };
    todoManagerMock = sinon.mock(todoManager);
    ctrl = new TodoItemController(todoManager);
    ctrl.task = task;
  });

  it('has initial state', () => {
    expect(ctrl.isEditing).to.be.false;
    expect(ctrl.complete).to.be.equal(task.complete);
  });

  it('Updates task description', () => {
    ctrl.onSave('changed description');
    expect(task.description).to.be.equal('changed description');
  });

  it('Removes item from list in case of empty description', () => {
    todoManagerMock.expects('remove').once().withExactArgs(task);
    ctrl.onSave('');
    todoManagerMock.verify();
  });

  it('Turns off editing mode after save', () => {
    ctrl.isEditing = true;
    ctrl.onSave('description');
    expect(ctrl.isEditing).to.be.false;
  });

  it('removes item from list', () => {
    todoManagerMock.expects('remove').once().withExactArgs(task);
    ctrl.onDestroyClick();
    todoManagerMock.verify();
  });

  afterEach(() => {
    todoManagerMock.restore();
  });

});
