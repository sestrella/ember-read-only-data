import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(_, model) {
    this._updateController('cpu-metrics', model.cpuMetrics);
    this._updateController('memory-metrics', model.memoryMetrics);
  },

  model: function(params) {
    return Ember.RSVP.hash({
      cpuMetrics:    this._fetchCpuMetrics(params.cpuPage),
      memoryMetrics: this._fetchMemoryMetrics(params.memoryPage)
    });
  },

  actions: {
    fetchCpuMetrics: function(page) {
      this._updateController('cpu-metrics', this._fetchCpuMetrics(page));
    },

    fetchMemoryMetrics: function(page) {
      this._updateController('memory-metrics', this._fetchMemoryMetrics(page));
    }
  },

  _fetchCpuMetrics: function(page) {
    return this.metrics.fetchCpuMetrics(page);
  },

  _fetchMemoryMetrics: function(page = 1) {
    return this.metrics.fetchMemoryMetrics(page);
  },

  _updateController: function(name, metrics) {
    var controller = this.controllerFor(name);
    controller.set('model', metrics.elements);
    controller.set('totalPages', metrics.totalPages);
  }
});
