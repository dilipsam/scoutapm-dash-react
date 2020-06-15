import Dexie from 'dexie';

const db = new Dexie('SNT');


db.version(1).stores({
    response_time: `name, age`
});

export default db;
