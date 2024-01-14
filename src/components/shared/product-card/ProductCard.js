import styles from "./productCard.module.css"
import RatingStars from "./RatingStars";

function ProductCard({ button, type, image, productName, productDescreption, discount, showLabel, isTrending, showRating, rating, price, showOldPrice, ratersNumber }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={productName} className={styles.cardImage} />
            <div className={styles.cardFrame}>
                <div className={`${styles["cardInfo"]} ${styles["productNameText"]}`}>
                    <div>
                        {productName}
                    </div>
                    <div className={styles.descriptionText}>{productDescreption}</div>
                    {showRating && <div className={styles.ratingsLayout}><RatingStars rating={rating} /><div className={styles.ratingText}>{ratersNumber} Ratings</div></div>}
                    <div className={styles.priceLayout}>
                        <div>${price}</div>
                        {showOldPrice && (
                            <>
                                <div className={styles.oldPriceText}>${price / discount}</div>
                                <div className={styles.discountText}>{discount * 100}% OFF</div>
                            </>
                        )}
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M12 20.5415C12 20.5415 2.625 15.2915 2.625 8.91651C2.62519 7.78976 3.01561 6.69785 3.72989 5.82643C4.44416 4.95501 5.4382 4.35786 6.54299 4.13652C7.64778 3.91517 8.79514 4.08329 9.78999 4.61229C10.7848 5.14129 11.5658 5.99852 12 7.03823L12 7.03824C12.4342 5.99853 13.2152 5.1413 14.21 4.6123C15.2049 4.08329 16.3522 3.91517 17.457 4.13652C18.5618 4.35786 19.5558 4.95501 20.2701 5.82643C20.9844 6.69785 21.3748 7.78976 21.375 8.91651C21.375 15.2915 12 20.5415 12 20.5415Z" stroke="#13101E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    );
}

export default ProductCard;