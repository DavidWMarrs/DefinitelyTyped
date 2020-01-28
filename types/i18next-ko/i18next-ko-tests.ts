import * as i18nextko from 'i18next-ko';
import * as ko from 'knockout';

const resourceStore = {
    en: {
        translation: {
            testTranslation: 'Test translation'
        }
    },

    de: {
        translation: {
            testTranslation: 'Test-Übersetzung'
        }
    }
};
const options = {
    interpolation: {
        format : (value: any) => {
            return value;
        }
    }
}

i18nextko.init(resourceStore);
i18nextko.init(resourceStore, 'en');
i18nextko.init(resourceStore, 'en', ko);
i18nextko.init(resourceStore, 'en', ko, $, options);

i18nextko.setLanguage('de');

i18nextko.i18n;

i18nextko.t('testTranslation');
i18nextko.t('testTranslation', { name: "David" });
i18nextko.t('testTranslation', 'Test translation for translator {{name}}', { name: "David" });
