const fs = require("fs");
const pets = [
  {
    name: "Coty",
    description: "necesito un duenño yaaa. Tengo dos años",
    type: "gato",
    image:
      "https://imagenesnoticias.canalrcn.com/ImgNoticias/Test%20de%20personalidad%20para%20gatos.jpg?MBL015Sk4KfZyD3_o6N7dJzWmNeuyIZV",
    status: "active",
  },
  {
    name: "Simmy",
    description: "Simmy esta sola y necesita un dueño. Tiene dos años",
    type: "gato",
    image:
      "https://www.ised.es/wp-content/uploads/2019/02/el-invierno-gatos.jpg",
    status: "active",
  },

  {
    name: "Bandit",
    description: "necesito un duenño yaaa. Tengo 1 año",
    type: "perro",
    image:
      "data:image/jpeg;base64,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",

    status: "active",
  },

  {
    name: "Elena",
    description: "Elena tienr dos años, si alguien necesita un gatito",
    type: "gato",
    image:
      "https://dcom-prod.imgix.net/files/inline-images/1%20%281%29%20%281%29.jpg",
    status: "active",
  },
  {
    name: "Calipso",
    description: "necesito un duenño yaaa. Tengo dos años",
    type: "perro",
    image: "",
    status: "active",
  },
  {
    name: "Haribo",
    description: "Ya tengo tres gatitos, no puedo con uno mas",
    type: "gato",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dztgZ7fP_m4shTxz1KNL8TwlYyIGoCOMOg&usqp=CAU",
    status: "active",
  },
  {
    name: "Pucho",
    description: "necesito un duenño yaaa. Tengo dos años",
    type: "perro",
    image:
      "https://media4.s-nbcnews.com/i/newscms/2019_23/2885811/190606-border-collie-mc-1318_5b1706791f4ae9ddb3029540a98f7e08.JPG",
    status: "active",
  },
];

const adopted = [
  {
    name: "charly",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQledCjwh7-LvW-LE4bUTAbYZZXNdYMkFZMvA&usqp=CAU",
    type: "dog",
  },
  { name: "lazy", image: "https://i.imgur.com/K3jDGqR.jpg", type: "cat" },
  {
    name: "Dancy",
    image:
      "https://blog.ferplast.com/wp-content/uploads/2019/07/owning-a-white-cat-5b1b91a318ba9-900x600.jpg",
    type: "cat",
  },
];
