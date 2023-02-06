import styles from "./burger-constructor.module.css"
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ConstructorList} from "./constructor-list/ConstructorList";
import {data, selectedBun} from "../../utils/data";


export const BurgerConstructor = () => {
    return (
        <section className={`${styles.constructor} mt-25`}>
            <ul className={styles.list}>
                <li className="ml-8">
                    <ConstructorElement
                        type="top"
                        isLocked={false}
                        text={`${selectedBun.name} (верх)`}
                        thumbnail={selectedBun.image}
                        price={selectedBun.price}
                    />
                </li>
                <ConstructorList ingredients={data}/>
                <li className="ml-8">
                    <ConstructorElement
                        type="bottom"
                        isLocked={false}
                        text={`${selectedBun.name} (низ)`}
                        thumbnail={selectedBun.image}
                        price={selectedBun.price}
                    />
                </li>
            </ul>
            <div className={`${styles.container} mt-10 mr-4`}>
                <span className="text text_type_digits-medium mr-10">
                    500
                    <CurrencyIcon type="primary"/>
                </span>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
    );
}
