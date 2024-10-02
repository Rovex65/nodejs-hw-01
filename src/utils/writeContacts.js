import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts = []) => {
  const data = JSON.stringify(updatedContacts, undefined, 2);
  try {
    await fs.writeFile(PATH_DB, data);
  } catch (error) {
    console.error(error);
  }
};
