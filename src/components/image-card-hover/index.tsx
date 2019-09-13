import * as React from 'react';
import './image-card-hover.css';

import IProps from './types';

export default class ImageCardHover extends React.Component<IProps> {
    render() {
        const {color, id, userName} = this.props;

        const author = (
            <h6 className="col-12 text-center text-light mt-1">
                Author:{' '}
                <a
                    className="font-weight-bold text-light"
                    href={`https://unsplash.com/@${userName}`}
                    target="_blank">
                    {userName}
                </a>
            </h6>
        );
        const averagedColor = (
            <h6 className="col-12 text-center text-light mt-1">Color: {color}</h6>
        );

        const downloadBtn = (
            <a
                className="btn btn-success col-8 my-1"
                href={`https://unsplash.com/photos/${id}/download?force=true`}
                role="button">
                Download
            </a>
        );

        return (
            <div className="image-card-hover rounded d-flex align-items-end">
                <div className="bg-info rounded d-flex flex-wrap justify-content-center w-100 h-60">
                    {author}
                    {averagedColor}
                    {downloadBtn}
                </div>
            </div>
        );
    }
}
