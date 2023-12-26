import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton"
import Section from "./Section";
import Tabs from "./Tabs";


export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState("") /*Komponent fonksiyonu içerisindeki diğer fonksiyonlar içerisinde kullanılamaz. Ör: handleSelect içinde kullanılamaz.
  Aynı zamanda if ya da for gibi statementlarda da kullanılamaz*/

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3> {/*Obje içindeki objeye ulaşmak için köşeli parantez kullanılır. selectedTopic in alabileceği değerler ile EXAMPLES objesindeki obje isimleri aynı olmalı*/}
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        )
    }

    return (
        <Section id="examples" title={"Examples"}>
            <Tabs
                ButtonsContainer="menu" /*Custom component kullanmak için süslü parantez: {Section}, normal html tagi için ise tırnak içerisinde: "div", "menu", "section" */
                buttons={<>
                    <TabButton
                        isSelected={selectedTopic === "components"}
                        onSelect={() => handleSelect("components")}>Components</TabButton>
                    {/*Attribute kullanmadan tag içindeki yazıyı TabButton Komponentine geçebilmek için TabButton kompontinde children propsunu kullan*/}
                    <TabButton
                        isSelected={selectedTopic === "jsx"}
                        onSelect={() => handleSelect("jsx")}>JSX
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === "props"}
                        onSelect={() => handleSelect("props")}>Props
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === "state"}
                        onSelect={() => handleSelect("state")}>State
                    </TabButton>
                </>}>
                {tabContent}
            </Tabs>
        </Section>



    );
}