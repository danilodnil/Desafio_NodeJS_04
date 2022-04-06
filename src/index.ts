/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
	const readline = requiere('readline');
	const rl = readline.createInterface({
	input:process.stdin,
	output: process.stout
	});
	
	rl.question(Who are you\n', (name: any) => {
	console.log ('Hey there ' + Danilo);
	rl.close();
	});
	
});


