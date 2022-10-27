import AppBody from "../app-body/app.body";
import AppHeader from "../app-header/app-header";
import appStyles from './app.module.css';

const App = props => {
    return (
        <main className={appStyles.all}>
            <div className={appStyles.container}>
                <AppHeader/>
                <AppBody/>
            </div>
        </main>
    );
}
export default App;
