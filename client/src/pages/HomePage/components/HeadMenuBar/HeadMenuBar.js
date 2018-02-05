import React from 'react';
import './HeadMenuBar.css';

export default class HeadMenuBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="HeadMenuBar-Main">
                
                <div className="HeadMenuBar-ItemContainer">
                    <div className="HeadMenuBar-LogoArea">
                        <p>lily something</p>
                    </div>
                    <div className="HeadMenuBar-OptionContainer">
                        <div className="HeadMenuBar-OptionContainer-Item">
                            <p>PRODUCTS</p>
                        </div>
                        <div className="HeadMenuBar-OptionContainer-Item">
                            <p>CONTACT</p>
                        </div>
                        <div className="HeadMenuBar-OptionContainer-Item">
                            <p>ABOUT</p>
                        </div>
                    </div>
                </div>
                <div className="HeadMenuBar-BottomTrim"></div>
            </div>
        )
    }
}