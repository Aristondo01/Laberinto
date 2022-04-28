import { useEffect, useRef } from 'react'

import izquierda from '../../public/Multimedia/jonesizquierda.gif'
import arriba from '../../public/Multimedia/jonesarriba.gif'
import abajo from '../../public/Multimedia/jonesabajo.gif'
import derecha from '../../public/Multimedia/jonesderecha.gif'

const Player = ({ setCaracter, victoria }) => {
    const n = useRef(0)
    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            if (!victoria) {
                n.current += 1
                switch (event.key) {
                case 'ArrowLeft':
                case 'a':
                    setCaracter([izquierda, 'izquierda', n.current])
                    break
                case 'ArrowRight':
                case 'd':
                    setCaracter([derecha, 'derecha', n.current])
                    break
                case 'ArrowUp':
                case 'w':
                    setCaracter([arriba, 'arriba', n.current])
                    break
                case 'ArrowDown':
                case 's':
                    setCaracter([abajo, 'abajo', n.current])
                    break
                default:
                    break
                }
            } else setCaracter([abajo, 'abajo', n.current])
        })
    }, [])
}
export default Player
