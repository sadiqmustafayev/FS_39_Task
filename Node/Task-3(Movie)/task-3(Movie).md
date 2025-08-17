### 🧩 Tapşırıq: Film Şərhi Platforması və İstifadəçi İdarəetməsi Sistemi

#### 🎯 Məqsəd

Bu tapşırıqda **Express**, **TypeScript** və **Mongoose** istifadə edərək **film platforması** və **istifadəçi qeydiyyat sistemi** qurulacaq. Məqsədimiz:

- İstifadəçilərin filmlər haqqında şərh yazması, film məlumatlarını görüntüləməsi və şərhləri yoxlanması.
- API-lər vasitəsilə filmləri, istifadəçiləri və şərhləri idarə etmək.
- İstifadəçi qeydiyyatı, şifrəni təhlükəsiz şəkildə saxlanması (password hashing), və istifadəçi məlumatlarının MongoDB-də saxlanması.

---

### 🛠️ Texnologiyalar

- **Backend**: Express.js, TypeScript, Mongoose, MongoDB, bcryptjs
- **Frontend**: React.js (və ya Next.js)
- **Alətlər**: Nodemon, TypeScript, Axios, dotenv

---

### 📁 Qovluq Strukturu

```
project-root/
├── client/                 # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   │   ├── MovieList.tsx
│   │   │   ├── MovieDetail.tsx
│   │   │   ├── ReviewForm.tsx
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── .env
├── server/                 # Backend (Express)
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── movieController.ts
│   │   │   └── userController.ts
│   │   ├── models/
│   │   │   ├── movieModel.ts
│   │   │   └── userModel.ts
│   │   ├── routes/
│   │   │   └── movieRoutes.ts
│   │   │   └── userRoutes.ts
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   └── .env
└── README.md
```

---

### 🧑‍💻 Backend Tərəfi

#### **İstifadəçi Modeli (User Modeli)**

İstifadəçi məlumatlarını saxlamaq üçün aşağıdakı sahələrə sahib bir **User Modeli** yaradılacaq:

1. **`name`**:

   - **Tip**: String
   - **Açıqlama**: İstifadəçinin tam adı. Bu, istifadəçinin kim olduğunu göstərən əsas məlumatdır.

2. **`email`**:

   - **Tip**: String
   - **Açıqlama**: İstifadəçinin email ünvanı. Qeydiyyat üçün istifadə olunur və istifadəçi ilə əlaqə yaratmağa imkan verir. Unikal olmalıdır.
   - **Təhlükəsizlik**: Email səhv və ya təkrar yoxlanmalıdır.

3. **`password`**:

   - **Tip**: String
   - **Açıqlama**: İstifadəçinin şifrəsi. Bu, **bcryptjs** ilə **hashlənəcək** və açıq şəkildə saxlanmayacaq.
   - **Təhlükəsizlik**: **Şifrənin hash edilməsi** mühüm təhlükəsizlik tədbiridir, buna görə `bcryptjs` istifadə edilməlidir. Şifrə daxil edildikdə, hashlənəcək və verilənlər bazasında yalnız hash saxlanacaq.

4. **`role`**:

   - **Tip**: String (`admin` | `user`)
   - **Açıqlama**: İstifadəçinin rolu. İstifadəçilər müxtəlif səviyyələrdə hüquqlara malik ola bilər:

     - `admin`: Administrator, sistemə tam giriş hüququna sahibdir.
     - `user`: Standart istifadəçi, yalnız məhdud hüquqlara malikdir.

5. **`createdAt`**:

   - **Tip**: Date (işlənsə də açıq şəkildə verilmir)
   - **Açıqlama**: İstifadəçi hesabının yaradılma tarixi. Bu sahə MongoDB tərəfindən avtomatik təyin olunur.

6. **Şifrəni Yoxlama (Password Comparison)**:

   - İstifadəçi daxil olduqda, daxil etdiyi şifrə `bcryptjs` vasitəsilə verilənlər bazasında saxlanılan hash ilə müqayisə ediləcək. Bunun üçün `comparePassword` metodu yazılacaq.

#### **Məhsul Modeli (Movie Modeli)**

Filmləri və onların şərhlərini saxlamaq üçün **Movie Modeli** yaradılacaq. Aşağıdakı sahələrə sahib olacaq:

