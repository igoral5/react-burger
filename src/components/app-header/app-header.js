import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './app-header.module.css';

const AppHeader = props => {
    return (
        <nav>
        <ul className={appHeaderStyles.menu_header}>
            <li>
                <div className={appHeaderStyles.menu_item + ' mr-10'}>
                    <BurgerIcon type="primary"/>
                    <span className="text_type_main-default ml-2">Конструктор</span>
                </div>
            </li>
            <li>
                <div className={appHeaderStyles.menu_item}>
                    <ListIcon type="primary"/>
                    <span className="text text_type_main-default ml-2">Лента заказов</span>
                </div>
            </li>
            <li>
                <div className={appHeaderStyles.menu_item_logo}>
                    <Logo type="primary"/>
                </div>
                </li>
            <li>
                <div className={appHeaderStyles.menu_item}>
                    <ProfileIcon type="primary"/>
                    <span className="text text_type_main-default ml-2">Личный кабинет</span>
                </div>
            </li>
        </ul>
        </nav>
    );
}
export default AppHeader;