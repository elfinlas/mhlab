import ko from '@/messages/ko.json';
import en from '@/messages/en.json';
import ja from '@/messages/ja.json';

export const messages = {
  ko,
  en,
  ja,
};

export type Locale = keyof typeof messages;

export function getMessages(locale: Locale) {
  return messages[locale];
}

export function getSupportedLocales(): Locale[] {
  return Object.keys(messages) as Locale[];
}
