/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS users(
    id VARCHAR PRIMARY KEY,
    firstName VARCHAR (255),
    lastName VARCHAR (255),
    userName VARCHAR (255) NOT NULL UNIQUE,
    email VARCHAR (255) NOT NULL UNIQUE,
    otp VARCHAR,
    password VARCHAR(255),
    createdAt TIMESTAMPTZ DEFAULT NOW(),
    updatedAt TIMESTAMPTZ DEFAULT NOW()
)