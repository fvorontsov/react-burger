import styles from "./app-header.module.css"
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const AppHeader = () => {
    return <header className={styles.header}>
        <nav className={styles.nav_body}>
            <ul className={styles.main_list}>
                <li className={styles.main_list_item}>
                    <ul className={styles.sub_list}>
                        <li className={`${styles.link_container} mr-2`}>
                            <div className={`${styles.link} mr-5`}>
                                <BurgerIcon type="primary"/>
                                <p className="text text_type_main-default ml-2">Конструктор</p>
                            </div>
                        </li>

                        <li className={styles.link_container}>
                            <div className={`${styles.link} ml-5 mr-5`}>
                                <ListIcon type="primary"/>
                                <p className="text text_type_main-default ml-2">Лента заказов</p>
                            </div>
                        </li>
                    </ul>
                </li>

                <li className={styles.main_list_item}>
                    <div className={styles.link}>
                        <Logo/>
                    </div>
                </li>

                <li className={styles.main_list_item}>
                    <div className={`${styles.link} ml-5`}>
                        <ProfileIcon type="primary"/>
                        <p className="text text_type_main-default ml-2">Личный кабинет</p>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
}
