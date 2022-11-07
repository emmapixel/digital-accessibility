import styles from './Button.css';

export default function Button( {children} ) {
    return(
        <main>
            <button type="button" className="button">{children}</button>
        </main>
    )
}