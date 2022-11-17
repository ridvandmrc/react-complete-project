interface IEnvironmentVariables {
  backendApi: string
}

export const environmentConfig: Record<keyof IEnvironmentVariables, string> = {
    backendApi: process.env.REACT_APP_BACKEND_URL || '',
}
