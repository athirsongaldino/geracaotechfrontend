import { useState } from "react";

const Gallery = ({ className = "", width = "700", height = "571", radius = "4px", showThumbs = false, images = [] }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    };

    const previousImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    };

    const goToImage = (index) => {
        setCurrentIndex(index)
    };

    function getBackgroundColor(index) {
        const colors = ["#E2E3FF", "#FFE8BC", "#FFC0BC", "#DEC699", "#E8DFCF"];
        return colors[index % colors.length];
    };

    return (
        <div className={`flex flex-col gap-4 ${className}`} style={{ width: `${width}px` }}>
            <div
                className="relative overflow-hidden bg-[#E2E3FF]"
                style={{ height: `${height}px` }}
            >
                <div
                    className="absolute inset-0 transition-transform duration-300 ease-in-out flex"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`Gallery image ${index + 1}`}
                            className=""
                            style={{
                                minWidth: '100%',
                                height: `${height}px`,
                                borderRadius: radius,
                                backgroundColor: getBackgroundColor(index)
                            }}
                        />
                    ))}
                </div>

                <button
                    onClick={previousImage}
                    disabled={currentIndex === 0}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center disabled:opacity-0 disabled:cursor-not-allowed"
                >
                    <img src="/assets/setaleft.svg" alt="Previous" className="w-8 h-8" />
                </button>

                <button
                    onClick={nextImage}
                    disabled={currentIndex === images.length - 1}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center disabled:opacity-0 disabled:cursor-not-allowed"
                >
                    <img src="/assets/setaright.svg" alt="Next" className="w-8 h-8" />
                </button>
            </div>

            {showThumbs && (
                <div className="flex justify-between w-[701px] overflow-x-hidden px-1 py-2">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`relative flex-shrink-0 transition-all ${currentIndex === index ? "ring-2 ring-primary" : ""}`}
                            style={{ borderRadius: radius }}
                        >
                            <img
                                src={image.src}
                                alt={`Thumbnail ${index + 1}`}
                                className=""
                                style={{
                                    width: '117px',
                                    height: '96px',
                                    borderRadius: radius,
                                    backgroundColor: getBackgroundColor(index)
                                }}
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Gallery;