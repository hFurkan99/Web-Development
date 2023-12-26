export default function CoreConcept({ description, image, title }) { /*Burdaki parametrelerin isimleri de dataların alındığı 
objenin keyleriyle aynı isimde olmalı ki değerleri burda kullanabilelim. Sıralama önemli değil */
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}