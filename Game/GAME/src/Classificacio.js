Runjump.Classificacio = function(game) {
	this.titulo;
	this.clasi;
	this.puta;
	this.str;
	
};

Runjump.Classificacio.prototype = {

	create: function () {

		var styleCom = { font:"bold 35px Comic Sans MS ", fill: "#fff", tabs: 132, cursor:"pointer"};
		this.add.sprite(0, 0, 'fondo');

		titulo = this.add.image(145, -105, 'classificaciotit');
		this.puta = this.Classificacio();
		clasi = this.add.text(145, 200, this.puta,styleCom);
		
	},

	Classificacio: function() {
		$.ajax({
			url: 'http://localhost/Game/GAME/Consultas.php',
			data: "",
			dataType: 'json',
			succes: function(data)
			{
				var Usuario = data[0]
				var highscore = data[1];

				return Usuario;
			}
		});
	}
};