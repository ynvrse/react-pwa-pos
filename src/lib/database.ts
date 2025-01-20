import initSqlJs, { Database } from 'sql.js';

// Inisialisasi database SQLite
export async function initializeDatabase(): Promise<Database> {
    const SQL = await initSqlJs({
        locateFile: (file) => `/sql-wasm.wasm`, // Path ke file WASM
    });

    const db = new SQL.Database();

    // Membuat tabel kategori
    db.run(`
        CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL
        );
    `);

    // Membuat tabel produk
    db.run(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            category_id INTEGER,
            price REAL NOT NULL,
            image TEXT,
            FOREIGN KEY (category_id) REFERENCES categories(id)
        );
    `);

    // Menambahkan data kategori
    db.run(`
        INSERT INTO categories (name) VALUES
        ('Minuman'), ('Makanan'), ('Snack');
    `);

    // Menambahkan data produk
    db.run(`
        INSERT INTO products (name, category_id, price, image) VALUES
        ('Teh Gelas', 1, 1500, 'https://via.placeholder.com/150'),
        ('Roti', 2, 5000, 'https://via.placeholder.com/150'),
        ('TikTak', 3, 1500, 'https://via.placeholder.com/150');
    `);

    return db;
}

// Menyimpan database ke LocalStorage
export function saveDatabase(db: Database) {
    const data = db.export();
    localStorage.setItem('sqlite.db', JSON.stringify(data));
}

// Memuat database dari LocalStorage atau membuat baru
export async function loadDatabase(): Promise<Database> {
    const SQL = await initSqlJs({
        locateFile: (file) => `/sql-wasm.wasm`, // Path ke file WASM
    });

    const savedData = localStorage.getItem('sqlite.db');
    if (savedData) {
        const binaryData = new Uint8Array(JSON.parse(savedData));
        return new SQL.Database(binaryData);
    } else {
        return initializeDatabase();
    }
}
