## 🧩 Tapşırıq: İstifadəçi İdarəetməsi Sistemi

### 🎯 Məqsəd

Bu tapşırıqda **React** və **Express** istifadə edərək **istifadəçi idarəetməsi** sistemi quracağıq. Məqsədimiz:

- **Frontend** hissəsində istifadəçi məlumatlarını göstərmək, yeniləmək və silmək.
- **Backend** hissəsində isə bu əməliyyatları idarə edən API-lər yaratmaq.

Bu tapşırıq həm **frontend**, həm də **backend** tərəflərini əhatə edir və **API-lərin CRUD əməliyyatlarını** praktiki şəkildə öyrənməyə yönəlib.

---

### 🗂️ Qovluq Strukturunun Qurulması

Tətbiqin strukturu aşağıdakı kimi olmalıdır:

```
project-root/
├── client/           # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   │   ├── UserList.jsx
│   │   │   ├── UserProfile.jsx
│   │   │   └── UserForm.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── .env
├── api/              # Backend (Express)
│   ├── controllers/
│   │   └── userController.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── data/
│   │   └── users.json
│   ├── index.js
│   └── package.json
└── README.md
```

Bu strukturda:

- **client/**: React tətbiqi və istifadəçi interfeysi komponentləri.
- **api/**: Express serveri, API-lər və məlumat faylları.

---

### 🧑‍💻 İstifadəçi Obyekti

İstifadəçi obyekti **frontend** və **backend** hissələrində istifadə ediləcək və aşağıdakı sahələrdən ibarət olacaq:

```json
{
  "id": 1, // İstifadəçi üçün unikal ID (integer)
  "name": "John Doe", // İstifadəçinin adı (string)
  "email": "john@example.com", // İstifadəçinin email ünvanı (string)
  "role": "admin" // İstifadəçinin rolu (string, məsələn: 'admin', 'user', 'moderator')
}
```

### Açıqlamalar:

- **`id`**: Hər bir istifadəçiyə unikal bir identifikator verir. Məlumat bazasında və ya serverdə bu istifadəçi üçün asanlıqla axtarış etməyə imkan verir.
- **`name`**: İstifadəçinin tam adı, bu sahə istifadəçinin adını göstərmək üçün istifadə olunur.
- **`email`**: İstifadəçinin qeydiyyatdan keçdiyi email ünvanı. Bu sahə istifadəçinin doğrulaması və parolun sıfırlanması kimi funksiyalar üçün vacibdir.
- **`role`**: İstifadəçinin tətbiqdəki hüquqlarını müəyyən edir. Məsələn:

  - `admin`: Admin hüquqları ilə istifadəçi.
  - `user`: Standart istifadəçi.
  - `moderator`: Moderasiya hüquqları olan istifadəçi.

---

### 🔧 Backend (Express) Tərəfi

**1. `GET /users`** – Bütün istifadəçiləri əldə etmək.

- **İstifadə**: `fetch('/api/users')`
- **Funksiya**: `getUsers(req, res)`

**2. `GET /users/:id`** – Müəyyən bir istifadəçini ID ilə əldə etmək.

- **İstifadə**: `fetch('/api/users/1')`
- **Funksiya**: `getUserById(req, res)`

**3. `POST /users`** – Yeni istifadəçi yaratmaq.

- **İstifadə**: `fetch('/api/users', { method: 'POST', body: JSON.stringify(newUser) })`
- **Funksiya**: `createUser(req, res)`

**4. `PUT /users/:id`** – Mövcud istifadəçini yeniləmək.

- **İstifadə**: `fetch('/api/users/1', { method: 'PUT', body: JSON.stringify(updatedUser) })`
- **Funksiya**: `updateUser(req, res)`

**5. `DELETE /users/:id`** – İstifadəçini silmək.

- **İstifadə**: `fetch('/api/users/1', { method: 'DELETE' })`
- **Funksiya**: `deleteUser(req, res)`

---

### 🖥️ Frontend (React) Tərəfi

Frontend hissəsində aşağıdakı komponentlər yaradılmalıdır:

- **UserList.js**: Bütün istifadəçiləri siyahı şəklində göstərir.
- **UserProfile.js**: Seçilmiş istifadəçinin məlumatlarını göstərir.
- **UserForm.js**: Yeni istifadəçi əlavə etmək və ya mövcud istifadəçini yeniləmək üçün forma.

Bu komponentlərdə aşağıdakı metodlar istifadə olunacaq:

- **`useEffect`**: Komponent yükləndikdə məlumatları əldə etmək üçün.
- **`useState`**: Məlumatları saxlamaq və UI-nı yeniləmək üçün.
- **`fetch` və ya `axios`**: API-lərlə əlaqə qurmaq üçün.

---

### ✅ Yoxlanış Siyahısı

- **Backend** hissəsində bütün CRUD əməliyyatlarını icra edən API-lər mövcuddur.
- **Frontend** hissəsində istifadəçiləri göstərmək, əlavə etmək, yeniləmək və silmək üçün UI komponentləri hazırlanıb.
- **API-lər** frontend ilə düzgün inteqrasiya olunub və məlumat mübadiləsi düzgün həyata keçirilir.
- **Kod** yaxşı strukturlaşdırılıb və **best practices**-ə uyğun yazılıb.

---

### 📚 İstinadlar

Bu tapşırıqda istifadə edilən texnologiyaların və metodların daha dərin izahları üçün aşağıdakı resurslardan istifadə edə bilərsiniz:

- [Express rəsmi sənədləri](https://expressjs.com/)
- [React rəsmi sənədləri](https://reactjs.org/docs/getting-started.html)
- [Axios ilə API inteqrasiyası](https://axios-http.com/docs/req_config)
- [React-də API ilə işləmək](https://reactjs.org/docs/faq-ajax.html)

### 🎨 Qrafik İstinad:

![Create CRUD API In Node.js, Express, and MongoDB](https://github.com/FaizAlam/user-management-system/raw/master/Images/Img1.png?raw=true)