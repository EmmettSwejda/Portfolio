import React from 'react'
import styles from './footer.module.css'
export default function Footer() {
    const footerStyle: React.CSSProperties = {
        margin: "0 auto",
        borderBottomRightRadius: "5px",
        borderBottomLeftRadius: "5px",
        maxWidth: "900px",
        display: 'flex',
        justifyContent: 'center', // optional: aligns the content to the center
        alignItems: 'flex-start', // keeps them aligned at the top
        gap: '20px', // space between items
        textAlign: 'center',
        backgroundColor: '#9CB8D1',
        flexWrap: 'wrap', // helps on smaller screens
        fontWeight: 'bold',
        borderTop: '5px solid black'
    }
    const footerItemStyle: React.CSSProperties = {
        display: 'flex',
        flexFlow: 'column nowrap',
        borderRadius: '15px',
        backgroundColor: '#235789',
        color: '#000000',
        gap: '10px',
        margin: "10px",
        padding: '20px',
        width: 'fit-content',
    }
    const footerItemHeaderStyle: React.CSSProperties  = {
        borderRadius: '5px',
        padding: '5px',
        paddingRight: '20px',
        paddingLeft: '20px',
        backgroundColor: '#ff7f11',
        color: '#000000',
        fontSize: "25px",
    }
    const footerContactStyle: React.CSSProperties  = {
        textAlign: 'left',
        fontSize: "30px"
    }
    const footerContactEmailStyle: React.CSSProperties  = {
        color: '#000000',
        marginLeft: "5%",
    }
    const footerEducationList: React.CSSProperties  = {
        listStyleType: "circle",
        textAlign: 'left',
        marginLeft: "10%"
    }
    const footerEducationHeaderStyle: React.CSSProperties  ={
        textAlign: 'left',
        fontSize: "30px",
    }

    return (
        <footer style={footerStyle}>
            <div style={footerItemStyle} className={styles.growShadow}>
                <h2 style={footerItemHeaderStyle}>Emmett Swejda</h2>
                <div>
                    <h3 style={footerEducationHeaderStyle}>Education:</h3>
                    <ul>
                        <li style={footerEducationList}>
                            <div>
                                <a href="https://saskpolytech.ca/programs-and-courses/programs/Computer-Systems-Technology.aspx" target="_blank" rel="noopener noreferrer">
                                    Computer Systems Technology<svg style={{display: 'inline-block'}} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 style={footerContactStyle}>Contact:</h3>
                    <a style={footerContactEmailStyle} href="mailto:emmettswejda1@gmail.com">EmmettSwejda1@gmail.com</a>
                </div>
            </div>
            <div style={footerItemStyle} className={styles.growShadow}>
                <h2 style={footerItemHeaderStyle}>Social</h2>
                <div>
                    <a href="https://www.linkedin.com/in/EmmettSwejda/" target="_blank" rel="noopener noreferrer">
                        Linkedin<svg style={{display: 'inline-block'}} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/EmmettSwejda" target="_blank" rel="noopener noreferrer">
                        Github<svg style={{display: 'inline-block'}} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    </a>
                </div>
            </div>

        </footer>
    )
}