const items = [
    {item: "iPhone 17", id: 1, price: 999.99, type: "iphone", img: "https://images.macrumors.com/t/B-OH6huBi4ps9IbiRKadZxSPmP4=/800x0/smart/article-new/2025/09/iphone-17-models.jpg?lossy"},
    {item: "iPad 10th Gen", id: 2, price: 299.99, type: "ipad", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3XMQi6jNk0atnrCnCuJm_UU6qOsyLZ1Orw&s"},
    {item: "iPhone 16", id: 3, price: 899.99, type: "iphone", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMMbLzKIHJpq2q2bUZq197DLbz3rCZ4rqaw&s"},
    {item: "iPhone 15", id: 4, price: 599.99, type: "iphone", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThm3TqOezk-JK4R__TPS3tqlRW1Tsn6nqMgg&s"},
    {item: "Apple Pencil", id: 5, price: 79, type: "misc", img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUsAAACYCAMAAABatDuZAAAAY1BMVEX////x8fH09PT6+vrb29vDw8PT09Pz8/P39/fg4ODv7+/f39/s7Ozj4+Pp6enX19fJycnIyMi9vb23t7empqh/f4Gfn6GTk5VnaGuvsLOoqKqNjY+goKHPz9GIiIlsbXKZmZn5NgmOAAAC3ElEQVR4nO3XC3OiMBSGYZOAiQESLvaila3//1duIKhoQdxtd2anfZ9pQbnqNycnuFoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCvKCN1RwzsaHlafcYnL6GH/4k905sfZ3tL99fmoRiNtLnLrdBjUsZldH6lx1v/zPRpCxfTN6+m7j7+0PJmOdozcfEP3/POBxFWL1RjF2PI0QopDe7SIp+NUVkX5Hko4CFIhXmhB9qJMJWxrvBF3tWj0EOSiijvM1Lk9jpH4YqiCAWZeS3EuVeYcOTN/DDuyOPebK+mpYVWfqep3+75eOjijHDPwsmnKSuuzdQEpkeTcZh7lBG5U6cYdR5z7AuySOTlBN1l/gWz9X9NzzKNiHPRcFw/2Zo+SX1K1BojrIvzj9pkmxBkHke2FVl2VXn5d09yIsu4SQhZNq182qZhGJvuT6UHmT6/OCWVuhxrpbUudsxN1mfZTzd5mLyTJL+w+ffOcr4k+6p8fd2Z/eq42/q3Q7s7VNu9SV1b/0qOx8upQobYiphl630S8gyB9rx3p2D7NEc3XLj3Y77kInPX/tzp8mqlTf3+/qKe9sVb2m7VfruSz3tVHRtXl4kvTwfL0AZDi4ztslhXZble+0G57lN1Ay3i0+3yU+s39PRrG+pytdv7rdk1h3If6jJTrtHH4yUQ4VyRucsvHOfLOk2rEGqZVj5J+nHfc6HZ/tjn9e5pexX65CosVbfsVt0zYnhxFooy8+L66VJkbd00dVO1XZEmfaBBmJYebTA/RFeM5zdhfG8yv5760eN8uq7Tqgx5xkAvslO638jcFxpvvzqmuNHtTtalm8hyGPFJGQZ8OQR6liDp6ikYvfd+nfq5KCNd+HLooG2XKWa0Vb0QZRzxNszxdS/FpBBNaZeTPA950ffX68pGlJ1/iQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Nd+A7Vmb5JkQ5fbAAAAAElFTkSuQmCC"},
    {item: "AirPods", id: 6, price: 129.99, type: "audio", img: "https://media.wired.com/photos/671577232009d044328f83e0/master/w_1920,c_limit/AirPods%20Pro%202%20Abstract%20Background%20102024%20SOURCE%20Apple.jpg"},
    {item: "AirPods Max", id: 7, price: 249, type: "audio", img: "https://futureaudiophile.com/wp-content/uploads/2022/09/2-Apple-AirPodsMax-ManyColors-1024x683.jpg"},
    {item: "Apple Watch Ultra 2", id: 8, price: 649, type: "misc", img: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-apple-watch-ultra-2/article/Apple-Watch-Ultra-2-hero-230912_Full-Bleed-Image.jpg.xlarge.jpg"},
    {item: "Macbook Desktop", id: 9, price: 1299.99, type: "computer", img: "https://images.techadvisor.com/cmsdata/reviews/3782193/imac_pro_2017.png"},
    {item: "Macbook", id: 10, price: 599, type: "computer", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTiSZMAHmaKnegbSlwXQScU-jzUjiplDo-1YGXWHRkiOzd3U4PbpYa8IwEG0UGYBfxifz4AtA2WL_NXdcYNxGWiYTffB6DQ-6MV_dD3skwE4b_apbuVJjTR6A"},
    {item: "Lightning Cable", id: 11, price: 19, type: "misc", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ME291?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=SERWaGNNVGpvemh0bFFCeHQ0T2RFZ2tuVHYzMERCZURia3c5SzJFOTlPampvNzhHcXR1VTgwZ2ZLNzNmU05FZUY5QnJORUFCbFQrODJpYUJwRkNrSXc"},
    {item: "Apple TV", id: 12, price: 129, type: "misc", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=1076&hei=1070&fmt=jpeg&qlt=90&.v=a3VoZW85YUhreXN3ZFlSUDc3a0tqdU1qeWRTYWRhVU5NM3d6SkhmNzkxTVA2eHYwV0FuTVcxeXpzZU1sNHk2WmJGcXNRQnFCV0w3WVRjTExvdm1ic2FNaUdBMSt0VkxKZ2NWelk1alBpUVVXZEdHNUFPR0hYUU12cjI0VlFzM1A"},
    {item: "Apple Vision Pro", id: 13, price: 3499.99, type: "misc", img: "https://www.apple.com/newsroom/images/media/introducing-apple-vision-pro/Apple-WWDC23-Vision-Pro-glass-230605_big.jpg.large.jpg"},
    {item: "iPhone 14", id: 14, price: 450, type: "iphone", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwC2FN4fK75R05NcAJM6fNX0caA1_DHq142Q&s"},
    {item: "iPad 11th Gen", id: 15, price: 349, type: "ipad", img: "https://www.apple.com/v/ipad-11/specs/c/images/meta/ipad-11_specs__bdyzr0g7cz9e_og.png"},
    {item: "iPad 9th Gen", id: 16, price: 269.99, type: "ipad", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHCwLEh-uYdp83XJ0FcjEPjkYCRy4tuBHMw&s"},
    {item: "iPad 8th Gen", id: 17, price: 160, type: "ipad", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlB3daf4RTcBD2Jm4uWm-dhObuBWC5PKLtrQ&s"},
    {item: "Macbook Pro", id: 18, price: 1599.99, type: "computer", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp14-silver-cto-hero-202410?wid=840&hei=504&fmt=jpeg&qlt=90&.v=VS9GZkg3REhOOHRkSTlzK0dOQWlHamNzMjVqd0pPMk5YaURoT1Axa2JuN3FiZjF4cU9QU2ZXWTVPOWkra3huOU14MXJScFRZN3Y5OWZsRXVrN1k4cFduaSsvUlA5NzFEZEJ3N0VUUzhEeTg"},
    {item: "HomePod", id: 19, price: 99, type: "audio", img: "https://i.ytimg.com/vi/861Dt8Fy0IA/maxresdefault.jpg"},
    {item: "Airpod Pro", id: 20, price: 249, type: "audio", img: "https://gizmodo.com/app/uploads/2022/09/330e0708d62e77a10e692e275ee80a83.jpg"},
]

let itemcart = []

function injectCart(item){
  const container = document.querySelector(".container")
  if(item){
    container.insertAdjacentHTML(
      "afterbegin",
      `<div class="cart" data-id = ${item.id}>
          <h2>${item.item}</h2>
          <p>$${item.price}</p>
        </div>`
    )
  }else{
    container.insertAdjacentHTML(
      "afterbegin",
      `<div class="cart" data-id = null>
          <h2>No items</h2>
          <p>No price</p>
        </div>`
    )
  }
}
injectCart()
function inject(item){
  const container = document.querySelector(".container")
  container.insertAdjacentHTML(
    "afterbegin", 
    `<div class="card" data-id = ${item.id}>
        <img
          class="img"
          src="${item.img}"
          alt="${item.item}"
        />
        <h2>${item.item}</h2>
        <p>$${item.price}</p>
        <button class = "add">Add to cart</button>
      </div>`)
}

items.forEach((item) => inject(item))


function filterCard(){
  const tabs = document.querySelectorAll("[data-category]")
  tabs.forEach(tab =>{
    tab.addEventListener("click", () => {
      document.querySelectorAll(".card").forEach(card => card.remove())
      document.querySelectorAll(".cart").forEach(cart => cart.remove())

      const type = tab.getAttribute("data-category")
      if(type !== "all"){
        const filtered = items.filter(item => item.type === type)
        filtered.forEach(item => inject(item))
      }else if(type == "cart"){
        console.log("cart")
        itemcart.forEach(item => injectCart(item))
      }else{
        items.forEach((item) => inject(item))
      }
    })
  })
}

function getCards(){
  const buttons = document.querySelectorAll("button")
  const btnArr = Array.from(buttons)
  btnArr.forEach(btn =>
    btn.addEventListener("click", function (event){
      const id = event.target.closest('.card').getAttribute("data-id")
      const card = items.find(item => item.id == id)
      itemcart.push(card)
      console.log("hi", itemcart)
    })
  )
}

getCards()
filterCard()