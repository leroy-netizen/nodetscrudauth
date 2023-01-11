import logger from "pino";
import dayjs from "dayjs";

const logToConsole = logger({
  base: {
    pid: false,
  },
  timestamp: () => `,"time": ${dayjs().format()}`,
});

export default logToConsole;
