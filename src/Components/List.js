import ListItem from "./ui/ListItem";
import LoadSpinner from "./ui/LoadSpinner";

const List = ({ isLoading, items, currency }) => (
    <>
        {isLoading ?
            <LoadSpinner /> :
            <div className="list-group">
                {
                    (items != null) ?
                        items.map(
                            (item) =>
                                <ListItem
                                    key={item.id}
                                    iconUrl={item.image}
                                    name={item.name}
                                    rank={item.market_cap_rank}
                                    price={item.current_price_formatted}
                                    currency={currency}
                                    change24h={item.price_change_percentage_24h}
                                    volume24h={item.total_volume_formatted}
                                    mktCap={item.market_cap_formatted}
                                />
                        ) :
                        <></>
                }
            </div>
        }
    </>



)

export default List;