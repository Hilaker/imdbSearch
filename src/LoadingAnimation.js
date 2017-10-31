/**
 * Created by hilakerer1 on 30/10/2017.
 */
import React from 'react'
import './styles/LoadingAnimation.css'

class LoadingAnimation extends React.Component {
    render(){
        return this.props.showLoading?  (
            <div>
                <div className='glass-panel'></div>
                <i className="w3-jumbo spinner fa fa-refresh"></i>
            </div>
        ) : (<div></div>);
    }
}

export default LoadingAnimation;