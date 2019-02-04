type F<T> = (n: T) => T

const compose = <T>(f: F<T>, g: F<T>) => (x: T) => f(g(x))

const inc = (n: number) => n + 1
const dub = (n: number) => n * 2

const transform = compose(inc, dub)

const testing = [1, 2, 3].map(x => transform(x))

if (module.hot) {
  module.hot.accept()
}
