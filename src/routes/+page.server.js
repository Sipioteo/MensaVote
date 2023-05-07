import { dbIsInitialized, getPolls } from '../server/database';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		isDbInitialized: await dbIsInitialized()
	};
}
