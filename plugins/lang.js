export default function ({ app , store }) {
    // beforeLanguageSwitch called right before setting a new locale
    // app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    //   console.log(oldLocale, newLocale)
    // }
    // onLanguageSwitched called right after a new locale has been set
    app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
      store.commit('lang/toogleSwitch','close')
    }
  }