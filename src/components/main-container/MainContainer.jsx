import {BurgerIngredients} from "../burger-ingredients/BurgerIngredients";
import {BurgerConstructor} from "../burger-constructor/BurgerConstructor";
import styles from "./main-container.module.css"

export const MainContainer = () => {
    return <main className={styles.container}>
        <BurgerIngredients/>
        <BurgerConstructor/>
    </main>
}
