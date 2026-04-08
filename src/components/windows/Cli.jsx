import React, { useState } from 'react'
import MacWindow from './MacWindow'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const [input, setInput] = useState("")
    const [history, setHistory] = useState([])

    const commands = {
        about: () => 'I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.',

        skills: () => `Frontend: React, Vue.js, JS, Sass, HTML/CSS
                       Backend: Node.js, Express
                       Databases: MongoDB, PostgreSQL, MySQL
                       Tools: Git, Docker, Webpack, Vite
                       Cloud: AWS, Azure, Heroku`,
                         
        projects: () => `1. Portfolio Website - React + Vite
                         2. E-commerce Platform - MERN Stack
                         3. Task Management App - Next.js
                         4. Real-time Chat App - Socket.io
                         5. Data Dashboard - React + Chart.js`,

        // experience: () => `Senior Developer @ Tech Corp (2022 - Present)
        //                    - Led development of React applications
        //                    - Mentored junior developers`,

        contact: () => `Email: tiwariharsh8858@gmail.com Phone: +91 8858754512`,

        github: () => {
            window.open('https://github.com/harshtiwari80', '_blank')
            return 'Opening GitHub...'
        },

        social: () => `LinkedIn: https://www.linkedin.com/in/harshtiwari23/ `,

        echo: (...args) => args.join(" ")
    }

    const welcomeMessage = `
╔════════════════════════════════════╗
║     Welcome to My Portfolio CLI    ║
╚════════════════════════════════════╝

Type 'help' to see commands.
`

    const handleCommand = (e) => {
        if (e.key === "Enter") {
            const commandParts = input.split(" ")
            const cmd = commandParts[0]
            const args = commandParts.slice(1)

            if (cmd === "clear") {
                setHistory([])
                setInput("")
                return
            }

            if (cmd === "help") {
                const helpText = Object.keys(commands).join(", ")
                setHistory([...history, `> ${input}`, `Commands: ${helpText}`])
                setInput("")
                return
            }

            if (commands[cmd]) {
                const output = commands[cmd](...args)
                setHistory([...history, `> ${input}`, output])
            } else {
                setHistory([...history, `> ${input}`, "Command not found"])
            }

            setInput("")
        }
    }

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
            <div className="cli-window">
                <pre>{welcomeMessage}</pre>

                {history.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}

                <div className="input-line">
                    <span className="prompt">harshtiwari:~$</span>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        autoFocus
                    />
                </div>
            </div>
        </MacWindow>
    )
}

export default Cli;
