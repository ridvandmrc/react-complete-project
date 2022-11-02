import chalk from 'chalk'

class LogService {
  private configuration(cb: any) {
    if (process.env.NODE_ENV === 'development') {
      console.log(cb)
    }
  }
  public warning(message: string) {
    this.configuration(chalk.yellow(message))
  }

  public info(message: string) {
    this.configuration(chalk.gray(message))
  }

  public success(message: string) {
    this.configuration(chalk.green(message))
  }

  public error(message: string) {
    this.configuration(chalk.red(message))
  }
}

export const logService = new LogService()
