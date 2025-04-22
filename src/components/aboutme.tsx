import React from "react";
import styles from "@/components/footer.module.css";

const AboutMeCard: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: '#9CB8D1',
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        maxWidth: "900px",
        margin: "0 auto",
    };

    const imageStyle: React.CSSProperties = {
        width: "100%",
        maxWidth: "280px",
        borderRadius: "1rem",
        objectFit: "cover",
        marginBottom: "1.5rem",
    };

    const headingStyle: React.CSSProperties = {
        fontSize: "1.8rem",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: '5px',
        padding: '5px',
        paddingRight: '20px',
        paddingLeft: '20px',
    };

    const paragraphStyle: React.CSSProperties = {
        fontSize: "1.1rem",
        lineHeight: "1.6",
        textAlign: "center",
        backgroundColor: '#235789',
        borderRadius: '15px',
        color: 'black'
    };
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

    return (
        <div>
            <div style={containerStyle}>
                <img src="/IMG_0239.JPEG" alt="Emmett Swejda" style={imageStyle} className={styles.growShadow}/>
                <div style={paragraphStyle} className={styles.growShadow}>
                    <h2 style={headingStyle}>About Me</h2>
                    <p style={{padding:"10px"}}>
                        Hello! I'm Emmett Swejda, I am currently a second-year Computer Systems Technology student at Saskatchewan
                        Polytechnic. I am very well versed in software development, systems administration, and working in
                        agile development environments. my passion lies in technology and helping simplify other lives.
                        <br/>
                        I also have great real-world experience from roles in retail and
                        logistics, this is where I've developed strong problem-solving skills, and a great work ethic.
                        I enjoy spending my time fly fishing, snowboarding, and keeping up to date with the latest's technology's.
                        <br/>
                    </p>
                </div>
            </div>
            <div style={containerStyle}>
                <div style={paragraphStyle} className={styles.growShadow}>
                    <h2 style={headingStyle}>Projects</h2>
                        <h3 style={{fontSize: "30px"}}>Data Import Tool</h3>
                        <p>
                            This project was a group project in which I worked in a team of seven leveraging Metas
                            llama3.1 AI model to streamline customer data imports. During this project I learned how important communication is in a agile development environment.
                            <br/>
                            This used many technologys such as
                            <br/>-PHP
                            <br/>-MySQL
                            <br/>-Metas llama AI
                        </p>
                </div>
            </div>
            <div style={containerStyle}>
                <img src="/IMG_0178.JPEG" alt="Emmett Swejda" style={imageStyle} className={styles.growShadow}/>
                <div style={paragraphStyle} className={styles.growShadow}>
                    <h2 style={headingStyle}>Hobbies</h2>
                    <p style={{padding: "10px"}}>
                        Exploring outdoors is something I really enjoy! Last year I decided to take on fly fishing, I
                        challenged myself to learn the basics with only a few weeks before heading to the mountains to
                        fish some of the best rivers in canada.<br/>
                        I find it lots of fun to take random trips to explore my country. Last summer I drove down to
                        the US border to explore the grasslands nation park, a badlands section of saskatchewan. Below you can see the hike I went on during the
                        trip.

                    </p>
                    <iframe style={{padding: "20px"}} className="alltrails"
                            src="https://www.alltrails.com/widget/recording/afternoon-hike-at-bearpaw-sea-trail-243facb?u=m&sh=kd8hzl"
                            width="100%" height="400"
                            title="AllTrails: Trail Guides and Maps for Hiking, Camping, and Running"></iframe>
                </div>
            </div>
        </div>

    )
        ;
};

export default AboutMeCard;
