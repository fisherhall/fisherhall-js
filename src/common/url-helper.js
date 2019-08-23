const buildRoute = template => ({
  url: (params = {}) => buildUrl(template, params),
  template,
})

export const aboutRoute = buildRoute("/about")
export const connectRoute = buildRoute("/connect")
export const loginRoute = buildRoute("/login")
export const sermonsRoute = buildRoute("/sermons")
export const sundayRoute = buildRoute("/sunday")

export const buildUrl = (template, params = {}) =>
  Object.keys(params).reduce(
    (url, current) => url.replace(`:${current}`, params[current]),
    template,
  )
