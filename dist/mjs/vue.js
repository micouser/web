// register the grid component
Vue.component('demo-grid', {
  template: '#grid-template',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})

// bootstrap the demo
var demo = new Vue({
  el: '#demo',
  data: {
    searchQuery: '',
    gridColumns: ['name', 'power','list'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity ,list:'a'},
      { name: 'Bruce Lee', power: 9000 ,list:'b'},
      { name: 'Jackie Chan', power: 7000 ,list:'c'},
      { name: 'Jet Li', power: 8000,list:'d' }
    ]
  }
})
