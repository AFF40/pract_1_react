import Logo from './_components/Logo'; 
import Description from './_components/Description';


import OpenLink from '../components/OpenLink';

const Default = () => {
return (
    <header className="App-header">
        <Logo />
        <Description />

        <OpenLink title="Learn React" url="https://reactjs.dev/" />
        <OpenLink title="mi proyecto" url="https://github.com/AFF40/desarrollo-frontend-react" />
        
      </header>
    );
}
export default Default;