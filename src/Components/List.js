import ListItem from "./ui/ListItem";

const List = ({ items, currency }) => (
    <div className="list-group">
        {
            items != null ?
                items.map(
                    (item) =>
                        <ListItem
                            key={item.id}
                            iconUrl={item.image}
                            name={item.name}
                            rank={item.market_cap_rank}
                            price={item.current_price}
                            currency={currency}
                            change24h={item.price_change_percentage_24h}
                            volume24h={item.total_volume}
                            mktCap={item.market_cap}
                        />
                ) :
                <></>
        }
    </div>
)

export default List;