"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var compiler_1 = require("@angular/compiler");
function getTranslationProviders() {
    // Get the locale id from the global
    var locale = document['locale'];
    // return no providers if fail to get translation file for locale
    var noProviders = [];
    // No locale or U.S. English: no translation providers
    if (!locale || locale === 'en-US') {
        return Promise.resolve(noProviders);
    }
    // Ex: 'locale/messages.es.xlf`
    var translationFile = "./locale/messages." + locale + ".xlf";
    return getTranslationsWithSystemJs(translationFile)
        .then(function (translations) { return [
        { provide: core_1.TRANSLATIONS, useValue: translations },
        { provide: core_1.TRANSLATIONS_FORMAT, useValue: 'xlf' },
        { provide: core_1.LOCALE_ID, useValue: locale },
        { provide: compiler_1.CompilerConfig, useValue: new compiler_1.CompilerConfig({ missingTranslation: core_1.MissingTranslationStrategy.Error }) }
    ]; })
        .catch(function () { return noProviders; }); // ignore if file not found
}
exports.getTranslationProviders = getTranslationProviders;
function getTranslationsWithSystemJs(file) {
    return System.import(file + '!text'); // relies on text plugin
}
//# sourceMappingURL=i18n-providers.js.map