Meteor.Router.add({
	'/' : 'slub',
	'/slub' : {
		to:'slub',
		and: function(){Session.set('activeMenu', 'slub');}
	},
	'/wesele' : {
		to:'wesele',
		and: function(){Session.set('activeMenu', 'wesele');}
	},
	'/onas' : {
		to:'onas',
		and: function(){Session.set('activeMenu', 'onas');}
	},
	'/info' : {
		to:'info',
		and: function(){Session.set('activeMenu', 'info');}
	},
	'/prezenty' : {
		to:'prezenty',
		and: function(){Session.set('activeMenu', 'prezenty');}
	}
});