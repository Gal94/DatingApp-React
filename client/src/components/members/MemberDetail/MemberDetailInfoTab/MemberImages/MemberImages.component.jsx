import ImageGallery from 'react-image-gallery';
import './MemberImages.styles.css';

//TODO: Add a default asset image if images is an empty object

const MemberImages = (props) => {
    const images = props.photos.map((photo) => {
        return {
            original: photo.url,
            thumbnail: photo.url,
        };
    });
    return (
        <ImageGallery
            showFullscreenButton={false}
            showPlayButton={false}
            items={images}
        />
    );
};

export default MemberImages;
