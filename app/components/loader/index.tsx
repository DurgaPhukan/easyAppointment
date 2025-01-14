import React from 'react'

const LoaderLinear = () => {
    return (
        <div className="flex justify-center items-center">
            <svg viewBox='0 0 64 48' className="overflow-visible w-36 h-64">
                <polyline
                    points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                    className="fill-none stroke-[2] stroke-primary rounded-lg"
                    id="back">
                </polyline>
                <polyline
                    points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                    className="fill-none stroke-[2] stroke-secondary rounded-lg animate-dash"
                    id="front">
                </polyline>
            </svg>
        </div>

    )
}

export default LoaderLinear