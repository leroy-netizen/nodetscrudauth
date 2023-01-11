import logger from "pino";
import dayjs from "dayjs";

const logToConsole = logger({
  transport: {
    target: "pino-pretty",
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time": ${dayjs().format()}`,
});

export default logToConsole;
