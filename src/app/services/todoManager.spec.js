import TodoManager from './todoManager';

describe('TodoManager service', () => {

  var manager;

  beforeEach(() => {
    manager = new TodoManager();
  });

  describe('Filtering', () => {

    beforeEach(() => {
      const first = manager.add('test 1');
      first.complete = true;
      manager.add('test 2');
    });

    it('can show all tasks', () => {
      manager.filter('all');
      expect(manager.list.length).to.have.length.eq(2);
    });

    it('can show pending tasks', () => {
      manager.filter('pending');
      expect(manager.list.length).to.have.length.eq(1);
    });

    it('can show completed tasks', () => {
      manager.filter('completed');
      expect(manager.list.length).to.have.length.eq(1);
    });

  });

  describe('Stats', () => {
    let first;

    beforeEach(() => {
      first = manager.add('test 1');
    });

    it('can show number of remaining tasks', () => {
      expect(manager.notCompletedCount()).to.eq(1);
    });

    it('shows zero if there is no pending tasks', () => {
      first.complete = true;
      expect(manager.notCompletedCount()).to.eq(0);
    });
  });

  describe('Toggle', () => {

  });

});
