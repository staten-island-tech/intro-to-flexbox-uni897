const items = [
    {item: "iPhone 17", price: 999.99},
    {item: "iPad 10th Gen", price: 299.99},
    {item: "iPhone 16", price: 899.99},
    {item: "iPhone 15", price: 599.99},
    {item: "Apple Pencil", price: 79},
    {item: "AirPods", price: 129.99},
    {item: "AirPods Max", price: 249},
    {item: "Apple Watch Ultra 2", price: 649},
    {item: "Macbook Desktop", price: 1299.99},
]

function inject(album) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="display-card">
      <img class="display-img" src="${album.url}"/>
      <h2 class="display-artist">${album.artist}</h2>
      <h3 class="display-album">${album.title}</h3>
      <button class="remove btn">Remove Album</button>
    </div>`
  );
}

