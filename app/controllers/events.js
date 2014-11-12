import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['email', 'start', 'end'],
  email: null,
  start: null,
  end: null,
  emailFilter: Ember.computed.oneWay('email'),
  startDateTime: function(){
    var startTime = this.get('startTime');
    if(startTime){
      return window.chrono.parseDate( startTime ).toISOString();
    }
  }.property('startTime'),
  endDateTime: function(){
    var endtime = this.get('endTime');
    if(endtime){
      return window.chrono.parseDate( endtime ).toISOString();
    }
  }.property('endTime'),
  filters: function(){
    var emailFilter = this.get('emailFilter');
    var startDateTime = this.get('startDateTime');
    var endDateTime = this.get('endDateTime');

    var filters = {};
    if(emailFilter) { filters.email = emailFilter; }
    if(startDateTime) { filters.start = startDateTime; }
    if(endDateTime) { filters.end = endDateTime; }

    return filters;
  }.property('emailFilter', 'startDateTime', 'endDateTime'),
  actions: {
    reset: function(){
      this.set('email', null);
      this.set('start', null);
      this.set('end', null);
    }
  }
});
