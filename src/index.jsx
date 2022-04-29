import { useEffect, useState, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Maze from './components/Maze.jsx'
import cancion from '../public/Multimedia/OrquestaJones.mp3'

const App = () => {
    const [caminos, setCaminos] = useState(null)
    const [alto, setAlto] = useState(5)
    const [ancho, setAncho] = useState(5)
    const [victoria, setVictoria] = useState(false)
    const audio = useRef(new Audio(cancion))

    useEffect(() => {
        audio.current.load()
        audio.current.play()
        audio.current.loop = true
        audio.current.volume = 0.15
    }, [])

    return (
        <div css={{
            backgroundColor: 'black',
            display: 'flex',
            width: '100vw',
            height: '100vh',
            margin: 0,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}
        >
            <Header
                alto={alto}
                ancho={ancho}
                setAlto={setAlto}
                setAncho={setAncho}
                setCaminos={setCaminos}
                setVictoria={setVictoria}
            />

            {caminos != null
            && (
                <Maze
                    caminos={caminos}
                    setCaminos={setCaminos}
                    victoria={victoria}
                    setVictoria={setVictoria}
                />
            )}
        </div>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
