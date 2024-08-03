import chalk from "chalk";

export const printError = (error) => {
  console.log(`${chalk.bgRed(" ERROR ")} ${chalk.red(error)}\n`);
};

export const printSuccess = (message) => {
  console.log(`${chalk.bgGreen(" SUCCESS ")} ${chalk.green(message)}\n`);
};

export const printHelp = (options = {}) => {
  const { welcomeMsg, hasError } = options;

  const noParams = " No parameters     Display the weather forecast";
  const cityParam = " -c <CITY_NAME>    Save the city";
  const tokenParam = " -t <API_KEY>      Save the token";
  const helpParam = " -h                Display the help message";

  const stylizeLine = (param) => {
    const [p, ...desc] = param.split("  ");

    const stylizedParam = chalk.bold(p);
    const stylizedDesc = desc.map((d) => chalk.italic(d));

    return [stylizedParam, ...stylizedDesc].join("  ");
  };

  if (welcomeMsg) {
    console.log(
      (hasError
        ? ""
        : `${chalk.bgGreen(" HELLO ")} ${chalk.green("Weather CLI")} \n\n`) +
        chalk.bold.yellow(` ${welcomeMsg}\n\n`) +
        `${stylizeLine(noParams)}\n\n` +
        `${stylizeLine(cityParam)}\n` +
        `${stylizeLine(tokenParam)}\n` +
        `${stylizeLine(helpParam)}\n`
    );
  } else {
    console.log(
      `${chalk.bgCyan(" HELP ")} ${chalk.cyan("Weather CLI")} \n\n` +
        `${welcomeMsg ? chalk.bold.yellow(` ${welcomeMsg}\n\n`) : ""}` +
        `${stylizeLine(noParams)}\n\n` +
        `${stylizeLine(cityParam)}\n` +
        `${stylizeLine(tokenParam)}\n` +
        `${stylizeLine(helpParam)}\n`
    );
  }
};
