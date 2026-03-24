(function () {
  // ========== SUBCATEGORY CONFIGURATION ==========
  const subcategories = [
    {
      id: "wall-clock",
      name: "Wall Clock",
      icon: "far fa-clock",
      desc: "Timeless elegance for your walls – discover our curated collection of handcrafted clocks.",
    },
    {
      id: "paintings",
      name: "Paintings",
      icon: "fas fa-palette",
      desc: "Expressive artworks to bring color and emotion into your space.",
    },
    {
      id: "wall-sketch",
      name: "Wall Sketch",
      icon: "fas fa-pencil-alt",
      desc: "Minimalist sketches that add character and depth to any room.",
    },
    {
      id: "jharokas",
      name: "Jharokas",
      icon: "fas fa-archway",
      desc: "Traditional arched windows – intricate craftsmanship with a royal touch.",
    },
    {
      id: "metal-wall-hangings",
      name: "Metal Wall Hangings",
      icon: "fas fa-cog",
      desc: "Contemporary metal art pieces that add industrial charm to your walls.",
    },
    {
      id: "wallpapers",
      name: "Wallpapers",
      icon: "fas fa-paint-roller",
      desc: "Transform your space with stunning patterns and textures.",
    },
    {
      id: "handmade-paintings",
      name: "Handmade Paintings",
      icon: "fas fa-brush",
      desc: "Unique, original artworks crafted by skilled artists.",
    },
    {
      id: "digital-canvas-prints",
      name: "Digital Canvas Prints",
      icon: "fas fa-print",
      desc: "Modern digital art printed on premium canvas.",
    },
    {
      id: "brass-wall-hangings",
      name: "Brass Wall Hangings",
      icon: "fas fa-medal",
      desc: "Elegant brass decor pieces with traditional appeal.",
    },
  ];

  // ========== ARTEZO PRODUCT DATABASE ==========
  const allProducts = [
    // wall clocks
    {
      id: 101,
      name: "Rustic Wooden effect Wall Clock - Silent Quartz Movement - Vintage Bamboo Farmhouse Decor - Retro Wall Art",
      subcategory: "wall-clock",
      price: 1299,
      material: "Wood",
      color: "Brown",
      size: "Large",
      style: "vintage",
      popular: 120,
      newest: 3,
      image:
        "https://i.etsystatic.com/18909544/r/il/4d908c/7682769240/il_1588xN.7682769240_b8zb.jpg",
    },
    {
      id: 102,
      name: "Monaco Line Wall Clock Round 40 Inch Fontvieille Bronze-Brass",
      subcategory: "wall-clock",
      price: 2499,
      material: "Metal",
      color: "Black",
      size: "Medium",
      style: "industrial",
      popular: 85,
      newest: 1,
      image:
        "https://i.etsystatic.com/34705037/r/il/e6fbee/7524212685/il_1588xN.7524212685_971u.jpg",
    },
    {
      id: 103,
      name: "Emerald Gold Geode Resin Wall Clock, Handmade Statement Decor",
      subcategory: "wall-clock",
      price: 899,
      material: "Acrylic",
      color: "White",
      size: "Small",
      style: "modern",
      popular: 210,
      newest: 5,
      image:
        "https://i.etsystatic.com/32365247/r/il/38d2e1/7626635886/il_1588xN.7626635886_9ong.jpg",
    },
    {
      id: 104,
      name: "Large Wooden Wall Clock Vintage Roman Numeral Clock, Bamboo Farmhouse Wall Decor",
      subcategory: "wall-clock",
      price: 1899,
      material: "Wood",
      color: "Beige",
      size: "Large",
      style: "vintage",
      popular: 95,
      newest: 2,
      image:
        "https://i.etsystatic.com/64718721/r/il/511d00/7814875017/il_1588xN.7814875017_7yrv.jpg",
    },
    {
      id: 105,
      name: "Delta Clock Oak • Minimalist wooden wall clock • Modern home design • Unique decor",
      subcategory: "wall-clock",
      price: 1599,
      material: "Metal",
      color: "Gold",
      size: "Large",
      style: "modern",
      popular: 140,
      newest: 4,
      image:
        "https://i.etsystatic.com/44080229/r/il/6056cb/6675890781/il_1588xN.6675890781_7arh.jpg",
    },
    {
      id: 106,
      name: "Minimalist Design Large Wall Clock, Modern Unique Wall Clock Art",
      subcategory: "wall-clock",
      price: 1199,
      material: "Acrylic",
      color: "Black",
      size: "Small",
      style: "modern",
      popular: 60,
      newest: 6,
      image:
        "https://i.etsystatic.com/35571911/r/il/1f282a/7411981503/il_1588xN.7411981503_77jz.jpg",
    },
    {
      id: 107,
      name: "Nordic Wooden Wall Clock – Large Minimalist Round Silent Hanging Clock",
      subcategory: "wall-clock",
      price: 3299,
      material: "Metal",
      color: "Gold",
      size: "Large",
      style: "vintage",
      popular: 200,
      newest: 7,
      image:
        "https://i.etsystatic.com/64025687/r/il/19c00a/7693825536/il_1588xN.7693825536_kk3a.jpg",
    },
    {
      id: 108,
      name: "Japanese Bamboo Wall Clock – Silent Quartz Minimalist Natural Wood Decor",
      subcategory: "wall-clock",
      price: 2199,
      material: "Wood",
      color: "Brown",
      size: "Medium",
      style: "modern",
      popular: 180,
      newest: 8,
      image:
        "https://i.etsystatic.com/59405372/r/il/3577be/7738496626/il_1588xN.7738496626_o4hf.jpg",
    },

    {
      id: 109,
      name: "Modern LED Wall Clock – Minimalist Metal & Acrylic Silent Clock",
      subcategory: "wall-clock",
      price: 4199,
      material: "Wood",
      color: "Brown",
      size: "large",
      style: "modern",
      newest: 8,
      image:
        "https://i.etsystatic.com/64484747/r/il/e1921b/7692667042/il_1588xN.7692667042_ntd8.jpg",
    },

    // paintings
    {
      id: 201,
      name: "Mughal Floral Arch Print, Indian Wall Art, Oriental Botanical Poster, Jaipur Palace Fresco Design",
      subcategory: "paintings",
      price: 4299,
      material: "Canvas",
      color: "Blue",
      size: "Large",
      style: "abstract",
      popular: 210,
      newest: 9,
      image:
        "https://i.etsystatic.com/24426965/r/il/1a2154/7320284410/il_1588xN.7320284410_9gj3.jpg",
    },
    {
      id: 202,
      name: "Large Abstract Horse Oil Painting: Brown & Black Horse Wall Art",
      subcategory: "paintings",
      price: 3899,
      material: "Canvas",
      color: "Green",
      size: "Medium",
      style: "impressionist",
      popular: 134,
      newest: 3,
      image:
        "https://i.etsystatic.com/24877167/r/il/7ef537/6088607241/il_1588xN.6088607241_blvw.jpg",
    },
    {
      id: 203,
      name: "Textured Ocean Wave Oil Painting: 3D Impasto Coastal Art, Green Sea Decor",
      subcategory: "paintings",
      price: 5599,
      material: "Canvas",
      color: "Brown",
      size: "Large",
      style: "modern",
      popular: 87,
      newest: 7,
      image:
        "https://i.etsystatic.com/26843029/r/il/88f0f2/7070660187/il_1588xN.7070660187_q3xj.jpg",
    },
    {
      id: 204,
      name: "Pichwai Temple Art Print: Indian Secret Garden Wall Decor",
      subcategory: "paintings",
      price: 6799,
      material: "Canvas",
      color: "Gold",
      size: "Large",
      style: "abstract",
      popular: 260,
      newest: 2,
      image:
        "https://i.etsystatic.com/10724506/r/il/2bc592/6878046174/il_1588xN.6878046174_9421.jpg",
    },
    {
      id: 205,
      name: "Embrace of Love Abstract Canvas, Couple Silhouette, Modern Wall Art",
      subcategory: "paintings",
      price: 3199,
      material: "Canvas",
      color: "Blue",
      size: "Small",
      style: "impressionist",
      newest: 4,
      image:
        "https://i.etsystatic.com/63074056/r/il/661801/7566623964/il_1588xN.7566623964_63j0.jpg",
    },
    {
      id: 206,
      name: "Shiva Canvas Wall Art | Hindu God Framed Print",
      subcategory: "paintings",
      price: 4999,
      material: "Canvas",
      color: "Red",
      size: "Medium",
      style: "portrait",
      popular: 78,
      newest: 6,
      image:
        "https://i.etsystatic.com/40162017/r/il/919b83/7659067437/il_1588xN.7659067437_obif.jpg",
    },
    {
      id: 207,
      name: "Vintage Indian Elephant Art Print: Palace Illustration ",
      subcategory: "paintings",
      price: 3599,
      material: "Canvas",
      color: "Pink",
      size: "Medium",
      style: "vintage",
      popular: 145,
      newest: 5,
      image:
        "https://i.etsystatic.com/39179770/r/il/d0688f/5094260760/il_1588xN.5094260760_gfmt.jpg",
    },
    {
      id: 208,
      name: "Large 3D Flower Oil Painting On Canvas,Hand Painted Modern Art,Original Texture Flower Painting,3D Texture Floral Wall Art Living Room Decor",
      subcategory: "paintings",
      price: 2299,
      material: "Canvas",
      color: "Black",
      size: "large",
      style: "modern",
      popular: 92,
      newest: 8,
      image:
        "https://i.etsystatic.com/31828259/r/il/f88c47/6897046102/il_1588xN.6897046102_fzrs.jpg",
    },

    // wall sketches
    {
      id: 301,
      name: "Abstract Charcoal Woman Portrait | Emotional Pencil Sketch Canvas ",
      subcategory: "wall-sketch",
      price: 1599,
      material: "Paper",
      color: "Black",
      size: "Medium",
      style: "portrait",
      popular: 70,
      newest: 3,
      image:
        "https://i.etsystatic.com/51859104/r/il/b9655d/6932475264/il_1588xN.6932475264_g6gf.jpg",
    },
    {
      id: 302,
      name: "Minimalist Botanical Set of 2 Line Art Neutral Flower Digital Wall Art Prints",
      subcategory: "wall-sketch",
      price: 999,
      material: "Paper",
      color: "Green",
      size: "Small",
      style: "botanical",
      popular: 130,
      newest: 8,
      image:
        "https://i.etsystatic.com/53518994/r/il/4972f5/7261478818/il_1588xN.7261478818_4a34.jpg",
    },
    {
      id: 303,
      name: "Modern architecture sketch | Mid-century modern art print | Modernist architecture | Vintage Architecture drawing | modernism | wall art",
      subcategory: "wall-sketch",
      price: 2099,
      material: "Paper",
      color: "Gray",
      size: "Large",
      style: "urban",
      popular: 45,
      newest: 2,
      image:
        "https://i.etsystatic.com/39041396/r/il/251814/5330324204/il_1588xN.5330324204_4ohb.jpg",
    },
    {
      id: 304,
      name: "Alcohol Ink Floral Clipart, Dusty Blue Peach Flowers, Gold Foil Accents ",
      subcategory: "wall-sketch",
      price: 1299,
      material: "Paper",
      color: "Pink",
      size: "Small",
      style: "botanical",
      popular: 115,
      newest: 6,
      image:
        "https://i.etsystatic.com/64592979/r/il/fee8ed/7769880786/il_1588xN.7769880786_7lmr.jpg",
    },
    {
      id: 305,
      name: "Gustav Klimt Cityscape at Night Canvas, Illuminated Urban Reflection Wall Art, Golden Moonlight Venice Scene, Modern Artistic Home Decor",
      subcategory: "wall-sketch",
      price: 2499,
      material: "Paper",
      color: "Blue",
      size: "Large",
      style: "urban",
      popular: 88,
      newest: 4,
      image:
        "https://i.etsystatic.com/63174244/r/il/3cadd5/7647963080/il_1588xN.7647963080_9zln.jpg",
    },
    {
      id: 306,
      name: "Original Deer Oil Painting Large Wall Art Rustic Animal Wall Art Hand Painted Stag Head Canvas",
      subcategory: "wall-sketch",
      price: 1799,
      material: "Paper",
      color: "Brown",
      size: "Medium",
      style: "portrait",
      popular: 102,
      newest: 5,
      image:
        "https://i.etsystatic.com/34749223/r/il/75a8cc/6955947210/il_1588xN.6955947210_5qxx.jpg",
    },

    // jharokas
    {
      id: 401,
      name: "Bone Inlay Jharokha Mirror / Floral Handcrafted Wall Decor",
      subcategory: "jharokas",
      price: 7999,
      material: "Wood",
      color: "Brown",
      size: "Large",
      style: "traditional",
      popular: 145,
      newest: 5,
      image:
        "https://i.etsystatic.com/21360287/r/il/f1f52b/6656261430/il_1588xN.6656261430_q3oo.jpg",
    },
    {
      id: 402,
      name: "Hand-Carved Wooden Jharokha Window Frame – Rustic Indian Wall Décor",
      subcategory: "jharokas",
      price: 12499,
      material: "Brass",
      color: "Gold",
      size: "Medium",
      style: "ornate",
      popular: 60,
      newest: 2,
      image:
        "https://i.etsystatic.com/48701049/r/il/3bd6b1/7450079728/il_1588xN.7450079728_91hd.jpg",
    },
    {
      id: 403,
      name: "Wood Jharokha with Accent (18 inch , Medium, Gold)",
      subcategory: "jharokas",
      price: 9999,
      material: "Wood",
      color: "Brown",
      size: "Large",
      style: "traditional",
      popular: 190,
      newest: 8,
      image:
        "https://m.media-amazon.com/images/I/51+Bg5kefuL._SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
      id: 404,
      name: "Jharokha with Motif pair - 18 inch, Medium, Gold",
      subcategory: "jharokas",
      price: 13999,
      material: "Brass",
      color: "Gold",
      size: "Large",
      style: "ornate",
      popular: 85,
      newest: 4,
      image:
        "https://diybaazar.com/publicuploads/seller/products/jharokha-with-boota-pair-1-1_1743937313.jpg",
    },
    {
      id: 405,
      name: "Miniature Balcony Jharokha, large, wooden",
      subcategory: "jharokas",
      price: 5999,
      material: "Wood",
      color: "Beige",
      size: "Small",
      style: "traditional",
      popular: 110,
      newest: 3,
      image:
        "https://scontent.fpnq7-3.fna.fbcdn.net/v/t39.30808-6/612027347_1401359288450110_1347968157117020345_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=kyxpdFILoLsQ7kNvwECb8Ji&_nc_oc=AdlPIP1nkvGCFlja36X5XfSKm_fr86iFoPUJuLWIT4SMRClmKpgli8AVQYbCh8jwXvZwH1BeD9Sn8L0sL2oNtk99&_nc_zt=23&_nc_ht=scontent.fpnq7-3.fna&_nc_gid=13R0r4N-w7bAu9Lj1wKrdg&_nc_ss=8&oh=00_AfzS2viMlTllV5jxn15xrxjDzQEgHZyWo1YQLTu8aWZ0IA&oe=69B9BB60",
    },
    {
      id: 406,
      name: "Pichhwai Lotus Jharokha Art Prints: Traditional Indian Decor ",
      subcategory: "jharokas",
      price: 15999,
      material: "Wood",
      color: "Dark Brown",
      size: "Large",
      style: "ornate",
      popular: 205,
      newest: 6,
      image:
        "https://i.etsystatic.com/54738220/r/il/480ba0/7210807331/il_1588xN.7210807331_nbxw.jpg",
    },

    // metal wall hangings
    {
      id: 501,
      name: "Goldfern Metal Wall Accent - Set Of Three",
      subcategory: "metal-wall-hangings",
      price: 3499,
      material: "Metal",
      color: "Black",
      size: "Large",
      style: "modern",
      popular: 89,
      newest: 4,
      image:
        "https://cdn.shopify.com/s/files/1/0632/2526/6422/files/9100000045771_6.jpg?v=1771489110&width=4320",
    },
    {
      id: 502,
      name: "FINE DECOR Decorative Metal Wall Art Wall Decor Sculpture Set of 1 | Wall Sculpture Wall Hanging Showpiece for Living Room Bedroom Drawing Room Dining Room Office Decoration",
      subcategory: "metal-wall-hangings",
      price: 4299,
      material: "Metal",
      color: "Gold",
      size: "Medium",
      style: "modern",
      popular: 120,
      newest: 3,
      image: "https://m.media-amazon.com/images/I/717lPel5ZRL._SX522_.jpg",
    },

    {
      id: 503,
      name: "Buy Rustic Metal Cycle under Purple Leaves Tree with LED Lights Online",
      subcategory: "metal-wall-hangings",
      price: 4299,
      material: "Metal",
      color: "Gold",
      size: "Medium",
      style: "modern",
      popular: 120,
      image:
        "https://metalwalldecor.in/wp-content/uploads/2023/11/Large-Metal-Wall-Art-Cycle-Under-Purple-Tree-with-L.webp",
    },

    // wallpapers
    {
      id: 601,
      name: "Floral Bird Wallpaper: Vintage Botanical Wall Mural",
      subcategory: "wallpapers",
      price: 2999,
      material: "Paper",
      color: "Pink",
      size: "Roll",
      style: "floral",
      popular: 156,
      newest: 7,
      image:
        "https://www.kalakaarihaath.com/cdn/shop/files/TheRoyalApprentice_aqua_2.jpg?v=1768403784&width=1280",
    },
    {
      id: 602,
      name: "Elegant Gold Line Art Peony Wallpaper on Cream - Peel and Stick - D144",
      subcategory: "wallpapers",
      price: 3299,
      material: "Vinyl",
      color: "Blue",
      size: "Roll",
      style: "modern",
      popular: 98,
      newest: 5,
      image:
        "https://i.etsystatic.com/15639703/r/il/d45fb4/4997090418/il_1588xN.4997090418_6dst.jpg",
    },

    // handmade paintings
    {
      id: 701,
      name: "Folk Art Painting",
      subcategory: "handmade-paintings",
      price: 5499,
      material: "Canvas",
      color: "Multicolor",
      size: "Medium",
      style: "folk",
      popular: 92,
      newest: 2,
      image: "https://placehold.co/400x300/3c6b7a/ffffff?text=🎨+Handmade",
    },
    {
      id: 702,
      name: "Tribal Art",
      subcategory: "handmade-paintings",
      price: 6299,
      material: "Canvas",
      color: "Brown",
      size: "Large",
      style: "tribal",
      popular: 76,
      newest: 6,
      image: "https://placehold.co/400x300/2d7a6b/ffffff?text=🗿+Tribal",
    },

    // digital canvas prints
    {
      id: 801,
      name: "Digital Art Print",
      subcategory: "digital-canvas-prints",
      price: 1999,
      material: "Canvas",
      color: "Blue",
      size: "Medium",
      style: "modern",
      popular: 145,
      newest: 6,
      image: "https://placehold.co/400x300/2f6b7c/ffffff?text=🖨️+Digital+Print",
    },
    {
      id: 802,
      name: "Abstract Digital Art",
      subcategory: "digital-canvas-prints",
      price: 2499,
      material: "Canvas",
      color: "Purple",
      size: "Large",
      style: "abstract",
      popular: 112,
      newest: 4,
      image: "https://placehold.co/400x300/3d6b8c/ffffff?text=🎨+Digital+Art",
    },

    // brass wall hangings
    {
      id: 901,
      name: "Brass Temple Bells",
      subcategory: "brass-wall-hangings",
      price: 4499,
      material: "Brass",
      color: "Gold",
      size: "Medium",
      style: "traditional",
      popular: 178,
      newest: 3,
      image: "https://placehold.co/400x300/4d6b5c/ffffff?text=🔔+Brass+Bells",
    },
    {
      id: 902,
      name: "Brass Wall Mask",
      subcategory: "brass-wall-hangings",
      price: 5999,
      material: "Brass",
      color: "Gold",
      size: "Large",
      style: "traditional",
      popular: 134,
      newest: 5,
      image: "https://placehold.co/400x300/3d7a5c/ffffff?text=🎭+Brass+Mask",
    },
  ];

  // Get subcategory from URL
  const urlParams = new URLSearchParams(window.location.search);
  let currentSub = urlParams.get("sub") || "wall-clock";

  // State management
  // State management - UPDATE THIS SECTION
  let wishlist = JSON.parse(localStorage.getItem("artezowishlist")) || [];
  let cart = JSON.parse(localStorage.getItem("artezocart")) || [];
  let activeFilters = {
    material: null,
    style: null,
    color: null,
    size: null,
    shape: null,
    setPieces: null,
    priceRange: null,
  };
  let sortOption = "default";

  // DOM elements
  const grid = document.getElementById("productGrid");
  const skeleton = document.getElementById("skeletonGrid");
  const emptyState = document.getElementById("emptyState");
  const emptyReset = document.getElementById("emptyResetBtn");
  const desktopFilterDiv = document.getElementById("desktopFilterContainer");
  const mobileFilterContent = document.getElementById("mobileFilterContent");
  const mobileToggle = document.getElementById("mobileFilterToggle");
  const mobileDrawer = document.getElementById("mobileFilterDrawer");
  const closeMobile = document.getElementById("closeMobileFilter");
  const mobileApply = document.getElementById("mobileApplyFilters");
  const resetFiltersBtn = document.getElementById("resetFiltersBtn");
  const applyFiltersBtn = document.getElementById("applyFiltersBtn");
  const sortSelect = document.getElementById("sortSelect");
  const productCountSpan = document.getElementById("productCount");
  const toast = document.getElementById("toast");
  const tabsContainer = document.getElementById("subcategoryTabs");

  // ========== DYNAMIC SUBCATEGORY FUNCTIONS ==========

  // Render subcategory tabs dynamically
  function renderSubcategoryTabs() {
    if (!tabsContainer) return;

    let tabsHtml = "";

    subcategories.forEach((sub) => {
      const isActive = sub.id === currentSub;
      const activeClasses = isActive
        ? "bg-[#1D3C4A] text-white border-[#1D3C4A] shadow-md"
        : "bg-white text-gray-700 border-gray-200 hover:bg-[#e39f32] hover:text-white hover:border-[#e39f32]";

      tabsHtml += `
                <a href="?cat=wall-decor&sub=${sub.id}"
                    class="subcat-link px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${activeClasses} flex items-center gap-2 flex-shrink-0"
                    data-sub="${sub.id}">
                    <i class="${sub.icon} ${isActive ? "text-[#e39f32]" : ""}"></i>
                    ${sub.name}
                </a>
            `;
    });

    tabsContainer.innerHTML = tabsHtml;
    attachSubcategoryListeners();
  }

  // Attach click handlers to subcategory tabs
  function attachSubcategoryListeners() {
    document.querySelectorAll(".subcat-link").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const sub = this.dataset.sub;
        const newUrl = "?cat=wall-decor&sub=" + sub;
        window.history.pushState({}, "", newUrl);

        currentSub = sub;

        // Update active state of tabs
        document.querySelectorAll(".subcat-link").forEach((l) => {
          l.classList.remove(
            "bg-[#1D3C4A]",
            "text-white",
            "border-[#1D3C4A]",
            "shadow-md",
          );
          l.classList.add("bg-white", "text-gray-700", "border-gray-200");
          l.querySelector("i")?.classList.remove("text-[#e39f32]");
        });

        this.classList.remove("bg-white", "text-gray-700", "border-gray-200");
        this.classList.add(
          "bg-[#1D3C4A]",
          "text-white",
          "border-[#1D3C4A]",
          "shadow-md",
        );
        this.querySelector("i")?.classList.add("text-[#e39f32]");

        // Update header
        updateCategoryHeader(sub);

        // Reset filters and reload products
        resetFiltersAndReload(sub);
      });
    });
  }

  // Update header based on subcategory
  function updateCategoryHeader(sub) {
    const subData = subcategories.find((s) => s.id === sub);
    if (subData) {
      document.getElementById("categoryTitle").innerText = subData.name;
      document.getElementById("categoryDescription").innerText = subData.desc;
      document.getElementById("breadcrumbSub").innerText = subData.name;
    }
  }

  // Reset filters and reload products for new subcategory
  function resetFiltersAndReload(sub) {
    activeFilters = {
      material: null,
      color: null,
      size: null,
      priceRange: null,
    };
    sortOption = "default";
    if (sortSelect) sortSelect.value = "default";

    buildFilterUI();
    const filtered = getFilteredProducts();

    // Show skeleton while loading
    if (skeleton) {
      skeleton.style.display = "grid";
      grid.classList.add("hidden");
    }

    setTimeout(() => {
      if (skeleton) skeleton.style.display = "none";
      renderProducts(filtered);
    }, 400);
  }

  // Filter and sort products - UPDATED with more filter options
  function getFilteredProducts() {
    let filtered = allProducts.filter((p) => p.subcategory === currentSub);

    if (activeFilters.material) {
      filtered = filtered.filter((p) => p.material === activeFilters.material);
    }
    if (activeFilters.style) {
      filtered = filtered.filter((p) => p.style === activeFilters.style);
    }
    if (activeFilters.color) {
      filtered = filtered.filter((p) => p.color === activeFilters.color);
    }
    if (activeFilters.size) {
      filtered = filtered.filter((p) => p.size === activeFilters.size);
    }
    if (activeFilters.shape) {
      filtered = filtered.filter(
        (p) =>
          p.name?.toLowerCase().includes(activeFilters.shape.toLowerCase()) ||
          p.style?.toLowerCase().includes(activeFilters.shape.toLowerCase()),
      );
    }
    if (activeFilters.setPieces) {
      filtered = filtered.filter(
        (p) =>
          p.name?.includes(activeFilters.setPieces) ||
          p.size?.includes(activeFilters.setPieces),
      );
    }
    if (activeFilters.priceRange) {
      if (activeFilters.priceRange === "under2000") {
        filtered = filtered.filter((p) => p.price < 2000);
      } else if (activeFilters.priceRange === "2000-5000") {
        filtered = filtered.filter((p) => p.price >= 2000 && p.price <= 5000);
      } else if (activeFilters.priceRange === "5000-10000") {
        filtered = filtered.filter((p) => p.price >= 5000 && p.price <= 10000);
      } else if (activeFilters.priceRange === "above10000") {
        filtered = filtered.filter((p) => p.price > 10000);
      }
    }

    // Sorting
    if (sortOption === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "newest") {
      filtered.sort((a, b) => b.newest - a.newest);
    } else if (sortOption === "popular") {
      filtered.sort((a, b) => b.popular - a.popular);
    }

    return filtered;
  }
  // Render products - UPDATED VERSION with improved card UI
 // Render products - UPDATED VERSION with clickable cards
