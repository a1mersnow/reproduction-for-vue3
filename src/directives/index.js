const nothing = {
  mounted (el, {value}) {

  },
  updated (el, {value}) {

  }
}

export default function registerDirectives (app) {
  app.directive('nothing', nothing)
}
