// unsplash : https://unsplash.com/documentation#search-photos
// debounce : https://lodash.com/docs/4.17.15#debounce

const accessKey = "hPyF-tz9tHnxeaoTwb7q0GTw10Wxwr85cD63lk7d7UE";
const input = document.querySelector('input');
const dropdownMenu = document.querySelector('.dropdown-menu');
const imageInfo = document.querySelector('.image-info');


// 검색 이미지 리스트 가져오기
// https://unsplash.com/documentation#search-photos
const fetchImages = async search => {
    // Do Something here!
    const res = await axios.get("https://api.unsplash.com/search/photos/", {
      params: {
          client_id: accessKey,
          query: search
      }
    });
    return res.data.results;
};

// 하나의 이미지 정보만 가져오기
// https://unsplash.com/documentation#get-a-photo
const fetchImage = async id => {
    // Do Something here!
    const res = await axios.get(`https://api.unsplash.com/photos/${id}`, {
        params: {
            client_id: accessKey,
        }
    });
    return res.data;
}


// 검색 드랍다운 표기
const onSearch = async e => {
    // Do Something Here!
    const images = await fetchImages(e.target.value);
    dropdownMenu.innerHTML = "";
    if (!images.length) {
        dropdownMenu.classList.remove("show");
    } else {
        dropdownMenu.classList.add("show");
        listTemplate(images);
    }
}

// input.addEventListener("input", onSearch);
input.addEventListener("input", _.debounce(onSearch, 600));

// 검색 드랍다운 리스트 표기
const listTemplate = (images) => {
    // Do Something Here!
    for (const image of images) {
        const { id, alt_description, urls } = image;
        const li = document.createElement("li");
        li.classList.add("dropdown-item");
        li.innerHTML = `
            <img src="${urls.regular}" alt="${alt_description}">
            <span>${alt_description}</span>
        `;
        li.addEventListener("click", async () => {
            dropdownMenu.classList.remove("show");
            input.value = alt_description;
            imageTemplate(await fetchImage(id));
        })
        dropdownMenu.insertAdjacentElement("beforeend", li);
    }
}

// 선택된 이미지 정보 표기
const imageTemplate = (image) => {
    // Do Something here!
    const { urls, alt_description } = image;
    imageInfo.src = urls.regular;
    imageInfo.alt = alt_description;
}
