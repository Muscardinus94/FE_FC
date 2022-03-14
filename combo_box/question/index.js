const ITEM_ADDED_EVENTNAME = 'itemAdded';
const items = [];
let currentItem = null;
const $currentItem = document.querySelector('.CurrentItem');
const $inputTag = document.querySelector('.ComboBox input');
const $arrowDown = document.querySelector('.ComboBox img');
const $notification = document.querySelector('.Notification');
const $itemList = document.querySelector('.ComboBox__list');

// Write codes inside each of the listeners.

const toggleItemList = () => {
    const isVisible = $itemList.style.visibility === "visible";
    $itemList.style.visibility = isVisible ? "hidden" : "visible";
}

$inputTag.addEventListener('keyup', (event) => {
  // Do Something here!
    const { value } = event.target;
    if (!value) return;
    if (event.key === "Enter") {
        items.push(value);
        console.log(items);
        document.dispatchEvent(new CustomEvent(ITEM_ADDED_EVENTNAME));
        $itemList.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
    }
});

$arrowDown.addEventListener('click', toggleItemList);

$itemList.addEventListener('click', (event) => {
  // Do Something here!
    const { nodeName, innerText } = event.target;
    if (nodeName !== "LI") return;
    $inputTag.value = innerText;
    $currentItem.textContent = `현재 아이템: ${innerText}`;
    toggleItemList();
});

document.addEventListener(ITEM_ADDED_EVENTNAME, () => {
    $notification.classList.add("Notification--show");
    $notification.classList.remove("Notification--hide");

    setTimeout(() => {
        $notification.classList.remove("Notification--show");
        $notification.classList.add("Notification--hide");
    }, 3000)
});
