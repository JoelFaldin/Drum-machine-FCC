import styles from '../styles/Tune.module.css'

const Tune = (props: {playTrigger: {name: string, keybind: string, url: string}, index: Number}) => {
    const playSound = () => {
        // Playing the clicked sound:
        (document.getElementById(props.playTrigger.keybind) as HTMLAudioElement).play();
        // Using DOM to put name of the played drum in h2:
        (document.getElementById('innerText') as HTMLElement).innerText = props.playTrigger.name;
    }

    return (
        <button className={`drum-pad ${styles.drumpad}`} id={`drum-${props.playTrigger.keybind}`} onClick={() => playSound()}>
            <audio className='clip' id={props.playTrigger.keybind} src={props.playTrigger.url} preload='auto' />
            <span className={styles.innerLetter}>{props.playTrigger.keybind}</span>
        </button>
    )
}

export default Tune