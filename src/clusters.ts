import cluster from "cluster";
import os from "os";
import { initiateServer } from "./server";

if(cluster.isPrimary) {
    const coresNumber = os.cpus().length;

    for (let i = 0; i < coresNumber; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Restarting...`);
        cluster.fork();
    })
} else {
    initiateServer()
}

export {}
