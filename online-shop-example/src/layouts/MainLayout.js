import { Outlet } from 'react-router-dom';
import '../App.css';

const MainLayout = () => {
	// const backgroundImageSource = 'https://c.wallhere.com/photos/15/e5/library_Photoshop_magic_Misty_romantic_book_store_books_reading-1795045.jpg!d'
    return (
		// style={{ backgroundImage: `url(${backgroundImageSource})`}} - либо в самом css прописать в классе App
        <div className='App'>
            <Outlet/>
        </div>
    )
}

export default MainLayout;