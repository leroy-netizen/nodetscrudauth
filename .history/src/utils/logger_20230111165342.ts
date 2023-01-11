import logger from "pino";
import dayjs from "dayjs";

const logToConsole = logger({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `,"time": ${dayjs().format()}`,
});

export default logToConsole;
