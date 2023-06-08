import styles from './flex-UI.css';

function DemoUI() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.navigation}>
                    <div> item 1 </div>
                    <div> item 2 </div>
                    <div> item 3 </div>
                </div>
                <div className={styles.searchBar}> searchBar </div>
                <div className={styles.propertyType}>
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
