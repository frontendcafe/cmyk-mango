import dayjs from 'dayjs';

// Locale
import spanishLang from 'dayjs/locale/es';

// Plugins
import utcPlugin from 'dayjs/plugin/utc';
import timezonePlugin from 'dayjs/plugin/timezone';
import localeDataPlugin from 'dayjs/plugin/localeData';

dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);
dayjs.extend(localeDataPlugin);
dayjs.locale(spanishLang);
