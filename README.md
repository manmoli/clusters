
# Clusters vs Promises Load Testing

This project demonstrates the difference in performance between a clustered Node.js server and a single instance Node.js server when handling multiple concurrent file read and write operations.

## Project Structure

```
.
├── artillery.yml
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── clusters.ts
    ├── files
    │   ├── file1.txt
    │   ├── file2.txt
    │   ├── file3.txt
    │   ├── file4.txt
    │   └── file5
    ├── server.ts
    └── single_server.ts
```

## Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Artillery (for load testing)

## Setup

1. **Install Dependencies**: Make sure you have all necessary Node.js modules installed.
   ```bash
   npm install
   ```
2. **Create Test Files**: Ensure you have the necessary files (`file1.txt`, `file2.txt`, `file3.txt`, `file4.txt`) in the `src/files` directory.

## Running the Servers

### Clustered Server

To start the clustered server, run:
```bash
npm run start:clusters
```
This will fork worker processes equal to the number of CPU cores available.

### Single Server

To start the single server instance, run:
```bash
npm run start:single_server
```

## Load Testing

Load testing will be conducted using Artillery to simulate multiple concurrent requests.

### Clustered Server

1. **Start the clustered server** (if not already running):
   ```bash
   npm run start:clusters
   ```

2. **Run the load test**:
   ```bash
   npx artillery run artillery.yml
   ```

### Single Server

1. **Start the single server** (if not already running):
   ```bash
   npm run start:single_server
   ```

2. **Run the load test**:
   ```bash
   npx artillery run artillery.yml
   ```

## Analyzing Results

After running the tests, Artillery will generate a report summarizing the performance metrics, including response times, request rates, and error rates. Compare the results from both tests to understand the performance differences between the clustered and single server setups.

## Notes

- Ensure all test files (`file1.txt`, `file2.txt`, `file3.txt`, `file4.txt`) are present in the `src/files` directory.
- The clustered server setup will automatically restart any worker that dies to maintain performance.
- Adjust the load test configuration (`artillery.yml`) to match your testing requirements.

## Conclusion

This project demonstrates how to leverage Node.js clusters to improve server performance under load by utilizing multiple CPU cores. By comparing the results of the load tests, you can gain insights into the benefits of clustering in handling high concurrency and large workloads.
