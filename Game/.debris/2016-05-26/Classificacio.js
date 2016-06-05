Runjump.Classificacio = function(game) {
	this.titulo;
	this.clasi;
	this.puta;
	
};

Runjump.Classificacio.prototype = {

	create: function () {

		var styleCom = { font:"bold 35px Comic Sans MS ", fill: "#fff", tabs: 132, cursor:"pointer"};
		this.add.sprite(0, 0, 'fondo');

		titulo = this.add.image(145, -105, 'classificaciotit');
		this.puta = this.Classificacio();
		clasi = this.add.text(345, 200, this.devolver,styleCom);
		
	},


	Classificacio: function() {
		var puta = "";

		for (var i = 0; i < 5; i++) {
			puta += i+"<p>";
		}

		return puta;
	},

	devolver:function(){
		$.post("../insertar.php",function(data){
			alert(data.Usuario)
		},"json");
	}
};