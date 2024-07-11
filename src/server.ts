import express, { Request, Response } from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (request: Request, response: Response) => {
    try {
        console.log(process.pid);
        const file1Promise = fs.readFile(__dirname + '/files/file1.txt', 'utf-8');
        const file2Promise = fs.readFile(__dirname + '/files/file2.txt', 'utf-8');
        const file3Promise = fs.readFile(__dirname + '/files/file3.txt', 'utf-8');
        const file4Promise = fs.readFile(__dirname + '/files/file4.txt', 'utf-8');

        const [file1, file2, file3, file4] = await Promise.all([file1Promise, file2Promise, file3Promise, file4Promise]);

        fs.writeFile(__dirname + '/files/file5.txt', file1 + file2 + file3 + file4);

        response.status(200).send('Request processed');
    } catch (error) {
        console.error('Error processing the request: ', error);
        response.status(500).send('Internal server error');
    }
})

export function initiateServer(port = 3000) {
    return app.listen(port, () => {
        console.log(`Server running in port 3000, worker ${process.pid}`)
    })
}