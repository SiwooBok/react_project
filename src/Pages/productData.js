const data = [
  {
    id: 'prod-01',
    img: process.env.PUBLIC_URL+'/images/box.png',
    imgName: "box_01",
    gradient: "linear-gradient(to top, #3A7EC2, #E2E5CB)",
    textColor: "#EF63E1",
    textShadow: "rgba(205, 212, 239, 0.25) 1px 0 10px",
    fontFamily: "Spoqa Han Sans Neo Bold",
    name: 'Epic Box',
    price: 2400,
    probability: [10, 15, 20, 20, 20, 15]
  },
  {
    id: 'prod-02',
    img: process.env.PUBLIC_URL+'/images/box.png',
    imgName: "box_02",
    gradient: "linear-gradient(to top, #6D6B4D, #E5E9DB)",
    textColor: "#F9DCB0",
    textShadow: "rgba(184, 127, 233, 0.5) 1px 0 10px",
    fontFamily: "Spoqa Han Sans Neo Bold",
    name: 'Legend Box',
    price: 1200,
    probability: [3, 10, 15, 15, 15, 42]
  },
  {
    id: 'prod-03',
    img: process.env.PUBLIC_URL+'/images/box.png',
    imgName: "box_03",
    gradient: "linear-gradient(to top, #858585, #DEDEDE)",
    textColor: "#C1C7F1",
    textShadow: "rgba(138, 154, 55, 0.4) 1px 0 10px",
    fontFamily: "Spoqa Han Sans Neo Bold",
    name: 'Unique Box',
    price: 550,
    probability: [0.5, 3, 10, 15, 15, 56.5]
  },
  {
    id: 'prod-04',
    img: process.env.PUBLIC_URL+'/images/box.png',
    imgName: "box_04",
    gradient: "linear-gradient(to top, #858585, #DEDEDE)",
    textColor: "#DCCB5E",
    textShadow: "none",
    fontFamily: "Nanum Gothic Regular",
    name: 'Super Rare Box',
    price: 250,
    probability: [0.3, 1.5, 3, 15, 10, 70.2]
  },
  {
    id: 'prod-05',
    img: process.env.PUBLIC_URL+'/images/box.png',
    imgName: "box_05",
    gradient: "linear-gradient(to top, #858585, #DEDEDE)",
    textColor: "#6CC87B",
    textShadow: "none",
    fontFamily: "Nanum Gothic Regular",
    name: 'Rare Box',
    price: 50,
    probability: [0.2, 0.8, 1.5, 4, 10, 83.5]
  },
  {
    id: 'prod-06',
    img: process.env.PUBLIC_URL+'/images/box.png',
    imgName: "box_06",
    gradient: "linear-gradient(to top, #858585, #DEDEDE)",
    textColor: "#fff",
    textShadow: "none",
    fontFamily: "Nanum Gothic Regular",
    name: 'Normal Box',
    price: 10,
    probability: [0.1, 0.5, 1, 2, 5, 91.4]
  }
]

export default data