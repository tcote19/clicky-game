import React from "react";

class GameButton extends React.Component {
    state = {
        id: this.props.id,
        clicked: false
    };
    render() {
        return (
            <div className="float-left" key={this.props.id} >
            <img className="bike-image" id={this.props.id} src={"../public/assets/images/img01" + this.props.id + ".png"} onClick={this.props.clickBike}/>
            </div>
        );
    }
};

export default GameButton;