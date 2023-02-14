import EN from './en.json';
import VI from './vi.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: typeof EN;
      vi: typeof VI;
    };
  }
}
