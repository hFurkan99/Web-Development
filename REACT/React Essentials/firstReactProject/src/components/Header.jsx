import reactImg from '../assets/react-core-concepts.png';
import "./Header.css"

const reactDesc = ["Fundamentals", "Crucial", "Core"];

function genRandomNumber(length) {
    return Math.floor(Math.random() * length);
}


export default function Header() {

    const description = reactDesc[genRandomNumber(reactDesc.length)];
    return (<header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
            {description} React concepts you will need for almost any app you are
            going to build!
        </p>
    </header>);
}