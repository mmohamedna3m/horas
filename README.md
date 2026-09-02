# 🎉 Horas - منصة متكاملة للتجارة الإلكترونية

**Horas** هي منصة تجارة إلكترونية حديثة مبنية بـ **Next.js** و **MongoDB** مع لوحة تحكم إدارية متقدمة ومُنشئ صفحات بدون الحاجة للبرمجة.

## ✨ المميزات

✅ **إدارة المنتجات** - أضف وعدّل وحذف المنتجات بسهولة
✅ **منشئ صفحات** - أنشئ صفحات مخصصة بدون كود
✅ **تخصيص الألوان** - اختر ألوان الموقع المفضلة لك
✅ **واجهة عربية** - دعم كامل للغة العربية
✅ **API RESTful** - واجهات برمجية قوية وسهلة
✅ **قاعدة بيانات MongoDB** - تخزين آمن وسريع
✅ **Responsive Design** - متوافق مع جميع الأجهزة

---

## 🚀 البدء السريع

### المتطلبات
- Node.js 16+
- MongoDB (محلي أو السحابة)
- npm أو yarn

### التثبيت

1. **استنساخ المشروع**
```bash
git clone https://github.com/mmohamedna3m/horas.git
cd horas
```

2. **تثبيت المكتبات**
```bash
npm install
```

3. **إعداد متغيرات البيئة**
```bash
cp .env.local.example .env.local
```

ثم عدّل `.env.local` وأضف بيانات MongoDB:
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/horas
NEXT_PUBLIC_API_URL=http://localhost:3000
ADMIN_PASSWORD=admin123
```

4. **تشغيل المشروع**
```bash
npm run dev
```

سيتم فتح الموقع على `http://localhost:3000`

---

## 📁 هيكل المشروع

```
horas/
├── pages/
│   ├── api/              # API Routes
│   │   ├── products/     # إدارة المنتجات
│   │   └── pages/        # إدارة الصفحات
│   ├── admin/            # لوحة التحكم الإدارية
│   │   ├── index.js      # الصفحة الرئيسية
│   │   ├── products.js   # إدارة المنتجات
│   │   ├── pages.js      # إدارة الصفحات
│   │   └── settings.js   # الإعدادات
│   ├── index.js          # الصفحة الرئيسية
│   ├── products.js       # صفحة المنتجات
│   ├── [slug].js         # الصفحات الديناميكية
│   └── _app.js           # تطبيق Next.js الرئيسي
├── lib/
│   ├── mongodb.js        # اتصال قاعدة البيانات
│   └── models/           # نماذج MongoDB
│       ├── Product.js
│       ├── Page.js
│       └── Admin.js
├── components/
│   └── AdminLayout.js    # تخطيط لوحة التحكم
├── styles/
│   └── globals.css       # الأنماط العامة
└── public/               # الملفات الثابتة
```

---

## 🎯 الاستخدام

### 1️⃣ إدارة المنتجات

انتقل إلى **لوحة التحكم** > **المنتجات**

- **إضافة منتج جديد**: انقر على "إضافة منتج جديد"
- **تعديل منتج**: انقر على "تعديل"
- **حذف منتج**: انقر على "حذف"

#### حقول المنتج:
- اسم المنتج
- الوصف
- السعر
- رابط الصورة
- الفئة
- المخزون

### 2️⃣ إنشاء صفحات مخصصة

انتقل إلى **لوحة التحكم** > **الصفحات**

- **إنشاء صفحة**: انقر على "إنشاء صفحة جديدة"
- **تخصيص الألوان**: اختر الألوان المفضلة
- **نشر الصفحة**: اجعلها متاحة للزوار

#### حقول الصفحة:
- عنوان الصفحة
- الرابط (slug) - مثل: `/about`
- المحتوى
- تخصيص الألوان (الأساسي، الثانوي، الخلفية، النص)

### 3️⃣ إعدادات الموقع

انتقل إلى **لوحة التحكم** > **الإعدادات**

- عنوان الموقع
- شعار الموقع
- الألوان الأساسية

---

## 🔌 API Endpoints

### المنتجات

#### الحصول على جميع المنتجات
```bash
GET /api/products
```

#### الحصول على منتج واحد
```bash
GET /api/products/:id
```

