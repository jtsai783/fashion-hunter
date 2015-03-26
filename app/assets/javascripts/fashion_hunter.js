window.FashionHunter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	new FashionHunter.Routers.Router({
  		$rootEl: $('.container'),
  	});
  	Backbone.history.start();
  }
};

$(document).ready(function(){
  FashionHunter.initialize();
});