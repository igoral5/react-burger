import AppBody from "../app-body/app.body";
import AppHeader from "../app-header/app-header";
import appStyles from './app.module.css';

const App = props => {
    return (
        <div className={appStyles.all}>
            <div className={appStyles.container}>
                <AppHeader/>
                <AppBody/>
            </div>
        </div>
    );
}
export default App;
