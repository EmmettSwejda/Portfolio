export default function Footer({ item,  }) {
    const footerStyle= {
        display: 'flex',
        justifyContent: 'center', // optional: aligns the content to the center
        alignItems: 'flex-start', // keeps them aligned at the top
        gap: '20px', // space between items
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#716969',
        flexWrap: 'wrap' // helps on smaller screens
    }
    const footerItemStyle = {
        display: 'flex',
        flexFlow: 'column nowrap',
        borderRadius: '15px',
        backgroundColor: '#2d2e2e',
        gap: '10px',
        margin: "10px",
        padding: '20px',
        boxShadow: "5px 5px #0f0f0f",
        width: 'fit-content',
    }
    const footerItemHeaderStyle = {
        borderRadius: '5px',
        padding: '5px',
        paddingRight: '20px',
        paddingLeft: '20px',
        backgroundColor: '#0f0f0f',
    }
    const footerContactStyle = {
        textAlign: 'left'
    }
    const footerContactEmailStyle = {
        color: '#fbfbfb',
        marginLeft: "5%",
        fontWeight: 'bold'
    }
    const footerEducationList = {
        listStyleType: "circle",
        textAlign: 'left',
        marginLeft: "10%"
    }
    const footerEducationHeaderStyle ={
        textAlign: 'left'
    }

    return (
        <footer style={footerStyle}>
            <div style={footerItemStyle}>
                <h2 style={footerItemHeaderStyle}>Site Map</h2>
                <div>
                    <a href="/about">About</a>
                </div>
                <div>
                    <a href="/projects">projects</a>
                </div>
            </div>
            <div style={footerItemStyle}>
                <h2 style={footerItemHeaderStyle}>Emmett Swejda</h2>
                <div>
                    <h3 style={footerEducationHeaderStyle}>Education:</h3>
                    <ul>
                        <li style={footerEducationList}>High School</li>
                        <li style={footerEducationList} ><a href="https://saskpolytech.ca/programs-and-courses/programs/Computer-Systems-Technology.aspx">Computer Systems Technology</a></li>
                    </ul>
                </div>
                <div>
                    <h3 style={footerContactStyle}>Contact:</h3>
                    <a style={footerContactEmailStyle} href="mailto:emmettswejda1@gmail.com">EmmettSwejda1@gmail.com</a>
                </div>
            </div>
            <div style={footerItemStyle}>
                <h2 style={footerItemHeaderStyle}>Social</h2>
                <div>
                    <a href="https://www.linkedin.com/in/EmmettSwejda/">Linkedin</a>
                </div>
                <div>
                    <a href="https://github.com/EmmettSwejda">Github</a>
                </div>
            </div>
        </footer>
    )
}