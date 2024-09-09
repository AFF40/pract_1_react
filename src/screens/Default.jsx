import Logo from './default/_components/Logo'; 
import Description from './default/_components/Description';
import OpenLink from '../components/OpenLink';
import Contador from './default/_components/Contador';

import FilterableProductTable from './default/_components/FilterableProductTable';


const Default = () => {
return (
    <>
    <header className="App-header">
        <Contador />
        <Logo />
        <Description />
        <OpenLink title="Learn React" url="https://reactjs.org/" />
        <OpenLink title="mi proyecto" url="https://github.com/AFF40/desarrollo-frontend-react" />
        
        <FilterableProductTable>
          

        </FilterableProductTable>
         
      </header>
    </>
    );
};

export default Default;