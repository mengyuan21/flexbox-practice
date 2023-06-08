import './flex-UI.css';

function DemoUI() {
    return (
        <div className={"box"}>
            <div className={"container"}>
                <div className={"navigation"}>
                    <img src="images/icon.png" alt='icon' className={"icon"}/>
                    <div className={"navigationItems"}>
                        <div> Find property </div>
                        <div> Invest </div>
                        <div> Short-term </div>
                        <div> Find agencies </div>
                        <div> News </div>
                    </div>
                    <button> Sign in </button>
                    <button> Join </button>
                </div>
                <div className={"searchBar"}>
                    <div className={"searchbarButtons"}>
                        <button> Buy </button>
                        <button> Lease </button>
                        <button> Sold </button>
                        <button> Leased </button>
                    </div>
                    <input className={"searchbarInput"} defaultValue={"Where are you looking?"}/>
                </div>
                <div className={"propertyType"}>
                    <div className={"propertyTypeTitle"}> Explore by property type </div>
                    <div className={"propertyItems"}>
                        <div className={"propertyItem"}> item 1 </div>
                        <div className={"propertyItem"}> item 2 </div>
                        <div className={"propertyItem"}> item 3 </div>
                        <div className={"propertyItem"}> item 4 </div>
                        <div className={"propertyItem"}> item 5 </div>
                        <div className={"propertyItem"}> item 6 </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DemoUI;
