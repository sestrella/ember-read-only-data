import Ember from 'ember';
import PaginatedController from './paginated-controller';

export default Ember.ArrayController.extend(PaginatedController, {
  actions: {
    pageChanged: function(page) {
      this.send('fetchMemoryMetrics', page);
    }
  }
});
