// <DEFINIMOS LIBRERIAS Y VARIABLES>
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./oof.json");
let baseDatos = require("./abc.json");
let tbaseDatos = require("./trivial.json");
var request = require('request');
var Request = require('pixl-request');
const Store = require('data-store');
const store = new Store({path: './store/abc.json', name: 'abc.json'});
const tstore = new Store({path: './store/trivial.json', name: 'trivial.json'});
let preguntas = ["Que escopeta se usa mas en el *meta*?", "Que material debes usar cuando rusheas?", "Que debes hacer para tener una mejor precision?", "Cuantos materiales otorga una llama", "Cuantas balas admite el cargador de un subfusil?", "Cuantos desafios hay en cada semana de la temporada 4?", "Cuantas rarezas de armas existen?", "Cual es la capacidad del cargador del fusil de asalto (m4a4)?", "Que te dan cuando ganas por primera vez?", "Cuanto es el màximo de miniescudos que se pueden tener en un \"slot\"?", "Cuántos Bidones de Plasma puedes tener en un \"slot\" como máximo?", "Cuántas estrellas del pase de batalla puedes conseguir en cada semana? (*Sin contar el secreto*)", "Que porcentaje de velocidad disminuye al pasar caminando de tierra a agua?", "Cual de estas **NO** es una ciudad de Fortnite.", "Cuantos tipos de armas hay?", "¿Cuándo se lanzó oficialmente Fortnite?", "¿Cuántos armas de fuego hay en Fortnite?", "¿Cómo se llama la moneda del juego?", "¿Qué materiales se pueden utilizar para construir?", "El arbusto, ¿es un aspecto o un objeto?", "¿Cuál de estos sitios no existe en el modo Battle Royale?", "¿De qué color es el autobús desde el que empieza la partida?", "Además de los cofres, ¿qué animal guarda un preciado botín?", "¿Qué ha pasado en la Temporada 4?", "¿Cuantas llamas aparecen en una partida del modo \"Patio de juegos\"?", "¿Cuál es el creador detrás de fortnite?", "Por cuanto está multiplicado los materiales del patio de juegos?"];
let respuestas = ["1.La corredera porque hace mas daño.*2.La automatica porque dispara mas rapido.*3.Depende.*4.No lo se.", "1.Hierro, porque es mas fuerte.*2.Madera, porque se construye tan rapido que no te la pueden romper.*3.Piedra porque es medianamente fuerte y se construye rapido.*4.No lo se.", "1.Debes apuntar.*2.Debes correr mientras apuntas.*3.Debes agacharte y apuntar.*4.Si te agachas y mientras apuntas esperas a que se cierre del todo la crosshair, tendras mas precision por disparo.", "1.200 de cada material.*2.300 de cada material.*3.500 de cada material.*4.250 de cada material", "1.10.*2.35.*3.25.*4.40.", "1.5.*2.6.*3.7.*4.8.", "1.5.*2.4.*3.3.*4.6.", "1.25.*2.35.*3.30.*4.20.", "1.Un pin.*2.Una chapa.*3.Un parapente.*4.Un paraguas.", "1.8.*2.15.*3.10.*4.5.", "1.1.*2.2.*3.3.*4.Ninguna es correcta", "1.50.*2.40.*3.60.*4.Ninguna de las anteriores", "1.40%*2.60%*3.75%*4.100%", "1.Lomas Lugubres.*2.Señorio de la Sal.*3.Latifundio Letal.*4.Polvorín Polvoriento", "1.5.*2.2.*3.7.*4.3.", "1.25/07/2017.*2.Todavia no se ha lanzado.*3.7/7/2017.*4.03/05/2018", "1.7.*2.24.*3.13.*4.5.", "1.moVeda.*2.paVos.*3.Vucks.*4.Créditos V.", "1.Adamantium, Vibranium y kryptonita.*2.Madera, Metal y ladrillo.*3.Madera, circonio y pirita.*4.Madera, plástico y diamante.", "1.Aspecto.*2.Objeto.*3Son hacks.*4.Qué es eso?", "1.Ribera Repipi.*2.Pochinki.*3.Pueblo Tomate.*4.Pisos Picados", "1.Gris.*2.Es invisible.*3.Azul.*4.Amarillo.", "1.Llamas.*2.Perros.*3.Cerdos.*4.Unicornios.", "1.Hay una invasión alienígena.*2.Se ha estrellado un meteorito.*3.Ha habido un terremoto.*4.Todo sigue igual.", "1. 3.*2. 50.*3. 100.*4. 20.", "1.Unreal engine.*2.Epic James.*3.Epic Games.*4.No lo se no soi 100tifico.", "1.x10.*2.x99.*3.x100.*4.x3000"];
let respuestacorrecta = ["1", "2", "4", "1", "2", "3", "1", "3", "4", "3", "1", "1", "3", "4", "1", "2", "1", "2", "2", "2", "2", "3", "1", "2", "3", "3", "1"];
const delay = require('delay');
let Squads = ["389108642768617474", "357256519190052865", "357256665135054848", "363726736720134174", "368859805705568275", "388795802191003648", "379389770721263647", "379038486239510578", "364508060443607040", "388795802249723905", "405768303059927041", "405768302959394820", "422439350651977729", "422439349724905482", "424607811578757170", "424607812002381834", "430124244651737109", "430124329674473482", "430124354131460106", "430125582840233984", "478652070052888586", "478652070648610841"];
let Duos = ["373925077068152852", "373925077399633920", "373925203249725460", "388796069665964032", "388796070378864641", "406083851656364032", "406083892701954048", "422404759153147914", "422404759270588417", "422407136715341824"];
var Canvas = require('canvas')
  , canvas = new Canvas(600, 400)
  , ctx = canvas.getContext('2d')
  , fs = require('fs');
const ms = require('ms');
//Lol wtf PUTA MIERDA DE PAGINA
var lol = 1;
var Image = Canvas.Image;
const UNB = require("unb-api")
const Client = new UNB.Client('token');
var wait = new Set();
var seconds = 3;
// <DEFINIMOS LIBRERIAS Y VARIABLES>

client.on('ready', () => { //Bot iniciado
	console.log(`[Start] ${new Date()}`); //Hora a la que se inicio el server
	config.status = "off"; //Estalbecemos el estado de "mantenimento" en "off"
	fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error); //Guardamos el archivo
	//client.user.setActivity("a "+client.guilds.get("344119818875699202").memberCount.toString()+" miembros", { type: 'WATCHING' }); //Acitividad del bot: "Jugando a..."
	console.log("Bot iniciado correctamente!");
  let guild = client.guilds.get("344119818875699202");
        console.log("awt");
  guild.fetchBans()
  .then(bans =>{ for(let x = 0; x < bans.length; ++x){
            guild.unban(bans[x].id)
            .then(user => console.log(`Unbanned ${user.username} from ${guild}`))
            .catch(console.error);
          }   })
  .catch(console.error);

});


client.on("guildMemberAdd", member => { //Cuando un miembro entra al servidor.
	member.send("**BIENVENIDO A FORTNITE ESP**\n\nAntes de hacer nada, dirígete al canal de texto <#361921331924697088> y pon el siguiente comando:  \" **!link (nombre de Epic Games)** \"  o si eres de ps4\n \" **!linkps4 (nombre de Epic Games)** \"\nSeguídamente en el mismo canal escribe el comando \" **!rankme** \""); //Mensaje de bienvenida
});

client.on('messageReactionAdd', (reaction, user) => {

	if(reaction.emoji.name === "✅" && reaction.message.channel.id == "473050434676850688" && !user.bot) {
        reaction.message.delete();
	}
	if(reaction.emoji.name === "🔄" && reaction.message.channel.id == "473050434676850688" && !user.bot) {
		reaction.message.channel.send("**Respuesta al report:**");
		store.set("messageid", reaction.message.embeds[0].fields[0].value);
		store.set(user.id + "rep", true);
	}
	if(reaction.emoji.name === "🔃" && reaction.message.channel.id == "473050434676850688" && !user.bot) {
		reaction.message.channel.send("**Respuesta al reportado:**");
		store.set("messageid", reaction.message.embeds[0].fields[1].value);
		store.set(user.id + "rep", true);
    }
});


function cb () { //Callback
	console.log("Done");
	Graceful.exit();
}
client.on('error', console.error);

