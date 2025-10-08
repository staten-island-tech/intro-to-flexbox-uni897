const items = [
    {item: "iPhone 17", price: 999.99, type: "Mobile", img: "https://images.macrumors.com/t/B-OH6huBi4ps9IbiRKadZxSPmP4=/800x0/smart/article-new/2025/09/iphone-17-models.jpg?lossy"},
    {item: "iPad 10th Gen", price: 299.99, type: "Mobile", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3XMQi6jNk0atnrCnCuJm_UU6qOsyLZ1Orw&s"},
    {item: "iPhone 16", price: 899.99, type: "Mobile", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMMbLzKIHJpq2q2bUZq197DLbz3rCZ4rqaw&s"},
    {item: "iPhone 15", price: 599.99, type: "Mobile", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThm3TqOezk-JK4R__TPS3tqlRW1Tsn6nqMgg&s"},
    {item: "Apple Pencil", price: 79, type: "Misc", img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUsAAACYCAMAAABatDuZAAAAY1BMVEX////x8fH09PT6+vrb29vDw8PT09Pz8/P39/fg4ODv7+/f39/s7Ozj4+Pp6enX19fJycnIyMi9vb23t7empqh/f4Gfn6GTk5VnaGuvsLOoqKqNjY+goKHPz9GIiIlsbXKZmZn5NgmOAAAC3ElEQVR4nO3XC3OiMBSGYZOAiQESLvaila3//1duIKhoQdxtd2anfZ9pQbnqNycnuFoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCvKCN1RwzsaHlafcYnL6GH/4k905sfZ3tL99fmoRiNtLnLrdBjUsZldH6lx1v/zPRpCxfTN6+m7j7+0PJmOdozcfEP3/POBxFWL1RjF2PI0QopDe7SIp+NUVkX5Hko4CFIhXmhB9qJMJWxrvBF3tWj0EOSiijvM1Lk9jpH4YqiCAWZeS3EuVeYcOTN/DDuyOPebK+mpYVWfqep3+75eOjijHDPwsmnKSuuzdQEpkeTcZh7lBG5U6cYdR5z7AuySOTlBN1l/gWz9X9NzzKNiHPRcFw/2Zo+SX1K1BojrIvzj9pkmxBkHke2FVl2VXn5d09yIsu4SQhZNq182qZhGJvuT6UHmT6/OCWVuhxrpbUudsxN1mfZTzd5mLyTJL+w+ffOcr4k+6p8fd2Z/eq42/q3Q7s7VNu9SV1b/0qOx8upQobYiphl630S8gyB9rx3p2D7NEc3XLj3Y77kInPX/tzp8mqlTf3+/qKe9sVb2m7VfruSz3tVHRtXl4kvTwfL0AZDi4ztslhXZble+0G57lN1Ay3i0+3yU+s39PRrG+pytdv7rdk1h3If6jJTrtHH4yUQ4VyRucsvHOfLOk2rEGqZVj5J+nHfc6HZ/tjn9e5pexX65CosVbfsVt0zYnhxFooy8+L66VJkbd00dVO1XZEmfaBBmJYebTA/RFeM5zdhfG8yv5760eN8uq7Tqgx5xkAvslO638jcFxpvvzqmuNHtTtalm8hyGPFJGQZ8OQR6liDp6ikYvfd+nfq5KCNd+HLooG2XKWa0Vb0QZRzxNszxdS/FpBBNaZeTPA950ffX68pGlJ1/iQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Nd+A7Vmb5JkQ5fbAAAAAElFTkSuQmCC"},
    {item: "AirPods", price: 129.99, type: "Audio", img: "https://media.wired.com/photos/671577232009d044328f83e0/master/w_1920,c_limit/AirPods%20Pro%202%20Abstract%20Background%20102024%20SOURCE%20Apple.jpg"},
    {item: "AirPods Max", price: 249, type: "Audio", img: "https://futureaudiophile.com/wp-content/uploads/2022/09/2-Apple-AirPodsMax-ManyColors-1024x683.jpg"},
    {item: "Apple Watch Ultra 2", price: 649, type: "Misc", img: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-apple-watch-ultra-2/article/Apple-Watch-Ultra-2-hero-230912_Full-Bleed-Image.jpg.xlarge.jpg"},
    {item: "Macbook Desktop", price: 1299.99, type: "Computer", img: "https://images.techadvisor.com/cmsdata/reviews/3782193/imac_pro_2017.png"},
    {item: "Macbook", price: 599, type: "Computer", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTiSZMAHmaKnegbSlwXQScU-jzUjiplDo-1YGXWHRkiOzd3U4PbpYa8IwEG0UGYBfxifz4AtA2WL_NXdcYNxGWiYTffB6DQ-6MV_dD3skwE4b_apbuVJjTR6A"},
    {item: "Lightning Cable", price: 19, type: "Misc", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ME291?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=SERWaGNNVGpvemh0bFFCeHQ0T2RFZ2tuVHYzMERCZURia3c5SzJFOTlPampvNzhHcXR1VTgwZ2ZLNzNmU05FZUY5QnJORUFCbFQrODJpYUJwRkNrSXc"},
    {item: "Apple TV", price: 129, type: "Misc", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=1076&hei=1070&fmt=jpeg&qlt=90&.v=a3VoZW85YUhreXN3ZFlSUDc3a0tqdU1qeWRTYWRhVU5NM3d6SkhmNzkxTVA2eHYwV0FuTVcxeXpzZU1sNHk2WmJGcXNRQnFCV0w3WVRjTExvdm1ic2FNaUdBMSt0VkxKZ2NWelk1alBpUVVXZEdHNUFPR0hYUU12cjI0VlFzM1A"},
    {item: "Apple Vision Pro", price: 3499.99, type: "Misc", img: "https://www.apple.com/newsroom/images/media/introducing-apple-vision-pro/Apple-WWDC23-Vision-Pro-glass-230605_big.jpg.large.jpg"},
    {item: "Macbook Desktop", price: 1299.99, type: "Computer", img: "https://images.techadvisor.com/cmsdata/reviews/3782193/imac_pro_2017.png"},
    {item: "Macbook Desktop", price: 1299.99, type: "Computer", img: "https://images.techadvisor.com/cmsdata/reviews/3782193/imac_pro_2017.png"},
    {item: "Macbook Desktop", price: 1299.99, type: "Computer", img: "https://images.techadvisor.com/cmsdata/reviews/3782193/imac_pro_2017.png"},
    {item: "Macbook Desktop", price: 1299.99, type: "Computer", img: "https://images.techadvisor.com/cmsdata/reviews/3782193/imac_pro_2017.png"},
    {item: "Macbook Desktop", price: 1299.99, type: "Computer", img: "https://images.techadvisor.com/cmsdata/reviews/3782193/imac_pro_2017.png"},
    {item: "Macbook Desktop", price: 1299.99, type: "Computer", img: "https://images.techadvisor.com/cmsdata/reviews/3782193/imac_pro_2017.png"},
    {item: "Macbook Desktop", price: 1299.99, type: "Computer", img: "https://images.techadvisor.com/cmsdata/reviews/3782193/imac_pro_2017.png"},
]

function inject(card) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="display-card">
      <img class="display-img" src="${card.url}"/>
      <h2 class="display-artist">${card.artist}</h2>
      <h3 class="display-album">${card.title}</h3>
      <button class="remove btn">Remove Album</button>
    </div>`
  );
}

