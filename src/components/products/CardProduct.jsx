import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./stylesProduct.scss";
import { useState } from "react";
import { formatMoney } from "../../helpers/helper";
import useContextProvider from "../../hooks/useContextProvider.jsx";


const CardProduct = ({product}) => {
    const {addProduct} = useContextProvider()

    const [isHover, setIsHover] = useState(false);

  const ListStars = [];
  let stars = 0;
  const counter = product.stars;

  while (stars < 5) {
    ListStars.push(
      <div className="mx-1" key={stars}>
        <i
          className={counter <= stars ? "bi bi-star" : "bi bi-star-fill"}
          style={{ fontSize: "0.8rem", color: "red" }}
        />
      </div>
    );
    stars++;
  }

  return (
    <div>
      <Card
        sx={{ maxWidth: 345 }}
        className="cardStyle my-5"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <CardActionArea onClick={() => addProduct()} >
          <CardMedia
            component="img"
            height="140"
            image={product.imageUrl}
            alt="Img"
          />
          <CardContent className="d-flex flex-column align-items-center">
            <span>{product.productName}</span>
            <Typography gutterBottom variant="" component="div">
              titulo
            </Typography>
            <div className="d-flex flex-row">{ListStars} </div>
            <span>
              de {formatMoney(product.listPrice) ?? formatMoney(product.price)}
            </span>
            <b>Por ${formatMoney(product.price)}</b>
            <span>
              {product.installments.length >= 0
                ? `o en ${product.installments[0].quantity}x de R ${formatMoney(product.installments[0].value)}`
                : ""}
            </span>
            <div className="py-3" style={{height:'50px'}}>
              {isHover && (
                <button className="btn btn-dark buttonStyle" onClick={() => addProduct()}>
                  Comprar
                </button>
              )}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardProduct;
