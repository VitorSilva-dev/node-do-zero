import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//     console.log("Tabela apagada");
// })

sql`
    CREATE TABLE videos (
        id          TEXT,
        title       TEXT,
        description TEXT,
        duration    INTEGER
    );
`.then(() => {
  console.log("Tabela criada");
});
