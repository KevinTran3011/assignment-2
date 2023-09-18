import './add_box.styles.css';

const Add_box = ({className, onChangeHandler}) =>{
    return(
        <div className='search-bar'>
            <input className={`search-box ${className}`}  
            placeholder= 'Add new contact'
            type="search"
            onChange = {onChangeHandler}/>
        </div>
    )
}

export default Add_box