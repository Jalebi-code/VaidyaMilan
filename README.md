# VaidyaMilan
 "VaidyaMilan is a comprehensive doctor appointment backend system built using Node.js and MongoDB. It generates a dynamic list of doctors with specializations and handles data storage using MongoDB, providing essential functionalities for managing appointments and doctor-related data."

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/Jalebi-code/VaidyaMilan.git
```
### 2. Install Dependencies
```bash
cd VaidyaMilan
npm install
```
### 3. Setting up the .env File
```bash
MONGO_URL=mongodb://localhost:27017/vaidyaMilan
```
MONGO_URL: This should point to your MongoDB connection string. If you're using MongoDB locally, you can use the example above.

### 4. Generating and Inserting Doctors into the Database
The application includes functionality to generate a list of doctors with random names, specializations, and other details, and insert this list into the MongoDB database.

To generate and insert doctors:
```bash
node .\dummyDrGenerator\generateRandomDoctor.js
```
This will:
Generate 10 random doctor profiles with fields like name, specialization, experience, location, phone, and email.
Insert these profiles into the doctors collection in your MongoDB database.

### 5. Running the Application
You can start the Node.js application
```bash
npm start
```

