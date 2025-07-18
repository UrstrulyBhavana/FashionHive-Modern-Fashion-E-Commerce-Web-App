import React from 'react'
const Cookie = (props) => {
    return (
        <>
            <div className="cookie-bar">
                <p>We use cookies to improve our site and your shopping experience. By continuing to browse our site you accept
                    our cookie policy.</p>
                <button onClick={props.accept} className="btn theme-btn-one bg-black btn_sm mr-2 ml-4">accept</button>
                <button onClick={props.cancel} className="btn theme-btn-one bg-black btn_sm ml-2">decline</button>
            </div>
        </>
    )
}

export default Cookie
