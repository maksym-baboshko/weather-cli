export const getArgs = (args) => {
  const restArgs = args.slice(2);

  return restArgs.reduce((acc, arg, i) => {
    const nextArg = restArgs[i + 1];

    if (arg.charAt(0) === "-") {
      if (nextArg && nextArg.charAt(0) !== "-") {
        acc[arg.slice(1)] = nextArg;
      } else {
        acc[arg.slice(1)] = true;
      }
    }

    return acc;
  }, {});
};
