import React, { useState } from 'react'
import PropTypes from 'prop-types'
import titulo from '../../public/Multimedia/Titulo.gif'

const Header = ({ alto, setAlto, ancho, setAncho, setCaminos, setVictoria }) => {
    const [Created, setCreated] = useState(false)

    const fetchLaberinto = async () => {
        const fet = `https://maze.juanelcaballo.club/?type=json&w=${ancho}&h=${alto}`
        const response = await fetch(fet)
            .then((response1) => response1.json())
            .then((responseInJSON) => responseInJSON)
        setCaminos([...response])
        setCreated(true)
    }

    const Reset = () => {
        setCaminos(null)
        setCreated(false)
        setAncho(1)
        setAlto(1)
        setVictoria(false)
    }
    return (
        <>
            {Created
            && (
                <div css={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '15px' }}>
                    <button
                        type="button"
                        css={{
                            height: '25px',
                            border: '0',
                            backgroundColor: '#8d5d18',
                            color: 'white',
                            borderRadius: '5px',
                            marginTop: '10px',
                            fontWeight: 'bold',
                        }}
                        onClick={() => { Reset() }}
                    >
                        Reset Maze
                    </button>

                </div>
            )}

            {!Created
            && (
                <div css={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '354px', height: '260px' }}>
                    <div css={{
                        backgroundImage: `url(${titulo})`,
                        display: 'flex',
                        width: '333px',
                        height: '200px',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        alignSelf: 'center',
                    }}
                    />
                    <div css={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                    >
                        <input
                            placeholder="Ancho del laberinto"
                            type="text"
                            name="ancho"
                            value={ancho}
                            css={{
                                display: 'flex',
                                width: '165px',
                                marginRight: '5px',
                                backgroundColor: '#886532',
                                border: '0',
                                borderRadius: '5px',
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                            onChange={(e) => { setAncho(e.target.value) }}
                        />
                        <input
                            placeholder="Alto del laberinto"
                            type="text"
                            name="alto"
                            value={alto}
                            css={{
                                display: 'flex',
                                width: '165px',
                                marginLeft: '5px',
                                backgroundColor: '#886532',
                                border: '0',
                                borderRadius: '5px',
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                            onChange={(e) => { setAlto(e.target.value) }}
                        />
                    </div>
                    <button
                        type="button"
                        css={{
                            height: '25px',
                            border: '0',
                            backgroundColor: '#8d5d18',
                            color: 'white',
                            borderRadius: '5px',
                            marginTop: '10px',
                            fontWeight: 'bold',
                        }}
                        onClick={() => { fetchLaberinto() }}
                    >
                        Create Maze
                    </button>
                </div>
            )}
        </>
    )
}

Header.propTypes = {
    alto: PropTypes.number.isRequired,
    setAlto: PropTypes.func.isRequired,
    ancho: PropTypes.number.isRequired,
    setAncho: PropTypes.func.isRequired,
    setVictoria: PropTypes.func.isRequired,
    setCaminos: PropTypes.func.isRequired,
}

export default Header
