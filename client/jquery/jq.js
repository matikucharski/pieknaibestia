$(function(){
	//TODO change it to do it on reload - without click
	//communication with router session
	var menuItem = Session.get('activeMenu');
	$("ul.nav li#"+menuItem).addClass('active');

	//highlights clicked menu item
	$("ul.nav li").click(function(){
		$("li.active").removeClass('active');
		$(this).addClass('active');
	});

	//hides bootstrap menu after click
	$("div.nav-collapse").click("li", function() {
    	$('.nav-collapse.in').collapse('hide');
	});
	//removes highlight from menu item
	$("a.brand").click(function(){
		$("li.active").removeClass('active');
		$('.nav-collapse.in').collapse('hide');
	});
});