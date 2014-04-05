Meteor.publish('prezenty', function () {
	return Prezenty.find();
});

// Prezenty.deny({
// 	insert: function (userId, doc) {
// 		return true;
// 	},
// 	update: function (userId, doc, fields, modifier) {
// 		return false;
// 	},
// 	remove: function (userId, doc) {
// 		return true;
// 	},
// 	fetch: ['locked'],
// 	transform: function () {
// 		return false;
// 	}
// });
Prezenty.allow({
	insert: function (userId, doc) {
		//...
	},
	update: function (userId, doc, fields, modifier) {
		if (_.isEqual(modifier, { '$set': { reserved: true } })){
			return true	;
		}
	},
	remove: function (userId, doc) {
		//...
	}
	// ,
	// fetch: ['owner']
});