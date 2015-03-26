FashionHunter.Routers.Router = Backbone.Router.extend({
	initialize: function(option){
		this.$rootEl = option.$rootEl;
	},

	routes:{
		'': 'index'
	},

	index: function(){
		var indexView = new FashionHunter.Views.IndexView();
		this._swapView(indexView);
	},

	_swapView: function(view){
		if (typeof this.currentView !== 'undefined') {
			this.currentView.remove();
		}
		this.currentView = view;
		this.$rootEl.html(view.render().$el);
	}

});
