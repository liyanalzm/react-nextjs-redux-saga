import React from "react";

class NotFound extends React.Component {
    render() {
        const { error } = this.props;
        return (
                <div>
                    {error && 
                        <div>
                            <h1>Something went wrong!</h1>
                            <p> Error name: {error.name} </p>
                            <p> Error message: {error.message}</p>
                        </div>
                    }
                </div>
        );
    }
}

export default NotFound;