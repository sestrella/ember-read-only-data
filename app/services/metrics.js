import Ember from 'ember';

export default Ember.Service.extend({
  _cpuMetrics: [
    { usage: 0.8, date: '2015-01-01' },
    { usage: 0.2, date: '2015-01-02' },
    { usage: 0.6, date: '2015-01-03' },
    { usage: 0.7, date: '2015-01-04' },
    { usage: 0.1, date: '2015-01-05' },
    { usage: 0.9, date: '2015-01-06' },
    { usage: 0.2, date: '2015-01-07' },
    { usage: 0.5, date: '2015-01-08' }
  ],

  _memoryMetrics: [
    { usage: 0.1, date: '2015-01-01' },
    { usage: 0.7, date: '2015-01-02' },
    { usage: 0.8, date: '2015-01-03' },
    { usage: 0.3, date: '2015-01-04' },
    { usage: 0.4, date: '2015-01-05' },
    { usage: 0.1, date: '2015-01-06' },
    { usage: 0.3, date: '2015-01-07' },
    { usage: 0.2, date: '2015-01-08' }
  ],

  _perPage: 2,
  _totalPages: 4,

  fetchCpuMetrics: function(page) {
    return {
      elements:   this._metricsByPage(this._cpuMetrics, page),
      totalPages: this._totalPages
    };
  },

  fetchMemoryMetrics: function(page) {
    return {
      elements:   this._metricsByPage(this._memoryMetrics, page),
      totalPages: this._totalPages
    };
  },

  _metricsByPage: function(metrics, page) {
    var index = (page - 1) * this._perPage;
    return metrics.slice(index, index + this._perPage);
  }
});
