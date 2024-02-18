import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../Slice/cartSlice";

const ProductCard = () => {
  const items = useSelector(state=>state.allcart.item);
  // const cart=useSelector(state=>state.allcart)
  console.log(items);
  // console.log(cart);
  

  const dispatch=useDispatch()

  return (
    <div>
      <MDBContainer>
        <MDBRow className="mb-4" >
          {
            items.map((post)=>(
          <MDBCol size="3" key={post.id} >
            <MDBCard>
              <MDBCardImage
                src={post.img}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>{post.title}</MDBCardTitle>
                <MDBCardText>
                 {post.price}
                </MDBCardText>
                <MDBBtn onClick={()=>dispatch(addTocart(post))}>Add to cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          ))
            }
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ProductCard;
