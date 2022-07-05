import { Fragment } from 'react'
import mealsImage from '../../assets/ice.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = props =>{
    return <Fragment>
        <header className={classes.header}>
            <h1>theIceHouse</h1>
            <HeaderCartButton onClick={props.onShowCart  }/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Table of food" />
        </div>
    </Fragment>
}

export default Header