import React from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import playmarket from "../../../assets/img/playmarket.svg"
import appstore from "../../../assets/img/appstore.svg"
import useWindowDimensions from "../../../useWindowDimensions";







const Framer = ({ CARD_COLORS, title }) => {

    const {width} = useWindowDimensions()


    const CARD_OFFSET = width===1120 ? 73 : 50;

    const [cards, setCards] = React.useState(CARD_COLORS);
    const moveToEnd = from => {
        setCards(move(cards, from, cards.length - 1));
    };


    return (
        <div>
            <h2>{title}</h2>
            <div className="wrapperStyle">
                <ul className="cardWrapStyle">
                    {cards.map((color, index) => {
                        const canDrag = index === 0;

                        return (
                            <motion.li
                                key={color.id}
                                className="cardStyle"
                                style={{
                                    backgroundColor: color.color,
                                    cursor: canDrag ? "grab" : "auto"
                                }}
                                animate={{
                                    top: index * -CARD_OFFSET,
                                    zIndex: CARD_COLORS.length - index,
                                    backgroundColor: CARD_COLORS[index].color
                                }}
                                drag={canDrag ? "y" : false}
                                dragConstraints={{
                                    top: 0,
                                    bottom: 0
                                }}
                                onDragEnd={() => moveToEnd(index)}
                            >
                                {color.title && <h3 className="titleStyle">
                                    {color.title}
                                </h3>}
                                {color.img && <img src={color.img} alt="img" className="img2"/>}
                                {
                                    color.title === "Экономте время" &&
                                    <div className="absStyle">
                                        <img src={playmarket} alt="playmarket" width="150px" height="48px"/>
                                        <img src={appstore} alt="appstore" width="150px" height="48px" />
                                    </div>
                                }
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}


export default Framer