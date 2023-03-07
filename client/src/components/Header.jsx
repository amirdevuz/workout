import { useEffect } from 'react';
import axios from 'axios';

import { getCategories } from '../redux/reducer/ProductsReducer';
import Loading from './Loading';

function Header() {
  const categories = useSelector(state => state.products.categories);
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("http://localhost:5000/products/categories")
      .then(res => {
        dispatch(getCategories(res.data));
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <header className="header shadow-sm">
      <div className="container header__container">
        <Link to='/' className='header__logo'><h3 className="h3">Logo</h3></Link>

        <nav className="header__nav">
          {
            categories.length > 0
              ? categories.map((category) => {
                return <Link to={category.name} key={category._id} className='header__link'>{category.name}</Link>
              })
              : <Loading />
          }
        </nav>
      </div>
    </header>
  )
}

export default Header