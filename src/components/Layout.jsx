export default function Layout(props) {

    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient">Workout Program</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="" target="_blank">Noah Sterenberg</a> </p>
            <p>Made following tutorial from <a href="https://github.com/jamezmca">smoljames</a></p>
        </footer>
    )

    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}