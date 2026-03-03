import React from "react";

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="landing-page">
                    <div className="wrapper">
                        <div className="d-flex flex-column justify-content-center text-center align-items-center h-100">
                            <h2 className="display-3">Welcome to React Routing</h2>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perferendis nisi obcaecati, quo nobis beatae reprehenderit impedit dolorum molestias quos delectus hic ab maiores eligendi minus! Maxime labore soluta praesentium!</p>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Home;