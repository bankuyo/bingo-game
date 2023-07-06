import React from "react";

type Subtitle = {
    subTitle: string
}

const SubHeader: React.FC<Subtitle> = ({subTitle}: Subtitle) => {
    return (
        <div className="navbar navbar-dark" style={{ backgroundColor: "#7d02f0", padding:0}}>
            <div className="container d-flex justify-content-center">
                <h3 className="navbar-brand fs-5">{subTitle}</h3>
            </div>
        </div>
    )
}

export default SubHeader;