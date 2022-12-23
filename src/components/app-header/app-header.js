import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './app-header.module.css';

const AppHeader = props => {
    return (
        <nav>
        <ul className={appHeaderStyles.menu_header}>
            <li>
                <a className={appHeaderStyles.menu_item + ' mr-10'}>
                    <BurgerIcon type="primary"/>
                    <span className="text_type_main-default ml-2">Конструктор</span>
                </a>
            </li>
            <li>
                <a className={appHeaderStyles.menu_item}>
                    <ListIcon type="primary"/>
                    <span className="text text_type_main-default ml-2">Лента заказов</span>
                </a>
            </li>
            <li>
                <a className={appHeaderStyles.menu_item_logo}>
                    <Logo type="primary"/>
                </a>
            </li>
            <li>
                <a className={appHeaderStyles.menu_item}>
                    <ProfileIcon type="primary"/>
                    <span className="text text_type_main-default ml-2">Личный кабинет</span>
                </a>
            </li>
        </ul>
        </nav>
    );
}
export default AppHeader;
