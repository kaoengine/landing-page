import React from 'react';

import './InfoComponent.scss';
interface Props {
    title: string,
    detail: string,
    imageUrl: string
 }

const InfoComponent = (props: Props) => {
    return (
        <div className="bg-cover vh-100 ml-n3 background-img" style={{
            backgroundImage: `url(${props.imageUrl})`
          }}>
            <div className="position-absolute login-signup-content">
                <div className="position-relative text-white col-md-12 col-lg-7">
                    <h2 className="text-white">{props.title}</h2>
                    <p className="lead">{props.detail}</p>
                </div>
            </div>
        </div>
    );
}

export default InfoComponent;