export const loggerMiddleware = () => (next) => (action) => {
    next(action);

    console.log(action)
}