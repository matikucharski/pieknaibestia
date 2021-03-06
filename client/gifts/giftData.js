var prezenty = [
	{
		alias: 'pianino',
		name: 'Pianino cyfrowe',
		url: 'www.portalklawiszowy.pl',
		image: '/giftImages/piano.jpg',
		reserved: false,
		description: "Bardzo chcielibyśmy dostać pianino cyfrowe KORG - Basia uwielbia grać na pianinie i będzie próbowała zdawać na akademię, Mateusz jako inżynier dźwięku również doceni zalety posiadania takiego instrumentu"
	},
	{
		alias: 'zelazko',
		name: 'Żelazko elektryczne',
		url: 'www.ceneo.pl',
		image: '/giftImages/zelasko.jpeg',
		reserved: true,
		description: "Trzeba mieć wyprasowane koszule :)"
	},
	{
		alias: 'winoCzerwone',
		name: 'Kieliszki do wina czerwonego',
		url: 'www.ikea.pl',
		image: '/giftImages/winoCzerw.jpg',
		reserved: false,
		description: "Podstawa romantycznych kolacji :)"
	}
];

Template.giftList.helpers({
	gifts: function () {
		return Prezenty.find({});
	},
	loading: function(){
		if (Prezenty.find({}).count()==0){
			return true
		}
		else {
			return false
		}
	}
});

Template.prezenty.helpers({
	loaded: function () {
		if (Prezenty.find({}).count()==0){
			return false
		}
		else {
			return true
		}
	}
});