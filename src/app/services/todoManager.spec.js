import TodoManager from './todoManager';

describe('TodoManager service', () => {

  var manager;

  beforeEach(() => {
    manager = new TodoManager();
  });

  describe('List filtering', () => {

    beforeEach(() => {
      const first = manager.add('test 1');
      manager.toggleDone(first, true);
      manager.add('test 2');
    });

    it('can show all tasks', () => {
      manager.filterTodos(true);
      expect(manager.list.length).to.have.length.eq(1);
    });

    it('can show pending tasks', () => {
      manager.filterTodos(false);
      expect(manager.list.length).to.have.length.eq(1);
    });

    it('can show done tasks', () => {
      manager.filterTodos(true);
      expect(manager.list.length).to.have.length.eq(1);
    });

  });

  describe('Stats', () => {
    let firstItemID;

    beforeEach(() => {
      firstItemID = manager.add('test 1');
    });

    it('can show number of remaining tasks', () => {
      expect(manager.countLeftTodos()).to.eq(1);
    });

    it('shows zero if there is no pending tasks', () => {
      manager.toggleDone(firstItemID);
      expect(manager.countLeftTodos()).to.eq(0);
    });
  });

});
