import {Account, Client, Databases} from 'appwrite'
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("646b9fc751da58eace96");


export const account = new Account(client);
export const database = new Databases(client,"64726e64bf00cc8601ea");



