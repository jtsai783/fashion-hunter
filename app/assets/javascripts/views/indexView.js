FashionHunter.Views.IndexView = Backbone.View.extend({
	template: JST.index_view,

	events: {
		'click button.mhnav': 'navigate',
	},

	navigate: function(event){
		var pos = $(event.currentTarget).data('position');
		var dir = $(event.currentTarget).data('direction');
		var root_src = "/assets/mh_images/Female/" + pos + "/"
		var el = "img." + pos
		attr = $(el).data('index');
		attr = attr + dir;
		src = root_src + attr + ".png"
		$(el).attr('src', src);
		$(el).data('index', attr);
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
});