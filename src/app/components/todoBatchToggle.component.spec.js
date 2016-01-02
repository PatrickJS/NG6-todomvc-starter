import {BatchTogglerController} from './todoBatchToggle.component';

describe('Todo Batch Toggle Component', () => {

  /** @type {BatchTogglerController} */
  let ctrl;

  beforeEach(() => {
    ctrl = new BatchTogglerController();
    ctrl.todos = [
      {complete: true},
      {complete: false}
    ];
  });

  it('has initial state', () => {
    expect(ctrl.allChecked).to.be.false;
  });

  it('highlights if all tasks is complete', () => {
    ctrl.todos[1].complete = true;

    expect(ctrl.allChecked).to.be.true;
  });

});
