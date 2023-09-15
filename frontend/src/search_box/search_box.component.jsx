import './search_box.styles.css';

const Search_box = ({className, onChangeHandler}) =>{
    return(
        <div className='search-bar'>
            <input className={`search-box ${className}`}  
            placeholder= 'Add new contact'
            type="search"
            onChange = {onChangeHandler}/>
        </div>
    )
}

export default Search_box