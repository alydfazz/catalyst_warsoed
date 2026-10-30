const menus = [
  {
    name: "Mix Omelette",
    price: 13000,
    category: "telur",
    categoryLabel: "Menu Telur",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbWDVXMyQ3kNyzdCizu8kW-6QQcxKZgK4kXbw0Hckuw66iSiWcaJocbOX&s=10"
  },
  {
    name: "Ayam Penyet",
    price: 14000,
    category: "ayam",
    categoryLabel: "Menu Ayam",
    image: "https://akcdn.detik.net.id/visual/2023/08/03/ilustrasi-ayam-penyet-2_169.jpeg?w=1200"
  },
  {
    name: "Ayam Kremes",
    price: 14000,
    category: "ayam",
    categoryLabel: "Menu Ayam",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6DCAY619HflAY0SsfhFawWod8TExH4YxsVTne6cEomu0rYc8mMhOXKo0&s=10"
  },
  {
    name: "Ayam Geprek",
    price: 12000,
    category: "ayam",
    categoryLabel: "Menu Ayam",
    image: "https://static.wixstatic.com/media/ecef2e_f6380a83c73843f2a43606ca4dfc0ad8~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ecef2e_f6380a83c73843f2a43606ca4dfc0ad8~mv2.jpg"
  },
  {
    name: "Chicken Katsu",
    price: 14000,
    category: "ayam",
    categoryLabel: "Menu Ayam",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1b4SwRIFsL4XfVU-MWMWdL2_XeZljF8vydo3IFj8tIZhrY76LM4k8_E_&s=10"
  },
  {
    name: "Chicken Black Pepper",
    price: 14000,
    category: "ayam",
    categoryLabel: "Menu Ayam",
    image: "https://www.allrecipes.com/thmb/ompRvqQvgRG8qk8A1kz8kHtIc00=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8382732-black-pepper-chicken-ddmfs-1x2-10911-457c8a41b97a4ed9a21f1126e4ac0b92.jpg"
  },
  {
    name: "Chicken BBQ",
    price: 14000,
    category: "ayam",
    categoryLabel: "Menu Ayam",
    image: "https://img-global.cpcdn.com/recipes/7043d7f841510989/1200x630cq80/photo.jpg"
  },
  {
    name: "Chicken Teriyaki",
    price: 14000,
    category: "ayam",
    categoryLabel: "Menu Ayam",
    image: "https://t3.ftcdn.net/jpg/04/53/28/12/360_F_453281281_2k2gP9CQd1OyaflyGM0tZf3DRyrCakrV.jpg"
  },
  {
    name: "Nasi Goreng WARSOED",
    price: 14000,
    category: "nasi",
    categoryLabel: "Menu Nasi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_1yRm0diPI5ns0GiEc5fbqDMwCgJYQcw6C4U39hO3T-xOTWww4YePMU6&s=10"
  },
  {
    name: "Telor Mata Sapi",
    price: 13000,
    category: "telur",
    categoryLabel: "Menu Telur",
    image: "https://www.dapurkobe.co.id/wp-content/uploads/nasi-telur-sentosa.jpg"
  }
];

const menuGrid = document.getElementById("menuGrid");
const menuSearch = document.getElementById("menuSearch");
const menuCategory = document.getElementById("menuCategory");

function formatRupiah(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(price);
}

function renderMenus() {
  if (!menuGrid) return;

  const keyword = menuSearch ? menuSearch.value.trim().toLowerCase() : "";
  const category = menuCategory ? menuCategory.value : "semua";

  const filteredMenus = menus.filter((menuItem) => {
    const matchesName = menuItem.name.toLowerCase().includes(keyword);
    const matchesCategory = category === "semua" || menuItem.category === category;
    return matchesName && matchesCategory;
  });

  if (filteredMenus.length === 0) {
    menuGrid.innerHTML = '<p class="empty-state">Menu tidak ditemukan. Coba kata kunci lain.</p>';
    return;
  }

  menuGrid.innerHTML = filteredMenus.map((menuItem) => `
    <article class="menu-card">
      <div class="menu-image" style="position: relative;">
        <img src="${menuItem.image}" alt="Foto ${menuItem.name}" loading="lazy" style="width: 100%; height: 160px; object-fit: cover; display: block;">
        <span class="image-tag" style="position: absolute; top: 10px; right: 10px; background: rgba(75, 46, 35, 0.85); color: #fff; padding: 3px 10px; border-radius: 999px; font-size: 0.75rem; font-weight: 700;">${menuItem.categoryLabel}</span>
      </div>
      <div class="menu-info">
        <h3>${menuItem.name}</h3>
        <p>${formatRupiah(menuItem.price)}</p>
      </div>
    </article>
  `).join("");
}

if (menuSearch) menuSearch.addEventListener("input", renderMenus);
if (menuCategory) menuCategory.addEventListener("change", renderMenus);

renderMenus();