#### إضافة منتج جديد
```bash
POST /api/products
Content-Type: application/json

{
  "name": "اسم المنتج",
  "description": "الوصف",
  "price": 100,
  "image": "https://...",
  "category": "الفئة",
  "stock": 10
}
```

#### تعديل منتج
```bash
PUT /api/products/:id
Content-Type: application/json

{ /* نفس البيانات أعلاه */ }
```

#### حذف منتج
```bash
DELETE /api/products/:id
```

### الصفحات

نفس الطريقة مع `/api/pages`

---

## 🎨 تخصيص الموقع

### تغيير الألوان

1. انتقل إلى **الإعدادات**
2. اختر الألوان المفضلة
3. انقر **حفظ**

### إضافة صور المنتجات

- استخدم روابط صور من الإنترنت
- أو استضيف الصور على خدمة مثل **Cloudinary** أو **Firebase**

### تخصيص الصفحات

- كل صفحة لها ألوان مخصصة
- يمكن إضافة أقسام مختلفة
- دعم HTML في المحتوى

---

## 🔧 التطوير

### إضافة ميزات جديدة

1. **نموذج جديد** في `lib/models/`
2. **API Route جديد** في `pages/api/`
3. **صفحة جديدة** في `pages/`
4. **مكون جديد** في `components/`

### البناء للإنتاج

```bash
npm run build
npm start
```

---

## 📦 المكتبات المستخدمة

| المكتبة | الاستخدام |
|--------|----------|
| **Next.js** | إطار عمل React |
| **MongoDB** | قاعدة البيانات |
| **Mongoose** | مكتبة MongoDB |
| **Axios** | طلبات HTTP |
| **React Hot Toast** | الإشعارات |
| **Tailwind CSS** | تصميم واجهات |
| **Zustand** | إدارة الحالة |

---

## 🐛 استكشاف الأخطاء

### خطأ في الاتصال بـ MongoDB
- تأكد من صحة `MONGODB_URI` في `.env.local`
- تحقق من أن قاعدة البيانات متاحة
- جرّب الاتصال باستخدام MongoDB Compass

### المنتجات لا تظهر
- تأكد من أن لديك منتجات مضافة في لوحة التحكم
- افحص الكونسول للأخطاء

### مشاكل في الأداء
- استخدم `npm run build` للإنتاج
- تحقق من حجم الصور

---

## 🚀 النشر

### نشر على Vercel (الأسهل)

1. ادفع المشروع إلى GitHub
2. اذهب إلى [Vercel.com](https://vercel.com)
3. اختر المشروع وانقر **Deploy**
4. أضف متغيرات البيئة في الإعدادات

### نشر على Heroku

```bash
heroku create
git push heroku main
```

### نشر على VPS (Linux)

```bash
# 1. استنسخ المشروع
git clone https://github.com/mmohamedna3m/horas.git
cd horas

# 2. ثبت المكتبات
npm install

# 3. بناء المشروع
npm run build

# 4. ابدأ الخادم
npm start
```

---

## 📚 الموارد الإضافية

- [توثيق Next.js](https://nextjs.org/docs)
- [توثيق MongoDB](https://docs.mongodb.com)
- [توثيق Tailwind CSS](https://tailwindcss.com/docs)

---

## 📞 الدعم

إذا واجهت أي مشاكل:

1. تحقق من [قسم الأسئلة الشائعة](#استكشاف-الأخطاء)
2. افتح [issue على GitHub](https://github.com/mmohamedna3m/horas/issues)
3. راجع الكود والتعليقات

---

## 📄 الترخيص

هذا المشروع مرخص تحت **MIT License**

---

## 👨‍💻 المساهمة

نرحب بمساهماتك! تفضل:

1. Fork المشروع
2. أنشئ branch جديد (`git checkout -b feature/AmazingFeature`)
3. Commit تغييراتك (`git commit -m 'Add AmazingFeature'`)
4. Push إلى الـ branch (`git push origin feature/AmazingFeature`)
5. افتح Pull Request

---

## 🎁 شكراً للاستخدام!

إذا أعجبك المشروع، لا تنسَ إعطاؤه ⭐ على GitHub!

---

**مصنوعة بـ ❤️ بواسطة Mohamed**
