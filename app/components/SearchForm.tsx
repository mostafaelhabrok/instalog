import React from 'react'

const SearchForm = () => {
    return (

        <div className="overflow-x-auto p-5 search-form top-radius ">
            <div className='flex '>
                <input type="text" placeholder="Search name, email or action..." className="input input-bordered background w-full no-radius left-radius " />
                <button className="no-radius btn bordered">
                    <i className="fa-solid fa-filter"></i>
                    Filter
                </button>
                <button className="no-radius btn bordered">
                    <i className="fa-solid fa-file-export"></i>
                    Export
                </button>
                <button className="no-radius btn bordered right-radius">
                    <i className="fa-solid fa-record-vinyl"></i>
                    Live
                </button>
            </div>
            <div className='flex t-head px-5 mt-5'>
                <div className='font-bold t-title w-4/12'>Actor</div>
                <div className='font-bold t-title w-4/12'>Action</div>
                <div className='font-bold t-title w-3/12'>Date</div>
                <div className='font-bold t-title w-1/12'></div>
            </div>
        </div>
    )
}

export default SearchForm