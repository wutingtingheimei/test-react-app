import styled from "styled-components";


export const HomeWrapper = styled.div`
.top{
  .banner{
    color: red;
  }

}
.bottom{
  .header{
    color: ${props=>props.theme.color};
    font-size: ${props=>props.theme.size};

  }
  .product-list{
    color: blue;
    .item{

    }
  }

}
`



// 样式的继承
export const HYButton  = styled.button`
border: 1px solid red;
border-radius: 5px;
`


export const HYButtonWrapper = styled(HYButton)`
background-color: #493882;
color: #FFF;
`