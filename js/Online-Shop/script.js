// ## 📁 Layihə Tapşırığı: script.js Faylında Məhsul Kartları İnterfeysi Hazırlayın

// ### 📌 Məqsəd:

// `fetch` metodundan istifadə edərək [DummyJSON API](https://dummyjson.com/products) vasitəsilə məhsul məlumatlarını əldə edin və bu məlumatları mövcud dizayna uyğun şəkildə veb səhifədə vizual şəkildə təqdim edin. Hər bir məhsul üçün şəkil, ad, qiymət və digər məlumatları göstərən kartlar yaradılmalıdır.

// ---

// ### 🧰 Texniki Tələblər:

// 1. **JavaScript (`script.js`):**

//    - `fetch` metodundan istifadə edərək məhsul məlumatlarını `https://dummyjson.com/products` API-dən əldə edin.
//    - Əldə olunan məlumatları istifadə edərək hər bir məhsul üçün kart yaradın və mövcud HTML strukturunda uyğun konteynerə yerləşdirin.

// ---

// ### 📁 Məlumatlar:

// API-dən alınan hər bir məhsul haqqında aşağıdakı əsas məlumatlar mövcuddur.

// - `title`: Məhsulun adı
// - `price`: Məhsulun qiyməti
// - `thumbnail`: Məhsulun şəkli
// - `rating`: Məhsulun reytinqi

// ---

// ### ✅ Əlavə Tapşırıqlar (İstəyə bağlı):

// - **Responsiv Dizayn:** CSS Grid və ya Flexbox istifadə edərək müxtəlif ekran ölçülərinə uyğunlaşan layout yaradın.
// - **Əlavə Məlumatlar:** Məhsulun təsviri, endirim faizi və stok vəziyyəti kimi əlavə məlumatları da kartlara daxil edin.

// ---

// ### 💡 Tövsiyələr:

// - Kodunuzu modulyar şəkildə yazın. Hər funksiyanın müəyyən bir vəzifəsi olsun.
// - Əlavə xüsusiyyətlər əlavə edərək tətbiqinizi fərdiləşdirin.
// - Dizayn və istifadəçi təcrübəsinə diqqət yetirin.

// ---

// ### 🔗 Faydalı Linklər:

// - [Arxiv faylının linki](https://drive.google.com/file/d/1U6EBjZkpRuIPCvTgPnHae-afbfARl1A5/view?usp=drive_link)
// - [DummyJSON API - Məhsullar](https://dummyjson.com/products)


document.addEventListener('DOMContentLoaded', () => {
  fetchProducts();
});

async function fetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;
    displayProducts(products);
  } catch (error) {
    console.error('Error 404:', error);
  }
}

function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  card.innerHTML = `
    <img src="${product.thumbnail}" alt="${product.title}" class="product-img">
    <div class="product-details">
      <h3 class="product-title">${product.title}</h3>
      <p class="product-price">Qiymət: $${product.price}</p>
      <p class="product-rating">Reytinq: ⭐ ${product.rating}</p>
      <p class="product-desc">${product.description}</p>
      <p class="product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}">
        ${product.stock > 0 ? 'Stokda var' : 'Stokda yoxdur'}
      </p>
    </div>
  `;

  return card;
}
