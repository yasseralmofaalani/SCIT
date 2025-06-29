# إرشادات رفع المشروع على GitHub

## الخطوة 1: إنشاء Repository على GitHub

1. اذهب إلى [GitHub.com](https://github.com)
2. اضغط على زر "New" أو "+" في الأعلى
3. اختر "New repository"
4. املأ التفاصيل:
   - **Repository name**: `scit-website`
   - **Description**: `الموقع الرسمي للشركة السورية لتكنولوجيا المعلومات - SCIT Official Website`
   - **Visibility**: اختر Public أو Private حسب رغبتك
   - **لا تختر** "Add a README file" (موجود بالفعل)
   - **لا تختر** "Add .gitignore" (موجود بالفعل)
5. اضغط "Create repository"

## الخطوة 2: ربط المشروع بـ GitHub

بعد إنشاء Repository، نفذ هذه الأوامر في terminal:

```bash
# استبدل YOUR_USERNAME باسم المستخدم الخاص بك على GitHub
git remote add origin https://github.com/YOUR_USERNAME/scit-website.git

# تأكد من أن الفرع الرئيسي يسمى main
git branch -M main

# رفع الكود إلى GitHub
git push -u origin main
```

## الخطوة 3: التحقق من الرفع

بعد تنفيذ الأوامر، اذهب إلى صفحة Repository على GitHub وتأكد من ظهور جميع الملفات.

## الخطوة 4: نشر الموقع أونلاين

### خيار 1: Vercel (موصى به)

1. اذهب إلى [vercel.com](https://vercel.com)
2. اضغط "Sign up" وسجل دخول باستخدام GitHub
3. اضغط "New Project"
4. اختر repository `scit-website`
5. اضغط "Deploy"

### خيار 2: Netlify

1. اذهب إلى [netlify.com](https://netlify.com)
2. اضغط "Sign up" وسجل دخول باستخدام GitHub
3. اضغط "New site from Git"
4. اختر GitHub واختر repository `scit-website`
5. اضغط "Deploy site"

### خيار 3: GitHub Pages

1. في صفحة Repository على GitHub
2. اذهب إلى Settings > Pages
3. في Source، اختر "GitHub Actions"
4. اختر "Static HTML" أو "Node.js"
5. اضغط "Configure"

## متغيرات البيئة للنشر

إذا كان المشروع يحتاج قاعدة بيانات، أضف هذه المتغيرات في منصة النشر:

```
DATABASE_URL=your_database_url
SESSION_SECRET=your_session_secret
NODE_ENV=production
```

## نصائح مهمة

1. **تأكد من .gitignore**: لا ترفع ملفات حساسة مثل .env
2. **اختبر محلياً**: تأكد من عمل المشروع محلياً قبل النشر
3. **استخدم HTTPS**: استخدم HTTPS للروابط الخارجية
4. **راقب الأداء**: استخدم أدوات مراقبة الأداء

## روابط مفيدة

- [GitHub Docs](https://docs.github.com)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
