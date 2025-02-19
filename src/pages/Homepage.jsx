import Carousel from "../ui/Carousel";

const items = [
    {
        image: "/Bible.jpg",
        title: "Biblify",
        text: "Your ultimate companion for exploring the Bible.",
        buttonText: "Get Started",
        buttonLink: "/bible/JHN/3/16"
      },
]

export default function Homepage() {
    return (
       <Carousel items={items}/>
    )
}
