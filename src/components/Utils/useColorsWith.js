import * as Colors from "./colors.json";

const useColorsWith = (th) => {
  var theme = String(th);

  switch (theme) {
    case "T":
      theme = Colors.brightBlack;
      break;

    case "J":
      theme = Colors.yellow;
      break;

    case "P":
      theme = Colors.brightRed;
      break;

    case "N":
      theme = Colors.green;
      break;

    case "S":
      theme = Colors.brightYellow;
      break;

    case "C":
      theme = Colors.blue;
      break;

    case "H":
      theme = Colors.red;
      break;

    case "R":
      theme = Colors.red;
      break;

    default:
      theme = Colors.brightBlack;
      break;
  }

  return theme;
};

export default useColorsWith;
