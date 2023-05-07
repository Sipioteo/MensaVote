import { json } from '@sveltejs/kit';
import { addPoll, getPolls } from '../../../server/database';

export async function POST() {
	await addPoll('Poll ' + Math.floor(Math.random() * 1000));
	return json(await getPolls());
}

export async function GET() {
	return json(await getPolls());
}
