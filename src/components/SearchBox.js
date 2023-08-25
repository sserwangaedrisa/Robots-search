import React from "react";

const SearchBox =({searchfield, searchChange})=>{
    return(
        <div className="">
            <input className=" bg-light-blue br3 pa3" type='search' placeholder='Search here' onChange={searchChange} />
        </div>
    )
}
export default SearchBox            