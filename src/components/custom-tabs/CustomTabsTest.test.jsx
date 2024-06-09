import CustomTabs from "./CustomTabs";

function CustomTabsTest() {
    const tabs = [
        {
            name: "Tab 1",
            content: (
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi neque natus quod alias
                        laudantium, a ab ullam. Illo vitae maiores qui beatae libero neque, nulla dicta ducimus corrupti
                        nesciunt.
                    </p>
                </div>
            ),
        },
        {
            name: "Tab 2",
            content: (
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi praesentium vero
                        repellendus earum labore esse veniam sapiente nostrum cum possimus sint optio, placeat modi
                        temporibus enim iusto, dicta fugiat?
                    </p>
                </div>
            ),
        },
        {
            name: "Tab 3",
            content: (
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique, itaque iste harum
                        quas doloribus pariatur vero amet minus ut earum deleniti adipisci, placeat accusamus? In iusto
                        dolore voluptatibus expedita.
                    </p>
                </div>
            ),
        },
    ];

    function handleChange(currentTabIndex) {
        console.log(`Tab Selected - ${currentTabIndex}`);
    }

    return <CustomTabs tabsContent={tabs} onChange={handleChange}></CustomTabs>;
}

export default CustomTabsTest;
