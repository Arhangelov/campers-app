import React, { useEffect, useState } from 'react'
import { getCampersService } from '../../services/search-campers.service';
import List from '../List/List';
import './SearchStyles.css';

function Search() {
    const [ searchValue, setSearchValue ] = useState('');
    const [ resData, setResData ] = useState([]);

    useEffect( ()=> {
        if(searchValue.length === 0) {
            return;
        }

        if(searchValue.length === 0 || searchValue.length > 3) {
             getCampersService(searchValue)
             .then(data => {
                setResData(data.data);

            })
                
        }
    },[searchValue])
  return (
    <div className='search-container'>
        <input 
        type="text"
        placeholder='Search for campers to rent...'
        onChange={(e) =>{
                const currValue = e.target.value;
                if(currValue.length > 3){
                    setSearchValue( currValue )
                }
            } 
        }
        />
        <div className="container">
        { resData.map((el) => (
            <List key={el.id} imgUrl={el.attributes.primary_image_url} name={el.attributes.name} />
            ))
        }
        </div>
    </div>
  )
}

export default Search