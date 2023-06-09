import {Account, Client, Databases} from 'appwrite';
import {cors} from "cors";
const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('646b9fc751da58eace96');


export const account = new Account(client);
export const databases = new Databases(client,"64726e64bf00cc8601ea");



