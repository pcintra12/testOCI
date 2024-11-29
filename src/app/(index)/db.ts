'use server'

import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://testOCIuser:testOCIpsw@all.x6byqzb.mongodb.net/?retryWrites=true&w=majority&appName=all';

export const get = async () => {
  const client = new MongoClient(uri);
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    const testDoc = await client.db('testOCI').collection('docs').findOne({ key: '1' });
    console.log(testDoc);
    return testDoc?.valor || null;
  } catch (e) {
    console.error(e);
    return null;
  } finally {
    console.error('finish get');
    await client.close();
  }
}

export const set = async (valor: string) => {
  const client = new MongoClient(uri);
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    const result = await client.db('testOCI').collection('docs').findOneAndUpdate({ key: '1' }, { $set: { valor } }, { upsert: true });
    console.log(result);
    return;
  } catch (e) {
    console.error(e);
    return;
  } finally {
    console.error('finish seq');
    await client.close();
  }
}