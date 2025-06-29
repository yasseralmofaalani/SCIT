# الشركة السورية لتكنولوجيا المعلومات - SCIT Website

موقع الشركة السورية لتكنولوجيا المعلومات الرسمي، مطور باستخدام تقنيات حديثة ومصمم وفق معايير IBM Color Library.

## 🚀 المميزات

- **تصميم حديث**: مطور وفق معايير IBM Carbon Design System
- **خط عربي جميل**: يستخدم خط Tajawal من Google Fonts للوضوح والقراءة
- **متجاوب**: يعمل بشكل مثالي على جميع الأجهزة
- **ثنائي اللغة**: يدعم العربية والإنجليزية
- **سريع**: مطور باستخدام React و Vite

## 🛠️ التقنيات المستخدمة

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with IBM Color Library
- **Fonts**: Tajawal (Google Fonts)
- **Build Tool**: Vite
- **Authentication**: Passport.js

## 🎨 التصميم

الموقع مصمم وفق:
- **IBM Color Library**: نظام ألوان احترافي ومتسق
- **خط Tajawal**: خط عربي حديث وواضح للقراءة
- **تصميم متجاوب**: يتكيف مع جميع أحجام الشاشات

## 📦 التثبيت والتشغيل

### المتطلبات
- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn
- PostgreSQL

### خطوات التثبيت

1. **استنساخ المشروع**
```bash
git clone https://github.com/your-username/scit-website.git
cd scit-website
```

2. **تثبيت التبعيات**
```bash
npm install
```

3. **إعداد قاعدة البيانات**
```bash
# إنشاء ملف .env وإضافة متغيرات البيئة
cp .env.example .env

# تشغيل migrations
npm run db:push
```

4. **تشغيل المشروع**
```bash
# للتطوير
npm run dev

# للإنتاج
npm run build
npm start
```

## 🌐 النشر

### Vercel (موصى به)
1. ادفع الكود إلى GitHub
2. اربط المشروع بـ Vercel
3. أضف متغيرات البيئة
4. انشر!

### Railway
1. اربط المشروع بـ Railway
2. أضف متغيرات البيئة
3. انشر تلقائياً

## 📁 هيكل المشروع

```
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # مكونات React
│   │   ├── pages/         # صفحات الموقع
│   │   ├── contexts/      # React contexts
│   │   └── lib/          # مكتبات مساعدة
├── server/                # Backend Express server
├── shared/               # كود مشترك
└── public/              # ملفات ثابتة
```

## 🤝 المساهمة

نرحب بالمساهمات! يرجى:

1. Fork المشروع
2. إنشاء branch جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push إلى Branch (`git push origin feature/amazing-feature`)
5. فتح Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 التواصل

- **الموقع**: [www.scit-sy.com](https://www.scit-sy.com)
- **البريد الإلكتروني**: info@scit-sy.com
- **العنوان**: دمشق، الجمهورية العربية السورية

---

© 2025 الشركة السورية لتكنولوجيا المعلومات. جميع الحقوق محفوظة.
