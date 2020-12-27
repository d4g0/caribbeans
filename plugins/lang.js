export default function ({ app, store }) {

  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    // store.commit('lang/toogleSwitch', 'close')
  }

}