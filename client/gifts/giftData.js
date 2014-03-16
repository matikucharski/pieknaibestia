var prezenty = [
	{
		alias: 'pianino',
		name: 'Pianino cyfrowe',
		url: 'www.portalklawiszowy.pl',
		image: '/piano.jpg',
		reserved: false,
		description: "Bardzo chcielibyśmy dostać pianino cyfrowe KORG - Basia uwielbia grać na pianinie i będzie próbowała zdawać na akademię, Mateusz jako inżynier dźwięku również doceni zalety posiadania takiego instrumentu"
	},
	{
		alias: 'zelasko',
		name: 'Żelasko elektryczne',
		url: 'www.ceneo.pl',
		image: '/zelasko.jpeg',
		reserved: true,
		description: "Trzeba mieć wyprasowane koszule :)"
	},
	{
		alias: 'winoCzerwone',
		name: 'Kieliszki do wina czerwonego',
		url: 'www.ikea.pl',
		image: '/winoCzerw.jpg',
		reserved: false,
		description: "Podstawa romantycznych kolacji :)"
	}
];

Template.giftList.helpers({
	gifts: function () {
		return prezenty;
	}
});