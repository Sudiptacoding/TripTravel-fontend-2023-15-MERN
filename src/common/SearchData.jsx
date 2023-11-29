import React, { useEffect, useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Tooltip } from 'react-tooltip'
import useAxios from '../hooks/useAxios'
import { useNavigate } from 'react-router-dom';

function SearchData() {
    const axiosData = useAxios();
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    useEffect(() => {
        axiosData.get('allservices')
            .then(res => {
                setItems(res.data)
            })

    }, [])

    const handleOnSearch = (string, results) => {
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        console.log(result)
    }

    const handleOnSelect = (item) => {
        navigate(`/details/${item?._id}`)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <div className='cursor-pointer'>
                <div >
                    <a data-tooltip-id={item?._id}><p>{item?.serviceName}</p></a>
                    <Tooltip id={item?._id}>
                        <div className='w-[300px] h-auto'>
                            <img className='w-[300px]' src={item?.serviceImage} alt="" />
                            <span className='' style={{ display: 'block', textAlign: 'left' }}>Catagory: {item?.category}</span>
                            <span className='' style={{ display: 'block', textAlign: 'left' }}>Services: {item?.serviceName}</span>
                        </div>
                    </Tooltip>
                </div>
            </div>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                        fuseOptions={{ keys: ["category", "serviceName"] }}
                        resultStringKeyName="category"
                    />
                </div>
            </header>
        </div>
    )
}

export default SearchData