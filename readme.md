Siap 👍 Berikut **teks `README.md` siap copy–paste** tanpa penjelasan tambahan:

````md
# Todo API

Todo API adalah aplikasi backend sederhana menggunakan Node.js, Express, Sequelize, dan MySQL.

## Teknologi
- Node.js
- Express.js
- Sequelize
- MySQL
- Nodemon

## Cara Menjalankan Project

### 1. Masuk ke Folder Project
```bash
cd todo-api
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi Database

Pastikan MySQL sudah berjalan dan database sudah dibuat.

Sesuaikan konfigurasi database pada file konfigurasi yang digunakan oleh Sequelize (contoh: `config/config.json`).

Contoh konfigurasi:

```js
{
  "username": "root",
  "password": "",
  "database": "todo_db",
  "host": "127.0.0.1",
  "dialect": "mysql"
}
```

### 4. Menjalankan Aplikasi

```bash
npm start
```

Aplikasi akan dijalankan menggunakan nodemon.

### 5. Akses Aplikasi

Secara default aplikasi berjalan di:

```
http://localhost:3000
```

## Troubleshooting

* Pastikan MySQL sudah berjalan
* Pastikan database sudah dibuat
* Pastikan konfigurasi database benar
* Pastikan port 3000 tidak digunakan aplikasi lain

## License

Private project untuk keperluan pembelajaran.

```
```
