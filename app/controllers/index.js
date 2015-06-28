import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: [
    { cpuPage: 'cpu_page' },
    { memoryPage: 'memory_page' }
  ],
  needs: ['cpu-metrics', 'memory-metrics'],

  cpuPage: 1,
  memoryPage: 1,

  cpuMetrics: Ember.computed.alias('controllers.cpu-metrics'),
  memoryMetrics: Ember.computed.alias('controllers.memory-metrics'),

  updateCpuMetrics: function() {
    this.set('cpuMetrics.currentPage', this.get('cpuPage'));
  }.observes('cpuPage'),

  updateMemoryMetrics: function() {
    this.set('memoryMetrics.currentPage', this.get('memoryPage'));
  }.observes('memoryPage'),

  actions: {
    cpuMetricsPageChanged: function(page) {
      this.set('cpuPage', page);
      this.get('cpuMetrics').send('pageChanged', page);
    },

    memoryMetricsPageChanged: function(page) {
      this.set('memoryPage', page);
      this.get('memoryMetrics').send('pageChanged', page);
    }
  }
});
