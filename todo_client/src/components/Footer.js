import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p>&copy; 2024 ToDo Website. All rights reserved.</p>
                <p>
                    <a href="/privacy" className="text-white mx-2">Privacy Policy</a> |
                    <a href="/terms" className="text-white mx-2">Terms of Service</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