1. **`title`**:

   - **Tip**: String
   - **Açıqlama**: Film adı.

2. **`description`**:

   - **Tip**: String
   - **Açıqlama**: Film haqqında qısa məlumat, izahı.

3. **`releaseDate`**:

   - **Tip**: Date
   - **Açıqlama**: Filmin çıxış tarixi.

4. **`rating`**:

   - **Tip**: Number
   - **Açıqlama**: Orta reytinqi göstərən sahə (0-5 arasında).

5. **`reviews`**:

   - **Tip**: Array
   - **Açıqlama**: Bu sahə filmə yazılmış şərhləri saxlayacaq. Hər bir şərh **Review Modeli** ilə təmsil olunacaq.

#### **Review Modeli**

Şərhlər, hər bir filmə yazılmış rəylərdir. `Review` modeli aşağıdakı sahələrə malik olacaq:

1. **`user`**:

   - **Tip**: ObjectId
   - **Açıqlama**: İcmalı yazan istifadəçinin ID-si (istifadəçi ilə əlaqəli olacaq).

2. **`comment`**:

   - **Tip**: String
   - **Açıqlama**: İcmalın mətni. Film haqqında istifadəçinin rəyini ehtiva edir.

3. **`rating`**:

   - **Tip**: Number
   - **Açıqlama**: İcmalda verilən reytinq (0-5 arasında).

---

### 🔄 Frontend Komponentləri

**Frontend** hissəsində aşağıdakı komponentlər yaradılacaq:

1. **LoginForm**:

   - **Funksiya**: İstifadəçinin **email** və **password** ilə login olması üçün form. İstifadəçi məlumatları **POST /users/login** API ilə göndəriləcək.

2. **RegisterForm**:

   - **Funksiya**: Yeni istifadəçinin qeydiyyatdan keçməsi üçün form. İstifadəçi məlumatları **POST /users/register** API ilə backend-ə göndəriləcək.

3. **MovieList**:

   - **Funksiya**: Bütün filmləri göstərmək üçün komponent. `GET /movies` əməliyyatı ilə bütün filmlər alınacaq.

4. **MovieDetail**:

   - **Funksiya**: Seçilmiş filmin detallarını göstərən komponent. `GET /movies/:id` əməliyyatı ilə müəyyən bir filmin məlumatlarını əldə edəcək.

5. **ReviewForm**:

   - **Funksiya**: Filmə şərh yazmaq üçün forma. `POST /movies/:id/reviews` ilə backend-ə şərh göndəriləcək.

---

### 🔧 İşləmə Axışı

1. **İstifadəçi Qeydiyyatı**:

   - **RegisterForm** istifadəçiyə yeni hesab yaratmağa imkan verir. İstifadəçi məlumatları **POST /users/register** API-ə göndərilir və istifadəçi yaradılır.

2. **İstifadəçi Girişi**:

   - **LoginForm** istifadəçiyə email və şifrə ilə sistemə daxil olmağa imkan verir. **POST /users/login** ilə şifrə yoxlanılır və istifadəçi sistemə daxil olur.

3. **Film Şərhləri**:

   - **MovieList** bütün filmləri siyahı şəklində göstərir.
   - **MovieDetail** seçilmiş filmin detallarını göstərir.
   - **ReviewForm** istifadəçilərə filmlərə şərh yazmağa imkan verir.

4. **Şərhin Göndərilməsi**:

   - **ReviewForm** istifadəçilərdən **comment** və **rating** məlumatlarını alır və **POST /movies/\:id/reviews** əməliyyatı ilə backend-ə göndərir.

5. **Filmin Silinməsi**:

   - **DeleteMovie** komponenti istifadəçiyə film silmək üçün düymə verir.
   - **DELETE /movies/\:id** ilə film backend-dən silinir.
   - Film siyahısı yenilənir.

---

### 📚 İstinadlar

- [Express rəsmi sənədləri](https://expressjs.com/)
- [React rəsmi sənədləri](https://reactjs.org/docs/getting-started.html)
- [Mongoose rəsmi sənədləri](https://mongoosejs.com/docs/guide.html)
- [Axios ilə API inteqrasiyası](https://axios-http.com/docs/req_config)
- [bcryptjs - Şifrə Hashing](https://www.npmjs.com/package/bcryptjs)
