import clsx from "clsx";
import styles from './multiClass/multiClass.module.scss'

// classnames
// clsx

function Button({primary, normal, danger}) {
    return (
        <>
            <button className={clsx(styles.btn, {
                [styles.active]: false,
                [styles.primary]: primary,
                [styles.normal]: normal,
                [styles.danger]: danger

            })}>
                Click me!
            </button>
        </>
    )
}

export default Button;