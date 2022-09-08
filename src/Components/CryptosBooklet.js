import CryptosList from "./CryptosList";
import LoadSpinner from "./ui/LoadSpinner";
import PageSwitch from "./ui/PageSwitch";
import RetrySuggestion from "./ui/RetrySuggestion";

const CryptosBooklet = ({ isLoading, isFailed, onClickRetry, items, currency }) => {
    if (isLoading)
        return <LoadSpinner />
    else if (isFailed) {
        console.log("HEYYYYY");
        return <RetrySuggestion onClickRetry={onClickRetry} />
    }
    else if (items == null)
        return <></>;
    else return (
        <>
            <CryptosList items={items} currency={currency} />
            <PageSwitch />
        </>
    )
}

export default CryptosBooklet;