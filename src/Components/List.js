import ListItem from "./ui/ListItem";

const List = ({items}) => (
    <div className="list-group">

        {
            items.map(
                (item) =>
                    <ListItem
                        iconUrl={item.iconUrl}
                        name={item.name}
                        rank={item.rank}
                        price={item.price}
                        currency={item.currency}
                        change24h={item.change24h}
                        volume24h={item.volume24h}
                        mktCap={item.mktCap}
                    />
            )
        }
    </div>
)

export default List;