#!/usr/bin/env node
import { getArgs } from "./utils/args.util.js";
import { getWeather } from "./services/api.service.js";
import { getItem, saveItem } from "./services/storage.service.js";
import { ONBOARDING_MSG, PARAM_ERR_MSG, TOKEN_DICTIONARY } from "./constants/index.js";
import { printError, printSuccess, printHelp, printWeather } from "./services/log.service.js";

const getWeatherForecast = async () => {
  const city = process.env.CITY ?? (await getItem(TOKEN_DICTIONARY.city));
  const token = process.env.TOKEN ?? (await getItem(TOKEN_DICTIONARY.token));
  const config = { city, token };

  const hasTokenOnly = token && !city;
  const hasCityOnly = city && !token;
  let hasError = false;

  if (!token || !city) {
    if (hasCityOnly) {
      printError(PARAM_ERR_MSG.token);
    }

    if (hasTokenOnly) {
      printError(PARAM_ERR_MSG.city);
    }

    if (hasTokenOnly || hasCityOnly) {
      hasError = true;
    }

    printHelp({ welcomeMsg: ONBOARDING_MSG, hasError });

    return;
  }

  hasError = false;

  try {
    const data = await getWeather(config);

    printWeather(data);
  } catch (err) {
    printError(err.message);
  }
};

const saveParam = async (key, value) => {
  if (!value.length) {
    printError(PARAM_ERR_MSG[key]);
    return;
  }

  try {
    await saveItem(key, value);
    printSuccess(`The ${key} has been saved successfully`);
  } catch (err) {
    printError(err.message);
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  }

  if (args.c) {
    return saveParam(TOKEN_DICTIONARY.city, args.c);
  }

  if (args.t) {
    return saveParam(TOKEN_DICTIONARY.token, args.t);
  }

  getWeatherForecast();
};

initCLI();
