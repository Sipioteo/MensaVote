// @ts-nocheck
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './database.sqlite'
});

async function initModels() {
	const Poll = sequelize.define('Poll', {
		name: {
			type: DataTypes.STRING
		}
	});
	await sequelize.sync({ force: true });
}

export async function dbIsInitialized() {
	try {
		if (sequelize.models.Poll) {
			return true;
		}
		await sequelize.authenticate();
		await initModels();
		return true;
	} catch (error) {
		return false;
	}
}

export async function getPolls() {
	return JSON.parse(JSON.stringify(await sequelize.models.Poll.findAll()));
}

export async function addPoll(name) {
	return await sequelize.models.Poll.create({ name });
}
