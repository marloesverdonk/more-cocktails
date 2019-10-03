import React from 'react'
import CocktailList from './CocktailList'
import { connect } from 'react-redux'

class CocktailListContainer extends React.Component{
  
  render(){
    //console.log(this.props)
    return(
      <div>
        <CocktailList cocktails={this.props.cocktails}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cocktails: state
  }
}

export default connect(mapStateToProps)(CocktailListContainer)