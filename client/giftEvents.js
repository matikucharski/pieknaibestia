Template.giftItem.events({
	'click input': function () {
		emailDoRezerwacji = prompt('Wpisz proszę swój adres email aby potwierdzić rezerwację '+this.name);
		var that = this;
		//TODO regex validation
		if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailDoRezerwacji)) {
			//try to send email
			Meteor.call('sendEmail',
			//email address to which a confirmation is being sent
          	emailDoRezerwacji,
          	'mati.kucharski@gmail.com',
          	//message content
          	'Rezerwacja prezentu '+that.name,
          	'<h2 style="text-decoration: underline;">Ślub Basi i Mateusza - rezerwacja: '+that.name+
          	'</h2><br /><p style="font-family: Garamond, serif; font-size: 200%;">Potwierdzenie rezerwacji prezentu <strong>'+that.name+'</strong></p>'+
          	'<img alt="zdjecie" src="http://www.testslubbasiaimati.meteor.com'+that.image+'"/>'+
          	'<br /><p style="font-family: Garamond, serif; font-size: 120%;">W przypadku chęci odwołania rezerwacji proszę odpowiedzieć na niniejszego maila</p>'+
          	'<br /><p style="font-family: Garamond, serif; font-size: 100%;">Wysłano przez <a href="http://www.pieknaibestia.meteor.com">www.pieknaibestia.meteor.com</a></p>'
          	);

			console.log("Można wysłać maila");
			Prezenty.update({_id: this._id}, {$set: {reserved: false}}, function(error){
				if(error){
					alert(error+" - Błąd łączenia z bazą danych. Nie udało się zarezerwować prezentu. Spróbuj jeszcze raz później lub powiadom o problemie pisząc na adres mati.kucharski@gmail.com");
				}
				else {
					alert("Pomyślnie dokonano rezerwacji prezentu");
				}
			});
          	//notification for me that email was sent
          	Meteor.call('sendEmail',
          	'mateuszkucharski@hotmail.com',
          	'mati.kucharski@gmail.com',
          	'Ktoś zrobił rezerwacje prezentu '+that.name,
          	'<h2 style="text-decoration: underline;">Ślub Basi i Mateusza - rezerwacja: '+that.name+
          	'</h2><br /><p style="font-family: Garamond, serif; font-size: 200%;">Adres '+emailDoRezerwacji+' zarezerwował <strong>'+that.name+'</strong></p>'+
          	'<br /><p style="font-family: Garamond, serif;">Wysłano przez <a href="http://www.pieknaibestia.meteor.com">www.pieknaibestia.meteor.com</a></p>'
          	);
		}
		else{
			alert("Błędny adres email");
		}
	}
});