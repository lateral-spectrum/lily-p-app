import React from 'react'; 
import './HomePage.css'; 
import HeadMenuBar from './components/HeadMenuBar/HeadMenuBar'; 
import HeadImageSection from './components/HeadImageSection/HeadImageSection'; 

export default class HomePage extends React.Component {
    constructor() {
        super();         
    }       
    
    render() {
        return (
            <div className="HomePage-Main">
                <HeadMenuBar />
                <HeadImageSection /> 
                <p>jd;slakjf;s</p>
            </div>
        )
    }
}