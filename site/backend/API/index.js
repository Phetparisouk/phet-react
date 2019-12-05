	import express from 'express';
	import BodyParser from 'Body-Parser';
	import cors from 'cors';
	import router from './src/routes/route';
	import database from './src/models/database';

	//Création de l'app
	const app = express();

	//Confiuration du serveur avec Cors et BodyParser
	app.use(BodyParser.urlencoded({extended: false}));
	app.use(BodyParser.json());
	app.use(cors({origin: true}));

	//utilisation des routes
	app.use('/', router);

	//lancement du serveur
	const port = 3000;

	database()
	.then(async () => {
		console.log(`Database server is connected`);
		app.listen(port, () => {
			console.log(`Serveur lancé sur le sport ${port}...`);
		});
	});
	
	export default app;