client.on("message", (message) => { //Cuando se envia un mensaje
	let msg = message.content.toUpperCase(); //Defino el contenido del mensaje en mayus para que no sea sensible.
	process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //Definimos que no use el protocolo TSL
	if (message.author.bot) return; //Comprueba que el autor no es el bot	
	if (message.member == null) return;
		if(config.status == "off" || message.member.roles.find("name", "Staff")){
			if(store.get(message.author.id)){ //Guarda la respuesta del trivial
				if (message.channel.id == "531824564058062859" || message.channel.id == "531825848051957770" || message.channel.id == "487615539951435791" || message.channel.id == "487615575821123594"){
				let newEmbed = new Discord.RichEmbed();
				if(wait.has(message.author.id)){
					return message.reply(" Espera 3s para volver a usar ese comando.")
				}
				wait.add(message.author.id);
				console.log(message.content + "\n" + respuestacorrecta[store.get(message.author.id + "preguntaRND")]);
				if(message.content == respuestacorrecta[store.get(message.author.id + "preguntaRND")]){
					newEmbed.setColor(0x16fc00);
					newEmbed.setTitle("✅ Felicidades, has acertado! ✅")
					message.channel.send(newEmbed);
					tstore.set(message.author.id + "puntos", tstore.get(message.author.id + "puntos") + 1)
					Client.editUserBalance("344119818875699202", message.author.id, {bank: 125}).catch(() => {
						message.channel.send(":x: | A error has occured!")
					});
					store.set(message.author.id, false);
				} else {
					newEmbed.setColor(0xff0000);
					newEmbed.setTitle("❌ Respuesta incorrecta ❌")
					message.channel.send(newEmbed);
					console.log(store.get(message.author.id + "r"));
					Client.editUserBalance("344119818875699202", message.author.id, {bank: -25}).catch(() => {
						message.channel.send(":x: | A error has occured!")
					});
					store.set(message.author.id, false);
				}

			}
		}
				if(msg.startsWith(config.prefix + ("TRIVIAL"))){
					if(tstore.get(message.author.id + "puntos") == null || tstore.get(message.author.id + "puntos") == undefined){
						tstore.set(message.author.id + "puntos", 0); //Establece la puntuacion incial del trivial a x usuario.
					}
					if (message.channel.id == "531824564058062859" || message.channel.id == "531825848051957770" || message.channel.id == "487615539951435791" || message.channel.id == "487615575821123594"){
					store.set(message.author.id + "preguntaRND", Math.floor((Math.random() * preguntas.length)));
					console.log(store.get(message.author.id + "preguntaRND"));
					store.set(message.author.id, true);
					message.channel.send({embed: {
						color: 3447003,
						author: {
						  name: "Trivial. Tienes 10s",
						  icon_url: client.user.avatarURL
						},
						title: preguntas[store.get(message.author.id + "preguntaRND")],
						description: respuestas[store.get(message.author.id + "preguntaRND")].split("*")[0]+"\n"+respuestas[store.get(message.author.id + "preguntaRND")].split("*")[1]+"\n"+respuestas[store.get(message.author.id + "preguntaRND")].split("*")[2]+"\n"+respuestas[store.get(message.author.id + "preguntaRND")].split("*")[3],
						timestamp: new Date(),
						footer: {
						  icon_url: client.user.avatarURL,
						  text: "© Fortnite ESP"
						}
					  }
					})
				}
			}
			if(wait.has(message.author.id)){
				setTimeout(() => {
					wait.delete(message.author.id)
				}, seconds * 1000)
			}

			if(store.get(message.author.id + "rep")){
				let servdor = client.guilds.get("344119818875699202");
				let memberrep = servdor.members.get(store.get("messageid"));
				if(memberrep != undefined){
					memberrep.send(message.content);
				}
				message.channel.send("Respuesta enviada <a:success:467097051059060746>")
				store.set(message.author.id + "rep", false);
			}
			if (msg.startsWith(config.prefix + "REP") && message.channel.id === "485409074717130752"){
				let atr = msg.split(config.prefix + "REP ")[1];
				if (atr == null || atr == undefined){
					return message.channel.send({embed: {
						color: 3447003,
						title: "Uso del comando !rep",
						description: "ℹ !rep @usuario \"motivo\"",
					  }
					}) 
				}
				let chanel = client.channels.get("473050434676850688");
				let motivo = atr.split(message.mentions.members.first());
				let UsuarioReportado = message.mentions.members.first();
				if (message.mentions.members.first() != undefined){
					if(motivo[1] != null){
						
						message.channel.send("Report enviado <a:success:467097051059060746>");
						chanel.send({embed: {
							color: 3447003,
							author: {
								name: "Report de " + message.member.user.tag,
								icon_url: message.member.avatarURL
							},
							title: "Usuario reportado: " + UsuarioReportado.displayName,
							description: "Motivo: " + motivo[1],
							fields: [{
								name: "ID REPORT",
								value: message.author.id
							},
							{
								name: "ID REPORTADO",
								value: UsuarioReportado.id
							},
							{
								name: "FECHA DE ENTRADA",
								value: new Date(UsuarioReportado.joinedAt).toUTCString()
							}
							],
							timestamp: new Date(),
							footer: {
							icon_url: client.user.avatarURL,
							text: "© Fortnite ESP"
							}
						}
						}).then((msg) => {
							msg.react('🔄')
							.then(msg.react('✅')
							.then(msg.react('🔃')
							.then(console.log)
							.catch(console.error))
							.catch(console.error))
							.catch(console.error);
						})
				} else {
					message.channel.send({
						embed: {
							color: 0xff0000,
							title: "ERROR",
							description: "❌ Debes poner un motivo",
						}
					});
				}
			} else {
				message.channel.send({
					embed: {
						color: 0xff0000,
						title: "ERROR",
						description: "❌ No has mencionado al usuario que quieres reportar.",
					}
				});
			}
			}
			if (msg.startsWith(config.prefix + "BUG")){
				let atr = msg.split(config.prefix + "BUG ")[1];
				let chanel = client.channels.get("424542755159801856");
				message.channel.send("Bug reportado <a:success:467097051059060746>");
				chanel.send({embed: {
					color: 0xffff00,
					title: "Bug",
					fields: [{
						name: "Descripcion",
						value: atr
					}],
					timestamp: new Date(),
					footer: {
					  icon_url: client.user.avatarURL,
					  text: "© Fortnite ESP"
					}
				  }
				})
			}

			if(msg.startsWith(config.prefix + "PSICOLOGO")){
				message.reply(" Cuéntame tu experiencia traumática joven.");
			}

			if(msg.startsWith(config.prefix + "TLBCLEAR") && message.member.roles.find("name", "Staff")){
				tstore.clear();
				message.reply(" Trivial reseteado.")
			}
      


			if (msg.startsWith(config.prefix + "LINK")){ //Linkea una cuenta al "rankme".
				if(message.channel.id == "361921331924697088" || message.channel.id == "561599847183155200" || message.channel.id == "471229239228891136" || message.channel.id == "471227591316078594" || message.channel.id == "425407543393779712" || message.channel.id == "444196865685192715" || message.channel.id == "553250156930400256"){
					if(msg.split(" ")[0] != "LINKPS4"){
						let command = msg.split(" ")[0];
						let atr = msg.split(config.prefix + "LINK ")[1];
						if(command == "!LINK"){
							if(atr == null){
								message.channel.send({embed: {
									color: 3447003,
									title: "Uso del comando !link",
									description: "ℹ !link \"Nombre en fortnite\"",
								}
								}) 
							
							} else
							{	
								var playerName = encodeURIComponent(atr);
								var options = {
									method: "GET",
									url: `https://api.fortnitetracker.com/v1/profile/pc/${playerName}`,
									strictSSL: false,
									headers: {
										'UserAgent': 'nodejs request',
										'TRN-Api-Key': ''
									}
					
								}
								request(options, (error, response, body) => {
									console.log(response.statusCode);
									if (!error && response.statusCode == 200) {
										var stats = JSON.parse(body);
										if(stats.stats != null && atr != "NINJA"){
											store.set(message.author.id + "_plataform", "pc")
								store.set(message.author.id + "_rankme", atr);
								message.channel.send("Cuenta linkeada! <a:success:467097051059060746>\nAhora puedes usar los comandos:\n➜ !rankme o rankme_ps4\n➜ !kd o  !kd_ps4 \n➜ !wins o !wins_ps4 \n➜ !fts");
										}
										
									} else {
										let error;
										if(response.statusMessage == 'Player Not Found'){
											error = "❌ El usuario no existe"
										}
										if (response.statusCode == 404){
											error = "❌ El usuario no existe";
										}
										if (response.statusCode == 503){
											error = "❌ Espera antes de volver a buscar stats";
										}
										if (response.statusCode != 404 && response.statusCode != 503){
											error = response.statusCode;
										}
										message.channel.send({
										embed: {
											color: 0xff0000,
											title: "ERROR",
											description: error,
										}
									});
								}
								})
								
							}
						}
						}
						
			}
			}
			if (msg.startsWith(config.prefix + "LINKPS4")){ //Linkea una cuenta al "rankme".
				if(message.channel.id == "361921331924697088" || message.channel.id == "561599847183155200" ||  message.channel.id == "471229239228891136" || message.channel.id == "471227591316078594" || message.channel.id == "425407543393779712" || message.channel.id == "444196865685192715" || message.channel.id == "553250156930400256"){
					let atr = msg.split(config.prefix + "LINKPS4 ")[1];
					let command = msg.split(" ")[0];
					if(command == "!LINKPS4"){
						if(atr == null){
							message.channel.send({embed: {
								color: 3447003,
								title: "Uso del comando !link",
								description: "ℹ !link \"Nombre en fortnite\"",
							  }
							}) 
						
						} else
						{

							var playerName = encodeURIComponent(atr);
								var options = {
									method: "GET",
									url: `https://api.fortnitetracker.com/v1/profile/psn/${playerName}`,
									strictSSL: false,
									headers: {
										'UserAgent': 'nodejs request',
										'TRN-Api-Key': 'apikey'
									}
					
								}
								request(options, (error, response, body) => {
									console.log(response.statusCode);
									if (!error && response.statusCode == 200) {
										var stats = JSON.parse(body);
										if(stats.stats != null && atr != "NINJA"){
											console.log(response.statusMessage)
											store.set(message.author.id + "_rankme", atr);
											store.set(message.author.id + "_plataform", "psn")
											message.channel.send("Cuenta linkeada! <a:success:467097051059060746>\nAhora puedes usar los comandos:\n➜ !rankme o rankme_ps4\n➜ !kd o  !kd_ps4 \n➜ !wins o !wins_ps4 \n➜ !fts");
										}
										if(response.statusMessage == 'Player Not Found'){
											message.channel.send({
												embed: {
													color: 0xff0000,
													title: "ERROR",
													description: "❌ El usuario no existe",
												}
											});
										}
											
										
										
									} else {
										let error;
										if(response.statusMessage == 'Player Not Found'){
											error = "❌ El usuario no existe"
										}
										if (response.statusCode == 404){
											error = "❌ El usuario no existe";
										}
										if (response.statusCode == 503){
											error = "❌ Espera antes de volver a buscar stats";
										}
										if (response.statusCode != 404 && response.statusCode != 503){
											error = response.statusCode;
										}
										message.channel.send({
										embed: {
											color: 0xff0000,
											title: "ERROR",
											description: error,
										}
									});
								}
								})

							
						}
					}
					
				}
			}

			if (false){ //Linkea una cuenta al "rankme".
				if(message.channel.id == "361921331924697088" || message.channel.id == "471229239228891136" || message.channel.id == "471227591316078594" || message.channel.id == "425407543393779712" || message.channel.id == "444196865685192715"){
					let atr = msg.split(config.prefix + "LINKXBOX ")[1];
					let command = msg.split(" ")[0];
					if(command == "!LINKXBOX"){
						if(atr == null){
							message.channel.send({embed: {
								color: 3447003,
								title: "Uso del comando !link",
								description: "ℹ !link \"Nombre en fortnite\"",
							  }
							}) 
						
						} else
						{
							store.set(message.author.id + "_rankme", atr);
							store.set(message.author.id + "_plataform", "xbl")
							message.channel.send("Cuenta linkeada! <a:success:467097051059060746>\nAhora puedes usar los comandos:\n➜ !rankme o rankme_ps4\n➜ !kd o  !kd_ps4 \n➜ !wins o !wins_ps4 \n➜ !fts");
						}
					}
					
				}
			}
			if(msg.startsWith(config.prefix + "DELWINS")){
				if(message.channel.id == "361921331924697088" || message.channel.id == "561599847183155200" || message.channel.id == "444196865685192715" || message.channel.id == "553250156930400256"){
					if(message.member.displayName.includes("💀")){
						let name = message.member.displayName.split("💀")[1];
						let nameonly = message.member.displayName.split("🏆")[0];
						message.member.setNickname(nameonly+"💀"+name);

						message.channel.send({   
							embed: {
								color: 0x66ff33,
								title: "Wins",
								description: "Se han quitado las wins ✅",
							}
						});
					} else {
						let nameonly = message.member.displayName.split("🏆")[0];
						message.member.setNickname(nameonly).catch(console.error);;
						message.channel.send({   
							embed: {
								color: 0x66ff33,
								title: "Wins",
								description: "Se han quitado las wins ✅",
							}
						});
					}
				} else {
					message.reply(" Usa este comando en <#361921331924697088>");
				}
			}





			if(msg.startsWith(config.prefix + "DELKD")){
				if(message.channel.id == "361921331924697088" || message.channel.id == "561599847183155200" || message.channel.id == "444196865685192715" || message.channel.id == "553250156930400256"){
					if(message.member.displayName.includes("🏆")){
						let name = message.member.displayName.split("🏆")[1]
						let name2 = name.split("💀")[0];
						let nameonly = message.member.displayName.split("🏆")[0];
						message.member.setNickname(nameonly+"🏆"+name2);
						message.channel.send({   
							embed: {
								color: 0x66ff33,
								title: "KD",
								description: "Se ha quitado el kd ✅",
							}
						});
					} else{
						let nameonly = message.member.displayName.split("💀")[0];
						message.member.setNickname(nameonly).catch(console.error);;
						message.channel.send({   
							embed: {
								color: 0x66ff33,
								title: "KD",
								description: "Se ha quitado el kd ✅",
							}
						});
					}
				}else {
					message.reply(" Usa este comando en <#361921331924697088>");
				}
				}

			if (msg.startsWith(config.prefix + 'BRING') && message.member.voiceChannel != null){
				let user = message.mentions.members.first();
				store.set(user.id + "channel", user.voiceChannelID);
				user.setVoiceChannel('470302743911989258')
  				.catch(console.error);
				var voiceChannel = client.channels.get("470302743911989258");
				voiceChannel.join().then(connection =>{
					const dispatcher = connection.playFile('./Staff.mp3');
					dispatcher.on("end", end => {
						voiceChannel.leave();
					});
				}).catch(err => console.log(err));
			}

			if (msg.startsWith(config.prefix + 'RETURN') && message.member.voiceChannel != null){
				let user = message.mentions.members.first();
				if(store.get(user.id + "channel") == null || store.get(user.id + "channel") == undefined){
					return message.reply(" No se ha usado !bring para traer el usuario al canal. :x:");
				}
				if(user != null){
					user.setVoiceChannel(store.get(user.id + "channel"))
  					.catch(console.error);
				} else{
					return message.reply(" Debes mencionar al usuario :x:");
				}
			}

			if (msg.startsWith(config.prefix + "NIVEL")){
				if(message.channel.id == "361921331924697088" || message.channel.id == "471227591316078594" || message.channel.id == "553250156930400256"){
					if (message.content != undefined){
						let atr = message.content.split(" ")[1];
						if(atr != undefined || null){
							if(isNaN(atr)){
								message.reply(" El nivel tiene que ser un numero");
							}else{
								if(atr < 101){
									let name = message.member.displayName.split("⚡")[0];
									let nombre = name + "⚡" + Math.abs(atr);
									message.member.setNickname(nombre);
									message.channel.send("Nivel actualizado :white_check_mark: ");
								} else{message.reply(" Ambos sabemos que eres demasiado malo para tener ese nivel, pon tu nivel real");}
							}
						} else {message.channel.send("No puedes dejar el atributo vacio :x:")}
					} else {message.channel.send("No puedes dejar el atributo vacio :x:Lo")}
				}
			}

			if(false){
				let member = message.mentions.members.first();
				if(!member) return message.reply("No has mencionado a ningun usuario :x:");
				let muterole = message.guild.roles.find("name", "Muted");
				if(!muterole) return message.reply("No hay ningun rol con el nombre ``Muted`` :x:");
				let params = message.content.split(" ").slice(1);
				let time = params[1];
				if(!time) return message.reply("No has especificado el tiempo del mute :x:")

				member.addRole(muterole.id);
				message.channel.send(`${member.user.tag} Ha sido muteado durante \`${ms(ms(time), {long: true})}\``);
				member.send(`Has sido muteado durante ${ms(ms(time), {long: true})}\nSi no eres desmuteado automaticamente en ese tiempo. Por favor, notificalo a algun miembro del staff.`);
				setTimeout(function(){
					member.removeRole(muterole.id);
				}, ms(time));
			}


			if(msg == config.prefix + "REQUEST"){
				var playerName = encodeURIComponent("Plopez_");
				var options = {
					method: "GET",
					url: `https://api.fortnitetracker.com/v1/profile/pc/${playerName}`,
					strictSSL: false,
					headers: {
						'UserAgent': 'nodejs request',
						'TRN-Api-Key': 'apikey'
					}
	
				}
				request(options, (error, response, body) => {
					console.log(response.statusCode);
					if (!error && response.statusCode == 200) {
						var stats = JSON.parse(body);
						console.log(stats.stats.p2.top1.valueInt);
						
					} else {
						let error;
						if(response.statusMessage == 'Player Not Found'){
							error = "❌ El usuario no existe"
						}
						if (response.statusCode == 404){
							error = "❌ El usuario no existe";
						}
						if (response.statusCode == 503){
							error = "❌ Espera antes de volver a buscar stats";
						}
						if (response.statusCode != 404 && response.statusCode != 503){
							error = response.statusCode;
						}
						message.channel.send({
						embed: {
							color: 0xff0000,
							title: "ERROR",
							description: error,
						}
					});
				}
				})
			}


			if(msg == config.prefix + "WINS"){
				if(message.channel.id == "361921331924697088" || message.channel.id == "561599847183155200" || message.channel.id == "444196865685192715" || message.channel.id == "553250156930400256"){
					if(store.get(message.author.id + "_rankme") != null && store.get(message.author.id + "_rankme") != undefined){
						atributes = store.get(message.author.id + "_rankme");
					} else{
						message.channel.send(":x: Tu cuenta no ha sido linkeada. Usa ``!link nombre en fortnite`` para linkear tu cuenta");
						return;
					}
				var playerName = encodeURIComponent(atributes);
					var options = {
						method: "GET",
						url: `https://api.fortnitetracker.com/v1/profile/pc/${playerName}`,
						strictSSL: false,
						headers: {
							'UserAgent': 'nodejs request',
							'TRN-Api-Key': ''
						}
		
					}
					process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
					request(options, (error, response, body) => {
						console.log(response.statusCode);
						if (!error && response.statusCode == 200) {
							var stats = JSON.parse(body);
							if (stats.lifeTimeStats != undefined){
								if(!message.member.displayName.includes("💀")){
									let nam1 = message.member.displayName; //ULTOMA AWEIFGFYGOGOSYGFOUY
									let nam4 = nam1.split("🏆")[0];
									let namefinal = nam4 + "🏆" + Number(stats.lifeTimeStats[8].value);
									message.member.setNickname(namefinal).catch(console.error);
									console.log("No tiene copa");
								} else{
									let nam = message.member.displayName.split("🏆")[0];
									let name2 = nam.split("💀")[0];
									message.member.setNickname(name2+"🏆"+Number(stats.lifeTimeStats[8].value)+"💀"+stats.lifeTimeStats[11].value);
									console.log("Tiene copa");
								}
									message.channel.send({   
										embed: {
											color: 0xffff00,
											title: "Wins Actualizadas!",
											description: Number(stats.lifeTimeStats[8].value)+" 🏆",
										}
									});
							} else{message.channel.send({
								embed: {
									color: 0xff0000,
									title: "ERROR",
									description: "❌ Usuario no encontrado",
								}
							});}
						} else {
							let error;
							if (response.statusCode == 404){
								error = "❌ El usuario no existe";
							}
							if (response.statusCode == 503){
								error = "❌ Espera antes de volver a buscar stats";
							}
							if (response.statusCode != 404 || response.statusCode != 503){
								error = response.statusCode;
							}
							message.channel.send({
							embed: {
								color: 0xff0000,
								title: "ERROR",
								description: error,
							}
						});
					}
					})
			}else {
				message.reply(" Usa este comando en <#361921331924697088>");
			}
		}
			

		if(msg == config.prefix + "WINS_PS4"){
			if(message.channel.id == "361921331924697088" || message.channel.id == "561599847183155200" || message.channel.id == "444196865685192715" || message.channel.id == "553250156930400256"){
				if(store.get(message.author.id + "_rankme") != null && store.get(message.author.id + "_rankme") != undefined){
					atributes = store.get(message.author.id + "_rankme");
				} else{
					message.channel.send(":x: Tu cuenta no ha sido linkeada. Usa ``!link nombre en fortnite`` para linkear tu cuenta");
					return;
				}
			var playerName = encodeURIComponent(atributes);
				var options = {
					method: "GET",
					url: `https://api.fortnitetracker.com/v1/profile/psn/${playerName}`,
					strictSSL: false,
					headers: {
						'UserAgent': 'nodejs request',
						'TRN-Api-Key': ''
					}

				}
				process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
				request(options, (error, response, body) => {
					console.log(response.statusCode);
					if (!error && response.statusCode == 200) {
						var stats = JSON.parse(body);
						if (stats.lifeTimeStats != undefined){
							if(!message.member.displayName.includes("💀")){
								let nam1 = message.member.displayName; //ULTOMA AWEIFGFYGOGOSYGFOUY
								let nam4 = nam1.split("🏆")[0];
								let namefinal = nam4 + "🏆" + Number(stats.lifeTimeStats[11].value);
								message.member.setNickname(namefinal).catch(console.error);
								console.log("No tiene copa");
							} else{
								let nam = message.member.displayName.split("🏆")[0];
								let name2 = nam.split("💀")[0];
								message.member.setNickname(name2+"🏆"+Number(stats.lifeTimeStats[8].value)+"💀"+stats.lifeTimeStats[11].value)
								console.log("Tiene copa");
							}
								message.channel.send({   
									embed: {
										color: 0xffff00,
										title: "Wins Actualizadas!",
										description: Number(stats.lifeTimeStats[8].value)+" 🏆",
									}
								});
						} else{message.channel.send({
							embed: {
								color: 0xff0000,
								title: "ERROR",
								description: "❌ Usuario no encontrado",
							}
						});}
					} else {
						let error;
						if (response.statusCode == 404){
							error = "❌ El usuario no existe";
						}
						if (response.statusCode == 503){
							error = "❌ Espera antes de volver a buscar stats";
						}
						if (response.statusCode != 404 || response.statusCode != 503){
							error = response.statusCode;
						}
						message.channel.send({
						embed: {
							color: 0xff0000,
							title: "ERROR",
							description: error,
						}
					});
				}
				})
			}else {
				message.reply(" Usa este comando en <#361921331924697088>");
			}
		}

		
		if(false){
			if(message.channel.id == "361921331924697088" || message.channel.id == "444196865685192715"){
				if(store.get(message.author.id + "_rankme") != null && store.get(message.author.id + "_rankme") != undefined){
					atributes = store.get(message.author.id + "_rankme");
				} else{
					message.channel.send(":x: Tu cuenta no ha sido linkeada. Usa ``!link nombre en fortnite`` para linkear tu cuenta");
					return;
				}
			var playerName = encodeURIComponent(atributes);
				var options = {
					method: "GET",
					url: `https://api.fortnitetracker.com/v1/profile/xbl/${playerName}`,
					strictSSL: false,
					headers: {
						'UserAgent': 'nodejs request',
						'TRN-Api-Key': ''
					}

				}
				process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
				request(options, (error, response, body) => {
					console.log(response.statusCode);
					if (!error && response.statusCode == 200) {
						var stats = JSON.parse(body);
						if (stats.lifeTimeStats != undefined){
							if(!message.member.displayName.includes("💀")){
								let nam1 = message.member.displayName; //ULTOMA AWEIFGFYGOGOSYGFOUY
								let nam4 = nam1.split("🏆")[0];
								let namefinal = nam4 + "🏆" + Number(stats.lifeTimeStats[11].value);
								message.member.setNickname(namefinal).catch(console.error);
								console.log("No tiene copa");
							} else{
								let nam = message.member.displayName.split("🏆")[0];
								let name2 = nam.split("💀")[0];
								message.member.setNickname(name2+"🏆"+Number(stats.lifeTimeStats[11].value)+"💀"+stats.lifeTimeStats[11].value)
								console.log("Tiene copa");
							}
								message.channel.send({   
									embed: {
										color: 0xffff00,
										title: "Wins Actualizadas!",
										description: Number(stats.lifeTimeStats[11].value)+" 🏆",
									}
								});
						} else{message.channel.send({
							embed: {
								color: 0xff0000,
								title: "ERROR",
								description: "❌ Usuario no encontrado",
							}
						});}
					} else {
						let error;
						if (response.statusCode == 404){
							error = "❌ El usuario no existe";
						}
						if (response.statusCode == 503){
							error = "❌ Espera antes de volver a buscar stats";
						}
						if (response.statusCode != 404 || response.statusCode != 503){
							error = response.statusCode;
						}
						message.channel.send({
						embed: {
							color: 0xff0000,
							title: "ERROR",
							description: error,
						}
					});
				}
				})
			}else {
				message.reply(" Usa este comando en <#361921331924697088>");
			}
		}
		

			if(msg == config.prefix + "KD"){
				if(message.channel.id == "361921331924697088" || message.channel.id == "561599847183155200" || message.channel.id == "444196865685192715" || message.channel.id == "553250156930400256"){
					if(store.get(message.author.id + "_rankme") != null && store.get(message.author.id + "_rankme") != undefined){
						atributes = store.get(message.author.id + "_rankme");
					} else{
						message.channel.send(":x: Tu cuenta no ha sido linkeada. Usa ``!link nombre en fortnite`` para linkear tu cuenta");
						return;
					}
				var playerName = encodeURIComponent(atributes);
					var options = {
						method: "GET",
						url: `https://api.fortnitetracker.com/v1/profile/pc/${playerName}`,
						strictSSL: false,
						headers: {
							'UserAgent': 'nodejs request',
							'TRN-Api-Key': ''
						}
		
					}
					process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
					request(options, (error, response, body) => {
						console.log(response.statusCode);
						if (!error && response.statusCode == 200) {
							var stats = JSON.parse(body);
							if (stats.lifeTimeStats != undefined){
								if(!message.member.displayName.includes("🏆")){
									let nam = message.member.displayName;
									let nam4 = nam.split("💀")[0];
									KD = stats.lifeTimeStats[11].value;
									let namefinal = nam4 + "💀" + KD;
									message.member.setNickname(namefinal).catch(console.error);;
								} else{
									let nam = message.member.displayName.split("🏆")[0];
									KD = stats.lifeTimeStats[11].value;
									let nam2 = nam.split("💀")[0];
									message.member.setNickname(nam2+"🏆"+Number(stats.lifeTimeStats[8].value)+"💀"+KD);
									console.log("Tiene copa");
								}
								
									message.channel.send({   
										embed: {
											color: 0xffff00,
											title: "KD Actualizado!",
											description: "💀 " + stats.lifeTimeStats[11].value,
										}
									});
							} else{message.channel.send({
								embed: {
									color: 0xff0000,
									title: "ERROR",
									description: "❌ Usuario no encontrado",
								}
							});}
						} else {
							let error;
							if (response.statusCode == 404){
								error = "❌ El usuario no existe";
							}
							if (response.statusCode == 503){
								error = "❌ Espera antes de volver a buscar stats";
							}
							if (response.statusCode != 404 || response.statusCode != 503){
								error = response.statusCode;
							}
							message.channel.send({
							embed: {
								color: 0xff0000,
								title: "ERROR",
								description: error,
							}
						});
					}
					})
				}else {
					message.reply(" Usa este comando en <#361921331924697088>");
				}
			}
		if(msg == config.prefix + "KD_PS4"){
			if(message.channel.id == "361921331924697088" || message.channel.id == "561599847183155200" || message.channel.id == "444196865685192715"){
				if(store.get(message.author.id + "_rankme") != null && store.get(message.author.id + "_rankme") != undefined){
					atributes = store.get(message.author.id + "_rankme");
				} else{
					message.channel.send(":x: Tu cuenta no ha sido linkeada. Usa ``!link nombre en fortnite`` para linkear tu cuenta");
					return;
				}
			var playerName = encodeURIComponent(atributes);
				var options = {
					method: "GET",
					url: `https://api.fortnitetracker.com/v1/profile/psn/${playerName}`,
					strictSSL: false,
					headers: {
						'UserAgent': 'nodejs request',
						'TRN-Api-Key': ''
					}

				}
				request(options, (error, response, body) => {
					console.log(response.statusCode);
					if (!error && response.statusCode == 200) {
						var stats = JSON.parse(body);
						if (stats.lifeTimeStats != undefined){
							if(!message.member.displayName.includes("🏆")){
								let nam = message.member.displayName;
								let nam4 = nam.split("💀")[0];
								KD = stats.lifeTimeStats[11].value;
								let namefinal = nam4 + "💀" + KD;
								message.member.setNickname(namefinal).catch(console.error);;
							} else{
								let nam = message.member.displayName.split("🏆")[0];
								KD = stats.lifeTimeStats[11].value;
								let nam2 = nam.split("💀")[0];
								message.member.setNickname(nam2+"🏆"+Number(stats.lifeTimeStats[11].value)+"💀"+KD);
								console.log("Tiene copa");
							}
							
								message.channel.send({   
									embed: {
										color: 0xffff00,
										title: "KD Actualizado!",
										description: "💀 " + stats.lifeTimeStats[11].value,
									}
								});
						} else{message.channel.send({
							embed: {
								color: 0xff0000,
								title: "ERROR",
								description: "❌ Usuario no encontrado",
							}
						});}
					} else {
						let error;
						if (response.statusCode == 404){
							error = "❌ El usuario no existe";
						}
						if (response.statusCode == 503){
							error = "❌ Espera antes de volver a buscar stats";
						}
						if (response.statusCode != 404 || response.statusCode != 503){
							error = response.statusCode;
						}
						message.channel.send({
						embed: {
							color: 0xff0000,
							title: "ERROR",
							description: error,
						}
					});
				}
				})
			}
	}

	if(false){
		if(message.channel.id == "361921331924697088" || message.channel.id == "444196865685192715"){
			if(store.get(message.author.id + "_rankme") != null && store.get(message.author.id + "_rankme") != undefined){
				atributes = store.get(message.author.id + "_rankme");
			} else{
				message.channel.send(":x: Tu cuenta no ha sido linkeada. Usa ``!link nombre en fortnite`` para linkear tu cuenta");
				return;
			}
		var playerName = encodeURIComponent(atributes);
			var options = {
				method: "GET",
				url: `https://api.fortnitetracker.com/v1/profile/xbl/${playerName}`,
				strictSSL: false,
				headers: {
					'UserAgent': 'nodejs request',
					'TRN-Api-Key': ''
				}

			}
			request(options, (error, response, body) => {
				console.log(response.statusCode);
				if (!error && response.statusCode == 200) {
					var stats = JSON.parse(body);
					if (stats.lifeTimeStats != undefined){
						if(!message.member.displayName.includes("🏆")){
							let nam = message.member.displayName;
							let nam4 = nam.split("💀")[0];
							KD = stats.lifeTimeStats[11].value;
							let namefinal = nam4 + "💀" + KD;
							message.member.setNickname(namefinal).catch(console.error);;
						} else{
							let nam = message.member.displayName.split("🏆")[0];
							KD = stats.lifeTimeStats[11].value;
							let nam2 = nam.split("💀")[0];
							message.member.setNickname(nam2+"🏆"+Number(stats.lifeTimeStats[11].value)+"💀"+KD);
							console.log("Tiene copa");
						}
						
							message.channel.send({   
								embed: {
									color: 0xffff00,
									title: "KD Actualizado!",
									description: "💀 " + stats.lifeTimeStats[11].value,
								}
							});
					} else{message.channel.send({
						embed: {
							color: 0xff0000,
							title: "ERROR",
							description: "❌ Usuario no encontrado",
						}
					});}
				} else {
					let error;
					if (response.statusCode == 404){
						error = "❌ El usuario no existe";
					}
					if (response.statusCode == 503){
						error = "❌ Espera antes de volver a buscar stats";
					}
					if (response.statusCode != 404 || response.statusCode != 503){
						error = response.statusCode;
					}
					message.channel.send({
					embed: {
						color: 0xff0000,
						title: "ERROR",
						description: error,
					}
				});
			}
			})
		}
}
			

			if (msg.startsWith(config.prefix + "TLB")){ //Lederboard del trivial
				if (message.channel.id == "487615539951435791" || message.channel.id == "487615575821123594" || message.channel.id == "438053503416664064" || message.channel.id == "444196865685192715"){
				var lol = JSON.stringify(tstore.data);
				var maxSpeed = JSON.parse(lol);
				top10 = Object.keys(maxSpeed).sort(function(a,b){return maxSpeed[b]-maxSpeed[a]})
				console.log(top10);     // bar,me,you,foo
				message.channel.send({embed: {
					color: 3447003,
					author: {
					  name: "Trivial",
					  icon_url: client.user.avatarURL
					},
					title: "Trivial Leaderboard",
					description: "Leaderboard desactivada temporalmente mientras correjimos un fallo",//"1.-" + client.users.get(top10[0].split("puntos")[0]).tag+" - "+tstore.get(top10[0])+"\n2.-" + client.users.get(top10[1].split("puntos")[0]).tag+" - "+tstore.get(top10[1])+"\n3.-" + client.users.get(top10[2].split("puntos")[0]).tag+" - "+tstore.get(top10[2])+"\n4.-" + client.users.get(top10[3].split("puntos")[0]).tag+" - "+tstore.get(top10[3])+"\n5.-" + client.users.get(top10[4].split("puntos")[0]).tag+" - "+tstore.get(top10[4])+"\n6.-" + client.users.get(top10[5].split("puntos")[0]).tag+" - "+tstore.get(top10[5])+"\n7.-" + client.users.get(top10[6].split("puntos")[0]).tag+" - "+tstore.get(top10[6])+"\n8.-" + client.users.get(top10[7].split("puntos")[0]).tag+" - "+tstore.get(top10[7])+"\n9.-" + client.users.get(top10[8].split("puntos")[0]).tag+" - "+tstore.get(top10[8])+"\n10.-" + client.users.get(top10[9].split("puntos")[0]).tag+" - "+tstore.get(top10[9]),
					timestamp: new Date(),
					footer: {
					  icon_url: client.user.avatarURL,
					  text: "© Fortnite ESP"
					}
				  }
				}) 
			} 
			}
			if (msg.startsWith(config.prefix + "VIEW")){
				if(tstore.get(message.author.id + "puntos") == null || tstore.get(message.author.id + "puntos") == undefined){
					tstore.set(message.author.id + "puntos", 0);
				}
				message.channel.send(message.author.username + " tienes ``"+tstore.get(message.author.id + "puntos") + "``");
			}


			function commafy(num) {
				var str = num.toString().split('.');
				if (str[0].length >= 5) {
					str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
				}
				if (str[1] && str[1].length >= 5) {
					str[1] = str[1].replace(/(\d{3})/g, '$1 ');
				}
				return str.join('.');
			}

			if(msg.startsWith(config.prefix + "MONEY-CW")){
				if(message.channel.id == "451097297388830740" || message.channel.id == "414905250055454730" || message.channel.id == "444165465330417674" || message.channel.id == "438053503416664064"){
						let myRole = message.guild.roles.find("name", "The chicken's warriors");
						let rolemembers = message.guild.roles.get(myRole.id).members;
						let membersarray = rolemembers.keyArray();

						let values = [];
						for(let counter = 0; membersarray.length > counter; ++counter){
							
							Client.getUserBalance("344119818875699202", membersarray[counter]).then((user) => {
								values.push(user.total);
								delay(500).then(() => {
									if(counter == membersarray.length - 1){
										var sum = values.reduce(add, 0);
	
										function add(a, b) {
											return a + b;
										}
	
										console.log(sum);
										store.set("cwtotal", sum);
										let comma = commafy(sum);
										if(store.get("tptobank") == null || store.get("tptobank") == undefined){
											store.set("tptobank", 0);
										}
										message.channel.send({embed: {
											color: 3447003,
											author: {
											name: "The chicken's warriors",
											icon_url: client.user.avatarURL
											},
											title: "Money",
											fields: [
												{
													name: "Bank:",
													value: "Deshabilitado"
												},
												{
												name: "Total:",
												value: comma.toString() + " <:pavos:413089639562346497>"
												},
												],
											timestamp: new Date(),
											footer: {
											icon_url: client.user.avatarURL,
											text: "© Fortnite ESP"
											}
										}
									}) 
									}
								})

							})

							
							
						}
						
				}

			}


			

			if(msg.startsWith(config.prefix + "MONEY-TU")){
				if(message.channel.id == "451097297388830740" || message.channel.id == "414905250055454730" || message.channel.id == "444165465330417674" || message.channel.id == "438053503416664064"){
						let myRole = message.guild.roles.find("name", "The Unit");
						let rolemembers = message.guild.roles.get(myRole.id).members;
						let membersarray = rolemembers.keyArray();

						let values = [];
						for(let counter = 0; membersarray.length > counter; ++counter){
							
							Client.getUserBalance("344119818875699202", membersarray[counter]).then((user) => {
								values.push(user.total);
								delay(500).then(() => {
									if(counter == membersarray.length - 1){
										var sum = values.reduce(add, 0);
	
										function add(a, b) {
											return a + b;
										}
	
										console.log(sum);
										store.set("tutotal", sum);
										let comma = commafy(sum);
										if(store.get("nmbank") == null || store.get("nmbank") == undefined){
											store.set("nmbank", 0);
										}
										message.channel.send({embed: {
											color: 3447003,
											author: {
											name: "The Unit",
											icon_url: client.user.avatarURL
											},
											title: "Money",
											fields: [
												{
													name: "Bank:",
													value: "Deshabilitado"
												},
												{
												name: "Total:",
												value: comma.toString() + " <:pavos:413089639562346497>"
												},
												],
											timestamp: new Date(),
											footer: {
											icon_url: client.user.avatarURL,
											text: "© Fortnite ESP"
											}
										}
									}) 
									}
								})

							})

							
							
						}
						
				}

			}

			
			if(msg.startsWith(config.prefix + "MSTORE") && message.member.roles.find("name", "tmptest")){
				let pagina = msg.split(config.prefix + "MSTORE ")[1];
				if(pagina == "1" || pagina == null) //Canales especificos
				{ 
					message.channel.send({embed: {
						color: 3447003,
						author: {
						name: "Mafia Store",
						icon_url: client.user.avatarURL
						},
						fields: [
							{
								name: "<:pavos:413089639562346497> 100,000 - Mafia Base LVL1",
								value: "Primer nivel de la base de la mafia. Otorga 100 HP"
							},
							{
								name: "<:pavos:413089639562346497> 200,000 - Mafia Base LVL2",
								value: "Segundo nivel de la base de la mafia. Otorga 150 HP"
							},
							{
								name: "<:pavos:413089639562346497> 350,000 - Mafia Base LVL3",
								value: "Tercer nivel de la base de la mafia. Otorga 225 HP"
							},
							{
								name: "<:pavos:413089639562346497> 500,000 - Mafia Base LVL4",
								value: "Cuarto nivel de la base de la mafia. Otorga 250 HP"
							},
							{
								name: "<:pavos:413089639562346497> 750,000 - Mafia Base LVL5",
								value: "Quinto nivel de la base de la mafia. Otorga 275 HP"
							},
							{
								name: "<:pavos:413089639562346497> 5,000,000 - Mafia Base LVL6",
								value: "Sexto nivel de la base de la mafia. Otorga 300 HP"
							},
							{
								name: "<:pavos:413089639562346497> 50,000,000 - Mafia Base LVL7",
								value: "Septímo nivel de la base de la mafia. Otorga 350 HP"
							},
							{
								name: "<:pavos:413089639562346497> 500,000,000 - Mafia Base LVL8",
								value: "Octavo nivel de la base de la mafia. Otorga 400 HP"
							},
							{
								name: "<:pavos:413089639562346497> 5,000,000,000 - Mafia Base LVL9",
								value: "Noveno nivel de la base de la mafia. Otorga 450 HP"
							},
							{
								name: "<:pavos:413089639562346497> 50,000,000,000 - Mafia Base LVL10",
								value: "Decimo y último nivel de la base de la mafia. Otorga 500 HP"
							},
							],
						timestamp: new Date(),
						footer: {
						icon_url: client.user.avatarURL,
						text: "Base Store"
						}
					}
				}) 
				} else if (pagina == "2"){
					message.channel.send({embed: {
						color: 3447003,
						author: {
						name: "Mafia Store",
						icon_url: client.user.avatarURL
						},
						fields: [
							{
								name: "<:pavos:413089639562346497> 100,000 - Mafia Arsenal LVL1",
								value: "Primer nivel del arsenal de la mafia. Otorga 100 DMG"
							},
							{
								name: "<:pavos:413089639562346497> 200,000 - Mafia Arsenal LVL2",
								value: "Segundo nivel del Arsenal de la mafia. Otorga 150 DMG"
							},
							{
								name: "<:pavos:413089639562346497> 350,000 - Mafia Arsenal LVL3",
								value: "Tercer nivel del Arsenal de la mafia. Otorga 225 DMG"
							},
							{
								name: "<:pavos:413089639562346497> 500,000 - Mafia Arsenal LVL4",
								value: "Cuarto nivel del Arsenal de la mafia. Otorga 250 DMG"
							},
							{
								name: "<:pavos:413089639562346497> 750,000 - Mafia Arsenal LVL5",
								value: "Quinto nivel del Arsenal de la mafia. Otorga 275 DMG"
							},
							{
								name: "<:pavos:413089639562346497> 5,000,000 - Mafia Arsenal LVL6",
								value: "Sexto nivel del Arsenal de la mafia. Otorga 300 DMG"
							},
							{
								name: "<:pavos:413089639562346497> 50,000,000 - Mafia Arsenal LVL7",
								value: "Septímo nivel del Arsenal de la mafia. Otorga 350 DMG"
							},
							{
								name: "<:pavos:413089639562346497> 500,000,000 - Mafia Arsenal LVL8",
								value: "Octavo nivel del Arsenal de la mafia. Otorga 400 DMG"
							},
							{
								name: "<:pavos:413089639562346497> 5,000,000,000 - Mafia Arsenal LVL9",
								value: "Noveno nivel del Arsenal de la mafia. Otorga 450 DMG"
							},
							{
								name: "<:pavos:413089639562346497> 50,000,000,000 - Mafia Arsenal LVL10",
								value: "Decimo y último nivel del Arsenal de la mafia. Otorga 500 DMG"
							},
							],
						timestamp: new Date(),
						footer: {
						icon_url: client.user.avatarURL,
						text: "Weapon Store"
						}
					}
				})
				}

			}


// PONER Math.ceil((store.get("tptototal") / 100) * 15); EL TOTAL BIEN EN CADA CATEGORIA DE BATALLA

			if(msg.startsWith(config.prefix + "MBATTLE") && message.member.roles.find("name", "tmptest")){
				let mafia = msg.split(config.prefix + "MBATTLE ")[1];
				if(message.member.roles.find("name", "👑")){
					if(message.member.roles.find("name", "TPTO")){
						if(mafia == "NM" || mafia == "NIGHTMARE"){
							let mafianame = "Nightmare";
							let mafia1 = ((store.get("tptobase") + store.get("tptoarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("nmbase") + store.get("nmarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = Math.ceil((store.get("tptototal") / 100) * 15);
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''TPTO''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "217969261262536714", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								
								})
							})
						})
					})
				})
			})
			})
			
								})
							})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Nightmare''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "217969261262536714", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							}
						}
						if(mafia == "LM" || mafia == "LIMONES MAFIOSOS"){
							let mafianame = "LM";
							let mafia1 = ((store.get("tptobase") + store.get("tptoarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("lmbase") + store.get("lmarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = Math.ceil((store.get("tptototal") / 100) * 15);
							console.log(winprize);
							console.log(mafia1 + " " + mafia2)
							console.log(numberwinner);
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''TPTO''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "409659786594877440", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Limones Mafiosos''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "409659786594877440", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})})
						})
					})
				})
			})
			})
			})
						})
					})
				})
			})
			})
			})
			})
							}
						}
						if(mafia == "SC" || mafia == "SCALETTA"){
							let mafianame = "Scaletta";
							let mafia1 = ((store.get("tptobase") + store.get("tptoarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("scbase") + store.get("scarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = Math.ceil((store.get("tptototal") / 100) * 15);
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''TPTO''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "360805518282981377", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})
					})})
				})
			})
			})
			})
			})
			})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Scaletta''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "360805518282981377", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							}
						}
						if(mafia == "MC" || mafia == "MCDONALD'S"){
							let mafianame = "McDonald's";
							let mafia1 = ((store.get("tptobase") + store.get("tptoarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("mcbase") + store.get("mcarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = Math.ceil((store.get("tptototal") / 100) * 15);
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("El ganador es ''TPTO''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "344149948524134411", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})})
							})
						})
					})
				})
			})
			})
							})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''McDonald's''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "344149948524134411", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})
					})
				})})
			})
			})
			})
			})
			})
			})
			})
			})
			})
			})
							}
						}
						if(mafia == "CW" || mafia == "The chicken's warriors"){
							let mafianame = "The chicken's warriors";
							let mafia1 = ((store.get("tptobase") + store.get("tptoarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("cwbase") + store.get("cwarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = Math.ceil((store.get("tptototal") / 100) * 15);
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''TPTO''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "306793290450075649", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''McDonald's''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "344149948524134411", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})
					})})
				})
			})
			})
			})
			})
			})
				})
			})
			})
			})
			})
							}
						}
					}
					if(message.member.roles.find("name", "Nightmare")){
						if(mafia == "TPTO"){
							let mafianame = "TPTO";
							let mafia1 = ((store.get("nmbase") + store.get("nmarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("tptobase") + store.get("tptoarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("nmtotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("El ganador es ''Nightmare''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "452916745146204181", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})})
							})
						})
					})
				})
			})
			})
							})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''TPTO'! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "452916745146204181", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							}
						
						}
						if(mafia == "LM" || mafia == "LIMONES MAFIOSOS"){
							let mafianame = "LM";
							let mafia1 = ((store.get("nmbase") + store.get("nmarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("lmbase") + store.get("lmarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("nmtotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Nightmare''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "409659786594877440", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})})
							})
						})
					})
				})
			})
			})
							})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Limones Mafiosos''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "409659786594877440", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})
					})})
				})
			})
			})
			})
			})
			})
				})
			})
			})
			})
			})
							}
						}
						if(mafia == "SC" || mafia == "SCALETTA"){
							let mafianame = "Scaletta";
							let mafia1 = ((store.get("nmbase") + store.get("nmarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("scbase") + store.get("scarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("nmtotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Nightmare''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "360805518282981377", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})})
						})
					})
				})
			})
			})
			})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Scaletta''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "360805518282981377", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							}
						}
						if(mafia == "MC" || mafia == "MCDONALD'S"){
							let mafianame = "McDonald's";
							let mafia1 = ((store.get("nmbase") + store.get("nmarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("mcbase") + store.get("mcarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("nmtotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Nightmare''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "344149948524134411", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})})
							})
						})
					})
				})
			})
			})
							})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("El ganador es ''McDonald's'! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "344149948524134411", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})})
						})
					})
				})
			})
			})
			})
						})
					})
				})
			})
			})
			})
			})
							}
						}
						if(mafia == "CW" || mafia == "The chicken's warriors"){
							let mafianame = "The chicken's warriors";
							let mafia1 = ((store.get("nmbase") + store.get("nmarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("cwbase") + store.get("cwarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("nmtotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("El ganador es ''Nightmare''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "306793290450075649", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})})
						})
					})
				})
			})
			})
			})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("El ganador es ''The Chicken's Warriors''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "306793290450075649", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})})
						})
					})
				})
			})
			})
			})
						})
					})
				})
			})
			})
			})
			})
							}
						}
					}
					if(message.member.roles.find("name", "LM")){
						if(mafia == "TPTO"){
							let mafianame = "TPTO";
							let mafia1 = ((store.get("lmbase") + store.get("lmarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("tptobase") + store.get("tptoarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("lmtotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Limones Mafiosos''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "452916745146204181", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})})
						})
					})
				})
			})
			})
			})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''TPTO''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "452916745146204181", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							}
						}
						
						if(mafia == "NM" || mafia == "NIGHTMARE"){
							let mafianame = "Nightmare";
							let mafia1 = ((store.get("lmbase") + store.get("lmarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("nmbase") + store.get("nmarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("lmtotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Limones Mafiosos''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "217969261262536714", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Nightmare''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "217969261262536714", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})
					})})
				})
			})
			})
			})
			})
			})
				})
			})
			})
			})
			})
							
						}		
						}
						if(mafia == "SC" || mafia == "SCALETTA"){
							let mafianame = "Scaletta";
							let mafia1 = ((store.get("lmbase") + store.get("lmarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("scbase") + store.get("scarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("lmtotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Limones Mafiosos''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "360805518282981377", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})})
							})
						})
					})
				})
			})
			})
							})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Scaletta''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "360805518282981377", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})})
							})
						})
					})
				})
			})
			})
							})
						})
					})
				})
			})
			})
			})
			})
							
					}
						}
						if(mafia == "MC" || mafia == "MCDONALD'S"){
							let mafianame = "McDonald's";
							let mafia1 = ((store.get("lmbase") + store.get("lmarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("mcbase") + store.get("mcarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("lmtotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Limones Mafiosos''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "344149948524134411", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})
					})})
				})
			})
			})
			})
			})
			})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''McDonald's''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "344149948524134411", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							
					}
						}
						if(mafia == "CW" || mafia == "The chicken's warriors"){
							let mafianame = "The chicken's warriors";
							let mafia1 = ((store.get("lmbase") + store.get("lmarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("cwbase") + store.get("cwarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("lmtotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Limones Mafiosos''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "306793290450075649", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})})
							})
						})
					})
				})
			})
			})
							})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''The Chicken's Warriors''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "306793290450075649", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							
					}
						}
					}
					if(message.member.roles.find("name", "Scaletta")){
						if(mafia == "TPTO"){
							let mafianame = "TPTO";
							let mafia1 = ((store.get("scbase") + store.get("scarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("tptobase") + store.get("tptoarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("sctotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Scaletta''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "452916745146204181", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							}
						
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''TPTO''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "452916745146204181", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})
					})
				})})
			})
			})
			})
			})
			})
			})
			})
			})
			})
			})
							
					}
						}
						if(mafia == "NM" || mafia == "Nightmare"){
							let mafianame = "TPTO";
							let mafia1 = ((store.get("scbase") + store.get("scarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("nmbase") + store.get("nmarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("sctotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Scaletta''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "452916745146204181", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Nightmare''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "452916745146204181", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})
					})
				})})
			})
			})
			})
			})
			})
			})
			})
			})
			})
			})
							
					}
				}
		
						if(mafia == "LM" || mafia == "LIMONES MAFIOSOS"){
							let mafianame = "LM";
							let mafia1 = ((store.get("scbase") + store.get("scarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("lmbase") + store.get("lmarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("sctotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Scaletta''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "409659786594877440", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})
					})})
				})
			})
			})
			})
			})
			})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Limones Mafiosos''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "409659786594877440", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})})
						})
					})
				})
			})
			})
			})
						})
					})
				})
			})
			})
			})
			})
							
					}
						}
						if(mafia == "MC" || mafia == "MCDONALD'S"){
							let mafianame = "McDonald's";
							let mafia1 = ((store.get("scbase") + store.get("scarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("mcbase") + store.get("mcarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("sctotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Scaletta''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "344149948524134411", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})})
							})
						})
					})
				})
			})
			})
							})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''McDonald's''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "344149948524134411", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})})
						})
					})
				})
			})
			})
			})
						})
					})
				})
			})
			})
			})
			})
							
					}
						}
						if(mafia == "CW" || mafia == "The chicken's warriors"){
							let mafianame = "The chicken's warriors";
							let mafia1 = ((store.get("scbase") + store.get("scarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("cwbase") + store.get("cwarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = (store.get("sctotal") / 100) * 15;
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Scaletta''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "306793290450075649", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})})
						})
					})
				})
			})
			})
			})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''The Chicken's Warriors''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "306793290450075649", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})})
						})
					})
				})
			})
			})
			})
						})
					})
				})
			})
			})
			})
			})
							
					}
						}
					}
				}
					if(message.member.roles.find("name", "McDonald's")){
						if(mafia == "TPTO"){
							let mafianame = "TPTO";
							let mafia1 = ((store.get("mcbase") + store.get("mcarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("tptobase") + store.get("tptoarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = Math.ceil((store.get("tptototal") / 100) * 15);
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''McDonald's''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "452916745146204181", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})})
						})
					})
				})
			})
			})
			})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''TPTO'! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "452916745146204181", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							
					}
						}
						if(mafia == "NM" || mafia == "NIGHTMARE"){
							let mafianame = "Nightmare";
							let mafia1 = ((store.get("mcbase") + store.get("mcarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("nmbase") + store.get("nmarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = Math.ceil((store.get("tptototal") / 100) * 15);
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''McDonald's''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "217969261262536714", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})})
							})
						})
					})
				})
			})
			})
							})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("El ganador es ''Nightmare''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "217969261262536714", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})})
						})
					})
				})
			})
			})
			})
						})
					})
				})
			})
			})
			})
			})
							
					}
						}
						if(mafia == "LM" || mafia == "LIMONES MAFIOSOS"){
							let mafianame = "LM";
							let mafia1 = ((store.get("mcbase") + store.get("mcarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("lmbase") + store.get("lmarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = Math.ceil((store.get("tptototal") / 100) * 15);
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''McDonald's''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "409659786594877440", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Limones Mafiosos''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "409659786594877440", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})})
					})
				})
			})
			})
			})
			})
					})
				})
			})
			})
			})
			})
							
					}
						}
						if(mafia == "SC" || mafia == "Scaletta"){
							let mafianame = "McDonald's";
							let mafia1 = ((store.get("mcbase") + store.get("mcarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("scbase") + store.get("scarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = Math.ceil((store.get("tptototal") / 100) * 15);
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''McDonald's''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "360805518282981377", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})})
						})
					})
				})
			})
			})
			})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''Scaletta''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "360805518282981377", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})})
							})
						})
					})
				})
			})
			})
							})
						})
					})
				})
			})
			})
			})
			})
							
					}
						}
						if(mafia == "CW" || mafia == "The chicken's warriors"){
							let mafianame = "The chicken's warriors";
							let mafia1 = ((store.get("mcbase") + store.get("mcarsenal")) / 2000) * 100;
							let mafia2 = ((store.get("cwbase") + store.get("cwarsenal")) / 2000) * 100;
							let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
							let winprize = Math.ceil((store.get("tptototal") / 100) * 15);
							if(numberwinner <= mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''McDonald's''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", "306793290450075649", {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})
												  })
												})
											})
									})
								})
							})
						})
					})
				})
			})
			})
			})
			})
							}
							if(numberwinner > mafia1){
								message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
									delay(5000).then(() => {
										msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
										  .then((msg) => {
											delay(5000).then(() => {
												msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
												.then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
											
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
														msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
												  
												  .then((msg) => {
													delay(5000).then(() => {
			
														msg.edit("El ganador es ''The chicken's warriors''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
														Client.editUserBalance("344119818875699202", "306793290450075649", {bank: winprize}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
														Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
															message.channel.send(":x: | A error has occured!")
														});
												  })
										  })
										  .catch(console.error);
										})
									})
								})
							})
						})
					})
				})
			})
													})
												})
							})
						})
					})
				})
			})
			})
			})
			})
							
					}
						}
						if(message.member.roles.find("name", "The chicken's warriors")){
							if(mafia == "TPTO"){
								let mafianame = "TPTO";
								let mafia1 = ((store.get("cwbase") + store.get("cwarsenal")) / 2000) * 100;
								let mafia2 = ((store.get("tptobase") + store.get("tptoarsenal")) / 2000) * 100;
								let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
								let winprize = (store.get("cwtotal") / 100) * 15;
								if(numberwinner <= mafia1){
									message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
										delay(5000).then(() => {
											msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
											  .then((msg) => {
												delay(5000).then(() => {
													msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
													.then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
												
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
			
															msg.edit("El ganador es ''The Chicken's Warriors''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
															Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
															Client.editUserBalance("344119818875699202", "452916745146204181", {bank: 100}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
													  })
											  })
											  .catch(console.error);
											})
										})
									})
								})
							})
						})
					})
				})
			
										})
									})
								})
							})
						})
					})
				})
			})
			})
			})
								}
								if(numberwinner > mafia1){
									message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
										delay(5000).then(() => {
											msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
											  .then((msg) => {
												delay(5000).then(() => {
													msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
													.then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
												
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
			
															msg.edit("El ganador es ''TPTO''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
															Client.editUserBalance("344119818875699202", "452916745146204181", {bank: winprize}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
															Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
													  })
											  })
											  .catch(console.error);
											})
										})
									})
								})
							})
						})
					})
				})
			})
													  })
								})
							})
						})
					})
				})
			})
			})
			})
								
						}
							}
							if(mafia == "NM" || mafia == "NIGHTMARE"){
								let mafianame = "Nightmare";
								let mafia1 = ((store.get("cwbase") + store.get("cwarsenal")) / 2000) * 100;
								let mafia2 = ((store.get("tptobase") + store.get("tptoarsenal")) / 2000) * 100;
								let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
								let winprize = (store.get("cwtotal") / 100) * 15;
								if(numberwinner <= mafia1){
									message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
										delay(5000).then(() => {
											msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
											  .then((msg) => {
												delay(5000).then(() => {
													msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
													.then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
												
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
			
															msg.edit("El ganador es ''The Chicken's Warriors''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
															Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
															Client.editUserBalance("344119818875699202", "452916745146204181", {bank: 100}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
													  })
											  })
											  .catch(console.error);
											})
										})
									})
								})
							})
						})
					})
				})
			})
													  })
								})
							})
						})
					})
				})
			})
			})
			})
								}
								if(numberwinner > mafia1){
									message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
										delay(5000).then(() => {
											msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
											  .then((msg) => {
												delay(5000).then(() => {
													msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
													.then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
												
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
			
															msg.edit("El ganador es ''TPTO''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
															Client.editUserBalance("344119818875699202", "452916745146204181", {bank: winprize}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
															Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
													  })
											  })
											  .catch(console.error);
											})
										})
									})
								})
							})
						})
					})
				})
										})
									})
								})
							})
						})
					})
				})
			})
			})
			})
								
						}
							}
							if(mafia == "LM" || mafia == "LIMONES MAFIOSOS"){
								let mafianame = "LM";
								let mafia1 = ((store.get("cwbase") + store.get("cwarsenal")) / 2000) * 100;
								let mafia2 = ((store.get("lmbase") + store.get("lmarsenal")) / 2000) * 100;
								let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
								let winprize = (store.get("cwtotal") / 100) * 15;
								if(numberwinner <= mafia1){
									message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
										delay(5000).then(() => {
											msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
											  .then((msg) => {
												delay(5000).then(() => {
													msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
													.then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
												
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
			
															msg.edit("El ganador es ''The Chicken's Warriors''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
															Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
															Client.editUserBalance("344119818875699202", "409659786594877440", {bank: 100}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
													  })
											  })
											  .catch(console.error);
											})
										})
									})
								})
							})
						})
					})
				})
			})
									})
								})
							})
						})
					})
				})
			})
			})
			})
								}
								if(numberwinner > mafia1){
									message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
										delay(5000).then(() => {
											msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
											  .then((msg) => {
												delay(5000).then(() => {
													msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
													.then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
												
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
			
															msg.edit("El ganador es ''Limones Mafiosos''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
															Client.editUserBalance("344119818875699202", "409659786594877440", {bank: winprize}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
															Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
													  })
											  })
											  .catch(console.error);
											})
										})
									})
								})
							})
						})
					})
				})
			})
													  })
								})
							})
						})
					})
				})
			})
			})
			})
								
						}
							}
							if(mafia == "SC" || mafia == "Scaletta"){
								let mafianame = "McDonald's";
								let mafia1 = ((store.get("cwbase") + store.get("cwarsenal")) / 2000) * 100;
								let mafia2 = ((store.get("scbase") + store.get("scarsenal")) / 2000) * 100;
								let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
								let winprize = (store.get("cwtotal") / 100) * 15;
								if(numberwinner <= mafia1){
									message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
										delay(5000).then(() => {
											msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
											  .then((msg) => {
												delay(5000).then(() => {
													msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
													.then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
												
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
			
															msg.edit("El ganador es ''The Chicken's Warriors''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
															Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
															Client.editUserBalance("344119818875699202", "360805518282981377", {bank: 100}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
													  })
											  })
											  .catch(console.error);
											})
										})
									})
								})
							})
						})
					})
				})
			})
													  })
													})
												})
			
						})
					})
				})
			})
			})
			})
								}
								if(numberwinner > mafia1){
									message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
										delay(5000).then(() => {
											msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
											  .then((msg) => {
												delay(5000).then(() => {
													msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
													.then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
												
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
			
															msg.edit("El ganador es ''Scaletta''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
															Client.editUserBalance("344119818875699202", "360805518282981377", {bank: winprize}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
															Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
													  })
											  })
											  .catch(console.error);
											})
										})
									})
								})
							})
						})
					})
				})
			})
													  })
													})
												})
											})
			
			
					})
				})
			})
			})
			})
								
						}
							}
							if(mafia == "MC" || mafia == "MCDONALD'S"){
								let mafianame = "McDonald's";
								let mafia1 = ((store.get("cwbase") + store.get("cwarsenal")) / 2000) * 100;
								let mafia2 = ((store.get("mcbase") + store.get("mcarsenal")) / 2000) * 100;
								let numberwinner = Math.floor(Math.random()*mafia1+mafia2+1);
								let winprize = (store.get("cwtotal") / 100) * 15;
								if(numberwinner <= mafia1){
									message.channel.send("La batalla ha empezado!\n[--------------------] 0%").then((msg) => {
										delay(5000).then(() => {
											msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
											  .then((msg) => {
												delay(5000).then(() => {
													msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
													.then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
												
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
			
															msg.edit("El ganador es ''The Chicken's Warriors''! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
															Client.editUserBalance("344119818875699202", message.author.id, {bank: winprize}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
															Client.editUserBalance("344119818875699202", "344149948524134411", {bank: 100}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
													  })
											  })
											  .catch(console.error);
											})
										})
									})
								})
							})
						})
					})
				})
			})
													  })
													})
												})
											})
										})
									})
								
			})
			})
			})
								}
								if(numberwinner > mafia1){
									message.channel.send("La batalla ha empezadoA!\n[--------------------] 0%").then((msg) => {
										delay(5000).then(() => {
											msg.edit("La batalla ha empezado!\n[■■------------------] 10%")
											  .then((msg) => {
												delay(5000).then(() => {
													msg.edit("La batalla ha empezado!\n[■■■■----------------] 20%")
													.then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■--------------] 30%")
												
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■------------] 40%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■----------] 50%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■--------] 60%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■------] 70%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■-----] 80%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
															msg.edit("La batalla ha empezado!\n[■■■■■■■■■■■■■■■■■■----] 90%")
													  
													  .then((msg) => {
														delay(5000).then(() => {
			
															msg.edit("El ganador es ''McDonald's'! Y se lleva un botin de " + winprize + "<:pavos:413089639562346497>");
															Client.editUserBalance("344119818875699202", "344149948524134411", {bank: winprize}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
															Client.editUserBalance("344119818875699202", message.author.id, {bank: 100}).catch(() => {
																message.channel.send(":x: | A error has occured!")
															});
													  })
											  })
											  .catch(console.error);
											})
										})
									})
								})
							})
						})
					})
				})
			})
			})
			})
													  })
													})
												})
											})
										})
									})
								})
								
						}
							}
						}
					}
				}
			




			function getLvL (value){
				if(value == 0){
					return "LVL 0";
				}
				if(value == 100){
					return "LVL 1";
				}
				if(value == 150){
					return "LVL 2";
				}
				if(value == 225){
					return "LVL 3";
				}
				if(value == 250){
					return "LVL 4";
				}
				if(value == 275){
					return "LVL 5";
				}
				if(value == 300){
					return "LVL 6";
				}
				if(value == 350){
					return "LVL 7";
				}
				if(value == 400){
					return "LVL 8";
				}
				if(value == 450){
					return "LVL 9";
				}
				if(value == 500){
					return "LVL 10";
				}
			}

			if(msg.startsWith(config.prefix + "MVIEW")  && message.member.roles.find("name", "tmptest")){
				if(message.member.roles.find("name", "TPTO")){
					message.channel.send({embed: {
						color: 3447003,
						author: {
						name: "Mafia Info",
						icon_url: client.user.avatarURL
						},
						fields: [
							{
								name: "Mafia Base - " + getLvL(store.get("tptobase")),
								value: "HP: " + store.get("tptobase")
							},
							{
								name: "Mafia Arsenal - " + getLvL(store.get("tptoarsenal")),
								value: "DMG: " + store.get("tptoarsenal")
							},
							],
						timestamp: new Date(),
						footer: {
						icon_url: client.user.avatarURL,
						text: "Fortnite ESP"
						}
					}
				})
				}
				if(message.member.roles.find("name", "The chicken's warriors")){
					message.channel.send({embed: {
						color: 3447003,
						author: {
						name: "Mafia Info",
						icon_url: client.user.avatarURL
						},
						fields: [
							{
								name: "Mafia Base - " + getLvL(store.get("cwbase")),
								value: "HP: " + store.get("cwbase")
							},
							{
								name: "Mafia Arsenal - " + getLvL(store.get("cwarsenal")),
								value: "DMG: " + store.get("cwarsenal")
							},
							],
						timestamp: new Date(),
						footer: {
						icon_url: client.user.avatarURL,
						text: "Fortnite ESP"
						}
					}
				})
				}
				if(message.member.roles.find("name", "Nightmare")){
					message.channel.send({embed: {
						color: 3447003,
						author: {
						name: "Mafia Info",
						icon_url: client.user.avatarURL
						},
						fields: [
							{
								name: "Mafia Base - " + getLvL(store.get("nmbase")),
								value: "HP: " + store.get("nmbase")
							},
							{
								name: "Mafia Arsenal - " + getLvL(store.get("nmarsenal")),
								value: "DMG: " + store.get("nmarsenal")
							},
							],
						timestamp: new Date(),
						footer: {
						icon_url: client.user.avatarURL,
						text: "Fortnite ESP"
						}
					}
				})	
				}
				if(message.member.roles.find("name", "Nightmare")){
					message.channel.send({embed: {
						color: 3447003,
						author: {
						name: "Mafia Info",
						icon_url: client.user.avatarURL
						},
						fields: [
							{
								name: "Mafia Base - " + getLvL(store.get("cwbase")),
								value: "HP: " + store.get("cwbase")
							},
							{
								name: "Mafia Arsenal - " + getLvL(store.get("cwarsenal")),
								value: "DMG: " + store.get("cwarsenal")
							},
							],
						timestamp: new Date(),
						footer: {
						icon_url: client.user.avatarURL,
						text: "Fortnite ESP"
						}
					}
				})	
				}
				if(message.member.roles.find("name", "Scaletta")){
					message.channel.send({embed: {
						color: 3447003,
						author: {
						name: "Mafia Info",
						icon_url: client.user.avatarURL
						},
						fields: [
							{
								name: "Mafia Base - " + getLvL(store.get("scbase")),
								value: "HP: " + store.get("scbase")
							},
							{
								name: "Mafia Arsenal - " + getLvL(store.get("scarsenal")),
								value: "DMG: " + store.get("scarsenal")
							},
							],
						timestamp: new Date(),
						footer: {
						icon_url: client.user.avatarURL,
						text: "Fortnite ESP"
						}
					}
				})
				}
				if(message.member.roles.find("name", "McDonald's")){
					message.channel.send({embed: {
						color: 3447003,
						author: {
						name: "Mafia Info",
						icon_url: client.user.avatarURL
						},
						fields: [
							{
								name: "Mafia Base - " + getLvL(store.get("mcbase")),
								value: "HP: " + store.get("mcbase")
							},
							{
								name: "Mafia Arsenal - " + getLvL(store.get("mcarsenal")),
								value: "DMG: " + store.get("mcarsenal")
							},
							],
						timestamp: new Date(),
						footer: {
						icon_url: client.user.avatarURL,
						text: "Fortnite ESP"
						}
					}
				})
				}
				if(message.member.roles.find("name", "LM")){
					message.channel.send({embed: {
						color: 3447003,
						author: {
						name: "Mafia Info",
						icon_url: client.user.avatarURL
						},
						fields: [
							{
								name: "Mafia Base - " + getLvL(store.get("lmbase")),
								value: "HP: " + store.get("lmbase")
							},
							{
								name: "Mafia Arsenal - " + getLvL(store.get("lmarsenal")),
								value: "DMG: " + store.get("lmarsenal")
							},
							],
						timestamp: new Date(),
						footer: {
						icon_url: client.user.avatarURL,
						text: "Fortnite ESP"
						}
					}
				})
				}
				if(message.member.roles.find("name", "Staff")){
					message.channel.send({embed: {
						color: 3447003,
						author: {
						name: "Mafia Info",
						icon_url: client.user.avatarURL
						},
						fields: [
							{
								name: "Mafia Base - " + getLvL(store.get("staffbase")),
								value: "HP: " + store.get("staffbase")
							},
							{
								name: "Mafia Arsenal - " + getLvL(store.get("staffarsenal")),
								value: "DMG: " + store.get("staffarsenal")
							},
							],
						timestamp: new Date(),
						footer: {
						icon_url: client.user.avatarURL,
						text: "Fortnite ESP"
						}
					}
				})
				}
			}

			if(msg.startsWith(config.prefix + "MRESET")){
				store.set("staffbase", 0);
				store.set("nmbase", 0);
				store.set("scbase", 0);
				store.set("tptobase", 0);
				store.set("lmbase", 0);
				store.set("staffarsenal", 0);
				store.set("nmarsenal", 0);
				store.set("scarsenal", 0);
				store.set("tptoarsenal", 0);
				store.set("lmarsenal", 0);
				store.set("cwbase", 0);
				store.set("cwarsenal", 0);
			}



			if(msg.startsWith(config.prefix + "MBUY") && message.member.roles.find("name", "tmptest")){
				if(true){
					let object = msg.split(config.prefix + "MBUY ")[1];
					if(object == "MAFIA BASE LVL1"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(100000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -100000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 100);
									message.reply(" Has comprado Mafia Base LVL1");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL1");
								if(100000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -100000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffbase", 100);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL1");
								if(100000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -100000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmbase", 100);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL1");
								if(100000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -100000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmbase", 100);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL1");
								if(100000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -100000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcbase", 100);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL1");
								if(100000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -100000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scbase", 100);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL1");
								if(100000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -100000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmbase", 100);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA BASE LVL2"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(200000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -200000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 150);
									message.reply(" Has comprado Mafia Base LVL2");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL2");
								if(200000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -200000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffbase", 150);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL2");
								if(200000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -200000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffbase", 150);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL2");
								if(200000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -200000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmbase", 150);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL2");
								if(200000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -200000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcbase", 150);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL2");
								if(200000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -200000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scbase", 150);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL2");
								if(200000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -200000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmbase", 150);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA BASE LVL3"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(350000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -350000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 225);
									message.reply(" Has comprado Mafia Base LVL3");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(350000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -350000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 225);
									message.reply(" Has comprado Mafia Base LVL3");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL3");
								if(350000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -350000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffbase", 255);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL3");
								if(350000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -350000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmbase", 255);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL3");
								if(350000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -350000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcbase", 255);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL3");
								if(350000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -350000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scbase", 255);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL3");
								if(350000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -350000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmbase", 255);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA BASE LVL4"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 250);
									message.reply(" Has comprado Mafia Base LVL4");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 250);
									message.reply(" Has comprado Mafia Base LVL4");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL4");
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffbase", 250);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL4");
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmbase", 250);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL4");
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcbase", 250);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL4");
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scbase", 250);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL4");
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmbase", 250);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA BASE LVL5"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(750000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -750000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 275);
									message.reply(" Has comprado Mafia Base LVL5");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(750000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -750000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 275);
									message.reply(" Has comprado Mafia Base LVL5");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL5");
								if(750000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -750000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffbase", 275);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL5");
								if(750000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -750000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmbase", 275);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL5");
								if(750000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -750000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcbase", 275);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL5");
								if(750000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -750000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scbase", 275);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL5");
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmbase", 275);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA BASE LVL6"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(5000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 300);
									message.reply(" Has comprado Mafia Base LVL6");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(5000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 300);
									message.reply(" Has comprado Mafia Base LVL6");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL6");
								if(5000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffbase", 300);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL6");
								if(5000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmbase", 300);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL6");
								if(5000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcbase", 300);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL6");
								if(5000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scbase", 300);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL6");
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmbase", 300);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA BASE LVL7"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(50000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 350);
									message.reply(" Has comprado Mafia Base LVL7");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(50000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 350);
									message.reply(" Has comprado Mafia Base LVL7");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL7");
								if(50000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffbase", 350);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL7");
								if(50000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmbase", 350);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL7");
								if(50000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcbase", 350);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL7");
								if(50000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scbase", 350);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL7");
								if(50000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmbase", 350);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA BASE LVL8"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 400);
									message.reply(" Has comprado Mafia Base LVL8");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 400);
									message.reply(" Has comprado Mafia Base LVL8");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL8");
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffbase", 400);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL8");
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmbase", 400);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL8");
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcbase", 400);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL8");
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scbase", 400);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL8");
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmbase", 400);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA BASE LVL9"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 450);
									message.reply(" Has comprado Mafia Base LVL9");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 450);
									message.reply(" Has comprado Mafia Base LVL9");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL9");
								if(5000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffbase", 450);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL9");
								if(5000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmbase", 450);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL9");
								if(5000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcbase", 450);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL9");
								if(5000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scbase", 450);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL9");
								if(5000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmbase", 450);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA BASE LVL10"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(50000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 500);
									message.reply(" Has comprado Mafia Base LVL10");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(50000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobase", 500);
									message.reply(" Has comprado Mafia Base LVL10");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL10");
								if(50000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffbase", 500);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL10");
								if(50000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmbase", 500);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL10");
								if(50000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcbase", 500);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL10");
								if(50000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scbase", 500);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Base LVL10");
								if(50000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmbase", 500);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA ARSENAL LVL1"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(100000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -100000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 100);
									message.reply(" Has comprado Mafia Arsenal LVL1");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(100000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -100000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 100);
									message.reply(" Has comprado Mafia Arsenal LVL1");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL1");
								if(100000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -100000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffarsenal", 100);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL1");
								if(100000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -100000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmarsenal", 100);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL1");
								if(100000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -100000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcarsenal", 100);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL1");
								if(100000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -100000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scarsenal", 100);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL1");
								if(100000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -100000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmarsenal", 100);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA ARSENAL LVL2"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(200000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -200000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 150);
									message.reply(" Has comprado Mafia Arsenal LVL2");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(200000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -200000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 150);
									message.reply(" Has comprado Mafia Arsenal LVL2");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL2");
								if(200000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -200000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffarsenal", 150);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL2");
								if(200000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -200000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmarsenal", 150);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL2");
								if(200000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -200000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcarsenal", 150);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL2");
								if(200000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -200000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scarsenal", 150);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL2");
								if(200000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -200000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmarsenal", 150);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA ARSENAL LVL3"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(350000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -350000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 225);
									message.reply(" Has comprado Mafia Arsenal LVL3");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(350000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -350000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 225);
									message.reply(" Has comprado Mafia Arsenal LVL3");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL3");
								if(350000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -350000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffarsenal", 255);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL3");
								if(350000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -350000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmarsenal", 255);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL3");
								if(350000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -350000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcarsenal", 255);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL3");
								if(350000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -350000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scarsenal", 255);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL3");
								if(350000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -350000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmarsenal", 255);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA ARSENAL LVL4"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 250);
									message.reply(" Has comprado Mafia Arsenal LVL4");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 250);
									message.reply(" Has comprado Mafia Arsenal LVL4");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL4");
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffarsenal", 250);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL4");
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmarsenal", 250);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL4");
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcarsenal", 250);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL4");
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scarsenal", 250);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL4");
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmarsenal", 250);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA ARSENAL LVL5"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(750000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -750000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 275);
									message.reply(" Has comprado Mafia Arsenal LVL5");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(750000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -750000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 275);
									message.reply(" Has comprado Mafia Arsenal LVL5");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL5");
								if(750000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -750000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffarsenal", 275);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL5");
								if(750000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -750000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmarsenal", 275);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL5");
								if(750000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -750000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcarsenal", 275);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL5");
								if(750000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -750000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scarsenal", 275);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL5");
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmarsenal", 275);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA ARSENAL LVL6"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(5000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 300);
									message.reply(" Has comprado Mafia Arsenal LVL6");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(5000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 300);
									message.reply(" Has comprado Mafia Arsenal LVL6");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL6");
								if(5000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffarsenal", 300);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL6");
								if(5000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmarsenal", 300);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL6");
								if(5000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcarsenal", 300);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL6");
								if(5000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scarsenal", 300);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL6");
								if(500000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmarsenal", 300);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA ARSENAL LVL7"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(50000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 350);
									message.reply(" Has comprado Mafia Arsenal LVL7");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL7");
								if(50000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffarsenal", 350);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL7");
								if(50000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmarsenal", 350);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL7");
								if(50000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcarsenal", 350);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL7");
								if(50000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scarsenal", 350);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL7");
								if(50000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmarsenal", 350);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA ARSENAL LVL8"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 400);
									message.reply(" Has comprado Mafia Arsenal LVL8");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 400);
									message.reply(" Has comprado Mafia Arsenal LVL8");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL8");
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffarsenal", 400);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL8");
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmarsenal", 400);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL8");
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcarsenal", 400);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL8");
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scarsenal", 400);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL8");
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -500000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmarsenal", 400);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA ARSENAL LVL9"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 450);
									message.reply(" Has comprado Mafia Arsenal LVL9");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(500000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 450);
									message.reply(" Has comprado Mafia Arsenal LVL9");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL9");
								if(5000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffarsenal", 450);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL9");
								if(5000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmarsenal", 450);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL9");
								if(5000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcarsenal", 450);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL9");
								if(5000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scarsenal", 450);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL9");
								if(5000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -5000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmarsenal", 450);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
					if(object == "MAFIA ARSENAL LVL10"){
						if(message.member.roles.find("name", "TPTO") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(50000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 500);
									message.reply(" Has comprado Mafia Arsenal LVL10");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "The chicken's warriors") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(50000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptoarsenal", 500);
									message.reply(" Has comprado Mafia Arsenal LVL10");

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Staff") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL10");
								if(50000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("staffarsenal", 500);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
							
						}
						if(message.member.roles.find("name", "Nightmare") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL10");
								if(50000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmarsenal", 500);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "McDonald's") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL10");
								if(50000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcarsenal", 500);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "Scaletta") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL10");
								if(50000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scarsenal", 500);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
						if(message.member.roles.find("name", "LM") && message.member.roles.find("name", "👑")){
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Has comprado Mafia Arsenal LVL10");
								if(50000000000 <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -50000000000}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("lmarsenal", 500);

								}else{
									message.reply(" :x: No suficiente cantidad de dinero");
								}
							})
						}
					}
				}
			}

			if(false){
				if(message.channel.id == "451097297388830740" || message.channel.id == "414905250055454730" || message.channel.id == "444165465330417674" || message.channel.id == "438053503416664064"){
					let atr = Number(msg.split(config.prefix + "MDEP ")[1]);
					let ifall = msg.split(config.prefix + "MDEP ")[1];
					if(message.member.roles.find("name", "TPTO")){
						if(ifall != "ALL"){
							if(isNaN(atr)){
								return;
							}
							message.reply(" Ha depositado " + commafy(atr)+ " <:pavos:413089639562346497>");
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(atr <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -atr}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobank", store.get("tptobank") + atr);
								}else{
									message.reply(" :x: No tienes esa cantidad de dinero");
								}
							})
						}else{
							if(ifall == "ALL"){
								
								Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
									let userbalance = user.cash;
									message.reply(" Ha depositado " + commafy(userbalance)+ " <:pavos:413089639562346497>");
									store.set("tptobank", store.get("tptobank") + userbalance);
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -userbalance}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});

								})
							}else{
								message.reply(" :x:  El valor debe ser un numero o el identificador all");
							}
						}
					}
					if(message.member.roles.find("name", "McDonald's")){
						if(ifall != "ALL"){
							if(isNaN(atr)){
								return;
							}
							
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								message.reply(" Ha depositado " + commafy(userbalance)+ " <:pavos:413089639562346497>");
								if(atr <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -atr}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcbank", store.get("mcbank") + atr);

								}else{
									message.reply(" :x: No tienes esa cantidad de dinero");
								}
							})
						}else{
							if(ifall == "ALL"){
								
								Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
									let userbalance = user.cash;
									message.reply(" Ha depositado " + commafy(userbalance)+ " <:pavos:413089639562346497>");
									store.set("mcbank", store.get("mcbank") + userbalance);
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -userbalance}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
								})
							}else{
								message.reply(" :x:  El valor debe ser un numero o el identificador all");
							}
						}
					}
					if(message.member.roles.find("name", "Nightmare")){
						if(ifall != "ALL"){
							if(isNaN(atr)){
								return;
							}
							message.reply(" Ha depositado " + commafy(atr)+ " <:pavos:413089639562346497>");
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								let userbalance = user.cash;
								if(atr <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -atr}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmbank", store.get("nmbank") + atr);
								}else{
									message.reply(" :x: No tienes esa cantidad de dinero");
								}
							})
						}else{
							if(ifall == "ALL"){
								
								Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
									let userbalance = user.cash;
									message.reply(" Ha depositado " + commafy(userbalance)+ " <:pavos:413089639562346497>");
									store.set("nmbank", store.get("nmbank") + userbalance);
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -userbalance}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
								})
							}else{
								message.reply(" :x:  El valor debe ser un numero o el identificador all");
							}
						}
					}
					if(message.member.roles.find("name", "Scaletta")){
						if(ifall != "ALL"){
							if(isNaN(atr)){
								return;
							}
							message.reply(" Ha depositado " +commafy(atr)+ " <:pavos:413089639562346497>");
							Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
								
								let userbalance = user.cash;
								if(atr <= userbalance){
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -atr}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scbank", store.get("scbank") + atr);
								}else{
									message.reply(" :x: No tienes esa cantidad de dinero");
								}
							})
						}else{
							if(ifall == "ALL"){
								
								Client.getUserBalance("344119818875699202", message.author.id).then((user) => {
									let userbalance = user.cash;
									message.reply(" Ha depositado " + commafy(userbalance)+ " <:pavos:413089639562346497>");
									store.set("scbank", store.get("scbank") + userbalance);
									Client.editUserBalance("344119818875699202", message.author.id, {cash: -userbalance}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									
								})
							}else{
								message.reply(" :x:  El valor debe ser un numero o el identificador all");
							}
						}
					}	
				}
			}




















			if(false){
				if(message.channel.id == "451097297388830740" || message.channel.id == "414905250055454730" || message.channel.id == "444165465330417674" || message.channel.id == "438053503416664064"){
					let atr = Number(msg.split(config.prefix + "MWITH ")[1]);
					let ifall = msg.split(config.prefix + "MWITH ")[1];
					if(message.member.roles.find("name", "TPTO")){
						if(ifall != "ALL"){
							if(isNaN(atr)){
								return;
							}
								if(atr <= store.get("tptobank")){
									message.reply(" Ha retirado " + atr);
									Client.editUserBalance("344119818875699202", message.author.id, {cash: atr}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("tptobank", store.get("tptobank") - atr);
									
								}else{
									message.reply(" :x: No hay esa cantidad de dinero");
								}
						}else{
							if(ifall == "ALL"){
								message.reply(" Ha retirado " + store.get("tptobank"));
									Client.editUserBalance("344119818875699202", message.author.id, {cash: store.get("tptobank")}).then(store.set("tptobank", 0)).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});

							}
						}
					}
					if(message.member.roles.find("name", "McDonald's")){
						if(ifall != "ALL"){
							if(isNaN(atr)){
								return;
							}
								if(atr <= store.get("mcbank")){
									message.reply(" Ha retirado " + atr);
									Client.editUserBalance("344119818875699202", message.author.id, {cash: atr}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("mcbank", store.get("mcbank") - atr);
									
								}else{
									message.reply(" :x: No hay esa cantidad de dinero");
								}
						}else{
							if(ifall == "ALL"){
								message.reply(" Ha retirado " + store.get("mcbank"));
									Client.editUserBalance("344119818875699202", message.author.id, {cash: store.get("mcbank")}).then(store.set("mcbank", 0)).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
								
							}
						}
					}
					if(message.member.roles.find("name", "Nightmare")){
						if(ifall != "ALL"){
							if(isNaN(atr)){
								return;
							}
								if(atr <= store.get("nmbank")){
									message.reply(" Ha retirado " + atr);
									Client.editUserBalance("344119818875699202", message.author.id, {cash: atr}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("nmbank", store.get("nmbank") - atr);
									
								}else{
									message.reply(" :x: No hay esa cantidad de dinero");
								}
						}else{
							if(ifall == "ALL"){
								message.reply(" Ha retirado " + store.get("nmbank"));
									Client.editUserBalance("344119818875699202", message.author.id, {cash: store.get("nmbank")}).then(store.set("nmbank", 0)).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									
							}
						}
					}
					if(message.member.roles.find("name", "Scaletta")){
						if(ifall != "ALL"){
							if(isNaN(atr)){
								return;
							}
								if(atr <= store.get("scbank")){
									message.reply(" Ha retirado " + atr);
									Client.editUserBalance("344119818875699202", message.author.id, {cash: atr}).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									store.set("scbank", store.get("scbank") - atr);
								}else{
									message.reply(" :x: No hay esa cantidad de dinero");
								}
						}else{
							if(ifall == "ALL"){
									message.reply(" Ha retirado " + store.get("scbank"));
									Client.editUserBalance("344119818875699202", message.author.id, {cash: store.get("scbank")}).then(store.set("scbank", 0)).catch(() => {
										message.channel.send(":x: | A error has occured!")
									});
									
							}
						}
					}
				}
			}





			/*---------------------------------------------------------------------------------
			-----------------------------------------------------------------------------------
			-----------------------------------------------------------------------------------*/

			if(msg.startsWith(config.prefix + "FTN") || msg.startsWith(config.prefix + "FM")){
				message.reply(" Bot de stats reemplazado por el propio. Usa !fts (nombre) o !fts si tienes la cuenta linkeada.")
			}


			if (msg.startsWith(config.prefix + "FTS")){
				if(message.channel.id == "361921331924697088" || message.channel.id == "440519741426368512" || message.channel.id == "561599847183155200" || message.channel.id == "471313485213466625" || message.channel.id == "444196865685192715" || message.channel.id == "553250156930400256"){
					let atr = message.content.split(config.prefix + "fts ")[1];
					let ifconsole;
					if(atr != undefined || atr != null){
						ifconsole = atr.split(" ")[0];
						let waitmaidud = atr.split(" ")[0];
						if(ifconsole == "ps4" || ifconsole == "psn"){
							ifconsole = "psn";
							atr = message.content.split(config.prefix + `fts ${waitmaidud} `)[1];
						}
						if(ifconsole == "xbox" || ifconsole == "xbl"){
							ifconsole = "xbl";
							atr = message.content.split(config.prefix + `fts ${waitmaidud} `)[1];
						}
						if(ifconsole != "psn" && ifconsole != "xbox"){
							ifconsole = "pc";
						}
					}
					
					if (atr == null){
						if(store.get(message.author.id + "_rankme") != undefined && store.get(message.author.id + "_rankme") != null){
							atr = store.get(message.author.id + "_rankme");
							if(store.get(message.author.id + "_plataform") == "psn"){
								ifconsole = "psn";
							}
							if(store.get(message.author.id + "_plataform") == "xbl"){
								ifconsole = "xbl";
							}
						} else {
							message.channel.send(":x: Tu cuenta no ha sido linkeada. Usa ``!link nombre en fortnite`` para linkear tu cuenta");
							return;
						}
					}
						if(ifconsole == null){
							ifconsole = "pc";
						}
						console.log(ifconsole);
						var playerName = encodeURIComponent(atr);
						console.log(playerName);
						var options = {
							method: "GET",
							url: `https://api.fortnitetracker.com/v1/profile/${ifconsole}/${playerName}`,
							strictSSL: false,
							headers: {
								'UserAgent': 'nodejs request',
								'TRN-Api-Key': ''
							}
			
						}
						process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
						request(options, (error, response, body) => {
							console.log(response.statusCode);
							if (!error && response.statusCode == 200) {
								var stats = JSON.parse(body);
								if (stats.stats != undefined && stats.stats.p9 != undefined && stats.stats.p10 != undefined && stats.stats.p2 != undefined){								
								var url = "https://cdn.glitch.com/b41169e9-8f22-41e1-92ab-d999062e58c4%2Fxd.png?1554910911069";

                  var request = new Request();
                  request.get( url, function(err, resp, data) {
	                if (err) throw err;
									console.log(response.statusCode);
                  const img = new Image()
									img.onload = () => ctx.drawImage(img, 0, 0)
									img.onerror = err => { throw err }
									img.src = data;
									let xwins;
									let size;
									if(Number(stats.lifeTimeStats[11].value) >= 10.00){
										KDALL = Math.round(Number(stats.lifeTimeStats[11].value) * 10) / 10;
									}else{
										KDALL = stats.lifeTimeStats[11].value;
									}
									if(Number(stats.lifeTimeStats[9].value) >= 10.00){
										WINALL = Math.round(Number(stats.lifeTimeStats[9].value) * 10) / 10;
									}else{
										WINALL = stats.lifeTimeStats[9].value;
									}
									if (Number(Number(stats.lifeTimeStats[8].value)) >= 1000){
										xwins = 32;
									}else if (Number(Number(stats.lifeTimeStats[8].value)) > 100){
										xwins = 42;
									}else if (Number(Number(stats.lifeTimeStats[8].value)) > 10){
										xwins = 46;
									}else if (Number(Number(stats.lifeTimeStats[8].value)) > 0){
										xwins = 52;
									}

									if(atr.length >= 16){ //atr.length >= 16
										size = '17px Impact';
									}else if (atr.length > 14){ //atr.length > 14
										size = '18px Impact';
									}else if (atr.length > 12){ //atr.length > 12
										size = '19px Impact';
									}else if (atr.length > 10){ //atr.length > 10
										size = '21px Impact';
									}else if (atr.length > 8){ //atr.length > 8
										size = '23px Impact';
									}else if (atr.length > 6){ //atr.length > 6
										size = '25px Impact';
									}else if (atr.length > 4){ //atr.length > 4
										size = '27px Impact';
									}else if (atr.length > 2){ //atr.length > 2
										size = '27px Impact';
									}else if (atr.length > 0){ //atr.length > 0
										size = '27px Impact';
									}
									
									
									// Save the default state
									ctx.fillStyle = '#000000';     // Make changes to the settings
									// LIFETIME
									ctx.font = size;
									ctx.fillText(atr.toUpperCase(), 36, 93); //atr.toUpperCase() 77 Medium
									ctx.font = '20px Impact';
									ctx.fillText(Number(stats.lifeTimeStats[8].value), xwins, 190);
									ctx.fillText(KDALL, 92, 190);
									ctx.fillText(WINALL, 152, 190);
									ctx.fillText(stats.lifeTimeStats[10].value, 95, 258);
									ctx.fillText(Number(stats.lifeTimeStats[7].value), 95, 299);
									ctx.fillText(ifconsole, 131, 340);

									//SOLO

									//WINS
									if(stats.stats.p2.top1.valueInt >= 10000){
										sizeSoloWins = '20px Impact';
									}else if(stats.stats.p2.top1.valueInt >= 1000){
										sizeSoloWins = '21px Impact';
									}else if(stats.stats.p2.top1.valueInt >= 100){
										sizeSoloWins = '22px Impact';
									}else if(stats.stats.p2.top1.valueInt >= 10){
										sizeSoloWins = '22px Impact';
									}else if(stats.stats.p2.top1.valueInt >= 0){
										sizeSoloWins = '23px Impact';
									}
									

									ctx.font = sizeSoloWins;
									ctx.fillText(stats.stats.p2.top1.valueInt, 274, 110);

									//KD
									if(stats.stats.p2.kd.valueDec >= 10.00){
										KDSOLO = Math.round(stats.stats.p2.kd.valueDec * 10) / 10;
									}else{
										KDSOLO = stats.stats.p2.kd.valueDec;
									}

									ctx.font = '22px Impact';
									ctx.fillText(KDSOLO, 274, 160);

									//KILLS
									if(stats.stats.p2.kills.valueInt >= 10000000){
										sizeSoloKills = '18px Impact';
									}else if(stats.stats.p2.kills.valueInt >= 100000){
										sizeSoloKills = '19px Impact';
									}else if(stats.stats.p2.kills.valueInt >= 10000){
										sizeSoloKills = '20px Impact';
									}else if(stats.stats.p2.kills.valueInt >= 1000){
										sizeSoloKills = '21px Impact';
									}else if(stats.stats.p2.kills.valueInt >= 100){
										sizeSoloKills = '22px Impact';
									}else if(stats.stats.p2.kills.valueInt >= 10){
										sizeSoloKills = '22px Impact';
									}else if(stats.stats.p2.kills.valueInt >= 0){
										sizeSoloKills = '23px Impact';
									}
									
									ctx.font = sizeSoloKills;
									ctx.fillText(stats.stats.p2.kills.valueInt, 274, 210);

									//WINRATE
									if(stats.stats.p2.winRatio.valueDec >= 10.00){
										WINSOLO = Math.round(stats.stats.p2.winRatio.valueDec * 10) / 10;
									}else{
										WINSOLO = stats.stats.p2.winRatio.valueDec;
									}

									ctx.font = '22px Impact';
									ctx.fillText(WINSOLO, 274, 260)

									//MATCHES
									if(stats.stats.p2.matches.valueInt >= 10000000){
										sizeSolop = '18px Impact';
									}else if(stats.stats.p2.matches.valueInt >= 100000){
										sizeSolop = '19px Impact';
									}else if(stats.stats.p2.matches.valueInt >= 10000){
										sizeSolop = '20px Impact';
									}else if(stats.stats.p2.matches.valueInt >= 1000){
										sizeSolop = '21px Impact';
									}else if(stats.stats.p2.matches.valueInt >= 100){
										sizeSolop = '22px Impact';
									}else if(stats.stats.p2.matches.valueInt >= 10){
										sizeSolop = '22px Impact';
									}else if(stats.stats.p2.matches.valueInt >= 0){
										sizeSolop = '23px Impact';
									}

									ctx.font = sizeSolop;
									ctx.fillText(stats.stats.p2.matches.valueInt, 274, 305)

									//DUO
									
									//WINS
									if(stats.stats.p10.top1.valueInt >= 10000){
										sizeDuoWins = '20px Impact';
									}else if(stats.stats.p10.top1.valueInt >= 1000){
										sizeDuoWins = '21px Impact';
									}else if(stats.stats.p10.top1.valueInt >= 100){
										sizeDuoWins = '22px Impact';
									}else if(stats.stats.p10.top1.valueInt >= 10){
										sizeDuoWins = '22px Impact';
									}else if(stats.stats.p10.top1.valueInt >= 0){
										sizeDuoWins = '23px Impact';
									}

									ctx.font = sizeDuoWins;
									ctx.fillText(stats.stats.p10.top1.valueInt, 392, 110);

									//KD
									if(stats.stats.p10.kd.valueDec >= 10.00){
										KDDUO = Math.round(stats.stats.p10.kd.valueDec * 10) / 10;
									}else{
										KDDUO = stats.stats.p10.kd.valueDec;
									}

									ctx.font = '22px Impact';
									ctx.fillText(KDDUO, 392, 160);


									//KILLS
									if(stats.stats.p10.kills.valueInt >= 10000000){
										sizeDuoKills = '18px Impact';
									}else if(stats.stats.p10.kills.valueInt >= 100000){
										sizeDuoKills = '19px Impact';
									}else if(stats.stats.p10.kills.valueInt >= 10000){
										sizeDuoKills = '20px Impact';
									}else if(stats.stats.p10.kills.valueInt >= 1000){
										sizeDuoKills = '21px Impact';
									}else if(stats.stats.p10.kills.valueInt >= 100){
										sizeDuoKills = '22px Impact';
									}else if(stats.stats.p10.kills.valueInt >= 10){
										sizeDuoKills = '22px Impact';
									}else if(stats.stats.p10.kills.valueInt >= 0){
										sizeDuoKills = '23px Impact';
									}

									ctx.font = sizeDuoKills;
									ctx.fillText(stats.stats.p10.kills.valueInt, 392, 210);


									//WINRATE
									if(stats.stats.p10.winRatio.valueDec >= 10.00){
										WINDUO = Math.round(stats.stats.p10.winRatio.valueDec * 10) / 10;
									}else{
										WINDUO = stats.stats.p10.winRatio.valueDec;
									}

									ctx.font = '22px Impact';
									ctx.fillText(WINDUO, 392, 260)

									//MATCHES
									if(stats.stats.p10.matches.valueInt >= 10000000){
										sizeDuop = '18px Impact';
									}else if(stats.stats.p10.matches.valueInt >= 100000){
										sizeDuop = '19px Impact';
									}else if(stats.stats.p10.matches.valueInt >= 10000){
										sizeDuop = '20px Impact';
									}else if(stats.stats.p10.matches.valueInt >= 1000){
										sizeDuop = '21px Impact';
									}else if(stats.stats.p10.matches.valueInt >= 100){
										sizeDuop = '22px Impact';
									}else if(stats.stats.p10.matches.valueInt >= 10){
										sizeDuop = '22px Impact';
									}else if(stats.stats.p10.matches.valueInt >= 0){
										sizeDuop = '23px Impact';
									}

									ctx.font = sizeDuop;
									ctx.fillText(stats.stats.p10.matches.valueInt, 392, 305)

									//SQUAD

									//WINS
									if(stats.stats.p9.top1.valueInt >= 10000){
										sizeSquadWins = '20px Impact';
									}else if(stats.stats.p9.top1.valueInt >= 1000){
										sizeSquadWins = '21px Impact';
									}else if(stats.stats.p9.top1.valueInt >= 100){
										sizeSquadWins = '22px Impact';
									}else if(stats.stats.p9.top1.valueInt >= 10){
										sizeSquadWins = '22px Impact';
									}else if(stats.stats.p9.top1.valueInt >= 0){
										sizeSquadWins = '23px Impact';
									}

									ctx.font = sizeSquadWins;
									ctx.fillText(stats.stats.p9.top1.valueInt, 515, 110);

									//KD
									if(stats.stats.p9.kd.valueDec >= 10.00){
										KDSQUAD = Math.round(stats.stats.p9.kd.valueDec * 10) / 10;
									}else{
										KDSQUAD = stats.stats.p9.kd.valueDec;
									}

									ctx.font = '22px Impact';
									ctx.fillText(KDSQUAD, 515, 160);

									//KILLS
									if(stats.stats.p9.kills.valueInt >= 10000000){
										sizeSquadKills = '18px Impact';
									}else if(stats.stats.p9.kills.valueInt >= 100000){
										sizeSquadKills = '19px Impact';
									}else if(stats.stats.p9.kills.valueInt >= 10000){
										sizeSquadKills = '20px Impact';
									}else if(stats.stats.p9.kills.valueInt >= 1000){
										sizeSquadKills = '21px Impact';
									}else if(stats.stats.p9.kills.valueInt >= 100){
										sizeSquadKills = '22px Impact';
									}else if(stats.stats.p9.kills.valueInt >= 10){
										sizeSquadKills = '22px Impact';
									}else if(stats.stats.p9.kills.valueInt >= 0){
										sizeSquadKills = '23px Impact';
									}

									ctx.font = sizeSquadKills;
									ctx.fillText(stats.stats.p9.kills.valueInt, 515, 210);

									//WINRATE
									if(stats.stats.p9.winRatio.valueDec >= 10.00){
										WINSQUAD = Math.round(stats.stats.p9.winRatio.valueDec * 10) / 10;
									}else{
										WINSQUAD = stats.stats.p9.winRatio.valueDec;
									}

									ctx.font = '22px Impact';
									ctx.fillText(WINSQUAD, 520, 260)

									//MATCHES
									if(stats.stats.p9.matches.valueInt >= 10000000){
										sizeSquadp = '18px Impact';
									}else if(stats.stats.p9.matches.valueInt >= 100000){
										sizeSquadp = '19px Impact';
									}else if(stats.stats.p9.matches.valueInt >= 10000){
										sizeSquadp = '20px Impact';
									}else if(stats.stats.p9.matches.valueInt >= 1000){
										sizeSquadp = '21px Impact';
									}else if(stats.stats.p9.matches.valueInt >= 100){
										sizeSquadp = '22px Impact';
									}else if(stats.stats.p9.matches.valueInt >= 10){
										sizeSquadp = '22px Impact';
									}else if(stats.stats.p9.matches.valueInt >= 0){
										sizeSquadp = '23px Impact';
									}

									ctx.font = '22px Impact';
									ctx.fillText(stats.stats.p9.matches.valueInt, 520, 305)

									//IMAGE BUILD
									var out = fs.createWriteStream('public/state.png')
									, stream = canvas.createPNGStream();

									stream.on('data', function(chunk){
										out.write(chunk);
									});
									message.channel.send({
										files: [{
										attachment: 'public/state.png',
										name: 'state.png'
										}]
									})
										.then(console.log)
										.catch(console.error);
								})
                  
                  
                  
                  
                  

										}else{message.channel.send({
											embed: {
												color: 0xff0000,
												title: "ERROR",
												description: "❌ Usuario no encontrado",
											}
										});
									}
							}else{
								message.channel.send({
									embed: {
										color: 0xff0000,
										title: "ERROR",
										description: response.statusCode,
									}
								});
							}
						}) //FINAL

						}
					
			}


			

			/*---------------------------------------------------------------------------------
			-----------------------------------------------------------------------------------
			-----------------------------------------------------------------------------------*/
















			if (msg.startsWith(config.prefix + "CLEAR")){
				if(message.member.roles.find("name", "Staff")){
					let cantidad = message.content.split(" ")[1];
					message.delete();
					delay(200).then(() => {
						message.channel.bulkDelete(cantidad).catch(console.error);
					})
				}else {message.channel.send({
					embed: {
						color: 0xff0000,
						title: "ERROR",
						description: "❌ No tienes permiso para usar este comando",
					}
				});}
			}



			if (msg == config.prefix + "E1"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "Donador")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:BlobBanHammer:466168283377172480>");
				}
			}
			if (msg == config.prefix + "E2"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "Donador")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:madblob:466168265820078092>");
				}
			}
			if (msg == config.prefix + "E3"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "Donador")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:success:467097051059060746>");
				}
			}
			if (msg == config.prefix + "E4"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "Donador")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:PoggersRow:467097054263377930>");
				}
			}
			if (msg == config.prefix + "E5"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "Donador")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:PepeLmfaoooo:467097043320438796>");
				}
			}
			if (msg == config.prefix + "E6"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "Donador")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:PepeHmm:467097053437100033>");
				}
			}
			if (msg == config.prefix + "E7"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "Donador")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:JoyRow:467097042179588117>");
				}
			}
			if (msg == config.prefix + "E8"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "Donador")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:FortniteLlama:467097058160148491>");
				}
			}
			if (msg == config.prefix + "E9"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "Donador")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:Dab:467097060751966223>");
				}
			}
			if (msg == config.prefix + "E10"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "Donador")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:ThumbsUpParrot:472436777848930305>");
				}
			}
			if (msg == config.prefix + "E11"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "💲 Sponsor 💲")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:banned:472436106307043339>");
				}
			}
			if (msg == config.prefix + "E12"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "💲 Sponsor 💲")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:xd:472436326147293195>");
				}
			}
			if (msg == config.prefix + "E13"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "💲 Sponsor 💲")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:SuperFastSpin:472436325208031252>");
				}
			}
			if (msg == config.prefix + "E14"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "💲 Sponsor 💲")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:smart:472436129195360257>");
				}
			}
			if (msg == config.prefix + "E15"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "💲 Sponsor 💲")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:PepoDance:472436324654383134>");
				}
			}
			if (msg == config.prefix + "E16"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "💲 Sponsor 💲")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:PepeDab:472436324272439318>");
				}
			}
			if (msg == config.prefix + "E17"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "💲 Sponsor 💲")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:Orange_Justice:472436326348881920>");
				}
			}
			if (msg == config.prefix + "E18"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "💲 Sponsor 💲")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:finger_wave:472436324494737419>");
				}
			}
			if (msg == config.prefix + "E19"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "💲 Sponsor 💲")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:dogdance:472436324469571595>");
				}
			}
			if (msg == config.prefix + "E20"){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "💲 Sponsor 💲")){
					message.delete();
					message.channel.send(message.member.displayName + ": <a:Dabbing_Yeet:472436326172459008>");
				}
			}

			if (msg.startsWith(config.prefix + "QUIT")){
				if(message.member.roles.find("name", "Staff")){
					console.log("dud")
					let FortniteESP = client.guilds.get("344119818875699202"); 
					let mention = message.mentions.members.first();
					FortniteESP.createChannel('temp', 'voice')
					.then((ch) => {
						mention.setVoiceChannel(ch.id).catch(console.error);
						delay(200).then(() => {
							ch.delete();
							message.channel.send("<@"+mention.id+"> desconectado del canal correctamente <a:success:467097051059060746>");
						})
					})
					.catch(console.error);
				}
			}

			if(msg.startsWith(config.prefix + "ELIST")){
				if(message.channel.id == "425407543393779712" || message.channel.id == "444196865685192715" || message.channel.id == "361921331924697088" || message.channel.id == "451097297388830740" || message.channel.id == "438053503416664064" || message.channel.id == "553250156930400256"){
					message.channel.send("**LISTA DE EMOJIS PARA DONADORES Y SPONSORS**\n!e1 <a:BlobBanHammer:466168283377172480>\n!e2 <a:madblob:466168265820078092>\n!e3 <a:success:467097051059060746>\n!e4 <a:PoggersRow:467097054263377930>\n!e5 <a:PepeLmfaoooo:467097043320438796>\n!e6 <a:PepeHmm:467097053437100033>\n!e7 <a:JoyRow:467097042179588117>\n!e8 <a:FortniteLlama:467097058160148491>\n!e9 <a:Dab:467097060751966223>\n!e10 <a:ThumbsUpParrot:472436777848930305>\n\n**EXLUSIVOS PARA SPONSORS**\n!e11 <a:banned:472436106307043339>\n!e12 <a:xd:472436326147293195>\n!e13 <a:SuperFastSpin:472436325208031252>\n!e14 <a:smart:472436129195360257>\n!e15 <a:PepoDance:472436324654383134>\n!e16 <a:PepeDab:472436324272439318>\n!e17 <a:Orange_Justice:472436326348881920>\n!e18 <a:finger_wave:472436324494737419>\n!e19 <a:dogdance:472436324469571595>\n!e20 <a:Dabbing_Yeet:472436326172459008>");
				}
			}
		
			if (msg.startsWith(config.prefix + "ADDROLE")){
				if (message.channel.id == "361921331924697088" || message.channel.id == "425407543393779712" || message.channel.id == "444196865685192715" || message.channel.id == "471229239228891136" || message.channel.id == "471227591316078594" || message.channel.id == "553250156930400256"){
					let atr = msg.split(config.prefix + "ADDROLE ")[1];
					if(atr == "EU"){
						let role = message.guild.roles.find("name", "EU");
						let member = message.member;
						member.addRole(role).catch(console.error);
						message.channel.send("Rol `EU` añadido correctamente <a:success:467097051059060746>");
					} 
					if(atr == "NA"){
						let role = message.guild.roles.find("name", "NA");
						let member = message.member;
						member.addRole(role).catch(console.error);
						message.channel.send("Rol `NA` añadido correctamente <a:success:467097051059060746>");
					} 
					if (atr != "NA" && atr != "EU"){
						message.channel.send(":x: Solo existen los roles ``EU`` y ``NA``");
					}
				}
			}
			if (msg.startsWith(config.prefix + "DELROLE")){
				if (message.channel.id == "361921331924697088" || message.channel.id == "425407543393779712" || message.channel.id == "444196865685192715" || message.channel.id == "471229239228891136" || message.channel.id == "471227591316078594" || message.channel.id == "553250156930400256"){
					let atr = msg.split(config.prefix + "DELROLE ")[1];
					if(atr == "EU"){
						let role = message.guild.roles.find("name", "EU");
						let member = message.member;
						member.removeRole(role).catch(console.error);
						message.channel.send("Rol `EU` removido correctamente <a:success:467097051059060746>");
					}
					if(atr == "NA"){
						let role = message.guild.roles.find("name", "NA");
						let member = message.member;
						member.removeRole(role).catch(console.error);
						message.channel.send("Rol `NA` removido correctamente <a:success:467097051059060746>");
					}
					if (atr != "NA" && atr != "EU"){
						message.channel.send(":x: Solo existen los roles ``EU`` y ``NA``");
					}
				}
			}
			if (msg.startsWith(config.prefix + "BUSCAR")){
				if (message.channel.id == "363591971006185477" || message.channel.id == "350231169851326465" || message.channel.id == "384098536020770839" || message.channel.id == "425407543393779712" || message.channel.id == "444196865685192715" || message.channel.id == "471229239228891136" || message.channel.id == "471227591316078594"){
					let antestae = message.content.split(config.prefix + "buscar ");
					if (antestae[1] != null){
						let atributos = antestae[1].split(" ");
						if (atributos.length >= 3){
							if (atributos.length == 3){
								if (atributos[0] == "duo" || atributos[0] == "squad"){
									if(atributos[0] == "duo"){
										message.channel.send("```Markdown\n< BUSCAR GRUPO >\n+ "+atributos[0].toUpperCase()+": <"+atributos[1]+">\n+ PERSONAS NECESITADAS: <"+"+"+atributos[2]+">```")
										let canal = client.channels.get(Duos[atributos[1] - 1]);
											if(canal != undefined){
												let options = {
													maxAge: 300
												}
											canal.createInvite(options)
											.then(invite => message.channel.send({embed: {
												color: 3447003,
												description: "[Haz click para entrar a la sala](https://discord.gg/" + invite.code+")"
											}})
											)
											.catch(console.error);
										} else {message.channel.send(":x: Canal no encontrado").then((msg)=>{
											msg.delete(10000)
										});
									}
									}
									if(atributos[0] == "squad"){
										message.channel.send("```Markdown\n< BUSCAR GRUPO >\n+ "+atributos[0].toUpperCase()+": <"+atributos[1]+">\n+ PERSONAS NECESITADAS: <"+"+"+atributos[2]+">```")
										let canal = client.channels.get(Squads[atributos[1] - 1]);
										if(canal != undefined){
											let options = {
												maxAge: 300
											}
											canal.createInvite(options)
											.then(invite => message.channel.send({embed: {
												color: 3447003,
												description: "[Haz click para entrar a la sala](https://discord.gg/" + invite.code+")"
											}})
											)
											.catch(console.error);
										}else {message.channel.send(":x: Canal no encontrado").then((msg)=>{
											msg.delete(10000)
										});
									}
									}
								} else{message.channel.send(":x: Las unicas opciones son `duo` o `squad`").then((msg)=>{
									msg.delete(10000)
								});
							}
						}else if (atributos.length != 4){message.channel.send(":x:Debes poner el modo, la sala y las personas que faltan!").then((msg)=>{
							msg.delete(10000)
						});
					}
							if (atributos.length >= 4){
								if (atributos[0] == "duo" || atributos[0] == "squad"){
									if (atributos[3] == "EU" || atributos[3] == "NA" || atributos[3] == "eu" || atributos[3] == "na"){
										if(atributos[0] == "duo"){
											message.channel.send("```Markdown\n< BUSCAR GRUPO >\n+ "+atributos[0].toUpperCase()+": <"+atributos[1]+">\n+ PERSONAS NECESITADAS: <"+"+"+atributos[2]+">\n+ REGIÓN: <"+atributos[3].toUpperCase()+">```")
											let canal = client.channels.get(Duos[atributos[1] - 1]);
											if(canal != undefined){
												let options = {
													maxAge: 300
												}
											canal.createInvite(options)
											.then(invite => message.channel.send({embed: {
												color: 3447003,
												description: "[Haz click para entrar a la sala](https://discord.gg/" + invite.code+")"
											}})
											)
											.catch(console.error);
										} else {message.channel.send(":x: Canal no encontrado").then((msg)=>{
											msg.delete(10000)
										});
									}
										}
										if(atributos[0] == "squad"){
											message.channel.send("```Markdown\n< BUSCAR GRUPO >\n+ "+atributos[0].toUpperCase()+": <"+atributos[1]+">\n+ PERSONAS NECESITADAS: <"+"+"+atributos[2]+">\n+ REGIÓN: <"+atributos[3].toUpperCase()+">```")
											let canal = client.channels.get(Squads[atributos[1] - 1]);
											if(canal != undefined){
												let options = {
													maxAge: 300
												}
												canal.createInvite(options)
												.then(invite => message.channel.send({embed: {
													color: 3447003,
													description: "[Haz click para entrar a la sala](https://discord.gg/" + invite.code+")"
												}})
												)
												.catch(console.error);
											}else {message.channel.send(":x: Canal no encontrado").then((msg)=>{
												msg.delete(10000)
											});
										}
										}
									} else{message.channel.send(":x: Las unicas opciones son `EU` o `NA`").then((msg)=>{
										msg.delete(10000)
									});
								}
								} else{message.channel.send(":x: Las unicas opciones son `duo` o `squad`").then((msg)=>{
									msg.delete(10000)
								});
							}
						}else if (atributos.length != 3){message.channel.send(":x:Debes poner el modo, la sala y las personas que faltan!").then((msg)=>{
							msg.delete(10000)
						});
					}
		}
	} else {
		message.channel.send({embed: {
			color: 3447003,
			title: "Uso del comando !buscar",
			description: "ℹ !buscar (squad/duo) (numero de sala) (personas necesitadas) (eu/na, este es opcional)",
		}
		})
	}
}
			}

			if (msg.startsWith(config.prefix + "DBUSCAR")){
				if(message.member.roles.find("name", "Staff") || message.member.roles.find("name", "💲 Sponsor 💲")){
				if (message.channel.id == "363591971006185477" || message.channel.id == "350231169851326465" || message.channel.id == "384098536020770839" || message.channel.id == "425407543393779712" || message.channel.id == "444196865685192715" || message.channel.id == "471229239228891136" || message.channel.id == "471227591316078594"){
					let antestae = message.content.split(config.prefix + "dbuscar ");
					if (antestae[1] != null){
						let atributos = antestae[1].split(" ");
						if (atributos.length >= 3){
							if (atributos.length == 3){
								if (atributos[0] == "duo" || atributos[0] == "squad"){
									if(atributos[0] == "duo"){
										message.channel.send("```Markdown\n💰 < DONADOR > 💰\n# BÚSQUEDA DE EQUIPO 💵\n\n+ ➜ "+atributos[0].toUpperCase()+": <"+atributos[1]+">\n+ ➜ PERSONAS NECESITADAS: <"+"+"+atributos[2]+">\n\n💳 CERTIFIED```")
										let canal = client.channels.get(Duos[atributos[1] - 1]);
											if(canal != undefined){
												let options = {
													maxAge: 300
												}
											canal.createInvite(options)
											.then(invite => message.channel.send({embed: {
												color: 3447003,
												description: "[Haz click para entrar a la sala](https://discord.gg/" + invite.code+")"
											}})
											)
											.catch(console.error);
										} else {message.channel.send(":x: Canal no encontrado").then((msg)=>{
											msg.delete(10000)
										});
									}
									}
									if(atributos[0] == "squad"){
										message.channel.send("```Markdown\n💰 < DONADOR > 💰\n# BÚSQUEDA DE EQUIPO 💵\n\n+ ➜ "+atributos[0].toUpperCase()+": <"+atributos[1]+">\n+ ➜ PERSONAS NECESITADAS: <"+"+"+atributos[2]+">\n\n💳 CERTIFIED```")
										let canal = client.channels.get(Squads[atributos[1] - 1]);
										if(canal != undefined){
											let options = {
												maxAge: 300
											}
											canal.createInvite(options)
											.then(invite => message.channel.send({embed: {
												color: 3447003,
												description: "[Haz click para entrar a la sala](https://discord.gg/" + invite.code+")"
											}})
											)
											.catch(console.error);
										}else {message.channel.send(":x: Canal no encontrado").then((msg)=>{
											msg.delete(10000)
										});
									}
									}
								} else{message.channel.send(":x: Las unicas opciones son `duo` o `squad`").then((msg)=>{
									msg.delete(10000)
								});
							}
						}
					
							if (atributos.length >= 4){
								if (atributos[0] == "duo" || atributos[0] == "squad"){
										if(atributos[0] == "duo"){
											let comentario = message.content.split(atributos[2])[1];
											message.channel.send("```Markdown\n💰 < DONADOR > 💰\n+ ➜ "+atributos[0].toUpperCase()+": <"+atributos[1]+">\n+ ➜ PERSONAS NECESITADAS: <"+"+"+atributos[2]+">\n+ ➜ REQUISITOS/MODO DE JUEGO: <"+comentario.toUpperCase()+">\n\n💳 CERTIFIED```")
											let canal = client.channels.get(Duos[atributos[1] - 1]);
											if(canal != undefined){
												let options = {
													maxAge: 300
												}
											canal.createInvite(options)
											.then(invite => message.channel.send({embed: {
												color: 3447003,
												description: "[Haz click para entrar a la sala](https://discord.gg/" + invite.code+")"
											}})
											)
											.catch(console.error);
										} else {message.channel.send(":x: Canal no encontrado").then((msg)=>{
											msg.delete(10000)
										});
									}
										}
										if(atributos[0] == "squad"){
											let comentario = message.content.split(atributos[2])[1];
											message.channel.send("```Markdown\n💰 < DONADOR > 💰\n+ ➜ "+atributos[0].toUpperCase()+": <"+atributos[1]+">\n+ ➜ PERSONAS NECESITADAS: <"+"+"+atributos[2]+">\n+ ➜ REQUISITOS/MODO DE JUEGO: <"+comentario.toUpperCase()+" >\n\n💳 CERTIFIED```")
											let canal = client.channels.get(Squads[atributos[1] - 1]);
											if(canal != undefined){
												let options = {
													maxAge: 300
												}
												canal.createInvite(options)
												.then(invite => message.channel.send({embed: {
													color: 3447003,
													description: "[Haz click para entrar a la sala](https://discord.gg/" + invite.code+")"
												}})
												)
												.catch(console.error);
											}else {message.channel.send(":x: Canal no encontrado").then((msg)=>{
												msg.delete(10000)
											});
										}
										}
									
								} else{message.channel.send(":x: Las unicas opciones son `duo` o `squad`").then((msg)=>{
									msg.delete(10000)
								});
							}
						}else if (atributos.length != 3){message.channel.send(":x:Debes poner el modo, la sala y las personas que faltan!").then((msg)=>{
							msg.delete(10000)
						});
					}
		}
	} else {
		message.channel.send({embed: {
			color: 3447003,
			title: "Uso del comando !buscar",
			description: "ℹ !buscar (squad/duo) (numero de sala) (personas necesitadas) (eu/na, este es opcional)",
		}
		})
	}
}
				}
			}



	if (msg == config.prefix + "RANKME") { //ROLE
		if(message.channel.id == "361921331924697088" || message.channel.id == "471229239228891136" || message.channel.id == "471227591316078594" || message.channel.id == "444196865685192715" || message.channel.id == "553250156930400256"){
				if(store.get(message.author.id + "_rankme") != null && store.get(message.author.id + "_rankme") != undefined){
					atributes = store.get(message.author.id + "_rankme");
				} else{
					message.channel.send(":x: Tu cuenta no ha sido linkeada. Usa ``!link nombre en fortnite`` para linkear tu cuenta");
					return;
				}
			var playerName = encodeURIComponent(atributes);
				var options = {
					method: "GET",
					url: `https://api.fortnitetracker.com/v1/profile/pc/${playerName}`,
					strictSSL: false,
					headers: {
						'UserAgent': 'nodejs request',
						'TRN-Api-Key': ''
					}
	
				}
				process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
				request(options, (error, response, body) => {
					console.log(response.statusCode);
					if (!error && response.statusCode == 200) {
						var stats = JSON.parse(body);
						if (stats.lifeTimeStats != undefined){
							objetivo = "0";
							objetivoP = "0";
							if (Number(stats.lifeTimeStats[7].value) >= 0){
								if (Number(stats.lifeTimeStats[11].value) >= 0.0) {
									objetivo = "1"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 0.0) {
									progressbarKD = "[------------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 0.1) {
									progressbarKD = "[■■■---------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 0.2) {
									progressbarKD = "[■■■■■■------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 0.3) {
									progressbarKD = "[■■■■■■■■----------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 0.4) {
									progressbarKD = "[■■■■■■■■■■■-------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 0.5) {
									progressbarKD = "[■■■■■■■■■■■■■■----------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 0.6) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 0.7) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 0.8) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 0.9) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 1.0) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
								}
							}
							if (Number(stats.lifeTimeStats[7].value) >= 50){
								if (Number(stats.lifeTimeStats[11].value) >= 1.0) {
									objetivo = "2"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 1.0) {
									progressbarKD = "[------------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 1.1) {
									progressbarKD = "[■■■---------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 1.2) {
									progressbarKD = "[■■■■■■------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 1.3) {
									progressbarKD = "[■■■■■■■■----------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 1.4) {
									progressbarKD = "[■■■■■■■■■■■-------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 1.5) {
									progressbarKD = "[■■■■■■■■■■■■■■----------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 1.6) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 1.7) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 1.8) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 1.9) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 2.0) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
								}
							}
							
							if (Number(stats.lifeTimeStats[7].value) >= 250){
								if (Number(stats.lifeTimeStats[11].value) >= 2.0) {
									objetivo = "3"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 2.0) {
									progressbarKD = "[------------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 2.1) {
									progressbarKD = "[■■■---------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 2.2) {
									progressbarKD = "[■■■■■■------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 2.3) {
									progressbarKD = "[■■■■■■■■----------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 2.4) {
									progressbarKD = "[■■■■■■■■■■■-------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 2.5) {
									progressbarKD = "[■■■■■■■■■■■■■■----------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 2.6) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 2.7) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 2.8) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 2.9) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 3.0) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
								}
							}
	
							if (Number(stats.lifeTimeStats[7].value) >= 500){
								if (Number(stats.lifeTimeStats[11].value) >= 3.0) 
								{
									objetivo = "4"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 3.0) {
									progressbarKD = "[------------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 3.1) {
									progressbarKD = "[■■■---------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 3.2) {
									progressbarKD = "[■■■■■■------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 3.3) {
									progressbarKD = "[■■■■■■■■----------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 3.4) {
									progressbarKD = "[■■■■■■■■■■■-------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 3.5) {
									progressbarKD = "[■■■■■■■■■■■■■■----------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 3.6) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 3.7) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 3.8) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 3.9) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 4.0) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
								}
							}
	
							if (Number(stats.lifeTimeStats[7].value) >= 750){
								if (Number(stats.lifeTimeStats[11].value) >= 4.0) {
									objetivo = "5"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 4.0) {
									progressbarKD = "[------------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 4.1) {
									progressbarKD = "[■■■---------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 4.2) {
									progressbarKD = "[■■■■■■------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 4.3) {
									progressbarKD = "[■■■■■■■■----------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 4.4) {
									progressbarKD = "[■■■■■■■■■■■-------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 4.5) {
									progressbarKD = "[■■■■■■■■■■■■■■----------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 4.6) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 4.7) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 4.8) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 4.9) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 5.0) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
								}
							}
	
							if (Number(stats.lifeTimeStats[7].value) >= 1000){
								if (Number(stats.lifeTimeStats[11].value) >= 5.0) {
									objetivo = "6"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 5.0) {
									progressbarKD = "[------------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 5.1) {
									progressbarKD = "[■■■---------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 5.2) {
									progressbarKD = "[■■■■■■------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 5.3) {
									progressbarKD = "[■■■■■■■■----------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 5.4) {
									progressbarKD = "[■■■■■■■■■■■-------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 5.5) {
									progressbarKD = "[■■■■■■■■■■■■■■----------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 5.6) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 5.7) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 5.8) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 5.9) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 6.0) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
								}
							}
	
							if (Number(stats.lifeTimeStats[7].value) >= 1500){
								if (Number(stats.lifeTimeStats[11].value) >= 6.0) {
									objetivo = "7"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 6.0) {
									progressbarKD = "[------------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 6.1) {
									progressbarKD = "[■■■---------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 6.2) {
									progressbarKD = "[■■■■■■------------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 6.3) {
									progressbarKD = "[■■■■■■■■----------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 6.4) {
									progressbarKD = "[■■■■■■■■■■■-------------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 6.5) {
									progressbarKD = "[■■■■■■■■■■■■■■----------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 6.6) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 6.7) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 6.8) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 6.9) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
								}
								if (Number(stats.lifeTimeStats[11].value) >= 7.0) {
									progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
								}
							}
	
	
	
							if(Number(stats.lifeTimeStats[11].value) >= 0.0){
								if (Number(stats.lifeTimeStats[7].value) >= 0) {
									objetivoP = "50"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 0) {
									progressbarP = "[------------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 5) {
									progressbarP = "[■■■---------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 10) {
									progressbarP = "[■■■■■■------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 15) {
									progressbarP = "[■■■■■■■■----------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 20) {
									progressbarP = "[■■■■■■■■■■■-------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 25) {
									progressbarP = "[■■■■■■■■■■■■■■----------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 30) {
									progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 35) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 40) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 45) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 50) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
								}
							}
	
							
							if (Number(stats.lifeTimeStats[11].value) >= 1.0){
								if (Number(stats.lifeTimeStats[7].value) >= 50) {
									objetivoP = "250"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 50) {
									progressbarP = "[------------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 70) {
									progressbarP = "[■■■---------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 90) {
									progressbarP = "[■■■■■■------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 110) {
									progressbarP = "[■■■■■■■■----------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 130) {
									progressbarP = "[■■■■■■■■■■■-------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 150) {
									progressbarP = "[■■■■■■■■■■■■■■----------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 170) {
									progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 190) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 210) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■---]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 230) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 250) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
								}
							}
							
							if (Number(stats.lifeTimeStats[11].value) >= 2.0){
								if (Number(stats.lifeTimeStats[7].value) >= 250) {
									objetivoP = "500"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 250) {
									progressbarP = "[------------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 275) {
									progressbarP = "[■■■---------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 300) {
									progressbarP = "[■■■■■■------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 325) {
									progressbarP = "[■■■■■■■■----------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 350) {
									progressbarP = "[■■■■■■■■■■■------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 375) {
									progressbarP = "[■■■■■■■■■■■■■■---------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 400) {
									progressbarP = "[■■■■■■■■■■■■■■■■■------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 425) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■---]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 450) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 475) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 500) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
								}
							}
	
							if (Number(stats.lifeTimeStats[11].value) >= 3.0){
								if (Number(stats.lifeTimeStats[7].value) >= 500) {
									objetivoP = "750"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 500) {
									progressbarP = "[------------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 525) {
									progressbarP = "[■■■---------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 550) {
									progressbarP = "[■■■■■■------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 575) {
									progressbarP = "[■■■■■■■■----------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 600) {
									progressbarP = "[■■■■■■■■■■■-------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 625) {
									progressbarP = "[■■■■■■■■■■■■■■----------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 650) {
									progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 675) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 700) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 725) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 750) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
								}
							}
	
							if (Number(stats.lifeTimeStats[11].value) >= 4.0){
								if (Number(stats.lifeTimeStats[7].value) >= 750) {
									objetivoP = "1000"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 750) {
									progressbarP = "[------------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 775) {
									progressbarP = "[■■■---------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 800) {
									progressbarP = "[■■■■■■------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 825) {
									progressbarP = "[■■■■■■■■----------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 850) {
									progressbarP = "[■■■■■■■■■■■-------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 875) {
									progressbarP = "[■■■■■■■■■■■■■■-----------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 900) {
									progressbarP = "[■■■■■■■■■■■■■■■■■--------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 925) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■-----]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 950) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 975) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1000) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
								}
							}
							
							
							
							if (Number(stats.lifeTimeStats[11].value) >= 5.0){
								if (Number(stats.lifeTimeStats[7].value) >= 1000) {
									objetivoP = "1500"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1000) {
									progressbarP = "[------------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1050) {
									progressbarP = "[■■■---------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1100) {
									progressbarP = "[■■■■■■------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1150) {
									progressbarP = "[■■■■■■■■----------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1200) {
									progressbarP = "[■■■■■■■■■■■-------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1250) {
									progressbarP = "[■■■■■■■■■■■■■■----------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1300) {
									progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1350) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1400) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1450) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1500) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
								}
							}
	
							if (Number(stats.lifeTimeStats[11].value) >= 6.0){
								if (Number(stats.lifeTimeStats[7].value) >= 1500) {
									objetivoP = "2000"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1500) {
									progressbarP = "[------------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1550) {
									progressbarP = "[■■■---------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1600) {
									progressbarP = "[■■■■■■------------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1650) {
									progressbarP = "[■■■■■■■■----------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1700) {
									progressbarP = "[■■■■■■■■■■■-------------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1750) {
									progressbarP = "[■■■■■■■■■■■■■■----------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1800) {
									progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1850) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1900) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 1950) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
								}
								if (Number(stats.lifeTimeStats[7].value) >= 2000) {
									progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
								}
							}
	
							
	
	
	
	
							KD = stats.lifeTimeStats[11].value;
							if (KD > 0 && Number(stats.lifeTimeStats[7].value) > 50) {
								let role = message.guild.roles.find("name", "Novato");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}
							if (KD > 1 && Number(stats.lifeTimeStats[7].value) > 250) {
								let role = message.guild.roles.find("name", "Experimentado");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}
							else{
								let role = message.guild.roles.find("name", "Experimentado");
								let member = message.member;
									member.removeRole(role).catch(console.error);
								}
								if (KD > 2 && Number(stats.lifeTimeStats[7].value) > 500) {
									let role = message.guild.roles.find("name", "Semi-profesional");
									let member = message.member;
									member.addRole(role).catch(console.error);
								}
								else{
									let role = message.guild.roles.find("name", "Semi-profesional");
									let member = message.member;
									member.removeRole(role).catch(console.error);
								}
								if (KD > 3 && Number(stats.lifeTimeStats[7].value) > 750) {
									let role = message.guild.roles.find("name", "Profesional");
									let member = message.member;
									member.addRole(role).catch(console.error);
								}
								else{
									let role = message.guild.roles.find("name", "Profesional");
									let member = message.member;
									member.removeRole(role).catch(console.error);
								}
								if (KD > 4 && Number(stats.lifeTimeStats[7].value) > 1000) {
									let role = message.guild.roles.find("name", "Experto");
									let member = message.member;
									member.addRole(role).catch(console.error);
								}else{
									let role = message.guild.roles.find("name", "Experto");
									let member = message.member;
									member.removeRole(role).catch(console.error);
								}
								if (KD > 5 && Number(stats.lifeTimeStats[7].value) > 1500) {
									let role = message.guild.roles.find("name", "Hacker");
									let member = message.member;
									member.addRole(role).catch(console.error);
								}else{
									let role = message.guild.roles.find("name", "Hacker");
									let member = message.member;
									member.removeRole(role).catch(console.error);
								}
								if (KD > 6 && Number(stats.lifeTimeStats[7].value) > 2000) {
									let role = message.guild.roles.find("name", "Mito");
									let member = message.member;
									member.addRole(role).catch(console.error);
								}else{
									let role = message.guild.roles.find("name", "Mito");
									let member = message.member;
									member.removeRole(role).catch(console.error);
								}
	
								message.channel.send({
									embed: {
										color: 3447003,
										author: {
											name: client.user.username,
											icon_url: client.user.avatarURL
										},
										title: "Fortnite ESP Stats",
										description: "Progreso para " + store.get(message.author.id + "_rankme"),
										fields: [{
												name: "K/D " + KD + " -  K/D " + objetivo,
												value: progressbarKD
											},
											{
												name: "Partidas jugadas: " + Number(stats.lifeTimeStats[7].value) + " - " + objetivoP,
												value: progressbarP
											},
										],
										timestamp: new Date(),
										footer: {
											icon_url: client.user.avatarURL,
											text: "© Fortnite ESP"
										}
									}
								});
						} else{message.channel.send({
							embed: {
								color: 0xff0000,
								title: "ERROR",
								description: "❌ Usuario no encontrado",
							}
						});}
					} else {
						let error;
						if (response.statusCode == 404){
							error = "❌ El usuario no existe";
						}
						if (response.statusCode == 503){
							error = "❌ Espera antes de volver a buscar stats";
						}
						if (response.statusCode != 404 || response.statusCode != 503){
							error = response.statusCode;
						}
						message.channel.send({
						embed: {
							color: 0xff0000,
							title: "ERROR",
							description: error,
						}
					});
				}
				})
		}
	}
		if (msg == config.prefix + "RANKME_PS4") { //ROLE
			if(message.channel.id == "361921331924697088" || message.channel.id == "471229239228891136" || message.channel.id == "471227591316078594" || message.channel.id == "444196865685192715"){
					if(store.get(message.author.id + "_rankme") != null && store.get(message.author.id + "_rankme") != undefined){
						atributes = store.get(message.author.id + "_rankme");
					} else{
						message.channel.send(":x: Tu cuenta no ha sido linkeada. Usa ``!link nombre en fortnite`` para linkear tu cuenta");
						return;
					}
				var playerName = encodeURIComponent(atributes);
					var options = {
						method: "GET",
						url: `https://api.fortnitetracker.com/v1/profile/pc/${playerName}`,
						strictSSL: false,
						headers: {
							'UserAgent': 'nodejs request',
							'TRN-Api-Key': ''
						}
		
					}
	
					request(options, (error, response, body) => {
						if (!error && response.statusCode == 200) {
							console.log(response.statusCode);
							var stats = JSON.parse(body);
							if(stats.lifeTimeStats != undefined){
								objetivo = "0";
								objetivoP = "0";
								if (Number(stats.lifeTimeStats[7].value) >= 0){
									if (Number(stats.lifeTimeStats[11].value) >= 0.0) {
										objetivo = "1"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.0) {
										progressbarKD = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.1) {
										progressbarKD = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.2) {
										progressbarKD = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.3) {
										progressbarKD = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.4) {
										progressbarKD = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.5) {
										progressbarKD = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.6) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.7) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.8) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.9) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.0) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[7].value) >= 50){
									if (Number(stats.lifeTimeStats[11].value) >= 1.0) {
										objetivo = "2"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.0) {
										progressbarKD = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.1) {
										progressbarKD = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.2) {
										progressbarKD = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.3) {
										progressbarKD = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.4) {
										progressbarKD = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.5) {
										progressbarKD = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.6) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.7) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.8) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.9) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.0) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[7].value) >= 250){
									if (Number(stats.lifeTimeStats[11].value) >= 2.0) {
										objetivo = "3"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.0) {
										progressbarKD = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.1) {
										progressbarKD = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.2) {
										progressbarKD = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.3) {
										progressbarKD = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.4) {
										progressbarKD = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.5) {
										progressbarKD = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.6) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.7) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.8) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.9) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.0) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
								
								if (Number(stats.lifeTimeStats[7].value) >= 500){
									if (Number(stats.lifeTimeStats[11].value) >= 3.0) {objetivo = "4"}
									if (Number(stats.lifeTimeStats[11].value) >= 3.0) {
										progressbarKD = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.1) {
										progressbarKD = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.2) {
										progressbarKD = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.3) {
										progressbarKD = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.4) {
										progressbarKD = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.5) {
										progressbarKD = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.6) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.7) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.8) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.9) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.0) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[7].value) >= 750){
									if (Number(stats.lifeTimeStats[11].value) >= 4.0) {
										objetivo = "5"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.0) {
										progressbarKD = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.1) {
										progressbarKD = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.2) {
										progressbarKD = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.3) {
										progressbarKD = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.4) {
										progressbarKD = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.5) {
										progressbarKD = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.6) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.7) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.8) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.9) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.0) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
								
								if (Number(stats.lifeTimeStats[7].value) >= 1000){
									if (Number(stats.lifeTimeStats[11].value) >= 5.0) {
										objetivo = "6"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.0) {
										progressbarKD = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.1) {
										progressbarKD = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.2) {
										progressbarKD = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.3) {
										progressbarKD = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.4) {
										progressbarKD = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.5) {
										progressbarKD = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.6) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.7) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.8) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.9) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.0) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[7].value) >= 1500){
									if (Number(stats.lifeTimeStats[11].value) >= 6.0) {
										objetivo = "7"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.0) {
										progressbarKD = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.1) {
										progressbarKD = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.2) {
										progressbarKD = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.3) {
										progressbarKD = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.4) {
										progressbarKD = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.5) {
										progressbarKD = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.6) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.7) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.8) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.9) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 7.0) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
	
								if (Number(stats.lifeTimeStats[11].value) >= 0.0){
									if (Number(stats.lifeTimeStats[7].value) >= 0) {
										objetivoP = "50"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 0) {
										progressbarP = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 5) {
										progressbarP = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 10) {
										progressbarP = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 15) {
										progressbarP = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 20) {
										progressbarP = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 25) {
										progressbarP = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 30) {
										progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 35) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 40) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 45) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 50) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[11].value) >= 1.0){
									if (Number(stats.lifeTimeStats[7].value) >= 50) {
										objetivoP = "250"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 50) {
										progressbarP = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 70) {
										progressbarP = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 90) {
										progressbarP = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 110) {
										progressbarP = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 130) {
										progressbarP = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 150) {
										progressbarP = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 170) {
										progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 190) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 210) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■---]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 230) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 250) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[11].value) >= 2.0){
									if (Number(stats.lifeTimeStats[7].value) >= 250) {
										objetivoP = "500"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 250) {
										progressbarP = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 275) {
										progressbarP = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 300) {
										progressbarP = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 325) {
										progressbarP = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 350) {
										progressbarP = "[■■■■■■■■■■■------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 375) {
										progressbarP = "[■■■■■■■■■■■■■■---------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 400) {
										progressbarP = "[■■■■■■■■■■■■■■■■■------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 425) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■---]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 450) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 475) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 500) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
								if (Number(stats.lifeTimeStats[11].value) >= 3.0){
									if (Number(stats.lifeTimeStats[7].value) >= 500) {
										objetivoP = "750"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 500) {
										progressbarP = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 525) {
										progressbarP = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 550) {
										progressbarP = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 575) {
										progressbarP = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 600) {
										progressbarP = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 625) {
										progressbarP = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 650) {
										progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 675) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 700) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 725) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 750) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[11].value) >= 4.0){
									if (Number(stats.lifeTimeStats[7].value) >= 750) {
										objetivoP = "1000"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 750) {
										progressbarP = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 775) {
										progressbarP = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 800) {
										progressbarP = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 825) {
										progressbarP = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 850) {
										progressbarP = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 875) {
										progressbarP = "[■■■■■■■■■■■■■■-----------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 900) {
										progressbarP = "[■■■■■■■■■■■■■■■■■--------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 925) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■-----]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 950) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 975) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1000) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								
								
								
								if (Number(stats.lifeTimeStats[11].value) >= 5.0){
									if (Number(stats.lifeTimeStats[7].value) >= 1000) {
										objetivoP = "1500"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1000) {
										progressbarP = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1050) {
										progressbarP = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1100) {
										progressbarP = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1150) {
										progressbarP = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1200) {
										progressbarP = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1250) {
										progressbarP = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1300) {
										progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1350) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1400) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1450) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1500) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[11].value) >= 6.0){
									if (Number(stats.lifeTimeStats[7].value) >= 1500) {
										objetivoP = "2000"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1500) {
										progressbarP = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1550) {
										progressbarP = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1600) {
										progressbarP = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1650) {
										progressbarP = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1700) {
										progressbarP = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1750) {
										progressbarP = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1800) {
										progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1850) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1900) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1950) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 2000) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
	
	
							KD = Number(stats.lifeTimeStats[11].value);
	
							if (KD > 0 && Number(stats.lifeTimeStats[7].value) > 50) {
								let role = message.guild.roles.find("name", "Novato");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}
							if (KD > 1 && Number(stats.lifeTimeStats[7].value) > 250) {
								let role = message.guild.roles.find("name", "Experimentado");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}
							else{
								let role = message.guild.roles.find("name", "Experimentado");
								let member = message.member;
								member.removeRole(role).catch(console.error);
							}
							if (KD > 2 && Number(stats.lifeTimeStats[7].value) > 500) {
								let role = message.guild.roles.find("name", "Semiprofesional");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}
							else{
								let role = message.guild.roles.find("name", "Semiprofesional");
								let member = message.member;
								member.removeRole(role).catch(console.error);
							}
							if (KD > 3 && Number(stats.lifeTimeStats[7].value) > 750) {
								let role = message.guild.roles.find("name", "Profesional");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}
							else{
								let role = message.guild.roles.find("name", "Profesional");
								let member = message.member;
								member.removeRole(role).catch(console.error);
							}
							if (KD > 4 && Number(stats.lifeTimeStats[7].value) > 1000) {
								let role = message.guild.roles.find("name", "Experto");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}else{
								let role = message.guild.roles.find("name", "Experto");
								let member = message.member;
								member.removeRole(role).catch(console.error);
							}
							if (KD > 5 && Number(stats.lifeTimeStats[7].value) > 1500) {
								let role = message.guild.roles.find("name", "Hacker");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}else{
								let role = message.guild.roles.find("name", "Hacker");
								let member = message.member;
								member.removeRole(role).catch(console.error);
							}
							if (KD > 6 && Number(stats.lifeTimeStats[7].value) > 2000) {
								let role = message.guild.roles.find("name", "Mito");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}else{
								let role = message.guild.roles.find("name", "Mito");
								let member = message.member;
								member.removeRole(role).catch(console.error);
							}
	
							message.channel.send({
								embed: {
									color: 3447003,
									author: {
										name: client.user.username,
										icon_url: client.user.avatarURL
									},
									title: "Fortnite ESP Stats",
									description: "Progreso para " + store.get(message.author.id + "_rankme"),
									fields: [{
											name: "K/D " + KD + " -  K/D " + objetivo,
											value: progressbarKD
										},
										{
											name: "Partidas jugadas: " + Number(stats.lifeTimeStats[7].value) + " - " + objetivoP,
											value: progressbarP
										},
									],
									timestamp: new Date(),
									footer: {
										icon_url: client.user.avatarURL,
										text: "© Fortnite ESP"
									}
								}
							});
						} else{message.channel.send({
							embed: {
								color: 0xff0000,
								title: "ERROR",
								description: "❌ Usuario no encontrado",
							}
						});
					}
					} else {
						let error;
						if (response.statusCode == 404){
							error = "El usuario no existe";
						}
						if (response.statusCode == 503){
							error = "Espera antes de volver a buscar stats";
						}
						if (response.statusCode != 404 || response.statusCode != 503){
							error = response.statusCode;
						}
						message.channel.send({
						embed: {
							color: 0xff0000,
							title: "ERROR",
							description: error,
						}
					});
				}
					})
			}
		}

		if (msg == config.prefix + "RANKME_XBOX") { //ROLE
			if(message.channel.id == "361921331924697088" || message.channel.id == "471229239228891136" || message.channel.id == "471227591316078594" || message.channel.id == "444196865685192715"){
					if(store.get(message.author.id + "_rankme") != null && store.get(message.author.id + "_rankme") != undefined){
						atributes = store.get(message.author.id + "_rankme");
					} else{
						message.channel.send(":x: Tu cuenta no ha sido linkeada. Usa ``!link nombre en fortnite`` para linkear tu cuenta");
						return;
					}
				var playerName = encodeURIComponent(atributes);
					var options = {
						method: "GET",
						url: `https://api.fortnitetracker.com/v1/profile/xbl/${playerName}`,
						strictSSL: false,
						headers: {
							'UserAgent': 'nodejs request',
							'TRN-Api-Key': ''
						}
		
					}
	
					request(options, (error, response, body) => {
						if (!error && response.statusCode == 200) {
							console.log(response.statusCode);
							var stats = JSON.parse(body);
							if(stats.lifeTimeStats != undefined){
								objetivo = "0";
								objetivoP = "0";
								if (Number(stats.lifeTimeStats[7].value) >= 0){
									if (Number(stats.lifeTimeStats[11].value) >= 0.0) {
										objetivo = "1"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.0) {
										progressbarKD = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.1) {
										progressbarKD = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.2) {
										progressbarKD = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.3) {
										progressbarKD = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.4) {
										progressbarKD = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.5) {
										progressbarKD = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.6) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.7) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.8) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 0.9) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.0) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[7].value) >= 50){
									if (Number(stats.lifeTimeStats[11].value) >= 1.0) {
										objetivo = "2"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.0) {
										progressbarKD = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.1) {
										progressbarKD = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.2) {
										progressbarKD = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.3) {
										progressbarKD = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.4) {
										progressbarKD = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.5) {
										progressbarKD = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.6) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.7) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.8) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 1.9) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.0) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[7].value) >= 250){
									if (Number(stats.lifeTimeStats[11].value) >= 2.0) {
										objetivo = "3"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.0) {
										progressbarKD = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.1) {
										progressbarKD = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.2) {
										progressbarKD = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.3) {
										progressbarKD = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.4) {
										progressbarKD = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.5) {
										progressbarKD = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.6) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.7) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.8) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 2.9) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.0) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
								
								if (Number(stats.lifeTimeStats[7].value) >= 500){
									if (Number(stats.lifeTimeStats[11].value) >= 3.0) {objetivo = "4"}
									if (Number(stats.lifeTimeStats[11].value) >= 3.0) {
										progressbarKD = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.1) {
										progressbarKD = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.2) {
										progressbarKD = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.3) {
										progressbarKD = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.4) {
										progressbarKD = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.5) {
										progressbarKD = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.6) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.7) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.8) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 3.9) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.0) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[7].value) >= 750){
									if (Number(stats.lifeTimeStats[11].value) >= 4.0) {
										objetivo = "5"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.0) {
										progressbarKD = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.1) {
										progressbarKD = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.2) {
										progressbarKD = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.3) {
										progressbarKD = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.4) {
										progressbarKD = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.5) {
										progressbarKD = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.6) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.7) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.8) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 4.9) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.0) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
								
								if (Number(stats.lifeTimeStats[7].value) >= 1000){
									if (Number(stats.lifeTimeStats[11].value) >= 5.0) {
										objetivo = "6"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.0) {
										progressbarKD = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.1) {
										progressbarKD = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.2) {
										progressbarKD = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.3) {
										progressbarKD = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.4) {
										progressbarKD = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.5) {
										progressbarKD = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.6) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.7) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.8) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 5.9) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.0) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[7].value) >= 1500){
									if (Number(stats.lifeTimeStats[11].value) >= 6.0) {
										objetivo = "7"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.0) {
										progressbarKD = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.1) {
										progressbarKD = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.2) {
										progressbarKD = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.3) {
										progressbarKD = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.4) {
										progressbarKD = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.5) {
										progressbarKD = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.6) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.7) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.8) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 6.9) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[11].value) >= 7.0) {
										progressbarKD = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
	
								if (Number(stats.lifeTimeStats[11].value) >= 0.0){
									if (Number(stats.lifeTimeStats[7].value) >= 0) {
										objetivoP = "50"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 0) {
										progressbarP = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 5) {
										progressbarP = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 10) {
										progressbarP = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 15) {
										progressbarP = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 20) {
										progressbarP = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 25) {
										progressbarP = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 30) {
										progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 35) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 40) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 45) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 50) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[11].value) >= 1.0){
									if (Number(stats.lifeTimeStats[7].value) >= 50) {
										objetivoP = "250"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 50) {
										progressbarP = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 70) {
										progressbarP = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 90) {
										progressbarP = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 110) {
										progressbarP = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 130) {
										progressbarP = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 150) {
										progressbarP = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 170) {
										progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 190) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 210) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■---]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 230) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 250) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[11].value) >= 2.0){
									if (Number(stats.lifeTimeStats[7].value) >= 250) {
										objetivoP = "500"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 250) {
										progressbarP = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 275) {
										progressbarP = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 300) {
										progressbarP = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 325) {
										progressbarP = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 350) {
										progressbarP = "[■■■■■■■■■■■------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 375) {
										progressbarP = "[■■■■■■■■■■■■■■---------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 400) {
										progressbarP = "[■■■■■■■■■■■■■■■■■------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 425) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■---]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 450) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 475) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 500) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
								if (Number(stats.lifeTimeStats[11].value) >= 3.0){
									if (Number(stats.lifeTimeStats[7].value) >= 500) {
										objetivoP = "750"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 500) {
										progressbarP = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 525) {
										progressbarP = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 550) {
										progressbarP = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 575) {
										progressbarP = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 600) {
										progressbarP = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 625) {
										progressbarP = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 650) {
										progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 675) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 700) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 725) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 750) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[11].value) >= 4.0){
									if (Number(stats.lifeTimeStats[7].value) >= 750) {
										objetivoP = "1000"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 750) {
										progressbarP = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 775) {
										progressbarP = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 800) {
										progressbarP = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 825) {
										progressbarP = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 850) {
										progressbarP = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 875) {
										progressbarP = "[■■■■■■■■■■■■■■-----------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 900) {
										progressbarP = "[■■■■■■■■■■■■■■■■■--------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 925) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■-----]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 950) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 975) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1000) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								
								
								
								if (Number(stats.lifeTimeStats[11].value) >= 5.0){
									if (Number(stats.lifeTimeStats[7].value) >= 1000) {
										objetivoP = "1500"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1000) {
										progressbarP = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1050) {
										progressbarP = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1100) {
										progressbarP = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1150) {
										progressbarP = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1200) {
										progressbarP = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1250) {
										progressbarP = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1300) {
										progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1350) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1400) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1450) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1500) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
								if (Number(stats.lifeTimeStats[11].value) >= 6.0){
									if (Number(stats.lifeTimeStats[7].value) >= 1500) {
										objetivoP = "2000"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1500) {
										progressbarP = "[------------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1550) {
										progressbarP = "[■■■---------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1600) {
										progressbarP = "[■■■■■■------------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1650) {
										progressbarP = "[■■■■■■■■----------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1700) {
										progressbarP = "[■■■■■■■■■■■-------------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1750) {
										progressbarP = "[■■■■■■■■■■■■■■----------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1800) {
										progressbarP = "[■■■■■■■■■■■■■■■■■-------]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1850) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■----]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1900) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■--]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 1950) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■-]"
									}
									if (Number(stats.lifeTimeStats[7].value) >= 2000) {
										progressbarP = "[■■■■■■■■■■■■■■■■■■■■■■■■■■■] :white_check_mark: "
									}
								}
	
	
	
							KD = Number(stats.lifeTimeStats[11].value);
	
							if (KD > 0 && Number(stats.lifeTimeStats[7].value) > 50) {
								let role = message.guild.roles.find("name", "Novato");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}
							if (KD > 1 && Number(stats.lifeTimeStats[7].value) > 250) {
								let role = message.guild.roles.find("name", "Experimentado");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}
							else{
								let role = message.guild.roles.find("name", "Experimentado");
								let member = message.member;
								member.removeRole(role).catch(console.error);
							}
							if (KD > 2 && Number(stats.lifeTimeStats[7].value) > 500) {
								let role = message.guild.roles.find("name", "Semiprofesional");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}
							else{
								let role = message.guild.roles.find("name", "Semiprofesional");
								let member = message.member;
								member.removeRole(role).catch(console.error);
							}
							if (KD > 3 && Number(stats.lifeTimeStats[7].value) > 750) {
								let role = message.guild.roles.find("name", "Profesional");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}
							else{
								let role = message.guild.roles.find("name", "Profesional");
								let member = message.member;
								member.removeRole(role).catch(console.error);
							}
							if (KD > 4 && Number(stats.lifeTimeStats[7].value) > 1000) {
								let role = message.guild.roles.find("name", "Experto");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}else{
								let role = message.guild.roles.find("name", "Experto");
								let member = message.member;
								member.removeRole(role).catch(console.error);
							}
							if (KD > 5 && Number(stats.lifeTimeStats[7].value) > 1500) {
								let role = message.guild.roles.find("name", "Hacker");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}else{
								let role = message.guild.roles.find("name", "Hacker");
								let member = message.member;
								member.removeRole(role).catch(console.error);
							}
							if (KD > 6 && Number(stats.lifeTimeStats[7].value) > 2000) {
								let role = message.guild.roles.find("name", "Mito");
								let member = message.member;
								member.addRole(role).catch(console.error);
							}else{
								let role = message.guild.roles.find("name", "Mito");
								let member = message.member;
								member.removeRole(role).catch(console.error);
							}
	
							message.channel.send({
								embed: {
									color: 3447003,
									author: {
										name: client.user.username,
										icon_url: client.user.avatarURL
									},
									title: "Fortnite ESP Stats",
									description: "Progreso para " + store.get(message.author.id + "_rankme"),
									fields: [{
											name: "K/D " + KD + " -  K/D " + objetivo,
											value: progressbarKD
										},
										{
											name: "Partidas jugadas: " + Number(stats.lifeTimeStats[7].value) + " - " + objetivoP,
											value: progressbarP
										},
									],
									timestamp: new Date(),
									footer: {
										icon_url: client.user.avatarURL,
										text: "© Fortnite ESP"
									}
								}
							});
						} else{message.channel.send({
							embed: {
								color: 0xff0000,
								title: "ERROR",
								description: "❌ Usuario no encontrado",
							}
						});
					}
					} else {
						let error;
						if (response.statusCode == 404){
							error = "El usuario no existe";
						}
						if (response.statusCode == 503){
							error = "Espera antes de volver a buscar stats";
						}
						if (response.statusCode != 404 || response.statusCode != 503){
							error = response.statusCode;
						}
						message.channel.send({
						embed: {
							color: 0xff0000,
							title: "ERROR",
							description: error,
						}
					});
				}
					})
			}
		}
		
	
		if(msg.startsWith(config.prefix + "PARTIDA") && message.member.roles.find("name", "Staff")){
			let mention = message.mentions.members.first();
			message.delete();
			if(mention != undefined || mention != null){
				message.channel.send("<@"+mention.id+"> Este canal no es para buscar partida. Usa <#363591971006185477>, <#350231169851326465>, <#384098536020770839>, <#456522650496270336> dependiendo de tu plataforma");
			}
			
		}
		if (message.content.startsWith(config.prefix + "name")) { //Cambia apodo
		if(message.channel.id == "361921331924697088" || message.channel.id == "471229239228891136" || message.channel.id == "471227591316078594" || message.channel.id == "553250156930400256"){
			let apodofinal = message.content.split(config.prefix + "name ")[1];
			if (apodofinal != null && message.member != null){
				console.log(apodofinal)
				message.member.setNickname(apodofinal);
				message.channel.send("Apodo cambiado a " + apodofinal);
				} else{message.channel.send("❌ Ha occurido un error. ")}
		}
		}
		if (msg.startsWith(config.prefix + "UNRANK")) {
			if(message.channel.id == "361921331924697088" || message.channel.id == "471229239228891136" || message.channel.id == "471227591316078594" || message.channel.id == "553250156930400256"){ //Cambia apodo
				//variables
				let rol1 = message.guild.roles.find("name", "Novato");
				let rol2 = message.guild.roles.find("name", "Experimentado");
				let rol3 = message.guild.roles.find("name", "Semi-profesional");
				let rol4 = message.guild.roles.find("name", "Profesional");
				let rol5 = message.guild.roles.find("name", "Experto");
				let rol6 = message.guild.roles.find("name", "Hacker");
				if(message.member.roles.find("name", "Staff") && message.mentions.members.first() != undefined && message.mentions.members.first() != null){
					let user = message.mentions.members.first();
					user.removeRole(rol1).catch(console.error);
					user.removeRole(rol2).catch(console.error);
					user.removeRole(rol3).catch(console.error);
					user.removeRole(rol4).catch(console.error);
					user.removeRole(rol5).catch(console.error);
					user.removeRole(rol6).catch(console.error);
				}else{
					let user = message.member;
					user.removeRole(rol1).catch(console.error);
					user.removeRole(rol2).catch(console.error);
					user.removeRole(rol3).catch(console.error);
					user.removeRole(rol4).catch(console.error);
					user.removeRole(rol5).catch(console.error);
					user.removeRole(rol6).catch(console.error);
				}
				message.channel.send("Has sido desrankeado correctamente!<a:success:467097051059060746>")
			}
		}
	} 

	if(!message.author.id == "329634951886536716") return;
	console.log("SE HA EJECUTADO ROLEHAS");
	if(msg.startsWith(config.prefix + "MNT")) { //Modo mantenimiento
		console.log("SE HA EJECUTADO MNT");
		let atr = message.content.split(" ").slice(1, 2)[0];
		if(atr == "on"){
			config.status = atr;
			fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
			client.user.setActivity('Mantenimiento!')
			client.user.setStatus("dnd");
			client.channels.get("424542755159801856").send(`${new Date()} :no_entry_sign: Bot en mantenimiento :no_entry_sign:`);
		}
		else if(atr == "off"){
			config.status = atr;
			fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
			client.user.setActivity('Fortnite ESP')
			client.user.setStatus("Online");
			client.channels.get("424542755159801856").send('<a:success:467097051059060746> Bot fuera de mantenimiento <a:success:467097051059060746>');	
		}
	}
	if (false) { //Cambiar el prefijo
		// Pide el prefix i la palabra prefix 
		let newPrefix = message.content.split(" ").slice(1, 2)[0];
		// cambia el config
		config.prefix = newPrefix;
		console.log("Prefix cambiado a " + config.prefix);

		// guarda el archivo
		fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
		message.channel.send("Prefix cambiado a " + config.prefix);
	}
});
client.login(process.env.TOKEN); //Login del token
