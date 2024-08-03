import { join } from "path";
import { homedir } from "os";
import { promises, existsSync, mkdirSync } from "fs";

const dirPath = join(homedir(), "weather-cli");
const filePath = join(dirPath, "config.json");

const getStorage = async () => {
  if (existsSync(filePath)) {
    const file = await promises.readFile(filePath);
    return JSON.parse(file);
  }

  return {};
};

export const saveItem = async (key, value) => {
  const data = await getStorage();

  data[key] = value;

  if (!existsSync(dirPath)) {
    mkdirSync(dirPath);
  }

  await promises.writeFile(filePath, JSON.stringify(data));
};

export const getItem = async (key) => (await getStorage())[key];
