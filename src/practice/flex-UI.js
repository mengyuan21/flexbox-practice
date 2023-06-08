import './flex-UI.css';

function DemoUI() {
    return (
        <div className={"box"}>
            <div className={"container"}>
                <div className={"navigation"}>
                    <img src="images/icon.png" alt='icon' className={"icon"}/>
                    <div>
                        <div> Find property </div>
                        <div> Invest </div>
                        <div> Short-term </div>
                        <div> Find agencies </div>
                        <div> News </div>
                    </div>
                </div>
                <div className={"searchBar"}>
                    <div> Buy </div>
                    <div> Lease </div>
                    <div> Sold </div>
                    <div> Leased </div>
                </div>
                <div className={"propertyType"}>
                    <div> item 1 </div>
                    <div> item 2 </div>
                    <div> item 3 </div>
                    <div> item 4 </div>
                    <div> item 5 </div>
                    <div> item 6 </div>
                </div>
            </div>
        </div>
    );
}

export default DemoUI;
