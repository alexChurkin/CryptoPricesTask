import CryptosList from "./CryptosList";
import LoadSpinner from "./ui/LoadSpinner";
import RetrySuggestion from "./ui/RetrySuggestion";

const CryptosBooklet = ({ isLoading, isFailed, onClickRetry, items, currency }) => {
    if (isLoading)
        return <LoadSpinner />;
    else if (isFailed) {
        return <RetrySuggestion onClickRetry={onClickRetry} />;
    }
    else if (items == null)
        return <></>;
    else return (
        <>
            <CryptosList
                items={items}
                currency={currency} />
        </>
    );
}

export default CryptosBooklet;