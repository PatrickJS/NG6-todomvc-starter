import TodoManager from './todoManager';

describe('TodoManager service', () => {

  /** @type {TodoManager} */
  var manager;

  beforeEach(() => {
    manager = new TodoManager();
  });

  it('correctly handles stats', () => {
    const first = manager.add('test 1');

    expect(manager.notCompletedCount()).to.eq(1);
    expect(manager.completedCount()).to.eq(0);

    first.complete = true;

    expect(manager.notCompletedCount()).to.eq(0);
    expect(manager.completedCount()).to.eq(1);
  });

  describe('Filtering', () => {

    beforeEach(() => {
      const first = manager.add('test 1');
      first.complete = true;
      manager.add('test 2');
    });

    it('can show all tasks', () => {
      manager.showAll();
      expect(manager.filteredList.length).to.have.length.eq(2);
    });

    it('can show pending tasks', () => {
      manager.showActive();
      expect(manager.filteredList.length).to.have.length.eq(1);
    });

    it('can show completed tasks', () => {
      manager.showCompleted();
      expect(manager.filteredList.length).to.have.length.eq(1);
    });

  });

  describe('Toggle All', () => {
    let first, second;

    beforeEach(() => {
      first = manager.add('first');
      second = manager.add('second');
      second.complete = true;
    });

    it('makes all tasks complete if there is at least one incomplete task', () => {
      expect(manager.notCompletedCount()).to.eq(1);
      manager.toggleAll();
      expect(manager.notCompletedCount()).to.eq(0);
    });

    it('makes all tasks active if all tasks is complete', () => {
      first.complete = true;
      expect(manager.notCompletedCount()).to.eq(0);
      manager.toggleAll();
      expect(manager.notCompletedCount()).to.eq(2);
    });

  });

});
