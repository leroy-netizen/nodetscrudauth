import logger from "pino";
import dayjs from "dayjs";

const logToConsole = logger({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time": ${dayjs().format()}`,
});

export default logToConsole;
