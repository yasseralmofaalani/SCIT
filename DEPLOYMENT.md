# دليل نشر موقع SCIT أونلاين

## 🚀 خيارات النشر المتاحة

### 1. Vercel (الخيار الأفضل - موصى به)

**المميزات:**
- نشر تلقائي عند كل push إلى GitHub
- دعم ممتاز لـ React و Node.js
- CDN عالمي سريع
- SSL مجاني
- دومين مجاني (.vercel.app)

**خطوات النشر:**

1. **اذهب إلى Vercel:**
   - زر الموقع: https://vercel.com
   - اضغط "Sign up" أو "Login"
   - سجل دخول باستخدام GitHub

2. **إنشاء مشروع جديد:**
   - اضغط "New Project"
   - اختر repository: `yasseralmofaalani/scit`
   - اضغط "Import"

3. **إعدادات المشروع:**
   - **Project Name**: `scit-website`
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (افتراضي)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **متغيرات البيئة (إذا لزم الأمر):**
   ```
   NODE_ENV=production
   DATABASE_URL=your_database_url_here
   SESSION_SECRET=your_secret_here
   ```

5. **النشر:**
   - اضغط "Deploy"
   - انتظر حتى اكتمال البناء (2-3 دقائق)
   - ستحصل على رابط مثل: `https://scit-website.vercel.app`

---

### 2. Netlify (خيار بديل ممتاز)

**المميزات:**
- سهولة الاستخدام
- نشر تلقائي
- دعم للنماذج
- SSL مجاني

**خطوات النشر:**

1. **اذهب إلى Netlify:**
   - زر الموقع: https://netlify.com
   - اضغط "Sign up" باستخدام GitHub

2. **إنشاء موقع جديد:**
   - اضغط "New site from Git"
   - اختر GitHub
   - اختر repository: `yasseralmofaalani/scit`

3. **إعدادات البناء:**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18

4. **النشر:**
   - اضغط "Deploy site"
   - ستحصل على رابط مثل: `https://amazing-name-123456.netlify.app`

---

### 3. GitHub Pages (للواجهة الأمامية فقط)

**ملاحظة:** هذا الخيار للواجهة الأمامية فقط (بدون backend)

1. **في repository على GitHub:**
   - اذهب إلى Settings > Pages
   - في Source، اختر "GitHub Actions"

2. **إنشاء workflow:**
   - أنشئ ملف `.github/workflows/deploy.yml`
   - أضف محتوى workflow للنشر

---

## 🔧 إعدادات إضافية

### دومين مخصص (اختياري)

**في Vercel:**
1. اذهب إلى Project Settings > Domains
2. أضف دومينك المخصص
3. اتبع التعليمات لإعداد DNS

**في Netlify:**
1. اذهب إلى Site Settings > Domain management
2. أضف دومين مخصص
3. اتبع التعليمات لإعداد DNS

### متغيرات البيئة

إذا كان المشروع يحتاج قاعدة بيانات، أضف هذه المتغيرات:

```env
# قاعدة البيانات
DATABASE_URL=postgresql://username:password@host:port/database

# الجلسات
SESSION_SECRET=your-super-secret-key-here

# البيئة
NODE_ENV=production

# المنفذ (للخادم المحلي فقط)
PORT=3000
```

### SSL وHTTPS

- **Vercel**: SSL تلقائي لجميع المواقع
- **Netlify**: SSL تلقائي لجميع المواقع
- **GitHub Pages**: SSL تلقائي للدومينات المخصصة

## 📊 مراقبة الأداء

### Vercel Analytics
- مجاني للمشاريع الشخصية
- يظهر إحصائيات الزوار والأداء

### Google Analytics (اختياري)
- أضف Google Analytics ID في متغيرات البيئة
- تتبع مفصل للزوار والسلوك

## 🔄 التحديثات التلقائية

عند push أي تغييرات إلى GitHub:
1. Vercel/Netlify سيكتشف التغييرات تلقائياً
2. سيبدأ عملية البناء الجديدة
3. سينشر النسخة الجديدة تلقائياً
4. ستتلقى إشعار بالبريد الإلكتروني

## 🆘 استكشاف الأخطاء

### مشاكل شائعة:

1. **فشل البناء:**
   - تحقق من logs في Vercel/Netlify
   - تأكد من صحة package.json
   - تأكد من وجود جميع التبعيات

2. **مشاكل الخطوط:**
   - تأكد من تحميل خط Tajawal من Google Fonts
   - تحقق من إعدادات CORS

3. **مشاكل قاعدة البيانات:**
   - تأكد من صحة DATABASE_URL
   - تحقق من إعدادات الشبكة

## 📞 الدعم

- **Vercel**: https://vercel.com/docs
- **Netlify**: https://docs.netlify.com
- **GitHub Pages**: https://docs.github.com/pages

---

## ✅ قائمة التحقق النهائية

- [ ] تم رفع الكود إلى GitHub
- [ ] تم إنشاء حساب على Vercel/Netlify
- [ ] تم ربط repository بمنصة النشر
- [ ] تم إعداد متغيرات البيئة (إن وجدت)
- [ ] تم اختبار الموقع بعد النشر
- [ ] تم إعداد دومين مخصص (اختياري)
- [ ] تم إعداد مراقبة الأداء (اختياري)

**الموقع جاهز للنشر! 🎉**
