
// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db(process.env.AUTH_DB_NAME);

// export const auth = betterAuth({
//     emailAndPassword: {
//         enabled: true,
//     },

//     database: mongodbAdapter(db, { client }),

//     trustedOrigins: [
//         "http://localhost:3000",       // local dev
//         process.env.BETTER_AUTH_URL // production URL e.g. https://hireloop.vercel.app
//     ],

//     user: {
//         additionalFields: {
//             role: {
//                 type: "string",       // ✅ add type, better-auth requires it
//                 required: false,
//                 defaultValue: "seeker",
//                 input: true,
//             },
//         },
//     },
// });

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// ✅ singleton — reuse the same client across Next.js hot reloads
const mongoClient = global._mongoClient ?? new MongoClient(process.env.MONGODB_URI);

if (process.env.NODE_ENV === "development") {
    global._mongoClient = mongoClient;
}

const db = mongoClient.db(process.env.AUTH_DB_NAME);

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },

    database: mongodbAdapter(db, { client: mongoClient }),

    trustedOrigins: [
        "http://localhost:3000",
        process.env.BETTER_AUTH_URL,
    ],

    user: {
        additionalFields: {
            role: {
                type: "string",
                required: false,
                defaultValue: "seeker",
                input: true,
            },
        },
    },
});