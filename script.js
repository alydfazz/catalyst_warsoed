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