function renderProducts(products) {
  if (!grid) return;

  if (products.length === 0) {
    grid.classList.add("hidden");
    if (emptyState) emptyState.classList.remove("hidden");
    if (productCountSpan) productCountSpan.innerText = "0 items";
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");
  grid.classList.remove("hidden");

  let html = "";
  products.forEach((p) => {
    const wished = wishlist.includes(p.id)
      ? "wishlist-active"
      : "text-gray-300";
    const heartIcon = wishlist.includes(p.id)
      ? "fas fa-heart"
      : "far fa-heart";

    // Calculate random discount for demo (in real app, this would come from database)
    const mrp = Math.round(p.price * 1.35); // 35% higher than selling price
    const discount = Math.round(((mrp - p.price) / mrp) * 100);

    // Determine badge based on product popularity or other attributes
    let badge = "";
    if (p.popular > 150) {
      badge =
        '<span class="absolute top-2 left-2 bg-[#e39f32] text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-md">BESTSELLER</span>';
    } else if (p.newest <= 3) {
      badge =
        '<span class="absolute top-2 left-2 bg-[#1D3C4A] text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-md">NEW</span>';
    } else if (
      p.style === "handmade" ||
      p.style === "traditional" ||
      p.style === "vintage"
    ) {
      badge =
        '<span class="absolute top-2 left-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-md">HANDCRAFTED</span>';
    } else if (discount >= 30) {
      badge =
        '<span class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-md">' +
        discount +
        "% OFF</span>";
    }

    // Make the entire card clickable with cursor-pointer class
    html +=
      '<div class="bg-white border border-gray-200 rounded-xl overflow-hidden hover-scale flex flex-col shadow-sm group cursor-pointer" data-id="' +
      p.id +
      '" onclick="window.location.href=\'../Product-Details/product-detail.html?id=' + p.id + '\'">';
    html +=
      '<div class="aspect-square bg-gray-100 relative overflow-hidden">';
    html +=
      '<img src="' +
      p.image +
      '" alt="' +
      p.name +
      '" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">';
    html += badge;
    html +=
      '<button class="wishlist-btn absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-white hover:shadow-lg transition-all duration-300 z-20" data-id="' +
      p.id +
      '" onclick="event.stopPropagation();">';
    html +=
      '<i class="' +
      heartIcon +
      " " +
      wished +
      ' text-lg hover:scale-110 transition-transform"></i>';
    html += "</button>";
    html += "</div>";
    html += '<div class="p-4 flex-1 flex flex-col">';

    // Product name with better typography
    html +=
      '<h3 class="font-medium text-gray-800 text-sm mb-2 line-clamp-2 min-h-[40px]">' +
      p.name +
      "</h3>";

    // Price section with MRP and discount
    html += '<div class="mb-3">';
    html += '<div class="flex items-baseline gap-2 flex-wrap">';
    html +=
      '<span class="font-bold text-lg" style="color:#1D3C4A;">₹' +
      p.price.toLocaleString() +
      "</span>";
    html +=
      '<span class="text-xs text-gray-400 line-through">₹' +
      mrp.toLocaleString() +
      "</span>";
    html +=
      '<span class="text-xs font-semibold text-green-600">' +
      discount +
      "% off</span>";
    html += "</div>";

    // Material/size indicator as chips
    html += '<div class="flex flex-wrap gap-1 mt-2">';
    if (p.material) {
      html +=
        '<span class="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">' +
        p.material +
        "</span>";
    }
    if (p.size) {
      html +=
        '<span class="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">' +
        p.size +
        "</span>";
    }
    html += "</div>";
    html += "</div>";

    // Add to cart button with improved styling - prevent propagation to avoid triggering card click
    html +=
      '<button class="add-cart-btn mt-auto w-full bg-gray-100 hover:bg-[#1D3C4A] hover:text-white transition-all duration-300 text-gray-800 text-sm py-3 rounded-lg border border-gray-200 flex items-center justify-center gap-2 font-medium" onclick="event.stopPropagation();">';
    html +=
      '<i class="fas fa-shopping-cart text-xs" style="color:#e39f32;"></i> Add to Cart';
    html += "</button>";
    html += "</div>";
    html += "</div>";
  });

  grid.innerHTML = html;

  // Wishlist toggles
  document.querySelectorAll(".wishlist-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent card click
      const pid = Number(this.dataset.id);
      const icon = this.querySelector("i");

      if (wishlist.includes(pid)) {
        wishlist = wishlist.filter((id) => id !== pid);
        icon.className = "far fa-heart text-gray-300";
      } else {
        wishlist.push(pid);
        icon.className = "fas fa-heart wishlist-active";
        icon.style.color = "#e39f32";
      }
      persistWishlist();
    });
  });

  // Add to cart
  document.querySelectorAll(".add-cart-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent card click
      const card = this.closest("[data-id]");
      const productId = card ? Number(card.dataset.id) : null;

      if (productId && !cart.includes(productId)) {
        cart.push(productId);
      }

      persistCart();
      showToast("Added to cart");

      // Visual feedback
      this.style.backgroundColor = "#1D3C4A";
      this.style.color = "white";

      setTimeout(() => {
        this.style.backgroundColor = "";
        this.style.color = "";
      }, 200);
    });
  });

  if (productCountSpan)
    productCountSpan.innerText = products.length + " items";
}
  // Build filter UI - UPDATED with more dynamic filter options
  function buildFilterUI() {
    if (!desktopFilterDiv) return;

    const catProducts = allProducts.filter((p) => p.subcategory === currentSub);

    // Extract all possible filter attributes
    const materials = [
      ...new Set(catProducts.map((p) => p.material).filter(Boolean)),
    ];
    const colors = [
      ...new Set(catProducts.map((p) => p.color).filter(Boolean)),
    ];
    const sizes = [...new Set(catProducts.map((p) => p.size).filter(Boolean))];
    const styles = [
      ...new Set(catProducts.map((p) => p.style).filter(Boolean)),
    ];

    // New filter types - extract from product data or define based on subcategory
    let shapes = [];
    let setPieces = [];

    // Dynamic filter options based on subcategory
    if (currentSub === "wall-clock") {
      shapes = ["Round", "Square", "Octagonal", "Hexagonal"];
      // Filter shapes based on actual products
      shapes = shapes.filter((shape) =>
        catProducts.some(
          (p) =>
            p.name?.includes(shape) || p.style?.includes(shape.toLowerCase()),
        ),
      );
    } else if (currentSub === "paintings") {
      setPieces = ["Single", "Set of 2", "Set of 3", "Set of 4", "Triptych"];
      // Filter set pieces based on actual products
      setPieces = setPieces.filter((piece) =>
        catProducts.some(
          (p) => p.name?.includes(piece) || p.size?.includes(piece),
        ),
      );
    }

    let html = `<div class="space-y-4">`;

    // Price Range Filter (always show)
    html += `
        <div class="filter-section border-b border-gray-100 pb-3">
            <button class="filter-toggle flex items-center justify-between w-full text-left mb-2 group" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180');">
                <h4 class="font-medium text-sm" style="color:#1D3C4A;">Price Range</h4>
                <i class="fas fa-chevron-down text-xs transition-transform duration-300" style="color:#e39f32;"></i>
            </button>
            <div class="filter-options">
                <select id="priceRangeSelect" class="w-full border border-gray-200 rounded-lg p-2.5 text-sm bg-gray-50 focus:border-[#e39f32] focus:ring-1 focus:ring-[#e39f32] outline-none transition">
                    <option value="">All prices</option>
                    <option value="under2000" ${activeFilters.priceRange === "under2000" ? "selected" : ""}>Under ₹2,000</option>
                    <option value="2000-5000" ${activeFilters.priceRange === "2000-5000" ? "selected" : ""}>₹2,000 - ₹5,000</option>
                    <option value="5000-10000" ${activeFilters.priceRange === "5000-10000" ? "selected" : ""}>₹5,000 - ₹10,000</option>
                    <option value="above10000" ${activeFilters.priceRange === "above10000" ? "selected" : ""}>Above ₹10,000</option>
                </select>
            </div>
        </div>
    `;

    // Material filter
    if (materials.length) {
      html += `
            <div class="filter-section border-b border-gray-100 pb-3">
                <button class="filter-toggle flex items-center justify-between w-full text-left mb-2 group" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180');">
                    <h4 class="font-medium text-sm" style="color:#1D3C4A;">Material</h4>
                    <i class="fas fa-chevron-down text-xs transition-transform duration-300" style="color:#e39f32;"></i>
                </button>
                <div class="filter-options space-y-2">
        `;

      materials.forEach((m) => {
        const count = catProducts.filter((p) => p.material === m).length;
        const isActive = activeFilters.material === m;
        const activeClass = isActive
          ? "text-[#e39f32] font-medium"
          : "text-gray-600";

        html += `
                <label class="flex items-center justify-between text-sm mb-2 cursor-pointer group hover:bg-gray-50 p-1 rounded transition-colors">
                    <div class="flex items-center gap-2">
                        <input type="radio" name="material" value="${m}" 
                            ${isActive ? "checked" : ""} 
                            class="w-4 h-4 accent-[#e39f32] cursor-pointer">
                        <span class="${activeClass} group-hover:text-[#1D3C4A] transition-colors">${m}</span>
                    </div>
                    <span class="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">${count}</span>
                </label>
            `;
      });

      html += `</div></div>`;
    }

    // Style filter
    if (styles.length) {
      html += `
            <div class="filter-section border-b border-gray-100 pb-3">
                <button class="filter-toggle flex items-center justify-between w-full text-left mb-2 group" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180');">
                    <h4 class="font-medium text-sm" style="color:#1D3C4A;">Style</h4>
                    <i class="fas fa-chevron-down text-xs transition-transform duration-300" style="color:#e39f32;"></i>
                </button>
                <div class="filter-options space-y-2">
        `;

      styles.forEach((s) => {
        const count = catProducts.filter((p) => p.style === s).length;
        const isActive = activeFilters.style === s;
        const activeClass = isActive
          ? "text-[#e39f32] font-medium"
          : "text-gray-600";

        html += `
                <label class="flex items-center justify-between text-sm mb-2 cursor-pointer group hover:bg-gray-50 p-1 rounded transition-colors">
                    <div class="flex items-center gap-2">
                        <input type="radio" name="style" value="${s}" 
                            ${isActive ? "checked" : ""} 
                            class="w-4 h-4 accent-[#e39f32] cursor-pointer">
                        <span class="${activeClass} group-hover:text-[#1D3C4A] transition-colors">${s}</span>
                    </div>
                    <span class="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">${count}</span>
                </label>
            `;
      });

      html += `</div></div>`;
    }

    // Color filter
    if (colors.length) {
      html += `
            <div class="filter-section border-b border-gray-100 pb-3">
                <button class="filter-toggle flex items-center justify-between w-full text-left mb-2 group" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180');">
                    <h4 class="font-medium text-sm" style="color:#1D3C4A;">Color</h4>
                    <i class="fas fa-chevron-down text-xs transition-transform duration-300" style="color:#e39f32;"></i>
                </button>
                <div class="filter-options space-y-2">
        `;

      colors.forEach((c) => {
        const count = catProducts.filter((p) => p.color === c).length;
        const isActive = activeFilters.color === c;
        const activeClass = isActive
          ? "text-[#e39f32] font-medium"
          : "text-gray-600";

        // Color swatch mapping
        const colorSwatch = c.toLowerCase().includes("gold")
          ? "#e39f32"
          : c.toLowerCase().includes("brown")
            ? "#8B4513"
            : c.toLowerCase().includes("black")
              ? "#000000"
              : c.toLowerCase().includes("white")
                ? "#FFFFFF"
                : c.toLowerCase().includes("blue")
                  ? "#0000FF"
                  : c.toLowerCase().includes("green")
                    ? "#008000"
                    : c.toLowerCase().includes("red")
                      ? "#FF0000"
                      : c.toLowerCase().includes("pink")
                        ? "#FFC0CB"
                        : c.toLowerCase().includes("beige")
                          ? "#F5F5DC"
                          : c.toLowerCase().includes("purple")
                            ? "#800080"
                            : c.toLowerCase().includes("multicolor")
                              ? "linear-gradient(45deg, #FF0000, #00FF00, #0000FF)"
                              : "#CCCCCC";

        html += `
                <label class="flex items-center justify-between text-sm mb-2 cursor-pointer group hover:bg-gray-50 p-1 rounded transition-colors">
                    <div class="flex items-center gap-2">
                        <input type="radio" name="color" value="${c}" 
                            ${isActive ? "checked" : ""} 
                            class="w-4 h-4 accent-[#e39f32] cursor-pointer">
                        <span class="w-3 h-3 rounded-full border border-gray-200" style="background: ${colorSwatch};"></span>
                        <span class="${activeClass} group-hover:text-[#1D3C4A] transition-colors">${c}</span>
                    </div>
                    <span class="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">${count}</span>
                </label>
            `;
      });

      html += `</div></div>`;
    }

    // Size filter
    if (sizes.length) {
      html += `
            <div class="filter-section border-b border-gray-100 pb-3">
                <button class="filter-toggle flex items-center justify-between w-full text-left mb-2 group" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180');">
                    <h4 class="font-medium text-sm" style="color:#1D3C4A;">Size</h4>
                    <i class="fas fa-chevron-down text-xs transition-transform duration-300" style="color:#e39f32;"></i>
                </button>
                <div class="filter-options space-y-2">
        `;

      sizes.forEach((s) => {
        const count = catProducts.filter((p) => p.size === s).length;
        const isActive = activeFilters.size === s;
        const activeClass = isActive
          ? "text-[#e39f32] font-medium"
          : "text-gray-600";

        html += `
                <label class="flex items-center justify-between text-sm mb-2 cursor-pointer group hover:bg-gray-50 p-1 rounded transition-colors">
                    <div class="flex items-center gap-2">
                        <input type="radio" name="size" value="${s}" 
                            ${isActive ? "checked" : ""} 
                            class="w-4 h-4 accent-[#e39f32] cursor-pointer">
                        <span class="${activeClass} group-hover:text-[#1D3C4A] transition-colors">${s}</span>
                    </div>
                    <span class="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">${count}</span>
                </label>
            `;
      });

      html += `</div></div>`;
    }

    // Shape filter (for wall clocks)
    if (shapes.length) {
      html += `
            <div class="filter-section border-b border-gray-100 pb-3">
                <button class="filter-toggle flex items-center justify-between w-full text-left mb-2 group" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180');">
                    <h4 class="font-medium text-sm" style="color:#1D3C4A;">Shape</h4>
                    <i class="fas fa-chevron-down text-xs transition-transform duration-300" style="color:#e39f32;"></i>
                </button>
                <div class="filter-options space-y-2">
        `;

      shapes.forEach((shape) => {
        const count = catProducts.filter(
          (p) =>
            p.name?.includes(shape) || p.style?.includes(shape.toLowerCase()),
        ).length;
        html += `
                <label class="flex items-center justify-between text-sm mb-2 cursor-pointer group hover:bg-gray-50 p-1 rounded transition-colors">
                    <div class="flex items-center gap-2">
                        <input type="radio" name="shape" value="${shape}" class="w-4 h-4 accent-[#e39f32] cursor-pointer">
                        <span class="text-gray-600 group-hover:text-[#1D3C4A] transition-colors">${shape}</span>
                    </div>
                    <span class="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">${count}</span>
                </label>
            `;
      });

      html += `</div></div>`;
    }

    // Set Pieces filter (for paintings)
    if (setPieces.length) {
      html += `
            <div class="filter-section border-b border-gray-100 pb-3">
                <button class="filter-toggle flex items-center justify-between w-full text-left mb-2 group" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180');">
                    <h4 class="font-medium text-sm" style="color:#1D3C4A;">Set Pieces</h4>
                    <i class="fas fa-chevron-down text-xs transition-transform duration-300" style="color:#e39f32;"></i>
                </button>
                <div class="filter-options space-y-2">
        `;

      setPieces.forEach((piece) => {
        const count = catProducts.filter(
          (p) => p.name?.includes(piece) || p.size?.includes(piece),
        ).length;
        html += `
                <label class="flex items-center justify-between text-sm mb-2 cursor-pointer group hover:bg-gray-50 p-1 rounded transition-colors">
                    <div class="flex items-center gap-2">
                        <input type="radio" name="setPieces" value="${piece}" class="w-4 h-4 accent-[#e39f32] cursor-pointer">
                        <span class="text-gray-600 group-hover:text-[#1D3C4A] transition-colors">${piece}</span>
                    </div>
                    <span class="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">${count}</span>
                </label>
            `;
      });

      html += `</div></div>`;
    }

    // Active filters summary
    const activeFilterCount = Object.values(activeFilters).filter(
      (v) => v !== null,
    ).length;
    if (activeFilterCount > 0) {
      html += `
            <div class="mt-4 pt-2 border-t border-gray-100">
                <div class="flex items-center gap-2 mb-2">
                    <span class="text-xs font-medium text-gray-500">ACTIVE FILTERS</span>
                    <span class="text-xs bg-[#e39f32] text-white px-2 py-0.5 rounded-full">${activeFilterCount}</span>
                </div>
                <div class="flex flex-wrap gap-2">
        `;

      if (activeFilters.material) {
        html += `<span class="inline-flex items-center gap-1 text-xs bg-gray-100 px-3 py-1.5 rounded-full text-gray-700 border border-gray-200"><span style="color:#1D3C4A;">Material:</span> ${activeFilters.material} <button class="ml-1 text-gray-400 hover:text-[#e39f32]" onclick="document.querySelector('input[name=\\'material\\']:checked')?.click(); activeFilters.material = null; applyFiltersAndRender();"><i class="fas fa-times"></i></button></span>`;
      }
      if (activeFilters.style) {
        html += `<span class="inline-flex items-center gap-1 text-xs bg-gray-100 px-3 py-1.5 rounded-full text-gray-700 border border-gray-200"><span style="color:#1D3C4A;">Style:</span> ${activeFilters.style} <button class="ml-1 text-gray-400 hover:text-[#e39f32]" onclick="document.querySelector('input[name=\\'style\\']:checked')?.click(); activeFilters.style = null; applyFiltersAndRender();"><i class="fas fa-times"></i></button></span>`;
      }
      if (activeFilters.color) {
        html += `<span class="inline-flex items-center gap-1 text-xs bg-gray-100 px-3 py-1.5 rounded-full text-gray-700 border border-gray-200"><span style="color:#1D3C4A;">Color:</span> ${activeFilters.color} <button class="ml-1 text-gray-400 hover:text-[#e39f32]" onclick="document.querySelector('input[name=\\'color\\']:checked')?.click(); activeFilters.color = null; applyFiltersAndRender();"><i class="fas fa-times"></i></button></span>`;
      }
      if (activeFilters.size) {
        html += `<span class="inline-flex items-center gap-1 text-xs bg-gray-100 px-3 py-1.5 rounded-full text-gray-700 border border-gray-200"><span style="color:#1D3C4A;">Size:</span> ${activeFilters.size} <button class="ml-1 text-gray-400 hover:text-[#e39f32]" onclick="document.querySelector('input[name=\\'size\\']:checked')?.click(); activeFilters.size = null; applyFiltersAndRender();"><i class="fas fa-times"></i></button></span>`;
      }
      if (activeFilters.shape) {
        html += `<span class="inline-flex items-center gap-1 text-xs bg-gray-100 px-3 py-1.5 rounded-full text-gray-700 border border-gray-200"><span style="color:#1D3C4A;">Shape:</span> ${activeFilters.shape} <button class="ml-1 text-gray-400 hover:text-[#e39f32]" onclick="document.querySelector('input[name=\\'shape\\']:checked')?.click(); activeFilters.shape = null; applyFiltersAndRender();"><i class="fas fa-times"></i></button></span>`;
      }
      if (activeFilters.setPieces) {
        html += `<span class="inline-flex items-center gap-1 text-xs bg-gray-100 px-3 py-1.5 rounded-full text-gray-700 border border-gray-200"><span style="color:#1D3C4A;">Set:</span> ${activeFilters.setPieces} <button class="ml-1 text-gray-400 hover:text-[#e39f32]" onclick="document.querySelector('input[name=\\'setPieces\\']:checked')?.click(); activeFilters.setPieces = null; applyFiltersAndRender();"><i class="fas fa-times"></i></button></span>`;
      }
      if (activeFilters.priceRange) {
        const priceText =
          {
            under2000: "Under ₹2000",
            "2000-5000": "₹2000-5000",
            "5000-10000": "₹5000-10000",
            above10000: "Above ₹10000",
          }[activeFilters.priceRange] || activeFilters.priceRange;
        html += `<span class="inline-flex items-center gap-1 text-xs bg-gray-100 px-3 py-1.5 rounded-full text-gray-700 border border-gray-200"><span style="color:#1D3C4A;">Price:</span> ${priceText} <button class="ml-1 text-gray-400 hover:text-[#e39f32]" onclick="document.getElementById('priceRangeSelect').value = ''; activeFilters.priceRange = null; applyFiltersAndRender();"><i class="fas fa-times"></i></button></span>`;
      }

      html += `</div></div>`;
    }

    html += `</div>`;

    desktopFilterDiv.innerHTML = html;
    if (mobileFilterContent) mobileFilterContent.innerHTML = html;

    // Initialize all sections as open by default
    document.querySelectorAll(".filter-options").forEach((section) => {
      section.classList.remove("hidden");
    });
  }

  // Read filter values - UPDATED with new filters
  function readFilters() {
    const materialRadio = document.querySelector(
      'input[name="material"]:checked',
    );
    const styleRadio = document.querySelector('input[name="style"]:checked');
    const colorRadio = document.querySelector('input[name="color"]:checked');
    const sizeRadio = document.querySelector('input[name="size"]:checked');
    const shapeRadio = document.querySelector('input[name="shape"]:checked');
    const setPiecesRadio = document.querySelector(
      'input[name="setPieces"]:checked',
    );
    const priceSelect = document.getElementById("priceRangeSelect");

    activeFilters.material = materialRadio ? materialRadio.value : null;
    activeFilters.style = styleRadio ? styleRadio.value : null;
    activeFilters.color = colorRadio ? colorRadio.value : null;
    activeFilters.size = sizeRadio ? sizeRadio.value : null;
    activeFilters.shape = shapeRadio ? shapeRadio.value : null;
    activeFilters.setPieces = setPiecesRadio ? setPiecesRadio.value : null;
    activeFilters.priceRange = priceSelect ? priceSelect.value : null;
  }
  // Reset filters - UPDATED
  function resetFilters() {
    activeFilters = {
      material: null,
      style: null,
      color: null,
      size: null,
      shape: null,
      setPieces: null,
      priceRange: null,
    };
    buildFilterUI();
    applyFiltersAndRender();
  }

  // Read filter values
  function readFilters() {
    const materialRadio = document.querySelector(
      'input[name="material"]:checked',
    );
    const styleRadio = document.querySelector('input[name="style"]:checked');
    const colorRadio = document.querySelector('input[name="color"]:checked');
    const sizeRadio = document.querySelector('input[name="size"]:checked');
    const priceSelect = document.getElementById("priceRangeSelect");

    activeFilters.material = materialRadio ? materialRadio.value : null;
    activeFilters.style = styleRadio ? styleRadio.value : null;
    activeFilters.color = colorRadio ? colorRadio.value : null;
    activeFilters.size = sizeRadio ? sizeRadio.value : null;
    activeFilters.priceRange = priceSelect ? priceSelect.value : null;
  }

  // Apply filters and render
  function applyFiltersAndRender() {
    readFilters();
    const filtered = getFilteredProducts();
    renderProducts(filtered);

    // Close mobile drawer
    if (mobileDrawer) {
      mobileDrawer.classList.add("opacity-0", "pointer-events-none");
      document
        .querySelector("#mobileFilterDrawer > div")
        ?.classList.remove("drawer-open");
    }
  }

  // Reset filters
  function resetFilters() {
    activeFilters = {
      material: null,
      style: null, // ADD THIS
      color: null,
      size: null,
      priceRange: null,
    };
    buildFilterUI();
    applyFiltersAndRender();
  }

  // Helper functions
  function showToast(msg) {
    if (!toast) return;
    toast.querySelector("span").innerText = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
  }

  function persistWishlist() {
    localStorage.setItem("artezowishlist", JSON.stringify(wishlist));
  }

  function persistCart() {
    localStorage.setItem("artezocart", JSON.stringify(cart));
  }

  // Initial load with skeleton
  function initPage() {
    // Render subcategory tabs
    renderSubcategoryTabs();

    // Update header
    updateCategoryHeader(currentSub);

    // Create skeleton items
    if (skeleton) {
      let skeletonHtml = "";
      for (let i = 0; i < 8; i++) {
        skeletonHtml += '<div class="skeleton-pulse rounded-xl h-64"></div>';
      }
      skeleton.innerHTML = skeletonHtml;
    }

    buildFilterUI();

    setTimeout(function () {
      if (skeleton) skeleton.style.display = "none";
      const filtered = getFilteredProducts();
      renderProducts(filtered);
    }, 400);
  }

  // Event listeners
  if (applyFiltersBtn)
    applyFiltersBtn.addEventListener("click", applyFiltersAndRender);
  if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", resetFilters);
  if (emptyReset) emptyReset.addEventListener("click", resetFilters);

  if (sortSelect) {
    sortSelect.addEventListener("change", function (e) {
      sortOption = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", function () {
      mobileDrawer.classList.remove("opacity-0", "pointer-events-none");
      document
        .querySelector("#mobileFilterDrawer > div")
        ?.classList.add("drawer-open");
    });
  }

  if (closeMobile && mobileDrawer) {
    closeMobile.addEventListener("click", function () {
      mobileDrawer.classList.add("opacity-0", "pointer-events-none");
      document
        .querySelector("#mobileFilterDrawer > div")
        ?.classList.remove("drawer-open");
    });
  }

  if (mobileApply) {
    mobileApply.addEventListener("click", function () {
      // Read from mobile
      const material = document.querySelector(
        '#mobileFilterContent input[name="material"]:checked',
      );
      const color = document.querySelector(
        '#mobileFilterContent input[name="color"]:checked',
      );
      const size = document.querySelector(
        '#mobileFilterContent input[name="size"]:checked',
      );
      const price = document.querySelector(
        "#mobileFilterContent #priceRangeSelect",
      );

      activeFilters.material = material ? material.value : null;
      activeFilters.color = color ? color.value : null;
      activeFilters.size = size ? size.value : null;
      activeFilters.priceRange = price ? price.value : null;

      // Rebuild desktop UI to sync
      buildFilterUI();
      applyFiltersAndRender();
    });
  }

  // Add CSS styles for the enhanced filter UI
  const style = document.createElement("style");
  style.textContent = `
    .filter-section .filter-options {
        transition: all 0.3s ease;
    }
    .filter-section .filter-toggle:hover h4 {
        color: #e39f32 !important;
    }
    .filter-section input[type="radio"] {
        transition: all 0.2s ease;
    }
    .filter-section input[type="radio"]:checked + span {
        color: #e39f32 !important;
        font-weight: 500;
    }
    .rotate-180 {
        transform: rotate(180deg);
    }
    .filter-section .bg-gray-50 {
        transition: all 0.2s ease;
    }
`;
  document.head.appendChild(style);

  // Initialize the page
  initPage();
})();
