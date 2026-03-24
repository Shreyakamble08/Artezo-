
    // ==================== COMPREHENSIVE PRODUCT DATA WITH DUMMY DATA ====================
    const productData = {
      photoFrames: {
        name: "Artezo Custom Photo Frame Set",
        categoryLabel: "Photo Frames",
        brand: "Artezo",
        rating: "★★★★☆",
        ratingCount: "143 ratings",
        features: [
          { icon: "fa-image", text: "Premium Quality" },
          { icon: "fa-truck", text: "Free Delivery<br>above ₹7300" },
          { icon: "fa-money-bill-wave", text: "Cash On<br>Delivery" },
          { icon: "fa-clock", text: "48 Hour<br>Removable" }
        ],
        variants: {
          "ASIN-B0FRAME002": { id: "ASIN-B0FRAME002", name: "2 Frames Set", frameCount: 2, price: 518, mrp: 1199, discount: 57, previewImage: "https://via.placeholder.com/200x150?text=2+Frames", isDefault: false, mainImage: "https://via.placeholder.com/600x400?text=2+Frame+Set", thumbnails: ["https://via.placeholder.com/100x100?text=Frame1", "https://via.placeholder.com/100x100?text=Frame2", "https://via.placeholder.com/100x100?text=Frame3", "https://via.placeholder.com/100x100?text=Frame4"], specs: { customisations: "2 images", dimensions: "32L x 24.5W cm", material: "Engineered Wood" } },
          "ASIN-B0FRAME004": { id: "ASIN-B0FRAME004", name: "4 Frames Set", frameCount: 4, price: 864, mrp: 1999, discount: 57, previewImage: "https://via.placeholder.com/200x150?text=4+Frames", isDefault: true, mainImage: "https://via.placeholder.com/600x400?text=4+Frame+Set", thumbnails: ["https://via.placeholder.com/100x100?text=Frame1", "https://via.placeholder.com/100x100?text=Frame2", "https://via.placeholder.com/100x100?text=Frame3", "https://via.placeholder.com/100x100?text=Frame4"], specs: { customisations: "4 images", dimensions: "32L x 24.5W cm", material: "Engineered Wood" } }
        },
        customizationFields: { type: "images", count: 4, label: "Upload your photos", instruction: "Upload JPEG or PNG (max 15MB)" }
      },
      nameplates: {
        name: "Custom Brass & Wood Nameplates",
        categoryLabel: "Nameplates",
        brand: "Artezo Home",
        rating: "★★★★★",
        ratingCount: "89 ratings",
        features: [
          { icon: "fa-brush", text: "Laser Engraved" },
          { icon: "fa-shield-alt", text: "Weather<br>Resistant" },
          { icon: "fa-palette", text: "Multiple<br>Fonts" },
          { icon: "fa-gem", text: "Premium<br>Finish" }
        ],
        variants: {
          "NP-CLASSIC": { id: "NP-CLASSIC", name: "Classic Brass", frameCount: 1, price: 1299, mrp: 2499, discount: 48, previewImage: "https://via.placeholder.com/200x150?text=Brass+Nameplate", isDefault: true, mainImage: "https://via.placeholder.com/600x400?text=Brass+Nameplate", thumbnails: ["https://via.placeholder.com/100x100?text=Brass", "https://via.placeholder.com/100x100?text=Wood", "https://via.placeholder.com/100x100?text=Modern", "https://via.placeholder.com/100x100?text=Premium"], specs: { material: "Solid Brass", dimensions: "12L x 4W inches", mounting: "Adhesive/Screw" } }
        },
        customizationFields: { type: "text", fields: ["Name/Text", "Font Style", "Icon Selection"], instruction: "Enter the name/text you want engraved", placeholder: "e.g., 'The Sharma Residence' or 'Dr. Mehta'" }
      },
      personalizedGifts: {
        name: "Personalized Photo Gifts Collection",
        categoryLabel: "Personalized Gifts",
        brand: "Artezo Gifts",
        rating: "★★★★★",
        ratingCount: "267 ratings",
        features: [
          { icon: "fa-heart", text: "Sentimental<br>Value" },
          { icon: "fa-gift", text: "Gift Ready<br>Packaging" },
          { icon: "fa-calendar-alt", text: "Date<br>Engraving" },
          { icon: "fa-ribbon", text: "Personalized<br>Message" }
        ],
        variants: {
          "GIFT-MUG": { id: "GIFT-MUG", name: "Photo Mug", frameCount: 1, price: 499, mrp: 999, discount: 50, previewImage: "https://via.placeholder.com/200x150?text=Photo+Mug", isDefault: true, mainImage: "https://via.placeholder.com/600x400?text=Custom+Mug", thumbnails: ["https://via.placeholder.com/100x100?text=Mug1", "https://via.placeholder.com/100x100?text=Mug2", "https://via.placeholder.com/100x100?text=Mug3", "https://via.placeholder.com/100x100?text=Mug4"], specs: { material: "Ceramic", capacity: "350ml", microwave: "Safe" } }
        },
        customizationFields: { type: "images", count: 1, label: "Upload your photo", instruction: "Upload a photo for your personalized gift" }
      },
      corporateGifts: {
        name: "Corporate Gifts & Merchandise",
        categoryLabel: "Corporate Gifts",
        brand: "Artezo Corporate",
        rating: "★★★★☆",
        ratingCount: "156 ratings",
        features: [
          { icon: "fa-building", text: "Bulk Orders" },
          { icon: "fa-tags", text: "Logo<br>Printing" },
          { icon: "fa-boxes", text: "Custom<br>Packaging" },
          { icon: "fa-chart-line", text: "Brand<br>Promotion" }
        ],
        variants: {
          "CORP-PEN": { id: "CORP-PEN", name: "Luxury Pen Set", frameCount: 1, price: 2999, mrp: 5999, discount: 50, previewImage: "https://via.placeholder.com/200x150?text=Pen+Set", isDefault: true, mainImage: "https://via.placeholder.com/600x400?text=Luxury+Pen", thumbnails: ["https://via.placeholder.com/100x100?text=Pen1", "https://via.placeholder.com/100x100?text=Pen2", "https://via.placeholder.com/100x100?text=Pen3", "https://via.placeholder.com/100x100?text=Pen4"], specs: { material: "Stainless Steel", quantity: "Set of 2", engraving: "Laser" } }
        },
        customizationFields: { type: "text", fields: ["Company Name", "Logo Upload", "Message"], instruction: "Upload company logo and provide text for engraving" }
      },
      trophies: {
        name: "Custom Trophies & Awards",
        categoryLabel: "Trophies & Awards",
        brand: "Artezo Awards",
        rating: "★★★★★",
        ratingCount: "98 ratings",
        features: [
          { icon: "fa-trophy", text: "Premium<br>Finish" },
          { icon: "fa-medal", text: "Event<br>Specific" },
          { icon: "fa-engrave", text: "Deep<br>Engraving" },
          { icon: "fa-crown", text: "Custom<br>Shapes" }
        ],
        variants: {
          "TROPHY-GOLD": { id: "TROPHY-GOLD", name: "Gold Trophy", frameCount: 1, price: 3499, mrp: 6999, discount: 50, previewImage: "https://via.placeholder.com/200x150?text=Gold+Trophy", isDefault: true, mainImage: "https://via.placeholder.com/600x400?text=Gold+Trophy", thumbnails: ["https://via.placeholder.com/100x100?text=Gold", "https://via.placeholder.com/100x100?text=Silver", "https://via.placeholder.com/100x100?text=Bronze", "https://via.placeholder.com/100x100?text=Crystal"], specs: { material: "Metal/Resin", height: "12 inches", base: "Marble" } }
        },
        customizationFields: { type: "text", fields: ["Award Name", "Recipient Name", "Event Date", "Custom Message"], instruction: "Enter the details to be engraved on the trophy" }
      }
    };

    let currentCategory = "photoFrames";
    let activeVariantId = null;
    let currentCropper = null;
    let currentImageIndex = null;

    function switchCategory(category) {
      currentCategory = category;
      const data = productData[category];
      
      document.getElementById("productTitle").innerHTML = data.name;
      document.getElementById("productRating").innerHTML = data.rating;
      document.getElementById("ratingCount").innerHTML = data.ratingCount;
      document.getElementById("brandBadge").innerHTML = `<i class="fas fa-certificate mr-1 text-xs"></i>Brand : ${data.brand}`;
      
      const featuresBar = document.getElementById("featuresBar");
      featuresBar.innerHTML = data.features.map(f => `
        <div class="flex flex-col items-center gap-1">
          <div class="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-[#FFF3B0]">
            <i class="fas ${f.icon} text-gray-700 text-sm"></i>
          </div>
          <span class="text-[10px] sm:text-[11px] font-medium text-gray-700 text-center leading-tight">${f.text}</span>
        </div>
      `).join("");
      
      const variantLabel = document.getElementById("variantLabel");
      variantLabel.innerHTML = `<i class="fas fa-th-large text-orange-500"></i>Select ${category === "photoFrames" ? "Frame Set" : "Option"}:`;
      
      renderVariants(data.variants);
      
      const defaultVariant = Object.values(data.variants).find(v => v.isDefault);
      if (defaultVariant) selectVariant(defaultVariant.id);
    }
    
    function renderVariants(variants) {
      const container = document.getElementById("variantCardsContainer");
      if (!container) return;
      container.innerHTML = "";
      
      Object.values(variants).forEach(v => {
        const div = document.createElement("div");
        div.className = `frame-set-card border rounded-xl p-2 cursor-pointer bg-white hover:shadow w-28 ${v.isDefault ? "active-variant border-orange-500" : "border-gray-200"}`;
        div.dataset.asinId = v.id;
        div.innerHTML = `
          <div class="h-14 bg-gray-50 rounded-md overflow-hidden mb-1">
            <img src="${v.previewImage}" class="w-full h-full object-contain">
          </div>
          <div class="text-center text-xs font-medium">${v.name}</div>
          <div class="mt-1 text-center">
            <div class="flex justify-center gap-0.5">
              <span class="text-xs font-bold">₹${v.price}</span>
              <span class="text-[10px] line-through text-gray-400">₹${v.mrp}</span>
            </div>
            <span class="inline-block bg-red-50 text-red-700 text-[9px] px-1 rounded-full">${v.discount}% OFF</span>
          </div>
        `;
        div.onclick = () => selectVariant(v.id);
        container.appendChild(div);
      });
    }
    
    function selectVariant(id) {
      const data = productData[currentCategory];
      const variant = data.variants[id];
      if (!variant) return;
      
      activeVariantId = id;
      
      document.querySelectorAll(".frame-set-card").forEach(card => {
        if (card.dataset.asinId === id) {
          card.classList.add("active-variant", "border-orange-500");
        } else {
          card.classList.remove("active-variant", "border-orange-500");
        }
      });
      
      document.getElementById("mainImg").src = variant.mainImage;
      document.getElementById("zoomedImage").src = variant.mainImage;
      
      const thumbContainer = document.getElementById("thumbnailContainer");
      thumbContainer.innerHTML = variant.thumbnails.map((thumb, idx) => `
        <img src="${thumb}" class="thumbnail h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-xl cursor-pointer border ${idx === 0 ? "border-2 border-orange-500" : "border-gray-200 hover:border-orange-400"} shadow-sm" onclick="changeImage(this, '${thumb}')">
      `).join("");
      
      document.getElementById("mainPriceDisplay").innerHTML = `₹${variant.price}`;
      document.getElementById("mainMrpDisplay").innerHTML = `₹${variant.mrp}`;
      document.getElementById("mainDiscountDisplay").innerHTML = `${variant.discount}% OFF`;
      document.getElementById("modalPriceDisplay").innerHTML = `₹${variant.price}<span class="text-base font-normal">.00</span>`;
      document.getElementById("modalMrpDisplay").innerHTML = `₹${variant.mrp}`;
      document.getElementById("modalDiscountDisplay").innerHTML = `${variant.discount}% OFF`;
      
      const specTable = document.getElementById("specificationsTable");
      specTable.innerHTML = Object.entries(variant.specs).map(([key, val]) => `
        <tr class="border-b border-gray-100">
          <td class="px-4 py-3 font-semibold text-gray-700 bg-gray-50/70 border-r border-gray-200 w-1/3 capitalize">${key.replace(/([A-Z])/g, ' $1').trim()}</td>
          <td class="px-4 py-3 text-gray-800">${val}</td>
        </tr>
      `).join("");
    }
    
    function openCustomizeModal() {
      const modal = document.getElementById("customiseModal");
      const data = productData[currentCategory];
      const variant = activeVariantId ? data.variants[activeVariantId] : Object.values(data.variants)[0];
      
      document.getElementById("modalTitle").innerHTML = `<i class="fas fa-palette text-orange-500"></i>Customise ${data.name}`;
      
      const previewContainer = document.getElementById("framePreview");
      const uploadContainer = document.getElementById("uploadContainer");
      const fields = data.customizationFields;
      
      if (fields.type === "images") {
        const count = variant.frameCount || 1;
        previewContainer.innerHTML = "";
        previewContainer.className = `grid ${count <= 2 ? "grid-cols-2" : "grid-cols-3"} gap-4 max-w-md mx-auto`;
        for (let i = 1; i <= count; i++) {
          const div = document.createElement("div");
          div.className = "relative border-4 border-black aspect-video bg-gray-100 rounded-md cursor-pointer overflow-hidden group";
          div.innerHTML = `
            <img id="frameImg-${i}" class="absolute inset-0 w-full h-full object-cover hidden">
            <div class="absolute inset-0 bg-black/50 hidden group-hover:flex items-center justify-center transition">
              <button onclick="adjustImage(${i})" class="bg-white px-3 py-1 rounded-lg text-sm font-medium">Adjust Image</button>
            </div>
          `;
          previewContainer.appendChild(div);
        }
        
        uploadContainer.innerHTML = "";
        for (let i = 1; i <= count; i++) {
          uploadContainer.innerHTML += `
            <div class="border rounded-xl p-4 bg-white">
              <h3 class="font-medium text-sm mb-1"><span class="text-red-500">*</span> ${fields.label || 'Upload image'} ${i}</h3>
              <p class="text-xs text-gray-500 mb-2">${fields.instruction || 'JPEG/PNG up to 15MB'}</p>
              <div id="uploadBox-${i}">
                <label class="inline-flex gap-2 border px-4 py-2 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                  <input type="file" hidden accept="image/*" onchange="handleUpload(event, ${i})">
                  <i class="fas fa-cloud-upload-alt"></i> Upload
                </label>
              </div>
              <div class="mt-2 text-xs text-gray-400">
                <i class="fas fa-arrows-alt"></i> Tip: After uploading, click "Adjust Image" to fit perfectly
              </div>
            </div>
          `;
        }
      } else if (fields.type === "text") {
        previewContainer.innerHTML = `<div class="text-center p-4 border-2 border-dashed rounded-lg bg-gray-50"><i class="fas fa-font fa-3x text-gray-400 mb-2"></i><p class="text-sm font-medium">Text Customization Preview</p><p class="text-xs text-gray-500 mt-2">Your text will appear here</p></div>`;
        uploadContainer.innerHTML = fields.fields.map((field, idx) => `
          <div class="border rounded-xl p-4 bg-white">
            <h3 class="font-medium text-sm mb-2"><span class="text-red-500">*</span> ${field}</h3>
            <input type="text" id="customField-${idx}" placeholder="${fields.placeholder || 'Enter details here...'}" class="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400">
            <p class="text-xs text-gray-500 mt-2">${fields.instruction}</p>
          </div>
        `).join("");
        
        // Add dummy sample data for testing
        uploadContainer.innerHTML += `
          <div class="bg-blue-50 rounded-lg p-3 text-xs text-blue-700">
            <i class="fas fa-info-circle"></i> Sample: "The Sharma Family", "Dr. Mehta", "Corporate Excellence Award 2024"
          </div>
        `;
      }
      
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }
    
    function closeCustomizeModal() {
      const modal = document.getElementById("customiseModal");
      if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
      if (currentCropper) {
        currentCropper.destroy();
        currentCropper = null;
      }
    }
    
    function adjustImage(index) {
      const imgElement = document.getElementById(`frameImg-${index}`);
      if (!imgElement || !imgElement.src || imgElement.classList.contains('hidden')) {
        alert('Please upload an image first');
        return;
      }
      
      currentImageIndex = index;
      
      const overlay = document.createElement('div');
      overlay.className = 'image-adjustment-overlay';
      overlay.id = 'imageAdjustmentOverlay';
      overlay.innerHTML = `
        <div class="bg-white rounded-xl p-4 max-w-4xl w-full mx-4">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold">Adjust Image Position</h3>
            <button onclick="closeAdjustment()" class="text-gray-500 hover:text-gray-700">&times;</button>
          </div>
          <div class="mb-4">
            <img id="adjustImage" src="${imgElement.src}" style="max-width: 100%; max-height: 60vh;">
          </div>
          <div class="flex gap-3 justify-center">
            <button onclick="applyAdjustment()" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium">Apply</button>
            <button onclick="closeAdjustment()" class="border border-gray-300 hover:bg-gray-50 px-6 py-2 rounded-lg font-medium">Cancel</button>
          </div>
          <p class="text-xs text-gray-500 text-center mt-3">Drag to move • Scroll to zoom • Click and drag the image to reposition</p>
        </div>
      `;
      document.body.appendChild(overlay);
      
      const adjustImg = document.getElementById('adjustImage');
      currentCropper = new Cropper(adjustImg, {
        viewMode: 1,
        dragMode: 'move',
        aspectRatio: 1,
        autoCropArea: 1,
        cropBoxMovable: true,
        cropBoxResizable: true,
        toggleDragModeOnDblclick: false,
        background: false,
        ready: function() {
          const containerData = currentCropper.getContainerData();
          const cropBoxData = currentCropper.getCropBoxData();
          currentCropper.setCropBoxData({
            width: Math.min(containerData.width, containerData.height),
            height: Math.min(containerData.width, containerData.height)
          });
        }
      });
    }
    
    function applyAdjustment() {
      if (currentCropper && currentImageIndex !== null) {
        const croppedCanvas = currentCropper.getCroppedCanvas();
        const croppedImageUrl = croppedCanvas.toDataURL();
        const imgElement = document.getElementById(`frameImg-${currentImageIndex}`);
        if (imgElement) {
          imgElement.src = croppedImageUrl;
          imgElement.classList.remove('hidden');
        }
        closeAdjustment();
      }
    }
    
    function closeAdjustment() {
      const overlay = document.getElementById('imageAdjustmentOverlay');
      if (overlay) overlay.remove();
      if (currentCropper) {
        currentCropper.destroy();
        currentCropper = null;
      }
      currentImageIndex = null;
    }
    
    function handleUpload(e, idx) {
      const file = e.target.files[0];
      if (!file) return;
      
      if (!file.type.match('image.*')) {
        alert('Please upload an image file');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = () => {
        const img = document.getElementById(`frameImg-${idx}`);
        if (img) {
          img.src = reader.result;
          img.classList.remove("hidden");
        }
        const box = document.getElementById(`uploadBox-${idx}`);
        if (box) {
          box.innerHTML = `
            <div class="flex items-center gap-3">
              <img src="${reader.result}" class="w-14 h-14 rounded object-cover border">
              <button onclick="replaceImage(${idx})" class="border px-3 py-1 rounded text-sm hover:bg-gray-50 transition">Replace</button>
              <button onclick="deleteImage(${idx})" class="text-red-500 text-sm hover:text-red-700">Delete</button>
              <button onclick="adjustImage(${idx})" class="bg-blue-50 text-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-100 transition">Adjust Position</button>
              <input id="replace-${idx}" type="file" hidden accept="image/*" onchange="handleUpload(event, ${idx})">
            </div>
          `;
        }
      };
      reader.readAsDataURL(file);
    }
    
    window.replaceImage = function(i) {
      document.getElementById(`replace-${i}`)?.click();
    };
    
    window.deleteImage = function(i) {
      const img = document.getElementById(`frameImg-${i}`);
      if (img) {
        img.src = "";
        img.classList.add("hidden");
      }
      const box = document.getElementById(`uploadBox-${i}`);
      if (box) {
        box.innerHTML = `<label class="inline-flex gap-2 border px-4 py-2 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"><input type="file" hidden accept="image/*" onchange="handleUpload(event, ${i})"><i class="fas fa-cloud-upload-alt"></i> Upload</label>`;
      }
    };
    
    window.adjustImage = adjustImage;
    window.applyAdjustment = applyAdjustment;
    window.closeAdjustment = closeAdjustment;
    
    function scrollToPreview() {
      document.getElementById("framePreview")?.scrollIntoView({ behavior: "smooth" });
    }
    
    window.changeImage = function(el, src) {
      document.getElementById("mainImg").src = src;
      document.getElementById("zoomedImage").src = src;
      document.querySelectorAll(".thumbnail").forEach(thumb => thumb.classList.remove("border-2", "border-orange-500"));
      el.classList.add("border-2", "border-orange-500");
    };
    
    function initQuantitySelector() {
      let qty = 1;
      const val = document.getElementById("qtyValue");
      document.getElementById("qtyPlus").onclick = () => { qty++; val.textContent = qty; };
      document.getElementById("qtyMinus").onclick = () => { if (qty > 1) { qty--; val.textContent = qty; } };
    }
    
    function initMagnifier() {
      const img = document.getElementById("mainImg"), cont = document.getElementById("imageContainer");
      const lens = document.getElementById("magnifierLens"), box = document.getElementById("zoomPreviewBox"), zoomed = document.getElementById("zoomedImage");
      if (lens && box) {
        cont.onmouseenter = () => { lens.classList.remove("hidden"); box.classList.remove("hidden"); };
        cont.onmouseleave = () => { lens.classList.add("hidden"); box.classList.add("hidden"); };
        cont.onmousemove = (e) => {
          const rect = cont.getBoundingClientRect();
          let x = e.clientX - rect.left, y = e.clientY - rect.top;
          const lSize = 128;
          let lx = Math.max(0, Math.min(x - lSize / 2, rect.width - lSize));
          let ly = Math.max(0, Math.min(y - lSize / 2, rect.height - lSize));
          lens.style.left = lx + "px";
          lens.style.top = ly + "px";
          const zoom = 2;
          const lensPrev = document.getElementById("lensPreview");
          if (lensPrev) {
            lensPrev.style.backgroundImage = `url('${img.src}')`;
            lensPrev.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
            lensPrev.style.backgroundPosition = `-${lx * zoom}px -${ly * zoom}px`;
          }
          if (zoomed) {
            zoomed.style.transform = `scale(${zoom})`;
            zoomed.style.left = `-${lx * zoom}px`;
            zoomed.style.top = `-${ly * zoom}px`;
          }
        };
      }
    }
    
    document.addEventListener("DOMContentLoaded", () => {
      initQuantitySelector();
      initMagnifier();
      
      document.querySelectorAll("#categorySelector button").forEach(btn => {
        btn.addEventListener("click", () => {
          document.querySelectorAll("#categorySelector button").forEach(b => {
            b.classList.remove("active-category", "border-orange-500", "text-orange-700", "bg-white");
            b.classList.add("border-gray-300", "text-gray-700");
          });
          btn.classList.add("active-category", "border-orange-500", "text-orange-700", "bg-white");
          btn.classList.remove("border-gray-300", "text-gray-700");
          switchCategory(btn.dataset.category);
        });
      });
      
      switchCategory("photoFrames");
      
      document.getElementById("reviewsList").innerHTML = `
        <div class="bg-white border rounded-xl p-4"><div class="flex justify-between"><h4 class="font-medium">Priya Sharma</h4><span>2 days ago</span></div><div class="text-amber-400">★★★★★</div><p>Amazing quality, perfect customization. The WhatsApp preview was very helpful!</p></div>
        <div class="bg-white border rounded-xl p-4"><div class="flex justify-between"><h4 class="font-medium">Rahul Mehta</h4><span>5 days ago</span></div><div class="text-amber-400">★★★★☆</div><p>Customization was easy. Great experience with the image adjustment tool!</p></div>
        <div class="bg-white border rounded-xl p-4"><div class="flex justify-between"><h4 class="font-medium">Ananya Patel</h4><span>1 week ago</span></div><div class="text-amber-400">★★★★★</div><p>Perfect gift! The team sent preview on WhatsApp and made adjustments as requested.</p></div>
      `;
    });
    
    window.openCustomizeModal = openCustomizeModal;
    window.closeCustomizeModal = closeCustomizeModal;
    window.openReviewModal = () => document.getElementById("reviewModal").classList.remove("hidden");
    window.closeReviewModal = () => document.getElementById("reviewModal").classList.add("hidden");
    window.handleUpload = handleUpload;
    window.scrollToPreview = scrollToPreview;
    
    document.getElementById("reviewForm")?.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("reviewerName")?.value;
      const text = document.getElementById("reviewText")?.value;
      if (name && text) {
        const html = `<div class="bg-white border rounded-xl p-4"><div class="flex justify-between"><h4 class="font-medium">${name}</h4><span>Now</span></div><div class="text-amber-400">★★★★★</div><p class="text-gray-600 text-sm">${text}</p></div>`;
        document.getElementById("reviewsList")?.insertAdjacentHTML("afterbegin", html);
        closeReviewModal();
      }
    });
