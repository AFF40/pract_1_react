import Logo from './_components/Logo'; 
import Description from './_components/Description';
import OpenLink from '../components/OpenLink';
import LessonInfo from './_components/LessonInfo';

const Default = () => {
return (
    <>
    <header className="App-header">
        <Logo />
        <Description />
        <OpenLink title="Learn React" url="https://reactjs.dev/" />
        <OpenLink title="mi proyecto" url="https://github.com/AFF40/desarrollo-frontend-react" />
        <LessonInfo unitNumber="1" title="introduccion a react y estructura de proyecto"/>
        <LessonInfo unitNumber="2" title="context api para la gestion del estado global en aplicaciones react"/>

      </header>
    </>
    );
};

export default Default;