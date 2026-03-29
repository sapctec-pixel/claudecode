export const siteConfig = {
  name: 'VAPE SMOG',
  nameAr: 'فيب سموك',
  description: 'متجر السجائر الإلكترونية والمعسل في المملكة العربية السعودية',
  descriptionEn: 'Premium vape & shisha store in Saudi Arabia',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vapesmog.sa',
  locale: 'ar',
  locales: ['ar', 'en'] as const,
  defaultLocale: 'ar' as const,
  minAge: 18,
  currency: 'SAR',
  currencySymbol: 'ر.س',
  phone: '+966-XX-XXX-XXXX',
  email: 'info@vapesmog.sa',
  social: {
    instagram: 'https://instagram.com/vapesmog',
    twitter: 'https://twitter.com/vapesmog',
    snapchat: 'https://snapchat.com/add/vapesmog',
  },
}

export type Locale = (typeof siteConfig.locales)[number]
