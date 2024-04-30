import React, { useState } from 'react'

const SwitchTab = ({ data, onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    const activeTab = (tab, index) => {
        setSelectedTab(index)
        onTabChange(tab, index)
    }

    return (
        <div className='switchingTabs ml-auto h-10  rounded-xl p-1'>
            <div className="tabItems flex items-center h-8 relative">
                {data.map((tab, index) => (
                    <span
                        key={index}
                        onClick={() => activeTab(tab, index)}
                        className={`h-full flex items-center rounded-full justify-center w-20 text-base relative z-10 cursor-pointer transition-colors duration-200 ease-in ${selectedTab === index ? 'bg-blue-800 text-white' : 'border-2 border-blue-800'}`}>
                        {tab}
                    </span>
                ))}
                <span className={`movingBg h-8 w-20 rounded-xl absolute left-0 transition-all duration-200 ease-in`}></span>
            </div>
        </div>
    )
}

export default SwitchTab
