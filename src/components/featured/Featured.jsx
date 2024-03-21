import React from 'react'
import "./Featured.scss"

const Featured = () => {
    return (
        <div className='featured' >
            <div className="container">
                <div className="left">
                    <h1>Find the perfect company services for you business</h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./img/search.png" alt="" />
                            <input type="text" name="" id="" placeholder='search for companies or services' />
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular : </span>
                        <button>Cloud Computing</button>
                        <button>AI & ML</button>
                        <button>UI/UX Design</button>
                        <button>AR & VR</button>
                        <button>Cybersecurity </button>
                    </div>
                </div>
                {/* <div className="right">
                    <img src="./img/men1.jpg" alt="" srcset="" />
                </div> */}
            </div>
        </div>
    )
}

export default Featured
