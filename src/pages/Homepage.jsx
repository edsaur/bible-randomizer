import Carousel from "../ui/Carousel";

const items = [
    {
        image: "https://dronexl.co/wp-content/uploads/2024/10/DJI-Air-3S-drone-0215.jpg",
        title: "Welcome to Our App",
        text: "Discover amazing features tailored just for you.",
        buttonText: "Get Started",
        buttonLink: "https://example.com/get-started"
      },
      {
        image: "https://dronexl.co/wp-content/uploads/2024/10/DJI-Air-3S-drone-0215.jpg",
        title: "Stay Inspired",
        text: "Explore our daily quotes and motivational resources.",
        buttonText: "Learn More",
        buttonLink: "https://example.com/learn-more"
      },
]

export default function Homepage() {
    return (
       <Carousel items={items}/>
    )
}
