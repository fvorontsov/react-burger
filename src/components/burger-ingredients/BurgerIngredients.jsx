import styles from "./burger-ingredients.module.css"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {IngredientsList} from "./ingredients-list/IngredientsList";
import React from "react";
import {bun, main, sauce} from "../../utils/data";


export const BurgerIngredients = () => {

    const doNothing = () => {
    }

    return <section className="mt-10">
        <p className="text text_type_main-large mb-5">Соберите бургер</p>
        <div className={styles.tabs}>
            <Tab active value={"one"} onClick={doNothing}>Булки</Tab>
            <Tab active={false} value={"two"} onClick={doNothing}>Соусы</Tab>
            <Tab active={false} value={"three"} onClick={doNothing}>Начинки</Tab>
        </div>
        <div className={`${styles.container} custom-scroll mt-10`}>
            <IngredientsList title="Булки" ingredients={bun}/>
            <IngredientsList title="Соусы" ingredients={sauce}/>
            <IngredientsList title="Начинки" ingredients={main}/>
        </div>
    </section>
}
