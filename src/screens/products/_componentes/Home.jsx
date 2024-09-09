import { useSelector  } from 'react-redux';

const Home = () => {
    const product = useSelector((state) => state.product);
    
    return (
        <>
            <h5>{product.PRODUCTS}</h5>
        </>
    );
};

export default Home;