import {  KeyboardEvent } from "react"
import player from "./player"
import Tune from "./Tune"
import styles from '../styles/Machine.module.css'

interface Player {
    name: string
    keybind: string
    url: string
}

const Machine = () => {
    
    const playSound = (event: KeyboardEvent<HTMLDivElement>) => {
        // Making an object from the key pressed:
        const object: Player | undefined = player.find(clip => clip.keybind === event.key.toUpperCase())
        if (!object) return {}
        // Playing the sound:
        const audio = document.getElementById(object.keybind) as HTMLAudioElement
        audio.play()
        // Using DOM to put name of the played drum in h2:
        const text = document.getElementById('innerText') as HTMLHeadingElement
        text.innerText = object.name
    }

    return (
        <div className='contenedor' id='drum-machine' onKeyDown={playSound}>
            <h1 className={styles.h1Class}>FCC Sound Player (Drum Machine)</h1>
            <div className={styles.machine}>
                {player.map((element, index) => (
                    <Tune playTrigger={element} index={index} key={element.keybind} />
                ))}
            </div>
            <div id='display' className={styles.display}>
                <h2 id='innerText' className={styles.h2Class}></h2>
            </div>
        </div>
    )
}

export default Machine