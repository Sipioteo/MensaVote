// @ts-nocheck
import { Sequelize, DataTypes } from 'sequelize';
import fs from 'fs';

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './database.sqlite'
});

const DB = await _DB();

async function initModels() {
	sequelize.define('Poll', {
		name: {
			type: DataTypes.STRING
		}
	});
	await sequelize.sync();
}

export async function _DB() {
	if (sequelize.models.Poll) {
		return sequelize;
	}
	await sequelize.authenticate();
	await initModels();
	return sequelize;
}

export async function getPolls() {
	return JSON.parse(JSON.stringify(await DB.models.Poll.findAll()));
}

export async function addPoll(name) {
	return await DB.models.Poll.create({ name });
}
