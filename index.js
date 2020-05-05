function Header() {
    return <div className="shop-header">
        <h1 className="shop-header__title">CSS Dinner Shopping List</h1>
        <h2 className="shop-header__title">Let's go to the mall!</h2>
    </div>
}
function ListBlock(props) {
    return <ul className="shop-list_block">
        {props.children}
    </ul>
}
function ListItem(props) {

    const [active, setActive] = React.useState(false);
    function check() {
        setActive(!active);
    }
    let checkClass = "checkbox__icon";
    let elClass = "shop-list_item";
    if (active) {
        elClass += " shop-list_item--active"
        checkClass += " checkbox__icon--checked"
    }

    return (
        <li className={elClass} onClick={check}>
            <div className="checkbox">
                <img src="check.png" alt="+" className={checkClass} />
            </div>

            {props.text}
        </li>
    )

}
function ListRendered() {
    let list = [
        { item: "A lot of pickles", bought: false, id: "pickles" },
        { item: "Wine", bought: false, id: "wine" },
        { item: "10 apples", bought: false, id: "apples" },
        { item: "20 oranges", bought: false, id: "oranges" },
        { item: "15 bentos", bought: false, id: "bentos" },
        { item: "Plate of chocolate", bought: false, id: "chocolate" }

    ]
    let renderList = list.map((el, index) => <ListItem text={el.item} key={el.id} />)
    return <ListBlock>{renderList} </ListBlock>
}
function Button() {
    return <button className="button">
        Bon Appetit :)
    </button>
}


let page = <div>
    <Header />
    <ListRendered />
    <Button />
</div>


// render
ReactDOM.render(page, document.getElementById("root"));